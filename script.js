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

// (K) Paslėpti prisijungimo reklamą
var hideLogInAd = true;
// (K) Centruoti prisijungimo lauką (Veiks tik jei panaikinote reklamą)
var centerLogIn = true;
// (V) Panaikinti Digiklase reklamą; Kalba.lt reklamą; Tamo išmaniems reklamą;
var noClass = true;
var noKalba = true;
var noPhone = true;


if (window.location.href == "https://dienynas.tamo.lt/Prisijungimas/Login") {
    if (hideLogInAd) {
        $(".preview-banner").remove()
        if (centerLogIn && isMobile) {
            $(".col_right").css({"width":"100%", "justify-content":"center"});
            $("#main_form").css('width', '350px');
        }
    }
    return 0;
}

if (noClass) $("li[data-name='digiklase.30']").remove();
if (noKalba) $("li[data-name='kalba.lt']").remove();
if (noPhone) $("li[data-name='tamo.ismaniems']").remove();