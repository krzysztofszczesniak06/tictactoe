function plansza()
{
  var tresc = "";

  for (var i = 0; i < 9 ; i++) {
    var element = "pol"+i;

    tresc = tresc + '<div class="pole" onclick="zmianaznaku('+i+')" id="'+element+'"></div>';

    if ((i+1)%3 == 0) {
      tresc = tresc + '<div style="clear:both;"></div>';
    }

  }

  document.getElementById('plansza').innerHTML = tresc;
  powitanie();
}

window.onload = plansza;

function powitanie()
{
  document.getElementById("hello").innerHTML = "<h1>Witaj w grze Kółko Krzyżyk<h1>";

}


var znak = "X";
var gracz = 1;
var pole = new Array;


function zmianaznaku(nrpola)
{
  if(znak!="X") {
    znak="X";
    gracz = 1;
  }else {
    znak = "O";
    gracz = 2;
  }

  document.getElementById("pol"+nrpola).innerHTML = znak;
  pole[nrpola] = znak;
  document.getElementById("pol"+nrpola).setAttribute("onclick",";");
  document.getElementById("nrgracza").innerHTML = "Ruch gracza z nr "+gracz;
  wygrana();

}

var numer = 1;

function wygrana()
{
  if(pole[0]=="X"&&pole[1]=="X"&&pole[2]=="X"){
    numer=0;
    document.getElementById("pol0").style.background="green";
    document.getElementById("pol1").style.background="green";
    document.getElementById("pol2").style.background="green";
    for (var i = 0; i < 9; i++) {
      document.getElementById("pol"+i).setAttribute("onclick",";");
      document.getElementById("pol"+i).style.cursor="default";
    }
  }
  if(pole[3]=="X"&&pole[4]=="X"&&pole[5]=="X"){
    numer=0;
    document.getElementById("pol3").style.background="green";
    document.getElementById("pol4").style.background="green";
    document.getElementById("pol5").style.background="green";
    for (var i = 0; i < 9; i++) {
      document.getElementById("pol"+i).setAttribute("onclick",";");
      document.getElementById("pol"+i).style.cursor="default";
    }
  }
  if(pole[6]=="X"&&pole[7]=="X"&&pole[8]=="X"){
    numer=0;
    document.getElementById("pol6").style.background="green";
    document.getElementById("pol7").style.background="green";
    document.getElementById("pol8").style.background="green";
    for (var i = 0; i < 9; i++) {
      document.getElementById("pol"+i).setAttribute("onclick",";");
      document.getElementById("pol"+i).style.cursor="default";
    }
  }
  if(pole[0]=="X"&&pole[3]=="X"&&pole[6]=="X"){
    numer=0;
    document.getElementById("pol0").style.background="green";
    document.getElementById("pol3").style.background="green";
    document.getElementById("pol6").style.background="green";
    for (var i = 0; i < 9; i++) {
      document.getElementById("pol"+i).setAttribute("onclick",";");
      document.getElementById("pol"+i).style.cursor="default";
    }
  }
  if(pole[1]=="X"&&pole[4]=="X"&&pole[7]=="X"){
    numer=0;
    document.getElementById("pol1").style.background="green";
    document.getElementById("pol4").style.background="green";
    document.getElementById("pol7").style.background="green";
    for (var i = 0; i < 9; i++) {
      document.getElementById("pol"+i).setAttribute("onclick",";");
      document.getElementById("pol"+i).style.cursor="default";
    }
  }
  if(pole[2]=="X"&&pole[5]=="X"&&pole[8]=="X"){
    numer=0;
    document.getElementById("pol2").style.background="green";
    document.getElementById("pol5").style.background="green";
    document.getElementById("pol8").style.background="green";
    for (var i = 0; i < 9; i++) {
      document.getElementById("pol"+i).setAttribute("onclick",";");
      document.getElementById("pol"+i).style.cursor="default";
    }
  }
  if(pole[0]=="X"&&pole[4]=="X"&&pole[8]=="X"){
    numer=0;
    document.getElementById("pol0").style.background="green";
    document.getElementById("pol4").style.background="green";
    document.getElementById("pol8").style.background="green";
    for (var i = 0; i < 9; i++) {
      document.getElementById("pol"+i).setAttribute("onclick",";");
      document.getElementById("pol"+i).style.cursor="default";
    }
  }
  if(pole[2]=="X"&&pole[4]=="X"&&pole[6]=="X"){
    numer=0;
    document.getElementById("pol2").style.background="green";
    document.getElementById("pol4").style.background="green";
    document.getElementById("pol6").style.background="green";
    for (var i = 0; i < 9; i++) {
      document.getElementById("pol"+i).setAttribute("onclick",";");
      document.getElementById("pol"+i).style.cursor="default";
    }
  }
  if(pole[0]=="O"&&pole[1]=="O"&&pole[2]=="O"){
    numer=0;
    document.getElementById("pol0").style.background="green";
    document.getElementById("pol1").style.background="green";
    document.getElementById("pol2").style.background="green";
    for (var i = 0; i < 9; i++) {
      document.getElementById("pol"+i).setAttribute("onclick",";");
      document.getElementById("pol"+i).style.cursor="default";
    }
  }
  if(pole[3]=="O"&&pole[4]=="O"&&pole[5]=="O"){
    numer=2;
    document.getElementById("pol3").style.background="green";
    document.getElementById("pol4").style.background="green";
    document.getElementById("pol5").style.background="green";
    for (var i = 0; i < 9; i++) {
      document.getElementById("pol"+i).setAttribute("onclick",";");
      document.getElementById("pol"+i).style.cursor="default";
    }
  }
  if(pole[6]=="O"&&pole[7]=="O"&&pole[8]=="O"){
    numer=2;
    document.getElementById("pol6").style.background="green";
    document.getElementById("pol7").style.background="green";
    document.getElementById("pol8").style.background="green";
    for (var i = 0; i < 9; i++) {
      document.getElementById("pol"+i).setAttribute("onclick",";");
      document.getElementById("pol"+i).style.cursor="default";
    }
  }
  if(pole[0]=="O"&&pole[3]=="O"&&pole[6]=="O"){
    numer=2;
    document.getElementById("pol0").style.background="green";
    document.getElementById("pol3").style.background="green";
    document.getElementById("pol6").style.background="green";
    for (var i = 0; i < 9; i++) {
      document.getElementById("pol"+i).setAttribute("onclick",";");
      document.getElementById("pol"+i).style.cursor="default";
    }
  }
  if(pole[1]=="O"&&pole[4]=="O"&&pole[7]=="O"){
    numer=2;
    document.getElementById("pol1").style.background="green";
    document.getElementById("pol4").style.background="green";
    document.getElementById("pol7").style.background="green";
    for (var i = 0; i < 9; i++) {
      document.getElementById("pol"+i).setAttribute("onclick",";");
      document.getElementById("pol"+i).style.cursor="default";
    }
  }
  if(pole[2]=="O"&&pole[5]=="O"&&pole[8]=="O"){
    numer=2;
    document.getElementById("pol2").style.background="green";
    document.getElementById("pol5").style.background="green";
    document.getElementById("pol8").style.background="green";
    for (var i = 0; i < 9; i++) {
      document.getElementById("pol"+i).setAttribute("onclick",";");
      document.getElementById("pol"+i).style.cursor="default";
    }
  }
  if(pole[0]=="O"&&pole[4]=="O"&&pole[8]=="O"){
    numer=2;
    document.getElementById("pol0").style.background="green";
    document.getElementById("pol4").style.background="green";
    document.getElementById("pol8").style.background="green";
    for (var i = 0; i < 9; i++) {
      document.getElementById("pol"+i).setAttribute("onclick",";");
      document.getElementById("pol"+i).style.cursor="default";
    }
  }
  if(pole[2]=="O"&&pole[4]=="O"&&pole[6]=="O"){
    numer=2;
    document.getElementById("pol2").style.background="green";
    document.getElementById("pol4").style.background="green";
    document.getElementById("pol6").style.background="green";
    for (var i = 0; i < 9; i++) {
      document.getElementById("pol"+i).setAttribute("onclick",";");
      document.getElementById("pol"+i).style.cursor="default";
    }
  }

  if(numer==0)
  {
    document.getElementById('nrgracza').innerHTML = "Wygrał gracz z numerem 2";
    document.getElementById('again').innerHTML = "Rozpocznij nową grę";
  }else if(numer==2)
  {
    document.getElementById('nrgracza').innerHTML = "Wygrał gracz z numerem 1";
    document.getElementById('again').innerHTML = "Rozpocznij nową grę";
  }
}
