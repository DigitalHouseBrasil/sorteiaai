(function() { 
  window.studentsList = []

  const inputStudentName = document.querySelector('#studentName')
  const studentsList = document.querySelector('#studentsList')

  inputStudentName.focus()

  const addStudent = () => {
    const li = document.createElement('li')
    const studentTextNode = document.createTextNode(inputStudentName.value)

    window.studentsList.push(inputStudentName.value)

    li.appendChild(studentTextNode)
    studentsList.appendChild(li)

    inputStudentName.value = ''
    inputStudentName.focus()
  }

  const checkKeyPressed = (e) => {
    if (e.charCode === 13) {
      addStudent()
    }
  }

  inputStudentName.addEventListener('keypress', checkKeyPressed)
})()
