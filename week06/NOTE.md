# css总揽

__CSS 语法的最新标准：https://www.w3.org/TR/css-syntax-3/__

## css 语法

1.at-rule
    - @charset ： https://www.w3.org/TR/css-syntax-3/
        用于提示 CSS 文件使用的字符编码方式，它如果被使用，必须出现在最前面。这个规则只在给出语法解析阶段前使用，并不影响页面上的展示效果。
    - @import ：https://，www.w3.org/TR/css-cascade-4/
        @import 可以引入另一个文件的全部内容。
    - @media ：https://www.w3.org/TR/css3-conditional/
        能够对设备的类型进行一些判断。在 media 的区块内，是普通规则列表。
    - @page ： https://www.w3.org/TR/css-page-3/
        用于分页媒体访问网页时的表现设置(主要用于打印)
    - @counter-style ：https://www.w3.org/TR/css-counter-styles-3
        产生一种数据
    - @keyframes ：https://www.w3.org/TR/css-animations-1/
        用于定义动画关键帧
    - @fontface ：https://www.w3.org/TR/css-fonts-3/
        用于定义一种字体，如iconfont
    - @supports ：https://www.w3.org/TR/css3-conditional/
        检查环境的特性，兼容性并不好不建议使用
    - @namespace ：https://www.w3.org/TR/css-namespaces-3/
        用于跟 XML 命名空间配合的一个规则，表示内部的 CSS 选择器全都带上特定命名空间
2.qualified rule
    主要是由选择器和声明区块构成。声明区块又由属性和值构成。

## css 规则

    * 选择器
    * 声明
        + key
        + value
            - 值类型
            - 函数

#### 选择器

__标准https://www.w3.org/TR/selectors-3/__
__标准https://www.w3.org/TR/selectors-4/__
    1.简单选择器
        - * 通配
        - # id 
        - . class
        - div svg|a tag选择器
        - [attr=value] attr
        - :hover 伪类
        - :before 伪元素
    2.复合选择器
        多个简单选择器按个写是“与”的关系
        - <简单选择器><简单选择器><简单选择器>
        - *或div 必须写在最前面
    3.复杂选择器
        - <sp>  后代，表示选中所有符合条件的后代节点，
        - > 子代选择器，表示选中符合条件的子节点，
        - + 直接后继，表示选中符合条件的直接后继节点，
        - ~ 后继选择器，表示选中所有符合条件的后继节点，
        - || 列选择器，表示选中对应列中符合条件的单元格。
    
__伪类__
    *链接/行为
        - :any-link 全部的链接
        - :link 未选中的链接 :visited 选中的链接
        - :hover 鼠标抚摸
        - :active 鼠标选中
        - :focus 焦点
        - :target 目标
    *树结构
        - :empty 是否有子元素
        - :nth-child() 父级的第几个元素 even odd 3n+1 4n-1 
        - :nth-last-child() 类似:nth-child() 从后往前
        - :first-child 第一个子级 :last-child 最后个子级 :only-child
    *逻辑型
        - :not 非逻辑

__伪元素__
    ::before 在元素内容前生成一个元素
    ::after 在元素内容后生成一个元素
    ::first-line 选中第一个字母
    ::first-letter 选中第一行

#### 选择器的优先级
CSS 标准用一个三元组 (a, b, c) 来构成一个复杂选择器的优先级。
- id 选择器的数目记为 a；
- 伪类选择器和 class 选择器的数目记为 b；
- 伪元素选择器和标签选择器数目记为 c；
- “*” 不影响优先级。

CSS 标准建议用一个足够大的进制，获取“ a-b-c ”来表示选择器优先级。
specificity = base * base * a + base * b + c

#### 声明：属性和值
属性是由中划线、下划线、字母等组成的标识符，CSS 还支持使用反斜杠转义

值的部分，主要在标准__https://www.w3.org/TR/css-values-4/__

##### CSS 属性值可能是以下类型。
    - CSS 范围的关键字：initial，unset，inherit，任何属性都可以的关键字。
    - 字符串：比如 content 属性。
    - URL：使用 url() 函数的 URL 值。
    - 整数 / 实数。
    - 维度：单位的整数 / 实数，如 width,height 属性。
    - 百分比：大部分维度都支持。
    - 颜色：比如 color、 background-color 属性。
    - 图片：比如 background-image 属性。
    - 2D 位置：比如 background-position 属性。
    - 函数：来自函数的值，比如 transform 属性。

##### CSS计算型函数
    - calc()
        是基本的表达式计算，它支持加减乘除四则运算。在针对维度进行计算时，calc() 函数允许不同单位混合运算
    - max()、min()、lamp()
        较大小的函数，max() 表示取两数中较大的一个，min() 表示取两数之中较小的一个，clamp() 则是给一个值限定一个范围
    - toggle()
        函数在规则选中多于一个元素时生效，它会在几个值之间来回切换，比如我们要让一个列表项的样式圆点和方点间隔出现
    - attr()
        函数允许 CSS 接受属性值的控制。