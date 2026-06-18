import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Statistic, Table, Tag, Spin } from 'antd';
import { HomeOutlined, FileTextOutlined, TagOutlined, SolutionOutlined } from '@ant-design/icons';
import { dashboardApi } from '../api';

const TAG_LABELS = {
  selling: '在售房源',
  managed: '在管房源',
  sold: '成交案例',
  owned: '自有房源',
};

const TAG_COLORS = {
  selling: 'green',
  managed: 'blue',
  sold: 'gold',
  owned: 'purple',
};

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dashboardApi.get()
      .then(setData)
      .catch((err) => {
        console.error('Dashboard load failed:', err);
        setData({ houseCount: 0, blogCount: 0, visaCount: 0, tagCounts: {}, recentHouses: [] });
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spin size="large" />;

  const tagData = Object.entries(data?.tagCounts || {}).map(([key, count]) => ({
    key,
    tag: key,
    label: TAG_LABELS[key] || key,
    count,
  }));

  const recentColumns = [
    { title: 'ID', dataIndex: 'id', width: 60 },
    { title: '标题', dataIndex: 'title' },
    { title: '更新时间', dataIndex: 'updated_at', width: 180 },
  ];

  return (
    <div>
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col span={6}>
          <Card>
            <Statistic
              title="房源总数"
              value={data?.houseCount || 0}
              prefix={<HomeOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="博客总数"
              value={data?.blogCount || 0}
              prefix={<FileTextOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="签证文章"
              value={data?.visaCount || 0}
              prefix={<SolutionOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="标签种类"
              value={Object.keys(data?.tagCounts || {}).length}
              prefix={<TagOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={10}>
          <Card title="标签分布">
            {tagData.map(item => (
              <div key={item.key} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
                <Tag color={TAG_COLORS[item.tag] || 'default'}>{item.label}</Tag>
                <span style={{ fontWeight: 'bold' }}>{item.count} 套</span>
              </div>
            ))}
          </Card>
        </Col>
        <Col span={14}>
          <Card title="最近更新的房源">
            <Table
              dataSource={data?.recentHouses || []}
              columns={recentColumns}
              pagination={false}
              size="small"
              rowKey="id"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
