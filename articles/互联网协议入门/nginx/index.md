openssl req -x509 -newkey rsa:2048 -nodes -sha256 -keyout localhost-privkey-pem -out localhost-cert.pem

# HTTP协议的cache-control的常见取值及其组合释义
1. no-cache:数据内容不能被缓存,每次请求都重新访问服务器,若有max-age则缓存期间不访问服务器
2. no-store:不仅不能缓存,连暂存也不可以
3. private: 只能在浏览器中缓存,只有第一次请求的时候才访问服务器,
4. public:可以被任何缓存区缓存,如 浏览器、服务器、代理服务器等
5. max-age：相对过期时间,即以秒为单位的缓存时间
Nginx的ngx_http_headers_module模块可以对Cache-Control头相关的东西进行配置
例如：
    # 相关页面设置Cache-Control头信息
    例一：
   if ($request_uri ~* "^/$|^/search/.+/|^/company/.+/") {
     add_header    Cache-Control  max-age=3600;
    }

   例二：

location ~ .*\.(css|js|swf|php|htm|html )$ {
add_header Cache-Control no-store;
}

例三：
location ~ .*\.(js|css)$ {
expires 10d;
}

* [前端工程师学习Nginx入门篇](http://cnt1992.xyz/2016/03/18/simple-intro-to-nginx/)
* [前端工程师学习Nginx实践配置HTTP2.0篇](http://cnt1992.xyz/2016/04/08/upgrade-nginx-to-http2/)