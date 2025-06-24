# 勾股定理

## 介绍

中文：勾股定理 来源：
英文：Pythagoras' theorem
日文：

## 简介

勾股定理是平面几何中一个**基本而重要**的定理。勾股定理说明，平面上的直角三角形的两条直角边的长度（较短直角边称勾长、较长直角边称股长）的平方和等于斜边长（称弦长）的平方。反之，若平面上三角形中两边长的平方和等于第三边边长的平方，则它是直角三角形（直角所对的边是第三边）。勾股定理是人类早期发现并证明的重要数学定理之一

历史学家相信这个定理早在毕达哥拉斯出生的一千年前已经在世界各地广泛应用。不过，现代西方数学界统一称呼它为“毕达哥拉斯定理”

勾股定理有四百多个证明，如微分证明，面积证明等

## 定理

在平面上的一个直角三角形中，两个直角边边长的平方加起来等于斜边长的平方。如果设直角三角形的两条直角边长度分别是$a$和$b$，斜边长度是$c$，那么可以用数学语言表达：
$$ a^2 + b^2 = c^2 $$

## 证明[只用代数证明和赵爽弦图]

<img src="./images/赵爽弦图.png" alt="赵爽弦图" align=center width="300" height="300">
大正方形，边长为$c$，面积$S=c^2$

大正方形，面积$S$也可以表示为：
$$ S = (a-b)^2 + 4 \frac{1}{2}ab = a^2 - 2ab + b^2 + 2ab = a^2 + b^2$$
所以，$a^2 + b^2 = c^2$

## 逆定理

证明：构造$A'B'C'$，使$a' = a$，$b' = b$，$C' = 90\degree$，根据勾股定理，$c' = \sqrt{a'^2 + b'^2} =  \sqrt{a^2 + b^2} = c$，所以$A'B'C' \cong ABC$，$C = 90\degree$

## 有趣的结论

- $sgn(\alpha + \beta - ) = sgn(a^2 + b^2 - c^2)$
其中 $\alpha$ 是与边 $a$ 相对的角，$\beta$ 是与边 $b$ 相对的角，$\alpha$ 是与边 $c$ 相对的角，并且 $sgn$ 是符号函数
- 

## 应用

- 计算距离

## 勾股数组

任意两个大于0的互不相等的整数$m$和$n$，设$m > n$，则可以构造勾股数组$(m^2-n^2, 2mn, m^2+n^2)$
证明：

:::: group 代码实现
::: group-item C/C++
```cpp
void gen_pythagorean_triple(int& a, int& b, int& c)
{
    assert(a < 0 || b < 0 || c < 0)
    int m = a, n = b;
    a = m*m - n*n;
    if(a < 0)
    {
        a = -a;
    }
    b = 2*m*n;
    c = m*m + n*n;
}
```
:::
::: group-item Python
```python
a, b, c = a*a - b*b, 2*a*b, a*a + b*b
```
:::
::: group-item JS
test 3
:::
::: group-item Rust
test 4
:::
::::

## 可视化
:::: group 代码实现
::: group-item manim
test 1
:::
::: group-item *movyjs
test 2
:::
::: group-item JS
test 3
:::
::::
