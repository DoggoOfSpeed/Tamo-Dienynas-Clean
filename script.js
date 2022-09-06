// ==UserScript==
// @name         Tamo Dienynas Clean
// @namespace    https://tampermonkey.net/
// @version      1
// @description  Tamo dienyno išvalytojas
// @author       DoggoOfSpeed
// @match        https://dienynas.tamo.lt/*
// @grant        none
// ==/UserScript==

//Legenda:
//(K) - aktualu tik kompiuteriams
//(T) - aktualu tik telefonams
//(V) - aktualu visiems įrenginiams

// (V) Paslėpti reklamas
var noAd = true;

// (K) Centruoti prisijungimo lauką (Veiks tik jei panaikinote reklamą)
var centerLogIn = true;

// (V) Panaikinti Digiklase reklamą; Kalba.lt reklamą; Tamo išmaniems reklamą; Mokąmą analitiką;
var noClass = true;
var noKalba = true;
var noPhone = true;
var noAnal = true;

// (V) Panaiktinti naujienas (Jei norite)
var noNew = false;

// (V) Panaikinti Tamo taškų nuorodą
var noPts = true;

// (V) Pakeisti Tamo logo į daug fainesnę :D
var cooler = true;

// Programa

var page = window.location.href;
var mobile = false;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) mobile = true;
if (noAd) $(".banner-area-c, .banner-c1").remove();

if (page == "https://dienynas.tamo.lt/Prisijungimas/Login?logout=true" || page == "https://dienynas.tamo.lt/Prisijungimas/Login?rurl=Bendrauk") page = "https://dienynas.tamo.lt/Prisijungimas/Login";
//Jei pamiršiu height 48px naudojamas atrasti
//Tamo logo, tai jei tai pasikeis, reikės pakeisti
//ir programą.
if (cooler) $("img[style=\"height:48px;\"]").attr("src", "https://raw.githubusercontent.com/DoggoOfSpeed/Tamo-Dienynas-Clean/main/tamo.png");
if (page == "https://dienynas.tamo.lt/Prisijungimas/Login") {
    console.log("here");
    if (cooler) $("img[style=\"height:48px;\"]").css("height", "130px");
    if (noAd) {
        $(".preview-banner").remove();
        if (centerLogIn && !mobile) {
            $(".col_right").css({"width":"100%", "justify-content":"center"});
            $("#main_form").css('width', '350px');
        }
    }
    return 0;
}

if (noClass) $("li[data-name='digiklase.30']").remove();
if (noKalba) $("li[data-name='kalba.lt']").remove();
if (noPhone) $("li[data-name='tamo.ismaniems']").remove();
if (noAnal) $("li[data-name='analitika_demo']").remove();
if (noNew) $("li[data-name='naujienos']").remove();
if (cooler && !mobile) $("img[style=\"height:48px;\"]").css({"height":"90px", "transform":"translateY(-20px)"});
if (noPts) $("ul.user-links > li:first").remove();