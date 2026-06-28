import React, { useState } from 'react';
import { Card, Input, Button, message, Typography } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../api';

export default function Login() {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!token.trim()) {
      message.warning('请输入管理密钥');
      return;
    }
    setLoading(true);
    authApi.login(token.trim());
    message.success('登录成功');
    navigate('/dashboard');
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex',
      justifyContent: 'center', alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: 16,
    }}>
      <Card style={{ width: '100%', maxWidth: 400, boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h2 style={{ margin: 0, fontSize: 24, color: '#333' }}>Swallow Homes</h2>
          <Typography.Text type="secondary">后台管理系统</Typography.Text>
        </div>
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="请输入管理密钥"
          size="large"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          onPressEnter={handleLogin}
        />
        <Button
          type="primary"
          size="large"
          block
          style={{ marginTop: 16 }}
          loading={loading}
          onClick={handleLogin}
        >
          登录
        </Button>
        <Typography.Text type="secondary" style={{ display: 'block', textAlign: 'center', marginTop: 16, fontSize: 12 }}>
          提示：启用 Cloudflare Access 后，此页面会被 Access 保护，无需手动输入密钥。
        </Typography.Text>
      </Card>
    </div>
  );
}