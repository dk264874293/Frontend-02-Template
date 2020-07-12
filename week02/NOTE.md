<!--
 * @Descripttion: 
 * @version: 
 * @Author: peiliang.wang
 * @Date: 2020-07-05 17:27:16
 * @LastEditors: peiliang.wang
 * @LastEditTime: 2020-07-12 22:36:34
--> 
学习笔记

# 泛用语言分类
 1.非形式语言 - 自然语言（如中文、英文）
 2.形式语言 - 编程语言（个人理解必须要按照严重语法定义的语言）

 ## 形式语言分类
    乔姆斯基谱系
    0形 无限制文法
    1型 上下文相关文法
    2型 上下文无关文法
    3型 正则文法

## 产生式
    用尖括号括起来的名称表示语法结构名 <>

    基础结构，也叫终结符，terminal symbol
    复合结构，也叫非结续符，non-terminal symbol

    一般都有最上层的非终结符

    使用引号和中间的字符，表示终结符

    可以有括号，形式组

    * 表示重复多次

    | 表示或

    + 表示至少一次

# 编程语言的性质
  ## 图灵完备性
    编程语言都必须要有图灵完备性

    命令式 
    goto
        if 和 while

    声明式 
    递归 lamda 基本的意思就是一种替换关系

  ## 动态与静态
    ### 动态
        在用户的设备 / 在线服务器上
        产品实际运行时
        Runtime
    ### 静态    
        在程序员的设备上
        在产品开发时
        Compiletime

  ## 强类型与弱类型

    强类型 -- 类型转换不会默认发生
    弱类型 -- 默认转换

## javascript 中的类型

    1.Number
        IEEE 754 Double Float：一共64位
        Sign(1)
        Exponent(11)
        Fraction(52)
        数中间有个 epsilon 的差别

        0.toString(); // 会报错，因为 0. 是一个合法的数字

        0 .toString() // 0后面加一个空格就不报错了
    
    2.String
        编码形式，字符集
        ISO-8859 类似 ASCII 的东欧扩展
        ASCII
        Unicode
        UCS
        GB
        GB2312
        GBK(GB13000)
        GB18030
        BIG5
        UTF

        UTF8：默认用一个字节表示一个字符
        UtF 16：默认用16位表示一个字符
        中文的“一”，实际编码是：01001100000000

        在 UTF8中，用三个字节表示。所以要插入控制位。

        11100100 10111000 10000000

        String - Homework

        javascript通常使用utf-8来表示uncode字符集
    
    3.Boolean
        逻辑是非 true,false js关键字

    4.Null
        有值但为空 null是js的关键字不可赋值

    5.Undefined
        未定义 undefined是js的全局变量在函数中可以被重新定义所以通常使用void 0 来产生undefined
    
    6.Object及Symbol

        Object 对象 是对事物属性和状态 的一个抽象表达方法
        比如 声明一个鱼的类 属性 眼睛 尾巴 嘴  行为 游泳

        但每条在基础的鱼的类型上又有不同区别 这些不同的区别就是这些具体鱼的私有属性（比如 鱼的颜色，大小，生存的环境等）不过他们都共同的继承自鱼的基类（比如都有 嘴巴 眼睛 都会游泳）

        对象的属性和值一般使用key - value来表示
        在之前版本中Object 的key一般使用string来表示他可以被推演出来
        而es6中引入的Symbol的概念来作为key作为独一无二属性防止的某些属性被篡改和被随意访问的问题


        



