export default class Model {
  constructor() {
    this.view = null
    this.tasks = JSON.parse(localStorage.getItem('tasks'))
    // console.log('model')
    // console.log(this.tasks)
    this.currentId = 0
    if (!this.tasks || this.tasks.length < 1) {
      this.tasks = [{
        id: this.currentId,
        name: 'Example',
        checked: false
      }]
      // console.log('model-ini')
      // console.log(this.tasks)
      // console.log(this.tasks)
      // console.log('model-end')
      this.currentId = 1
    } else {
      this.currentId = this.tasks[this.tasks.length - 1].id + 1
    }
    // console.log(this.currentId)
  }

  setView (view) {
    this.view = view
  }

  getTasks () {
    return this.tasks
  }

  addTask (taskName) {
    const task = {
      id: this.currentId++,
      name: taskName,
      checked: false
    }

    this.tasks.push(task)
    // console.log(this.tasks)
    this.saveData()
    return {...task}
  }

  saveData () {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  toggleData (checked, id) {
    const task = this.findTask(id)
    // console.log(task)
    this.tasks[task.id].checked = checked
    // console.log(this.tasks[task.id])
    // console.log(this.tasks)
    this.saveData()
  }

  findTask (id) {
    return this.tasks.find(task => task.id === id)
  }

}