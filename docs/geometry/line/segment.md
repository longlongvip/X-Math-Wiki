# 线段

## 二维直角坐标系上的线段

- 两点式

开始 s：$(x_{1}, y_{1})$
结束 e：$(x_{2}, y_{2})$
关系：$ x_{1} \le x_{2} 或 y_{1} \le y_{2} $

表示

## 2D 中点与线段的关系

- 点在线段上

点：$(x, y)$

$$
\frac{x - x_{1}}{x_{2} - x_{1}} = \frac{y - y_{1}}{y_{2} - y_{1}}
$$

- 点在线段外

$$
\frac{x - x_{1}}{x_{2} - x_{1}} \neq \frac{y - y_{1}}{y_{2} - y_{1}}
$$

## 2D 中线段与线段的关系

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














