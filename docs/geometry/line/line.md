# 直线

直线，是一个点在平面或空间沿着一定方向和其相反方向运动的轨迹，是不弯曲的线，它没有宽度

## 二维直角坐标系上的直线

- 直线与 x 轴平行

$$
x = a
$$

- 直线与 y 轴平行

$$
y = b
$$

- 一般的直线

$$
Ax + By + C = 0, 通常 A \ge 0, 而且 A, B, C 的最大公约数是 1
$$
在这形式下, 直线的斜率是 $-\frac{A}{B}$, 在 x 轴的截距是 $-\frac{C}{A}$, 在 y 的截距是 $-\frac{C}{B}$

- 斜截式
当直线不平行于 y 轴时，若斜率是 $m$, y 轴截距是 $b$，则
则有方程 $y = mx + b$。在这形式下，直线的表达形式是唯一的

- 二点式

若直线穿过两点 $(x_{1}, y_{1})$ 和 $(x_{2}, y_{2})$时，则有方程
$$
\frac{x - x_{1}}{x_{2} - x_{1}} = \frac{y - y_{1}}{y_{2} - y_{1}}
$$
等价地，可以使用行列式
$$
\begin{vmatrix}
    x     & y     & 1 \\
    x_{1} & y_{1} & 1 \\
    x_{2} & y_{2} & 1
\end{vmatrix} = 0
$$
表示

- 点斜式

若直线穿过一点 $(x_{0}, y_{0})$, 而且斜率是 $m$, 则有方程
$$
y - y_{0} = m(x - x_{0})
$$

- 截距式

若直线在 x 轴和 在 y 轴上的截距分别是 $a$ 和 $b$，则有方程
$$
\frac{x}{a} + \frac{y}{b} = 1
$$

- 法线式

过原点向直线作一垂直线段，若该线长度为 $p$, 且与正 x 轴的倾斜角为 $\alpha$, 则有方程
$$
x \cos \alpha + y \sin \alpha - p = 0
$$

- 向量式
若直线穿过一点 ${ a ={\begin{bmatrix}x_{0}\\y_{0}\\\end{bmatrix}}} $ ，且有方向向量 $ { \mathbf {u} ={\begin{bmatrix}u_{x}\\u_{y}\\\end{bmatrix}}}$ ，则有向量方程 $ { \mathbf {r} =\mathbf {a} +\lambda \mathbf {u} } $，当中 ${ \mathbf {r} ={\begin{bmatrix}x\\y\\\end{bmatrix}}}$ ，而 
${ \lambda } $ 是一任意实数。

须要注意的是，这直线的表达形式并不是唯一的。

- 参数式

从向量式出发，可以参数 $\lambda$, 则有方程
$$
x = x_{0} + u_{x} \lambda \\
y = y_{0} + u_{u} \lambda
$$
其中 $\lambda$ 是一任意实数

## 2D 直线与点的关系

直线：$Ax + By + C = 0$
点：$(p, q)$

- 点在直线上
$ Ap + Bq + C = 0 $
- 点不在直线上
$ Ap + Bq + C \neq 0 $
- 点在直线上的投影

- 点与直线的距离

$$
d = \frac{|Ap + Bq + C|}{\sqrt{A^2 + B^2}}
$$

## 2D 直线与 2D 直线的关系

第一个直线：$Ax + By + C = 0$
第二个直线：$ax + by + c = 0$

- 平行
    - 判断：$ Ab = aB 且 Ac \neq aC $
    - 夹角：0 或 $ \pi $
    - 距离：$ \frac{C - c}{\sqrt{Aa + Bb}} $
    - 交点：没有交点
- 垂直
    - 判断：$ Aa + Bb = 0 $
    - 夹角：$ \frac{\pi}{2} $
    - 距离：0
    - 交点：$ (-\frac{Cb - cB}{Ab - aB}, -\frac{Ac - aC}{Ab - aB}) $
- 相交
    - 判断：$ Ab \neq aB $
    - 夹角：$ \arctan \frac{Ab - aB}{Aa + Bb} $ 或 $ \arctan \frac{aB - Ab}{Aa + Bb} $
    - 距离：0
    - 交点：$ (-\frac{Cb - cB}{Ab - aB}, -\frac{Ac - aC}{Ab - aB}) $
- 重合
    - 判断：$ Ab = aB 且 Ac = aC $
    - 夹角：0 或 $ \pi $
    - 距离：0
    - 交点：无穷个交点

## 三维直角坐标系上的直线

在三维坐标上，由于一条等式只代表一个平面，一条直线须由最少两条等式定义。

- 直线与 x 轴平行

$$
    y = b \\
    z = c
$$

- 直线与 y 轴平行

$$
    x = a \\
    z = c
$$

- 直线与 z 轴平行

$$
    y = b \\
    x = a
$$

- 一般的直线

$$
Ax + By + C = 0, 通常 A \ge 0, 而且 A, B, C 的最大公约数是 1
$$
在这形式下, 直线的斜率是 $-\frac{A}{B}$, 在 x 轴的截距是 $-\frac{C}{A}$, 在 y 的截距是 $-\frac{C}{B}$

- 斜截式
当直线不平行于 y 轴时，若斜率是 $m$, y 轴截距是 $b$，则
则有方程 $y = mx + b$。在这形式下，直线的表达形式是唯一的

- 二点式

若直线穿过两点 $(x_{1}, y_{1}, z_{1})$ 和 $(x_{2}, y_{2}, z_{2}) $ 时，则有方程
$$
\frac{x - x_{1}}{x_{2} - x_{1}} = \frac{y - y_{1}}{y_{2} - y_{1}} = \frac{z - z_{1}}{z_{2} - z_{1}}
$$
等价地，可以使用行列式
$$
\begin{vmatrix}
    x     & y     & 1 \\
    x_{1} & y_{1} & 1 \\
    x_{2} & y_{2} & 1
\end{vmatrix} = 
\begin{vmatrix}
    y     & z     & 1 \\
    y_{1} & z_{1} & 1 \\
    y_{2} & z_{2} & 1
\end{vmatrix} = 
\begin{vmatrix}
    z     & x     & 1 \\
    z_{1} & x_{1} & 1 \\
    z_{2} & x_{2} & 1
\end{vmatrix} = 0
$$
表示

- 点斜式

若直线穿过一点 $(x_{0}, y_{0})$, 而且斜率是 $m$, 则有方程
$$
y - y_{0} = m(x - x_{0})
$$

- 截距式

若直线在 x 轴和 在 y 轴上的截距分别是 $a$ 和 $b$，则有方程
$$
\frac{x}{a} + \frac{y}{b} = 1
$$

- 法线式

过原点向直线作一垂直线段，若该线长度为 $p$, 且与正 x 轴的倾斜角为 $\alpha$, 则有方程
$$
x \cos \alpha + y \sin \alpha - p = 0
$$

- 向量式
若直线穿过一点 ${ a ={\begin{bmatrix}x_{0}\\y_{0}\\z_{0}\end{bmatrix}}} $ ，且有方向向量 $ { \mathbf {u} ={\begin{bmatrix}u_{x}\\u_{y}\\ u_{z}\end{bmatrix}}}$ ，则有向量方程 $ { \mathbf {r} =\mathbf {a} +\lambda \mathbf {u} } $，当中 ${ \mathbf {r} ={\begin{bmatrix}x\\y\\z\end{bmatrix}}}$ ，而 
${ \lambda } $ 是一任意实数。

须要注意的是，这直线的表达形式并不是唯一的。

- 参数式

从向量式出发，可以参数 $\lambda$, 则有方程
$$
x = x_{0} + u_{x} \lambda \\
y = y_{0} + u_{y} \lambda \\
z = z_{0} + u_{z} \lambda
$$
其中 $\lambda$ 是一任意实数

## 3D 直线与点的关系

直线：$Ax + By + C = 0$
点：$(p, q, r)$

- 点在直线上
$ Ap + Bq + C = 0 $
- 点不在直线上
$ Ap + Bq + C \neq 0 $
- 点在直线上的投影

- 点与直线的距离

$$
d = \frac{|Ap + Bq + C|}{\sqrt{A^2 + B^2}}
$$

## 3D 直线与 3D 直线的关系

第一个直线：$Ax + By + C = 0$
第二个直线：$ax + by + c = 0$

- 平行
    - 判断：$ Ab = aB 且 Ac \neq aC $
    - 夹角：0 或 $ \pi $
    - 距离：
    - 交点：没有交点
- 垂直
    - 判断：$ Aa + Bb = 0 $
    - 夹角：$ \frac{\pi}{2} $
    - 距离：没有距离这个概念
    - 交点：
- 相交
    - 判断：$ Ab \neq aB $
    - 夹角：$ \arctan \frac{Ab - aB}{Aa + Bb} $ 或 $ \arctan \frac{aB - Ab}{Aa + Bb} $
    - 距离：没有距离这个概念
    - 交点：1 个交点
- 重合
    - 判断：$ Ab = aB 且 Ac = aC $
    - 夹角：0 或 $ \pi $
    - 距离：0
    - 交点：无穷个交点

## 瓦特连杆

## Jansen连杆

## 波塞利连杆

## 参考

https://zh.wikipedia.org/wiki/%E7%9B%B4%E7%BA%BF
