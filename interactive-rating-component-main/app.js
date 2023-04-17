let noteFinal


let One = document.getElementById("One")
let Two = document.getElementById("Two")
let Three = document.getElementById("Three")
let Foor = document.getElementById("Foor")
let Five = document.getElementById("Five")


function changeSlide(){
  
    if(One.checked == true){
        noteFinal = "1"
    }

    if(Two.checked == true){
        noteFinal = "2"
    }

    if(Three.checked == true){
        noteFinal = "3"
    }


    if(Foor.checked == true){
        noteFinal = "4"
    }

    if(Five.checked == true){
        noteFinal = "5"
    }

  if(noteFinal != null){
    document.getElementById("noteSection").innerHTML = '<div id="ThankPage"><img src="images/illustration-thank-you.svg"><div id="Score">You selected '+ noteFinal +' out of 5</div><h1>Thank you!</h1><h2></h2> We appreciate you taking the time to give a rating. <br>If you ever need more support, don’t hesitate to <br>get in touch!</div>' 
  }
  

}