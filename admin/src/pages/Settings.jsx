import React, { useState, useEffect } from 'react';
import { Card, Form, Input, Button, message } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { settingsApi } from '../api';

export default function Settings() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    settingsApi.get().then(data => {
      form.setFieldsValue(data);
    }).finally(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    const values = await form.validateFields();
    setSaving(true);
    await settingsApi.update(values);
    message.success('保存成功');
    setSaving(false);
  };

  return (
    <Card
      title="站点设置"
      loading={loading}
      extra={<Button type="primary" icon={<SaveOutlined />} loading={saving} onClick={handleSave}>保存</Button>}
    >
      <Form form={form} layout="vertical" style={{ maxWidth: 600 }}>
        <Form.Item name="contact_email" label="联系邮箱">
          <Input placeholder="88swallow@gmail.com" />
        </Form.Item>
        <Form.Item name="contact_phone" label="联系电话">
          <Input placeholder="078-891-7099" />
        </Form.Item>
        <Form.Item name="contact_address" label="联系地址">
          <Input.TextArea rows={2} placeholder="公司地址" />
        </Form.Item>
        <Form.Item name="whatsapp" label="WhatsApp">
          <Input placeholder="WhatsApp 号码或链接" />
        </Form.Item>
        <Form.Item name="wechat" label="微信">
          <Input placeholder="微信号或二维码图片链接" />
        </Form.Item>
        <Form.Item name="line" label="LINE">
          <Input placeholder="LINE 号码或链接" />
        </Form.Item>
        <Form.Item name="xiaohongshu" label="小红书">
          <Input placeholder="小红书主页链接" />
        </Form.Item>
      </Form>
    </Card>
  );
}
