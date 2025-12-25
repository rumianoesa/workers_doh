# workers_doh

一个基于 Cloudflare Workers 构建的简易 DoH 转发服务。支持 EDNS 客户端子网（需要上游服务器的支持）。访问非 DoH 查询路径时会返回 `400` 状态码。支持替换 DoH 查询路径，避免被主动探测封锁。

## 部署方式

- 创建新的 Workers 项目
- 点击右上角 `编辑代码`
- 复制 [doh.js](https://github.com/rumianoesa/workers_doh/blob/main/doh.js) 代码，`部署`
- 添加变量 `DOH` 和 `TOKEN`
- 添加自定义域或路由

## 变量说明

| 变量名 | 示例 | 必填 | 备注 | 
|--|--|--|--|
| DOH | `dns.google` |✅| 设置上游 DoH 服务（仅支持查询路径为 `/dns-query` 的上游） |
| TOKEN | `google` |❌| 设置 DoH 查询路径（不添加则仍然使用 `/dns-query`） |

## 注意事项

如果不添加 `TOKEN` 变量，仍然使用 `/dns-query` 作为 DoH 查询路径，有被主动探测封锁的风险。
