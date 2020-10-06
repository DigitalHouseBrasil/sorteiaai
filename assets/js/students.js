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

  const addRemoveEvent = (button) => {   
    button.addEventListener('click', removeStudent)
  }

  const addStudent = (e) => {
    const inputValue = inputStudentName.value

    const students = inputValue.split(',')

    students.forEach(student => {
      student = student.trim()

      if (student !== '') {
        const li = document.createElement('li')
        const studentName = document.createTextNode(student)
        const removeButton = document.createElement('button')
        
        removeButton.innerHTML = 'x'
        removeButton.setAttribute('data-student', student)
    
        li.appendChild(studentName)
        li.appendChild(removeButton)
        studentsList.appendChild(li)
        
        window.studentsList.push(student)
    
        addRemoveEvent(removeButton)
      }
    })

    inputStudentName.value = ''
  }

  const checkKeyPressed = (e) => {
    if (e.charCode === 13) {
      e.preventDefault()
      addStudent()
    }
  }

  inputStudentName.addEventListener('keypress', checkKeyPressed)
})()
