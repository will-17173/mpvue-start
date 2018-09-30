import env from './env';

const host = {
  dev: '/api',
  test: '',
  prod: '',
} [env];
const apiVersion = '/v1'; // 接口版本

const config = {
  version: 'v1.0.0',
  baseSDKVersion: '', // 基础库最低版本
  services: { // 接口地址
    host,
    home: `${host}/${apiVersion}/home`,
  },
  constants: {
    // 通过分享消息进小程序的场景值
    SHARE_SCENE_CODE: [
      1017, // 前往体验版入口
      1007, // 单人聊天会话中的小程序消息卡片
      1008, // 群聊会话中的小程序消息卡片
      1036, // App 分享消息卡片
      1011, // 扫描二维码
      1012, // 长按识别二维码
      1013, // 手机相册识别二维码
      1044, // 带 shareTicket 的小程序消息卡片
      1047, // 扫描小程序码
      1048, // 长按图片识别小程序码
      1049, // 手机相册选取小程序码
      1014, // 小程序模版消息
    ],
  },
};

export default config;
