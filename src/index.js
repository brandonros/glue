import { DiffDOM } from 'diff-dom'

export const h = (tagName, properties = {}, children = []) => {
  const element = document.createElement(tagName)
  Object.keys(properties).forEach((property) => element[property] = properties[property])
  if (Array.isArray(children)) {
    children.forEach((child) => element.appendChild(child))
  } else if (typeof children === 'string') {
    element.appendChild(document.createTextNode(children))
  }
  return element
}

export class Component {
  constructor({state, node, draw}) {
    this.state = state
    this.node = node
    this.draw = draw
  }

  render() {
    const dd = new DiffDOM()
    const elementA = this.node
    const elementB = this.draw()
    const diff = dd.diff(elementA, elementB)
    dd.apply(elementA, diff)
  }
}
