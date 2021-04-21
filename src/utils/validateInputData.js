const validateInputData = () => {
  let inputTask = document.getElementById('input__data')
  let requiredTask = document.getElementById('warning__alert-title')

  if (inputTask.value.length > 0 && inputTask.value.trim() !== '') {
    let data = inputTask.value
    requiredTask.classList.contains('warning') ? '' : requiredTask.classList.add('warning')
    inputTask.value = ''
    return data
  } else {
    requiredTask.classList.remove('warning')
    return null
  }
}

export default validateInputData
