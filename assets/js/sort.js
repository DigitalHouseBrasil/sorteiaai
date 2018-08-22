(function() {
  const reachMaxStudents = (index, studentsByGroup) =>
    index % studentsByGroup === 0

  const addStudentToGroup = (student, group) =>
    group instanceof Array
      ? group.concat(student)
      : [student]

  const buildGroups = (students, numberGroups, studentsByGroup) =>
    students.reduce((groups, student, index) => {
      if (reachMaxStudents(index, studentsByGroup)) {
        numberGroups--
      }

      const group = groups[numberGroups]
        ? groups[numberGroups]
        : ''

      return {
        ...groups,
        [numberGroups]: addStudentToGroup(student, group),
      }
    }, {})

  const buildHTML = (group, number) => `
    <div class="group col-md-3">
      <strong>Grupo ${number + 1}</strong>
      <ul>    
        <li>${group.join('</li><li>')}</li>
      </ul>
    </div>
  `

  const randomize = () => 0.5 - Math.random()

  window.sortGroups = ({
    students,
    studentsByGroup,
    target,
  }) => {
    students.sort(randomize)

    const numberGroups = Math.round(students.length / studentsByGroup)
    const groups = buildGroups(students, numberGroups, studentsByGroup)
    const html = Object.values(groups).map(buildHTML).join('')

    document.querySelector(target).innerHTML = html
  }
})()
