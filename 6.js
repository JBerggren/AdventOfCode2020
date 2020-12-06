function day6 (resultElement) {
  function findSolution1 (list) {
    var count = 0
    for (let i = 0; i < list.length; i++) {
      var groupCount = findNumberOfUniqueQuestions(list[i])
      count += groupCount
    }
    return count
  }

  function findNumberOfUniqueQuestions (groupData) {
    var data = groupData
      .split(/\r\n/gm)
      .map(x => Array.from(x))
      .join()
      .split(',')
    return [...new Set(data)].length
  }

  function findSolution2 (list) {
    var count = 0
    for (let i = 0; i < list.length; i++) {
      var groupCount = findNumberOfCommonQuestions(list[i])
      console.log(list[i] + ':' + groupCount)
      count += groupCount
    }
    return count
  }

  function findNumberOfCommonQuestions(groupData) {
    var data = groupData
      .split(/\r\n/gm)
      .map(x => Array.from(x));
    
    var commonValues = data[0];
    for(var i=1;i<data.length;i++){
      commonValues = commonValues.filter(x => data[i].indexOf(x) != -1);
    }
      
    return commonValues.length
  }

  getList().then(list => {
    answer = findSolution1(list)
    resultElement.innerHTML += `Answer part 1: ${answer}<br>`
  })

  getList().then(list => {
    answer = findSolution2(list)
    resultElement.innerHTML += `Answer part 2: ${answer}<br>`
  })

  function getTestList () {
    return fetch('6-test.txt')
      .then(response => response.text())
      .then(input => {
        return input.split(/\r\n\r\n/gm)
      })
  }

  function getList () {
    return fetch('6-data.txt')
      .then(response => response.text())
      .then(input => {
        return input.split(/\r\n\r\n/gm)
      })
  }
}
