function toggleDarkMode() {
  const body = document.querySelector("body");
  body.classList.toggle("bg-gray-300");
  body.classList.toggle("text-white");
}

let tamplateTranslate = document.getElementById("translate");
tamplateTranslate.style.display = "none";
console.log(tamplateTranslate);

function openTranslate() {
  if (tamplateTranslate.style.display === "none") {
    tamplateTranslate.style.display = "block";
  } else {
    tamplateTranslate.style.display = "none";
  }
  console.log(tamplateTranslate.style.display);
}

let footerText = document.getElementById("fooText");
let aboutText = document.getElementById("aboutText");
let projectText = document.querySelectorAll(".projectText");

var massageIndo =
  "Saya adalah seorang mahasiswa di universitas di kota saya yang tertarik dalam dunia IT sejak lama. Meskipun saya masih tergolong junior, saya telah memperoleh beberapa pengalaman, termasuk pembuatan website sekolah, pengembangan game 2D dan 3D, dan pembuatan website untuk mengkonversi video.";
var massageIng =
  "I am a student at a university in my city who is interested in the IT world for a long time. Even though I'm still a junior, I have gained some experience, including website creation schools, 2D and 3D game development, and website creation for converting videos.";

var projectMassageIndo = [
  "Selamat datang dalam petualangan seru di mana pemain dapat menikmati mengatasi berbagai rintangan dengan menggunakan keterampilan unik mereka. Lewati semua rintangan yang muncul di depan Anda dan raihlah skor tertinggi untuk bersaing pencapaian Anda dalam permainan ini.",
  "Selamat Datang di TYI - TikTok, YouTube, Instagram Downloaders Sumber utama Anda untuk mengunduh video dari TikTok, YouTube, dan Instagram. Kami menyediakan alat yang mudah digunakan untuk mengonversi URL video favorit Anda menjadi file video yang dapat diunduh. Dengan TYI, Anda dapat menyimpan video yang Anda sukai tanpa batasan. Situs ini terus berkembang.",
  "Website yang berfokus hanya untuk menganalisis sebuah market dan laba"
];
let projectTextEng = [
  "Welcome to an exciting adventure where players can enjoy overcoming various obstacles using their unique skills. Overcome all the obstacles that appear in front of you and achieve the highest score to compete with your achievements in this game.",
  "Welcome to TYI - TikTok, YouTube, Instagram Downloaders. Your main source to download videos from TikTok, YouTube, and Instagram. We provide an easy-to-use tool to convert your favorite video URLs into downloadable video files. With TYI, you can save the videos you like without limits. This site is constantly evolving.",
  "Websites that focus only on analyzing a market and profit",
];

var footerIndo = "Siap mengerjakan project anda hubungi saya melalui sosisal media di bawah berikut";
var footerEng = "Ready to work on your project, contact me via social media below below";

for (i = 0; i < projectMassageIndo.length; i++) {
  console.log(projectMassageIndo[i]);
  projectText[i].innerHTML = projectMassageIndo[i];
}

aboutText.innerHTML = massageIndo;
footerText.innerHTML = footerIndo;

function changeLanguage(Bahasa) {
  if (Bahasa === "indonesia") {
    aboutText.innerHTML = massageIndo;
    footerText.innerHTML = footerIndo;
    projectText.forEach((element, index) => {
      element.innerHTML = projectMassageIndo[index];
    });
  } else {
    aboutText.innerHTML = massageIng;
    footerText.innerHTML = footerEng;
    projectText.forEach((element, index) => {
      element.innerHTML = projectTextEng[index];
    });
  }
  openTranslate();
}

function toggleMobile() {
  var mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
  }
}


function downloadCV(){
  window.location.href = './download.html';
}