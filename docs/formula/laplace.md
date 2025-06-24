# 拉普拉斯变换

## 变换表

| f(t) | L(s) | 收敛区间 |
| :--: | :--: | :------: |
| $\delta (t)$ | 1 | 所有 s |
| $\delta (t - \tau)$ | $e^{-\tau s}$ | 所有 s |
| $u(t)$ | $ \frac{1}{s} $ | $Re(s) > 0$ |
| $u(t - \tau)$ | $ \frac{1}{s} e^{-\tau s}$ | $Re(s) > 0$ |
| $f(t- \tau)u(t - \tau)$ | $e^{-\tau s}F(s)$ | $Re(s) > 0$ |
| $u(t) - u(t - \tau)$ | $\frac{1}{s} (1- e^{\tau s})$ | $Re(s) > 0$ |
| $tu(t)$ | $1/s^2$ | $Re(s) > 0$ |
| $t^nu(t)$ | $n!/s^{n + 1}$ | $Re(s) > 0$ |
| $t^qu(t)$ | $(q+1)/s^{q + 1}$ | $Re(s) > 0$ |
| $\sqrt[n]{t}u(t)$ | $(q+1)/s^{q + 1}$ | $Re(s) > 0$ |
| $t^ne^{-\alpha t}u(t)$ | $n!/(s + \alpha)^{n+1}$ | $Re(s) > 0$ |
| $e^{-\alpha t}u(t)$ | $1/(s + \alpha)$ | $Re(s) > 0$ |
