`node Relearn Node`

## NodeJS 是什么？
#### Node.js is a JavaScript runtime built on Chrome's V8.
#### Node.js is uses an event-driven, non-blocking I/O model.
 
> * 阻塞：I/O 时进程休眠等待 I/O 完成进行下一步
> * 非阻塞：I/O 时函数立即返回，进程不等待 I/O 完成

#### 事件驱动

> * I/O 等异步操作结束后的通知
> * 观察者模式

> + 高并发&&I/O密集

#### CPU密集  VS  I/O密集

> * CPU密集： 压缩、解压、加密、解密
> * I/O密集： 文件操作、网络操作、数据库

#### web常见场景

> * 静态资源读取
> * 数据库操作
> * 渲染页面

#### 高并发应对之道

> * 增加机器数 负载均衡
> * 多核机器  cpu数目
> * 单进程

##### 进程： 计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位
##### 多进程： 启动多个进程，多个进程可以一块执行多个任务
##### 线程：进程内一个相对独立、可调度的执行单元，与同属一个进程的线程共享进程的资源
##### 多线程：启动一个进程，在一个进程内启动多个线程，这样，多个线程也可以一块执行多个任务
##### 单线程只是针对主进程，I/O操作系统底层多线程调度
##### 单线程并不是单进程

> Client → Event Loop(single thread) → Non-blocking Worker(internal C++ thread)

###### NodeJS性能好的前提：
> * Web场景
> * 高并发 
> * I/O密集

###### NodeJS应用场景：
> * Web Server
> * 本地代码构建
> * 实用工具开发

#### NodeJS 环境
> * 模块规范：CommonJS
> * 全局对象：global
> * 进程：process

`node --inspect-brk debug.js`

#### CommonJS 
> * NodeJS 模块管理规范
> * 每个文件是一个模块，有自己的作用域
> * 在模块内部 module 变量代表模块本身
> * module.exports 属性代表模块对外接口

##### require 规则
> * / 表示绝对路径， ./ 表示相对与当前文件的
> * 支持js、json、node 扩展名，不写依次尝试
> * 不写路径则认为是 build-in 模块或者各级 node_modules 内的第三方模块
##### require 特征
> * module 被加载的时候执行，加载后缓存(只加载一次，不重复加载)
> * 一旦出现某个模块被循环加载，就只会输出已经执行的部分，还未执行的部分不会输出

#### global 全局对象
> * CommonJS
> * Buffer、process、console
> * timer

#### node调试







