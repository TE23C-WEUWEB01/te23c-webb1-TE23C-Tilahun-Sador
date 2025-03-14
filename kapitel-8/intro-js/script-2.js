// var tal1String = prompt("skriv ett tal");
// var tal2String = prompt("Skriv ett tal");
// var summa = parseInt(tal1String) + parseInt(tal2String);
// alert("Summan är " + summa)

// var ålder = prompt("Skriv din ålder");
// var studentÅlder = parseInt(ålder) + 1;
// document.writeln("<h2> Du är " + studentÅlder + " när du tar studenten!<h2>");

// Spamcheck
// Fråga användaren vad det är för slumpad "summa"

var slumptal1 = Math.floor(Math.random() * 100);
var slumptal2 = Math.floor(Math.random() * 100);
var summa = slumptal1 + slumptal2;
console.log(slumptal1, slumptal2);
var gissning = prompt("Vad är summan av " + slumptal1 + " + " + slumptal2 + "?")
if (gissning == summa)
{
    document.writeln("<h1>Good boy! </h1>")
}
else{
    document.writeln("<h1>Suck ya modda! </h1>")
}
