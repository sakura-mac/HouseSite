import React, { useState, useEffect } from 'react';
import { Card, Button, Tabs, Table, Input, message, Space } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { i18nApi } from '../api';

export default function Translations() {
  const [activeLang, setActiveLang] = useState('zh');
  const [data, setData] = useState({ zh: {}, ja: {} });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([i18nApi.get('zh'), i18nApi.get('ja')])
      .then(([zh, ja]) => setData({ zh, ja }))
      .finally(() => setLoading(false));
  }, []);

  // 将嵌套对象扁平化为 key-value 表格行
  const flatten = (obj, prefix = '') => {
    const result = [];
    for (const [key, value] of Object.entries(obj)) {
      const path = prefix ? `${prefix}.${key}` : key;
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        result.push(...flatten(value, path));
      } else {
        result.push({ key: path, value: String(value) });
      }
    }
    return result;
  };

  // 将扁平 key-value 还原为嵌套对象
  const unflatten = (rows) => {
    const result = {};
    for (const row of rows) {
      const parts = row.key.split('.');
      let current = result;
      for (let i = 0; i < parts.length - 1; i++) {
        if (!current[parts[i]]) current[parts[i]] = {};
        current = current[parts[i]];
      }
      current[parts[parts.length - 1]] = row.value;
    }
    return result;
  };

  const [rows, setRows] = useState({ zh: [], ja: [] });

  useEffect(() => {
    setRows({
      zh: flatten(data.zh),
      ja: flatten(data.ja),
    });
  }, [data]);

  const handleValueChange = (lang, key, value) => {
    setRows(prev => ({
      ...prev,
      [lang]: prev[lang].map(r => r.key === key ? { ...r, value } : r),
    }));
  };

  const handleSave = async () => {
    const langData = unflatten(rows[activeLang]);
    await i18nApi.update(activeLang, langData);
    message.success('翻译保存成功');
  };

  const columns = (lang) => [
    { title: 'Key', dataIndex: 'key', width: 250 },
    {
      title: '翻译值',
      dataIndex: 'value',
      render: (_, record) => (
        <Input.TextArea
          autoSize={{ minRows: 1, maxRows: 4 }}
          value={record.value}
          onChange={(e) => handleValueChange(lang, record.key, e.target.value)}
        />
      ),
    },
  ];

  const tabItems = [
    { key: 'zh', label: '中文', children: (
      <Table
        dataSource={rows.zh}
        columns={columns('zh')}
        rowKey="key"
        pagination={false}
        size="small"
        loading={loading}
      />
    )},
    { key: 'ja', label: '日文', children: (
      <Table
        dataSource={rows.ja}
        columns={columns('ja')}
        rowKey="key"
        pagination={false}
        size="small"
        loading={loading}
      />
    )},
  ];

  return (
    <Card
      title="翻译管理"
      extra={
        <Button type="primary" icon={<SaveOutlined />} onClick={handleSave}>
          保存当前语言
        </Button>
      }
    >
      <Tabs activeKey={activeLang} onChange={setActiveLang} items={tabItems} />
    </Card>
  );
}
