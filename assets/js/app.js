(function() {
  const views = document.querySelectorAll('.view')

  const showView = (viewName) =>
    document.querySelector(viewName).classList.remove('hidden')

  const hideAllViews = (views) =>
    views.forEach(view => view.classList.add('hidden'))

  const showAddStudents = () => {
    hideAllViews(views)
    showView('#addStudentsView')
    const inputStudentName = document.querySelector('#studentName')
    inputStudentName.focus()
  }

  const showSortGroups = () => {
    hideAllViews(views)

    const studentsByGroup = document.querySelector('#studentsByGroup').value

    window.sortGroups({
      students: window.studentsList,
      studentsByGroup,
      target: '#sortGroupView'
    })

    showView('#sortGroupView')
  }
  
  const showSortOne = () => {
    hideAllViews(views)

    const totalStudents = window.studentsList.length
    const randomStudent = Math.floor(Math.random() * totalStudents) + 0

    document.querySelector('#sortOneView').innerHTML = `
      <h1>${window.studentsList[randomStudent]}</h1>
    `

    showView('#sortOneView')
  }

  const addStudentsButton = document.querySelector('#addStudentsButton')
  const sortGroupsButton = document.querySelector('#sortGroupsButton')
  const sortOneButton = document.querySelector('#sortOneButton')
  
  addStudentsButton.addEventListener('click', showAddStudents)
  sortGroupsButton.addEventListener('click', showSortGroups)
  sortOneButton.addEventListener('click', showSortOne)
})()