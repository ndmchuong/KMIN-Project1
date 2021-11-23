function menuDropdown() {
    document.querySelector(".menu-hover").classList.toggle("hienthi");
}
function sanphamDropdown() {
    document.querySelector(".san-pham-hover").classList.toggle("hienthi");
}
function dactrungCx5() {
    document.querySelector(".dropdown-cacdactrung").classList.toggle("hienthi");
}
let index = 0;
let slides = document.getElementsByClassName("slides");
slides[index].style.display = "block";
function hienSlidesau() {
    slides[index].style.display = "none";
    index += 1;
    if (index == 4) {
        index = 0;
    }
    slides[index].style.display = "block";
}
function hienSlidetruoc() {
    slides[index].style.display = "none";
    index -= 1;
    if (index < 0) {
        index = 3;
    }
    slides[index].style.display = "block";
}
function hamNoithat() {
    
    let mausac = document.getElementsByClassName("mau-sac");
    mausac[0].style.display = "none";
    let maunoithat = document.getElementsByClassName("mau-noi-that");
    maunoithat[0].style.display = "block";
    let chonmau = document.getElementsByClassName("chon-mau");
    chonmau[0].style.display = "none";
    chonmau[1].style.display = "block";
    
}
function hamNgoaithat() {
    let mausac = document.getElementsByClassName("mau-sac");
    mausac[0].style.display = "block";
    let maunoithat = document.getElementsByClassName("mau-noi-that");
    maunoithat[0].style.display = "none";
    let chonmau = document.getElementsByClassName("chon-mau");
    chonmau[0].style.display = "block";
    chonmau[1].style.display = "none";
}
function redMetallic() {
    let chonmau = document.getElementsByClassName("chon-mau");
    chonmau[0].style.backgroundImage = "url(img/mazda3_bcksnar_46v_by7_ext_360_36_png_0036.jpg)";
}
function whiteMica() {
    let chonmau = document.getElementsByClassName("chon-mau");
    chonmau[0].style.backgroundImage = "url(img/mazda3_white_25d_by7_ext_360_36_png_0036.jpg)";
}
function machineGrey() {
    let chonmau = document.getElementsByClassName("chon-mau");
    chonmau[0].style.backgroundImage = "url(img/mazda3_machinegrey_46g_by9_ext_360_36_png_0036.jpg)";
}
function greyMetallic() {
    let chonmau = document.getElementsByClassName("chon-mau");
    chonmau[0].style.backgroundImage = "url(img/mazda3_greymetallic_47c_by7_ext_360_36_png_0036.jpg)";
}
function crystalBlue() {
    let chonmau = document.getElementsByClassName("chon-mau");
    chonmau[0].style.backgroundImage = "url(img/mazda3_blue_42m_by7_ext_360_36_png_0036.jpg)";
}
function jetBlack() {
    let chonmau = document.getElementsByClassName("chon-mau");
    chonmau[0].style.backgroundImage = "url(img/mazda3_black_41w_by7_ext_360_36_png_0036.jpg)";
}
function blackLeader() {
    let maunoithat = document.getElementsByClassName("chon-mau");
    maunoithat[1].style.backgroundImage = "url(img/all-new-mazda3-black.jpg)";
}
function blackredLeader() {
    let maunoithat = document.getElementsByClassName("chon-mau");
    maunoithat[1].style.backgroundImage = "url(img/all-new-mazda3-red-black.jpg)";
}
