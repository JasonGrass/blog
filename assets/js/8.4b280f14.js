(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{548:function(t,s,a){t.exports=a.p+"assets/img/2018-11-16-10-49-38.606d9841.png"},549:function(t,s,a){t.exports=a.p+"assets/img/2018-11-16-11-23-49.9db04bef.png"},550:function(t,s,a){t.exports=a.p+"assets/img/2018-11-16-11-25-02.1c1f76b5.png"},551:function(t,s,a){t.exports=a.p+"assets/img/2018-11-16-11-28-05.5346cfdd.png"},552:function(t,s,a){t.exports=a.p+"assets/img/2018-11-16-11-29-23.cf785453.png"},553:function(t,s,a){t.exports=a.p+"assets/img/2018-11-16-12-03-22.b212041f.png"},554:function(t,s,a){t.exports=a.p+"assets/img/2018-11-16-12-11-10.2bce78c4.png"},636:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("Windows 消息循环 && 消息循环在 WPF 中的应用")]),t._v(" "),n("p",[t._v("使用 EN5 课件获得更好的阅读体验：")]),t._v(" "),n("p",[t._v("【希沃白板5】课件分享 : 《Windows培训 - 消息循环》\n"),n("a",{attrs:{href:"https://r302.cc/q2d1jB",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://r302.cc/q2d1jB"),n("OutboundLink")],1),t._v("\n点击链接直接预览课件")]),t._v(" "),n("h1",{attrs:{id:"_1-程序是怎么跑起来的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-程序是怎么跑起来的"}},[t._v("#")]),t._v(" 1 程序是怎么跑起来的？")]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Program")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token return-type class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello Cvte."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这是一段 C# Main 函数，如果不写 "),n("code",[t._v("Console.ReadLine();")]),t._v(" ，则程序会“一闪而过”，写了 "),n("code",[t._v("Console.ReadLine();")]),t._v(" 程序会阻塞，可以查看结果。\n下面看一段复杂一点点的：")]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[t._v("Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Starting, Input Something:"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" input "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsNullOrWhiteSpace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token interpolation-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('$"Your Input to lower is:')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token expression language-csharp"}},[t._v("input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToLower")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You Inputted Nothing"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这里有一个 "),n("code",[t._v("while")]),t._v(" 循环，这样程序就可以一直运行了，我们可以说：这个程序由这个 while 循环驱动。")]),t._v(" "),n("p",[t._v("那，Windows 程序是由什么驱动的，答案呼之欲出：“消息循环”。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(548),alt:""}})]),t._v(" "),n("h1",{attrs:{id:"_2-消息循环的数据结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-消息循环的数据结构"}},[t._v("#")]),t._v(" 2 消息循环的数据结构")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    HWND hwnd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 消息的目标窗口句柄")]),t._v("\n    UINT message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 消息标识")]),t._v("\n    WPARAM wParam"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 16位的参数")]),t._v("\n    LPARAM lParam"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 32位的参数")]),t._v("\n    DWORD time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 消息发生的时间")]),t._v("\n    POINT pt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 消息发生时，鼠标的屏幕坐标")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" MSG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("PMSG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),n("h2",{attrs:{id:"_2-1-消息的分类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-消息的分类"}},[t._v("#")]),t._v(" 2.1 消息的分类")]),t._v(" "),n("p",[t._v("消息的取值范围是 0x0000 - 0xFFFF。")]),t._v(" "),n("p",[t._v("从 0x0000 到 0x03FF，为系统定义的消息，常见的 WM_PAINT、WM_CREATE 等均在其中；\n从 0x0400 到 0x7FFF，专用于用户自定义的消息，可以使用 WM_USER + x 的形式自行定义，其中WM_USER 的值就是 0x0400，x 取一个整数；\n从 0x8000 到 0xBFFF，从 Windows 95 开始，也用作用户自定义的消息范围，可以使用 WM_APP + x 的形式自行定义。\n根据微软的建议，WM_APP类消息用于程序之间的消息通信，而 WM_USER 类消息则最好用于某个特定的窗口类。\n微软自己遵循这一惯例，所以，公用控件的消息，如 TVM_DELETEITEM，基本都是 WM_USER 类属。\n从 0xC000 到 0xFFFF，这个区段的消息值保留给 RegisterWindowMessage 这个 API，此 API 可以接受一个字符串，把它变换成一个唯一的消息值。")]),t._v(" "),n("h1",{attrs:{id:"_3-消息的处理流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-消息的处理流程"}},[t._v("#")]),t._v(" 3 消息的处理流程")]),t._v(" "),n("p",[t._v("消息产生 => 消息队列 => 消息循环 => 消息处理")]),t._v(" "),n("h2",{attrs:{id:"_3-1-消息产生"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-消息产生"}},[t._v("#")]),t._v(" 3.1 消息产生")]),t._v(" "),n("p",[t._v("消息产生的源头")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("系统\n一部分由输入设备（键盘鼠标等）产生，如 WM_MOUSEMOVE 。"),n("br"),t._v("\n一部分由系统User库自己产生，User部分（或者是系统内的其他部分通过User部分）为了实现自身的正常行为或者管理功能而主动生成的。如 WM_WINDOWPOSCHANGED。")])]),t._v(" "),n("li",[n("p",[t._v("应用程序自定义的消息")])])]),t._v(" "),n("p",[t._v("消息产生的方式")]),t._v(" "),n("p",[t._v("这里说主要的两个消息产生函数")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("SendMessage\n等待消息处理完成后，SendMessage才返回。\n深入一点的表达式：等待窗口处理函数返回后，SendMessage才返回。")])]),t._v(" "),n("li",[n("p",[t._v("PostMessage\n不等待消息处理完成，立刻返回。\nPostMessage只管发送消息，消息有没有被送到则并不关心，只要发送了消息，便立刻返回。")])])]),t._v(" "),n("p",[t._v("两个问题：\n问：消息产生之后到了哪里？"),n("br"),t._v("\n答：消息队列。")]),t._v(" "),n("p",[t._v("问：SendMessage 产生的消息，会进入消息队列吗？\n答：在同一个线程内，SendMessage 会直接调用目标窗口的窗口过程函数处理消息，并等待其返回。\n跨线程的情况，SendMessage 会将消息发送到目标线程的消息队列（高优先级，排序在前）。然后等待目标线程的返回值。")]),t._v(" "),n("h2",{attrs:{id:"_3-2-消息队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-消息队列"}},[t._v("#")]),t._v(" 3.2 消息队列")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("系统消息队列\n接收输入设备的消息，分配给线程消息队列。"),n("br"),t._v("\n输入设备（键盘、鼠标或者其他）的驱动程序会把用户的操作输入转化成消息放置于系统队列中，然后系统会把此消息转到目标窗口所在线程的消息队列中等待处理。")])]),t._v(" "),n("li",[n("p",[t._v("线程(UI)消息队列\n当前UI线程中的消息。"),n("br"),t._v("\n每一个GUI线程都会维护这样一个线程消息队列。（这个队列只有在线程调用 User 或者 GDI 函数时才会创建，默认并不创建）。然后线程消息队列中的消息会被本线程的消息循环（有时也被称为消息泵）派送到相应的窗口过程（也叫窗口回调函数）处理。")])])]),t._v(" "),n("p",[t._v("两个问题：\n问：消息队列属于谁？"),n("br"),t._v("\n答：属于UI线程（不属于窗口）。")]),t._v(" "),n("p",[t._v("问：非UI线程有消息队列吗？\n没有。")]),t._v(" "),n("h2",{attrs:{id:"_3-3-消息循环"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-消息循环"}},[t._v("#")]),t._v(" 3.3 消息循环")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetMessage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("TranslateMessage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("DispatchMessage")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   \n")])])]),n("p",[t._v("如上，消息循环就是一个 while 循环，与文章最开始提到 while 向呼应。"),n("br"),t._v("\n其中 "),n("code",[t._v("GetMessage")]),t._v(" 取出消息，"),n("code",[t._v("TranslateMessage")]),t._v(" 翻译消息，"),n("code",[t._v("DispatchMessage")]),t._v(" 调度消息。")]),t._v(" "),n("p",[t._v("问：消息循环属于谁？"),n("br"),t._v("\n答：每一个UI线程有一个消息循环（不是每一个窗口。）")]),t._v(" "),n("p",[t._v("消息循环的另一个样子：")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("done"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("PeekMessage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PM_REMOVE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" WM_QUIT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            done "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TRUE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("TranslateMessage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("DispatchMessage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 还可以驱动点别的事情，如 openGL 绘图。")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("分别来看：")]),t._v(" "),n("ul",[n("li",[t._v("取出消息")])]),t._v(" "),n("p",[t._v("GetMessage"),n("br"),t._v("\nGetMessage会阻塞等待，直到取到一个消息。")]),t._v(" "),n("p",[t._v("PeekMessage\nPeekMessage则不阻塞，立即返回。"),n("br"),t._v("\nPeekMessage有一个标志参数，这个标志参数指定了如果队列中如果有消息的话，PeekMessage 的行为。\n如果该标志中含有 PM_REMOVE，则 PeekMessage 会把新消息返回到 MSG 结构中，正如 GetMessage 的行为那样。\n如果标志中指定了 PM_NOREMOVE，则不会从消息队列中移除任何消息。")]),t._v(" "),n("ul",[n("li",[t._v("翻译消息\n望文生义地看，翻译消息是对消息数据结构进行某种转换吗？"),n("br"),t._v("\n不是的，TranslateMessage不修改原有消息，只在特定情况下产生新的消息。")])]),t._v(" "),n("p",[t._v("TranslateMessage函数不修改由参数lpMsg指向的消息结构。"),n("br"),t._v("\n仅为那些由键盘驱动器映射为ASCII字符的键产生WM_CHAR消息。"),n("br"),t._v("\n如："),n("br"),t._v("\n消息WM_KEYDOWN和WM_KEYUP组合产生一个WM_CHAR或WM_DEADCHAR消息。"),n("br"),t._v("\n消息WM_SYSKEYDOWN和WM_SYSKEYUP组合产生一个WM_SYSCHAR或 WM_SYSDEADCHAR 消息。")]),t._v(" "),n("p",[t._v("所以，如果程序中没有字符处理的需要，这句是可以不要的。")]),t._v(" "),n("ul",[n("li",[t._v("分派消息\n将消息分配给 hwnd 指定的窗口函数，让其处理。"),n("br"),t._v("\n如果没有找到对应的窗口，则丢弃。")])]),t._v(" "),n("h2",{attrs:{id:"_3-4-消息处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-消息处理"}},[t._v("#")]),t._v(" 3.4 消息处理")]),t._v(" "),n("p",[t._v("消息在消息循环中被分配到指定的窗口过程函数，由其处理。")]),t._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有删减的窗口过程函数")]),t._v("\nLRESULT CALLBACK "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WndProc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HWND hWnd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" UINT message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" WPARAM wParam"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LPARAM lParam"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" WM_COMMAND"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" WM_PAINT"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" WM_CREATE"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("DefWindowProc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hWnd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" wParam"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lParam"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("回顾两个问题：\n问：WndProc 函数由谁调用？\n答：DispatchMessage or SendMessage。\n从上文中可以看到，窗口过程函数不是有程序员自己调用的，而是系统在恰当的时机调用，这个时机就是 DispatchMessage or SendMessage。")]),t._v(" "),n("p",[t._v("问：未处理的消息交给谁？\n答：DefWindowProc。\nDefWindowProc只处理关闭等感兴趣的消息，其它的消息则忽略。")]),t._v(" "),n("h2",{attrs:{id:"回顾"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#回顾"}},[t._v("#")]),t._v(" 回顾")]),t._v(" "),n("p",[t._v("消息队列和消息循环属于UI线程，窗口没有，其它普通线程没有。"),n("br"),t._v("\n窗口有自己的窗口过程函数，消息在这里被处理。"),n("br"),t._v("\n消息循环驱动整个程序跑起来。")]),t._v(" "),n("p",[t._v("想一睹消息循环究竟是如何跑起来的？\n原始 win32 窗口是如何被创建的？")]),t._v(" "),n("p",[t._v("在 VS 中，新建一个win32的窗口程序，即可看到。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(549),alt:""}})]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("win32/MFC/WinForm/WPF 都依靠消息循环驱动，让程序跑起来。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(550),alt:""}})]),t._v(" "),n("h1",{attrs:{id:"_4-消息循环在-wpf-中的应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-消息循环在-wpf-中的应用"}},[t._v("#")]),t._v(" 4 消息循环在 WPF 中的应用")]),t._v(" "),n("h1",{attrs:{id:"_4-1-引入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-引入"}},[t._v("#")]),t._v(" 4.1 引入")]),t._v(" "),n("p",[t._v("只听说过 Dispatcher ，哪里来的消息循环？")]),t._v(" "),n("p",[t._v("先瞧一眼 WPF 启动运行堆栈：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(551),alt:""}})]),t._v(" "),n("p",[t._v("可以发现 "),n("code",[t._v("PushFrameImpl")]),t._v(" 这个方法。"),n("br"),t._v("\n去看其源码，就发现了熟悉的消息循环 ：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(552),alt:""}})]),t._v(" "),n("p",[t._v("可以理解为：Dispatcher 对消息循环的操作进行了“封装” 。\n那，Dispatcher 是谁？")]),t._v(" "),n("h1",{attrs:{id:"_4-2-dispatchcer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-dispatchcer"}},[t._v("#")]),t._v(" 4.2 Dispatchcer")]),t._v(" "),n("p",[t._v("Provides services for managing the queue of work items for a thread."),n("br"),t._v("\n提供用于管理线程工作项队列的服务。")]),t._v(" "),n("p",[t._v("大部分WPF对象，都是 DispatcherObject。这意味着，可以在 DispatcherObject 中（如 Window 中），\n使用 this.Dispatchcer 获取到 Dispatchcer 。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(553),alt:""}})]),t._v(" "),n("p",[t._v("一般我们会通过三种方式获取 Dispatchcer ：")]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// App.Current.Dispatcher;（Application.Current.Dispatcher）")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" dispatcher1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" App"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dispatcher"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CurrentDispatcher;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" dispatcher2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" System"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Windows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Threading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dispatcher"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CurrentDispatcher"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// System.Windows.Threading.DispatcherObject.Dispatcher;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" dispatcher3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dispatcher"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("可分为两类：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("当前线程的 Dispatcher：\nSystem.Windows.Threading.Dispatcher.CurrentDispatcher；")])]),t._v(" "),n("li",[n("p",[t._v("创建对应对象的 Dispatcher:\nApp.Current.Dispatcher;\nDispatcherObject.Dispatcher;")])])]),t._v(" "),n("p",[t._v("可参见：\n"),n("a",{attrs:{href:"https://huangtengxiao.gitee.io/post/Why-not-Dispather.CurrentDispatcher.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Why not Dispather.CurrentDispatcher - haungtengxiao"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("Dispatcher 和线程是什么关系？")]),t._v(" "),n("ul",[n("li",[t._v("Dispatcher 属于线程（与线程一一对应）。")]),t._v(" "),n("li",[t._v("WPF的对象在获取this.Dispatcher属性时，不同对象取的都是同一个Dispatcher实例。（因为都是同一个UI线程创建的。）")]),t._v(" "),n("li",[t._v("在默认的 WPF UI线程中：\nApp.Current.Dispatcher = DispatcherObject.Dispatcher")])]),t._v(" "),n("p",[t._v("所有的线程（UI线程，普通线程）都有 Dispatcher 吗？\n是的。")]),t._v(" "),n("p",[t._v("在所有线程中，调用 System.Windows.Threading.Dispatcher.CurrentDispatcher\n都会得到一个属于这个线程的 Dispatcher 对象。（不用的时候不会创建）\n所以：如果你想在一个后台线程中，使用 Dispatcher.CurrentDispatcher.Invoke\n将操作封送到 UI 线程，是做不到的。因为这时候获取到的 Dispatcher 不是UI线程的 Dispatcher , 而是当前线程自己的 Dispatcher。")]),t._v(" "),n("h2",{attrs:{id:"_4-3-dispatcher-如何实现跨线程的调用。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-dispatcher-如何实现跨线程的调用。"}},[t._v("#")]),t._v(" 4.3 Dispatcher 如何实现跨线程的调用。")]),t._v(" "),n("p",[t._v("最常使用 Dispatcher 的创建就是，在后台线程更新 UI ，那 Dispatcher 是如何做到的呢。")]),t._v(" "),n("p",[t._v("当你调用")]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[t._v("Application"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dispatcher"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Invoke")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    SendMessageBtn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Content "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"更新按钮"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("时，Dispatcher 究竟做了什么，把操作转移到 UI 线程上去了。")]),t._v(" "),n("blockquote",[n("p",[t._v("关于 Invoke,InvokeSync,BeginInvoke 的区别，参见：\n"),n("a",{attrs:{href:"https://walterlv.oschina.io/post/dotnet/2017/09/26/dispatcher-invoke-async.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入了解 WPF Dispatcher 的工作原理（Invoke/InvokeAsync 部分） - walterlv"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("img",{attrs:{src:a(554),alt:""}})]),t._v(" "),n("ol",[n("li",[n("p",[t._v("将调用的Delegate和优先级包装成一个DispatcherOperation放入Dispatcher维护的优先级队列当中，这个Queue是按DispatcherPriority排序的，总是高优先级的DispatcherOperation先被处理。")])]),t._v(" "),n("li",[n("p",[t._v("往当前线程的消息队列当中Post一个名为MsgProcessQueue的Message。（这个消息是WPF自己定义的。）这个消息被Post到消息队列之前，还要设置MSG.Handle，这个Handle就是Window 1#的Handle。指定Handle是为了在消息循环Dispatch消息的时候，指定哪个窗口的 WndProc 处理这个消息。")])]),t._v(" "),n("li",[n("p",[t._v("消息循环读取消息。")])]),t._v(" "),n("li",[n("p",[t._v("系统根据获取消息的Handle，发现跟Window1#的Handle相同，那么这个消息派发到Window1#的窗口过程，让其处理。")])]),t._v(" "),n("li",[n("p",[t._v("在窗口过程中，优先级队列当中取一个DispatcherOperation。")])]),t._v(" "),n("li",[n("p",[t._v("执行DispatcherOperation.Invoke方法，Invoke方法的核心就是调用DispatcherOperation构造时传入的Delegate，也就是Dispatcher.BeginInvoke传入的Delegate。最终这个Foo()方法就被执行了。")])])]),t._v(" "),n("h2",{attrs:{id:"_4-4-回顾"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-回顾"}},[t._v("#")]),t._v(" 4.4 回顾")]),t._v(" "),n("ul",[n("li",[t._v("WPF 底层仍然靠信息循环来驱动。")]),t._v(" "),n("li",[t._v("Dispatcher 使用消息循环来实现跨进程的委托调用。")]),t._v(" "),n("li",[t._v("Dispatcher 属于线程，需要理解当前拿到的 Dispatcher 到底是哪个 Dispatcher 。")])]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("参考资料：")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://www.cnblogs.com/skyofbitbit/p/3649104.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows 消息机制浅析 - bitbit - 博客园"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"http://blog.51cto.com/dreamylights/1325841",target:"_blank",rel:"noopener noreferrer"}},[t._v("SendMessage、PostMessage原理-大白菜-51CTO博客"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/powertoolsteam/archive/2010/12/30/1921426.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("WPF的消息机制（一）- 让应用程序动起来 - 葡萄城技术团队 - 博客园"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/powertoolsteam/archive/2010/12/31/1922794.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("WPF的消息机制（二）- WPF内部的5个窗口之隐藏消息窗口 - 葡萄城技术团队 - 博客园"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/powertoolsteam/archive/2011/01/12/1933896.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("WPF的消息机制（三）- WPF内部的5个窗口之处理激活和关闭的消息窗口以及系统资源通知窗口 - 葡萄城技术团队 - 博客园"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://huangtengxiao.gitee.io/post/Why-not-Dispather.CurrentDispatcher.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Why not Dispather.CurrentDispatcher - haungtengxiao"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://walterlv.com/post/dotnet/2017/09/26/dispatcher-invoke-async.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入了解 WPF Dispatcher 的工作原理（Invoke/InvokeAsync 部分） - walterlv"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"http://winprog.org/tutorial/zh/start_cn.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tutorial: Getting Started"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);