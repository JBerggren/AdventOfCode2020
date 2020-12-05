function day5 (resultElement) {
  function findSolution1 (list) {
    var highestSeatNumber = 0
    list.forEach(seat => {
      var seatNr = calcSeatNumber(seat)
      highestSeatNumber =
        highestSeatNumber < seatNr ? seatNr : highestSeatNumber
    })
    return highestSeatNumber
  }

  function findSolution2 (list) {
    var seats = Array.from({ length: 128 * 8 }, () => 0);
    list.forEach(seat => {
      var seatNr = calcSeatNumber(seat)
      seats[seatNr] = 1
    });

    for (var i = 1; i < seats.length - 1; i++) {
      if (seats[i - 1] == 1 && seats[i] == 0 && seats[i + 1] == 1) {
        return i
      }
    }
  }

  function calcSeatNumber (seat) {
    seat = seat.replace(/[BR]/gm, '1').replace(/[FL]/gm, '0')
    var row = parseInt(seat.substr(0, 7), 2)
    var column = parseInt(seat.substr(7), 2)
    console.log(`row:${row} colmn:${column}`)
    return row * 8 + column
  }

  getList().then(list => {
    answer = findSolution1(list)
    resultElement.innerHTML += `Answer part 1: ${answer}<br>`
  });

  getList().then(list => {
    answer = findSolution2(list)
    resultElement.innerHTML += `Answer part 2: ${answer}<br>`
  });

  function getList () {
    return fetch('5-data.txt')
      .then(response => response.text())
      .then(input => {
        return input.split(/\n/gm)
      })
  }
}
