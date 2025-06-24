---
circle
---

# 圆

<div>
    <svg id="my-svg"></svg>
</div>

<script setup>
    import {square, circle, draw_to_svg, diagram_combine} from 'https://cdn.jsdelivr.net/npm/diagramatics@1.5/dist/diagramatics.min.js'
    import { onMounted, onBeforeUnmount } from 'vue'

    onMounted(() => {
        let my_svg = document.getElementById('my-svg');
        let draw = (...diagrams) => {
            draw_to_svg(my_svg, diagram_combine(...diagrams));
        };
        
        let cir = circle(10).fill();
        let sq = square(10).fill();

        draw(cir, sq);
    })
</script>

## 定义

- 直角坐标系

$$
    (x - a)^2 + (y - b)^2 = r^2
$$

- 参数方程

$$
    x = a + r \cos \theta \\
    y = b + r \sin \theta
$$

- 极坐标

$$
    r = r
$$

## 圆心

## 弦

圆周上任何两点相连的线段称为圆的弦

## 弧

圆周上任意两点间的部分叫做弧

## 直径

经过圆心的弦称作直径

## 半径

在圆中，连接圆心和圆上任意一点的线段叫做圆的半径

## 切线

一条直线与圆相交仅有一个交点，那么称这条直线是这个圆的切线，与圆相交的点叫做切点

圆的切线垂直于经过切点的半径
经过圆心且垂直于切线的直线必经过切点
经过切点且垂直于切线的直线必经过圆心

## 割线

一条直线与一条弧线有两个公共点，这条直线是这条曲线的割线

## 周长

$$
    C = \pi d
$$

## 面积

$$
    A = \pi r^{2}
$$

## 对称性

圆既是轴对称图形又是中心对称图形，圆的对称轴为经过圆心O的任意直线，圆的对称中心为圆心O

## 圆心角

## 圆周角

## 圆心角定理

同圆或等圆中，相等的圆心角所对的弦相等，所对的弧相等，弦心距相等

## 圆周角定理

圆周角定理：同弧所对的圆周角等于它所对的圆心的角的一半

## 垂径定理

垂直于弦的直径平分这条弦，并且平分弦所对的两条弧

## 圆与点的位置关系

圆：半径 r，圆心 (x, y)
点：(p, q)

- 点在圆内
$ (p - x)^2 + (q - y)^2 < r^2 $
- 点在圆上
$ (p - x)^2 + (q - y)^2 = r^2 $
- 点在圆外
$ (p - x)^2 + (q - y)^2 > r^2 $

## 圆与直线的位置关系

圆：半径 r，圆心 (x, y)
直线：$ Ax + By + C = 0 $

- 相切
$ (Ax + By + C)^2 < r^2(A^2 + B^2) $
- 相交
$ (Ax + By + C)^2 = r^2(A^2 + B^2) $
- 相离
$ (Ax + By + C)^2 > r^2(A^2 + B^2) $

## 圆与线段的位置关系

圆：半径 r，圆心 (x, y)
线段：$ (x_{1}, y_{1}) 与 (x_{2}, y_{2})  $

- 相切
$ (Ax + By + C)^2 < r^2(A^2 + B^2) $
- 相交
$ (Ax + By + C)^2 = r^2(A^2 + B^2) $
- 相离
$ (Ax + By + C)^2 > r^2(A^2 + B^2) $

## 圆与圆的位置关系

圆：半径 R，圆心 (X, Y)
圆：半径 r，圆心 (x, y)

- 相切
$ (X - x)^2 + (Y - y)^2 < (R + r)^2 $
- 相交
$ (X - x)^2 + (Y - y)^2 = (R + r)^2 $
- 相离
$ (X - x)^2 + (Y - y)^2 > (R + r)^2 $

## 圆与三角形的位置关系



## 参考

https://zh.wikipedia.org/wiki/%E5%9C%86
