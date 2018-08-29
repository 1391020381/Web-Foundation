openssl req -x509 -newkey rsa:2048 -nodes -sha256 -keyout localhost-privkey-pem -out localhost-cert.pem


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