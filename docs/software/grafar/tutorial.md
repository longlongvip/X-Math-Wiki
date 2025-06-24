# tutorial
本节将快速引导您了解 grafar 的基本概念，以便您可以跳转到构建自己的很酷的东西。为了让您鸟瞰架构，普通的 grafar 应用程序结构如下：
- 使用生成器创建自由变量
- 数据通过 grafar.map 进行转换
- 自由变量和映射变量显示在面板上

一旦自由变量更新，grafar 就会使用其无功功率标记所有需要更新的因变量，面板会自动更新。用户输入和动画是通过从外部更新自由变量来处理的

## 绘图
为了展示我们生成的精美可视化效果，grafar 使用了 Panel，它只是一个绑定到 DOM 节点内画布的 WebGL 上下文。Grafar 神奇地跟踪您对数据所做的更新并安排面板更新。Grafar 并不局限于这种渲染方法，但目前它的效果最好

```js
// Dismiss this for now, we'll cover generators soon
const x = grafar.range(-1, 1, 20).select();
const y = grafar.range(-1, 1, 20).select();
const z = grafar.map([x, y], (x, y) => x * y);

// Pick a DOM element to draw the graph in
const container = document.getElementById('render');
// And create a panel in it
const pan = new grafar.Panel(container);

// pin([x, y, z]) displays a plot with default color
const plainGraph = grafar.pin([x, y, z], pan);

// We can pin() multiple plots on a single panel
const upperGraph = grafar.pin([x, y, grafar.map(z, z => z + 1)], pan);

// We can also pass dynamic colors using an object form of pin()
const colorGraph = grafar.pin({ axes: [x, y, z], color: [x, y, z] }, pan);
```
您可以像往常一样通过CSS设置容器的背景颜色

## 切换绘图可见性
pin() 返回一个对象，该对象允许您通过 hide() 方法独立显示或隐藏图形
```js
const control = document.getElementById('type');
const selectVisible = value => {
  Object.keys(graphs).forEach(key => {
    graphs[key].hide(control.value !== key);
  });
};
selectVisible();
control.addEventListener('change', selectVisible);
```

## 设置轴和制作 2D 绘图
面板具有 setAxes 方法，可用于设置轴标签。作为一个简洁的副作用，它还允许您使面板显示 2D 图形：
```js
const x = grafar.range(-1, 1, 100).select();
const y = grafar.map(x, x => 2 * Math.sin(x));
const pan = grafar.panel(document.getElementById('render2d'));

// Passing 2 labels makes the panel 2D
pan.setAxes(['xs', 'ys']);

// Now you only need to pass 2 varibles to pin():
grafar.pin([x, y], pan);
// Color, naturally, still has [r, g, b] components:
grafar.pin({ axes: [y, x], color: [x, y, x] }, pan);
```

## 生成数据
每个 grafar 应用程序都从生成器开始。Generator 是一种用数字填充数组并告诉 grafar 如何连接绘图上的点（模拟集合拓扑）的方法。我们使用生成器来定义自由变量，其他变量可以取决于它们的输出

::: tip 提示
通常，在生成器的输出端调用 select()。这是支持一些高级用例的技术细节
:::

## 内置生成器
Grafar 附带了涵盖大多数用例的内置生成器选择
```js
// set is the most basic generator that wraps a numeric array for use in grafar.
const set = grafar.set([-1, 0, 1]).select();

// Despite the name, items are not required (or guaranteed) to be unique.
// grafar.set([0, 0, 0]).select() has 3 zeroes
// The array is shallow-cloned.

// seq(a, b, n) generates n numbers, spaced equally between a and b,
// including the endpoints. The points are not visually linked, giving you a set like
// { a + i * (b - a) / (n - 1) | i = 0..n }.
const seq = grafar.seq(-1, 1, 20).select();

// range() is the same as seq(), but the points are connected to emulate [a, b]
const range = grafar.range(-1, 1, 20).select();

// logseq() generates points spaced logarithmically between a and b
// More points are generated closer to a. This is useful if you want to apply a
// map that is more "wavy" around a, then gets smoother when going to b.
// In case you're wondering, { a + log(i) * (b - a) / log(n)) * (b - a) | i = 0..n }
const logseq = grafar.logseq(-1, 1, 20).select();

// ints() gives you all the integers between a and b, including the endpoints.
const ints = grafar.ints(-2, 2.5).select(); // [-2, -1, 0, 1, 2]

// this code paints the chart - ignore it for now
grafar.setup({ particleRadius: .08 });
const pan = new grafar.Panel(document.getElementById('set-gen')).setAxes(['x', 'y']).clearAxes();
grafar.pin([set, -2], pan);
grafar.pin([seq, -1], pan);
grafar.pin([range, 0], pan);
grafar.pin([logseq, 1], pan);
grafar.pin([ints, 2], pan);
grafar.setup({ particleRadius: .05 });
```

## 恒定生成器
在大多数情况下，grafar 还将 JS 常量视为生成器。基本上，通过 9 等同于通过 `grafar.set([9]).select()`

## vsolve
我们稍后将更详细地介绍的最后一个生成器是 vsolve。它用于查找函数的零点（或绘制隐式定义的集合，如果您愿意的话）
```js
const circle = grafar.vsolve(
  // the fuction to be solved
  v => Math.pow(v[0], 2) + Math.pow(v[1], 2) - 2,
  // find 1000 points that match
  1000,
  // Dimensionality - here we have a 2D curve
  2
).select();
const iPan = grafar.panel(document.getElementById('implicit')).setAxes(['x', 'y']);
grafar.pin(circle, iPan);
```

## 映射数据
一旦我们用生成器定义了免费，就该映射它们并制作一些很酷的东西了。Grafar 足够聪明，可以跟踪传递给 map() 的变量的依赖关系，并生成有意义的对象

## 显式曲面：（x， y） -> z
如果 map() 获取多个自变量，则它会为输入变量的每个组合调用该函数并推导出最终对象拓扑。对于 4 示例，映射 2 个范围会给出一个曲面

```js
const x = grafar.range(-1, 1, 100).select();
const y = grafar.range(-1, 1, 100).select();
const z = grafar.map([x, y], (x, y) => Math.cos(x) * Math.sin(y));
grafar.pin([x, y, z], grafar.panel(document.getElementById('surf')));
```

## 3D 曲线集：（x， i） -> z
如果将其中一个范围替换为 seq()，则生成点集，则 seq 中每个点的曲线而不是曲面
```js
const x = grafar.range(-1, 1, 100).select();
const y = grafar.seq(-1, 1, 20).select();
const z = grafar.map([x, y], (x, y) => Math.cos(x) * Math.sin(y));
grafar.pin([x, y, z], grafar.panel(document.getElementById('lines')));
```

## 显式曲线：x -> y
显然，您可以应用相同的技术来制作 2D 绘图：
```js
const x = grafar.range(-1, 1, 100).select();
const y = grafar.map(x, (x) => 2 * x * x);
grafar.pin([x, y], grafar.panel(document.getElementById('curve')).setAxes(['x', 'y']));
```

## 中间变量：x -> x'， （x， x'） -> y
Grafar 足够聪明，知道 map([x, map(x)], fn) 是 x 的函数，具有一个自由度而不是曲面
```js
const x = grafar.range(-1, 1, 100).select();
const xTick = grafar.map(x, x => Math.pow(x, 3));
const y = grafar.map([x, xTick], (x, sqrt) => x * sqrt);
grafar.pin([x, y], grafar.panel(document.getElementById('interim')).setAxes(['x', 'y']));
```

## 参数画图
从我们在 map（） 部分中断的地方开始，我们将看到在 grafar 中创建参数化图是多么容易

## 参数曲线：t -> （x， y）
我们可以制作任意维度的参数化曲线——让我们尝试在 3D 空间中绘制曲线，只是为了花哨：
```js
const t = grafar.range(0, 2 * Math.PI, 2000).select();
// note how we don't actually display t on the panel, only x, y, and z that depend on it
grafar.pin([
  grafar.map(t, t => Math.sin(t)),
  grafar.map(t, t => Math.cos(t)),
  grafar.map(t, t => Math.sin(t) * Math.cos(t))
], grafar.panel(document.getElementById('param-curve')));
```

## 参数化曲面：（p， q） -> （x， y， z）
同样，如果我们想制作一个参数化曲面，我们只需要 2 个参数而不是一个：
```js
const p = grafar.range(-1, 1, 100).select();
const q = grafar.range(0, 2, 100).select();

const xp = grafar.map([p, q], (p, q) => p - q);
const yp = grafar.map([p, q], (p, q) => p + q);
const zp = grafar.map([p, q], (p, q) => Math.sin(q + p));

grafar.pin([xp, yp, zp], new grafar.Panel(document.getElementById('psurf')));
```

## 方程求解器
在 grafar 中生成点集的最后一种方法是 vsolve，它允许您对函数的零集进行采样（如果您愿意，可以绘制隐式函数）。vsolve 在内部使用牛顿方法

::: warning 注意
vsolve 目前仅限于生成点云（不是具有面或具有边的曲线的真实表面），最适合位于零附近的光滑有界对象
:::

## 隐式曲面
```js
const surf = grafar.vsolve(
    // The function to be solved - a sphere, x^3 + y^2 + z^2 == 2, in this case
    // Note that the function receives a single array agrument, unlike in map()
    v => Math.pow(v[0], 3) + Math.pow(v[1], 2) + Math.pow(v[2], 2) - 2,
    // Find 50000 points that match
    50000,
    // We're solving in 3 dimensions
    3
).select();

// display as usual
grafar.pin(surf, grafar.panel(document.getElementById('isurf')));
```

## 隐式曲线
当然，vsolve 也适用于曲线
```js
const curve = grafar.vsolve(
    v => Math.pow(v[0], 4) + Math.pow(v[1], 4) - 3,
    5000,
    2
).select();

grafar.pin(curve, grafar.panel(document.getElementById('icurve')).setAxes(['x', 'y']));
```

## 创建动画
Grafar 依靠响应式编程来管理更新。它跟踪每个变量的依赖关系，以决定何时应更新绘图以及应重新计算哪些数据

在 grafar 中制作动画的最便捷方法是使用 ms() 生成器。它的每一帧都会自我失效并计划任何因变量的更新。 请注意，与其他生成器不同，它在内部调用自己的 select()，因此无需自己执行此操作。

```js
const x = grafar.range(-3, 3, 100).select();
const y = grafar.range(-3, 3, 100).select();
// Here is the timer
const t = grafar.ms();
// ms() are pretty fast, so you would normally divide them by some value
// to slow down the movement to a sensible speed:
const sec = grafar.map(t, t => t / 1000);

// Now the timer can be used as a regular grafar variable:
const z = grafar.map([x, y, sec], (x, y, s) => Math.sin(x + y) * Math.cos(s));
grafar.pin([x, y, z], grafar.panel(document.getElementById('animation')));
```
ms() 生成器可以在多个图表之间安全地重复使用，但拥有多个计时器也不会有什么坏处。
ms() 可以在小数毫秒内屈服。如果您需要离散时间，请像往常一样使用 Math.floor()

```js
const x = grafar.range(-3, 3, 100).select();
const y = grafar.range(-3, 3, 100).select();
const t = grafar.ms();

// The only change is here - iSec now contains an integer number of
// seconds since start, and you can...
const iSec = grafar.map(t, t => Math.floor(t / 1000));

// ...use integer operators like % on it or access an external array or anything
const z = grafar.map([x, y, iSec], (x, y, i) => Math.sin(x + y) * (i % 2));
grafar.pin([x, y, z], grafar.panel(document.getElementById('disc-animation')));
```

## 使用用户输入

用户交互的处理方式与 grafar 中的动画非常相似，尽管语法很奇怪。
```js
// this is our control variable
const p = grafar.set([0]).select();

// these are regular grafar variables
const x = grafar.range(-2, 2, 500).select();
const y = grafar.map([x, p], (x, p) => 2 * Math.sin(x + p));
grafar.pin([x, y], grafar.panel(document.getElementById('user')).setAxes(['x', 'y']));

// grafar doesn't really care how you bind to the DOM
const control = document.getElementById('value-control');
// on update...
const update = (e) => {
  // ...we read the value of the control...
  const val = Number(control.value) / 10;
  // ... and wrap it into a grafar variable
  grafar.set([val])
      // But now we call into(<control variable>) instead of select()
      .into(p);
};
control.addEventListener('input', update);
update();
```

## 数据可视化
虽然数据可视化不是最初的设计目标之一，但 grafar 的绝对数字运算能力使其能够以平滑的帧速率渲染具有数百万个点的散点图

```js
fetch('assets/milano-stops.json').then(res => res.json()).then((stopData) => {
    var map = grafar.panel(document.getElementById('stops-map')).setAxes(['x', 'y']).clearAxes();
    const stopCount = stopData.length;
    var scale = 30;

    const stopId = grafar.ints(0, stopCount - 1).select();
    const stops = [
        grafar.map(stopId, id => (stopData[id][1] - 45.5) * scale),
        grafar.map(stopId, id => (stopData[id][2] - 9.2) * scale),
    ];

    grafar.pin(stops, map);
});
```
## API参考
https://thoughtspile.github.io/grafar/#/api
