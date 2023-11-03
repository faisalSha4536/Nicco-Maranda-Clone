const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to('#page1', {
    y: '100vh',
    duration:0,
    scale:0.5,    
})

tl.to('#page1', {
    y:'0vh',
    scale:0.5,
    duration: .7,
    delay: 1
})

tl.to('#page1', {
    rotate: 360,
    duration: 1,
    scale: 1
})

let card1 = document.querySelector('.cards #card1')
let card2 = document.querySelector('.cards #card2')
let card3 = document.querySelector('.cards #card3')
let card4 = document.querySelector('.cards #card4')

card1.addEventListener('mouseenter',function(){
    card2.style.left = '38%';
    card3.style.left = '55%';
    card4.style.left = '70%';
    
    card1.addEventListener('mouseleave',function(){
        card2.style.left = '18%';
        card3.style.left = '34%';
        card4.style.left = '53%';
    })
})

card2.addEventListener('mouseenter',function(){
    card3.style.left = '55%';
    card4.style.left = '70%';
    
    card2.addEventListener('mouseleave',function(){
        card3.style.left = '34%';
        card4.style.left = '53%';
    })
})


card3.addEventListener('mouseenter',function(){
    card4.style.left = '70%';
    
    card3.addEventListener('mouseleave',function(){
        card4.style.left = '53%';
    })
})
