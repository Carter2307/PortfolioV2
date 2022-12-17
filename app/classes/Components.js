import EventEmitter from 'events'
import elements from './elements'

export default class Components extends EventEmitter {
  constructor(componentName) {
    super()
    this.selectorChildrens = elements[componentName]
    this.root = this.handleElementObject(elements)
    this.elements = this.getElements(this.selectorChildrens)
  }

  getElements(childrens) {
    const elements = {}
    for (const keys in childrens) {
      const value = childrens[keys]

      if (value instanceof Object) {
        elements[keys] = this.handleElementObject(value)
      } else {
        elements[keys] = [...document.querySelectorAll(value)]
        if (elements[keys].length === 0) {
          elements[keys] = null
        } else if (elements[keys].length === 1) {
          elements[keys] = document.querySelector(value)
        }
      }
    }

    return elements
  }

  handleElementObject(object) {
    let buildedObjects = {}
    for (const key in object) {
      const value = object[key]
      if (value instanceof Object) {
        buildedObjects[key] = this.handleElementObject(value)
      } else {
        buildedObjects[key] = [...document.querySelectorAll(value)]
        if (buildedObjects[key].length === 0) {
          buildedObjects[key] = null
        } else if (buildedObjects[key].length === 1) {
          buildedObjects[key] = document.querySelector(value)
        }
      }
    }
    return buildedObjects
  }
}
