* I/O是昂贵的，分布式I/O更是昂贵的
* 利用单线程,远离多线程死锁、状态同步等问题。利用异步I/O,让单线程远离阻塞,以更好地使用CPU
* 任意技术都并非完美的。阻塞I/O造成cpu的等待浪费,非阻塞带来的麻烦却是需要轮询出确认完全完成数据的获取。它会让CPU处理状态判断,是对CPUT资源的浪费。

* `在Linux下存在这样一种方式,它原生提供的一种异步I/O方式(AIO)就是通过信号或回调来传递数据的`只有在Linux下有,而且还有缺陷,AIO仅支持I/O中的O_EIRECT方式读取，导致无法利用系统缓存。