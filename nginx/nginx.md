1，需要安装 ngx_openresty 后，内置很多模块才能用
2，怎么给已经存在的nginx 安装模块？
     在nginx 的源码目录执行 ./configure --prefix=/usr/local/openresty/nginx/sbin/nginx --add-module=../ngx_devel_kit --add-module=../encrypted-session-nginx-module 之后 make make install
3，nginx 在执行配置文件时， 依次是 rewrite 阶段、access 阶段以及 content 阶段，所以
` set $a32;`
 `echo $a;    `
 `set$a56;   `
 `echo $a;`
相当于
`    set $a32;`
    `set$a56;`
    `echo $a;`
    `echo $a;`
4，
