# glue
hyperapp inspired Javascript framework composed of nothing but state and rendering

# Example

```javascript
var h = glue.h;
var setState = glue.setState;

var component1 = {
  state: {
    counter: 0
  },
  render: function() {
    var self = this;
    return self.nodes = h('div', {}, [
      h('span', {}, `Component #1 value: ${self.state.counter}`),
      h('button', {onclick: setState.call(self, 'counter', self.state.counter + 1)}, '+'),
      h('button', {onclick: setState.call(self, 'counter', self.state.counter - 1)}, '-')
    ]);
  }
};
var component2 = {
  state: {
    counter: 0
  },
  render: function() {
    var self = this;
    return self.nodes = h('div', {}, [
      h('span', {}, `Component #2 value: ${self.state.counter}`),
      h('button', {onclick: setState.call(self, 'counter', self.state.counter + 1)}, '+'),
      h('button', {onclick: setState.call(self, 'counter', self.state.counter - 1)}, '-')
    ]);
  }
};
var app = {
  state: {},
  render: function() {
    var self = this;
    return self.nodes = h('div', {}, [
      component1.render(),
      component2.render()
    ]);
  }
};
document.body.appendChild(app.render());
```
