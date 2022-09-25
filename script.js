let fadeInTarget = document.querySelectorAll('.fadeIn');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const rect = fadeInTarget[i].getBoundingClientRect().top; //現在の表示画面の一番上から要素の上部分までの距離
    const scroll = window.pageYOffset || document.documentElement.scrollTop; //どれだけスクロールしたか
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 70) {
      fadeInTarget[i].classList.add('scrollActive');
    }
  }
});

let header = document.querySelector("#header");
let hamburger = document.querySelector("#hamburger")
let btn = document.querySelector("#toggle-btn");
let mask = document.querySelector("#mask");

//メニューを開く
btn.onclick = () => {
  header.classList.toggle("openNav");
  hamburger.classList.toggle("closeHamburger");
}

//メニューを閉じる
mask.onclick = () => {
  header.classList.toggle("openNav");
  hamburger.classList.toggle("closeHamburger");
}
