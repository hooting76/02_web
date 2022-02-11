let targetLink = document.querySelectorAll('.tab-menu a');

let tabContent = document.querySelectorAll('#tabContent>div');

for(let i=0; i<targetLink.length; i++){
    targetLink[i].addEventListener('click', function(e){
        let orgTarget = e.target.getAttribute('href');

        let tabTarget=  orgTarget.replace("#","");
        // console.log(tabTarget);
        for(let k=0; k<tabContent.length; k++){
            tabContent[k].style.display = "none";
        }
        document.getElementById(tabTarget).style.display="block";
        for(let j=0; j<targetLink.length; j++){
            targetLink[j].classList.remove('active');
            e.target.classList.add('active');
        }
    });
}