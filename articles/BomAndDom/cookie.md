* 如果两个网页的一级域名是相同的,它们可以共享cookie,不过cookie的domain一定要设置为那个一级域名才可以。
* 例如: document.cookie = 'test = true;path:/;domain=store.com'    login.store.com  payment.store.com。


* 举例来说,用户访问网址 www.example.com， 服务器在浏览器写入一个Cookie。这个Cookie就会包含 www.example.com  这个域名,以及根路径 / 。这意味着,这个Cookie对该域名的根路径和它的所有子路劲都有效。如果路径设置
为 /forms  那么这个Cookie只有在访问www.example.com/forums  及其子路径时才有效。   `以后,浏览器一旦访问这个路径,浏览器就会附上这段Cookie发送给服务器`