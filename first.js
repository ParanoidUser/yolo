function start() {
  
  let days = ['1', '2', '3','4', '5', '6','7']

  days.forEach((day) => {
    console.log(day)
  })


  days.map((day) => {
    console.log(day)
  })


  for(let i = 0; i <= days.length; i++) {
    console.log(days[i])
  }
}

start()