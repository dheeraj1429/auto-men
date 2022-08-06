"use strict";

const selectYourBrand = document.querySelector(".selecte_your_brand");
const brandIcons = document.querySelectorAll(".brand-icons");
const selectedYourBandClosePopup = document.querySelector(".close-btn");
const optionsSelectDiv = document.querySelector(".selection_div");
const optionsDivElem = document.querySelector(".options_div");
const optionElem = document.querySelectorAll(".option");
const selectYourPopupDiv = document.querySelector(".select_year_popup");
const carsDivELms = document.querySelectorAll(".cars-div");

brandIcons.forEach((el) => {
    el.style.cursor = "pointer";
    el.addEventListener("click", function () {
        selectYourBrand.classList.add("selecte_your_brand_active_tab");
        document.body.style.overflow = "hidden";
    });
});

selectedYourBandClosePopup.addEventListener("click", function () {
    selectYourBrand.classList.remove("selecte_your_brand_active_tab");
    document.body.style.overflow = "scroll";
});

const showOptionPopup = function () {
    optionsDivElem.classList.toggle("options_div_active");

    optionElem.forEach((el) => {
        el.addEventListener("click", function () {
            const id = el.id;

            if (!id) throw new Error("options must have id");

            const childPara = optionsSelectDiv.childNodes[1];
            childPara.textContent = id;

            optionsDivElem.classList.remove("options_div_active");
        });
    });
};

const showAndHideWindow = function (event) {
    const id = event?.target?.id;

    if (id === "selection_aria") {
        selectYourPopupDiv.classList.remove("select_year_popup_active");
        document.body.style.overflowY = "scroll";
        optionsDivElem.classList.remove("options_div_active");
    }
};

carsDivELms.forEach((el) => {
    el.style.cursor = "pointer";
    el.addEventListener("click", function () {
        selectYourBrand.classList.remove("selecte_your_brand_active_tab");
        selectYourPopupDiv.classList.add("select_year_popup_active");
    });
});

optionsSelectDiv.addEventListener("click", showOptionPopup);
selectYourPopupDiv.addEventListener("click", showAndHideWindow);
