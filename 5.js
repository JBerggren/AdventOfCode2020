function day5(resultElement) {

    function findSolution1(list) {
        return 0;
    }

    function findSolution2(list) {
        
    }

    

    var testAnswer = findSolution1(getTestList());
    var answer = findSolution1(getList());
    resultElement.innerHTML = `Answer test: ${testAnswer}<br>Answer real: ${answer}<br>`;

    var testAnswer = findSolution2(getTestList());
    var answer = findSolution2(getList());
    resultElement.innerHTML += `Answer test: ${testAnswer}<br>Answer real: ${answer}<br>`;

    function getTestList() {
        return [];
    }

    function getList(){
        return [];
    }
}