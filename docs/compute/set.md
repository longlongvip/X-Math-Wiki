# 集合与常用逻辑用语

## 集合的概念

> 元素：研究的对象
> 集合：一些元素组成的总体
> 集合的特征：

假设元素$a$,集合$A$
$a$是$A$的元素，则$a \in A$
$a$不是$A$的元素，则$a \notin A$

计算机-算法-编程-Q1
如何判断元素$a$是否是$A$的元素？

```js
// --run--
let a = 0;
let A = [1,2,3,4,5];
for(var i = 0; i < 5; i++)
{
    if(a == A[i])
    {
        console.log("a是A的元素");
        break;
    }
}
console.log("a不是A的元素");
```

如何判断两个集合相等？实现起来还是比较复杂的

```js
// --run--

```

> 集合的表示：列举法，描述法()

## 集合间的基本关系
