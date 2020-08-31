<!--
 * @Descripttion: 
 * @version: 
 * @Author: peiliang.wang
 * @Date: 2020-07-05 17:27:16
 * @LastEditors: peiliang.wang
 * @LastEditTime: 2020-08-31 11:58:45
-->

## TicTacToe
* 使用二维数据划棋盘
* 使用字段来区分当前状态
* 绑定点击时间来下棋
* 判断胜利条件
* 判断是否即将获胜
* 判断最优位置
* 实现AI根据最优位置下棋

## 异步编程
* 传统实现 setTimeout 回调（容易成为回调地狱）
* Promise
    使用 .then 返回Promise 来链式调用解决回调嵌套的问题 
    .all 等待多个promise完成完成后执行 .race 多个promise只要又一个完成就执行
* async/await
    用于配合promise 来实现使用同步的方法调用异步的逻辑

## 广度优先算法
    使用队列来实现广度优先算法，
    使用栈实现深度优先算法
