# 积分

## 不定积分

## 定积分

$$
\begin{aligned}
& \int_{0}^{\infty} \frac{x\cos(x^2)}{x^4+1}dx \\ 
& = \frac{1}{2} \int_{0}^{\infty} \frac{\cos t}{t^2+1} dt \\ 
& = \frac{1}{2} \int_{0}^{\infty} \cos t d \arctan t \\ 
& = \frac{1}{2} [cos t arctan t]_{0}^{\infty} - \\ 
& = \frac{\pi}{4e}
\end{aligned}
$$

$$
\begin{aligned}
& \int_{0}^{\infty} \frac{\sin x}{\sinh x} dx \\ 
& = \int_{0}^{\infty} \frac{\sin x}{\frac{e^{x}-e^{-x}}{2}} dx \\ 
& = \int_{0}^{\infty} \frac{2 \sin x}{e^{x}-e^{-x}} dx \\ 
& = \int_{0}^{\infty} \frac{2e^{-x} \sin x}{1-e^{-2x}} dx \\ 
& = \int_{0}^{\infty} 2e^{-x} \sin x \sum_{n=0}^{\infty}e^{-2nx} dx \\
& = \sum_{n=0}^{\infty} \int_{0}^{\infty} 2e^{-(2n+1)x} \sin xdx \\
& = \sum_{n=0}^{\infty} 2|\frac{e^{-(2n+1)x}}{(2n+1)^2+1} [-(2n+1)\sin x - \cos x] |_{0}^{\infty} \\
& = \sum_{n=0}^{\infty} \frac{2}{(2n+1)^2+1}
\end{aligned}
$$

$$
\begin{aligned}
& \tanh x = 2x(\frac{1}{x^2+(\frac{\pi}{2})^2} + \frac{1}{x^2+(\frac{3\pi}{2})^2} + \frac{1}{x^2+(\frac{5\pi}{2})^2} + ...)
\end{aligned}
$$

$$
\begin{aligned}
& \tanh \frac{\pi}{2} = 2\frac{\pi}{2}(\frac{1}{(1^2+1)(\frac{\pi}{2})^2} + \frac{1}{(3^2+1)(\frac{\pi}{2})^2} + \frac{1}{(5^2+1)(\frac{\pi}{2})^2} + ...) \\
& = \frac{2}{\pi} \sum_{n=0}^{\infty} \frac{2}{(2n+1)^2+1}
\end{aligned}
$$

$$
\begin{aligned}
\sum_{n=0}^{\infty} \frac{2}{(2n+1)^2+1} = \frac{\pi}{2} \tanh \frac{\pi}{2}
\end{aligned}
$$
