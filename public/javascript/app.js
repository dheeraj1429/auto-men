"use strict";

const selectYourBrand = document.querySelector(".selecte_your_brand");
const brandIcons = document.querySelectorAll(".brand-icons");
const selectedYourBandClosePopup = document.querySelector(".close-btn");

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
