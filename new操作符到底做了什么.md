```html
es6 之后 js 创建类
```

```javascript
class Person {
  name = 'Mike'

  sayName() {
    console.log(this.name)
  }
}

let teacher = new Person()
sayName.sayName()
```

```html
new 操作符到底做了什么？

1. 创建了一个全新的对象。

2. 这个对象会被执行[[Prototype]]（也就是__proto__）链接。

3. 生成的新对象会绑定到函数调用的this。

4. 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。

5. 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用会自动返回这个新的对象。
```

```javascript
function _new() {
  let newObj = {} // 创建一个空对象
  let [constructor, ...args] = [...arguments] // 第一个参数是构造函数
  newObj.__proto__ = constructor.prototype // 执行[[原型]]链接，newObj 是构造函数的实例
  let result = constructor.apply(newObj, args)
  if(result && typeof result === 'object' || typeof result === 'function') {
    return result
  }
  return newObj
}
```