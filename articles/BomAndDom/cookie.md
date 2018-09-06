* 如果两个网页的一级域名是相同的,它们可以共享cookie,不过cookie的domain一定要设置为那个一级域名才可以。
* 例如: document.cookie = 'test = true;path:/;domain=store.com'    login.store.com  payment.store.com。