(function() {
  
  const views = document.querySelectorAll('.view')
  const addStudentsButton = document.querySelector('#addStudentsButton')
  const sortGroupsButton = document.querySelector('#sortGroupsButton')
  const sortOneButton = document.querySelector('#sortOneButton')

  const showView = (viewName) =>
    document.querySelector(viewName).classList.remove('hidden')

  const hiddenAllViews = (views) =>
    views.forEach(view => view.classList.add('hidden'))

  addStudentsButton.addEventListener('click', () => {
    hiddenAllViews(views)
    showView('#addStudentsView')
    const inputStudentName = document.querySelector('#studentName')
    inputStudentName.focus()
  })

  sortGroupsButton.addEventListener('click', () => {
    hiddenAllViews(views)

    const studentsByGroup = document.querySelector('#studentsByGroup').value

    window.sortGroups({
      students: window.studentsList,
      studentsByGroup,
      target: '#sortGroupView'
    })

    showView('#sortGroupView')
  })

  sortOneButton.addEventListener('click', () => {
    hiddenAllViews(views)

    const random = Math.floor(Math.random() * window.studentsList.length) + 0 
    
    document.querySelector('#sortOneView').innerHTML = `
      <h1>${window.studentsList[random]}</h1>
    `

    showView('#sortOneView')
  })

})()