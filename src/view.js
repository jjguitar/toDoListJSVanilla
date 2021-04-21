export default class View {
  constructor() {
    this.model = null
  }

  render () {
    document.getElementById('all__task-container').innerHTML = ''
    const tasks = this.model.getTasks()
    tasks.forEach((task) => this.drawTask(task))
  }

  setModel(model) {
    this.model = model
  }

  getData(data) {
    // console.log(data)
  }

  createTask(data) {
    console.log('data', data)
    if (data !== null) {
      const task = this.model.addTask(data)
      this.drawTask(task)
    }
  }

  drawTask(task, change) {
    // console.log(task)
    // console.log(change)
    let allTaskContainer = document.getElementById('all__task-container')
    let activeTaskContainer = document.getElementById('active__task-container')
    let doneTaskContainer = document.getElementById('done__task-container')

    if (change === undefined) allTaskContainer.appendChild(this.createElement(task, task.checked))
    // task.checked ? doneTaskContainer.appendChild(this.createElement(task, true)) : activeTaskContainer.appendChild(this.createElement(task, true))
  }

  createElement (data, checked) {
    var newContent = document.createTextNode(data.name);
    var textIcon = document.createTextNode('delete_outline');
    const checkbox = document.createElement('input')
    const taskNew = document.createElement('span')
    const spanSuper = document.createElement('span')
    const icon = document.createElement('span')

    // taskNew.className = 'show'
    checked ? spanSuper.className = 'master-span span-view show false-checked' : spanSuper.className = ' master-span span-view show true-checked'
    // taskNew.className = 'show true-checked'
    taskNew.id = `${data.id}span`
    checked ? taskNew.className = 'align-span line-middle' : taskNew.className = 'align-span'
    checkbox.type = 'checkbox'
    checkbox.checked = data.checked
    checkbox.id = data.id
    checkbox.onclick = () => this.toggleData(data.id)
    icon.className = 'material-icons hide-icon view-icon'
    icon.appendChild(textIcon)
    // spanSuper.className = 'master-span'

    taskNew.appendChild(checkbox)
    taskNew.appendChild(newContent)
    spanSuper.appendChild(taskNew)
    spanSuper.appendChild(icon)
    return spanSuper
  }

  toggleData (id) {
    let checked = document.getElementById(`${id}`)
    // console.log(checked.checked)
    this.model.toggleData(checked.checked, id)
    // console.log(checkedContainer)
    // this.drawTask(taskChange, checked.checked)
    this.render()
  }
}