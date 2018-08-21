* [Docker入门教程](http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html)
# Linux容器
* Linux发展出了另一种虚拟化技术：Linux容器(Linux Containers 缩写为 LXC)。 Linux容器不是模拟一个完整的操作系统，而是对进程进行隔离。或者说,在正常进程的外面套了一个保护层。对于容器里面的进程来说,它接触到各种资源都是虚拟的,从而实现与底层系统的隔离。
# Docker属于Linux容器的一种封装,提供简单易用的容器使用接口。
* Docker将应用程序的依赖,打包在一个文件里面。运行这个文件,就会生成一个虚拟容器。程序在这个虚拟容器运行,就好像在真实的物理机上运行一样。有了Docker,就不用担心环境问题。 