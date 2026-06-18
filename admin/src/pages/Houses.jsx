import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Tag, Popconfirm, message, Input } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { housesApi } from '../api';

const TAG_LABELS = {
  selling: '在售房源',
  managed: '在管房源',
  sold: '成交案例',
  owned: '持有房源',
};

const TAG_COLORS = {
  selling: 'green',
  managed: 'blue',
  sold: 'gold',
  owned: 'purple',
};

export default function Houses() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  const loadData = () => {
    setLoading(true);
    housesApi.list()
      .then(setHouses)
      .catch((err) => {
        message.error(err.error || '加载房源列表失败');
        setHouses([]);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => { loadData(); }, []);

  const handleDelete = async (id) => {
    await housesApi.delete(id);
    message.success('删除成功');
    loadData();
  };

  const filteredHouses = houses.filter(h =>
    h.title?.toLowerCase().includes(searchText.toLowerCase()) ||
    h.folder_name?.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    { title: 'ID', dataIndex: 'id', width: 60 },
    {
      title: '封面',
      dataIndex: 'cover',
      width: 80,
      render: (cover) => {
        if (!cover) return <span style={{ color: '#ccc' }}>无</span>;
        const WORKER_URL = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace(/\/api$/, '') : '';
        const url = cover.startsWith('/api/') ? `${WORKER_URL}${cover}` : `${WORKER_URL}/api/images/${cover}`;
        return <img src={url} alt="" style={{ width: 60, height: 40, objectFit: 'cover', borderRadius: 4 }} />;
      },
    },
    { title: '标题', dataIndex: 'title' },
    { title: '作者', dataIndex: 'author', width: 100 },
    { title: '日期', dataIndex: 'date', width: 120 },
    {
      title: '标签',
      dataIndex: 'tags',
      width: 200,
      render: (tags) => (tags || []).map(t => (
        <Tag key={t} color={TAG_COLORS[t] || 'default'} style={{ marginBottom: 2 }}>
          {TAG_LABELS[t] || t}
        </Tag>
      )),
    },
    {
      title: '操作',
      width: 150,
      render: (_, record) => (
        <Space>
          <Link to={`/houses/${record.id}`}>
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
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
        <Input.Search
          placeholder="搜索标题或文件夹名"
          allowClear
          style={{ width: 300 }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Link to="/houses/new">
          <Button type="primary" icon={<PlusOutlined />}>新增房源</Button>
        </Link>
      </div>
      <Table
        dataSource={filteredHouses}
        columns={columns}
        loading={loading}
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
}
