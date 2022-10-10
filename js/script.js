//matriz contendo as strings do caça-palavras

    matriz = new Array;
    matriz = [["Q", "H", "R", "S", "F", "J", "U", "G", "F", "U", "H", "E", "A", "L", "P", "B", "I", "T", "D", "E"],
    ["P", "F", "C", "U", "A", "M", "R", "P", "O", "Ç", "H", "K", "C", "Ç", "A", "N", "I", "R", "G", "A"],
    ["E", "R", "E", "S", "E", "N", "O", "A", "Ç", "D", "S", "T", "R", "D", "Q", "J", "B", "L", "K", "V"],
    ["A", "B", "R", "O", "S", "S", "I", "M", "P", "S", "O", "N", "S", "U", "B", "E", "I", "F", "E", "F"],
    ["K", "J", "U", "G", "B", "E", "X", "D", "L", "G", "Z", "O", "P", "E", "M", "D", "G", "I", "C", "R"],
    ["Y", "A", "L", "V", "E", "I", "D", "P", "S", "L", "P", "S", "H", "S", "T", "S", "B", "V", "Q", "I"],
    ["B", "U", "I", "C", "Z", "N", "G", "E", "I", "X", "F", "D", "E", "O", "Ç", "K", "A", "A", "J", "E"],
    ["L", "V", "A", "E", "P", "F", "P", "C", "E", "I", "Q", "A", "I", "S", "A", "V", "N", "X", "U", "N"],
    ["I", "E", "P", "A", "V", "E", "V", "S", "T", "B", "R", "E", "A", "K", "I", "N", "G", "B", "A", "D"],
    ["N", "T", "J", "B", "I", "L", "L", "I", "B", "R", "G", "S", "J", "R", "D", "O", "T", "C", "Ç", "S"],
    ["D", "G", "O", "P", "A", "D", "H", "K", "S", "Q", "A", "H", "B", "Q", "V", "A", "H", "A", "P", "J"],
    ["E", "A", "B", "E", "T", "T", "E", "R", "C", "A", "L", "L", "S", "A", "U", "L", "E", "R", "A", "D"],
    ["R", "U", "Q", "H", "Ç", "Q", "U", "J", "J", "E", "F", "Ç", "T", "D", "D", "E", "O", "P", "G", "H"],
    ["S", "J", "O", "S", "S", "O", "P", "R", "A", "N", "O", "S", "L", "O", "Z", "Z", "R", "Q", "Z", "U"],
    ["V", "F", "M", "L", "A", "N", "H", "O", "I", "H", "J", "E", "B", "P", "E", "H", "Y", "X", "O", "E"],
    ["H", "I", "X", "Q", "F", "Z", "V", "B", "F", "X", "Q", "G", "I", "C", "A", "R", "L", "Y", "H", "Ç"]];

    //ossimpsons, breakingbad, betercallsaul, csi, seinfeld, friends, icarly, ossopranos, bigbangtheory, peakyblinders

    document.write("<h1> Caça-palavras em JS: Programas de Televisão </h1>");

    document.write("<br>");

    document.write("<table>");
    for(vetor = 0; vetor < 16; vetor++){
        document.write("<tr>");
        for(elemento = 0; elemento < 20; elemento++){
            if((vetor == 3) && ((elemento >= 3) && (elemento <= 12))){
                document.write("<td class='palavra-cor'>" + matriz[vetor][elemento] + "</td>");
            }

            else if((vetor == 8) && ((elemento >= 9) && (elemento <= 20))){
                document.write("<td class='palavra-cor'>" + matriz[vetor][elemento] + "</td>");
            }

            else if((vetor == 11) && ((elemento >= 2) && (elemento <= 15))){
                document.write("<td class='palavra-cor'>" + matriz[vetor][elemento] + "</td>");
            }

            else if((elemento == 7) && ((vetor >= 7) && (vetor <= 9))){
                document.write("<td class='palavra-cor'>" + matriz[vetor][elemento] + "</td>");
            }

            else if((elemento == 5) && ((vetor >= 3) && (vetor <= 10))){
                document.write("<td class='palavra-cor'>" + matriz[vetor][elemento] + "</td>");
            }

            else if((elemento == 19) && ((vetor >= 3) && (vetor <= 9))){
                document.write("<td class='palavra-cor'>" + matriz[vetor][elemento] + "</td>");
            }

            else if((vetor == 15) && ((elemento >= 12) && (elemento <= 17))){
                document.write("<td class='palavra-cor'>" + matriz[vetor][elemento] + "</td>");
            }

            else if((vetor == 13) && ((elemento >= 2) && (elemento <= 11))){
                document.write("<td class='palavra-cor'>" + matriz[vetor][elemento] + "</td>");
            }

            else if((elemento == 16) && ((vetor >= 2) && (vetor <= 14))){
                document.write("<td class='palavra-cor'>" + matriz[vetor][elemento] + "</td>");
            }

            else if((elemento == 0) && ((vetor >= 1) && (vetor <= 13))){
                document.write("<td class='palavra-cor'>" + matriz[vetor][elemento] + "</td>");
            }

            else{
                document.write("<td>" + matriz[vetor][elemento] + "</td>");
            }
        }
        document.write("</tr>");
    }
    document.write("</table>");
        