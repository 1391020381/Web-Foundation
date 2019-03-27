// assist.js

// 由一个组件,向上找到最近的指定组件

function findComponentUpward(context, componentName) {
  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }
  return parent
}

// 由一个组件,向上找到所有的指定的组件
function findComponentsUpward(context, componentName) {
  let parents = []
  const parent = context.$parent
  if (parent) {
    if (parent.$options.name === componentName) {
      parent.push(parent)
    } else {
      return parents.concat(findComponentsUpward(parent, componentName))
    }
  } else {
  }
}

// 由一个组件,向下找到最近的指定组件

function findComponentDownward(context, componentName) {
  const childrens = context.$children
  let children = null
  if (childrens.length) {
    for (const child of childrens) {
      const name = child.$options.name
      if (name === componentName) {
        children = child
        break
      } else {
        children = findComponentDownward(child, componentName)
        if (children) break
      }
    }
  }
  return children
}

// 由一个组件,向下找到指定的所有组件

function findComponenstDownward(context, componentName) {
  return context.$children.reduce((componentName, child) => {})
}

//找到 指定组件的兄弟组件
function findBrothersComponents(context, componentName, exceptMe = true) {
  let res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName
  })
  let index = res.findIndex(item => {
    item._uid === context._uid
  })
}
export {
  findComponentUpward,
  findComponentsUpward,
  findComponentDownward,
  findComponenstDownward,
  findBrothersComponents
}
