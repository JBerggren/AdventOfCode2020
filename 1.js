function day1(resultElement) {

    function findSolution1(list) {
        for (var i = 0; i < list.length; i++) {
            var a = list[i];
            for (var j = i + 1; j < list.length; j++) {
                var b = list[j];
                if (a + b == 2020) {
                    return a * b;
                }
            }
        }
    }

    function findSolution2(list) {
        for (var i = 0; i < list.length; i++) {
            var a = list[i];
            for (var j = i + 1; j < list.length; j++) {
                var b = list[j];
                for (var k = j + 1; k < list.length; k++) {
                    var c = list[k];
                    if (a + b + c == 2020) {
                        return a * b * c;
                    }
                }
            }
        }
    }

}