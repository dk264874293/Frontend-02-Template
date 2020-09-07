<!--
 * @Descripttion: 
 * @version: 
 * @Author: peiliang.wang
 * @Date: 2020-07-05 17:27:16
 * @LastEditors: peiliang.wang
 * @LastEditTime: 2020-09-06 19:36:33
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