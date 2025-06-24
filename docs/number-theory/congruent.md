# 同余

## 定义

$(b - c) \div a = 0$, 那么称$b$与$c$对$a$同余
$(b - c) \div a \neq 0$, 那么称 $b$ 与$c$对$a$不同余
$ a $ 称为模

例子：
> $10 \div 3 = 3 \cdots 1, 10 \div 6 = 1 \cdots 4, 10 \div 9 = 1 \cdots 1$
> 所以$10$与$3$对$1$同余，$10$与$6$对$4$同余，$10$与$9$对$1$同余

对给定的数 a, 对模 m 的所有剩余由公式 $km + a$ 给出，其中 k 是整数
将使用 $a \equiv b \mod m$ 表示 a 与 b 对 m 同余

## 同余的性质

1. 自反性：$a \equiv a \mod m$
2. 对称性：$a \equiv b \mod m$ 则 $b \equiv a \mod m$
3. 传递性：$a \equiv b \mod m, b \equiv c \mod m$ 则 $a \equiv c \mod m$
4. 加法：$a \equiv b \mod m, c \equiv d \mod m$ 则 $a + c \equiv b + d \mod m$
5. 乘法：$a \equiv b \mod m, c \equiv d \mod m$ 则 $ac \equiv bd \mod m$
6. 幂：$a \equiv b \mod m$ 则 $a^n \equiv b^n \mod m$
7. 多项式也成立

## 同余的应用

1. 整数 $N = a + 10b + 100c + 1000d + \cdots$：
如果 $a + b + c + d + \cdots $ 可以被 n 整除，则 $N$ 可以被 n 整除

## 一次同余方程

定义：
$ax + b \equiv c \mod m$

有解的充要条件是 $gcd(a, m) = 1$
