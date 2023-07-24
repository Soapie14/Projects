import React from "react";

const theme = {
    pink:{
        default: "#ffc0cb",
        hover: "#dba0aa"
    }
}

function changeLanguage(lang) {
        let element = document.getElementById("div");
        if (lang == "en") {
            element.innerHTML = "Hi How are you! This is written in English.";
        } else if (lang == "fr") {
            element.innerHTML = "Bonjour Comment allez-vous! Cela est écrit en français.";
        } else if (lang == "de") {
            element.innerHTML = "Hallo Wie geht es dir! Das ist auf Deutsch geschrieben.";
        }
    }