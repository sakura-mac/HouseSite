import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Layout, Menu, Drawer, Button, Grid } from 'antd';
import ErrorBoundary from './ErrorBoundary';
import {
  DashboardOutlined,
  HomeOutlined,
  FileTextOutlined,
  SolutionOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import Dashboard from './pages/Dashboard';
import Houses from './pages/Houses';
import HouseEdit from './pages/HouseEdit';
import Blogs from './pages/Blogs';
import BlogEdit from './pages/BlogEdit';
import Visas from './pages/Visas';
import VisaEdit from './pages/VisaEdit';

const { Header, Sider, Content } = Layout;
const { useBreakpoint } = Grid;

function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const screens = useBreakpoint();

  const menuItems = [
    { key: '/dashboard', icon: <DashboardOutlined />, label: <Link to="/dashboard" onClick={() => setDrawerVisible(false)}>仪表盘</Link> },
    { key: '/houses', icon: <HomeOutlined />, label: <Link to="/houses" onClick={() => setDrawerVisible(false)}>房源管理</Link> },
    { key: '/blogs', icon: <FileTextOutlined />, label: <Link to="/blogs" onClick={() => setDrawerVisible(false)}>博客管理</Link> },
    { key: '/visas', icon: <SolutionOutlined />, label: <Link to="/visas" onClick={() => setDrawerVisible(false)}>签证管理</Link> },
  ];

  const isMobile = !screens.md;

  const sidebarContent = (
    <>
      <div style={{
        height: '48px', margin: '16px', display: 'flex',
        alignItems: 'center', justifyContent: 'center', color: '#fff',
        fontSize: (isMobile ? false : collapsed) ? '14px' : '16px', fontWeight: 'bold',
      }}>
        {(isMobile ? false : collapsed) ? 'SH' : 'Swallow Homes'}
      </div>
      <Menu theme="dark" defaultSelectedKeys={['/dashboard']} mode="inline" items={menuItems} />
    </>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {!isMobile && (
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          {sidebarContent}
        </Sider>
      )}
      <Drawer
        placement="left"
        open={isMobile && drawerVisible}
        onClose={() => setDrawerVisible(false)}
        styles={{ body: { padding: 0, background: '#001529' } }}
        width={220}
        closable={false}
      >
        {sidebarContent}
      </Drawer>
      <Layout>
        <Header style={{
          padding: isMobile ? '0 12px' : '0 24px', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center',
          background: '#fff',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {isMobile && (
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setDrawerVisible(true)}
                style={{ fontSize: 18 }}
              />
            )}
            <span style={{ fontSize: isMobile ? '14px' : '16px', fontWeight: '600' }}>后台管理系统</span>
          </div>
        </Header>
        <Content style={{
          margin: isMobile ? '12px 8px' : '24px 16px',
          padding: isMobile ? 12 : 24,
          background: '#fff', borderRadius: 8,
          overflow: 'auto',
        }}>
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
    <HashRouter>
      <Routes>
        <Route path="/*" element={<AdminLayout />} />
      </Routes>
    </HashRouter>
  );
}