let userEmail = prompt("당신의 이메일은?","");

let arrUrl=[".co.kr", ".com", ".net", "or.kr", "go.kr"];

let check1 = false;
let check2 = false;

if(userEmail.indexOf("@")>0){
    check1 = true;
}

for(let i=0;i<arrUrl.length; i++){
    if(userEmail.indexOf(arrUrl[i] >0)){
        check2 = true;
    }
}
if(check1 && check2){
    document.write(userEmail);
}else{
    alert("이메일 형식이 잘못됐습니다!")
}