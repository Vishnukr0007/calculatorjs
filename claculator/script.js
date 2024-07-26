function btnclick(val){
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}
function DisplayClear(){
    document.getElementById("screen").value=""
}
   function equalClick(){
    let text=document.getElementById("screen").value
    let result=eval(text)
    document.getElementById('screen').value=result
}