var timeout;

function load() {
  timeout = setTimeout(showPage, 3000);
}

function showPage() {
document.querySelector(".spinner").style.display = "none";
document.querySelector(".content").style.display = "block";
}

window.addEventListener('load', load);
