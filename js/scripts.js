$(function() {

    let result = "";
    let resultNum = ""; //for multiplication
    let resultNum2 = ""; //for division
    let additionResult = "";
    let divisionResult = 0;

    let biggerL;
    let smallerL;
    let bigger;
    let smaller;
    let result1 = 0;
    let result2 = 0;
    let remainder = 0;
    let first;
    let second;
    let signB = "";
    let firstS = "";
    let secondS = "";
    let firstArr = [];
    let secondArr = [];
    let biggerArr = [];
    let smallerArr = [];

    $('#submit').click(() => {
        var operation = $('input:checked').attr('id');
        first = $('#firstInput').val();
        second = $('#secondInput').val();

        firstArr = first.split('');
        secondArr = second.split('');
        firstS = contains(firstArr, '-') ? "-" : "+";
        secondS = contains(secondArr, '-') ? "-" : "+";

        if (first.length > second.length) {
            setNumbers(1);
        } else if (first.length < second.length) {
            setNumbers(2);
            signB = "-";
        } else {
            let i = 0;
            let flag = false;
            while (i < first.length) {
                if (first[i] > second[i]) {
                    setNumbers(1);
                    flag = true;
                    break;
                } else if (first[i] < second[i]) {
                    setNumbers(2);
                    signB = "-";
                    flag = true;
                    break;
                }
                i++;
            }
            if (flag == false) {
                setNumbers(1);
            }


        }
        biggerArr = bigger.split('');
        smallerArr = smaller.split('');
        console.log(biggerArr);


        switch (operation) {
            case 'addition':

                addition(smaller, smallerL, bigger, biggerL);
                showResult(reverseString(additionResult));
                break;
            case 'subtraction':

                subtraction(smaller, smallerL, bigger, biggerL, biggerArr);
                result += signB;
                showResult(reverseString(result));
                break;
            case 'multiplication':
                multiplication();
                showResult(resultNum.toString());
                break;
            case 'division':
                division();
                showResult(`${divisionResult}   remainder: ${resultNum2}`);
                break;
            default:
                addition(smaller, smallerL, bigger, biggerL);
                showResult(reverseString(additionResult));
                break;
        }

    });

    function setNumbers(i) {
        if (i === 1) {
            bigger = first;
            biggerL = first.length;
            smaller = second;
            smallerL = second.length;
            console.log("setNumbers: " + 1);
        } else {
            bigger = second;
            biggerL = second.length;
            smaller = first;
            smallerL = first.length;
            console.log("setNumbers: " + 2);

        }
    }



    function addition(smaller, smallerL, bigger, biggerL) {
        let smaller1 = smaller;
        let smallerL1 = smallerL;
        let bigger1 = bigger.toString();
        let biggerL1 = biggerL;

        let result = "";
        remainder = 0;
        result2 = 0;
        result1 = 0;
        while (smallerL1 > 0) {
            smallerL1--;
            biggerL1--;
            result1 = parseInt(remainder) + parseInt(smaller1[smallerL1]) + parseInt(bigger1[biggerL1]);
            // remainder = 0;
            result = additionRemainder(result, result1, result2);
            remainder = setAdditionRemainder(result1);
            if (smallerL1 == 0) {

                while (biggerL1 > 0) {
                    biggerL1--;
                    if (remainder == 1) {
                        result1 = parseInt(remainder) + parseInt(bigger1[biggerL1]);
                        // remainder = 0;
                        result = additionRemainder(result, result1, result2);
                        remainder = setAdditionRemainder(result1);

                    } else {
                        result = result + bigger1[biggerL1] + "";
                    }
                }
                if (remainder == 1) result = result + "1";

            }
        }

        resultNum = reverseString(result);
        console.log(resultNum);
        additionResult = result;

    }


    function contains(str, s) {
        return str.indexOf(s) > -1
    }


    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    function additionRemainder(result, result1, result2) {
        if (result1 > 9) {
            result2 = result1 - 10;
            result = result + result2 + "";

        } else {
            result = result + result1 + "";
        }
        return result;
    }

    function setAdditionRemainder(result2) {
        if (result2 > 9) return 1;
        else return 0;
    }

    function subtraction(smaller, smallerL, bigger, biggerL, biggerArr) {
        result2 = 0;
        result1 = 0;
        remainder = 0;
        result = "";
        while (smallerL > 0) {
            smallerL--;
            biggerL--;
            if (parseInt(bigger[biggerL]) >= parseInt(smaller[smallerL])) {
                result1 = parseInt(bigger[biggerL]) - parseInt(smaller[smallerL]);
                // result += result1;

            } else {
                result1 = parseInt(bigger[biggerL]) + 10 - parseInt(smaller[smallerL]);
                let i = biggerL - 1;
                // console.log(i);
                while (bigger[i] == 0) {

                    biggerArr[i] = 9;
                    bigger = biggerArr.join('');

                    console.log(bigger[i]);
                    i--;

                }
                biggerArr[i] = parseInt(bigger[i]) - 1;
                bigger = biggerArr.join('');
                // console.log(bigger[i]);

            }
            result = result + result1 + "";
        }
        while (biggerL > 0) {
            biggerL--;
            result += bigger[biggerL];

        }
        // remove zero before number
        let i = result.length - 1;
        result = result.split('');
        while (i > 0) {
            if (result[i] == 0) {
                result.splice(i, 1);
            } else break;
            i--;
        }
        result = result.join('');
        // result += signB;


        resultNum2 = reverseString(result);

    }





    function multiplication() {

        smaller = parseInt(smaller);
        resultNum = bigger;

        let resultNumL = biggerL;

        while (smaller > 1) {
            smaller--;
            resultNumL = resultNum.length;

            addition(bigger, biggerL, resultNum, resultNumL);
        }

    }

    function multiplicationIn(limit, resultNum) {

        limit = parseInt(limit);
        resultNum = parseInt(limit);


        let resultNumL = resultNum.length;
        let index = limit;

        while (index > 1) {
            index--;
            resultNumL = resultNum.length;

            addition(limit, limit, resultNum, resultNumL);
        }
        return resultNum;

    }


    function division() {
        divisionResult = 0;
        let oldSmaller;
        let oldSamllerL;
        resultNum2 = bigger;
        let resultNumL2 = biggerL;
        let resultNumArr2 = [];
        while (parseInt(resultNum2) >= parseInt(smaller)) {
            oldSmaller = smaller;
            oldSamllerL = smallerL;
            resultNumL2 = resultNum2.length;
            resultNumArr2 = resultNum2.split('');

            divisionResult++;
            subtraction(oldSmaller, oldSamllerL, resultNum2, resultNumL2, resultNumArr2);

            console.log("divisionResult");
            console.log(divisionResult);
            console.log(resultNum2);

        }

    }


});



function showResult(result) {
    $('#result-div label').empty();
    $('#result-div label').text(result);
    $('#result-div').css("opacity", "1");
}