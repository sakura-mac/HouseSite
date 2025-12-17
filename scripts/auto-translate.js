'use strict';

const fs = require('fs');
const path = require('path');
const axios = require('axios');

const localeDir = path.join(__dirname, '..', 'src', 'i18n', 'locales');
const sourceLocale = 'zh';
const targetLocale = process.argv[2] || 'ja';
const dryRun = process.argv.includes('--dry-run');
const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;

const readJson = (locale) => {
  const file = path.join(localeDir, `${locale}.json`);
  return JSON.parse(fs.readFileSync(file, 'utf8'));
};

const writeJson = (locale, data) => {
  const file = path.join(localeDir, `${locale}.json`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
};

const isObject = (val) => val && typeof val === 'object' && !Array.isArray(val);

const protectPlaceholders = (text) => {
  const tokens = [];
  const masked = text.replace(/\{[^}]+\}/g, (match, idx) => {
    const token = `__PH_${tokens.length}__`;
    tokens.push({ token, value: match });
    return token;
  });
  const restore = (translated) => {
    let out = translated;
    tokens.forEach(({ token, value }) => {
      out = out.replace(token, value);
    });
    return out;
  };
  return { masked, restore };
};

const translateText = async (text) => {
  if (!apiKey) {
    return `[${targetLocale.toUpperCase()} TODO] ${text}`;
  }
  const { masked, restore } = protectPlaceholders(text);
  const url = 'https://translation.googleapis.com/language/translate/v2';
  const res = await axios.post(
    url,
    {
      q: masked,
      target: targetLocale,
      source: sourceLocale,
      format: 'text',
      model: 'nmt',
    },
    { params: { key: apiKey } }
  );
  const translated = res.data.data.translations[0].translatedText;
  return restore(translated);
};

const walk = async (srcNode, tgtNode, pathParts, report) => {
  if (typeof srcNode === 'string') {
    if (tgtNode === undefined || tgtNode === '') {
      const keyPath = pathParts.join('.');
      const translated = await translateText(srcNode);
      report.missing.push(keyPath);
      return translated;
    }
    return tgtNode;
  }

  if (Array.isArray(srcNode)) {
    // Arrays: if target missing, copy source; otherwise keep target.
    return tgtNode !== undefined ? tgtNode : srcNode;
  }

  if (isObject(srcNode)) {
    const out = isObject(tgtNode) ? { ...tgtNode } : {};
    for (const key of Object.keys(srcNode)) {
      out[key] = await walk(srcNode[key], out[key], [...pathParts, key], report);
    }
    return out;
  }

  return tgtNode !== undefined ? tgtNode : srcNode;
};

async function main() {
  const source = readJson(sourceLocale);
  const target = readJson(targetLocale);
  const report = { missing: [] };

  const filled = await walk(source, target, [targetLocale], report);

  if (report.missing.length === 0) {
    console.log('No missing keys detected.');
    return;
  }

  console.log(`Filled ${report.missing.length} keys for locale '${targetLocale}':`);
  report.missing.forEach((k) => console.log(` - ${k}`));

  if (dryRun) {
    console.log('Dry-run mode; no files written.');
    return;
  }

  writeJson(targetLocale, filled);
  console.log(`Updated ${targetLocale}.json saved to ${localeDir}`);
  if (!apiKey) {
    console.log('Note: GOOGLE_TRANSLATE_API_KEY not set; placeholders were prefixed with TODO.');
  }
}

main().catch((err) => {
  console.error('Auto-translate failed:', err.message);
  process.exit(1);
});
