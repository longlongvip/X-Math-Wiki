# 龙格库塔法

## C++

```c++
float rk4(float in, float h, float x, std::function f)
{
    float k1 = f(in, x);
    float k2 = f(in + h * k1 / 2.0, x + h / 2.0);
    float k3 = f(in + h * k2 / 2.0, x + h / 2.0);
    float k4 = f(in + h * k3, x + h);
    return in + h/6.0 * (k1 + 2 * k2 + 2*k3 + k4);
}
```
