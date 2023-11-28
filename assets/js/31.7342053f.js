(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{527:function(t,e,o){t.exports=o.p+"assets/img/599d0f25gy1fo4m0mlwrjj20ji0hodk4.a739ff1b.jpg"},618:function(t,e,o){"use strict";o.r(e);var s=o(6),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("听说你的 Git 从 "),s("code",[t._v("HTTPS")]),t._v(" 换成 "),s("code",[t._v("SSH")]),t._v(" 之后，小乌龟（ToroiseGit）不能用啦？")]),t._v(" "),s("p",[t._v("如果你的Git仓库之前"),s("code",[t._v("HTTPS")]),t._v("协议用的好好的，换成"),s("code",[t._v("SSH")]),t._v("之后，小乌龟不能用了，提示认证失败，原因很可能是 ToroiseGit 对 SSH 协议支持的问题。")]),t._v(" "),s("p",[t._v("原因如下：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/ysc/APDPlat/wiki/TortoiseGit%E5%AF%86%E9%92%A5%E7%9A%84%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("TortoiseGit密钥的配置"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("全文引用如下：")]),t._v(" "),s("p",[t._v('TortoiseGit使用扩展名为ppk的密钥，而不是ssh-keygen生成的rsa密钥。也就是说使用ssh-keygen -t rsa -C "yourname@yourcompany.com"产生的密钥在TortoiseGit中不能用。而基于github的开发必须要用到rsa密钥，因此需要用到TortoiseGit的putty key generator工具来生成既适用于github的rsa密钥也适用于TortoiseGit的ppk密钥，配置步骤如下：')]),t._v(" "),s("blockquote",[s("p",[t._v("1、运行TortoiseGit开始菜单中的Puttygen程序")])]),t._v(" "),s("blockquote",[s("p",[t._v("2、点击“Generate”按钮，鼠标在上图的空白地方来回移动直到进度条完毕，就会自动生一个随机的key")])]),t._v(" "),s("blockquote",[s("p",[t._v("3、为密钥设置对应的访问密码，在“Key passphrase”和“Confirm passphrase”的后面的输入框中输入密码")])]),t._v(" "),s("blockquote",[s("p",[t._v("4、将多行文本框中以“ssh-rsa”开头的内容全选、复制，并粘贴到github的 Account Settings -> SSH Keys -> Add SSH key -> Key字段中，这就是适用于github的公钥")])]),t._v(" "),s("blockquote",[s("p",[t._v("5、点击“Save private key”按钮,将生成的key保存为适用于TortoiseGit的私钥（扩展名为.ppk）")])]),t._v(" "),s("blockquote",[s("p",[t._v("6、运行TortoiseGit开始菜单中的Pageant程序，程序启动后将自动停靠在任务栏中，双击该图标，弹出key管理列表")])]),t._v(" "),s("blockquote",[s("p",[t._v("7、点击“Add Key”按钮，将第5步保存的ppk私钥添加进来，关闭对话框即可")])]),t._v(" "),s("h3",{attrs:{id:"更简单的解决方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更简单的解决方式"}},[t._v("#")]),t._v(" 更简单的解决方式")]),t._v(" "),s("p",[t._v("更换 ToroiseGit 的 SSH 服务程序")]),t._v(" "),s("p",[s("img",{attrs:{src:o(527),alt:""}})]),t._v(" "),s("p",[t._v("将 SSH 服务程序更换为 Git 原生自带的 "),s("code",[t._v("ssh.exe")]),t._v("\n可以之后输入 "),s("code",[t._v("ssh.exe")]),t._v(" , 或者该文件的全路径（在Git的安装目录下）。")]),t._v(" "),s("hr")])}),[],!1,null,null,null);e.default=r.exports}}]);