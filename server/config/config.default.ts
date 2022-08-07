import { SignOptions } from "jsonwebtoken";

export default {
  mongodbUrl: 'mongodb://localhost:27017/cheng',
  mongoOptions: {
    // If not connected, return errors immediately rather than waiting for reconnect
    // bufferMaxEntries: 0,
    // 关闭mongoose缓存model操作的功能
    bufferCommands: false
  },
  jwt: {
    privateKey: 'secret',
    options: {
      expiresIn: '1d'
    } as SignOptions,
    ignoreUrl: ['/api/v1/login', '/api/v1/register']
  }
}