'use strict';

let person = prompt("Please enter your name");

if (person != null) {
//console.log("Hello " + person + "! How are you today?")
alert("Hello " + person + "! How are you today?")
}

let hi = prompt("Are you 18 or older? please give yes or no answer").toLowerCase();

if (hi === 'yes') {
   // console.log("welcome to our website " + person )
alert("welcome to our website " + person )

   
    } else{

        //console.log(" Sorry, you are too young to browse our website" + person)
        alert(" Sorry, you are too young to browse our website" + person)
    }

    let nat = prompt("Are you Jordanian? please give yes or no answer").toLowerCase();

    if (nat === 'yes') {
       // console.log("welcom ya Nashmi " )
           alert('welcome' + person)
        } else{
    
           // console.log(" welcome in Jordan"   + person)
           alert(" welcome in Jordan"   + person)
        }

    let likes = prompt("Do you study programming?  please give yes or no answer").toLowerCase();
    
    if (likes === 'yes') {
       // console.log("You're in the right place "  + person )
       alert("You're in the right place "  + person )
        } else{
    
            //console.log(" you will not enjoy our course then" + person)
            alert(" you will not enjoy our course then" + person)
        }

    let programming = prompt(" Do you like programming? please give yes or no answer").toLowerCase();
    if (programming === 'yes') {
       // console.log(" Me too " + person )
       alert(" Me too " + person )
        } else{
    
          //  console.log(" it is fun, why don't you try it?" + person)
          alert(" it is fun, why don't you try it?" + person)
        }

    let rec = prompt("Would you recommand us? please give yes or no answer").toLowerCase();

    if (rec === 'yes') {
       // console.log("Thank you " + person )
       alert("Thank you " + person )
        } else{
    
           // console.log(" We're sorry for that" + person)
           alert(" We're sorry for that" + person)
        }
