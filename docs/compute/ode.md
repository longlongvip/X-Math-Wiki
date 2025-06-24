# 常微分方程

## 变量 $x$ 和变量 $y$ 可分离

$$
A(x)B(y) dx + P(x)Q(y) dy = 0
$$
解法：分离变量
通解：
$$
\int^{x} \frac{A(a)}{P(a)} da + \int^{y} \frac{Q(a)}{B(a)} da = C
$$

## 一阶， 变量 $x$ 可分离

$$
\frac{dy}{dx} = F(x)
$$
解法：直接积分
通解：
$$
y = \int^{x} F(a) da + C
$$

## 一阶， 变量 $y$ 可分离

$$
\frac{dy}{dx} = F(y)
$$
解法：除以 $F$
通解：
$$
x = \int^{y} \frac{1}{F(a)} da + C
$$

## 一阶， 变量 $x$ 和变量 $y$ 可分离

$$
P(y) \frac{dy}{dx} + Q(x) = 0
$$
解法：除以 $F$
通解：
$$
\int^{y} P(a) da + \int^{x} Q(a) da = C
$$

## 一阶，齐次

$$
\frac{dy}{dx} = F(\frac{y}{x})
$$
解法：令 $y = ux$，然后通过分离变量 $u$ 和 $x$ 求解
通解：
$$
ln(Cx) = \int^{\frac{y}{x}} \frac{1}{F(a) - a} da
$$

## 一阶，可分离变量

$$
yM(xy) + xN(xy)\frac{dy}{dx} = 0
$$
解法：除以 $xy$
通解：
$$
ln(Cx) = \int^{xy} \frac{N(a)}{a[N(a) - M(a)]} da
$$
如果 $N = M$，那么 $xy = C$

## 一阶，可全微分

其中 $\frac{}{} = \frac{}{}$
$$
M(x, y)\frac{dy}{dx} + N(x, y) = 0
$$
解法：全部积分
通解：
$$
F(x, y) = \int^{y} M(x, a)da + \int^{x} N(a, y)da + Y(y) + X(x) = C
$$
其中 $Y(y)$ 和 $X(x)$ 是积分出来的函数而不是常数，将它们列在这里以使最终函数 $F(x, y)$ 满足初始条件

## 一阶，不可全微分

其中 $\frac{}{} \ne \frac{}{}$
$$
M(x, y)\frac{dy}{dx} + N(x, y) = 0
$$
解法：积分 $\mu(x, y)$ 满足 $\frac{}{} = \frac{}{}$
通解：
如果可以得到 $\mu (x,y)$
$$
F(x, y) = \int^{y} \mu (x, a) M(x, a)da + \int^{x} \mu(a, y) N(a, y)da + Y(y) + X(x) = C
$$
其中 $Y(y)$ 和 $X(x)$ 是积分出来的函数而不是常数，将它们列在这里以使最终函数 $F(x, y)$ 满足初始条件

## 二阶， 变量 $x$ 可分离

$$
\frac{d^2y}{dx^2} = F(x)
$$
解法：直接积分
通解：
$$
f(a) = \frac{dy}{dx} = \int^{a} F(z) dz + C \\
y = \int^{x} f(a) da + C
$$

## 二阶， 变量 $y$ 可分离

$$
\frac{d^2y}{dx^2} = F(y)
$$
解法：除以 $F$
通解：
$$
f(a) = \int^{a} \frac{1}{F(z)} dz + C \\
x = \int^{y} \frac{1}{2f(a)} da + C
$$

## 一阶，线性非齐次

$$
\frac{dy}{dx} + P(x)y = Q(x)
$$
解法：积分因子 $e^{\int^{x} P(a) da}$
通解：
$$
y = e^{-\int^{x} P(a)da} [\int^{x} e^{\int^{a} P(z)dz} Q(a)da + C]
$$

## 二阶，线性非齐次

$$
\frac{d^2y}{dx^2} + b\frac{dy}{dx} + cy = r(x)
$$
解法：积分因子 $e^{\int^{x} P(a) da}$
通解：
如果 $b^2 > 4c$
$$
z = \sqrt{b^2 - 4c} \\
y = C_{1}e^{-(b - z)\frac{x}{2}} + C_{2}e^{-(b + z)\frac{x}{2}}
$$

如果 $b^2 = 4c$
$$
y = (C_{1}x+ C_{2})e^{-\frac{b}{2}x}
$$

如果 $b^2 < 4c$
$$
z = \sqrt{4c - b^2} \\
y = e^{-\frac{b}{2}x}[C_{1} \sin (\frac{z}{2}x) + C_{2} \cos (\frac{z}{2}x) ]
$$
