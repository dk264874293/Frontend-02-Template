学习笔记

# 单元测试工具
mocha、jest

# Mocah

```javascript
  //分组
  describe('add function testing',function(){
    //断言
    it("1+2 should be 3", function () {
      assert.equal(add(1, 2), 3);
    });

    it("-5+2 should be -3", function () {
      assert.equal(add(-5, 2), -3);
    });
  })
```
安装
@babel/core  @babel/register 
用于转换es6的语法

@babel/preset-env
babel规则

nyc