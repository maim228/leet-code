/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var number = 0;
    for(var i=0;i<s.length;i++){
        if(s.charAt(i) == "I" && s.charAt(i+1) == "V"){
            number = number + returnNumber(4);
            i++;
        }else if(s.charAt(i) == "I" && s.charAt(i+1) == "X"){
            number = number + returnNumber(9);
            i++;
        }else if(s.charAt(i) == "X" && s.charAt(i+1) == "L"){
            number = number + returnNumber(40);
            i++;
        }else if(s.charAt(i) == "X" && s.charAt(i+1) == "C"){
            number = number + returnNumber(90);
            i++;
        }else if(s.charAt(i) == "C" && s.charAt(i+1) == "D"){
            number = number + returnNumber(400);
            i++;
        }else if(s.charAt(i) == "C" && s.charAt(i+1) == "M"){
            number = number + returnNumber(900);
            i++;
        }else{
            number = number + returnNumber(s.charAt(i));
        }
    }
    return number;
};

var returnNumber = function(n){
    if(n == 'I'){
        return 1;
    }else if(n == 'V'){
        return 5;
    }else if(n == 'X'){
        return 10;
    }else if(n == 'L'){
        return 50;
    }else if(n == 'C'){
        return 100;
    }else if(n == 'D'){
        return 500;
    }else if(n == 'M'){
        return 1000;
    }else{
        return n;
    }
}
