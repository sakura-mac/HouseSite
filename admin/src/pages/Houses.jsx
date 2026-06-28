import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Tag, Popconfirm, message, Input, Grid, Card, List, Image } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { housesApi } from '../api';
import { getImageUrl } from '../utils/imageUrl';

const { useBreakpoint } = Grid;

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
  const screens = useBreakpoint();
  const isMobile = !screens.md;

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

  const renderTags = (tags) => (tags || []).map(t => (
    <Tag key={t} color={TAG_COLORS[t] || 'default'} style={{ marginBottom: 2 }}>
      {TAG_LABELS[t] || t}
    </Tag>
  ));

  const columns = [
    { title: 'ID', dataIndex: 'id', width: 60 },
    {
      title: '封面',
      dataIndex: 'cover',
      width: 80,
      render: (cover) => {
        if (!cover) return <span style={{ color: '#ccc' }}>无</span>;
        const url = getImageUrl(cover);
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
      render: renderTags,
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
        <Input.Search
          placeholder="搜索标题或文件夹名"
          allowClear
          style={{ width: '100%', maxWidth: isMobile ? '100%' : 300 }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Link to="/houses/new">
          <Button type="primary" icon={<PlusOutlined />} style={{ width: 'fit-content' }}>新增房源</Button>
        </Link>
      </div>

      {isMobile ? (
        <List
          loading={loading}
          dataSource={filteredHouses}
          grid={{ gutter: 12, column: 1 }}
          renderItem={(item) => (
            <Card
              size="small"
              style={{ marginBottom: 8 }}
              styles={{ body: { padding: 12 } }}
            >
              <div style={{ display: 'flex', gap: 12 }}>
                {item.cover ? (
                  <img
                    src={getImageUrl(item.cover)}
                    alt=""
                    style={{ width: 72, height: 54, objectFit: 'cover', borderRadius: 4, flexShrink: 0 }}
                  />
                ) : (
                  <div style={{
                    width: 72, height: 54, borderRadius: 4, flexShrink: 0,
                    background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#ccc', fontSize: 12,
                  }}>无</div>
                )}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 4 }}>
                    <span style={{ color: '#999', fontSize: 12 }}>#{item.id}</span>
                    <span style={{
                      fontSize: 14, fontWeight: 500, color: '#333',
                      overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    }}>
                      {item.title}
                    </span>
                  </div>
                  <div style={{ marginBottom: 6 }}>{renderTags(item.tags)}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 12, color: '#999' }}>{item.date}</span>
                    <Space size={4}>
                      <Link to={`/houses/${item.id}`}>
                        <Button size="small" type="link" icon={<EditOutlined />} style={{ padding: '0 4px' }}>编辑</Button>
                      </Link>
                      <Popconfirm title="确定删除？" onConfirm={() => handleDelete(item.id)}>
                        <Button size="small" type="link" danger icon={<DeleteOutlined />} style={{ padding: '0 4px' }}>删除</Button>
                      </Popconfirm>
                    </Space>
                  </div>
                </div>
              </div>
            </Card>
          )}
          pagination={{ pageSize: 10, size: 'small', hideOnSinglePage: true }}
        />
      ) : (
        <Table
          dataSource={filteredHouses}
          columns={columns}
          loading={loading}
          rowKey="id"
          pagination={{ pageSize: 10 }}
          scroll={{ x: 800 }}
        />
      )}
    </div>
  );
}
