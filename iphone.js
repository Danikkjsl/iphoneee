new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const asideBlock16promax = document.getElementById('aside-block1');
const asideBlock16pro = document.getElementById('aside-block2');
const asideBlock16 = document.getElementById('aside-block3');
const asideBlock16promaxButton = document.getElementById('aside-block-16promax');
const asideBlock16proButton = document.getElementById('aside-block-16pro');
const asideBlock16Button = document.getElementById('aside-block-16');
const overlay = document.createElement('div'); 

overlay.classList.add('overlay-blur'); 

document.body.appendChild(overlay); 

asideBlock16promaxButton.addEventListener('click', () => {
    asideBlock16promax.style.display = 'block';
    overlay.style.display = 'block'; 
});
asideBlock16proButton.addEventListener('click', () =>{
  asideBlock16pro.style.display = 'block';
  overlay.style.display = 'block'; 
})
asideBlock16Button.addEventListener('click', () =>{
  asideBlock16.style.display = 'block';
  overlay.style.display = 'block'; 
})

function makeBlockVisible() {
    asideBlock16promax.style.display = 'block';
    overlay.style.display = 'block';
}

window.addEventListener('click',(e)=>{
  if (e.target.classList.contains('overlay-blur')){
    asideBlock16promax.style.display = 'none'
    asideBlock16pro.style.display = 'none'
    asideBlock16.style.display = 'none'
  overlay.style.display = 'none'
  }
})
