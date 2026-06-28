import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Tag, Popconfirm, message, Input } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { visasApi } from '../api';

export default function Visas() {
  const [visas, setVisas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  const loadData = () => {
    setLoading(true);
    visasApi.list()
      .then(setVisas)
      .catch((err) => {
        message.error(err.error || '加载签证列表失败');
        setVisas([]);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => { loadData(); }, []);

  const handleDelete = async (id) => {
    await visasApi.delete(id);
    message.success('删除成功');
    loadData();
  };

  const filteredVisas = visas.filter(v =>
    v.title?.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    { title: 'ID', dataIndex: 'id', width: 60 },
    { title: '标题', dataIndex: 'title' },
    { title: '作者', dataIndex: 'author', width: 100 },
    { title: '日期', dataIndex: 'date', width: 120 },
    {
      title: '标签',
      dataIndex: 'tags',
      width: 200,
      render: (tags) => (tags || []).map(t => <Tag key={t} color="blue">{t}</Tag>),
    },
    {
      title: '操作',
      width: 150,
      render: (_, record) => (
        <Space>
          <Link to={`/visas/${record.id}`}>
            <Button size="small" icon={<EditOutlined />}>编辑</Button>
          </Link>
          <Popconfirm title="确定删除？" onConfirm={() => handleDelete(record.id)}>
            <Button size="small" danger icon={<DeleteOutlined />}>删除</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
        <Input.Search
          placeholder="搜索标题"
          allowClear
          style={{ width: '100%', maxWidth: 300 }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Link to="/visas/new">
          <Button type="primary" icon={<PlusOutlined />} style={{ width: 'fit-content' }}>新增签证文章</Button>
        </Link>
      </div>
      <Table
        dataSource={filteredVisas}
        columns={columns}
        loading={loading}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        scroll={{ x: 700 }}
      />
    </div>
  );
}
