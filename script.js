const showResult = document.getElementById('show-result');
const showLiveResult = document.getElementById('show-Live-result');
const buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((value)=>{
value.addEventListener('click',()=>{
    let cal = showResult.innerHTML;
    console.log(cal);
    if(value.value == "AC"){
        showResult.innerHTML="";
    }
    else if(value.value == "="){
      showResult.innerHTML= eval(cal)
    }
    else if(value.value == "DE"){
        showResult.innerHTML=showResult.innerHTML.toString().slice(0,showResult.innerHTML.length-1)
    }
    else{

        showResult.innerHTML+=value.value;
    }
})
})
