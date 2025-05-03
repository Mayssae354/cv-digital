const btn1 = document.getElementById('btn1');
const sec1 = document.getElementById('sec1');
const btn2 = document.getElementById('btn2');
const sec2 = document.getElementById('sec2');
const btn3 = document.getElementById('btn3');
const sec3 = document.getElementById('sec3');
const down = document.getElementById('down');
const choices = document.getElementById('barre'); 

let activeSection = null; 

function reset() {
    
    btn1.style.background = "linear-gradient(25deg, #dbdada, #ffffff)";
    btn2.style.background = "linear-gradient(25deg, #dbdada, #ffffff)";
    btn3.style.background = "linear-gradient(25deg, #dbdada, #ffffff)";
    
    btn1.style.color = "#453e3e";
    btn2.style.color = "#453e3e";
    btn3.style.color = "#453e3e";
    sec1.style.display = "none";
    sec2.style.display = "none";
    sec3.style.display = "none";
    down.style.display = "none";
    activeSection = null;
}



btn1.addEventListener('click', () => {
    if (activeSection === 'sec1') {
        reset();
        choices.classList.remove('small');
        choices.classList.add('large');
        btn2.style.display = "block";
        btn3.style.display = "block";
        down.style.display = "flex";
    } else {
        reset();
      
        btn1.style.background = "linear-gradient(160deg, rgb(189, 189, 189), #ffffff)";
        btn1.style.color = "#693419"
        btn2.style.display = "none";
        btn3.style.display = "none";
        sec1.classList.add("show");
        sec1.style.display = "block";
        down.style.display = "none";
        activeSection = 'sec1';
        choices.classList.remove('large');
        choices.classList.add('small');
    }
});

btn2.addEventListener('click', () => {
    if (activeSection === 'sec2') {
        reset();
        choices.classList.remove('small');
        choices.classList.add('large');
        btn1.style.display = "block";
        btn3.style.display = "block";
        down.style.display = "flex";
    } else {
        reset();
        btn2.style.background = "linear-gradient(160deg, rgb(189, 189, 189), #ffffff)";      
        btn2.style.color = "#1f2a44"
        btn1.style.display = "none";
        btn3.style.display = "none";
        down.style.display = "none";
        sec2.classList.add("show");
        sec2.style.display = "block";
       
        activeSection = 'sec2';
        choices.classList.remove('large');
        choices.classList.add('small');
    }
});

btn3.addEventListener('click', () => {
    if (activeSection === 'sec3') {
        reset();
        choices.classList.remove('small');
        choices.classList.add('large');
        btn1.style.display = "block";
        btn2.style.display = "block";
        down.style.display = "flex";
    } else {
        reset();
        btn3.style.background = "linear-gradient(160deg, rgb(189, 189, 189), #ffffff)";   
        
        btn3.style.color = "#5c1f1a"
        btn1.style.display = "none";
        btn2.style.display = "none";
        down.style.display = "none";
        sec3.classList.add("show");
        sec3.style.display = "block";

        activeSection = 'sec3';
        choices.classList.remove('large');
        choices.classList.add('small');
    }
});