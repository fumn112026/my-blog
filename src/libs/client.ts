import { createClient } from "microcms-js-sdk"; //ES6

// クライアントオブジェクトを作成します。
export const client = createClient({
  serviceDomain: "myteck", // YOUR_DOMAINはXXXX.microcms.ioのXXXXの部分です。
  apiKey: process.env.API_KEY,
  // retry: true // 最大2回まで再試行します。
});
