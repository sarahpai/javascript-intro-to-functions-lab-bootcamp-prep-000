function shout(string) {
  return string.toUpperCase()
}

function whisper(shout){
  return shout.toLowerCase()
}

function logShout(hello){
  console.log(hello.toUpperCase())
}

function logWhisper(HELLO){
  console.log(HELLO.toLowerCase())
}

function sayHiToGrandma(string){
  if(string === "I love you, Grandma."){
    return 'I love you, too.'
  } else if( string === string.toUpperCase()){
    return 'YES INDEED!'
  } else if (string === string.toLowerCase()); {
    return 'I can\'t hear you!'
  } else if (string === "GRANDMA!") {
    return 'Stop shouting!'
  }
}