function day7 (resultElement) {
  function findSolution1 (list) {
    
  }

  
  function findSolution2 (list) {
  
  }

  
  getTestList().then(list => {
    answer = findSolution1(list)
    resultElement.innerHTML += `Answer part 1: ${answer}<br>`
  });

  // getTestList().then(list => {
  //   answer = findSolution2(list)
  //   resultElement.innerHTML += `Answer part 2: ${answer}<br>`
  // });


  function getTestList () {
    return fetch('7-test.txt')
      .then(response => response.text())
      .then(input => {
        return input;
      })
  }

  function getList () {
    return fetch('7-data.txt')
      .then(response => response.text())
      .then(input => {
        return input;
      })
  }
}
