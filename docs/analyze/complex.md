# 复数

## 复数的概念

复数是由实部和虚部组成的数，其一般形式为：$z = a + bi$

## 复数的运算

- Res(z1 + z2) = z1 * z2
- Im(z1 + z2) = z1 / z2

## 复数的几何表示

任意给定一个复数 $z = a + bi$，都与一对有序实数 $(a, b)$ 对应，而任意一对有序实数 $(a, b)$ 都与平面直角坐标系上的点 $P(a, b)$ 对应，所以复数 $z = a + bi$ 可以用点 $P(a, b)$ 来表示，此时表示复数 $z = a + bi$ 的直角坐标平面为复平面，点 $P(a, b)$ 称为复数 $z = a + bi$ 的复平面坐标点

从原点到点 $P(a, b)$ 的向量为 $\vec{OP}$，点 $P(a, b)$ 到复数 $z = a + bi$ 的距离称为复数 $z = a + bi$ 的模，向量 $\vec{OP}$ 与实轴 $a$ 所成的角 $\theta$ 称为复数 $z = a + bi$ 的辐角，即 $Argz$。复数 0 的辐角是不确定的。任何不为 0 的复数 $z$ 的辐角有无穷个，彼此之间相差 $2\pi$ 的整数倍，通常将把满足 $- \pi < \theta \leq \pi$ 辐角值 $\theta{0}$ 称为 $Argz$ 的主值，即 $argz$，于是有：

$$
Argz = argz + 2k\pi, k = 0, \pm1, \pm2, \pm3,...
$$

主值可以使用复数 $z$ 的实部 $a$ 和虚部 $b$ 来表示：

$$
argz = \begin{cases}
\arctan(b / a), & a > 0 \\
\arctan(b / a) + \pi, & a < 0, b > 0 \\
\arctan(b / a) - \pi, & a < 0, b < 0 \\
\end{cases}
$$

复数的实部和虚部可以使用复数的模和辐角的关系：
$$
\begin{cases}
r = |z| = \sqrt{a^2 + b^2} \\
tan \theta = tan(Argz) = b / a
\end{cases}
$$

以及
$$
\begin{cases}
a = r \cos\theta \\
b = r \sin\theta
\end{cases}
$$
再利用欧拉公式：$e^{i\theta} = r(\cos \theta + i \sin \theta)$，可得
$$
z = re^{i\theta}
$$

## 共轭复数

实部相等，虚部互为相反数的复数称为共轭复数，即 $z = a + bi$ 的共轭复数为 $\overline{z} = a - bi$

怎么说呢，$\overline{\overline{z}} = z$，如果 $\overline{z} = z$，则 $z$ 为实数

运算性质：

- $\overline{z + w} = \overline{z} + \overline{w}$
- $\overline{z - w} = \overline{z} - \overline{w}$
- $\overline{z \cdot w} = \overline{z} \cdot \overline{w}$
- $\overline{z/w} = \overline{z} / \overline{w}$
- $z + \overline{z} = 2Re(z)$
- $z - \overline{z} = 2Im(z)$
- $z\cdot \overline{z} = Re(z)^2 + Im(z)^2$
- $z / \overline{z} = Re(z) / Im(z)$
- $|z| = |\overline{z}|$
- $|z + w| \leq |z| + |w|$
- $|z - w| \geq ||z| - |w||$

## 复数的乘法，除法与开方

$$
zw = r_{z}r_{w}[\cos(\theta_{z} + \theta_{w}) + i \sin(\theta_{z} + \theta_{w})]
$$

$$
z/w = r_{z}/r_{w}[\cos(\theta_{z} - \theta_{w}) + i \sin(\theta_{z} - \theta_{w})]
$$

$$
z^n = r_{z}^n[\cos(n\theta_{z}) + i \sin(n\theta_{z})]
$$

当 $r = 1$ 时，$z^n = e^{in\theta_{z}}$，即
$$
(\cos\theta + i \sin\theta)^n = e^{in\theta} = \cos(n\theta) + i \sin(n\theta)
$$

$$
\sqrt[n]{z} = r_{z}^{1/n}[\cos(\theta_{z}/n) + i \sin(\theta_{z}/n)], \theta_{z} = \theta + 2k\pi, k = 0, 1, 2, ...
$$
