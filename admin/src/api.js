import axios from 'axios';
import { compressToWebP } from './utils/imageCompress';

// API 基础地址
// 开发环境通过 Vite proxy 代理到 localhost:8787 (wrangler dev)
// 生产环境直接调用 Worker URL
const API_BASE = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 30000,
});

// 请求拦截：附加 token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 响应拦截：统一错误处理
api.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err.response?.status === 401) {
      // 登录页已移除，鉴权由 Cloudflare Access 处理
      // 不再刷新页面，仅清理 token，交由 Cloudflare Access 重定向
      localStorage.removeItem('admin_token');
    }
    return Promise.reject(err.response?.data || err);
  }
);

// ============ 房源 ============
export const housesApi = {
  list: (params) => api.get('/houses', { params }),
  get: (id) => api.get(`/houses/${id}`),
  create: (data) => api.post('/houses', data),
  update: (id, data) => api.put(`/houses/${id}`, data),
  delete: (id) => api.delete(`/houses/${id}`),
};

// ============ 博客 ============
export const blogsApi = {
  list: (params) => api.get('/blogs', { params }),
  get: (id) => api.get(`/blogs/${id}`),
  create: (data) => api.post('/blogs', data),
  update: (id, data) => api.put(`/blogs/${id}`, data),
  delete: (id) => api.delete(`/blogs/${id}`),
};

// ============ 签证 ============
export const visasApi = {
  list: (params) => api.get('/visas', { params }),
  get: (id) => api.get(`/visas/${id}`),
  create: (data) => api.post('/visas', data),
  update: (id, data) => api.put(`/visas/${id}`, data),
  delete: (id) => api.delete(`/visas/${id}`),
};

// ============ 图片上传（自动压缩为 WebP） ============
export const uploadApi = {
  upload: async (file, type, folderName) => {
    // 先压缩为 WebP
    const webpFile = await compressToWebP(file);
    const formData = new FormData();
    formData.append('file', webpFile);
    formData.append('type', type);
    formData.append('folder_name', folderName);
    return api.post('/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
};

// ============ 翻译 ============
export const i18nApi = {
  get: (lang) => api.get(`/i18n/${lang}`),
  update: (lang, data) => api.put(`/i18n/${lang}`, data),
};

// ============ 设置 ============
export const settingsApi = {
  get: () => api.get('/settings'),
  update: (data) => api.put('/settings', data),
};

// ============ 仪表盘 ============
export const dashboardApi = {
  get: () => api.get('/dashboard'),
};

// ============ 登录 ============
export const authApi = {
  login: (token) => {
    localStorage.setItem('admin_token', token);
  },
  logout: () => {
    localStorage.removeItem('admin_token');
  },
  isLoggedIn: () => !!localStorage.getItem('admin_token'),
};

export default api;
