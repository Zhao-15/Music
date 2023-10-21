import axios from 'axios';

const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});

// 获取榜单详情
export const getToplistDetail = () => http.get('/toplist/detail');

// 获取榜单播放列表
export const getPluylistDetail = (params) => http.get('/playlist/detail', { params });

// 获取生成二维码所需的key
export const createLoginQrKey = () => http.get('/login/qr/key');
// 扫码登陆的二维码
export const createLoginQrimg = (params) => http.get('/login/qr/create', { params });
// 二维码检测扫码状态接口
export const checkLoginQr = (params) => http.get('/login/qr/check', { params });
