# 乘法

## 二进制乘法

$$
\begin{aligned}
    0 \times 0 &= 0 \\
    0 \times 1 &= 0 \\
    1 \times 0 &= 0 \\
    1 \times 1 &= 1 \\
\end{aligned}
$$

## 实数乘法

$$
a \times b = b \times a
$$

乘法表：

```python
# 一般实现
for i in range(1, 10):
    for j in range(1, i+1):
        print('{}x{}={}\t'.format(j, i, i*j), end='')
    print()

# manim ce 实现
import os
from manim import *


class Table99(Scene):
    def construct(self):
        for i in range(-4, 5):
            for j in range(-4, i + 1):
                text = Text(f"{i + 5}x{j + 5}={(i + 5) * (j + 5)}").scale(0.4).shift(RIGHT * j + DOWN * i * 0.5)
                self.add(text)


if __name__ == "__main__":
    os.system('cls')
    f_video = 0
    if f_video:
        os.system("manim -p {} Table99".format(__file__))
    else:
        os.system("manim -pql {} Table99".format(__file__))
```

## 递归乘法

$$
x = x + y
$$

## 复数乘法

$$
(a+bi) \times (c+di) = (ac - bd) + (ad + bc)i
$$

## 几何乘法

## 向量与标量相乘

$$
k \times \vec{a} = k\vec{a}
$$

## 向量与向量点乘

$$
\vec{a} \cdot \vec{b} = \left| \vec{a} \right| \left| \vec{b} \right| \cos \theta
$$
坐标表示
$$
(x, y) \cdot (p, q) = px + qy
$$

## 向量与向量叉乘

$$
\vec{a} \times \vec{b} = \left| \vec{a} \right| \left| \vec{b} \right| \sin \theta \times \vec{n}
$$
坐标表示
$$
(x, y) \times (p, q) = (0, 0, xq - yp) \\
(x, y, z) \times (p, q, r) = ()
$$

## 向量与向量混合积

$$
\vec{a} \cdot (\vec{b} \times \vec{c}) = (\vec{a} \times \vec{b}) \cdot \vec{c}
$$
坐标表示
$$
(x, y) \times (p, q)
$$

## 四元数乘法

## 矩阵乘法

## 阶乘

$$
\prod_{i=1}^{n} = n!
$$

## 连乘

$$
\prod_{i=n}^{m} t = 0, m < n
$$
