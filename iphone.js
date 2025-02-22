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

const asideBlock16promax = document.querySelector('.aside-block')
const asideBlock16promaxButton = document.getElementById('aside-block-16promax')

asideBlock16promaxButton.addEventListener('click', ()=>{
  asideBlock16promax.style.display = 'block';
  document.body.style.filter = 'blur(5px)';
  asideBlock16promax.style.filter = 'none';
})
function makeBlockVisible(){
  asideBlock16promax.style.display = 'block'
}
