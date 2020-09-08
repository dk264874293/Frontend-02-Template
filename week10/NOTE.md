<!--
 * @Descripttion: 
 * @version: 
 * @Author: peiliang.wang
 * @Date: 2020-07-05 17:27:16
 * @LastEditors: peiliang.wang
 * @LastEditTime: 2020-09-07 17:46:40
-->
学习笔记

# 字符串处理

## LL算法构建AST

四则运算
* TokenNumber：1234567890 的组合
* Operator： +、-、*、/ 之一
* Whitespace：<sp>
* LineTerminator:<LF> <CR>\

```
<Expression>:: = <AdditiveExpression><EOF>

<AdditiveExpression>:: = 
    <MultiplicativeExpression> | <AdditiveExpression> <+> 
    <MultiplicativeExpression> | <AdditiveExpression> <-> <MultiplicativeExpression>

<MultiplicativeExpression>:: =
    <Number> | <MultiplicativeExpression> <*> 
    <Number> | <MultiplicativeExpression> </> <Number>


```
LL 语法分析
```
<AdditiveExpression>:: = 
    <Number> | <MultiplicativeExpression> <*> 
    <Number> | <MultiplicativeExpression> </>
    <Number> | <AdditiveExpression> <+> 
    <MultiplicativeExpression> | <AdditiveExpression> <->
    <MultiplicativeExpression>

```

## 字符串分析算法

* 字典树
    - 大量高重复字符串的存储与分析
* KMP
    - 在长字符串里找模式
* Wildcard
    - 带通配符的字符串模式
* 正则
    - 字符串通用模式匹配
* 状态机
    - 通用的字符串分析
* LL LR
    - 字符串多层级结构分析