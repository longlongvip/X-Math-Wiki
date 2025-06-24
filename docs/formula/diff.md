# 微分

## 导数

### 运算法则

| 运算 | 法则 | 运算 | 法则 |
| :--: |  :--: | :--: | :--: |
| + | $ \frac{d}{dx}(f + g) = \frac{df}{dx} + \frac{dg}{dx} $ | - | $ \frac{d}{dx}(f - g) = \frac{df}{dx} - \frac{dg}{dx} $ |
| $ \times $ | $ \frac{d}{dx}(f \cdot g) = \frac{df}{dx}g + \frac{dg}{dx}f$ | $ \div $ | $ \frac{d}{dx}(\frac{f}{g}) = \frac{\frac{df}{dx}g - \frac{dg}{dx}f}{g^2}$ |
| $f^g $ | $ \frac{d}{dx}(f^g) = f^g [f'\frac{g}{f} + g' \ln(f)] $ | $ f^n $ | $ \frac{d}{dx}(f^n) = n f^{n-1} \frac{df}{dx} $ |
| 链式| $ \frac{d}{dx}[f(g(x))] = \frac{df}{dg} \cdot \frac{dg}{dx} = f'(g(x)) \cdot g'(x) $ | $ \frac{1}{f} $| $ \frac{d}{dx}(\frac{1}{f}) = -\frac{1}{f^2} \frac{df}{dx}$ |
| $ c^f $ | $ \frac{d}{dx}(c^f) = c^f \ln(c) \cdot f' $ | $ (fg)^{(n)} $ | $ \sum C_{n}^{i}f^{(n-i)} \cdot g^{i} $ |

### 常用函数求导

| 多项式 | 导数 | 三角函数 | 导数 | 反三角函数 | 导数 | 指数与对数 | 导数 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :---: |
| $ C $ | $ 0 $ | $ \sin x $ | $ \cos x $ | $ \arcsin(x) $ | $ \frac{1}{\sqrt{1 - x^2}} $| $ e^x $ | $ e^x $ |
| $ x $ | $ 1 $ | $ \cos x $ | $ -\sin x $ | $ \arccos(x) $ | $ -\frac{1}{\sqrt{1 - x^2}} $ | $ a^x $ | $ a^x \ln{a} $ |
| $ ax $ | $ a $ |  $ \tan x $ | $ \sec^2 x $ | $ \arctan(x) $ | $ \frac{1}{1 + x^2} $ |  $ \ln(x) $ | $ \frac{1}{x} $ |
| $ ax + C $ | $ a $ | $ \cot x $ | $ -\csc^2 x $ | $ \operatorname{arccot}(x) $ | $ -\frac{1}{1 + x^2} $ | $ \log_{a}{x} $ | $ \frac{1}{x\ln a} $ |
| $ x^n $ | $ nx^{n-1} $ | $ \sec x $ | $ \sec x \tan x $ | $ \operatorname{arcsec}(x) $ | $ \frac{1}{abs(x) \cdot \sqrt{x^2 - 1}} $ |
| $ \sqrt{x} $ | $ \frac{1}{2\sqrt{x}} $ | $ \csc x $ | $ -\csc x \cot x $ | $ \operatorname{arccsc}(x) $ | $ -\frac{1}{abs(x) \cdot \sqrt{x^2 - 1}} $
| $ \frac{1}{x} $ | $ -\frac{1}{x^2} $ |

| 双曲函数 | 导数 | 反双曲函数 | 导数 |
| :--: | :--: | :--: | :--: |
| $ \sinh(x) $| $ \cosh(x) $ | $ \operatorname{arsinh}(x) $| $ \frac{1}{\sqrt{1 + x^2}} $ |
| $ \cosh(x) $| $ \sinh(x) $ | $ \operatorname{arcosh}(x) $| $ \frac{1}{\sqrt{x^2 - 1}} $ |
| $ \tanh(x) $| $ \operatorname{sech^2}(x) $ | $ \operatorname{artanh}(x) $| $ \frac{1}{1 - x^2} $ |
| $ \operatorname{sech}(x) $| $ -\tanh(x) \operatorname{sech}(x) $ | $ \operatorname{arsech}(x) $| $ \frac{1}{1 - x^2} $ |
| $ \coth(x) $| $ \operatorname{csch^2}(x) $ | $ \operatorname{arcsch}(x) $| $ \frac{1}{1 - x^2} $ |
| $ \operatorname{csch}(x) $| $ -\operatorname{coth}(x) \operatorname{csch}(x) $ | $ \operatorname{arcoth}(x) $| $ \frac{1}{1 - x^2} $ |