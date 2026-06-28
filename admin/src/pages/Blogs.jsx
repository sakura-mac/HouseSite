import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Tag, Popconfirm, message, Input, Grid, Card, List } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { blogsApi } from '../api';

const { useBreakpoint } = Grid;

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const screens = useBreakpoint();
  const isMobile = !screens.md;

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

  const renderTags = (tags) => (tags || []).map(t => <Tag key={t}>{t}</Tag>);

  const columns = [
    { title: 'ID', dataIndex: 'id', width: 60 },
    { title: '标题', dataIndex: 'title' },
    { title: '作者', dataIndex: 'author', width: 100 },
    { title: '日期', dataIndex: 'date', width: 120 },
    {
      title: '标签',
      dataIndex: 'tags',
      width: 200,
      render: renderTags,
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
          style={{ width: '100%', maxWidth: isMobile ? '100%' : 300 }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Link to="/blogs/new">
          <Button type="primary" icon={<PlusOutlined />} style={{ width: 'fit-content' }}>新增博客</Button>
        </Link>
      </div>

      {isMobile ? (
        <List
          loading={loading}
          dataSource={filteredBlogs}
          grid={{ gutter: 12, column: 1 }}
          renderItem={(item) => (
            <Card size="small" style={{ marginBottom: 8 }} styles={{ body: { padding: 12 } }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                <span style={{
                  fontSize: 14, fontWeight: 500, color: '#333', flex: 1, minWidth: 0,
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                  {item.title}
                </span>
                <span style={{ color: '#999', fontSize: 12, flexShrink: 0, marginLeft: 8 }}>#{item.id}</span>
              </div>
              <div style={{ marginBottom: 6 }}>{renderTags(item.tags)}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 12, color: '#999' }}>{item.author} · {item.date}</span>
                <Space size={4}>
                  <Link to={`/blogs/${item.id}`}>
                    <Button size="small" type="link" icon={<EditOutlined />} style={{ padding: '0 4px' }}>编辑</Button>
                  </Link>
                  <Popconfirm title="确定删除？" onConfirm={() => handleDelete(item.id)}>
                    <Button size="small" type="link" danger icon={<DeleteOutlined />} style={{ padding: '0 4px' }}>删除</Button>
                  </Popconfirm>
                </Space>
              </div>
            </Card>
          )}
          pagination={{ pageSize: 10, size: 'small', hideOnSinglePage: true }}
        />
      ) : (
        <Table
          dataSource={filteredBlogs}
          columns={columns}
          loading={loading}
          rowKey="id"
          pagination={{ pageSize: 10 }}
          scroll={{ x: 700 }}
        />
      )}
    </div>
  );
}
