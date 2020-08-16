<!--
 * @Descripttion: 
 * @version: 
 * @Author: peiliang.wang
 * @Date: 2020-07-05 17:27:16
 * @LastEditors: peiliang.wang
 * @LastEditTime: 2020-08-16 21:43:20
-->
学习笔记

# css 排版

* 标签 tag 源代码
* 元素 element 语义
* 盒 box 表现

HTML代码中可以书写开始 *标签* 结束 *标签* ，和自封闭 *标签*。
一对起止 *标签*，表示一个 *元素*
DOM树中存储的是 *元素* 和其他类型的节点（Node）。
CSS选择器选中的是 *元素* 或 *伪元素*。
CSS选择器选中的 *元素*，在排版时可能产生多个 *盒*。
排版和渲染的基本单位是 *盒*

## 盒模型
box-sizing:
    * content-box 内容模型 只包含内容区域的宽度 不包含padding border margin
    * border-box  边框模型 包含内容区padding border 不包含margin

## 排版
    * 正常流
        - 收集盒和文字进行
        - 计算盒在行中的排布
        - 计算行的排布

        块级格式化上下文 BFC
            - float（浮动） clear （寻找干净的控件来执行浮动）
            - BFC合并 
                Block Container: 里面的BFC的
                    - 能容纳正常流的盒，里面就有BFC的。 
                    block、inline-block、table-cell、flex item、
                    grid cell、table-caption
                    
                Block-level Box: 外面有BFC的
                    blck level  block、flex、table、grid
                    inline level  inline-block inline-flex inline-table inline-grid
                Block Box = Block Container + Block-level Box: 里外都有BFC的 div

                block box && overflow:visible
                    - BFC合并与float
                    - BFC合并与边距折叠

        行内级格式化上下文 IFC
            vertical-align 行内对其方式
            - line-top
            - text-top
            - base-line  主要用于英文对其的基线
            - text-bottom
            - line-bottom

    * flex排版

        收集盒进行
        计算盒在主轴方向的排布
        计算盒在交叉轴方向的排布

        分行
            - 根据主轴尺寸，把元素分进行
            - 若设置了no-wrap，则强行分配进第一行
        计算主轴方向
            - 找出所有flex元素
            - 把主轴方向的剩余尺寸按比例分配给这些元素
            - 若剩余控件为负数，所有flex元素为0，等比压缩剩余元素
        计算交叉轴方向
            - 根据每一行中最大元素尺寸计算行高
            - 根据行高flex-align和item-align,确定元素的具体位置

    
    * gird排版

### animation
    * @keyframes 定义关键帧
    * animation 使用
        animation-name 时间曲线 对应keyframes
        animation-duration 动画的时长
        animation-timing-function 动画的时间曲线
        animation-delay 动画开始前的延迟
        animation-iteration-count 动画的播放次数
        animation-direction 动画的方向

### transition
    transition-property 要变换的属性
    transition-duration 变换的时长
    transition-timing-function 时间曲线 三次贝塞尔曲线
        ease linear ease-in ease-out ease-in-out 
    transition-delay 延迟

### 渲染 & 颜色
    CMYK 品红、黄、青（RGB的补色） 印刷
    RGB 红、绿、蓝 显示
    HSL与HSV HUE（h）色相  s纯度  l亮度  v明度

### 绘制
    *几何图形
        - border
        - box-shadow
        - border-radius
    *文字
        - font
        - text-decoration
    *位图
        - background-image

应用技巧
    *data url+svg