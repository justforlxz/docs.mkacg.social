# 服务架构

## 服务供应商

| 服务           | 供应商          | 注册地     |
| -------------- | --------------- | ---------- |
| 域名注册商     | Alibaba LLC     | 中国 :zh:  |
| 域名解析与 CDN | Cloudflare, Inc | 美国 :us:  |
| 服务器         | Self            | 书房 :bed: |

## 服务关系

| 内部代号 | 承载的服务 | 功能        |
| -------- | ---------- | ----------- |
| d-1      | Misskey    | 集群 Master |
| d-2      | Misskey    | 集群 Node   |

## 服务器配置

| 内部代号 | 类型       | 所在机房         | 处理器               | 内存                    | 硬盘               |
| -------- | ---------- | ---------------- | -------------------- | ----------------------- | ------------------ |
| d-1      | 独立服务器 | 杂货间床下 :bed: | Intel Xeon E5-2560v3 | 32 GB ECC 1333 MHz      | 8T \* 3 raidz1 HDD |
| d-2      | 独立服务器 | 杂货间床下 :bed: | Intel I7 10th        | 32 GB 1333 MHz(Tsic404) | NFS                |