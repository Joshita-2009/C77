var first_name="Joshita ";
var second_name="Alapati";
var full_name=first_name.concat(second_name);
console.log(full_name);
document.getElementById("answer_1").innerHTML=full_name;

var chocolates=["Five star", "Dairy Milk", "Kitkat"];
chocolates.push("Munch");
chocolates.pop();
chocolates.unshift("Munch");
chocolates.sort();
chocolates.reverse();
console.log(chocolates[chocolates.length-1]);

var array="";
for(var i=0; i<chocolates.length;i++){
    array=array+chocolates[i]+"<br>";
}
document.getElementById("answer_2").innerHTML=array;

var number=["09765036485024389534", "54", "4359", "34786430"];
var Maximum=Math.max.apply(Math,number);
var Minimum=Math.min.apply(Math,number);
document.getElementById("answer_3").innerHTML=Minimum;

var countries=["Russia", "India", "USA"];
var country=["Japan", "China", "Bhutan"];
var all_countries=countries.concat(country);
document.getElementById("answer_4").innerHTML=all_countries;
