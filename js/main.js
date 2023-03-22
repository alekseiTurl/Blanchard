document.addEventListener("DOMContentLoaded", function () {
  jQuery("a").on("click", function (e) {
    e.preventDefault();
  });

  /* burger */
  const menu = document.querySelector(".header__burger-navigation");
  const burgerBtn = document.querySelector(".header__burger");

  document.addEventListener("click", (e) => {
    const click = e.composedPath().includes(burgerBtn);
    const clickOn = e.composedPath().includes(menu);
    if (!click && !clickOn) {
      menu.classList.remove("burger-active");
    }
  });
  document
    .querySelector(".header__burger")
    .addEventListener("click", function () {
      menu.classList.add("burger-active");
    });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      menu.classList.remove("burger-active");
    }
  });

  document
    .querySelector(".header__burger-close-btn")
    .addEventListener("click", function () {
      menu.classList.remove("burger-active");
    });

  /* search */
  const searchForm = document.querySelector(".header__top-search");
  const searchBtn = document.querySelector(".header-top-search-btn");
  const searchBtnClose = document.querySelector(".header-top-search-close-btn");
  const logo = document.querySelector(".header__logo");

  document.addEventListener("click", (e) => {
    const click = e.composedPath().includes(searchBtn);
    const clickOn = e.composedPath().includes(searchForm);
    if (!click && !clickOn) {
      searchForm.classList.remove("search-active");
      searchBtn.classList.remove("search-disabled");
      burgerBtn.classList.remove("header-hidden");
      logo.classList.remove("header-hidden");
    }
  });
  searchBtn.addEventListener("click", function () {
    const screenWidth = window.screen.width;
    if (screenWidth <= 960 && screenWidth >= 650) {
      burgerBtn.classList.add("header-hidden");
      logo.classList.add("header-hidden");
    }
    searchForm.classList.add("search-active");
    searchBtn.classList.add("search-disabled");
  });
  searchBtnClose.addEventListener("click", function () {
    searchForm.classList.remove("search-active");
    searchBtn.classList.remove("search-disabled");
    burgerBtn.classList.remove("header-hidden");
    logo.classList.remove("header-hidden");
  });

  /*   Modal Window */
  const galerySlide = document.querySelectorAll(".galery__swiper-slide");
  const swiperGaleryWrap = document.querySelector(".galery__swiper-wrapper");
  const modalWindow = document.querySelectorAll(".modal-window");

  console.log(swiperGaleryWrap);
  galerySlide.forEach(function (openModal) {
    openModal.addEventListener("click", function (e) {
      const path = e.currentTarget.dataset.path;
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("modal-window--active");
    });
  });

  document.addEventListener("click", (e) => {
    const click = e.composedPath().includes(swiperGaleryWrap);
    const clickOn = e.composedPath().includes(modalWindow);
    if (!click && !clickOn) {
      modalWindow.forEach(function (el) {
        el.classList.remove("modal-window--active");
      });
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      modalWindow.forEach(function (el) {
        el.classList.remove("modal-window--active");
      });
    }
  });

  document
    .querySelectorAll(".modal-window__content-close-btn")
    .forEach(function (element) {
      element.addEventListener("click", function () {
        document
          .querySelectorAll(".modal-window")
          .forEach(function (el) {
            el.classList.remove("modal-window--active");
          });
      });
    });
});

/* Dropdow Menu */
const params = {
  btnClassName: "header__menu-dropdown-btn",
  dropClassName: "header__menu-dropdown",
  activeClassName: "is-active",
  disabledClassName: "is-disabled",
};

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(
      params.disabledClassName,
      params.activeClassName
    );
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(
      `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
    );

    if (
      activeElements.length &&
      !evt.target.closest(`.${params.activeClassName}`)
    ) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(
        `.${params.dropClassName}[data-target="${path}"]`
      );

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();

/* Swiper Configuration */
const sliderHero = document.querySelector(".hero__swiper");
const sliderGalery = document.querySelector(".galery__swiper");
const sliderEvents = document.querySelector(".events__swiper");
const sliderProjects = document.querySelector(".projects__swiper");

let swiperHero = new Swiper(sliderHero, {
  setInitialSlide: 0,
  slidesPerView: 1,
  autoplay: {
    delay: 9000,
  },
  speed: 1500,
  loop: true,
});

let swiperGalery = new Swiper(sliderGalery, {
  slidesPerView: 1,

  grid: {
    rows: 1,
    fill: "row",
  },
  spaceBetween: 20,
  navigation: {
    nextEl: ".galery__swiper-button-next",
    prevEl: ".galery__swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
  },
});

let swiperEvents = new Swiper(sliderEvents, {
  spaceBetween: 10,
  slidesPerView: 1,
  slidesPerGroup: 1,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  navigation: {
    nextEl: ".events__swiper-button-next",
    prevEl: ".events__swiper-button-prev",
  },

  a11y: {
    prevSlideMessage: "Преведущий слайд",
    nextSlideMessage: "Следующий слайд",
    firstSlideMessage: "Первый слайд",
    lastSlideMessage: "Последний слайд",
  },

  pagination: {
    el: ".events__swiper-pagination",
    type: "bullets",
    dynamicBullets: false,
    dynamicMainBullets: 2,
  },

  breakpoints: {
    700: {
      spaceBetween: 30,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    980: {
      spaceBetween: 28,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1280: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

let swiperProjects = new Swiper(sliderProjects, {
  spaceBetween: 0,
  slidesPerGroup: 1,
  slidesPerView: 1,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  navigation: {
    nextEl: ".projects__swiper-button-next",
    prevEl: ".projects__swiper-button-prev",
  },

  a11y: {
    prevSlideMessage: "Преведущий слайд",
    nextSlideMessage: "Следующий слайд",
    firstSlideMessage: "Первый слайд",
    lastSlideMessage: "Последний слайд",
  },

  breakpoints: {
    560: {
      spaceBetween: 20,
      slidesPerGroup: 2,
      slidesPerView: 2,
    },
    786: {
      spaceBetween: 50,
      slidesPerGroup: 2,
      slidesPerView: 2,
    },
    1280: {
      spaceBetween: 50,
      slidesPerGroup: 3,
      slidesPerView: 3,
    },
  },
});

/* Anchor Link */
const anchors = document.querySelectorAll(".scroll-to");
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href");

    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

/* Select Styler */

const element = document.querySelector("#galery__select");
const choices = new Choices(element, {
  searchEnabled: false,
  position: "down",
});

/* Accordion */


$("#accordion").accordion({
  heightStyle: "content",
  collapsible: true,
  active: 0,
  icons: false,
  clearStyle: true,
});

$("#accordion2").accordion({
  heightStyle: "content",
  collapsible: true,
  active: 0,
  icons: false,
  clearStyle: true,
});


/* Catalog Tabs */
document
  .querySelectorAll(".catalog__tab-item-icon")
  .forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (e) {
      const path = e.currentTarget.dataset.path;
      $( "#accordion" ).accordion( "refresh" );
      $( "#accordion2" ).accordion( "refresh" );
      document
        .querySelectorAll(".catalog__tab-item-icon")
        .forEach(function (btn) {
          btn.classList.remove("catalog__tab-item-icon--active");
        });
      e.currentTarget.classList.add("catalog__tab-item-icon--active");
      document
        .querySelectorAll(".catalog__main-tab")
        .forEach(function (tabsBtn) {
          tabsBtn.classList.remove("catalog__main-tab--active");
        });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("catalog__main-tab--active");
    });
  });

document
  .querySelectorAll(".catalog__accordion-list-link")
  .forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (e) {
      const path = e.currentTarget.dataset.path;
      $( "#accordion" ).accordion( "refresh" );
      $( "#accordion2" ).accordion( "refresh" );
      document
        .querySelectorAll(".catalog__accordion-list-link")
        .forEach(function (btn) {
          btn.classList.remove("catalog__accordion-list-link--active");
        });
      e.currentTarget.classList.add("catalog__accordion-list-link--active");
      document
        .querySelectorAll(".catalog__tab-artist")
        .forEach(function (tabsBtn) {
          tabsBtn.classList.remove("catalog__tab-artist--active");
        });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("catalog__tab-artist--active");
    });
  });

  jQuery(function($) {
    $(".catalog__tab-item-icon").click(function() {
      $(".catalog__main-tab").fadeOut(300);
      $(".catalog__main-tab--active").fadeIn(400);
      $(".catalog__tab-artist--active_special").fadeIn(400);
    });

    $(".catalog__accordion-list-link").click(function() {
      $(".catalog__tab-artist").fadeOut(400);
      $(".catalog__tab-artist--active").fadeIn(400);
    });

  });



/* Tippy Configuration */
tippy(".js-tooltip", {
  theme: "myt",
  duration: 800,
});

/* Yandex Maps */
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.75846806898367, 37.60108849999989],
    zoom: 14,
    controls: [],
  });
  var geolocationControl = new ymaps.control.GeolocationControl({
    options: {
      float: "none",
      position: {
        bottom: "310px",
        right: "15px",
      },
    },
  });
  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: "small",
      float: "none",
      position: {
        bottom: "370px",
        right: "15px",
      },
    },
  });
  myMap.controls.add(zoomControl);
  myMap.controls.add(geolocationControl);

  (myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {
      hintContent: "Шоурум №4",
      balloonContent: "Шоурум №4",
    },
    {
      iconLayout: "default#image",
      iconImageHref: "img/contacts/placemark.svg",
      iconImageSize: [28, 40],
    }
  )),
    myMap.behaviors.disable("scrollZoom");
  myMap.geoObjects.add(myPlacemark);
}
/* Form Styler and Validation */
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

const validation = new JustValidate("#contacts-form", {
  errorLabelStyle: {
    color: "#D11616",
  },
});
validation

  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Как вас зовут?",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Введите минимум 2 символа",
    },
    {
      rule: "maxLength",
      value: 15,
      errorMessage: "Введите не более 15 символов",
    },
  ])

  .addField("#tell", [
    {
      rule: "required",
      errorMessage: "Укажите ваш телефон",
    },
    {
      validator: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
      errorMessage: "Неверный формат",
    },
  ]);
