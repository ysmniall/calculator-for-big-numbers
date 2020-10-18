$(function() {


    $('#submit2').click(() => {

        let degree0 = $('#degree0').val();
        let degree1 = $('#degree1').val();
        let degree2 = $('#degree2').val();
        let degree3 = $('#degree3').val();
        let degree4 = $('#degree4').val();
        let degree5 = $('#degree5').val();
        let degree6 = $('#degree6').val();
        let degree7 = $('#degree7').val();
        let degree8 = $('#degree8').val();
        let degree9 = $('#degree9').val();
        let top = $('#top').val();
        let bottom = $('#bottom').val();



        let result = calcIntegral(degree9, degree8, degree7, degree6, degree5, degree4, degree3, degree2, degree1, degree0, top, bottom);
        showResult(result);
    });

    function power(a, b) {
        let result = 0;
        let answer = 0;
        let r2 = a;


        while (b != 1) {


            answer = multiplicationIn(a, r2, a);

            r2 = answer;

            b = subtraction("1", 1, b.toString(), b.toString().length);
            console.log("result power ", a, "^(b)-", b, "=", r2);

        }

        return r2;
    }




    function multiplicationIn(limit, resultNum, index) {
        limit = parseInt(resultNum);
        resultNum = parseInt(resultNum);
        let resultNumL = resultNum.toString().length;
        index = index;
        let limit1 = limit;

        while (index > 1) {

            index = subtraction("1", 1, index.toString(), index.toString().length);

            resultNumL = resultNum.toString().length;

            limit1 = limit;
            resultNum = addition(limit1, limit1.toString().length, resultNum, resultNumL);

        }
        return resultNum;

    }

    function addition(smaller, smallerL, bigger, biggerL) {
        let remainder = 0;
        let smaller1 = smaller.toString();
        let smallerL1 = smallerL;
        let bigger1 = bigger.toString();
        let biggerL1 = biggerL;

        let result = "";

        result2 = 0;
        result1 = 0;
        while (smallerL1 > 0) {
            smallerL1--;
            // smallerL1 = subtraction("1", 1, smallerL1.toString(), smallerL1.toString().length);

            biggerL1--;
            // biggerL1 = subtraction("1", 1, biggerL1.toString(), biggerL1.toString().length);


            result1 = parseInt(remainder) + parseInt(smaller1[smallerL1]) + parseInt(bigger1[biggerL1]);

            result = additionRemainder(result, result1, result2);
            remainder = setAdditionRemainder(result1);

            if (smallerL1 == 0) {

                while (biggerL1 > 0) {
                    biggerL1--;
                    //  biggerL1 = subtraction("1", 1, biggerL1.toString(), biggerL1.toString().length);
                    if (remainder == 1) {
                        result1 = parseInt(remainder) + parseInt(bigger1[biggerL1]);

                        result = additionRemainder(result, result1, result2);
                        remainder = setAdditionRemainder(result1);

                    } else {
                        result = result + bigger1[biggerL1] + "";
                    }
                }
                if (remainder == 1) result = result + "1";

            }
        }

        resultNum = parseInt(reverseString(result));


        return resultNum;

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

    function reverseString(str) {
        return str.split('').reverse().join('');
    }


    function subtraction(smaller, smallerL, bigger, biggerL) {
        let biggerArr = bigger.toString().split('');
        let result1 = 0;
        let remainder = 0;
        let result = "";

        while (smallerL > 0) {

            smallerL--;
            // smallerL = subtraction("1", 1, smallerL.toString(), smallerL.toString().length);
            biggerL--;
            // biggerL = subtraction("1", 1, biggerL.toString(), biggerL.toString().length);

            if (parseInt(bigger[biggerL]) >= parseInt(smaller[smallerL])) {
                result1 = parseInt(bigger[biggerL]) - parseInt(smaller[smallerL]);


            } else {
                result1 = parseInt(bigger[biggerL]) + 10 - parseInt(smaller[smallerL]);
                let i = biggerL - 1;

                while (bigger[i] == 0) {

                    biggerArr[i] = 9;
                    bigger = biggerArr.join('');


                    i--;
                    // i = subtraction("1", 1, i.toString(), i.toString().length);


                }
                biggerArr[i] = parseInt(bigger[i]) - 1;
                bigger = biggerArr.join('');


            }
            result = result + result1 + "";
        }
        while (biggerL > 0) {
            biggerL--;

            result += bigger[biggerL];

        }

        let i = result.length - 1;
        result = result.split('');
        while (i > 0) {
            if (result[i] == 0) {
                result.splice(i, 1);
            } else break;
            i--;
        }
        result = result.join('');

        return reverseString(result)

    }




    function divisionIn(smaller, smallerL, bigger, biggerL) {
        divisionResult = 1;
        let oldSmaller;
        let oldSamllerL;
        let resultNum2 = bigger;
        let resultNumL2 = biggerL;
        let resultNumArr2 = [];

        resultNum2 = subtraction(smaller.toString(), smallerL, resultNum2.toString(), resultNumL2);

        while (parseInt(resultNum2) >= parseInt(smaller)) {

            oldSmaller = smaller;
            oldSamllerL = smallerL;
            resultNumL2 = resultNum2.toString().length;


            //divisionResult++;
            divisionResult = addition("1", "1", divisionResult.toString(), divisionResult.toString().length);
            resultNum2 = subtraction(oldSmaller, oldSamllerL, resultNum2.toString(), resultNumL2);
            resultNumL2 = resultNum2.toString().length;


        }
        return divisionResult;

    }

    function calcIntegral(x9, x8, x7, x6, x5, x4, x3, x2, x1, x0, top, bottom) {
        let sum = 0
        if (x9 != 0) {
            let t = power(top, 10);
            let b = power(bottom, 10);
            let sub = subtraction(b.toString(), b.toString().length, t.toString(), t.toString().length);


            let div = divisionIn("10", "2", sub.toString(), sub.toString().length);

            let r = multiplicationIn(x9, div, x9);
            if (compare(sum.toString(), r.toString()) == 1) {
                sum = addition(r, r.toString().length, sum, sum.toString().length);
            } else {
                sum = addition(sum, sum.toString().length, r, r.toString().length);

            }
            console.log("sum x 9 ", sum);







        }
        if (x8 != 0) {
            let t = power(top, 9);
            let b = power(bottom, 9);
            let sub = subtraction(b.toString(), b.toString().length, t.toString(), t.toString().length);
            let div = divisionIn("9", "1", sub.toString(), sub.toString().length);

            let r = multiplicationIn(x8, div, x8);
            if (compare(sum.toString(), r.toString()) == 1) {
                sum = addition(r, r.toString().length, sum, sum.toString().length);
            } else {
                sum = addition(sum, sum.toString().length, r, r.toString().length);

            }
            console.log("sum x 8 ", sum);







        }
        if (x7 != 0) {
            let t = power(top, 8);
            let b = power(bottom, 8);
            let sub = subtraction(b.toString(), b.toString().length, t.toString(), t.toString().length);
            let div = divisionIn("8", "1", sub.toString(), sub.toString().length);

            let r = multiplicationIn(x7, div, x7);
            if (compare(sum.toString(), r.toString()) == 1) {
                sum = addition(r, r.toString().length, sum, sum.toString().length);
            } else {
                sum = addition(sum, sum.toString().length, r, r.toString().length);

            }
            console.log("sum x 7 ", sum);





        }
        if (x6 != 0) {
            let t = power(top, 7);
            let b = power(bottom, 7);
            let sub = subtraction(b.toString(), b.toString().length, t.toString(), t.toString().length);
            let div = divisionIn("7", "1", sub.toString(), sub.toString().length);
            console.log("divisionIn", div);
            let r = multiplicationIn(x6, div, x6);
            if (compare(sum.toString(), r.toString()) == 1) {
                sum = addition(r, r.toString().length, sum, sum.toString().length);

            } else {
                sum = addition(sum, sum.toString().length, r, r.toString().length);

            }
            console.log("sum x 6 ", sum);





        }
        if (x5 != 0) {
            let t = power(top, 6);
            let b = power(bottom, 6);
            let sub = subtraction(b.toString(), b.toString().length, t.toString(), t.toString().length);
            let div = divisionIn("6", "1", sub.toString(), sub.toString().length);
            console.log("divisionIn", div);
            let r = multiplicationIn(x5, div, x5);
            if (compare(sum.toString(), r.toString()) == 1) {
                sum = addition(r, r.toString().length, sum, sum.toString().length);
            } else {
                sum = addition(sum, sum.toString().length, r, r.toString().length);

            }
            console.log("sum x 5 ", sum);





        }
        if (x4 != 0) {
            let t = power(top, 5);
            let b = power(bottom, 5);
            let sub = subtraction(b.toString(), b.toString().length, t.toString(), t.toString().length);
            let div = divisionIn("5", "1", sub.toString(), sub.toString().length);
            console.log("divisionIn", div);
            let r = multiplicationIn(x4, div, x4);
            if (compare(sum.toString(), r.toString()) == 1) {
                sum = addition(r, r.toString().length, sum, sum.toString().length);
            } else {
                sum = addition(sum, sum.toString().length, r, r.toString().length);

            }
            console.log("sum x 4 ", sum);





        }
        if (x3 != 0) {
            let t = power(top, 4);
            let b = power(bottom, 4);
            let sub = subtraction(b.toString(), b.toString().length, t.toString(), t.toString().length);
            let div = divisionIn("4", "1", sub.toString(), sub.toString().length);
            console.log("divisionIn", div);
            let r = multiplicationIn(x3, div, x3);
            if (compare(sum.toString(), r.toString()) == 1) {
                sum = addition(r, r.toString().length, sum, sum.toString().length);
            } else {
                sum = addition(sum, sum.toString().length, r, r.toString().length);

            }
            console.log("sum x 3 ", sum);





        }
        if (x2 != 0) {
            let t = power(top, 3);
            let b = power(bottom, 3);
            let sub = subtraction(b.toString(), b.toString().length, t.toString(), t.toString().length);
            let div = divisionIn("3", "1", sub.toString(), sub.toString().length);
            console.log("divisionIn", div);
            let r = multiplicationIn(x2, div, x2);
            if (compare(sum.toString(), r.toString()) == 1) {
                sum = addition(r, r.toString().length, sum, sum.toString().length);
            } else {
                sum = addition(sum, sum.toString().length, r, r.toString().length);

            }
            console.log("sum x 2 ", sum);





        }
        if (x1 != 0) {
            let t = power(top, 2);
            let b = power(bottom, 2);
            let sub = subtraction(b.toString(), b.toString().length, t.toString(), t.toString().length);
            let div = divisionIn("2", "1", sub.toString(), sub.toString().length);
            console.log("divisionIn", div);
            let r = multiplicationIn(x1, div, x1);
            if (compare(sum.toString(), r.toString()) == 1) {
                sum = addition(r, r.toString().length, sum, sum.toString().length);
            } else {
                sum = addition(sum, sum.toString().length, r, r.toString().length);

            }
            console.log("sum x 1 ", sum);



        }
        if (x0 != 0) {
            let t = power(top, 1);
            let b = power(bottom, 1);
            let sub = subtraction(b.toString(), b.toString().length, t.toString(), t.toString().length);
            let div = divisionIn("1", "1", sub.toString(), sub.toString().length);
            console.log("divisionIn", div);
            let r = multiplicationIn(x0, div, x0);
            if (compare(sum.toString(), r.toString()) == 1) {
                sum = addition(r, r.toString().length, sum, sum.toString().length);

            } else {
                sum = addition(sum, sum.toString().length, r, r.toString().length);

            }
            console.log("sum x 0 ", sum);




        }

        return sum;

    }

    function compare(first, second) {
        if (first.length > second.length) {

            return 1;
        } else if (first.length < second.length) {

            return 2;

        } else {
            let i = 0;
            let flag = false;
            while (i < first.length) {
                if (first[i] > second[i]) {

                    return 1;


                } else if (first[i] < second[i]) {

                    return 2;



                }
                i++;
            }
            return 1;
        }


    }

    function showResult(result) {
        $('#result-div label').empty();
        $('#result-div label').text(result);
        $('#result-div').css("opacity", "1");
    }



});