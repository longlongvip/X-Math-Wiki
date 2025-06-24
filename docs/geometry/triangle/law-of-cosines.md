# 余弦定理

余弦定理是三角形中三边长度与一个角的余弦值的数学式，参考下图，余弦定理指的是
$$
c^{2} = a^{2} + b^{2} - 2ab \cos \gamma
$$
其中 $c$ 是 $\gamma$ 角的对边，而 $a$ 和 $b$ 是 $\gamma$ 角的邻边
勾股定理则是余弦定理的特殊情况，当 $\gamma$ 为 $90 \degree$时，$\cos \gamma = 0$，等式可被简化为 $c^2 = a^2 + b^2$

## 历史

余弦定理的历史可追溯至公元三世纪前欧几里得的几何原本，在书中将三角形分为钝角和锐角来解释，这同时对应现代数学中余弦值的正负。根据几何原本第二卷的命题12和13，并参考图，以现代的数学式表示即为：

## 证明

在 $c$ 上做高可以得到: $c = a \cos \beta + b \cos \alpha$
将等式同乘以 $c$ 得到：$c^{2} = ac \cos \beta + bc \cos \alpha$
运用同样的方式可以得到：$a^{2} = ac \cos \beta + ab \cos \gamma$ 和 $b^{2} = bc \cos \alpha + ab \cos \gamma$
将 $c^{2}$ 的右式取代：$c^{2} = ac \cos \beta + bc \cos \alpha = (a^{2} - ab \cos \gamma) + (b^{2} - ab \cos \gamma) = a^{2} + b^{2} - 2ab \cos \gamma$

## 应用

余弦定理是解三角形中的一个重要定理，求边和求角

## 代码

$$ A={\sqrt {s\left(s-a\right)\left(s-b\right)\left(s-c\right)}}$$，

{\displaystyle == > $$
