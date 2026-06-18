import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  HomeOutlined,
  FileTextOutlined,
  GlobalOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Dashboard from './pages/Dashboard';
import Houses from './pages/Houses';
import HouseEdit from './pages/HouseEdit';
import Blogs from './pages/Blogs';
import BlogEdit from './pages/BlogEdit';
import Translations from './pages/Translations';
import Settings from './pages/Settings';

const { Header, Sider, Content } = Layout;

function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { key: '/dashboard', icon: <DashboardOutlined />, label: <Link to="/dashboard">仪表盘</Link> },
    { key: '/houses', icon: <HomeOutlined />, label: <Link to="/houses">房源管理</Link> },
    { key: '/blogs', icon: <FileTextOutlined />, label: <Link to="/blogs">博客管理</Link> },
    { key: '/translations', icon: <GlobalOutlined />, label: <Link to="/translations">翻译管理</Link> },
    { key: '/settings', icon: <SettingOutlined />, label: <Link to="/settings">站点设置</Link> },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div style={{
          height: '48px', margin: '16px', display: 'flex',
          alignItems: 'center', justifyContent: 'center', color: '#fff',
          fontSize: collapsed ? '14px' : '16px', fontWeight: 'bold',
        }}>
          {collapsed ? 'SH' : 'Swallow Homes'}
        </div>
        <Menu theme="dark" defaultSelectedKeys={['/dashboard']} mode="inline" items={menuItems} />
      </Sider>
      <Layout>
        <Header style={{
          padding: '0 24px', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center',
          background: '#fff',
        }}>
          <span style={{ fontSize: '16px', fontWeight: '600' }}>后台管理系统</span>
          <span style={{ color: '#999', fontSize: '13px' }}>由 Cloudflare Access 保护</span>
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', borderRadius: 8 }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/houses" element={<Houses />} />
            <Route path="/houses/new" element={<HouseEdit />} />
            <Route path="/houses/:id" element={<HouseEdit />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/new" element={<BlogEdit />} />
            <Route path="/blogs/:id" element={<BlogEdit />} />
            <Route path="/translations" element={<Translations />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/admin">
      <Routes>
        <Route path="/*" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
