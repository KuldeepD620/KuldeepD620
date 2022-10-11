const slides = document.querySelectorAll('.slide-col');
slides[0].style.backgroundColor = 'red';
slides[1].style.backgroundColor = 'green';
slides[2].style.backgroundColor = 'blue';
slides[3].style.backgroundColor = 'yellow';

// Testimonial Sliding Coding 
var btn = document.getElementsByClassName('btn');
var slide = document.getElementById('slide-row');

btn[0].onclick = function() {
    
    slide.style.transform = "translateX(0px)"
    for(let i =0; i<4;i++){
        btn[i].classList.remove('active');
        
    }
    this.classList.add('active');

};
btn[1].onclick = function() {
    slide.style.transform = "translateX(-800px)"  
    for(let i =0; i<4;i++){
        btn[i].classList.remove('active');
        
    }
    this.classList.add('active');  
};
btn[2].onclick = function() {
    slide.style.transform = "translateX(-1600px)"  
    for(let i =0; i<4;i++){
        btn[i].classList.remove('active');
        
    }
    this.classList.add('active');  
};
btn[3].onclick = function() {
    slide.style.transform = "translateX(-2400px)" 
    for(let i =0; i<4;i++){
        btn[i].classList.remove('active');
        
    }
    this.classList.add('active');   
};
