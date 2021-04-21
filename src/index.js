import View from './view.js'
import Model from './model.js'
import validateInputData from './utils/validateInputData.js'

document.addEventListener('DOMContentLoaded', function() {
  const model = new Model()
  const view = new View()

  let addBtn = document.getElementById('addTask')

  model.setView(view)
  view.setModel(model)
  view.render()

  addBtn.addEventListener('click', () => {
    view.createTask(validateInputData())
  })


})