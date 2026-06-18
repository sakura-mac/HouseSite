import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import ErrorBoundary from './ErrorBoundary';
import {
  DashboardOutlined,
  HomeOutlined,
  FileTextOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
import Dashboard from './pages/Dashboard';
import Houses from './pages/Houses';
import HouseEdit from './pages/HouseEdit';
import Blogs from './pages/Blogs';
import BlogEdit from './pages/BlogEdit';
import Visas from './pages/Visas';
import VisaEdit from './pages/VisaEdit';

const { Header, Sider, Content } = Layout;

function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { key: '/dashboard', icon: <DashboardOutlined />, label: <Link to="/dashboard">仪表盘</Link> },
    { key: '/houses', icon: <HomeOutlined />, label: <Link to="/houses">房源管理</Link> },
    { key: '/blogs', icon: <FileTextOutlined />, label: <Link to="/blogs">博客管理</Link> },
    { key: '/visas', icon: <SolutionOutlined />, label: <Link to="/visas">签证管理</Link> },
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
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', borderRadius: 8 }}>
          <ErrorBoundary>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/houses" element={<Houses />} />
            <Route path="/houses/new" element={<HouseEdit />} />
            <Route path="/houses/:id" element={<HouseEdit />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/new" element={<BlogEdit />} />
            <Route path="/blogs/:id" element={<BlogEdit />} />
            <Route path="/visas" element={<Visas />} />
            <Route path="/visas/new" element={<VisaEdit />} />
            <Route path="/visas/:id" element={<VisaEdit />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
          </ErrorBoundary>
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