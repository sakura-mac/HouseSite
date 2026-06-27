import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Card, Select, DatePicker, Upload, message, Space, Row, Col } from 'antd';
import { UploadOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import dayjs from 'dayjs';
import { visasApi, uploadApi } from '../api';
import { getImageUrl } from '../utils/imageUrl';
import { useMarkdownUpload } from '../hooks/useMarkdownUpload';
import EmojiBar from '../components/EmojiBar';

const { TextArea } = Input;

export default function VisaEdit() {
  const { id } = useParams();
  const isEdit = !!id;
  const [form] = Form.useForm();
  const [content, setContent] = useState('');
  const [coverKey, setCoverKey] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit) {
      visasApi.get(id).then(data => {
        form.setFieldsValue({
          ...data,
          date: data.date ? dayjs(data.date) : null,
        });
        setContent(data.content || '');
        const cover = data.cover || '';
        setCoverKey(cover);
        if (cover) setCoverUrl(getImageUrl(cover));
      }).catch(err => {
        message.error(err.error || '加载签证数据失败');
      });
    }
  }, [id]);

  const { handleDrop, handlePaste } = useMarkdownUpload(
    'visas',
    () => form.getFieldValue('folder_name')
  );

  const handleCoverUpload = async (file) => {
    const folderName = form.getFieldValue('folder_name') || 'misc';
    const hide = message.loading('正在压缩图片为 WebP...', 0);
    try {
      const res = await uploadApi.upload(file, 'visas', folderName);
      setCoverKey(res.key);
      setCoverUrl(getImageUrl(res.key));
      hide();
      message.success(`封面上传成功（WebP, ${(res.size / 1024).toFixed(0)}KB）`);
    } catch (err) {
      hide();
      message.error(err.error || '上传失败');
    }
    return false;
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setSaving(true);
      const payload = {
        ...values,
        date: values.date ? values.date.format('YYYY-MM-DD') : new Date().toISOString().slice(0, 10),
        tags: values.tags || [],
        content,
        cover: coverKey,
      };
      if (isEdit) {
        await visasApi.update(id, payload);
        message.success('保存成功');
      } else {
        await visasApi.create(payload);
        message.success('创建成功');
      }
      navigate('/visas');
    } catch (err) {
      if (err.errorFields) return;
      message.error(err.error || '保存失败');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Button icon={<ArrowLeftOutlined />} onClick={() => navigate('/visas')}>返回列表</Button>
        <span style={{ fontSize: 18, fontWeight: 600 }}>{isEdit ? '编辑签证文章' : '新增签证文章'}</span>
      </Space>

      <Row gutter={24}>
        <Col span={10}>
          <Card title="基本信息">
            <Form form={form} layout="vertical" initialValues={{ author: '李 小燕' }}>
              <Form.Item name="title" label="标题" rules={[{ required: true, message: '请输入标题' }]}>
                <Input placeholder="签证文章标题" />
              </Form.Item>
              <Form.Item name="folder_name" label="文件夹标识" extra="用于URL路径，留空则自动生成">
                <Input />
              </Form.Item>
              <Form.Item name="author" label="作者">
                <Input />
              </Form.Item>
              <Form.Item name="date" label="发布日期">
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item name="description" label="一句话描述">
                <TextArea rows={2} />
              </Form.Item>
              <Form.Item name="tags" label="标签">
                <Select mode="tags" placeholder="输入标签" />
              </Form.Item>
            </Form>
          </Card>

          <Card title="封面图" style={{ marginTop: 16 }}>
            {coverUrl && (
              <img src={coverUrl} alt="封面" style={{ width: '100%', borderRadius: 8, marginBottom: 12 }} />
            )}
            <Upload accept="image/*" showUploadList={false} beforeUpload={handleCoverUpload}>
              <Button icon={<UploadOutlined />}>上传封面图</Button>
            </Upload>
          </Card>
        </Col>

        <Col span={14}>
          <Card title="签证文章正文（Markdown）" bodyStyle={{ padding: 0 }}>
            <div data-color-mode="light" onDrop={(e) => handleDrop(e, content, setContent)} onPaste={(e) => handlePaste(e, content, setContent)}>
<EmojiBar content={content} setContent={setContent} />
<MDEditor value={content} onChange={setContent} height={600} preview="live" />
            </div>
            <div style={{ padding: '8px 16px', background: '#fafafa', fontSize: 12, color: '#999' }}>
              提示：可直接拖拽或粘贴图片到编辑器中，自动压缩为 WebP 并上传；也支持 ![](图片URL) 语法
            </div>
          </Card>
        </Col>
      </Row>

      <div style={{ marginTop: 24, textAlign: 'center' }}>
        <Space>
          <Button size="large" onClick={() => navigate('/visas')}>取消</Button>
          <Button size="large" type="primary" loading={saving} onClick={handleSubmit}>
            {isEdit ? '保存修改' : '创建文章'}
          </Button>
        </Space>
      </div>
    </div>
  );
}
