//your code here!
const num=document.getElementById('input-number').value;
const buttonnum = document.getElementById('button-compute');
const printt=document.querySelector('p')

buttonnum.onClick=function(){
     var numin = input.value;
     input.value="";
     var textnum =document.createElement('p');
     textnum.textContent= 620610821-numin;
     printt.appendChild(textnum);
     console.log(numin);
     input.focus();
}
