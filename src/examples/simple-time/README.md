## The Humble Clock

In this example you will start by creating a simple Clock Component. It will simply show the current time when you load the component.

```
10:09:45
```

## Improve it

Now we can make it more useful by showing a live ticking clock. To do this we need to hook into the `setInterval()` function provided by the browser. This will invoke a function at the specified interval continuously. If we invoke it **every second (1000ms)**, we can refresh the time and show a live ticking clock!

```js
// 1. Use setInterval() to render the clock
// 2. We have to switch to the class based React Component
// 3. In the componentDidMount, we can call setInterval
```

