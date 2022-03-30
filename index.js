

$("button").click( ()=>{
  console.log("pressed");
  // information from the user @decodedMessage is the message we can to encode
  let decodedMessage = $("#decodedCaesarCipher").val();
  //How much to shift the text
  let shift = Number ($("#shiftval").val());

  var reg = new RegExp(`^[0-9]*$`)
  console.log(shift);
  if( ((shift === "") ||!reg.test(shift))  )
  {
    //Send alert that the user needs a vaild option
    alert("Please enter a number to shift by ")
    return;
  }
  console.log("msg: "+decodedMessage);
  console.log("shift: "+shift);

  $("#encodedMessage").val("");
  $("#encodedMessage").val(caesarCipher(decodedMessage , shift ));


});



// Shifts a text by a certain amount
function caesarCipher(text , shift ){
  var ret ="";

  for ( var i = 0 ; i < text.length ; i++ )
  {

  let charVal = text.charCodeAt(i);
  let newChar = charVal;
  // check lower case
  if ( ( charVal < 122  ) && ( charVal > 97 ) )
  {
      newChar = ( charVal + shift - 97 ) % 26 + 97;
  }
  // check uppercase
  else if(( charVal < 90  ) && ( charVal > 65 ) )
  {
        newChar = ( charVal + shift - 65 ) % 26 + 65;
  }
  // check numbers
  else if(( charVal < 57  ) && ( charVal > 48 ))
  {
        newChar = ( charVal + shift - 48 ) % 10 + 48;
  }
  ret += String.fromCharCode(newChar);
}
return ret;
}
