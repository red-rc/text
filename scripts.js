document.getElementById('button').onclick = function(){
    var userText = document.getElementById('user-text');
    var input = userText.value;
    var output = '';
    
    for (i = 0; i < input.length; i++) {
        if (input[i] == "a" || input[i] == "A") {
            output += "4";
        }
        else if (input[i] == "i" || input[i] == "I") {
            output += "1";
        }
        else if (input[i] == "e" || input[i] == "E") {
            output += "3";
        }
        else if (input[i] == "j" || input[i] == "J") {
            output += "й";    
        }
        else if (input[i] == "v" || input[i] == "V") {
            output += "b";    
        }
        else if (input[i] == "s" || input[i] == "S") {
            output += "c";
        }
        else if (input[i] == "c" || input[i] == "C") {
            output += "គ";
        }
        else if (input[i] == "r" || input[i] == "R") {
            output += "p";
        }
        else if (input[i] == "p" || input[i] == "P") {
            output += "r";
        }
        else if (input[i] == "t" || input[i] == "T") {
            output += "Ʇ";
        }
        else if (input[i] == "w" || input[i] == "W") {
            output += "ц";
        }
        else if (input[i] == "o" || input[i] == "O") {
            output += "0";
        }
        else if (input[i] == "b" || input[i] == "B") {
            output += "в";
        }
        else if (input[i] == "f" || input[i] == "F") {
            output += "ф";
        }
        else if (input[i] == "m" || input[i] == "M") {
            output += "v";
        }
        else if (input[i] == "d" || input[i] == "D") {
            output += "घ";
        }
        else if (input[i] == "g" || input[i] == "G") {
            output += "ж";
        }
        else if (input[i] == "h" || input[i] == "H") {
            output += "х";
        }
        else if (input[i] == "k" || input[i] == "K") {
            output += "Ʞ";
        }
        else if (input[i] == "l" || input[i] == "L") {
            output += "Ꞁ";
        }
        else if (input[i] == "n" || input[i] == "N") {
            output += "И";
        }
        else if (input[i] == "q" || input[i] == "Q") {
            output += "o";
        }
        else if (input[i] == "w" || input[i] == "W") {
            output += "м";
        }
        else if (input[i] == "x" || input[i] == "X") {
            output += "z";
        }
        else if (input[i] == "y" || input[i] == "Y") {
            output += "ʎ";
        }
        else if (input[i] == "z" || input[i] == "Z") {
            output += "x";
        }
        else if (input[i] == "u" || input[i] == "U") {
            output += "[_]";
        }
        else {
            output += input[i];
        }
    }
    var textField = document.getElementById('field');
    var outputText = '';
    outputText += `<p role="alert">${output}</p>`;
    textField.innerHTML = outputText;
}

document.getElementById('out-button').onclick = function(){
    var userText = document.getElementById('user-text');
    var input = userText.value;
    var output = '';
for (i = 0; i < input.length; i++) {
        if (input[i] == "4") {
            output += "a";
        }
        else if (input[i] == "1") {
            output += "i";
        }
        else if (input[i] == "3") {
            output += "e";
        }
        else if (input[i] == "й" || input[i] == "Й") {
            output += "j";    
        }
        else if (input[i] == "b" || input[i] == "B") {
            output += "v";    
        }
        else if (input[i] == "c" || input[i] == "C") {
            output += "s";
        }
        else if (input[i] == "គ") {
            output += "c";
        }
        else if (input[i] == "p" || input[i] == "P") {
            output += "r";
        }
        else if (input[i] == "r" || input[i] == "R") {
            output += "p";
        }
        else if (input[i] == "Ʇ") {
            output += "t";
        }
        else if (input[i] == "ц" || input[i] == "Ц") {
            output += "w";
        }
        else if (input[i] == "0") {
            output += "o";
        }
        else if (input[i] == "v" || input[i] == "V") {
            output += "m";
        }
        else if (input[i] == "в" || input[i] == "В") {
            output += "b";
        }
        else if (input[i] == "ф" || input[i] == "Ф") {
            output += "f";
        }
        else if (input[i] == "घ") {
            output += "d";
        }
        else if (input[i] == "ж" || input[i] == "Ж") {
            output += "g";
        }
        else if (input[i] == "х" || input[i] == "Х") {
            output += "h";
        }
        else if (input[i] == "Ʞ") {
            output += "k";
        }
        else if (input[i] == "Ꞁ") {
            output += "l";
        }
        else if (input[i] == "и" || input[i] == "И") {
            output += "n";
        }
        else if (input[i] == "o" || input[i] == "О") {
            output += "q";
        }
        else if (input[i] == "м" || input[i] == "М") {
            output += "w";
        }
        else if (input[i] == "z" || input[i] == "Z") {
            output += "x";
        }
        else if (input[i] == "ʎ") {
            output += "y";
        }
        else if (input[i] == "x" || input[i] == "X") {
            output += "z";
        }
        else if (input[i] == "[_]") {
            output += "u";
        }
        else {
            output += input[i];
        }
    }
    var textField = document.getElementById('field');
    var outputText = '';
    outputText += `<p role="alert">${output}</p>`;
    textField.innerHTML = outputText;
}