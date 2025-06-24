# 曼德博集合

曼德博集合(Mandelbrot Set) 是指一种在复平面上组成分形的点的集合，以数学家本华·曼德博的名字命名

## 定义

曼德博集合可以用复二次多项式来定义：$f_c{z} = z^2 + c$, $c$ 是一个复数参数

从 $ z = 0 $ 开始，迭代计算：
    $ z_{n+1} = z_n^2 + c $
    $ z_{0} = 0 $
    $ z_{1} = z_0^2 + c = c $
    $ z_{2} = z_1^2 + c = c^2 + c $

不同的参数 $c$ 可能使序列的绝对值逐渐发散到无限大，也可能收敛在有限的区域内
曼德博集合就是使序列不延伸至无限大的所有复数 $c$ 的集合

## 特性

- 自相似：[](https://www.mrob.com/pub/muency/pixelcounting.html)
- 面积：[曼德博集合的面积](https://mrob.com/pub/muency/areahistory.html)

## 定理

- 若 $|c| \le \frac{1}{4}$，则 $c \in M$
- 若 $c \in M$，则 $|c| \le 2$
- 若 $c \in M$，则 $|z_{n}| \le 2$

## 程序

- 思路

```cpp
For Each c in Complex
 repeats = 0
 z = 0
 Do
  z = z^2 + c
  repeats = repeats + 1
 Loop until abs(z) > EscapeRadius or repeats > MaxRepeats '根据定理三，EscapeRadius可设置为2。
 If repeats > MaxRepeats Then
  Draw c,Black                                            '如果迭代次数超过MaxRepeats，就将c认定为属于曼德博集合，并设置为黑色。
 Else
  Draw c,color(z,c,repeats)                               'colo函数用来决定颜色。
 End If
Next
```

决定颜色的方法

- 直接利用循环终止时的Repeats
- 综合利用z和Repeats
- Orbit Traps

```cpp
private double getDistance(Complex c,
                           Complex point,
                           int maxIteration)
{        
    double distance = 1e20;
    Complex z = new Complex(0, 0);
        
    for (int i=0; i<maxIteration; i++)
    {
        // Perform Mandelbrot iteration
        z = z.multiply(z);
        z = z.add(c);
               
        // Set new distance dist = min( dist, |z-point| )
        Complex zMinusPoint = new Complex(z);
        zMinusPoint = zMinusPoint.subtract(point);
            
        double zMinusPointModulus = zMinusPoint.magnitude();
        if (zMinusPointModulus < distance)
            distance = zMinusPointModulus;
    }
        
    return distance;
}
```
