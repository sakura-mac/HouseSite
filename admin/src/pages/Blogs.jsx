import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Tag, Popconfirm, message, Input } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { blogsApi } from '../api';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  const loadData = () => {
    setLoading(true);
    blogsApi.list()
      .then(setBlogs)
      .catch((err) => {
        message.error(err.error || '加载博客列表失败');
        setBlogs([]);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => { loadData(); }, []);

  const handleDelete = async (id) => {
    await blogsApi.delete(id);
    message.success('删除成功');
    loadData();
  };

  const filteredBlogs = blogs.filter(b =>
    b.title?.toLowerCase().includes(searchText.toLowerCase())
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
      render: (tags) => (tags || []).map(t => <Tag key={t}>{t}</Tag>),
    },
    {
      title: '操作',
      width: 150,
      render: (_, record) => (
        <Space>
          <Link to={`/blogs/${record.id}`}>
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
        <Link to="/blogs/new">
          <Button type="primary" icon={<PlusOutlined />} style={{ width: 'fit-content' }}>新增博客</Button>
        </Link>
      </div>
      <Table
        dataSource={filteredBlogs}
        columns={columns}
        loading={loading}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        scroll={{ x: 700 }}
      />
    </div>
  );
}
