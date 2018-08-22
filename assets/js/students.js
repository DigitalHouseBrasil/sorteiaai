(function() { 
  window.studentsList = []

  const inputStudentName = document.querySelector('#studentName')
  const studentsList = document.querySelector('#studentsList')

  inputStudentName.focus()

  const removeStudent = (e) => {
    e.currentTarget.parentNode.remove()
    
    const studentToRemove = e.target.getAttribute('data-student')
    const newStudentList = window.studentsList.filter(student =>
      student !== studentToRemove
    )

    window.studentsList = newStudentList    
  }

  const addRemoveEvent = () => {
    const removeButtons = document.querySelectorAll('#studentsList button')
    removeButtons.forEach(button => {      
      button.addEventListener('click', removeStudent)
    })
  }

  const addStudent = () => {
    const inputValue = inputStudentName.value
    const li = document.createElement('li')
    const studentName = document.createTextNode(inputValue)
    const removeButton = document.createElement('button')
    
    removeButton.innerHTML = 'x'
    removeButton.setAttribute('data-student', inputValue)

    li.appendChild(studentName)
    li.appendChild(removeButton)
    studentsList.appendChild(li)
    
    window.studentsList.push(inputValue)

    inputStudentName.value = ''
    inputStudentName.focus()

    addRemoveEvent()
  }

  const checkKeyPressed = (e) => {
    if (e.charCode === 13) {
      addStudent()
    }
  }

  inputStudentName.addEventListener('keypress', checkKeyPressed)
})()
