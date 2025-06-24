# 等式

## 和

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

$$
\sum_{i=0}^{n} i^{2} = \frac{n(n+1)(2n+1)}{6}
$$

$$
\sum_{i=0}^{n} i^{3} = [\frac{n(n+1)}{2}]^{2}
$$

$$
\sum_{i=n}^{m} t = 0, m < n
$$

## 三角形

勾股定理
$$
a^{2} + b^{2} = c^{2}
$$

## 三角函数

- $ \sin^{2}x + \cos^{2}x = 1 $

- $ \tan^{2}x + 1 = \frac{1}{\cos^{2}x} = \sec^{2}x $

- $ \cot^{2}x + 1 = \frac{1}{} = \csc^{2}x $

- $ \tan x = \frac{\sin x}{\cos x} $

- $ \cot x = \frac{\cos x}{\sin x} $

- $ \sin(x + y) = \sin x \cos y + \cos x + \sin y $

- $ \sin(x - y) = \sin x \cos y - \cos x + \sin y $

- $ \cos(x + y) = \cos x \cos y - \sin x \sin y $

- $ \cos(x - y) = \cos x \cos y + \sin x \sin y $

- $ \tan(x + y) = \frac{\tan x + \tan y}{1 - \tan x \tan y} $

- $ \tan(x - y) = \frac{\tan x - \tan y}{1 + \tan x \tan y} $

- $ \sin(2x) = 2 \sin x \cos x $

- $ \cos(2x) = \cos^{2}x - \sin^{2}x = 2 \cos^{2}x - 1 $

- $ \tan(2x) = \frac{2 \tan x}{1 - \tan^{2}x} $

- $ \cot(2x) = \frac{1 - \cot^{2}x}{2 \cot x} $

- $ \sin{\frac{x}{2}} = \pm \sqrt{\frac{1 - \cos x}{2}} $

- $ \cos{\frac{x}{2}} = \pm \sqrt{\frac{1 + \cos x}{2}} $

- $ \sin{\frac{x}{2}} = \pm \sqrt{\frac{1 - \cos x}{1 + \cos x}} = \frac{1 - \cos x}{\sin x} = \frac{\sin x}{1 + \cos x} $

- $$
    \sin x = \sum_{n=0}^{\infty} (-1)^{n} \frac{x^{2n + 1}}{(2n + 1)!} = x - \frac{x^{3}}{3!} + \frac{x^{5}}{5!} - \frac{x^{7}}{7!} + \cdots
  $$

- $$
    \cos x = \sum_{n=0}^{\infty} (-1)^{n} \frac{x^{2n}}{(2n)!} = 1 - \frac{x^{2}}{2!} + \frac{x^{4}}{4!} - \frac{x^{6}}{6!} + \cdots
  $$

- $$
    \tan x = \sum_{n=0}^{\infty} (-1)^{n} \frac{x^{2n + 1}}{(2n + 1)!} = \frac{x}{1 - \frac{x^{2}}{3!} + \frac{x^{4}}{5!} - \frac{x^{6}}{7!} + \cdots}
  $$

- $$
    \cot x = \sum_{n=0}^{\infty} (-1)^{n} \frac{x^{2n}}{(2n)!} = \frac{1}{1 - \frac{x^{2}}{3!} + \frac{x^{4}}{5!} - \frac{x^{6}}{7!} + \cdots}
  $$

- $$
    \sec x = \sum_{n=0}^{\infty} (-1)^{n} \frac{x^{2n}}{(2n)!} = 1 + \frac{x^{2}}{2!} + \frac{x^{4}}{4!} + \frac{x^{6}}{6!} + \cdots
  $$

- $$
    \csc x = \sum_{n=0}^{\infty} (-1)^{n} \frac{x^{2n}}{(2n)!} = 1 + \frac{x^{2}}{3!} + \frac{x^{4}}{5!} + \frac{x^{6}}{7!} + \cdots
  $$

- $$
    \sin x = \sum_{n=0}^{\infty} (-1)^{n} \frac{x^{2n + 1}}{(2n + 1)!} = \frac{x}{1 - \frac{x^{2}}{3!} + \frac{x^{4}}{5!} - \frac{x^{6}}{7!} + \cdots}
  $$

## 反三角函数

- $$

\arctan x = \sum_{n=0}^{\infty} (-1)^{n} \frac{x^{2n + 1}}{(2n + 1)!} = x - \frac{1}{3}x^{3} + \frac{1}{5}x^{5} - \frac{1}{7}x^{7} + \cdots
$$

- $ \arctan(-x) = - \arctan x$

- $$ \arctan'x = \frac{1}{1 + x^{2}} $$

- $$ \arctan''x = \frac{-2x}{(1 + x^{2})^{2}} $$

- $$ \arctan'''x = \frac{6x^2 - 2}{(1 + x^{2})^{3}} $$

- $$ \arctan''''x = \frac{-24x^3 + 24x}{(1 + x^{2})^{4}} $$

-
| x | y | $ \arctan y $ |
| :--: | :--: | :--: |
| | |

$$
atan2(y, x) = \begin{cases}
\arctan(\frac{y}{x}), x > 0\\
\arctan(\frac{y}{x}) + \pi, y \ge 0, x < 0 \\
\arctan(\frac{y}{x}) + \pi, y < 0, x < 0 \\
+\frac{\pi}{2}, y > 0, x = 0 \\
-\frac{\pi}{2}, y < 0, x = 0 \\
0, x = 0, y = 0
\end{cases}
$$
