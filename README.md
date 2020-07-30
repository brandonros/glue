# glue
hyperapp inspired Javascript framework composed of nothing but state and rendering

# Example

```javascript
const form = new Component({
  state: {
    username: 'foo',
    password: 'bar'
  },
  draw: function () {
    return h('div', {}, [
      h('strong', {}, 'Username'),
      h('br'),
      h('input', { type: 'text', value: this.state.username, id: 'username' }),
      h('br'),
      h('strong', {}, 'Password'),
      h('br'),
      h('input', { type: 'password', value: this.state.password, id: 'password' }),
      h('br'),
      h('button', { onclick: (event) => console.log(event) }, 'Submit')
    ])
  }
})

const app = new Component({
  state: {},
  node: document.querySelector('#app'),
  draw: function () {
    return h('div', {}, [
      form.draw()
    ])
  }
})

app.render()

setTimeout(() => {
  form.state.username = 'lol'
  app.render()
}, 1000)
```
