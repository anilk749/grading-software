function addNumbers() {
  //for first row
  var val1 = parseFloat(document.getElementById("value1").value);
  if (isNaN(val1)) val1 = "0";
  var val2 = parseFloat(document.getElementById("value2").value);
  if (isNaN(val2)) val2 = "0";
  var ansD = document.getElementById("answer");
  ansD.value = (val1 + val2) / 2;

  //for  second row
  var val21 = parseFloat(document.getElementById("value21").value);
  if (isNaN(val21)) val21 = "0";
  var val22 = parseFloat(document.getElementById("value22").value);
  if (isNaN(val22)) val22 = "0";
  var ans2D = document.getElementById("answer2");
  ans2D.value = (val21 + val22) / 2;
  //for 3rd row
  var val31 = parseFloat(document.getElementById("value31").value);
  if (isNaN(val31)) val31 = "0";
  var val32 = parseFloat(document.getElementById("value32").value);
  if (isNaN(val32)) val32 = "0";
  var ans3D = document.getElementById("answer3");
  ans3D.value = (val31 + val32) / 2;
  //for 4th row
  var val41 = parseFloat(document.getElementById("value41").value);
  if (isNaN(val41)) val41 = "0";
  var val42 = parseFloat(document.getElementById("value42").value);
  if (isNaN(val42)) val42 = "0";
  var ans4D = document.getElementById("answer4");
  ans4D.value = (val41 + val42) / 2;
  //for 5th row
  var val51 = parseFloat(document.getElementById("value51").value);
  if (isNaN(val51)) val51 = "0";
  var val52 = parseFloat(document.getElementById("value52").value);
  if (isNaN(val52)) val52 = "0";
  var ans5D = document.getElementById("answer5");
  ans5D.value = (val51 + val52) / 2;
  //for 6th row
  var val61 = parseFloat(document.getElementById("value61").value);
  if (isNaN(val61)) val61 = "0";
  var val62 = parseFloat(document.getElementById("value62").value);
  if (isNaN(val62)) val62 = "0";
  var ans6D = document.getElementById("answer6");
  ans6D.value = (val61 + val62) / 2;
  //for  7th row
  var val71 = parseFloat(document.getElementById("value71").value);
  if (isNaN(val71)) val71 = "0";
  var val72 = parseFloat(document.getElementById("value72").value);
  if (isNaN(val72)) val72 = "0";
  var ans7D = document.getElementById("answer7");
  ans7D.value = (val71 + val72) / 2;
  //for 8th row
  var val81 = parseFloat(document.getElementById("value81").value);
  if (isNaN(val81)) val81 = "0";
  var val82 = parseFloat(document.getElementById("value82").value);
  if (isNaN(val82)) val82 = "0";
  var ans8D = document.getElementById("answer8");
  ans8D.value = (val81 + val82) / 2;
  //for 9th row
  var val91 = parseFloat(document.getElementById("value91").value);
  if (isNaN(val91)) val91 = "0";
  var val92 = parseFloat(document.getElementById("value92").value);
  if (isNaN(val92)) val92 = "0";
  var ans9D = document.getElementById("answer9");
  ans9D.value = (val91 + val92) / 2;
  //for 10th row
  var valx1 = parseFloat(document.getElementById("valuex1").value);
  if (isNaN(valx1)) valx1 = "0";
  var valx2 = parseFloat(document.getElementById("valuex2").value);
  if (isNaN(valx2)) valx2 = "0";
  var ansxD = document.getElementById("answerx");
  ansxD.value = (valx1 + valx2) / 2;
  //for 11th row
  var valxx1 = parseFloat(document.getElementById("valuexx1").value);
  if (isNaN(valxx1)) valxx1 = "0";
  var valxx2 = parseFloat(document.getElementById("valuexx2").value);
  if (isNaN(valxx2)) valxx2 = "0";
  var ansxxD = document.getElementById("answerxx");
  ansxxD.value = (valxx1 + valxx2) / 2;
  //for 12th row
  var valxx11 = parseFloat(document.getElementById("valuexx11").value);
  if (isNaN(valxx11)) valxx11 = "0";
  var valxx12 = parseFloat(document.getElementById("valuexx12").value);
  if (isNaN(valxx12)) valxx12 = "0";
  var ansxx1D = document.getElementById("answerxx1");
  ansxx1D.value = (valxx11 + valxx12) / 2;
}

function total() {
  var val0 = parseFloat(document.getElementById("value0").value);
  var ansD = parseFloat(document.getElementById("answer").value);
  var val4 = parseFloat(document.getElementById("value4").value);
  var val5 = parseFloat(document.getElementById("value5").value);
  var asp = document.getElementById("ans");

  asp.value = (val0 + ansD + val4 + val5) / 1;
  //for second row
  var val20 = parseFloat(document.getElementById("value20").value);
  var ans2D = parseFloat(document.getElementById("answer2").value);
  var val24 = parseFloat(document.getElementById("value24").value);
  var val25 = parseFloat(document.getElementById("value25").value);
  var asp2 = document.getElementById("ans2");

  asp2.value = (val20 + ans2D + val24 + val25) / 1;
  //for 3rd row
  var val30 = parseFloat(document.getElementById("value30").value);
  var ans3D = parseFloat(document.getElementById("answer3").value);
  var val34 = parseFloat(document.getElementById("value34").value);
  var val35 = parseFloat(document.getElementById("value35").value);
  var asp3 = document.getElementById("ans3");
  asp3.value = (val30 + ans3D + val34 + val35) / 1;
  //for 4th row
  var val40 = parseFloat(document.getElementById("value40").value);
  var ans4D = parseFloat(document.getElementById("answer4").value);
  var val44 = parseFloat(document.getElementById("value44").value);
  var val45 = parseFloat(document.getElementById("value45").value);
  var asp4 = document.getElementById("ans4");

  asp4.value = (val40 + ans4D + val44 + val45) / 1;
  //for 5th row
  var val50 = parseFloat(document.getElementById("value50").value);
  var ans5D = parseFloat(document.getElementById("answer5").value);
  var val54 = parseFloat(document.getElementById("value54").value);
  var val55 = parseFloat(document.getElementById("value55").value);
  var asp5 = document.getElementById("ans5");

  asp5.value = (val50 + ans5D + val54 + val55) / 1;
  //for 6th row
  var val60 = parseFloat(document.getElementById("value60").value);
  var ansD = parseFloat(document.getElementById("answer6").value);
  var val64 = parseFloat(document.getElementById("value64").value);
  var val65 = parseFloat(document.getElementById("value65").value);
  var asp6 = document.getElementById("ans6");

  asp6.value = (val60 + ansD + val64 + val65) / 1;
  //for 7th row
  var val70 = parseFloat(document.getElementById("value70").value);
  var ans7D = parseFloat(document.getElementById("answer7").value);
  var val74 = parseFloat(document.getElementById("value74").value);
  var val75 = parseFloat(document.getElementById("value75").value);
  var asp7 = document.getElementById("ans7");

  asp7.value = (val70 + ans7D + val74 + val75) / 1;
  //for 8th row
  var val80 = parseFloat(document.getElementById("value80").value);
  var ans8D = parseFloat(document.getElementById("answer8").value);
  var val84 = parseFloat(document.getElementById("value84").value);
  var val85 = parseFloat(document.getElementById("value85").value);
  var asp8 = document.getElementById("ans8");
  asp8.value = (val80 + ans8D + val84 + val85) / 1;
  //for 9th row
  var val90 = parseFloat(document.getElementById("value90").value);
  var ans9D = parseFloat(document.getElementById("answer9").value);
  var val94 = parseFloat(document.getElementById("value94").value);
  var val95 = parseFloat(document.getElementById("value95").value);
  var asp9 = document.getElementById("ans9");

  asp9.value = (val90 + ans9D + val94 + val95) / 1;
  //for 10th row
  var valx0 = parseFloat(document.getElementById("valuex0").value);
  var ansxD = parseFloat(document.getElementById("answerx").value);
  var valx4 = parseFloat(document.getElementById("valuex4").value);
  var valx5 = parseFloat(document.getElementById("valuex5").value);
  var aspx = document.getElementById("ansx");

  aspx.value = (valx0 + ansxD + valx4 + valx5) / 1;
  //for 11th row
  var valxx0 = parseFloat(document.getElementById("valuexx0").value);
  var ansxxD = parseFloat(document.getElementById("answerxx").value);
  var valxx4 = parseFloat(document.getElementById("valuexx4").value);
  var valxx5 = parseFloat(document.getElementById("valuexx5").value);
  var aspxx = document.getElementById("ansxx");

  aspxx.value = (valxx0 + ansxxD + valxx4 + valxx5) / 1;
  //for 12th row
  var valxx10 = parseFloat(document.getElementById("valuexx10").value);
  var ansxx1D = parseFloat(document.getElementById("answerxx1").value);
  var valxx14 = parseFloat(document.getElementById("valuexx14").value);
  var valxx15 = parseFloat(document.getElementById("valuexx15").value);
  var aspxx1 = document.getElementById("ansxx1");

  aspxx1.value = (valxx10 + ansxx1D + valxx14 + valxx15) / 1;
}

function total_1() {
  //for 1st row
  var val6 = parseFloat(document.getElementById("value6").value);
  var asp = parseFloat(document.getElementById("ans").value);
  var asp21 = document.getElementById("ans12");
  asp21.value = val6 + asp;

  //for  2nd row
  var val26 = parseFloat(document.getElementById("value26").value);
  var asp2 = parseFloat(document.getElementById("ans2").value);
  var asp22 = document.getElementById("ans22");

  asp22.value = val26 + asp2;

  //for 3rd row
  var val36 = parseFloat(document.getElementById("value36").value);

  var asp3 = parseFloat(document.getElementById("ans3").value);
  var asp23 = document.getElementById("ans32");

  asp23.value = val36 + asp3;

  //for 4th row
  var val46 = parseFloat(document.getElementById("value46").value);
  var asp4 = parseFloat(document.getElementById("ans4").value);
  var asp24 = document.getElementById("ans42");

  asp24.value = val46 + asp4;

  //for 5th row
  var val56 = parseFloat(document.getElementById("value56").value);
  var asp5 = parseFloat(document.getElementById("ans5").value);
  var asp25 = document.getElementById("ans52");

  asp25.value = val56 + asp5;
  //for 6th row
  var val66 = parseFloat(document.getElementById("value66").value);
  var asp6 = parseFloat(document.getElementById("ans6").value);
  var asp26 = document.getElementById("ans62");
  asp26.value = val66 + asp6;

  //for  7th row
  var val76 = parseFloat(document.getElementById("value76").value);
  var asp7 = parseFloat(document.getElementById("ans7").value);
  var asp27 = document.getElementById("ans72");

  asp27.value = val76 + asp7;

  //for 8th row
  var val86 = parseFloat(document.getElementById("value86").value);
  var asp8 = parseFloat(document.getElementById("ans8").value);
  var asp28 = document.getElementById("ans82");

  asp28.value = val86 + asp8;

  //for 9th row
  var val96 = parseFloat(document.getElementById("value96").value);
  var asp9 = parseFloat(document.getElementById("ans9").value);
  var asp29 = document.getElementById("ans92");

  asp29.value = val96 + asp9;

  //for 10th row
  var valx6 = parseFloat(document.getElementById("valuex6").value);
  var aspx = parseFloat(document.getElementById("ansx").value);
  var asp3x = document.getElementById("ansx2");

  asp3x.value = valx6 + aspx;
  //for 11th row
  var valxx6 = parseFloat(document.getElementById("valuexx6").value);
  var aspxx = parseFloat(document.getElementById("ansxx").value);
  var asp3xx = document.getElementById("ansxx2");

  asp3xx.value = valxx6 + aspxx;
  //for 12th row
  var valxx16 = parseFloat(document.getElementById("valuexx16").value);
  var aspxx1 = parseFloat(document.getElementById("ansxx1").value);
  var asp3xx1 = document.getElementById("ansxx12");

  asp3xx1.value = valxx16 + aspxx1;
}
function gradeval1() {
  var gradecol = parseFloat(document.getElementById("relative1").value);
  var grade = document.getElementById("grade1");
  if (gradecol > 80) {
    grade.value = " A+ ";
  } else if (gradecol > 70) {
    grade.value = " A ";
  } else if (gradecol > 60) {
    grade.value = " B+ ";
  } else if (gradecol > 55) {
    grade.value = " B ";
  } else if (gradecol > 50) {
    grade.value = " C+ ";
  } else if (gradecol > 45) {
    grade.value = " C ";
  } else if (gradecol > 40) {
    grade.value = " D ";
  } else if (gradecol > 20) {
    grade.value = " E ";
  } else if (gradecol >= 0) {
    grade.value = " F ";
  } else {
    grade.value = " No value";
  }
  //2nd row
  var gradecol2 = parseFloat(document.getElementById("relative2").value);
  var grade2 = document.getElementById("grade2");
  if (gradecol2 > 80) {
    grade2.value = " A+ ";
  } else if (gradecol2 > 70) {
    grade2.value = " A ";
  } else if (gradecol2 > 60) {
    grade2.value = " B+ ";
  } else if (gradecol2 > 55) {
    grade2.value = " B ";
  } else if (gradecol2 > 50) {
    grade2.value = " C+ ";
  } else if (gradecol2 > 45) {
    grade2.value = " C ";
  } else if (gradecol2 > 40) {
    grade2.value = " D ";
  } else if (gradecol2 > 20) {
    grade2.value = " E ";
  } else if (gradecol2 >= 0) {
    grade2.value = " F ";
  } else {
    grade2.value = " No value";
  }
  //for 3rd row
  var gradecol3 = parseFloat(document.getElementById("relative3").value);
  var grade3 = document.getElementById("grade3");
  if (gradecol3 > 80) {
    grade3.value = " A+ ";
  } else if (gradecol3 > 70) {
    grade3.value = " A ";
  } else if (gradecol3 > 60) {
    grade3.value = " B+ ";
  } else if (gradecol3 > 55) {
    grade3.value = " B ";
  } else if (gradecol3 > 50) {
    grade3.value = " C+ ";
  } else if (gradecol3 > 45) {
    grade3.value = " C ";
  } else if (gradecol3 > 40) {
    grade3.value = " D ";
  } else if (gradecol3 > 20) {
    grade3.value = " E ";
  } else if (gradecol3 >= 0) {
    grade3.value = " F ";
  } else {
    grade3.value = " No value";
  }
  //for 4th row
  var gradecol4 = parseFloat(document.getElementById("relative4").value);
  var grade4 = document.getElementById("grade4");
  if (gradecol4 > 80) {
    grade4.value = " A+ ";
  } else if (gradecol4 > 70) {
    grade4.value = " A ";
  } else if (gradecol4 > 60) {
    grade4.value = " B+ ";
  } else if (gradecol4 > 55) {
    grade4.value = " B ";
  } else if (gradecol4 > 50) {
    grade4.value = " C+ ";
  } else if (gradecol4 > 45) {
    grade4.value = " C ";
  } else if (gradecol4 > 40) {
    grade4.value = " D ";
  } else if (gradecol4 > 20) {
    grade4.value = " E ";
  } else if (gradecol4 >= 0) {
    grade4.value = " F ";
  } else {
    grade4.value = " No value";
  }
  //for 5th row
  var gradecol5 = parseFloat(document.getElementById("relative5").value);
  var grade5 = document.getElementById("grade5");
  if (gradecol5 > 80) {
    grade5.value = " A+ ";
  } else if (gradecol5 > 70) {
    grade5.value = " A ";
  } else if (gradecol5 > 60) {
    grade5.value = " B+ ";
  } else if (gradecol5 > 55) {
    grade5.value = " B ";
  } else if (gradecol5 > 50) {
    grade5.value = " C+ ";
  } else if (gradecol5 > 45) {
    grade5.value = " C ";
  } else if (gradecol5 > 40) {
    grade5.value = " D ";
  } else if (gradecol5 > 20) {
    grade5.value = " E ";
  } else if (gradecol5 >= 0) {
    grade5.value = " F ";
  } else {
    grade5.value = "No value";
  }
  //6th row
  var gradecol6 = parseFloat(document.getElementById("relative6").value);
  var grade6 = document.getElementById("grade6");
  if (gradecol6 > 80) {
    grade6.value = " A+ ";
  } else if (gradecol6 > 70) {
    grade6.value = " A ";
  } else if (gradecol6 > 60) {
    grade6.value = " B+ ";
  } else if (gradecol6 > 55) {
    grade6.value = " B ";
  } else if (gradecol6 > 50) {
    grade6.value = " C+ ";
  } else if (gradecol6 > 45) {
    grade6.value = " C ";
  } else if (gradecol6 > 40) {
    grade6.value = " D ";
  } else if (gradecol6 > 20) {
    grade6.value = " E ";
  } else if (gradecol6 >= 0) {
    grade6.value = " F ";
  } else {
    grade6.value = " No value";
  }
  //7throw
  var gradecol7 = parseFloat(document.getElementById("relative7").value);
  var grade7 = document.getElementById("grade7");
  if (gradecol7 > 80) {
    grade7.value = " A+ ";
  } else if (gradecol7 > 70) {
    grade7.value = " A ";
  } else if (gradecol7 > 60) {
    grade7.value = " B+ ";
  } else if (gradecol7 > 55) {
    grade7.value = " B ";
  } else if (gradecol7 > 50) {
    grade7.value = " C+ ";
  } else if (gradecol7 > 45) {
    grade7.value = " C ";
  } else if (gradecol7 > 40) {
    grade7.value = " D ";
  } else if (gradecol7 > 20) {
    grade7.value = " E ";
  } else if (gradecol7 >= 0) {
    grade7.value = " F ";
  } else {
    grade7.value = " No value";
  }
  //for 8th row
  var gradecol8 = parseFloat(document.getElementById("relative8").value);
  var grade8 = document.getElementById("grade8");
  if (gradecol8 > 80) {
    grade8.value = " A+ ";
  } else if (gradecol8 > 70) {
    grade8.value = " A ";
  } else if (gradecol8 > 60) {
    grade8.value = " B+ ";
  } else if (gradecol8 > 55) {
    grade8.value = " B ";
  } else if (gradecol8 > 50) {
    grade8.value = " C+ ";
  } else if (gradecol8 > 45) {
    grade8.value = " C ";
  } else if (gradecol8 > 40) {
    grade8.value = " D ";
  } else if (gradecol8 > 20) {
    grade8.value = " E ";
  } else if (gradecol8 >= 0) {
    grade8.value = " F ";
  } else {
    grade8.value = " No value";
  }
  //for 9th row
  var gradecol9 = parseFloat(document.getElementById("relative9").value);
  var grade9 = document.getElementById("grade9");
  if (gradecol9 > 80) {
    grade9.value = " A+ ";
  } else if (gradecol9 > 70) {
    grade9.value = " A ";
  } else if (gradecol9 > 60) {
    grade9.value = " B+ ";
  } else if (gradecol9 > 55) {
    grade9.value = " B ";
  } else if (gradecol9 > 50) {
    grade9.value = " C+ ";
  } else if (gradecol9 > 45) {
    grade9.value = " C ";
  } else if (gradecol9 > 40) {
    grade9.value = " D ";
  } else if (gradecol9 > 20) {
    grade9.value = " E ";
  } else if (gradecol9 >= 0) {
    grade9.value = " F ";
  } else {
    grade9.value = " No value";
  }
  //for 10th row
  var gradecolx = parseFloat(document.getElementById("relativex").value);
  var gradex = document.getElementById("gradex");
  if (gradecolx > 80) {
    gradex.value = " A+ ";
  } else if (gradecolx > 70) {
    gradex.value = " A ";
  } else if (gradecolx > 60) {
    gradex.value = " B+ ";
  } else if (gradecolx > 55) {
    gradex.value = " B ";
  } else if (gradecolx > 50) {
    gradex.value = " C+ ";
  } else if (gradecolx > 45) {
    gradex.value = " C ";
  } else if (gradecolx > 40) {
    gradex.value = " D ";
  } else if (gradecolx > 20) {
    gradex.value = " E ";
  } else if (gradecolx >= 0) {
    gradex.value = " F ";
  } else {
    gradex.value = "No value";
  }

  //for 11th row
  var gradecolxx = parseFloat(document.getElementById("relativexx").value);
  var gradexx = document.getElementById("gradexx");
  if (gradecolxx > 80) {
    gradexx.value = " A+ ";
  } else if (gradecolxx > 70) {
    gradexx.value = " A ";
  } else if (gradecolxx > 60) {
    gradexx.value = " B+ ";
  } else if (gradecolxx > 55) {
    gradexx.value = " B ";
  } else if (gradecolxx > 50) {
    gradexx.value = " C+ ";
  } else if (gradecolxx > 45) {
    gradexx.value = " C ";
  } else if (gradecolxx > 40) {
    gradexx.value = " D ";
  } else if (gradecolxx > 20) {
    gradexx.value = " E ";
  } else if (gradecolxx >= 0) {
    gradexx.value = " F ";
  } else {
    gradexx.value = "No value";
  }

  //for 12th row
  var gradecolxx1 = parseFloat(document.getElementById("relativexx1").value);
  var gradexx1 = document.getElementById("gradexx1");
  if (gradecolxx1 > 80) {
    gradexx1.value = " A+ ";
  } else if (gradecolxx1 > 70) {
    gradexx1.value = " A ";
  } else if (gradecolxx1 > 60) {
    gradexx1.value = " B+ ";
  } else if (gradecolxx1 > 55) {
    gradexx1.value = " B ";
  } else if (gradecolxx1 > 50) {
    gradexx1.value = " C+ ";
  } else if (gradecolxx1 > 45) {
    gradexx1.value = " C ";
  } else if (gradecolxx1 > 40) {
    gradexx1.value = " D ";
  } else if (gradecolxx1 > 20) {
    gradexx1.value = " E ";
  } else if (gradecolxx1 >= 0) {
    gradexx1.value = " F ";
  } else {
    gradexx1.value = "No value";
  }
}
function sort_1() {
  var val1 = parseFloat(document.getElementById("ans12").value);
  var val2 = parseFloat(document.getElementById("ans22").value);
  var val3 = parseFloat(document.getElementById("ans32").value);
  var val4 = parseFloat(document.getElementById("ans42").value);
  var val5 = parseFloat(document.getElementById("ans52").value);
  var val6 = parseFloat(document.getElementById("ans62").value);
  var val7 = parseFloat(document.getElementById("ans72").value);
  var val8 = parseFloat(document.getElementById("ans82").value);
  var val9 = parseFloat(document.getElementById("ans92").value);
  var valx = parseFloat(document.getElementById("ansx2").value);
  var valxx = parseFloat(document.getElementById("ansxx2").value);
  var valxx1 = parseFloat(document.getElementById("ansxx12").value);
  var fLen, i, j, temp;
  var text = "";
  var point, A;
  var points = [
    val1,
    val2,
    val3,
    val4,
    val5,
    val6,
    val7,
    val8,
    val9,
    valx,
    valxx,
    valxx1,
  ];
  fLen = points.length;
  points.sort(function (a, b) {
    return b - a;
  });
  for (i = 0; i < fLen; i++) {
    for (j = 0; j < fLen - 1; j++) {
      if (points[j] >= 80) {
        temp = points[j];
        points[j] = points[j + 1];
        points[j + 1] = temp;
      }
    }
  }
  if (points[0] >= 80) {
    point = 1;
  } else if (points[0] > 70 && points[0] < 80) {
    points.sort(function (a, b) {
      return a - b;
    });
    for (i = 0; i < fLen; i++) {
      if (points[i] < 80 && points[i] > 70) {
        point = text += 80 / points[i];
        +" ";
        break;
      }
    }
  } else if (points[0] <= 70 && points[0] > 60) {
    points.sort(function (a, b) {
      return a - b;
    });
    for (i = 0; i < fLen; i++) {
      if (points[i] <= 70 && points[i] > 60) {
        point = text += 70 / points[i];
        +" ";
        break;
      }
    }
  } else if (points[0] <= 60 && points[0] > 55) {
    points.sort(function (a, b) {
      return a - b;
    });
    for (i = 0; i < fLen; i++) {
      if (points[i] <= 60 && points[i] > 55) {
        point = text += 60 / points[i];
        +" ";
        break;
      }
    }
  } else if (points[0] <= 55 && points[0] > 50) {
    points.sort(function (a, b) {
      return a - b;
    });
    for (i = 0; i < fLen; i++) {
      if (points[i] <= 55 && points[i] > 50) {
        point = text += 55 / points[i];
        +" ";
        break;
      }
    }
  } else if (points[0] <= 50 && points[0] > 45) {
    points.sort(function (a, b) {
      return a - b;
    });
    for (i = 0; i < fLen; i++) {
      if (points[i] <= 50 && points[i] > 45) {
        point = text += 50 / points[i];
        +" ";
        break;
      }
    }
  } else if (points[0] <= 45 && points[0] >= 40) {
    points.sort(function (a, b) {
      return a - b;
    });
    for (i = 0; i < fLen; i++) {
      if (points[0] <= 45 && points[0] >= 40) {
        point = text += 45 / points[i];
        +" ";
        break;
      }
    }
  } else if (points[0] < 40) {
    point = 1;
  }
  //var factor1 = document.getElementById("demo").innerHTML=point;
  var factor1 = (document.getElementById("demo").value = point);
  //for relative
  //1st row
  var total = parseFloat(document.getElementById("ans12").value);
  var relative = document.getElementById("relative1");
  relative.value = total * point;
  // 2nd row
  var total1 = parseFloat(document.getElementById("ans22").value);
  var relative1 = document.getElementById("relative2");
  relative1.value = total1 * point;
  //3rd row
  var total2 = parseFloat(document.getElementById("ans32").value);
  var relative2 = document.getElementById("relative3");
  relative2.value = total2 * point;
  //4th row
  var total3 = parseFloat(document.getElementById("ans42").value);
  var relative3 = document.getElementById("relative4");
  relative3.value = total3 * point;
  //5th row
  var total4 = parseFloat(document.getElementById("ans52").value);
  var relative4 = document.getElementById("relative5");
  relative4.value = total4 * point;
  //6th row
  var total5 = parseFloat(document.getElementById("ans62").value);
  var relative5 = document.getElementById("relative6");
  relative5.value = total5 * point;
  //7th row
  var total6 = parseFloat(document.getElementById("ans72").value);
  var relative6 = document.getElementById("relative7");
  relative6.value = total6 * point;
  //8th row
  var total7 = parseFloat(document.getElementById("ans82").value);
  var relative7 = document.getElementById("relative8");
  relative7.value = total7 * point;
  //9th row
  var total8 = parseFloat(document.getElementById("ans92").value);
  var relative8 = document.getElementById("relative9");
  relative8.value = total8 * point;
  //10th row
  var total9 = parseFloat(document.getElementById("ansx2").value);
  var relative9 = document.getElementById("relativex");
  relative9.value = total9 * point;
  //11th row
  var totalx = parseFloat(document.getElementById("ansxx2").value);
  var relativex = document.getElementById("relativexx");
  relativex.value = totalx * point;
  //12th row
  var totalx1 = parseFloat(document.getElementById("ansxx12").value);
  var relativex2 = document.getElementById("relativexx1");
  relativex2.value = totalx1 * point;
}
function my() {
  window.print();
}
