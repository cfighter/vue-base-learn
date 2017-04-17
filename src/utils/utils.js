const STORAGE_KEY = 'todos-vuejs-2.0'
const todoStorage = {
  fetch () {
    let todos = window.JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    return todos
  },
  save (todos) {
    window.localStorage.setItem(STORAGE_KEY, window.JSON.stringify(todos))
  }
}
const filter = {
  action: ['all', 'remained', 'completed'],
  all (todos) {
    return todos
  },
  active (todos) {
    return todos.filter(function (todo) {
      return !todo.active
    })
  },
  completed (todos) {
    return todos.filter(function (todo) {
      return todo.active
    })
  }
}

export {todoStorage, filter}
