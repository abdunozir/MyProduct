let a = 0;
document.getElementById('modeBtn').addEventListener('click', function () {
  document.body.classList.toggle('dark');
  if (a == 0) {
    a++;
  } else {
    a = 0;
  }
});

let elopenmenu = document.getElementById('menu-btn');
let elColsemodal = document.getElementById('navbar');
let elModal = document.getElementById('navbar');


elopenmenu.addEventListener('click', function () {
  elModal.classList.toggle('show');
  elopenmenu.classList.toggle('show');  
});

elColsemodal.addEventListener('click', function () {
  elModal.classList.remove('show');
  
});