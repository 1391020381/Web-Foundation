# Nginx作为HTTP服务器的几项基本特性
1. 处理静态文件,索引文件以及自动索引；打开文件描述符缓冲。
2. 无缓存的反向代理加速,简单的负载均衡和容错。
3. FastCGI,简单的负载均衡和容错。
4. 模块换的结构,包括 gzipping ,byte ranges,chunked,responses,以及SSl-filter等 filter。
5. 支持SSL和TLSSNI