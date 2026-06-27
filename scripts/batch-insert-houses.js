#!/usr/bin/env node
// 批量创建缺失物件
const houses = [
  { title: 'Rita Hotel Namba', tags: ['owned'], desc: 'スワローホームズ株式会社の所有物件' },
  { title: 'ルナメゾン芦屋', tags: ['owned'], desc: 'スワローホームズ株式会社の所有物件' },
  { title: '新開地店舗', tags: ['owned'], desc: 'スワローホームズ株式会社の所有物件' },
  { title: '鈴蘭台一戸建', tags: ['owned'], desc: 'スワローホームズ株式会社の所有物件' },
  { title: '陸ノ町店舗', tags: ['owned'], desc: 'スワローホームズ株式会社の所有物件' },
  { title: '山手ダイヤハイツB棟（区分）', tags: ['owned'], desc: 'スワローホームズ株式会社の所有物件' },
  { title: 'CASAIKUMATA II', tags: ['owned'], desc: 'スワローホームズ株式会社の所有物件' },
  { title: 'プリオーレ神戸山ノ手（区分）', tags: ['owned'], desc: 'スワローホームズ株式会社の所有物件' },
  { title: '芦屋市月若町一戸建', tags: ['owned'], desc: 'スワローホームズ株式会社の所有物件' },
  { title: '白川台住居（区分）', tags: ['owned'], desc: 'スワローホームズ株式会社の所有物件' },
  { title: 'コワロード王子', tags: ['owned'], desc: 'スワローホームズ株式会社の所有物件' },
  { title: '朝日プラザ高津III', tags: ['managed'], desc: 'スワローホームズ株式会社の管理物件' },
  { title: 'リビエール芦屋', tags: ['managed'], desc: 'スワローホームズ株式会社の管理物件' },
  { title: '山手ダイヤハイツB棟 22室', tags: ['managed'], desc: 'スワローホームズ株式会社の管理物件' },
];

const API = 'https://swallowhomes.com/api/houses';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'Sw@ll0w2026!Admin';

async function main() {
  for (const h of houses) {
    const body = {
      folder_name: h.title,
      title: h.title,
      date: '2026-06-01',
      author: '李 小燕',
      description: h.desc,
      category: '',
      tags: h.tags,
      content: '物件情報準備中。詳細についてはお問い合わせください。',
      cover: '',
      sort_order: 0,
    };
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(ADMIN_TOKEN ? { Authorization: `Bearer ${ADMIN_TOKEN}` } : {}),
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      console.log(`${h.title}: ${res.status} ${JSON.stringify(data)}`);
    } catch (err) {
      console.error(`${h.title}: ERROR ${err.message}`);
    }
  }
}
main();
