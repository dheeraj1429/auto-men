"use strict";

const selectYourBrand = document.querySelector(".selecte_your_brand");
const brandIcons = document.querySelectorAll(".brand-icons");
const selectedYourBandClosePopup = document.querySelector(".close-btn");
const optionsSelectDiv = document.querySelector(".selection_div");
const optionsDivElem = document.querySelector(".options_div");
const optionElem = document.querySelectorAll(".option");
const selectYourPopupDiv = document.querySelector(".select_year_popup");
const carsDivELms = document.querySelectorAll(".cars-div");
const filterCarsDiv = document.querySelector(".filter_selected_cars");
const filterCarsClosebtn = document.querySelector(".filter_cars_close_btn");
const sidebarFullELem = document.querySelector(".sidebar_full_width_nav");
const sidebarNav = document.querySelector(".sidebar_nav");
const navbarIcon = document.querySelector(".navbar-icon");
const closeIconsElm = document.querySelector(".cl");
const selecteYourBrand = document.querySelector(".selecte_your_brand_icons");
const knowMoreBtn = document.querySelector(".know-more-button");

if (brandIcons) {
    brandIcons.forEach((el) => {
        el.style.cursor = "pointer";
        el.addEventListener("click", function () {
            selectYourBrand.classList.add("selecte_your_brand_active_tab");
            document.body.style.overflow = "hidden";
        });
    });
}

if (selectedYourBandClosePopup) {
    selectedYourBandClosePopup.addEventListener("click", function () {
        selectYourBrand.classList.remove("selecte_your_brand_active_tab");
        document.body.style.overflow = "scroll";
    });
}

const showOptionPopup = function () {
    optionsDivElem.classList.toggle("options_div_active");

    optionElem.forEach((el) => {
        el.addEventListener("click", function () {
            const id = el.id;

            if (!id) throw new Error("options must have id");

            const childPara = optionsSelectDiv.childNodes[1];
            childPara.textContent = id;
            filterCarsDiv.classList.add("filter_selected_cars_active");

            optionsDivElem.classList.remove("options_div_active");
        });
    });
};

const removeExistsClass = function () {
    selectYourPopupDiv.classList.remove("select_year_popup_active");
    document.body.style.overflowY = "scroll";
    optionsDivElem.classList.remove("options_div_active");
};

const showAndHideWindow = function (event) {
    const id = event?.target?.id;

    if (id === "selection_aria") {
        removeExistsClass();
    }
};

carsDivELms.forEach((el) => {
    el.style.cursor = "pointer";
    el.addEventListener("click", function () {
        selectYourBrand.classList.remove("selecte_your_brand_active_tab");
        selectYourPopupDiv.classList.add("select_year_popup_active");
    });
});

const closeFilterModelWindow = function () {
    filterCarsDiv.classList.remove("filter_selected_cars_active");
    removeExistsClass();
};

const showSidebarNavbar = function () {
    sidebarFullELem.classList.add("sidebar_full_width_nav_active");
    sidebarNav.classList.add("sidebar_nav_active");
};

sidebarFullELem.addEventListener("click", function (elem) {
    if (elem.target.classList.contains("sidebar_full_width_nav")) {
        sidebarFullELem.classList.remove("sidebar_full_width_nav_active");
        sidebarNav.classList.remove("sidebar_nav_active");
    }
});

if (optionsSelectDiv) {
    optionsSelectDiv.addEventListener("click", showOptionPopup);
}
if (selectYourPopupDiv) {
    selectYourPopupDiv.addEventListener("click", showAndHideWindow);
}
if (filterCarsClosebtn) {
    filterCarsClosebtn.addEventListener("click", closeFilterModelWindow);
}
if (navbarIcon) {
    navbarIcon.addEventListener("click", showSidebarNavbar);
}

if (closeIconsElm) {
    closeIconsElm.addEventListener("click", function () {
        selecteYourBrand.classList.remove("selecte_your_brand_icons_active");
    });
}

if (knowMoreBtn) {
    knowMoreBtn.addEventListener("click", function () {
        selecteYourBrand.classList.add("selecte_your_brand_icons_active");
    });
}
