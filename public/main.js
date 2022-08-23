/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/animation/Shapes.js":
/*!*********************************!*\
  !*** ./app/animation/Shapes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Shapes)
/* harmony export */ });
class Shapes {
  constructor({
    position,
    height,
    width,
    blur,
    background
  }) {
    this.top = position.top === -1 ? undefined : position.top;
    this.left = position.left === -1 ? undefined : position.left;
    this.right = position.right === -1 ? undefined : position.right;
    this.bottom = position.bottom === -1 ? undefined : position.bottom;
    this.height = height;
    this.width = width;
    this.blur = blur;
    this.background = background;
    this.windowWidth = window.innerWidth;
    this.init();
  }

  init() {
    this.createShape();
    this.onWindowResize();
    this.events();
  }

  createShape() {
    this.shapeFrame = document.createElement('DIV');
    this.shapeFrame.className = 'shapes';
    this.id = 'shapes';
    this.testBreakpoint(); // style

    this.shapeFrame.style.borderRadius = this.height[2] + 'px';
    this.shapeFrame.style.backgroundColor = this.background; // this.shapeFrame.style.transition = 'all 8s'

    this.shapeFrame.style.position = 'absolute'; // set shape position

    this.shapeFrame.style.top = this.top + 'px';
    this.shapeFrame.style.left = this.left + 'px';
    this.shapeFrame.style.right = this.right + 'px';
    this.shapeFrame.style.bottom = this.bottom + 'px';
  }

  animshapes(animationArr) {
    let index = 0;
    let animFlow = null;
    setInterval(() => {
      if (index >= animationArr.length) index = 0;
      animFlow = animationArr[index];
      this.shapeFrame.style.top = animFlow.to.top + 'px';
      this.shapeFrame.style.left = animFlow.to.left + 'px';
      this.shapeFrame.style.bottom = animFlow.to.bottom + 'px';
      this.shapeFrame.style.right = animFlow.to.right + 'px';
      this.shapeFrame.style.filter = `blur(${this.blur}px)`;
      index++;
    }, 4000);
  }

  mountShape(parent) {
    parent.append(this.shapeFrame);
  }

  onWindowResize() {
    this.windowWidth = window.innerWidth;
    this.testBreakpoint();
  }

  testBreakpoint() {
    if (this.windowWidth >= 640 && this.windowWidth < 1024) {
      this.shapeFrame.style.height = this.height[1] + 'px';
      this.shapeFrame.style.width = this.width[1] + 'px';
      this.shapeFrame.style.filter = `blur(${this.blur[0]}px)`;
    } else if (this.windowWidth >= 1024) {
      this.shapeFrame.style.height = this.height[2] + 'px';
      this.shapeFrame.style.width = this.width[2] + 'px';
      this.shapeFrame.style.filter = `blur(${this.blur[1]}px)`;
    } else {
      this.shapeFrame.style.height = this.height[0] + 'px';
      this.shapeFrame.style.width = this.width[0] + 'px';
      this.shapeFrame.style.filter = `blur(${this.blur[0]}px)`;
    }
  }

  events() {
    addEventListener('resize', this.onWindowResize.bind(this));
  }

}

/***/ }),

/***/ "./app/animation/canvas.js":
/*!*********************************!*\
  !*** ./app/animation/canvas.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Canvas)
/* harmony export */ });
/* harmony import */ var _classes_Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Components */ "./app/classes/Components.js");
/* harmony import */ var _utils_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/selectors */ "./app/utils/selectors.js");
/* harmony import */ var _Shapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shapes */ "./app/animation/Shapes.js");



class Canvas extends _classes_Components__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this.isMounted = false;
    this.shapeGradient = '#066D5B';
    this.init();
  }

  init() {
    this.mountFrame();
    if (!this.isMounted) return;
    const shape1 = new _Shapes__WEBPACK_IMPORTED_MODULE_2__["default"]({
      position: {
        top: -1,
        right: -1,
        left: -100,
        bottom: -100
      },
      height: [400, 500, 600],
      width: [400, 500, 600],
      blur: [50, 100],
      background: this.shapeGradient
    });
    const shape2 = new _Shapes__WEBPACK_IMPORTED_MODULE_2__["default"]({
      position: {
        top: -200,
        right: -100,
        left: -1,
        bottom: -1
      },
      height: [400, 500, 600],
      width: [400, 500, 600],
      blur: [50, 100],
      background: this.shapeGradient
    });
    shape1.mountShape((0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('#frame'));
    shape2.mountShape((0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('#frame'));
  }

  createFrame() {
    this.frame = document.createElement('DIV');
    this.frame.className = 'frame';
    this.frame.style.position = 'fixed';
    this.frame.style.top = 0;
    this.frame.style.left = 0;
    this.frame.style.width = `${window.innerWidth}px`;
    this.frame.style.height = `${window.innerHeight}px`;
    this.frame.style.zIndex = '-1';
    this.frame.id = 'frame';
  }

  mountFrame() {
    this.createFrame();
    document.body.append(this.frame);
    this.eventListener();
    this.isMounted = true;
  }

  onResize(e) {
    e.preventDefault();
    this.mountedFrame = (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('#frame');
    this.mountedFrame.style.width = `${window.innerWidth}px`;
    this.mountedFrame.style.height = `${window.innerHeight}px`;
  }

  eventListener() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

}

/***/ }),

/***/ "./app/classes/Components.js":
/*!***********************************!*\
  !*** ./app/classes/Components.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Components)
/* harmony export */ });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/selectors */ "./app/utils/selectors.js");


class Components extends (events__WEBPACK_IMPORTED_MODULE_0___default()) {
  constructor(componentName) {
    super();
    this.selectors = {
      preloader: {
        element: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.preloader'),
        text: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.preloader__text__item'),
        container: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.preloader__text'),
        loader: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.preloader__loader__bar'),
        wrapper: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.preloader__text__wrapper')
      },
      navigation: {
        header: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.header'),
        navList: [...(0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$All)('.menu__links__item')],
        previewImg: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.menu__links__media__image'),
        content: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.menu__content'),
        openMenu: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.button-open'),
        closeMenu: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.button-close')
      },
      player: {
        button: {
          expand: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.player__button.expand'),
          close: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.player__button.close'),
          play: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('[data-icon="rob-play"]'),
          next: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('[data-icon="rob-forward"]'),
          prev: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('[data-icon="rob-backward"]')
        },
        coverContainer: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.player__cover'),
        cover: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.player__cover img'),
        self: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.player'),
        media: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.player__media'),
        artist: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.player__detail__name'),
        title: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.player__detail__title'),
        timer: {
          startTime: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.player__timer__times__starttime'),
          endTime: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.player__timer__times__endtime'),
          range: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.player__timer__progress__range'),
          progress: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.player__timer__progress__bar'),
          preload: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.player__timer__progress__elapse')
        },
        volume: {
          grapper: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.player__volume__grap'),
          slider: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.player__volume__slider'),
          container: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.player__volume__wrapper')
        }
      },
      form: {
        connect: {
          form: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.connect__form'),
          button: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.connect__form .button'),
          name: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.input__name'),
          mail: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.input__email'),
          message: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('#message'),
          nameAlert: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.input__alert-name'),
          emailAlert: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.input__alert-email'),
          messageAlert: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.input__alert-message'),
          alert: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$All)('.input__alert')
        },
        modal: {
          form: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.modal__form'),
          button: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.modal__form .button')
        },
        alert: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.alert')
      },
      slider: {
        button: {
          prev: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('#rb-slider-button-prev'),
          next: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('#rb-slider-button-next')
        },
        wrapper: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.rb-slider-wrapper'),
        items: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.rb-slider-items'),
        container: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.rb-slider')
      },
      services: {
        buttons: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$All)('.services__cta')
      },
      modal: {
        self: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.modal'),
        button: (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$)('.modal__button button')
      },
      images: [...(0,_utils_selectors__WEBPACK_IMPORTED_MODULE_1__.$All)('img')]
    };
    this.elements = this.selectors[componentName];
  }

}

/***/ }),

/***/ "./app/classes/Pages.js":
/*!******************************!*\
  !*** ./app/classes/Pages.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pages)
/* harmony export */ });
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components */ "./app/classes/Components.js");
/* harmony import */ var _utils_Smoothscroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Smoothscroll */ "./app/utils/Smoothscroll.js");
/* harmony import */ var _utils_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/selectors */ "./app/utils/selectors.js");



class Pages extends _Components__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elements) {
    super(elements);
    this.wrapper = (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_2__.$)('.wrapper'); // this.smootscroll = new Smoothscroll(this.wrapper, { direction: 'v', smooth: 0.1 })
  }

  create() {}

  show() {}

  hide() {
    return new Promise(resolve => {
      console.log('page was hide' + resolve);
    });
  }

}

/***/ }),

/***/ "./app/components/Alert.js":
/*!*********************************!*\
  !*** ./app/components/Alert.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Alert)
/* harmony export */ });
/* harmony import */ var _utils_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/selectors */ "./app/utils/selectors.js");

class Alert {
  constructor(message, type) {
    this.message = message;
    this.type = type;
    this.init();
  }

  init() {
    this.create();
    this.self = (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_0__.$)('.alert');
  }

  create() {
    this.div = document.createElement('DIV');
    this.div.className = 'alert';
    if (this.type === 'success') this.div.classList.add('alert__success');else this.div.classList.add('alert__error'); // Create alert__wrapper

    const wrapper = createElement('DIV', 'alert__wrapper'); // content

    const content = createElement('DIV', 'alert__content'); // icons

    const icon = createElement('SPAN', 'alert__icon'); // Message

    const message = createElement('P', 'alert__message');
    message.innerText = this.message; // Close icon

    const closeIcon = createElement('SPAN', 'alert__closeIcon');
    const i = createElement('I', 'rob-close');
    closeIcon.append(i);

    closeIcon.onclick = () => {
      this.hide();
      this.destroy();
    }; // appned child


    content.append(icon, message);
    wrapper.append(content, closeIcon);
    this.div.append(wrapper);
    document.body.prepend(this.div);
    this.self = this.div;
    this.hide();

    function createElement(tag, className) {
      const element = document.createElement(tag);
      element.className = className;
      return element;
    }
  }

  show() {
    setTimeout(() => {
      this.self.style.right = '.5rem';
    }, 1000);
  }

  hide() {
    this.self.style.right = '-100%';
    this.self.transition = 'right .6s';
  }

  destroy() {
    document.body.removeChild(this.div);
  }

}

/***/ }),

/***/ "./app/components/Navigation.js":
/*!**************************************!*\
  !*** ./app/components/Navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var _classes_Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Components */ "./app/classes/Components.js");

class Navigation extends _classes_Components__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('navigation');
    this.init();
    this.eventsListener();
  }

  init() {
    const defaultSource = 'images/previews/img-1';
    this.selectors.navigation.previewImg.src = `${defaultSource}.png`;
  }

  onMouseHoverLinks(e) {
    const src = e.currentTarget.getAttribute('data-snap-image');
    this.selectors.navigation.previewImg.src = `${src}.png`;
  }

  openMenu(e) {
    e.preventDefault();
    this.selectors.navigation.content.classList.add('menu__content-visible');
  }

  closeMenu(e) {
    e.preventDefault();
    this.selectors.navigation.content.classList.remove('menu__content-visible');
  }

  eventsListener() {
    this.selectors.navigation.navList.forEach(link => {
      link.addEventListener('mouseover', this.onMouseHoverLinks.bind(this));
    });
    this.selectors.navigation.openMenu.addEventListener('click', this.openMenu.bind(this));
    this.selectors.navigation.closeMenu.addEventListener('click', this.closeMenu.bind(this));
  }

}

/***/ }),

/***/ "./app/components/Preloader.js":
/*!*************************************!*\
  !*** ./app/components/Preloader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Preloader)
/* harmony export */ });
/* harmony import */ var _classes_Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Components */ "./app/classes/Components.js");
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! imagesloaded */ "./node_modules/imagesloaded/imagesloaded.js");
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(imagesloaded__WEBPACK_IMPORTED_MODULE_1__);

 //import autoBind from 'auto-bind'

class Preloader extends _classes_Components__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('preloader');
    this.length = 0;
    this.startIndex = 1;
    this.size = {
      height: Number(this.elements.text.getBoundingClientRect().height),
      width: Number(this.elements.wrapper.clientWidth),
      gap: 2
    };
    this.createPreloader();
    this.addEventListener();
  }

  createPreloader() {
    if (this.selectors.images) {
      const imgLoad = imagesloaded__WEBPACK_IMPORTED_MODULE_1___default()(document.body);
      imgLoad.on('progress', _ => {
        this.onProgress(imgLoad.images.length);
      });
      imgLoad.on('always', _ => {
        this.onLoad();
      });
    }
  }

  animPreloaderText(e) {
    e.preventDefault();
    const length = this.elements.wrapper.children.length; //Give the wrapper the height of the text

    this.elements.container.style.height = `${this.size.height}px`;
    this.elements.container.style.width = `${this.size.width}px`;
    window.setInterval(() => {
      if (this.startIndex < length) {
        this.elements.wrapper.style.top = `${(-this.size.height - this.size.gap) * this.startIndex}px`;
        this.startIndex++;
      }
    }, 1000);
  }

  onProgress(length) {
    this.length += 1;
    const percent = this.length / length;
    this.elements.loader.style.width = `${Math.round(percent * 100)}%`;
  }

  onLoad() {
    this.emit('completed');
  }

  onResize(e) {
    this.size = {
      height: Number(this.elements.text.getBoundingClientRect().height),
      width: Number(this.elements.wrapper.clientWidth),
      gap: 2
    };
    this.animPreloaderText(e);
  }

  addEventListener() {
    window.addEventListener('load', this.animPreloaderText.bind(this));
    window.addEventListener('resize', this.onResize.bind(this));
  }

  destroy() {
    this.elements.element.parentNode.removeChild(this.elements.element);
  }

}

/***/ }),

/***/ "./app/components/Services.js":
/*!************************************!*\
  !*** ./app/components/Services.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Services)
/* harmony export */ });
/* harmony import */ var _classes_Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Components */ "./app/classes/Components.js");

class Services extends _classes_Components__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('services');
    this.init();
  }

  init() {
    this.buttons = [...this.elements.buttons];
    this.eventListener();
  }

  onClick(e) {
    e.preventDefault();
    const button = e.currentTarget;
    this.type = button.getAttribute('data-service');
    this.selectors.modal.self.classList.add('modal-visible');
  }

  closeModal(e) {
    e.preventDefault();

    if (this.selectors.modal.self.classList.contains('modal-visible')) {
      this.selectors.modal.self.classList.remove('modal-visible');
    }
  }

  eventListener() {
    this.buttons.forEach(button => {
      button.addEventListener('click', this.onClick.bind(this));
    });
    this.selectors.modal.button.addEventListener('click', this.closeModal.bind(this));
  }

}

/***/ }),

/***/ "./app/components/slider/Slider.js":
/*!*****************************************!*\
  !*** ./app/components/slider/Slider.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var _classes_Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/Components */ "./app/classes/Components.js");

class Slider extends _classes_Components__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('slider');
    this.init();
  }

  init() {
    this.child = [...this.elements.items.children];
    this.index = 1;
    this.padding = 24;
    this.currentPosition = 0;
    this.treshold = 0;
    this.dragIntervall = 40;
    this.setChildWidth();
    this.setPosition();
    this.eventListener();
  }

  setChildWidth() {
    this.child.forEach(item => {
      item.style.flex = 'none';
      item.style.width = `${window.innerWidth * 0.80}px`;
    });
  }

  setPosition() {
    this.width = this.elements.items.getBoundingClientRect().width;
    this.currentPosition = -((this.width - window.innerWidth - 24) / 2) * this.index;
    this.elements.items.style.transform = `translate3D(${this.currentPosition}px, 0, 0)`;
    return this.currentPosition;
  }

  next() {
    if (this.index >= this.child.length - 1) return;
    this.index++;

    if (this.index === 2) {
      this.width = this.elements.items.getBoundingClientRect().width;
      this.currentPosition = -((this.width - window.innerWidth) / 2) * this.index;
      this.elements.items.style.transform = `translate3D(${this.currentPosition - this.padding}px, 0, 0)`;
    } else {
      this.setPosition();
    }
  }

  prev() {
    if (this.index <= 0) {
      this.index = 0;
      return;
    }

    this.index--;

    if (this.index === 0) {
      this.width = this.elements.items.getBoundingClientRect().width;
      this.currentPosition = -((this.width - window.innerWidth - 24) / 2) * this.index;
      this.elements.items.style.transform = `translate3D(${this.padding}px, 0, 0)`;
    } else {
      this.setPosition();
    }
  }

  onMouseDown(e) {
    e.preventDefault();
    this.isDown = true;
    this.dragStart = e.x;
    this.dragStarty = e.y;
  }

  onMouseMove(e) {
    e.preventDefault();
    if (!this.isDown) return;
    this.treshold = e.x - this.dragStart;
    this.elements.items.style.transform = `translate3D(${this.currentPosition + this.treshold}px, 0, 0)`;
  }

  onMouseUp(e) {
    e.preventDefault();

    if (this.treshold > 0 && this.treshold >= this.dragIntervall) {
      this.prev();
      console.log('prev');
    } else if (this.treshold < 0 && this.treshold <= -this.dragIntervall) {
      this.next();
      console.log('next');
    } else {
      this.elements.items.style.transform = `translate3D(${this.currentPosition}px, 0, 0)`;
    }

    this.isDown = false;
  }

  onWindowResize(e) {
    e.preventDefault();
    this.setChildWidth();
    this.setPosition();
  }

  eventListener() {
    this.elements.button.next.addEventListener('click', this.next.bind(this));
    this.elements.button.prev.addEventListener('click', this.prev.bind(this));
    this.elements.wrapper.addEventListener('pointerdown', this.onMouseDown.bind(this));
    this.elements.wrapper.addEventListener('pointermove', this.onMouseMove.bind(this));
    this.elements.wrapper.addEventListener('pointerup', this.onMouseUp.bind(this));
    addEventListener('resize', this.onWindowResize.bind(this));
  }

}

/***/ }),

/***/ "./app/components/widgets/music-player/MediaManager.js":
/*!*************************************************************!*\
  !*** ./app/components/widgets/music-player/MediaManager.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MediaManager)
/* harmony export */ });
const data = __webpack_require__(/*! ../../../../datas/sounds.json */ "./datas/sounds.json");

class MediaManager {
  constructor() {
    this.data = data;
  }

}

/***/ }),

/***/ "./app/components/widgets/music-player/Timer.js":
/*!******************************************************!*\
  !*** ./app/components/widgets/music-player/Timer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Timer)
/* harmony export */ });
class Timer {
  constructor(starttime, endtime, range, progress, preloader, media) {
    this.elements = {
      starttime,
      endtime,
      range,
      preloader,
      progress
    };
    this.media = media;
    this.#init();
  }

  #init() {
    this.#addEventListener();
  }

  #isPlay() {
    console.log(this.media.currentTime);
    console.log('is start play');
  }

  #onPause() {
    console.log('Pause');
  }

  isEnded(cb) {
    cb();
  }

  #setTime() {
    this.hours = Math.floor(this.media.currentTime / 3600);
    this.minutes = Math.floor(this.media.currentTime / 60);
    this.seconds = Math.floor(this.media.currentTime - this.minutes * 60);
    this.hoursValue = this.minutesValue = this.secondsValue = 0;

    if (this.hours <= 0) {
      this.hoursValue = `0${this.hours}`;
    } else {
      this.hoursValue = this.hours;
    }

    if (this.minutes < 10) {
      this.minutesValue = `0${this.minutes}`;
    } else {
      this.minutesValue = this.minutes;
    }

    if (this.seconds < 10) {
      this.secondsValue = `0${this.seconds}`;
    } else {
      this.secondsValue = this.seconds;
    }

    this.elements.starttime.textContent = `${this.minutesValue} : ${this.secondsValue}`;
    this.#updateProgress();
  }

  #updateProgress() {
    this.elements.range.value = this.media.currentTime;
    this.ratio = this.elements.range.value / this.elements.range.max;
    this.elements.progress.style.width = `${this.ratio * 100}%`;
  }

  #setFullTime() {
    const hours = Math.floor(this.media.duration / 3600);
    const minutes = Math.floor(this.media.duration / 60);
    const seconds = Math.floor(this.media.duration - minutes * 60);

    if (hours <= 0) {
      this.elements.endtime.textContent = `${minutes} : ${seconds}`;
    } else {
      this.elements.endtime.textContent = `${hours}:${minutes}:${seconds}`;
    }
  }

  #onTimeChange() {
    this.media.currentTime = this.elements.range.value;
    this.#setTime();
  }

  #progress() {
    const duration = this.media.duration;
    console.log(duration);

    if (duration > 0) {
      for (let i = 0; i < this.media.buffered.length; i++) {
        if (this.media.buffered.start(this.media.buffered.length - 1 - i) < this.media.currentTime) {
          console.log(this.media.buffered.end(this.media.buffered.length - 1 - i / duration) * 100);
          this.elements.preloader.style.width = this.media.buffered.end(this.media.buffered.length - 1 - i) / duration * 100 + '%';
          break;
        }
      }
    }
  }

  #metaDataLoaded() {
    this.#setFullTime();
    this.elements.range.max = Math.floor(this.media.duration);
    this.elements.range.addEventListener('input', this.#onTimeChange.bind(this));
    this.media.addEventListener('play', this.#isPlay.bind(this));
    this.media.addEventListener('pause', this.#onPause.bind(this));
    this.media.addEventListener('ended', this.isEnded.bind(this));
    this.media.addEventListener('timeupdate', this.#setTime.bind(this));
  }

  #addEventListener() {
    this.media.addEventListener('progress', this.#progress.bind(this));
    this.media.addEventListener('loadedmetadata', this.#metaDataLoaded.bind(this));
  }

}

/***/ }),

/***/ "./app/components/widgets/music-player/player.js":
/*!*******************************************************!*\
  !*** ./app/components/widgets/music-player/player.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _classes_Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../classes/Components */ "./app/classes/Components.js");
/* harmony import */ var _MediaManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaManager */ "./app/components/widgets/music-player/MediaManager.js");
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Timer */ "./app/components/widgets/music-player/Timer.js");
/* harmony import */ var _volume__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./volume */ "./app/components/widgets/music-player/volume.js");




class Player extends _classes_Components__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('player');
    this.init();
  }

  init() {
    this.isExpand = false;
    this.src = this.elements.media.getAttribute('src');
    this.media = this.elements.media;
    this.length = 0;
    this.randomId = 0;
    this.sound = null;
    this.icon = this.elements.button.play.querySelector('i');
    this.mediaManager = new _MediaManager__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.length = this.mediaManager.data.length;
    this.randomId = Math.floor(Math.random() * this.length);
    this.componentsHandler(this.randomId);
    this.eventsListerner();
  }

  expand() {
    if (this.selectors.player.coverContainer.classList.contains('isExpand')) {
      this.selectors.player.coverContainer.classList.remove('isExpand');
      this.selectors.player.coverContainer.style.height = '0px';
    } else {
      this.selectors.player.coverContainer.classList.add('isExpand');
      this.selectors.player.coverContainer.style.height = '180px';
    }
  }

  close() {
    this.elements.self.classList.add('isHidden');
  }

  componentsHandler(id) {
    this.sound = this.mediaManager.data[id];
    this.media.src = this.sound.link;
    this.setComponents(this.sound);
    this.timerHandler(this.media);
  }

  setComponents(sound) {
    this.coverHandler(sound);
    this.volumeHandler(this.media);
    this.setSoundDetails(sound);
  }

  coverHandler(sound) {
    this.elements.cover.src = sound.album.cover;
  }

  setSoundDetails(sound) {
    this.elements.artist.innerText = sound.artist.name;
    this.elements.title.innerText = sound.title;
  }

  play() {
    if (this.elements.button.play.dataset.icon === 'rob-play') {
      this.elements.button.play.setAttribute('data-icon', 'rob-pause');
      this.icon.setAttribute('class', 'rob-pause');
      this.media.play();
    } else {
      this.elements.button.play.setAttribute('data-icon', 'rob-play');
      this.icon.setAttribute('class', 'rob-play');
      this.media.pause();
    }
  }

  pause() {
    if (this.elements.button.play.dataset.icon === 'rob-play') {
      this.elements.button.play.setAttribute('data-icon', 'rob-pause');
      this.icon.setAttribute('class', 'rob-pause');
      this.media.pause();
    } else {
      this.elements.button.play.setAttribute('data-icon', 'rob-play');
      this.icon.setAttribute('class', 'rob-play');
    }
  }

  stop() {
    this.media.pause();
    this.media.currentTime = 0;
    this.elements.button.play.setAttribute('data-icon', 'rob-play');
    this.icon.setAttribute('class', 'rob-play');
  }

  next() {
    this.randomId++;
    if (this.randomId > this.length - 1) this.randomId = 0;
    this.stop();
    this.componentsHandler(this.randomId);
    this.play();
  }

  prev() {
    this.randomId--;
    if (this.randomId < 0) this.randomId = this.length - 1;
    this.stop();
    this.componentsHandler(this.randomId);
    this.play();
  }

  timerHandler(media) {
    this.time = new _Timer__WEBPACK_IMPORTED_MODULE_2__["default"](this.elements.timer.startTime, this.elements.timer.endTime, this.elements.timer.range, this.elements.timer.progress, this.elements.timer.preload, media);
  }

  volumeHandler(sound) {
    this.volume = new _volume__WEBPACK_IMPORTED_MODULE_3__["default"](this.elements.volume.container, this.elements.volume.grapper, this.elements.volume.slider, sound);
  }

  eventsListerner() {
    this.elements.button.expand.addEventListener('click', this.expand.bind(this));
    this.elements.button.close.addEventListener('click', this.close.bind(this)); // Control

    this.elements.button.play.addEventListener('click', this.play.bind(this));
    this.elements.button.next.addEventListener('click', this.next.bind(this));
    this.elements.button.prev.addEventListener('click', this.prev.bind(this));
  }

}

/***/ }),

/***/ "./app/components/widgets/music-player/volume.js":
/*!*******************************************************!*\
  !*** ./app/components/widgets/music-player/volume.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Volume)
/* harmony export */ });
class Volume {
  constructor(container, grapper, slider, media) {
    this.container = container;
    this.grapper = grapper;
    this.containerBottom = this.container.getBoundingClientRect().bottom;
    this.containerHeight = this.container.getBoundingClientRect().height;
    this.containerTop = this.container.getBoundingClientRect().top;
    this.slider = slider;
    this.media = media;
    this.isDown = false;
    this.position = {
      start: 0,
      end: 0
    };
    this.addEventListener();
  }

  onPointerDown(e) {
    e.preventDefault();
    this.isDown = true;
    this.container.addEventListener('pointermove', this.onPointerMove.bind(this));
    this.container.addEventListener('pointerup', this.onPointerUp.bind(this));
  }

  onPointerMove(e) {
    e.preventDefault();
    if (!this.isDown) return;
    this.ratio = this.containerHeight - (e.pageY - this.containerTop);
    this.slider.style.height = `${this.ratio / this.containerHeight * 100}%`;
    this.media.volume = this.ratio / this.containerHeight;
  }

  onPointerUp() {
    this.isDown = false;
  }

  addEventListener() {
    this.container.addEventListener('pointerdown', this.onPointerDown.bind(this), false);
  }

}

/***/ }),

/***/ "./app/config/forms.js":
/*!*****************************!*\
  !*** ./app/config/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormHandler)
/* harmony export */ });
/* harmony import */ var _classes_Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Components */ "./app/classes/Components.js");
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Alert */ "./app/components/Alert.js");
/* harmony import */ var _utils_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/function */ "./app/utils/function.js");



class FormHandler extends _classes_Components__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(type, url, method) {
    super('form');
    this.formType = type;
    this.method = method;
    this.url = `${window.location.origin}/${url}`;
    this.elements = this.elements[this.formType];
    this.val = 0;
    this.init();
  }

  init() {
    this.eventListener();
  } // SendToDb () {}


  async fetch(url, method, data) {
    const options = {
      method,
      mode: 'no-cors',
      body: data
    };
    const res = await fetch(url, options);

    if (res.status === 200) {
      // success
      res.json().then(data => {
        this.alert = new _components_Alert__WEBPACK_IMPORTED_MODULE_1__["default"](data.text, data.type);
        this.alert.show();
        this.elements.form.reset();
      });
    } else {
      // error
      res.json().then(data => {
        this.alert = new _components_Alert__WEBPACK_IMPORTED_MODULE_1__["default"](data.text, data.type);
        this.alert.show();
      });
    }
  }

  sendData(e) {
    e.preventDefault();
    const validNumber = this.verifyData(this.elements.mail, this.elements.name, this.elements.message);
    if (!validNumber) return;
    this.elements.alert.forEach(el => {
      el.innerText = '';
    });
    const formElements = new URLSearchParams(new FormData(this.elements.form));
    this.fetch(this.url, this.method, formElements);
  }

  verifyData(mail, name, message) {
    this.val = 0; // email

    if ((0,_utils_function__WEBPACK_IMPORTED_MODULE_2__.validEmail)(mail.value)) {
      this.val++;
    } else if (mail.value === '') {
      this.elements.emailAlert.innerText = 'Required*';
    } else {
      this.elements.emailAlert.innerText = 'This email is not valid';
    } // name


    if (name.value === '') {
      this.elements.nameAlert.innerText = 'Required*';
    } else {
      this.val++;
    } // message


    if (message.value === '') {
      this.elements.messageAlert.innerText = 'Required*';
    } else {
      this.val++;
    }

    return this.val === 3;
  }

  eventListener() {
    this.elements.button.addEventListener('click', this.sendData.bind(this));
  }

}

/***/ }),

/***/ "./app/pages/about/index.js":
/*!**********************************!*\
  !*** ./app/pages/about/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var _classes_Pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/Pages */ "./app/classes/Pages.js");

class About extends _classes_Pages__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('about');
    console.log('About');
  }

  create() {
    super.create();
  }

}

/***/ }),

/***/ "./app/pages/home/index.js":
/*!*********************************!*\
  !*** ./app/pages/home/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _classes_Pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/Pages */ "./app/classes/Pages.js");
/* harmony import */ var _components_slider_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/slider/Slider */ "./app/components/slider/Slider.js");


class Home extends _classes_Pages__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('home');
    console.log('home');
    this.create();
  }

  create() {
    super.create();
    this.slider = new _components_slider_Slider__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }

  hide() {}

}

/***/ }),

/***/ "./app/utils/Smoothscroll.js":
/*!***********************************!*\
  !*** ./app/utils/Smoothscroll.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Smoothscroll)
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./app/utils/function.js");
/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize-wheel */ "./node_modules/normalize-wheel/index.js");
/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(normalize_wheel__WEBPACK_IMPORTED_MODULE_1__);


class Smoothscroll {
  constructor(element, opts) {
    this.element = element;
    this.defaultOptions = {
      direction: 'v',
      // v: vertical or  v- : vertical bottom to top;  h: Horizontal or h- horizontal right to left
      smooth: 0.1 // Smooth amount -> Lerp function

    };
    this.smoothOptions = Object.assign(this.defaultOptions, { ...opts
    });
    this.init();
  }

  init() {
    this.scroll = {
      current: 0,
      target: 0,
      limit: 0
    };
    this.scroll.limit = this.element.clientHeight - window.innerHeight;
    this.addListener();
    this.update();
  }

  onMouseWheel(e) {
    const event = normalize_wheel__WEBPACK_IMPORTED_MODULE_1___default()(e);

    if (this.smoothOptions.direction === 'v' || this.smoothOptions.direction === 'v-') {
      this.scroll.target += event.pixelY;
    } else if (this.smoothOptions.direction === 'h' || this.smoothOptions.direction === 'h-') {
      this.scroll.target += event.pixelX;
    }
  }

  onResize() {
    this.scroll.limit = this.element.clientHeight - window.innerHeight;
  }

  addListener() {
    window.addEventListener('wheel', this.onMouseWheel.bind(this));
    window.addEventListener('resize', this.onResize.bind(this));
  }

  update() {
    this.scroll.target = (0,_function__WEBPACK_IMPORTED_MODULE_0__.clamp)(this.scroll.target, 0, this.scroll.limit);
    this.scroll.current = (0,_function__WEBPACK_IMPORTED_MODULE_0__.lerp)(this.scroll.current, this.scroll.target, this.smoothOptions.smooth);

    if (this.scroll.current < 0.01) {
      this.scroll.current = 0;
    }

    this.translateByCase();
    window.requestAnimationFrame(this.update.bind(this));
  }

  translateByCase() {
    switch (this.smoothOptions.direction) {
      case 'v':
        this.element.style.transform = `translateY(-${this.scroll.current}px)`;
        break;

      case 'v-':
        this.element.style.transform = `translateY(${this.scroll.current}px)`;
        break;

      case 'h':
        this.element.style.transform = `translateX(-${this.scroll.current}px)`;
        break;

      case 'h-':
        this.element.style.transform = `translateX(${this.scroll.current}px)`;
        break;
    }
  }

}

/***/ }),

/***/ "./app/utils/function.js":
/*!*******************************!*\
  !*** ./app/utils/function.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlExist": () => (/* binding */ UrlExist),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "validEmail": () => (/* binding */ validEmail),
/* harmony export */   "validFileType": () => (/* binding */ validFileType)
/* harmony export */ });
const lerp = (start, end, amount) => {
  return (1 - amount) * start + amount * end;
};
const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};
/**
 * Vérifie si un fichier est de type PDF,  DOC et DOX c'est à dire
 * un document texte
 * @param {FILE} file - le fichier qui doit être vérifier
 * @param {string} type - le type de fichier document | image
 * @returns {Boolean} Boolean
 */

const validFileType = (file, type) => {
  const documents = ['application/pdf', 'application/doc', 'application/docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'];
  const images = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/bmp'];

  if (type === 'documents') {
    for (let i = 0; i < documents.length; i++) {
      if (file.type === documents[i]) {
        return true;
      }
    }

    return false;
  } else if (type === 'images') {
    for (let i = 0; i < images.length; i++) {
      if (file.type === images[i]) {
        return true;
      }
    }

    return false;
  }
};
/**
 * Vérifie si une Url pointe vers une page valide
 *
 * @async
 * @param {string} url - le lien de la page
 * @returns {boolean} Boolean
 */

async function UrlExist(url) {
  const options = {
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  };
  const response = await fetch(url, options);
  return response.status !== '404';
}
/**
 * Verifie si un email est valide
 * @param email
 * @returns {boolean}
 */

function validEmail(email) {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (regex.test(email)) {
    return true;
  }
}

/***/ }),

/***/ "./app/utils/selectors.js":
/*!********************************!*\
  !*** ./app/utils/selectors.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "$All": () => (/* binding */ $All),
/* harmony export */   "$Attribute": () => (/* binding */ $Attribute)
/* harmony export */ });
/**
 * Select element in DOM HTML
 * @param {*} element - The css selector of the HTML element to target
 * @returns {HTMLElement}
 */
const $ = element => {
  return document.querySelector(`${element}`);
};
/**
 * Select elements in DOM HTML
 * @param {*} elements - The css selector of the HTML elements to target
 * @returns {NodeList}
 */

const $All = elements => {
  return [...document.querySelectorAll(`${elements}`)];
};
/**
 * Get Attribute of Element
 * @param {HTMLElement} element - HTML element
 * @param {HTMLElement} name - Name of attribute (ex : data-animation)
 * @returns {string}
 */

const $Attribute = (element, name) => {
  return element.getAttribute(name);
};

/***/ }),

/***/ "./node_modules/ansi-html-community/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ansi-html-community/index.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = ansiHTML; // Reference to https://github.com/sindresorhus/ansi-regex

var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/;
var _defColors = {
  reset: ['fff', '000'],
  // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
};
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
};
var _openTags = {
  '1': 'font-weight:bold',
  // bold
  '2': 'opacity:0.5',
  // dim
  '3': '<i>',
  // italic
  '4': '<u>',
  // underscore
  '8': 'display:none',
  // hidden
  '9': '<del>' // delete

};
var _closeTags = {
  '23': '</i>',
  // reset italic
  '24': '</u>',
  // reset underscore
  '29': '</del>' // reset delete

};
[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>';
});
/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */

function ansiHTML(text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text;
  } // Cache opened sequence.


  var ansiCodes = []; // Replace with markup.

  var ret = text.replace(/\033\[(\d+)m/g, function (match, seq) {
    var ot = _openTags[seq];

    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) {
        // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop();
        return '</span>';
      } // Open tag.


      ansiCodes.push(seq);
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">';
    }

    var ct = _closeTags[seq];

    if (ct) {
      // Pop sequence
      ansiCodes.pop();
      return ct;
    }

    return '';
  }); // Make sure tags are closed.

  var l = ansiCodes.length;
  l > 0 && (ret += Array(l + 1).join('</span>'));
  return ret;
}
/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */


ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.');
  }

  var _finalColors = {};

  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null;

    if (!hex) {
      _finalColors[key] = _defColors[key];
      continue;
    }

    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex];
      }

      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string';
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000');
      }

      var defHexColor = _defColors[key];

      if (!hex[0]) {
        hex[0] = defHexColor[0];
      }

      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]];
        hex.push(defHexColor[1]);
      }

      hex = hex.slice(0, 2);
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000');
    }

    _finalColors[key] = hex;
  }

  _setTags(_finalColors);
};
/**
 * Reset colors.
 */


ansiHTML.reset = function () {
  _setTags(_defColors);
};
/**
 * Expose tags, including open and close.
 * @type {Object}
 */


ansiHTML.tags = {};

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () {
      return _openTags;
    }
  });
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () {
      return _closeTags;
    }
  });
} else {
  ansiHTML.tags.open = _openTags;
  ansiHTML.tags.close = _closeTags;
}

function _setTags(colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]; // inverse

  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]; // dark grey

  _openTags['90'] = 'color:#' + colors.darkgrey;

  for (var code in _styles) {
    var color = _styles[code];
    var oriColor = colors[color] || '000';
    _openTags[code] = 'color:#' + oriColor;
    code = parseInt(code);
    _openTags[(code + 10).toString()] = 'background:#' + oriColor;
  }
}

ansiHTML.reset();

/***/ }),

/***/ "./node_modules/ev-emitter/ev-emitter.js":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/***/ (function(module) {

/**
 * EvEmitter v2.1.1
 * Lil' event emitter
 * MIT License
 */
(function (global, factory) {
  // universal module definition
  if ( true && module.exports) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }
})(typeof window != 'undefined' ? window : this, function () {
  function EvEmitter() {}

  let proto = EvEmitter.prototype;

  proto.on = function (eventName, listener) {
    if (!eventName || !listener) return this; // set events hash

    let events = this._events = this._events || {}; // set listeners array

    let listeners = events[eventName] = events[eventName] || []; // only add once

    if (!listeners.includes(listener)) {
      listeners.push(listener);
    }

    return this;
  };

  proto.once = function (eventName, listener) {
    if (!eventName || !listener) return this; // add event

    this.on(eventName, listener); // set once flag
    // set onceEvents hash

    let onceEvents = this._onceEvents = this._onceEvents || {}; // set onceListeners object

    let onceListeners = onceEvents[eventName] = onceEvents[eventName] || {}; // set flag

    onceListeners[listener] = true;
    return this;
  };

  proto.off = function (eventName, listener) {
    let listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) return this;
    let index = listeners.indexOf(listener);

    if (index != -1) {
      listeners.splice(index, 1);
    }

    return this;
  };

  proto.emitEvent = function (eventName, args) {
    let listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) return this; // copy over to avoid interference if .off() in listener

    listeners = listeners.slice(0);
    args = args || []; // once stuff

    let onceListeners = this._onceEvents && this._onceEvents[eventName];

    for (let listener of listeners) {
      let isOnce = onceListeners && onceListeners[listener];

      if (isOnce) {
        // remove listener
        // remove before trigger to prevent recursion
        this.off(eventName, listener); // unset once flag

        delete onceListeners[listener];
      } // trigger listener


      listener.apply(this, args);
    }

    return this;
  };

  proto.allOff = function () {
    delete this._events;
    delete this._onceEvents;
    return this;
  };

  return EvEmitter;
});

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;

if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}

module.exports = EventEmitter;
module.exports.once = once; // Backwards-compat with node 0.10.x

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function () {
    return defaultMaxListeners;
  },
  set: function (arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }

    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}; // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.


EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }

  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];

  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);

  var doError = type === 'error';
  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.

  if (doError) {
    var er;
    if (args.length > 0) er = args[0];

    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    } // At least give some kind of context to the user


    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];
  if (handler === undefined) return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  checkListener(listener);
  events = target._events;

  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object

      events = target._events;
    }

    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    } // Check for listener leak


    m = _getMaxListeners(target);

    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true; // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax

      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0) return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  checkListener(listener);
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
}; // Emits a 'removeListener' event if and only if the listener was removed.


EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;
  checkListener(listener);
  events = this._events;
  if (events === undefined) return this;
  list = events[type];
  if (list === undefined) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;
    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }
    if (list.length === 1) events[type] = list[0];
    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;
  events = this._events;
  if (events === undefined) return this; // not listening for removeListener, no need to emit

  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }

    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;

    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;
  if (events === undefined) return [];
  var evlistener = events[type];
  if (evlistener === undefined) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;

function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);

  for (var i = 0; i < n; ++i) copy[i] = arr[i];

  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];

  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);

  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }

  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }

      resolve([].slice.call(arguments));
    }

    ;
    eventTargetAgnosticAddListener(emitter, name, resolver, {
      once: true
    });

    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, {
        once: true
      });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }

      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

/***/ }),

/***/ "./node_modules/html-entities/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-entities/lib/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var named_references_1 = __webpack_require__(/*! ./named-references */ "./node_modules/html-entities/lib/named-references.js");

var numeric_unicode_map_1 = __webpack_require__(/*! ./numeric-unicode-map */ "./node_modules/html-entities/lib/numeric-unicode-map.js");

var surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ "./node_modules/html-entities/lib/surrogate-pairs.js");

var allNamedReferences = __assign(__assign({}, named_references_1.namedReferences), {
  all: named_references_1.namedReferences.html5
});

var encodeRegExps = {
  specialChars: /[<>'"&]/g,
  nonAscii: /(?:[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
  nonAsciiPrintable: /(?:[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
  extensive: /(?:[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g
};
var defaultEncodeOptions = {
  mode: 'specialChars',
  level: 'all',
  numeric: 'decimal'
};
/** Encodes all the necessary (specified by `level`) characters in the text */

function encode(text, _a) {
  var _b = _a === void 0 ? defaultEncodeOptions : _a,
      _c = _b.mode,
      mode = _c === void 0 ? 'specialChars' : _c,
      _d = _b.numeric,
      numeric = _d === void 0 ? 'decimal' : _d,
      _e = _b.level,
      level = _e === void 0 ? 'all' : _e;

  if (!text) {
    return '';
  }

  var encodeRegExp = encodeRegExps[mode];
  var references = allNamedReferences[level].characters;
  var isHex = numeric === 'hexadecimal';
  encodeRegExp.lastIndex = 0;

  var _b = encodeRegExp.exec(text);

  var _c;

  if (_b) {
    _c = '';
    var _d = 0;

    do {
      if (_d !== _b.index) {
        _c += text.substring(_d, _b.index);
      }

      var _e = _b[0];
      var result_1 = references[_e];

      if (!result_1) {
        var code_1 = _e.length > 1 ? surrogate_pairs_1.getCodePoint(_e, 0) : _e.charCodeAt(0);
        result_1 = (isHex ? '&#x' + code_1.toString(16) : '&#' + code_1) + ';';
      }

      _c += result_1;
      _d = _b.index + _e.length;
    } while (_b = encodeRegExp.exec(text));

    if (_d !== text.length) {
      _c += text.substring(_d);
    }
  } else {
    _c = text;
  }

  return _c;
}

exports.encode = encode;
var defaultDecodeOptions = {
  scope: 'body',
  level: 'all'
};
var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
var baseDecodeRegExps = {
  xml: {
    strict: strict,
    attribute: attribute,
    body: named_references_1.bodyRegExps.xml
  },
  html4: {
    strict: strict,
    attribute: attribute,
    body: named_references_1.bodyRegExps.html4
  },
  html5: {
    strict: strict,
    attribute: attribute,
    body: named_references_1.bodyRegExps.html5
  }
};

var decodeRegExps = __assign(__assign({}, baseDecodeRegExps), {
  all: baseDecodeRegExps.html5
});

var fromCharCode = String.fromCharCode;
var outOfBoundsChar = fromCharCode(65533);
var defaultDecodeEntityOptions = {
  level: 'all'
};
/** Decodes a single entity */

function decodeEntity(entity, _a) {
  var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level,
      level = _b === void 0 ? 'all' : _b;

  if (!entity) {
    return '';
  }

  var _b = entity;
  var decodeEntityLastChar_1 = entity[entity.length - 1];

  if (false) {} else if (false) {} else {
    var decodeResultByReference_1 = allNamedReferences[level].entities[entity];

    if (decodeResultByReference_1) {
      _b = decodeResultByReference_1;
    } else if (entity[0] === '&' && entity[1] === '#') {
      var decodeSecondChar_1 = entity[2];
      var decodeCode_1 = decodeSecondChar_1 == 'x' || decodeSecondChar_1 == 'X' ? parseInt(entity.substr(3), 16) : parseInt(entity.substr(2));
      _b = decodeCode_1 >= 0x10ffff ? outOfBoundsChar : decodeCode_1 > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode_1) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_1] || decodeCode_1);
    }
  }

  return _b;
}

exports.decodeEntity = decodeEntity;
/** Decodes all entities in the text */

function decode(text, _a) {
  var decodeSecondChar_1 = _a === void 0 ? defaultDecodeOptions : _a,
      decodeCode_1 = decodeSecondChar_1.level,
      level = decodeCode_1 === void 0 ? 'all' : decodeCode_1,
      _b = decodeSecondChar_1.scope,
      scope = _b === void 0 ? level === 'xml' ? 'strict' : 'body' : _b;

  if (!text) {
    return '';
  }

  var decodeRegExp = decodeRegExps[level][scope];
  var references = allNamedReferences[level].entities;
  var isAttribute = scope === 'attribute';
  var isStrict = scope === 'strict';
  decodeRegExp.lastIndex = 0;
  var replaceMatch_1 = decodeRegExp.exec(text);
  var replaceResult_1;

  if (replaceMatch_1) {
    replaceResult_1 = '';
    var replaceLastIndex_1 = 0;

    do {
      if (replaceLastIndex_1 !== replaceMatch_1.index) {
        replaceResult_1 += text.substring(replaceLastIndex_1, replaceMatch_1.index);
      }

      var replaceInput_1 = replaceMatch_1[0];
      var decodeResult_1 = replaceInput_1;
      var decodeEntityLastChar_2 = replaceInput_1[replaceInput_1.length - 1];

      if (isAttribute && decodeEntityLastChar_2 === '=') {
        decodeResult_1 = replaceInput_1;
      } else if (isStrict && decodeEntityLastChar_2 !== ';') {
        decodeResult_1 = replaceInput_1;
      } else {
        var decodeResultByReference_2 = references[replaceInput_1];

        if (decodeResultByReference_2) {
          decodeResult_1 = decodeResultByReference_2;
        } else if (replaceInput_1[0] === '&' && replaceInput_1[1] === '#') {
          var decodeSecondChar_2 = replaceInput_1[2];
          var decodeCode_2 = decodeSecondChar_2 == 'x' || decodeSecondChar_2 == 'X' ? parseInt(replaceInput_1.substr(3), 16) : parseInt(replaceInput_1.substr(2));
          decodeResult_1 = decodeCode_2 >= 0x10ffff ? outOfBoundsChar : decodeCode_2 > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode_2) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_2] || decodeCode_2);
        }
      }

      replaceResult_1 += decodeResult_1;
      replaceLastIndex_1 = replaceMatch_1.index + replaceInput_1.length;
    } while (replaceMatch_1 = decodeRegExp.exec(text));

    if (replaceLastIndex_1 !== text.length) {
      replaceResult_1 += text.substring(replaceLastIndex_1);
    }
  } else {
    replaceResult_1 = text;
  }

  return replaceResult_1;
}

exports.decode = decode;

/***/ }),

/***/ "./node_modules/html-entities/lib/named-references.js":
/*!************************************************************!*\
  !*** ./node_modules/html-entities/lib/named-references.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bodyRegExps = {
  xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
  html4: /&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
  html5: /&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g
};
exports.namedReferences = {
  xml: {
    entities: {
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&apos;": "'",
      "&amp;": "&"
    },
    characters: {
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;",
      "&": "&amp;"
    }
  },
  html4: {
    entities: {
      "&apos;": "'",
      "&nbsp": " ",
      "&nbsp;": " ",
      "&iexcl": "¡",
      "&iexcl;": "¡",
      "&cent": "¢",
      "&cent;": "¢",
      "&pound": "£",
      "&pound;": "£",
      "&curren": "¤",
      "&curren;": "¤",
      "&yen": "¥",
      "&yen;": "¥",
      "&brvbar": "¦",
      "&brvbar;": "¦",
      "&sect": "§",
      "&sect;": "§",
      "&uml": "¨",
      "&uml;": "¨",
      "&copy": "©",
      "&copy;": "©",
      "&ordf": "ª",
      "&ordf;": "ª",
      "&laquo": "«",
      "&laquo;": "«",
      "&not": "¬",
      "&not;": "¬",
      "&shy": "­",
      "&shy;": "­",
      "&reg": "®",
      "&reg;": "®",
      "&macr": "¯",
      "&macr;": "¯",
      "&deg": "°",
      "&deg;": "°",
      "&plusmn": "±",
      "&plusmn;": "±",
      "&sup2": "²",
      "&sup2;": "²",
      "&sup3": "³",
      "&sup3;": "³",
      "&acute": "´",
      "&acute;": "´",
      "&micro": "µ",
      "&micro;": "µ",
      "&para": "¶",
      "&para;": "¶",
      "&middot": "·",
      "&middot;": "·",
      "&cedil": "¸",
      "&cedil;": "¸",
      "&sup1": "¹",
      "&sup1;": "¹",
      "&ordm": "º",
      "&ordm;": "º",
      "&raquo": "»",
      "&raquo;": "»",
      "&frac14": "¼",
      "&frac14;": "¼",
      "&frac12": "½",
      "&frac12;": "½",
      "&frac34": "¾",
      "&frac34;": "¾",
      "&iquest": "¿",
      "&iquest;": "¿",
      "&Agrave": "À",
      "&Agrave;": "À",
      "&Aacute": "Á",
      "&Aacute;": "Á",
      "&Acirc": "Â",
      "&Acirc;": "Â",
      "&Atilde": "Ã",
      "&Atilde;": "Ã",
      "&Auml": "Ä",
      "&Auml;": "Ä",
      "&Aring": "Å",
      "&Aring;": "Å",
      "&AElig": "Æ",
      "&AElig;": "Æ",
      "&Ccedil": "Ç",
      "&Ccedil;": "Ç",
      "&Egrave": "È",
      "&Egrave;": "È",
      "&Eacute": "É",
      "&Eacute;": "É",
      "&Ecirc": "Ê",
      "&Ecirc;": "Ê",
      "&Euml": "Ë",
      "&Euml;": "Ë",
      "&Igrave": "Ì",
      "&Igrave;": "Ì",
      "&Iacute": "Í",
      "&Iacute;": "Í",
      "&Icirc": "Î",
      "&Icirc;": "Î",
      "&Iuml": "Ï",
      "&Iuml;": "Ï",
      "&ETH": "Ð",
      "&ETH;": "Ð",
      "&Ntilde": "Ñ",
      "&Ntilde;": "Ñ",
      "&Ograve": "Ò",
      "&Ograve;": "Ò",
      "&Oacute": "Ó",
      "&Oacute;": "Ó",
      "&Ocirc": "Ô",
      "&Ocirc;": "Ô",
      "&Otilde": "Õ",
      "&Otilde;": "Õ",
      "&Ouml": "Ö",
      "&Ouml;": "Ö",
      "&times": "×",
      "&times;": "×",
      "&Oslash": "Ø",
      "&Oslash;": "Ø",
      "&Ugrave": "Ù",
      "&Ugrave;": "Ù",
      "&Uacute": "Ú",
      "&Uacute;": "Ú",
      "&Ucirc": "Û",
      "&Ucirc;": "Û",
      "&Uuml": "Ü",
      "&Uuml;": "Ü",
      "&Yacute": "Ý",
      "&Yacute;": "Ý",
      "&THORN": "Þ",
      "&THORN;": "Þ",
      "&szlig": "ß",
      "&szlig;": "ß",
      "&agrave": "à",
      "&agrave;": "à",
      "&aacute": "á",
      "&aacute;": "á",
      "&acirc": "â",
      "&acirc;": "â",
      "&atilde": "ã",
      "&atilde;": "ã",
      "&auml": "ä",
      "&auml;": "ä",
      "&aring": "å",
      "&aring;": "å",
      "&aelig": "æ",
      "&aelig;": "æ",
      "&ccedil": "ç",
      "&ccedil;": "ç",
      "&egrave": "è",
      "&egrave;": "è",
      "&eacute": "é",
      "&eacute;": "é",
      "&ecirc": "ê",
      "&ecirc;": "ê",
      "&euml": "ë",
      "&euml;": "ë",
      "&igrave": "ì",
      "&igrave;": "ì",
      "&iacute": "í",
      "&iacute;": "í",
      "&icirc": "î",
      "&icirc;": "î",
      "&iuml": "ï",
      "&iuml;": "ï",
      "&eth": "ð",
      "&eth;": "ð",
      "&ntilde": "ñ",
      "&ntilde;": "ñ",
      "&ograve": "ò",
      "&ograve;": "ò",
      "&oacute": "ó",
      "&oacute;": "ó",
      "&ocirc": "ô",
      "&ocirc;": "ô",
      "&otilde": "õ",
      "&otilde;": "õ",
      "&ouml": "ö",
      "&ouml;": "ö",
      "&divide": "÷",
      "&divide;": "÷",
      "&oslash": "ø",
      "&oslash;": "ø",
      "&ugrave": "ù",
      "&ugrave;": "ù",
      "&uacute": "ú",
      "&uacute;": "ú",
      "&ucirc": "û",
      "&ucirc;": "û",
      "&uuml": "ü",
      "&uuml;": "ü",
      "&yacute": "ý",
      "&yacute;": "ý",
      "&thorn": "þ",
      "&thorn;": "þ",
      "&yuml": "ÿ",
      "&yuml;": "ÿ",
      "&quot": '"',
      "&quot;": '"',
      "&amp": "&",
      "&amp;": "&",
      "&lt": "<",
      "&lt;": "<",
      "&gt": ">",
      "&gt;": ">",
      "&OElig;": "Œ",
      "&oelig;": "œ",
      "&Scaron;": "Š",
      "&scaron;": "š",
      "&Yuml;": "Ÿ",
      "&circ;": "ˆ",
      "&tilde;": "˜",
      "&ensp;": " ",
      "&emsp;": " ",
      "&thinsp;": " ",
      "&zwnj;": "‌",
      "&zwj;": "‍",
      "&lrm;": "‎",
      "&rlm;": "‏",
      "&ndash;": "–",
      "&mdash;": "—",
      "&lsquo;": "‘",
      "&rsquo;": "’",
      "&sbquo;": "‚",
      "&ldquo;": "“",
      "&rdquo;": "”",
      "&bdquo;": "„",
      "&dagger;": "†",
      "&Dagger;": "‡",
      "&permil;": "‰",
      "&lsaquo;": "‹",
      "&rsaquo;": "›",
      "&euro;": "€",
      "&fnof;": "ƒ",
      "&Alpha;": "Α",
      "&Beta;": "Β",
      "&Gamma;": "Γ",
      "&Delta;": "Δ",
      "&Epsilon;": "Ε",
      "&Zeta;": "Ζ",
      "&Eta;": "Η",
      "&Theta;": "Θ",
      "&Iota;": "Ι",
      "&Kappa;": "Κ",
      "&Lambda;": "Λ",
      "&Mu;": "Μ",
      "&Nu;": "Ν",
      "&Xi;": "Ξ",
      "&Omicron;": "Ο",
      "&Pi;": "Π",
      "&Rho;": "Ρ",
      "&Sigma;": "Σ",
      "&Tau;": "Τ",
      "&Upsilon;": "Υ",
      "&Phi;": "Φ",
      "&Chi;": "Χ",
      "&Psi;": "Ψ",
      "&Omega;": "Ω",
      "&alpha;": "α",
      "&beta;": "β",
      "&gamma;": "γ",
      "&delta;": "δ",
      "&epsilon;": "ε",
      "&zeta;": "ζ",
      "&eta;": "η",
      "&theta;": "θ",
      "&iota;": "ι",
      "&kappa;": "κ",
      "&lambda;": "λ",
      "&mu;": "μ",
      "&nu;": "ν",
      "&xi;": "ξ",
      "&omicron;": "ο",
      "&pi;": "π",
      "&rho;": "ρ",
      "&sigmaf;": "ς",
      "&sigma;": "σ",
      "&tau;": "τ",
      "&upsilon;": "υ",
      "&phi;": "φ",
      "&chi;": "χ",
      "&psi;": "ψ",
      "&omega;": "ω",
      "&thetasym;": "ϑ",
      "&upsih;": "ϒ",
      "&piv;": "ϖ",
      "&bull;": "•",
      "&hellip;": "…",
      "&prime;": "′",
      "&Prime;": "″",
      "&oline;": "‾",
      "&frasl;": "⁄",
      "&weierp;": "℘",
      "&image;": "ℑ",
      "&real;": "ℜ",
      "&trade;": "™",
      "&alefsym;": "ℵ",
      "&larr;": "←",
      "&uarr;": "↑",
      "&rarr;": "→",
      "&darr;": "↓",
      "&harr;": "↔",
      "&crarr;": "↵",
      "&lArr;": "⇐",
      "&uArr;": "⇑",
      "&rArr;": "⇒",
      "&dArr;": "⇓",
      "&hArr;": "⇔",
      "&forall;": "∀",
      "&part;": "∂",
      "&exist;": "∃",
      "&empty;": "∅",
      "&nabla;": "∇",
      "&isin;": "∈",
      "&notin;": "∉",
      "&ni;": "∋",
      "&prod;": "∏",
      "&sum;": "∑",
      "&minus;": "−",
      "&lowast;": "∗",
      "&radic;": "√",
      "&prop;": "∝",
      "&infin;": "∞",
      "&ang;": "∠",
      "&and;": "∧",
      "&or;": "∨",
      "&cap;": "∩",
      "&cup;": "∪",
      "&int;": "∫",
      "&there4;": "∴",
      "&sim;": "∼",
      "&cong;": "≅",
      "&asymp;": "≈",
      "&ne;": "≠",
      "&equiv;": "≡",
      "&le;": "≤",
      "&ge;": "≥",
      "&sub;": "⊂",
      "&sup;": "⊃",
      "&nsub;": "⊄",
      "&sube;": "⊆",
      "&supe;": "⊇",
      "&oplus;": "⊕",
      "&otimes;": "⊗",
      "&perp;": "⊥",
      "&sdot;": "⋅",
      "&lceil;": "⌈",
      "&rceil;": "⌉",
      "&lfloor;": "⌊",
      "&rfloor;": "⌋",
      "&lang;": "〈",
      "&rang;": "〉",
      "&loz;": "◊",
      "&spades;": "♠",
      "&clubs;": "♣",
      "&hearts;": "♥",
      "&diams;": "♦"
    },
    characters: {
      "'": "&apos;",
      " ": "&nbsp;",
      "¡": "&iexcl;",
      "¢": "&cent;",
      "£": "&pound;",
      "¤": "&curren;",
      "¥": "&yen;",
      "¦": "&brvbar;",
      "§": "&sect;",
      "¨": "&uml;",
      "©": "&copy;",
      "ª": "&ordf;",
      "«": "&laquo;",
      "¬": "&not;",
      "­": "&shy;",
      "®": "&reg;",
      "¯": "&macr;",
      "°": "&deg;",
      "±": "&plusmn;",
      "²": "&sup2;",
      "³": "&sup3;",
      "´": "&acute;",
      "µ": "&micro;",
      "¶": "&para;",
      "·": "&middot;",
      "¸": "&cedil;",
      "¹": "&sup1;",
      "º": "&ordm;",
      "»": "&raquo;",
      "¼": "&frac14;",
      "½": "&frac12;",
      "¾": "&frac34;",
      "¿": "&iquest;",
      "À": "&Agrave;",
      "Á": "&Aacute;",
      "Â": "&Acirc;",
      "Ã": "&Atilde;",
      "Ä": "&Auml;",
      "Å": "&Aring;",
      "Æ": "&AElig;",
      "Ç": "&Ccedil;",
      "È": "&Egrave;",
      "É": "&Eacute;",
      "Ê": "&Ecirc;",
      "Ë": "&Euml;",
      "Ì": "&Igrave;",
      "Í": "&Iacute;",
      "Î": "&Icirc;",
      "Ï": "&Iuml;",
      "Ð": "&ETH;",
      "Ñ": "&Ntilde;",
      "Ò": "&Ograve;",
      "Ó": "&Oacute;",
      "Ô": "&Ocirc;",
      "Õ": "&Otilde;",
      "Ö": "&Ouml;",
      "×": "&times;",
      "Ø": "&Oslash;",
      "Ù": "&Ugrave;",
      "Ú": "&Uacute;",
      "Û": "&Ucirc;",
      "Ü": "&Uuml;",
      "Ý": "&Yacute;",
      "Þ": "&THORN;",
      "ß": "&szlig;",
      "à": "&agrave;",
      "á": "&aacute;",
      "â": "&acirc;",
      "ã": "&atilde;",
      "ä": "&auml;",
      "å": "&aring;",
      "æ": "&aelig;",
      "ç": "&ccedil;",
      "è": "&egrave;",
      "é": "&eacute;",
      "ê": "&ecirc;",
      "ë": "&euml;",
      "ì": "&igrave;",
      "í": "&iacute;",
      "î": "&icirc;",
      "ï": "&iuml;",
      "ð": "&eth;",
      "ñ": "&ntilde;",
      "ò": "&ograve;",
      "ó": "&oacute;",
      "ô": "&ocirc;",
      "õ": "&otilde;",
      "ö": "&ouml;",
      "÷": "&divide;",
      "ø": "&oslash;",
      "ù": "&ugrave;",
      "ú": "&uacute;",
      "û": "&ucirc;",
      "ü": "&uuml;",
      "ý": "&yacute;",
      "þ": "&thorn;",
      "ÿ": "&yuml;",
      '"': "&quot;",
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "Œ": "&OElig;",
      "œ": "&oelig;",
      "Š": "&Scaron;",
      "š": "&scaron;",
      "Ÿ": "&Yuml;",
      "ˆ": "&circ;",
      "˜": "&tilde;",
      " ": "&ensp;",
      " ": "&emsp;",
      " ": "&thinsp;",
      "‌": "&zwnj;",
      "‍": "&zwj;",
      "‎": "&lrm;",
      "‏": "&rlm;",
      "–": "&ndash;",
      "—": "&mdash;",
      "‘": "&lsquo;",
      "’": "&rsquo;",
      "‚": "&sbquo;",
      "“": "&ldquo;",
      "”": "&rdquo;",
      "„": "&bdquo;",
      "†": "&dagger;",
      "‡": "&Dagger;",
      "‰": "&permil;",
      "‹": "&lsaquo;",
      "›": "&rsaquo;",
      "€": "&euro;",
      "ƒ": "&fnof;",
      "Α": "&Alpha;",
      "Β": "&Beta;",
      "Γ": "&Gamma;",
      "Δ": "&Delta;",
      "Ε": "&Epsilon;",
      "Ζ": "&Zeta;",
      "Η": "&Eta;",
      "Θ": "&Theta;",
      "Ι": "&Iota;",
      "Κ": "&Kappa;",
      "Λ": "&Lambda;",
      "Μ": "&Mu;",
      "Ν": "&Nu;",
      "Ξ": "&Xi;",
      "Ο": "&Omicron;",
      "Π": "&Pi;",
      "Ρ": "&Rho;",
      "Σ": "&Sigma;",
      "Τ": "&Tau;",
      "Υ": "&Upsilon;",
      "Φ": "&Phi;",
      "Χ": "&Chi;",
      "Ψ": "&Psi;",
      "Ω": "&Omega;",
      "α": "&alpha;",
      "β": "&beta;",
      "γ": "&gamma;",
      "δ": "&delta;",
      "ε": "&epsilon;",
      "ζ": "&zeta;",
      "η": "&eta;",
      "θ": "&theta;",
      "ι": "&iota;",
      "κ": "&kappa;",
      "λ": "&lambda;",
      "μ": "&mu;",
      "ν": "&nu;",
      "ξ": "&xi;",
      "ο": "&omicron;",
      "π": "&pi;",
      "ρ": "&rho;",
      "ς": "&sigmaf;",
      "σ": "&sigma;",
      "τ": "&tau;",
      "υ": "&upsilon;",
      "φ": "&phi;",
      "χ": "&chi;",
      "ψ": "&psi;",
      "ω": "&omega;",
      "ϑ": "&thetasym;",
      "ϒ": "&upsih;",
      "ϖ": "&piv;",
      "•": "&bull;",
      "…": "&hellip;",
      "′": "&prime;",
      "″": "&Prime;",
      "‾": "&oline;",
      "⁄": "&frasl;",
      "℘": "&weierp;",
      "ℑ": "&image;",
      "ℜ": "&real;",
      "™": "&trade;",
      "ℵ": "&alefsym;",
      "←": "&larr;",
      "↑": "&uarr;",
      "→": "&rarr;",
      "↓": "&darr;",
      "↔": "&harr;",
      "↵": "&crarr;",
      "⇐": "&lArr;",
      "⇑": "&uArr;",
      "⇒": "&rArr;",
      "⇓": "&dArr;",
      "⇔": "&hArr;",
      "∀": "&forall;",
      "∂": "&part;",
      "∃": "&exist;",
      "∅": "&empty;",
      "∇": "&nabla;",
      "∈": "&isin;",
      "∉": "&notin;",
      "∋": "&ni;",
      "∏": "&prod;",
      "∑": "&sum;",
      "−": "&minus;",
      "∗": "&lowast;",
      "√": "&radic;",
      "∝": "&prop;",
      "∞": "&infin;",
      "∠": "&ang;",
      "∧": "&and;",
      "∨": "&or;",
      "∩": "&cap;",
      "∪": "&cup;",
      "∫": "&int;",
      "∴": "&there4;",
      "∼": "&sim;",
      "≅": "&cong;",
      "≈": "&asymp;",
      "≠": "&ne;",
      "≡": "&equiv;",
      "≤": "&le;",
      "≥": "&ge;",
      "⊂": "&sub;",
      "⊃": "&sup;",
      "⊄": "&nsub;",
      "⊆": "&sube;",
      "⊇": "&supe;",
      "⊕": "&oplus;",
      "⊗": "&otimes;",
      "⊥": "&perp;",
      "⋅": "&sdot;",
      "⌈": "&lceil;",
      "⌉": "&rceil;",
      "⌊": "&lfloor;",
      "⌋": "&rfloor;",
      "〈": "&lang;",
      "〉": "&rang;",
      "◊": "&loz;",
      "♠": "&spades;",
      "♣": "&clubs;",
      "♥": "&hearts;",
      "♦": "&diams;"
    }
  },
  html5: {
    entities: {
      "&AElig": "Æ",
      "&AElig;": "Æ",
      "&AMP": "&",
      "&AMP;": "&",
      "&Aacute": "Á",
      "&Aacute;": "Á",
      "&Abreve;": "Ă",
      "&Acirc": "Â",
      "&Acirc;": "Â",
      "&Acy;": "А",
      "&Afr;": "𝔄",
      "&Agrave": "À",
      "&Agrave;": "À",
      "&Alpha;": "Α",
      "&Amacr;": "Ā",
      "&And;": "⩓",
      "&Aogon;": "Ą",
      "&Aopf;": "𝔸",
      "&ApplyFunction;": "⁡",
      "&Aring": "Å",
      "&Aring;": "Å",
      "&Ascr;": "𝒜",
      "&Assign;": "≔",
      "&Atilde": "Ã",
      "&Atilde;": "Ã",
      "&Auml": "Ä",
      "&Auml;": "Ä",
      "&Backslash;": "∖",
      "&Barv;": "⫧",
      "&Barwed;": "⌆",
      "&Bcy;": "Б",
      "&Because;": "∵",
      "&Bernoullis;": "ℬ",
      "&Beta;": "Β",
      "&Bfr;": "𝔅",
      "&Bopf;": "𝔹",
      "&Breve;": "˘",
      "&Bscr;": "ℬ",
      "&Bumpeq;": "≎",
      "&CHcy;": "Ч",
      "&COPY": "©",
      "&COPY;": "©",
      "&Cacute;": "Ć",
      "&Cap;": "⋒",
      "&CapitalDifferentialD;": "ⅅ",
      "&Cayleys;": "ℭ",
      "&Ccaron;": "Č",
      "&Ccedil": "Ç",
      "&Ccedil;": "Ç",
      "&Ccirc;": "Ĉ",
      "&Cconint;": "∰",
      "&Cdot;": "Ċ",
      "&Cedilla;": "¸",
      "&CenterDot;": "·",
      "&Cfr;": "ℭ",
      "&Chi;": "Χ",
      "&CircleDot;": "⊙",
      "&CircleMinus;": "⊖",
      "&CirclePlus;": "⊕",
      "&CircleTimes;": "⊗",
      "&ClockwiseContourIntegral;": "∲",
      "&CloseCurlyDoubleQuote;": "”",
      "&CloseCurlyQuote;": "’",
      "&Colon;": "∷",
      "&Colone;": "⩴",
      "&Congruent;": "≡",
      "&Conint;": "∯",
      "&ContourIntegral;": "∮",
      "&Copf;": "ℂ",
      "&Coproduct;": "∐",
      "&CounterClockwiseContourIntegral;": "∳",
      "&Cross;": "⨯",
      "&Cscr;": "𝒞",
      "&Cup;": "⋓",
      "&CupCap;": "≍",
      "&DD;": "ⅅ",
      "&DDotrahd;": "⤑",
      "&DJcy;": "Ђ",
      "&DScy;": "Ѕ",
      "&DZcy;": "Џ",
      "&Dagger;": "‡",
      "&Darr;": "↡",
      "&Dashv;": "⫤",
      "&Dcaron;": "Ď",
      "&Dcy;": "Д",
      "&Del;": "∇",
      "&Delta;": "Δ",
      "&Dfr;": "𝔇",
      "&DiacriticalAcute;": "´",
      "&DiacriticalDot;": "˙",
      "&DiacriticalDoubleAcute;": "˝",
      "&DiacriticalGrave;": "`",
      "&DiacriticalTilde;": "˜",
      "&Diamond;": "⋄",
      "&DifferentialD;": "ⅆ",
      "&Dopf;": "𝔻",
      "&Dot;": "¨",
      "&DotDot;": "⃜",
      "&DotEqual;": "≐",
      "&DoubleContourIntegral;": "∯",
      "&DoubleDot;": "¨",
      "&DoubleDownArrow;": "⇓",
      "&DoubleLeftArrow;": "⇐",
      "&DoubleLeftRightArrow;": "⇔",
      "&DoubleLeftTee;": "⫤",
      "&DoubleLongLeftArrow;": "⟸",
      "&DoubleLongLeftRightArrow;": "⟺",
      "&DoubleLongRightArrow;": "⟹",
      "&DoubleRightArrow;": "⇒",
      "&DoubleRightTee;": "⊨",
      "&DoubleUpArrow;": "⇑",
      "&DoubleUpDownArrow;": "⇕",
      "&DoubleVerticalBar;": "∥",
      "&DownArrow;": "↓",
      "&DownArrowBar;": "⤓",
      "&DownArrowUpArrow;": "⇵",
      "&DownBreve;": "̑",
      "&DownLeftRightVector;": "⥐",
      "&DownLeftTeeVector;": "⥞",
      "&DownLeftVector;": "↽",
      "&DownLeftVectorBar;": "⥖",
      "&DownRightTeeVector;": "⥟",
      "&DownRightVector;": "⇁",
      "&DownRightVectorBar;": "⥗",
      "&DownTee;": "⊤",
      "&DownTeeArrow;": "↧",
      "&Downarrow;": "⇓",
      "&Dscr;": "𝒟",
      "&Dstrok;": "Đ",
      "&ENG;": "Ŋ",
      "&ETH": "Ð",
      "&ETH;": "Ð",
      "&Eacute": "É",
      "&Eacute;": "É",
      "&Ecaron;": "Ě",
      "&Ecirc": "Ê",
      "&Ecirc;": "Ê",
      "&Ecy;": "Э",
      "&Edot;": "Ė",
      "&Efr;": "𝔈",
      "&Egrave": "È",
      "&Egrave;": "È",
      "&Element;": "∈",
      "&Emacr;": "Ē",
      "&EmptySmallSquare;": "◻",
      "&EmptyVerySmallSquare;": "▫",
      "&Eogon;": "Ę",
      "&Eopf;": "𝔼",
      "&Epsilon;": "Ε",
      "&Equal;": "⩵",
      "&EqualTilde;": "≂",
      "&Equilibrium;": "⇌",
      "&Escr;": "ℰ",
      "&Esim;": "⩳",
      "&Eta;": "Η",
      "&Euml": "Ë",
      "&Euml;": "Ë",
      "&Exists;": "∃",
      "&ExponentialE;": "ⅇ",
      "&Fcy;": "Ф",
      "&Ffr;": "𝔉",
      "&FilledSmallSquare;": "◼",
      "&FilledVerySmallSquare;": "▪",
      "&Fopf;": "𝔽",
      "&ForAll;": "∀",
      "&Fouriertrf;": "ℱ",
      "&Fscr;": "ℱ",
      "&GJcy;": "Ѓ",
      "&GT": ">",
      "&GT;": ">",
      "&Gamma;": "Γ",
      "&Gammad;": "Ϝ",
      "&Gbreve;": "Ğ",
      "&Gcedil;": "Ģ",
      "&Gcirc;": "Ĝ",
      "&Gcy;": "Г",
      "&Gdot;": "Ġ",
      "&Gfr;": "𝔊",
      "&Gg;": "⋙",
      "&Gopf;": "𝔾",
      "&GreaterEqual;": "≥",
      "&GreaterEqualLess;": "⋛",
      "&GreaterFullEqual;": "≧",
      "&GreaterGreater;": "⪢",
      "&GreaterLess;": "≷",
      "&GreaterSlantEqual;": "⩾",
      "&GreaterTilde;": "≳",
      "&Gscr;": "𝒢",
      "&Gt;": "≫",
      "&HARDcy;": "Ъ",
      "&Hacek;": "ˇ",
      "&Hat;": "^",
      "&Hcirc;": "Ĥ",
      "&Hfr;": "ℌ",
      "&HilbertSpace;": "ℋ",
      "&Hopf;": "ℍ",
      "&HorizontalLine;": "─",
      "&Hscr;": "ℋ",
      "&Hstrok;": "Ħ",
      "&HumpDownHump;": "≎",
      "&HumpEqual;": "≏",
      "&IEcy;": "Е",
      "&IJlig;": "Ĳ",
      "&IOcy;": "Ё",
      "&Iacute": "Í",
      "&Iacute;": "Í",
      "&Icirc": "Î",
      "&Icirc;": "Î",
      "&Icy;": "И",
      "&Idot;": "İ",
      "&Ifr;": "ℑ",
      "&Igrave": "Ì",
      "&Igrave;": "Ì",
      "&Im;": "ℑ",
      "&Imacr;": "Ī",
      "&ImaginaryI;": "ⅈ",
      "&Implies;": "⇒",
      "&Int;": "∬",
      "&Integral;": "∫",
      "&Intersection;": "⋂",
      "&InvisibleComma;": "⁣",
      "&InvisibleTimes;": "⁢",
      "&Iogon;": "Į",
      "&Iopf;": "𝕀",
      "&Iota;": "Ι",
      "&Iscr;": "ℐ",
      "&Itilde;": "Ĩ",
      "&Iukcy;": "І",
      "&Iuml": "Ï",
      "&Iuml;": "Ï",
      "&Jcirc;": "Ĵ",
      "&Jcy;": "Й",
      "&Jfr;": "𝔍",
      "&Jopf;": "𝕁",
      "&Jscr;": "𝒥",
      "&Jsercy;": "Ј",
      "&Jukcy;": "Є",
      "&KHcy;": "Х",
      "&KJcy;": "Ќ",
      "&Kappa;": "Κ",
      "&Kcedil;": "Ķ",
      "&Kcy;": "К",
      "&Kfr;": "𝔎",
      "&Kopf;": "𝕂",
      "&Kscr;": "𝒦",
      "&LJcy;": "Љ",
      "&LT": "<",
      "&LT;": "<",
      "&Lacute;": "Ĺ",
      "&Lambda;": "Λ",
      "&Lang;": "⟪",
      "&Laplacetrf;": "ℒ",
      "&Larr;": "↞",
      "&Lcaron;": "Ľ",
      "&Lcedil;": "Ļ",
      "&Lcy;": "Л",
      "&LeftAngleBracket;": "⟨",
      "&LeftArrow;": "←",
      "&LeftArrowBar;": "⇤",
      "&LeftArrowRightArrow;": "⇆",
      "&LeftCeiling;": "⌈",
      "&LeftDoubleBracket;": "⟦",
      "&LeftDownTeeVector;": "⥡",
      "&LeftDownVector;": "⇃",
      "&LeftDownVectorBar;": "⥙",
      "&LeftFloor;": "⌊",
      "&LeftRightArrow;": "↔",
      "&LeftRightVector;": "⥎",
      "&LeftTee;": "⊣",
      "&LeftTeeArrow;": "↤",
      "&LeftTeeVector;": "⥚",
      "&LeftTriangle;": "⊲",
      "&LeftTriangleBar;": "⧏",
      "&LeftTriangleEqual;": "⊴",
      "&LeftUpDownVector;": "⥑",
      "&LeftUpTeeVector;": "⥠",
      "&LeftUpVector;": "↿",
      "&LeftUpVectorBar;": "⥘",
      "&LeftVector;": "↼",
      "&LeftVectorBar;": "⥒",
      "&Leftarrow;": "⇐",
      "&Leftrightarrow;": "⇔",
      "&LessEqualGreater;": "⋚",
      "&LessFullEqual;": "≦",
      "&LessGreater;": "≶",
      "&LessLess;": "⪡",
      "&LessSlantEqual;": "⩽",
      "&LessTilde;": "≲",
      "&Lfr;": "𝔏",
      "&Ll;": "⋘",
      "&Lleftarrow;": "⇚",
      "&Lmidot;": "Ŀ",
      "&LongLeftArrow;": "⟵",
      "&LongLeftRightArrow;": "⟷",
      "&LongRightArrow;": "⟶",
      "&Longleftarrow;": "⟸",
      "&Longleftrightarrow;": "⟺",
      "&Longrightarrow;": "⟹",
      "&Lopf;": "𝕃",
      "&LowerLeftArrow;": "↙",
      "&LowerRightArrow;": "↘",
      "&Lscr;": "ℒ",
      "&Lsh;": "↰",
      "&Lstrok;": "Ł",
      "&Lt;": "≪",
      "&Map;": "⤅",
      "&Mcy;": "М",
      "&MediumSpace;": " ",
      "&Mellintrf;": "ℳ",
      "&Mfr;": "𝔐",
      "&MinusPlus;": "∓",
      "&Mopf;": "𝕄",
      "&Mscr;": "ℳ",
      "&Mu;": "Μ",
      "&NJcy;": "Њ",
      "&Nacute;": "Ń",
      "&Ncaron;": "Ň",
      "&Ncedil;": "Ņ",
      "&Ncy;": "Н",
      "&NegativeMediumSpace;": "​",
      "&NegativeThickSpace;": "​",
      "&NegativeThinSpace;": "​",
      "&NegativeVeryThinSpace;": "​",
      "&NestedGreaterGreater;": "≫",
      "&NestedLessLess;": "≪",
      "&NewLine;": "\n",
      "&Nfr;": "𝔑",
      "&NoBreak;": "⁠",
      "&NonBreakingSpace;": " ",
      "&Nopf;": "ℕ",
      "&Not;": "⫬",
      "&NotCongruent;": "≢",
      "&NotCupCap;": "≭",
      "&NotDoubleVerticalBar;": "∦",
      "&NotElement;": "∉",
      "&NotEqual;": "≠",
      "&NotEqualTilde;": "≂̸",
      "&NotExists;": "∄",
      "&NotGreater;": "≯",
      "&NotGreaterEqual;": "≱",
      "&NotGreaterFullEqual;": "≧̸",
      "&NotGreaterGreater;": "≫̸",
      "&NotGreaterLess;": "≹",
      "&NotGreaterSlantEqual;": "⩾̸",
      "&NotGreaterTilde;": "≵",
      "&NotHumpDownHump;": "≎̸",
      "&NotHumpEqual;": "≏̸",
      "&NotLeftTriangle;": "⋪",
      "&NotLeftTriangleBar;": "⧏̸",
      "&NotLeftTriangleEqual;": "⋬",
      "&NotLess;": "≮",
      "&NotLessEqual;": "≰",
      "&NotLessGreater;": "≸",
      "&NotLessLess;": "≪̸",
      "&NotLessSlantEqual;": "⩽̸",
      "&NotLessTilde;": "≴",
      "&NotNestedGreaterGreater;": "⪢̸",
      "&NotNestedLessLess;": "⪡̸",
      "&NotPrecedes;": "⊀",
      "&NotPrecedesEqual;": "⪯̸",
      "&NotPrecedesSlantEqual;": "⋠",
      "&NotReverseElement;": "∌",
      "&NotRightTriangle;": "⋫",
      "&NotRightTriangleBar;": "⧐̸",
      "&NotRightTriangleEqual;": "⋭",
      "&NotSquareSubset;": "⊏̸",
      "&NotSquareSubsetEqual;": "⋢",
      "&NotSquareSuperset;": "⊐̸",
      "&NotSquareSupersetEqual;": "⋣",
      "&NotSubset;": "⊂⃒",
      "&NotSubsetEqual;": "⊈",
      "&NotSucceeds;": "⊁",
      "&NotSucceedsEqual;": "⪰̸",
      "&NotSucceedsSlantEqual;": "⋡",
      "&NotSucceedsTilde;": "≿̸",
      "&NotSuperset;": "⊃⃒",
      "&NotSupersetEqual;": "⊉",
      "&NotTilde;": "≁",
      "&NotTildeEqual;": "≄",
      "&NotTildeFullEqual;": "≇",
      "&NotTildeTilde;": "≉",
      "&NotVerticalBar;": "∤",
      "&Nscr;": "𝒩",
      "&Ntilde": "Ñ",
      "&Ntilde;": "Ñ",
      "&Nu;": "Ν",
      "&OElig;": "Œ",
      "&Oacute": "Ó",
      "&Oacute;": "Ó",
      "&Ocirc": "Ô",
      "&Ocirc;": "Ô",
      "&Ocy;": "О",
      "&Odblac;": "Ő",
      "&Ofr;": "𝔒",
      "&Ograve": "Ò",
      "&Ograve;": "Ò",
      "&Omacr;": "Ō",
      "&Omega;": "Ω",
      "&Omicron;": "Ο",
      "&Oopf;": "𝕆",
      "&OpenCurlyDoubleQuote;": "“",
      "&OpenCurlyQuote;": "‘",
      "&Or;": "⩔",
      "&Oscr;": "𝒪",
      "&Oslash": "Ø",
      "&Oslash;": "Ø",
      "&Otilde": "Õ",
      "&Otilde;": "Õ",
      "&Otimes;": "⨷",
      "&Ouml": "Ö",
      "&Ouml;": "Ö",
      "&OverBar;": "‾",
      "&OverBrace;": "⏞",
      "&OverBracket;": "⎴",
      "&OverParenthesis;": "⏜",
      "&PartialD;": "∂",
      "&Pcy;": "П",
      "&Pfr;": "𝔓",
      "&Phi;": "Φ",
      "&Pi;": "Π",
      "&PlusMinus;": "±",
      "&Poincareplane;": "ℌ",
      "&Popf;": "ℙ",
      "&Pr;": "⪻",
      "&Precedes;": "≺",
      "&PrecedesEqual;": "⪯",
      "&PrecedesSlantEqual;": "≼",
      "&PrecedesTilde;": "≾",
      "&Prime;": "″",
      "&Product;": "∏",
      "&Proportion;": "∷",
      "&Proportional;": "∝",
      "&Pscr;": "𝒫",
      "&Psi;": "Ψ",
      "&QUOT": '"',
      "&QUOT;": '"',
      "&Qfr;": "𝔔",
      "&Qopf;": "ℚ",
      "&Qscr;": "𝒬",
      "&RBarr;": "⤐",
      "&REG": "®",
      "&REG;": "®",
      "&Racute;": "Ŕ",
      "&Rang;": "⟫",
      "&Rarr;": "↠",
      "&Rarrtl;": "⤖",
      "&Rcaron;": "Ř",
      "&Rcedil;": "Ŗ",
      "&Rcy;": "Р",
      "&Re;": "ℜ",
      "&ReverseElement;": "∋",
      "&ReverseEquilibrium;": "⇋",
      "&ReverseUpEquilibrium;": "⥯",
      "&Rfr;": "ℜ",
      "&Rho;": "Ρ",
      "&RightAngleBracket;": "⟩",
      "&RightArrow;": "→",
      "&RightArrowBar;": "⇥",
      "&RightArrowLeftArrow;": "⇄",
      "&RightCeiling;": "⌉",
      "&RightDoubleBracket;": "⟧",
      "&RightDownTeeVector;": "⥝",
      "&RightDownVector;": "⇂",
      "&RightDownVectorBar;": "⥕",
      "&RightFloor;": "⌋",
      "&RightTee;": "⊢",
      "&RightTeeArrow;": "↦",
      "&RightTeeVector;": "⥛",
      "&RightTriangle;": "⊳",
      "&RightTriangleBar;": "⧐",
      "&RightTriangleEqual;": "⊵",
      "&RightUpDownVector;": "⥏",
      "&RightUpTeeVector;": "⥜",
      "&RightUpVector;": "↾",
      "&RightUpVectorBar;": "⥔",
      "&RightVector;": "⇀",
      "&RightVectorBar;": "⥓",
      "&Rightarrow;": "⇒",
      "&Ropf;": "ℝ",
      "&RoundImplies;": "⥰",
      "&Rrightarrow;": "⇛",
      "&Rscr;": "ℛ",
      "&Rsh;": "↱",
      "&RuleDelayed;": "⧴",
      "&SHCHcy;": "Щ",
      "&SHcy;": "Ш",
      "&SOFTcy;": "Ь",
      "&Sacute;": "Ś",
      "&Sc;": "⪼",
      "&Scaron;": "Š",
      "&Scedil;": "Ş",
      "&Scirc;": "Ŝ",
      "&Scy;": "С",
      "&Sfr;": "𝔖",
      "&ShortDownArrow;": "↓",
      "&ShortLeftArrow;": "←",
      "&ShortRightArrow;": "→",
      "&ShortUpArrow;": "↑",
      "&Sigma;": "Σ",
      "&SmallCircle;": "∘",
      "&Sopf;": "𝕊",
      "&Sqrt;": "√",
      "&Square;": "□",
      "&SquareIntersection;": "⊓",
      "&SquareSubset;": "⊏",
      "&SquareSubsetEqual;": "⊑",
      "&SquareSuperset;": "⊐",
      "&SquareSupersetEqual;": "⊒",
      "&SquareUnion;": "⊔",
      "&Sscr;": "𝒮",
      "&Star;": "⋆",
      "&Sub;": "⋐",
      "&Subset;": "⋐",
      "&SubsetEqual;": "⊆",
      "&Succeeds;": "≻",
      "&SucceedsEqual;": "⪰",
      "&SucceedsSlantEqual;": "≽",
      "&SucceedsTilde;": "≿",
      "&SuchThat;": "∋",
      "&Sum;": "∑",
      "&Sup;": "⋑",
      "&Superset;": "⊃",
      "&SupersetEqual;": "⊇",
      "&Supset;": "⋑",
      "&THORN": "Þ",
      "&THORN;": "Þ",
      "&TRADE;": "™",
      "&TSHcy;": "Ћ",
      "&TScy;": "Ц",
      "&Tab;": "\t",
      "&Tau;": "Τ",
      "&Tcaron;": "Ť",
      "&Tcedil;": "Ţ",
      "&Tcy;": "Т",
      "&Tfr;": "𝔗",
      "&Therefore;": "∴",
      "&Theta;": "Θ",
      "&ThickSpace;": "  ",
      "&ThinSpace;": " ",
      "&Tilde;": "∼",
      "&TildeEqual;": "≃",
      "&TildeFullEqual;": "≅",
      "&TildeTilde;": "≈",
      "&Topf;": "𝕋",
      "&TripleDot;": "⃛",
      "&Tscr;": "𝒯",
      "&Tstrok;": "Ŧ",
      "&Uacute": "Ú",
      "&Uacute;": "Ú",
      "&Uarr;": "↟",
      "&Uarrocir;": "⥉",
      "&Ubrcy;": "Ў",
      "&Ubreve;": "Ŭ",
      "&Ucirc": "Û",
      "&Ucirc;": "Û",
      "&Ucy;": "У",
      "&Udblac;": "Ű",
      "&Ufr;": "𝔘",
      "&Ugrave": "Ù",
      "&Ugrave;": "Ù",
      "&Umacr;": "Ū",
      "&UnderBar;": "_",
      "&UnderBrace;": "⏟",
      "&UnderBracket;": "⎵",
      "&UnderParenthesis;": "⏝",
      "&Union;": "⋃",
      "&UnionPlus;": "⊎",
      "&Uogon;": "Ų",
      "&Uopf;": "𝕌",
      "&UpArrow;": "↑",
      "&UpArrowBar;": "⤒",
      "&UpArrowDownArrow;": "⇅",
      "&UpDownArrow;": "↕",
      "&UpEquilibrium;": "⥮",
      "&UpTee;": "⊥",
      "&UpTeeArrow;": "↥",
      "&Uparrow;": "⇑",
      "&Updownarrow;": "⇕",
      "&UpperLeftArrow;": "↖",
      "&UpperRightArrow;": "↗",
      "&Upsi;": "ϒ",
      "&Upsilon;": "Υ",
      "&Uring;": "Ů",
      "&Uscr;": "𝒰",
      "&Utilde;": "Ũ",
      "&Uuml": "Ü",
      "&Uuml;": "Ü",
      "&VDash;": "⊫",
      "&Vbar;": "⫫",
      "&Vcy;": "В",
      "&Vdash;": "⊩",
      "&Vdashl;": "⫦",
      "&Vee;": "⋁",
      "&Verbar;": "‖",
      "&Vert;": "‖",
      "&VerticalBar;": "∣",
      "&VerticalLine;": "|",
      "&VerticalSeparator;": "❘",
      "&VerticalTilde;": "≀",
      "&VeryThinSpace;": " ",
      "&Vfr;": "𝔙",
      "&Vopf;": "𝕍",
      "&Vscr;": "𝒱",
      "&Vvdash;": "⊪",
      "&Wcirc;": "Ŵ",
      "&Wedge;": "⋀",
      "&Wfr;": "𝔚",
      "&Wopf;": "𝕎",
      "&Wscr;": "𝒲",
      "&Xfr;": "𝔛",
      "&Xi;": "Ξ",
      "&Xopf;": "𝕏",
      "&Xscr;": "𝒳",
      "&YAcy;": "Я",
      "&YIcy;": "Ї",
      "&YUcy;": "Ю",
      "&Yacute": "Ý",
      "&Yacute;": "Ý",
      "&Ycirc;": "Ŷ",
      "&Ycy;": "Ы",
      "&Yfr;": "𝔜",
      "&Yopf;": "𝕐",
      "&Yscr;": "𝒴",
      "&Yuml;": "Ÿ",
      "&ZHcy;": "Ж",
      "&Zacute;": "Ź",
      "&Zcaron;": "Ž",
      "&Zcy;": "З",
      "&Zdot;": "Ż",
      "&ZeroWidthSpace;": "​",
      "&Zeta;": "Ζ",
      "&Zfr;": "ℨ",
      "&Zopf;": "ℤ",
      "&Zscr;": "𝒵",
      "&aacute": "á",
      "&aacute;": "á",
      "&abreve;": "ă",
      "&ac;": "∾",
      "&acE;": "∾̳",
      "&acd;": "∿",
      "&acirc": "â",
      "&acirc;": "â",
      "&acute": "´",
      "&acute;": "´",
      "&acy;": "а",
      "&aelig": "æ",
      "&aelig;": "æ",
      "&af;": "⁡",
      "&afr;": "𝔞",
      "&agrave": "à",
      "&agrave;": "à",
      "&alefsym;": "ℵ",
      "&aleph;": "ℵ",
      "&alpha;": "α",
      "&amacr;": "ā",
      "&amalg;": "⨿",
      "&amp": "&",
      "&amp;": "&",
      "&and;": "∧",
      "&andand;": "⩕",
      "&andd;": "⩜",
      "&andslope;": "⩘",
      "&andv;": "⩚",
      "&ang;": "∠",
      "&ange;": "⦤",
      "&angle;": "∠",
      "&angmsd;": "∡",
      "&angmsdaa;": "⦨",
      "&angmsdab;": "⦩",
      "&angmsdac;": "⦪",
      "&angmsdad;": "⦫",
      "&angmsdae;": "⦬",
      "&angmsdaf;": "⦭",
      "&angmsdag;": "⦮",
      "&angmsdah;": "⦯",
      "&angrt;": "∟",
      "&angrtvb;": "⊾",
      "&angrtvbd;": "⦝",
      "&angsph;": "∢",
      "&angst;": "Å",
      "&angzarr;": "⍼",
      "&aogon;": "ą",
      "&aopf;": "𝕒",
      "&ap;": "≈",
      "&apE;": "⩰",
      "&apacir;": "⩯",
      "&ape;": "≊",
      "&apid;": "≋",
      "&apos;": "'",
      "&approx;": "≈",
      "&approxeq;": "≊",
      "&aring": "å",
      "&aring;": "å",
      "&ascr;": "𝒶",
      "&ast;": "*",
      "&asymp;": "≈",
      "&asympeq;": "≍",
      "&atilde": "ã",
      "&atilde;": "ã",
      "&auml": "ä",
      "&auml;": "ä",
      "&awconint;": "∳",
      "&awint;": "⨑",
      "&bNot;": "⫭",
      "&backcong;": "≌",
      "&backepsilon;": "϶",
      "&backprime;": "‵",
      "&backsim;": "∽",
      "&backsimeq;": "⋍",
      "&barvee;": "⊽",
      "&barwed;": "⌅",
      "&barwedge;": "⌅",
      "&bbrk;": "⎵",
      "&bbrktbrk;": "⎶",
      "&bcong;": "≌",
      "&bcy;": "б",
      "&bdquo;": "„",
      "&becaus;": "∵",
      "&because;": "∵",
      "&bemptyv;": "⦰",
      "&bepsi;": "϶",
      "&bernou;": "ℬ",
      "&beta;": "β",
      "&beth;": "ℶ",
      "&between;": "≬",
      "&bfr;": "𝔟",
      "&bigcap;": "⋂",
      "&bigcirc;": "◯",
      "&bigcup;": "⋃",
      "&bigodot;": "⨀",
      "&bigoplus;": "⨁",
      "&bigotimes;": "⨂",
      "&bigsqcup;": "⨆",
      "&bigstar;": "★",
      "&bigtriangledown;": "▽",
      "&bigtriangleup;": "△",
      "&biguplus;": "⨄",
      "&bigvee;": "⋁",
      "&bigwedge;": "⋀",
      "&bkarow;": "⤍",
      "&blacklozenge;": "⧫",
      "&blacksquare;": "▪",
      "&blacktriangle;": "▴",
      "&blacktriangledown;": "▾",
      "&blacktriangleleft;": "◂",
      "&blacktriangleright;": "▸",
      "&blank;": "␣",
      "&blk12;": "▒",
      "&blk14;": "░",
      "&blk34;": "▓",
      "&block;": "█",
      "&bne;": "=⃥",
      "&bnequiv;": "≡⃥",
      "&bnot;": "⌐",
      "&bopf;": "𝕓",
      "&bot;": "⊥",
      "&bottom;": "⊥",
      "&bowtie;": "⋈",
      "&boxDL;": "╗",
      "&boxDR;": "╔",
      "&boxDl;": "╖",
      "&boxDr;": "╓",
      "&boxH;": "═",
      "&boxHD;": "╦",
      "&boxHU;": "╩",
      "&boxHd;": "╤",
      "&boxHu;": "╧",
      "&boxUL;": "╝",
      "&boxUR;": "╚",
      "&boxUl;": "╜",
      "&boxUr;": "╙",
      "&boxV;": "║",
      "&boxVH;": "╬",
      "&boxVL;": "╣",
      "&boxVR;": "╠",
      "&boxVh;": "╫",
      "&boxVl;": "╢",
      "&boxVr;": "╟",
      "&boxbox;": "⧉",
      "&boxdL;": "╕",
      "&boxdR;": "╒",
      "&boxdl;": "┐",
      "&boxdr;": "┌",
      "&boxh;": "─",
      "&boxhD;": "╥",
      "&boxhU;": "╨",
      "&boxhd;": "┬",
      "&boxhu;": "┴",
      "&boxminus;": "⊟",
      "&boxplus;": "⊞",
      "&boxtimes;": "⊠",
      "&boxuL;": "╛",
      "&boxuR;": "╘",
      "&boxul;": "┘",
      "&boxur;": "└",
      "&boxv;": "│",
      "&boxvH;": "╪",
      "&boxvL;": "╡",
      "&boxvR;": "╞",
      "&boxvh;": "┼",
      "&boxvl;": "┤",
      "&boxvr;": "├",
      "&bprime;": "‵",
      "&breve;": "˘",
      "&brvbar": "¦",
      "&brvbar;": "¦",
      "&bscr;": "𝒷",
      "&bsemi;": "⁏",
      "&bsim;": "∽",
      "&bsime;": "⋍",
      "&bsol;": "\\",
      "&bsolb;": "⧅",
      "&bsolhsub;": "⟈",
      "&bull;": "•",
      "&bullet;": "•",
      "&bump;": "≎",
      "&bumpE;": "⪮",
      "&bumpe;": "≏",
      "&bumpeq;": "≏",
      "&cacute;": "ć",
      "&cap;": "∩",
      "&capand;": "⩄",
      "&capbrcup;": "⩉",
      "&capcap;": "⩋",
      "&capcup;": "⩇",
      "&capdot;": "⩀",
      "&caps;": "∩︀",
      "&caret;": "⁁",
      "&caron;": "ˇ",
      "&ccaps;": "⩍",
      "&ccaron;": "č",
      "&ccedil": "ç",
      "&ccedil;": "ç",
      "&ccirc;": "ĉ",
      "&ccups;": "⩌",
      "&ccupssm;": "⩐",
      "&cdot;": "ċ",
      "&cedil": "¸",
      "&cedil;": "¸",
      "&cemptyv;": "⦲",
      "&cent": "¢",
      "&cent;": "¢",
      "&centerdot;": "·",
      "&cfr;": "𝔠",
      "&chcy;": "ч",
      "&check;": "✓",
      "&checkmark;": "✓",
      "&chi;": "χ",
      "&cir;": "○",
      "&cirE;": "⧃",
      "&circ;": "ˆ",
      "&circeq;": "≗",
      "&circlearrowleft;": "↺",
      "&circlearrowright;": "↻",
      "&circledR;": "®",
      "&circledS;": "Ⓢ",
      "&circledast;": "⊛",
      "&circledcirc;": "⊚",
      "&circleddash;": "⊝",
      "&cire;": "≗",
      "&cirfnint;": "⨐",
      "&cirmid;": "⫯",
      "&cirscir;": "⧂",
      "&clubs;": "♣",
      "&clubsuit;": "♣",
      "&colon;": ":",
      "&colone;": "≔",
      "&coloneq;": "≔",
      "&comma;": ",",
      "&commat;": "@",
      "&comp;": "∁",
      "&compfn;": "∘",
      "&complement;": "∁",
      "&complexes;": "ℂ",
      "&cong;": "≅",
      "&congdot;": "⩭",
      "&conint;": "∮",
      "&copf;": "𝕔",
      "&coprod;": "∐",
      "&copy": "©",
      "&copy;": "©",
      "&copysr;": "℗",
      "&crarr;": "↵",
      "&cross;": "✗",
      "&cscr;": "𝒸",
      "&csub;": "⫏",
      "&csube;": "⫑",
      "&csup;": "⫐",
      "&csupe;": "⫒",
      "&ctdot;": "⋯",
      "&cudarrl;": "⤸",
      "&cudarrr;": "⤵",
      "&cuepr;": "⋞",
      "&cuesc;": "⋟",
      "&cularr;": "↶",
      "&cularrp;": "⤽",
      "&cup;": "∪",
      "&cupbrcap;": "⩈",
      "&cupcap;": "⩆",
      "&cupcup;": "⩊",
      "&cupdot;": "⊍",
      "&cupor;": "⩅",
      "&cups;": "∪︀",
      "&curarr;": "↷",
      "&curarrm;": "⤼",
      "&curlyeqprec;": "⋞",
      "&curlyeqsucc;": "⋟",
      "&curlyvee;": "⋎",
      "&curlywedge;": "⋏",
      "&curren": "¤",
      "&curren;": "¤",
      "&curvearrowleft;": "↶",
      "&curvearrowright;": "↷",
      "&cuvee;": "⋎",
      "&cuwed;": "⋏",
      "&cwconint;": "∲",
      "&cwint;": "∱",
      "&cylcty;": "⌭",
      "&dArr;": "⇓",
      "&dHar;": "⥥",
      "&dagger;": "†",
      "&daleth;": "ℸ",
      "&darr;": "↓",
      "&dash;": "‐",
      "&dashv;": "⊣",
      "&dbkarow;": "⤏",
      "&dblac;": "˝",
      "&dcaron;": "ď",
      "&dcy;": "д",
      "&dd;": "ⅆ",
      "&ddagger;": "‡",
      "&ddarr;": "⇊",
      "&ddotseq;": "⩷",
      "&deg": "°",
      "&deg;": "°",
      "&delta;": "δ",
      "&demptyv;": "⦱",
      "&dfisht;": "⥿",
      "&dfr;": "𝔡",
      "&dharl;": "⇃",
      "&dharr;": "⇂",
      "&diam;": "⋄",
      "&diamond;": "⋄",
      "&diamondsuit;": "♦",
      "&diams;": "♦",
      "&die;": "¨",
      "&digamma;": "ϝ",
      "&disin;": "⋲",
      "&div;": "÷",
      "&divide": "÷",
      "&divide;": "÷",
      "&divideontimes;": "⋇",
      "&divonx;": "⋇",
      "&djcy;": "ђ",
      "&dlcorn;": "⌞",
      "&dlcrop;": "⌍",
      "&dollar;": "$",
      "&dopf;": "𝕕",
      "&dot;": "˙",
      "&doteq;": "≐",
      "&doteqdot;": "≑",
      "&dotminus;": "∸",
      "&dotplus;": "∔",
      "&dotsquare;": "⊡",
      "&doublebarwedge;": "⌆",
      "&downarrow;": "↓",
      "&downdownarrows;": "⇊",
      "&downharpoonleft;": "⇃",
      "&downharpoonright;": "⇂",
      "&drbkarow;": "⤐",
      "&drcorn;": "⌟",
      "&drcrop;": "⌌",
      "&dscr;": "𝒹",
      "&dscy;": "ѕ",
      "&dsol;": "⧶",
      "&dstrok;": "đ",
      "&dtdot;": "⋱",
      "&dtri;": "▿",
      "&dtrif;": "▾",
      "&duarr;": "⇵",
      "&duhar;": "⥯",
      "&dwangle;": "⦦",
      "&dzcy;": "џ",
      "&dzigrarr;": "⟿",
      "&eDDot;": "⩷",
      "&eDot;": "≑",
      "&eacute": "é",
      "&eacute;": "é",
      "&easter;": "⩮",
      "&ecaron;": "ě",
      "&ecir;": "≖",
      "&ecirc": "ê",
      "&ecirc;": "ê",
      "&ecolon;": "≕",
      "&ecy;": "э",
      "&edot;": "ė",
      "&ee;": "ⅇ",
      "&efDot;": "≒",
      "&efr;": "𝔢",
      "&eg;": "⪚",
      "&egrave": "è",
      "&egrave;": "è",
      "&egs;": "⪖",
      "&egsdot;": "⪘",
      "&el;": "⪙",
      "&elinters;": "⏧",
      "&ell;": "ℓ",
      "&els;": "⪕",
      "&elsdot;": "⪗",
      "&emacr;": "ē",
      "&empty;": "∅",
      "&emptyset;": "∅",
      "&emptyv;": "∅",
      "&emsp13;": " ",
      "&emsp14;": " ",
      "&emsp;": " ",
      "&eng;": "ŋ",
      "&ensp;": " ",
      "&eogon;": "ę",
      "&eopf;": "𝕖",
      "&epar;": "⋕",
      "&eparsl;": "⧣",
      "&eplus;": "⩱",
      "&epsi;": "ε",
      "&epsilon;": "ε",
      "&epsiv;": "ϵ",
      "&eqcirc;": "≖",
      "&eqcolon;": "≕",
      "&eqsim;": "≂",
      "&eqslantgtr;": "⪖",
      "&eqslantless;": "⪕",
      "&equals;": "=",
      "&equest;": "≟",
      "&equiv;": "≡",
      "&equivDD;": "⩸",
      "&eqvparsl;": "⧥",
      "&erDot;": "≓",
      "&erarr;": "⥱",
      "&escr;": "ℯ",
      "&esdot;": "≐",
      "&esim;": "≂",
      "&eta;": "η",
      "&eth": "ð",
      "&eth;": "ð",
      "&euml": "ë",
      "&euml;": "ë",
      "&euro;": "€",
      "&excl;": "!",
      "&exist;": "∃",
      "&expectation;": "ℰ",
      "&exponentiale;": "ⅇ",
      "&fallingdotseq;": "≒",
      "&fcy;": "ф",
      "&female;": "♀",
      "&ffilig;": "ﬃ",
      "&fflig;": "ﬀ",
      "&ffllig;": "ﬄ",
      "&ffr;": "𝔣",
      "&filig;": "ﬁ",
      "&fjlig;": "fj",
      "&flat;": "♭",
      "&fllig;": "ﬂ",
      "&fltns;": "▱",
      "&fnof;": "ƒ",
      "&fopf;": "𝕗",
      "&forall;": "∀",
      "&fork;": "⋔",
      "&forkv;": "⫙",
      "&fpartint;": "⨍",
      "&frac12": "½",
      "&frac12;": "½",
      "&frac13;": "⅓",
      "&frac14": "¼",
      "&frac14;": "¼",
      "&frac15;": "⅕",
      "&frac16;": "⅙",
      "&frac18;": "⅛",
      "&frac23;": "⅔",
      "&frac25;": "⅖",
      "&frac34": "¾",
      "&frac34;": "¾",
      "&frac35;": "⅗",
      "&frac38;": "⅜",
      "&frac45;": "⅘",
      "&frac56;": "⅚",
      "&frac58;": "⅝",
      "&frac78;": "⅞",
      "&frasl;": "⁄",
      "&frown;": "⌢",
      "&fscr;": "𝒻",
      "&gE;": "≧",
      "&gEl;": "⪌",
      "&gacute;": "ǵ",
      "&gamma;": "γ",
      "&gammad;": "ϝ",
      "&gap;": "⪆",
      "&gbreve;": "ğ",
      "&gcirc;": "ĝ",
      "&gcy;": "г",
      "&gdot;": "ġ",
      "&ge;": "≥",
      "&gel;": "⋛",
      "&geq;": "≥",
      "&geqq;": "≧",
      "&geqslant;": "⩾",
      "&ges;": "⩾",
      "&gescc;": "⪩",
      "&gesdot;": "⪀",
      "&gesdoto;": "⪂",
      "&gesdotol;": "⪄",
      "&gesl;": "⋛︀",
      "&gesles;": "⪔",
      "&gfr;": "𝔤",
      "&gg;": "≫",
      "&ggg;": "⋙",
      "&gimel;": "ℷ",
      "&gjcy;": "ѓ",
      "&gl;": "≷",
      "&glE;": "⪒",
      "&gla;": "⪥",
      "&glj;": "⪤",
      "&gnE;": "≩",
      "&gnap;": "⪊",
      "&gnapprox;": "⪊",
      "&gne;": "⪈",
      "&gneq;": "⪈",
      "&gneqq;": "≩",
      "&gnsim;": "⋧",
      "&gopf;": "𝕘",
      "&grave;": "`",
      "&gscr;": "ℊ",
      "&gsim;": "≳",
      "&gsime;": "⪎",
      "&gsiml;": "⪐",
      "&gt": ">",
      "&gt;": ">",
      "&gtcc;": "⪧",
      "&gtcir;": "⩺",
      "&gtdot;": "⋗",
      "&gtlPar;": "⦕",
      "&gtquest;": "⩼",
      "&gtrapprox;": "⪆",
      "&gtrarr;": "⥸",
      "&gtrdot;": "⋗",
      "&gtreqless;": "⋛",
      "&gtreqqless;": "⪌",
      "&gtrless;": "≷",
      "&gtrsim;": "≳",
      "&gvertneqq;": "≩︀",
      "&gvnE;": "≩︀",
      "&hArr;": "⇔",
      "&hairsp;": " ",
      "&half;": "½",
      "&hamilt;": "ℋ",
      "&hardcy;": "ъ",
      "&harr;": "↔",
      "&harrcir;": "⥈",
      "&harrw;": "↭",
      "&hbar;": "ℏ",
      "&hcirc;": "ĥ",
      "&hearts;": "♥",
      "&heartsuit;": "♥",
      "&hellip;": "…",
      "&hercon;": "⊹",
      "&hfr;": "𝔥",
      "&hksearow;": "⤥",
      "&hkswarow;": "⤦",
      "&hoarr;": "⇿",
      "&homtht;": "∻",
      "&hookleftarrow;": "↩",
      "&hookrightarrow;": "↪",
      "&hopf;": "𝕙",
      "&horbar;": "―",
      "&hscr;": "𝒽",
      "&hslash;": "ℏ",
      "&hstrok;": "ħ",
      "&hybull;": "⁃",
      "&hyphen;": "‐",
      "&iacute": "í",
      "&iacute;": "í",
      "&ic;": "⁣",
      "&icirc": "î",
      "&icirc;": "î",
      "&icy;": "и",
      "&iecy;": "е",
      "&iexcl": "¡",
      "&iexcl;": "¡",
      "&iff;": "⇔",
      "&ifr;": "𝔦",
      "&igrave": "ì",
      "&igrave;": "ì",
      "&ii;": "ⅈ",
      "&iiiint;": "⨌",
      "&iiint;": "∭",
      "&iinfin;": "⧜",
      "&iiota;": "℩",
      "&ijlig;": "ĳ",
      "&imacr;": "ī",
      "&image;": "ℑ",
      "&imagline;": "ℐ",
      "&imagpart;": "ℑ",
      "&imath;": "ı",
      "&imof;": "⊷",
      "&imped;": "Ƶ",
      "&in;": "∈",
      "&incare;": "℅",
      "&infin;": "∞",
      "&infintie;": "⧝",
      "&inodot;": "ı",
      "&int;": "∫",
      "&intcal;": "⊺",
      "&integers;": "ℤ",
      "&intercal;": "⊺",
      "&intlarhk;": "⨗",
      "&intprod;": "⨼",
      "&iocy;": "ё",
      "&iogon;": "į",
      "&iopf;": "𝕚",
      "&iota;": "ι",
      "&iprod;": "⨼",
      "&iquest": "¿",
      "&iquest;": "¿",
      "&iscr;": "𝒾",
      "&isin;": "∈",
      "&isinE;": "⋹",
      "&isindot;": "⋵",
      "&isins;": "⋴",
      "&isinsv;": "⋳",
      "&isinv;": "∈",
      "&it;": "⁢",
      "&itilde;": "ĩ",
      "&iukcy;": "і",
      "&iuml": "ï",
      "&iuml;": "ï",
      "&jcirc;": "ĵ",
      "&jcy;": "й",
      "&jfr;": "𝔧",
      "&jmath;": "ȷ",
      "&jopf;": "𝕛",
      "&jscr;": "𝒿",
      "&jsercy;": "ј",
      "&jukcy;": "є",
      "&kappa;": "κ",
      "&kappav;": "ϰ",
      "&kcedil;": "ķ",
      "&kcy;": "к",
      "&kfr;": "𝔨",
      "&kgreen;": "ĸ",
      "&khcy;": "х",
      "&kjcy;": "ќ",
      "&kopf;": "𝕜",
      "&kscr;": "𝓀",
      "&lAarr;": "⇚",
      "&lArr;": "⇐",
      "&lAtail;": "⤛",
      "&lBarr;": "⤎",
      "&lE;": "≦",
      "&lEg;": "⪋",
      "&lHar;": "⥢",
      "&lacute;": "ĺ",
      "&laemptyv;": "⦴",
      "&lagran;": "ℒ",
      "&lambda;": "λ",
      "&lang;": "⟨",
      "&langd;": "⦑",
      "&langle;": "⟨",
      "&lap;": "⪅",
      "&laquo": "«",
      "&laquo;": "«",
      "&larr;": "←",
      "&larrb;": "⇤",
      "&larrbfs;": "⤟",
      "&larrfs;": "⤝",
      "&larrhk;": "↩",
      "&larrlp;": "↫",
      "&larrpl;": "⤹",
      "&larrsim;": "⥳",
      "&larrtl;": "↢",
      "&lat;": "⪫",
      "&latail;": "⤙",
      "&late;": "⪭",
      "&lates;": "⪭︀",
      "&lbarr;": "⤌",
      "&lbbrk;": "❲",
      "&lbrace;": "{",
      "&lbrack;": "[",
      "&lbrke;": "⦋",
      "&lbrksld;": "⦏",
      "&lbrkslu;": "⦍",
      "&lcaron;": "ľ",
      "&lcedil;": "ļ",
      "&lceil;": "⌈",
      "&lcub;": "{",
      "&lcy;": "л",
      "&ldca;": "⤶",
      "&ldquo;": "“",
      "&ldquor;": "„",
      "&ldrdhar;": "⥧",
      "&ldrushar;": "⥋",
      "&ldsh;": "↲",
      "&le;": "≤",
      "&leftarrow;": "←",
      "&leftarrowtail;": "↢",
      "&leftharpoondown;": "↽",
      "&leftharpoonup;": "↼",
      "&leftleftarrows;": "⇇",
      "&leftrightarrow;": "↔",
      "&leftrightarrows;": "⇆",
      "&leftrightharpoons;": "⇋",
      "&leftrightsquigarrow;": "↭",
      "&leftthreetimes;": "⋋",
      "&leg;": "⋚",
      "&leq;": "≤",
      "&leqq;": "≦",
      "&leqslant;": "⩽",
      "&les;": "⩽",
      "&lescc;": "⪨",
      "&lesdot;": "⩿",
      "&lesdoto;": "⪁",
      "&lesdotor;": "⪃",
      "&lesg;": "⋚︀",
      "&lesges;": "⪓",
      "&lessapprox;": "⪅",
      "&lessdot;": "⋖",
      "&lesseqgtr;": "⋚",
      "&lesseqqgtr;": "⪋",
      "&lessgtr;": "≶",
      "&lesssim;": "≲",
      "&lfisht;": "⥼",
      "&lfloor;": "⌊",
      "&lfr;": "𝔩",
      "&lg;": "≶",
      "&lgE;": "⪑",
      "&lhard;": "↽",
      "&lharu;": "↼",
      "&lharul;": "⥪",
      "&lhblk;": "▄",
      "&ljcy;": "љ",
      "&ll;": "≪",
      "&llarr;": "⇇",
      "&llcorner;": "⌞",
      "&llhard;": "⥫",
      "&lltri;": "◺",
      "&lmidot;": "ŀ",
      "&lmoust;": "⎰",
      "&lmoustache;": "⎰",
      "&lnE;": "≨",
      "&lnap;": "⪉",
      "&lnapprox;": "⪉",
      "&lne;": "⪇",
      "&lneq;": "⪇",
      "&lneqq;": "≨",
      "&lnsim;": "⋦",
      "&loang;": "⟬",
      "&loarr;": "⇽",
      "&lobrk;": "⟦",
      "&longleftarrow;": "⟵",
      "&longleftrightarrow;": "⟷",
      "&longmapsto;": "⟼",
      "&longrightarrow;": "⟶",
      "&looparrowleft;": "↫",
      "&looparrowright;": "↬",
      "&lopar;": "⦅",
      "&lopf;": "𝕝",
      "&loplus;": "⨭",
      "&lotimes;": "⨴",
      "&lowast;": "∗",
      "&lowbar;": "_",
      "&loz;": "◊",
      "&lozenge;": "◊",
      "&lozf;": "⧫",
      "&lpar;": "(",
      "&lparlt;": "⦓",
      "&lrarr;": "⇆",
      "&lrcorner;": "⌟",
      "&lrhar;": "⇋",
      "&lrhard;": "⥭",
      "&lrm;": "‎",
      "&lrtri;": "⊿",
      "&lsaquo;": "‹",
      "&lscr;": "𝓁",
      "&lsh;": "↰",
      "&lsim;": "≲",
      "&lsime;": "⪍",
      "&lsimg;": "⪏",
      "&lsqb;": "[",
      "&lsquo;": "‘",
      "&lsquor;": "‚",
      "&lstrok;": "ł",
      "&lt": "<",
      "&lt;": "<",
      "&ltcc;": "⪦",
      "&ltcir;": "⩹",
      "&ltdot;": "⋖",
      "&lthree;": "⋋",
      "&ltimes;": "⋉",
      "&ltlarr;": "⥶",
      "&ltquest;": "⩻",
      "&ltrPar;": "⦖",
      "&ltri;": "◃",
      "&ltrie;": "⊴",
      "&ltrif;": "◂",
      "&lurdshar;": "⥊",
      "&luruhar;": "⥦",
      "&lvertneqq;": "≨︀",
      "&lvnE;": "≨︀",
      "&mDDot;": "∺",
      "&macr": "¯",
      "&macr;": "¯",
      "&male;": "♂",
      "&malt;": "✠",
      "&maltese;": "✠",
      "&map;": "↦",
      "&mapsto;": "↦",
      "&mapstodown;": "↧",
      "&mapstoleft;": "↤",
      "&mapstoup;": "↥",
      "&marker;": "▮",
      "&mcomma;": "⨩",
      "&mcy;": "м",
      "&mdash;": "—",
      "&measuredangle;": "∡",
      "&mfr;": "𝔪",
      "&mho;": "℧",
      "&micro": "µ",
      "&micro;": "µ",
      "&mid;": "∣",
      "&midast;": "*",
      "&midcir;": "⫰",
      "&middot": "·",
      "&middot;": "·",
      "&minus;": "−",
      "&minusb;": "⊟",
      "&minusd;": "∸",
      "&minusdu;": "⨪",
      "&mlcp;": "⫛",
      "&mldr;": "…",
      "&mnplus;": "∓",
      "&models;": "⊧",
      "&mopf;": "𝕞",
      "&mp;": "∓",
      "&mscr;": "𝓂",
      "&mstpos;": "∾",
      "&mu;": "μ",
      "&multimap;": "⊸",
      "&mumap;": "⊸",
      "&nGg;": "⋙̸",
      "&nGt;": "≫⃒",
      "&nGtv;": "≫̸",
      "&nLeftarrow;": "⇍",
      "&nLeftrightarrow;": "⇎",
      "&nLl;": "⋘̸",
      "&nLt;": "≪⃒",
      "&nLtv;": "≪̸",
      "&nRightarrow;": "⇏",
      "&nVDash;": "⊯",
      "&nVdash;": "⊮",
      "&nabla;": "∇",
      "&nacute;": "ń",
      "&nang;": "∠⃒",
      "&nap;": "≉",
      "&napE;": "⩰̸",
      "&napid;": "≋̸",
      "&napos;": "ŉ",
      "&napprox;": "≉",
      "&natur;": "♮",
      "&natural;": "♮",
      "&naturals;": "ℕ",
      "&nbsp": " ",
      "&nbsp;": " ",
      "&nbump;": "≎̸",
      "&nbumpe;": "≏̸",
      "&ncap;": "⩃",
      "&ncaron;": "ň",
      "&ncedil;": "ņ",
      "&ncong;": "≇",
      "&ncongdot;": "⩭̸",
      "&ncup;": "⩂",
      "&ncy;": "н",
      "&ndash;": "–",
      "&ne;": "≠",
      "&neArr;": "⇗",
      "&nearhk;": "⤤",
      "&nearr;": "↗",
      "&nearrow;": "↗",
      "&nedot;": "≐̸",
      "&nequiv;": "≢",
      "&nesear;": "⤨",
      "&nesim;": "≂̸",
      "&nexist;": "∄",
      "&nexists;": "∄",
      "&nfr;": "𝔫",
      "&ngE;": "≧̸",
      "&nge;": "≱",
      "&ngeq;": "≱",
      "&ngeqq;": "≧̸",
      "&ngeqslant;": "⩾̸",
      "&nges;": "⩾̸",
      "&ngsim;": "≵",
      "&ngt;": "≯",
      "&ngtr;": "≯",
      "&nhArr;": "⇎",
      "&nharr;": "↮",
      "&nhpar;": "⫲",
      "&ni;": "∋",
      "&nis;": "⋼",
      "&nisd;": "⋺",
      "&niv;": "∋",
      "&njcy;": "њ",
      "&nlArr;": "⇍",
      "&nlE;": "≦̸",
      "&nlarr;": "↚",
      "&nldr;": "‥",
      "&nle;": "≰",
      "&nleftarrow;": "↚",
      "&nleftrightarrow;": "↮",
      "&nleq;": "≰",
      "&nleqq;": "≦̸",
      "&nleqslant;": "⩽̸",
      "&nles;": "⩽̸",
      "&nless;": "≮",
      "&nlsim;": "≴",
      "&nlt;": "≮",
      "&nltri;": "⋪",
      "&nltrie;": "⋬",
      "&nmid;": "∤",
      "&nopf;": "𝕟",
      "&not": "¬",
      "&not;": "¬",
      "&notin;": "∉",
      "&notinE;": "⋹̸",
      "&notindot;": "⋵̸",
      "&notinva;": "∉",
      "&notinvb;": "⋷",
      "&notinvc;": "⋶",
      "&notni;": "∌",
      "&notniva;": "∌",
      "&notnivb;": "⋾",
      "&notnivc;": "⋽",
      "&npar;": "∦",
      "&nparallel;": "∦",
      "&nparsl;": "⫽⃥",
      "&npart;": "∂̸",
      "&npolint;": "⨔",
      "&npr;": "⊀",
      "&nprcue;": "⋠",
      "&npre;": "⪯̸",
      "&nprec;": "⊀",
      "&npreceq;": "⪯̸",
      "&nrArr;": "⇏",
      "&nrarr;": "↛",
      "&nrarrc;": "⤳̸",
      "&nrarrw;": "↝̸",
      "&nrightarrow;": "↛",
      "&nrtri;": "⋫",
      "&nrtrie;": "⋭",
      "&nsc;": "⊁",
      "&nsccue;": "⋡",
      "&nsce;": "⪰̸",
      "&nscr;": "𝓃",
      "&nshortmid;": "∤",
      "&nshortparallel;": "∦",
      "&nsim;": "≁",
      "&nsime;": "≄",
      "&nsimeq;": "≄",
      "&nsmid;": "∤",
      "&nspar;": "∦",
      "&nsqsube;": "⋢",
      "&nsqsupe;": "⋣",
      "&nsub;": "⊄",
      "&nsubE;": "⫅̸",
      "&nsube;": "⊈",
      "&nsubset;": "⊂⃒",
      "&nsubseteq;": "⊈",
      "&nsubseteqq;": "⫅̸",
      "&nsucc;": "⊁",
      "&nsucceq;": "⪰̸",
      "&nsup;": "⊅",
      "&nsupE;": "⫆̸",
      "&nsupe;": "⊉",
      "&nsupset;": "⊃⃒",
      "&nsupseteq;": "⊉",
      "&nsupseteqq;": "⫆̸",
      "&ntgl;": "≹",
      "&ntilde": "ñ",
      "&ntilde;": "ñ",
      "&ntlg;": "≸",
      "&ntriangleleft;": "⋪",
      "&ntrianglelefteq;": "⋬",
      "&ntriangleright;": "⋫",
      "&ntrianglerighteq;": "⋭",
      "&nu;": "ν",
      "&num;": "#",
      "&numero;": "№",
      "&numsp;": " ",
      "&nvDash;": "⊭",
      "&nvHarr;": "⤄",
      "&nvap;": "≍⃒",
      "&nvdash;": "⊬",
      "&nvge;": "≥⃒",
      "&nvgt;": ">⃒",
      "&nvinfin;": "⧞",
      "&nvlArr;": "⤂",
      "&nvle;": "≤⃒",
      "&nvlt;": "<⃒",
      "&nvltrie;": "⊴⃒",
      "&nvrArr;": "⤃",
      "&nvrtrie;": "⊵⃒",
      "&nvsim;": "∼⃒",
      "&nwArr;": "⇖",
      "&nwarhk;": "⤣",
      "&nwarr;": "↖",
      "&nwarrow;": "↖",
      "&nwnear;": "⤧",
      "&oS;": "Ⓢ",
      "&oacute": "ó",
      "&oacute;": "ó",
      "&oast;": "⊛",
      "&ocir;": "⊚",
      "&ocirc": "ô",
      "&ocirc;": "ô",
      "&ocy;": "о",
      "&odash;": "⊝",
      "&odblac;": "ő",
      "&odiv;": "⨸",
      "&odot;": "⊙",
      "&odsold;": "⦼",
      "&oelig;": "œ",
      "&ofcir;": "⦿",
      "&ofr;": "𝔬",
      "&ogon;": "˛",
      "&ograve": "ò",
      "&ograve;": "ò",
      "&ogt;": "⧁",
      "&ohbar;": "⦵",
      "&ohm;": "Ω",
      "&oint;": "∮",
      "&olarr;": "↺",
      "&olcir;": "⦾",
      "&olcross;": "⦻",
      "&oline;": "‾",
      "&olt;": "⧀",
      "&omacr;": "ō",
      "&omega;": "ω",
      "&omicron;": "ο",
      "&omid;": "⦶",
      "&ominus;": "⊖",
      "&oopf;": "𝕠",
      "&opar;": "⦷",
      "&operp;": "⦹",
      "&oplus;": "⊕",
      "&or;": "∨",
      "&orarr;": "↻",
      "&ord;": "⩝",
      "&order;": "ℴ",
      "&orderof;": "ℴ",
      "&ordf": "ª",
      "&ordf;": "ª",
      "&ordm": "º",
      "&ordm;": "º",
      "&origof;": "⊶",
      "&oror;": "⩖",
      "&orslope;": "⩗",
      "&orv;": "⩛",
      "&oscr;": "ℴ",
      "&oslash": "ø",
      "&oslash;": "ø",
      "&osol;": "⊘",
      "&otilde": "õ",
      "&otilde;": "õ",
      "&otimes;": "⊗",
      "&otimesas;": "⨶",
      "&ouml": "ö",
      "&ouml;": "ö",
      "&ovbar;": "⌽",
      "&par;": "∥",
      "&para": "¶",
      "&para;": "¶",
      "&parallel;": "∥",
      "&parsim;": "⫳",
      "&parsl;": "⫽",
      "&part;": "∂",
      "&pcy;": "п",
      "&percnt;": "%",
      "&period;": ".",
      "&permil;": "‰",
      "&perp;": "⊥",
      "&pertenk;": "‱",
      "&pfr;": "𝔭",
      "&phi;": "φ",
      "&phiv;": "ϕ",
      "&phmmat;": "ℳ",
      "&phone;": "☎",
      "&pi;": "π",
      "&pitchfork;": "⋔",
      "&piv;": "ϖ",
      "&planck;": "ℏ",
      "&planckh;": "ℎ",
      "&plankv;": "ℏ",
      "&plus;": "+",
      "&plusacir;": "⨣",
      "&plusb;": "⊞",
      "&pluscir;": "⨢",
      "&plusdo;": "∔",
      "&plusdu;": "⨥",
      "&pluse;": "⩲",
      "&plusmn": "±",
      "&plusmn;": "±",
      "&plussim;": "⨦",
      "&plustwo;": "⨧",
      "&pm;": "±",
      "&pointint;": "⨕",
      "&popf;": "𝕡",
      "&pound": "£",
      "&pound;": "£",
      "&pr;": "≺",
      "&prE;": "⪳",
      "&prap;": "⪷",
      "&prcue;": "≼",
      "&pre;": "⪯",
      "&prec;": "≺",
      "&precapprox;": "⪷",
      "&preccurlyeq;": "≼",
      "&preceq;": "⪯",
      "&precnapprox;": "⪹",
      "&precneqq;": "⪵",
      "&precnsim;": "⋨",
      "&precsim;": "≾",
      "&prime;": "′",
      "&primes;": "ℙ",
      "&prnE;": "⪵",
      "&prnap;": "⪹",
      "&prnsim;": "⋨",
      "&prod;": "∏",
      "&profalar;": "⌮",
      "&profline;": "⌒",
      "&profsurf;": "⌓",
      "&prop;": "∝",
      "&propto;": "∝",
      "&prsim;": "≾",
      "&prurel;": "⊰",
      "&pscr;": "𝓅",
      "&psi;": "ψ",
      "&puncsp;": " ",
      "&qfr;": "𝔮",
      "&qint;": "⨌",
      "&qopf;": "𝕢",
      "&qprime;": "⁗",
      "&qscr;": "𝓆",
      "&quaternions;": "ℍ",
      "&quatint;": "⨖",
      "&quest;": "?",
      "&questeq;": "≟",
      "&quot": '"',
      "&quot;": '"',
      "&rAarr;": "⇛",
      "&rArr;": "⇒",
      "&rAtail;": "⤜",
      "&rBarr;": "⤏",
      "&rHar;": "⥤",
      "&race;": "∽̱",
      "&racute;": "ŕ",
      "&radic;": "√",
      "&raemptyv;": "⦳",
      "&rang;": "⟩",
      "&rangd;": "⦒",
      "&range;": "⦥",
      "&rangle;": "⟩",
      "&raquo": "»",
      "&raquo;": "»",
      "&rarr;": "→",
      "&rarrap;": "⥵",
      "&rarrb;": "⇥",
      "&rarrbfs;": "⤠",
      "&rarrc;": "⤳",
      "&rarrfs;": "⤞",
      "&rarrhk;": "↪",
      "&rarrlp;": "↬",
      "&rarrpl;": "⥅",
      "&rarrsim;": "⥴",
      "&rarrtl;": "↣",
      "&rarrw;": "↝",
      "&ratail;": "⤚",
      "&ratio;": "∶",
      "&rationals;": "ℚ",
      "&rbarr;": "⤍",
      "&rbbrk;": "❳",
      "&rbrace;": "}",
      "&rbrack;": "]",
      "&rbrke;": "⦌",
      "&rbrksld;": "⦎",
      "&rbrkslu;": "⦐",
      "&rcaron;": "ř",
      "&rcedil;": "ŗ",
      "&rceil;": "⌉",
      "&rcub;": "}",
      "&rcy;": "р",
      "&rdca;": "⤷",
      "&rdldhar;": "⥩",
      "&rdquo;": "”",
      "&rdquor;": "”",
      "&rdsh;": "↳",
      "&real;": "ℜ",
      "&realine;": "ℛ",
      "&realpart;": "ℜ",
      "&reals;": "ℝ",
      "&rect;": "▭",
      "&reg": "®",
      "&reg;": "®",
      "&rfisht;": "⥽",
      "&rfloor;": "⌋",
      "&rfr;": "𝔯",
      "&rhard;": "⇁",
      "&rharu;": "⇀",
      "&rharul;": "⥬",
      "&rho;": "ρ",
      "&rhov;": "ϱ",
      "&rightarrow;": "→",
      "&rightarrowtail;": "↣",
      "&rightharpoondown;": "⇁",
      "&rightharpoonup;": "⇀",
      "&rightleftarrows;": "⇄",
      "&rightleftharpoons;": "⇌",
      "&rightrightarrows;": "⇉",
      "&rightsquigarrow;": "↝",
      "&rightthreetimes;": "⋌",
      "&ring;": "˚",
      "&risingdotseq;": "≓",
      "&rlarr;": "⇄",
      "&rlhar;": "⇌",
      "&rlm;": "‏",
      "&rmoust;": "⎱",
      "&rmoustache;": "⎱",
      "&rnmid;": "⫮",
      "&roang;": "⟭",
      "&roarr;": "⇾",
      "&robrk;": "⟧",
      "&ropar;": "⦆",
      "&ropf;": "𝕣",
      "&roplus;": "⨮",
      "&rotimes;": "⨵",
      "&rpar;": ")",
      "&rpargt;": "⦔",
      "&rppolint;": "⨒",
      "&rrarr;": "⇉",
      "&rsaquo;": "›",
      "&rscr;": "𝓇",
      "&rsh;": "↱",
      "&rsqb;": "]",
      "&rsquo;": "’",
      "&rsquor;": "’",
      "&rthree;": "⋌",
      "&rtimes;": "⋊",
      "&rtri;": "▹",
      "&rtrie;": "⊵",
      "&rtrif;": "▸",
      "&rtriltri;": "⧎",
      "&ruluhar;": "⥨",
      "&rx;": "℞",
      "&sacute;": "ś",
      "&sbquo;": "‚",
      "&sc;": "≻",
      "&scE;": "⪴",
      "&scap;": "⪸",
      "&scaron;": "š",
      "&sccue;": "≽",
      "&sce;": "⪰",
      "&scedil;": "ş",
      "&scirc;": "ŝ",
      "&scnE;": "⪶",
      "&scnap;": "⪺",
      "&scnsim;": "⋩",
      "&scpolint;": "⨓",
      "&scsim;": "≿",
      "&scy;": "с",
      "&sdot;": "⋅",
      "&sdotb;": "⊡",
      "&sdote;": "⩦",
      "&seArr;": "⇘",
      "&searhk;": "⤥",
      "&searr;": "↘",
      "&searrow;": "↘",
      "&sect": "§",
      "&sect;": "§",
      "&semi;": ";",
      "&seswar;": "⤩",
      "&setminus;": "∖",
      "&setmn;": "∖",
      "&sext;": "✶",
      "&sfr;": "𝔰",
      "&sfrown;": "⌢",
      "&sharp;": "♯",
      "&shchcy;": "щ",
      "&shcy;": "ш",
      "&shortmid;": "∣",
      "&shortparallel;": "∥",
      "&shy": "­",
      "&shy;": "­",
      "&sigma;": "σ",
      "&sigmaf;": "ς",
      "&sigmav;": "ς",
      "&sim;": "∼",
      "&simdot;": "⩪",
      "&sime;": "≃",
      "&simeq;": "≃",
      "&simg;": "⪞",
      "&simgE;": "⪠",
      "&siml;": "⪝",
      "&simlE;": "⪟",
      "&simne;": "≆",
      "&simplus;": "⨤",
      "&simrarr;": "⥲",
      "&slarr;": "←",
      "&smallsetminus;": "∖",
      "&smashp;": "⨳",
      "&smeparsl;": "⧤",
      "&smid;": "∣",
      "&smile;": "⌣",
      "&smt;": "⪪",
      "&smte;": "⪬",
      "&smtes;": "⪬︀",
      "&softcy;": "ь",
      "&sol;": "/",
      "&solb;": "⧄",
      "&solbar;": "⌿",
      "&sopf;": "𝕤",
      "&spades;": "♠",
      "&spadesuit;": "♠",
      "&spar;": "∥",
      "&sqcap;": "⊓",
      "&sqcaps;": "⊓︀",
      "&sqcup;": "⊔",
      "&sqcups;": "⊔︀",
      "&sqsub;": "⊏",
      "&sqsube;": "⊑",
      "&sqsubset;": "⊏",
      "&sqsubseteq;": "⊑",
      "&sqsup;": "⊐",
      "&sqsupe;": "⊒",
      "&sqsupset;": "⊐",
      "&sqsupseteq;": "⊒",
      "&squ;": "□",
      "&square;": "□",
      "&squarf;": "▪",
      "&squf;": "▪",
      "&srarr;": "→",
      "&sscr;": "𝓈",
      "&ssetmn;": "∖",
      "&ssmile;": "⌣",
      "&sstarf;": "⋆",
      "&star;": "☆",
      "&starf;": "★",
      "&straightepsilon;": "ϵ",
      "&straightphi;": "ϕ",
      "&strns;": "¯",
      "&sub;": "⊂",
      "&subE;": "⫅",
      "&subdot;": "⪽",
      "&sube;": "⊆",
      "&subedot;": "⫃",
      "&submult;": "⫁",
      "&subnE;": "⫋",
      "&subne;": "⊊",
      "&subplus;": "⪿",
      "&subrarr;": "⥹",
      "&subset;": "⊂",
      "&subseteq;": "⊆",
      "&subseteqq;": "⫅",
      "&subsetneq;": "⊊",
      "&subsetneqq;": "⫋",
      "&subsim;": "⫇",
      "&subsub;": "⫕",
      "&subsup;": "⫓",
      "&succ;": "≻",
      "&succapprox;": "⪸",
      "&succcurlyeq;": "≽",
      "&succeq;": "⪰",
      "&succnapprox;": "⪺",
      "&succneqq;": "⪶",
      "&succnsim;": "⋩",
      "&succsim;": "≿",
      "&sum;": "∑",
      "&sung;": "♪",
      "&sup1": "¹",
      "&sup1;": "¹",
      "&sup2": "²",
      "&sup2;": "²",
      "&sup3": "³",
      "&sup3;": "³",
      "&sup;": "⊃",
      "&supE;": "⫆",
      "&supdot;": "⪾",
      "&supdsub;": "⫘",
      "&supe;": "⊇",
      "&supedot;": "⫄",
      "&suphsol;": "⟉",
      "&suphsub;": "⫗",
      "&suplarr;": "⥻",
      "&supmult;": "⫂",
      "&supnE;": "⫌",
      "&supne;": "⊋",
      "&supplus;": "⫀",
      "&supset;": "⊃",
      "&supseteq;": "⊇",
      "&supseteqq;": "⫆",
      "&supsetneq;": "⊋",
      "&supsetneqq;": "⫌",
      "&supsim;": "⫈",
      "&supsub;": "⫔",
      "&supsup;": "⫖",
      "&swArr;": "⇙",
      "&swarhk;": "⤦",
      "&swarr;": "↙",
      "&swarrow;": "↙",
      "&swnwar;": "⤪",
      "&szlig": "ß",
      "&szlig;": "ß",
      "&target;": "⌖",
      "&tau;": "τ",
      "&tbrk;": "⎴",
      "&tcaron;": "ť",
      "&tcedil;": "ţ",
      "&tcy;": "т",
      "&tdot;": "⃛",
      "&telrec;": "⌕",
      "&tfr;": "𝔱",
      "&there4;": "∴",
      "&therefore;": "∴",
      "&theta;": "θ",
      "&thetasym;": "ϑ",
      "&thetav;": "ϑ",
      "&thickapprox;": "≈",
      "&thicksim;": "∼",
      "&thinsp;": " ",
      "&thkap;": "≈",
      "&thksim;": "∼",
      "&thorn": "þ",
      "&thorn;": "þ",
      "&tilde;": "˜",
      "&times": "×",
      "&times;": "×",
      "&timesb;": "⊠",
      "&timesbar;": "⨱",
      "&timesd;": "⨰",
      "&tint;": "∭",
      "&toea;": "⤨",
      "&top;": "⊤",
      "&topbot;": "⌶",
      "&topcir;": "⫱",
      "&topf;": "𝕥",
      "&topfork;": "⫚",
      "&tosa;": "⤩",
      "&tprime;": "‴",
      "&trade;": "™",
      "&triangle;": "▵",
      "&triangledown;": "▿",
      "&triangleleft;": "◃",
      "&trianglelefteq;": "⊴",
      "&triangleq;": "≜",
      "&triangleright;": "▹",
      "&trianglerighteq;": "⊵",
      "&tridot;": "◬",
      "&trie;": "≜",
      "&triminus;": "⨺",
      "&triplus;": "⨹",
      "&trisb;": "⧍",
      "&tritime;": "⨻",
      "&trpezium;": "⏢",
      "&tscr;": "𝓉",
      "&tscy;": "ц",
      "&tshcy;": "ћ",
      "&tstrok;": "ŧ",
      "&twixt;": "≬",
      "&twoheadleftarrow;": "↞",
      "&twoheadrightarrow;": "↠",
      "&uArr;": "⇑",
      "&uHar;": "⥣",
      "&uacute": "ú",
      "&uacute;": "ú",
      "&uarr;": "↑",
      "&ubrcy;": "ў",
      "&ubreve;": "ŭ",
      "&ucirc": "û",
      "&ucirc;": "û",
      "&ucy;": "у",
      "&udarr;": "⇅",
      "&udblac;": "ű",
      "&udhar;": "⥮",
      "&ufisht;": "⥾",
      "&ufr;": "𝔲",
      "&ugrave": "ù",
      "&ugrave;": "ù",
      "&uharl;": "↿",
      "&uharr;": "↾",
      "&uhblk;": "▀",
      "&ulcorn;": "⌜",
      "&ulcorner;": "⌜",
      "&ulcrop;": "⌏",
      "&ultri;": "◸",
      "&umacr;": "ū",
      "&uml": "¨",
      "&uml;": "¨",
      "&uogon;": "ų",
      "&uopf;": "𝕦",
      "&uparrow;": "↑",
      "&updownarrow;": "↕",
      "&upharpoonleft;": "↿",
      "&upharpoonright;": "↾",
      "&uplus;": "⊎",
      "&upsi;": "υ",
      "&upsih;": "ϒ",
      "&upsilon;": "υ",
      "&upuparrows;": "⇈",
      "&urcorn;": "⌝",
      "&urcorner;": "⌝",
      "&urcrop;": "⌎",
      "&uring;": "ů",
      "&urtri;": "◹",
      "&uscr;": "𝓊",
      "&utdot;": "⋰",
      "&utilde;": "ũ",
      "&utri;": "▵",
      "&utrif;": "▴",
      "&uuarr;": "⇈",
      "&uuml": "ü",
      "&uuml;": "ü",
      "&uwangle;": "⦧",
      "&vArr;": "⇕",
      "&vBar;": "⫨",
      "&vBarv;": "⫩",
      "&vDash;": "⊨",
      "&vangrt;": "⦜",
      "&varepsilon;": "ϵ",
      "&varkappa;": "ϰ",
      "&varnothing;": "∅",
      "&varphi;": "ϕ",
      "&varpi;": "ϖ",
      "&varpropto;": "∝",
      "&varr;": "↕",
      "&varrho;": "ϱ",
      "&varsigma;": "ς",
      "&varsubsetneq;": "⊊︀",
      "&varsubsetneqq;": "⫋︀",
      "&varsupsetneq;": "⊋︀",
      "&varsupsetneqq;": "⫌︀",
      "&vartheta;": "ϑ",
      "&vartriangleleft;": "⊲",
      "&vartriangleright;": "⊳",
      "&vcy;": "в",
      "&vdash;": "⊢",
      "&vee;": "∨",
      "&veebar;": "⊻",
      "&veeeq;": "≚",
      "&vellip;": "⋮",
      "&verbar;": "|",
      "&vert;": "|",
      "&vfr;": "𝔳",
      "&vltri;": "⊲",
      "&vnsub;": "⊂⃒",
      "&vnsup;": "⊃⃒",
      "&vopf;": "𝕧",
      "&vprop;": "∝",
      "&vrtri;": "⊳",
      "&vscr;": "𝓋",
      "&vsubnE;": "⫋︀",
      "&vsubne;": "⊊︀",
      "&vsupnE;": "⫌︀",
      "&vsupne;": "⊋︀",
      "&vzigzag;": "⦚",
      "&wcirc;": "ŵ",
      "&wedbar;": "⩟",
      "&wedge;": "∧",
      "&wedgeq;": "≙",
      "&weierp;": "℘",
      "&wfr;": "𝔴",
      "&wopf;": "𝕨",
      "&wp;": "℘",
      "&wr;": "≀",
      "&wreath;": "≀",
      "&wscr;": "𝓌",
      "&xcap;": "⋂",
      "&xcirc;": "◯",
      "&xcup;": "⋃",
      "&xdtri;": "▽",
      "&xfr;": "𝔵",
      "&xhArr;": "⟺",
      "&xharr;": "⟷",
      "&xi;": "ξ",
      "&xlArr;": "⟸",
      "&xlarr;": "⟵",
      "&xmap;": "⟼",
      "&xnis;": "⋻",
      "&xodot;": "⨀",
      "&xopf;": "𝕩",
      "&xoplus;": "⨁",
      "&xotime;": "⨂",
      "&xrArr;": "⟹",
      "&xrarr;": "⟶",
      "&xscr;": "𝓍",
      "&xsqcup;": "⨆",
      "&xuplus;": "⨄",
      "&xutri;": "△",
      "&xvee;": "⋁",
      "&xwedge;": "⋀",
      "&yacute": "ý",
      "&yacute;": "ý",
      "&yacy;": "я",
      "&ycirc;": "ŷ",
      "&ycy;": "ы",
      "&yen": "¥",
      "&yen;": "¥",
      "&yfr;": "𝔶",
      "&yicy;": "ї",
      "&yopf;": "𝕪",
      "&yscr;": "𝓎",
      "&yucy;": "ю",
      "&yuml": "ÿ",
      "&yuml;": "ÿ",
      "&zacute;": "ź",
      "&zcaron;": "ž",
      "&zcy;": "з",
      "&zdot;": "ż",
      "&zeetrf;": "ℨ",
      "&zeta;": "ζ",
      "&zfr;": "𝔷",
      "&zhcy;": "ж",
      "&zigrarr;": "⇝",
      "&zopf;": "𝕫",
      "&zscr;": "𝓏",
      "&zwj;": "‍",
      "&zwnj;": "‌"
    },
    characters: {
      "Æ": "&AElig;",
      "&": "&amp;",
      "Á": "&Aacute;",
      "Ă": "&Abreve;",
      "Â": "&Acirc;",
      "А": "&Acy;",
      "𝔄": "&Afr;",
      "À": "&Agrave;",
      "Α": "&Alpha;",
      "Ā": "&Amacr;",
      "⩓": "&And;",
      "Ą": "&Aogon;",
      "𝔸": "&Aopf;",
      "⁡": "&af;",
      "Å": "&angst;",
      "𝒜": "&Ascr;",
      "≔": "&coloneq;",
      "Ã": "&Atilde;",
      "Ä": "&Auml;",
      "∖": "&ssetmn;",
      "⫧": "&Barv;",
      "⌆": "&doublebarwedge;",
      "Б": "&Bcy;",
      "∵": "&because;",
      "ℬ": "&bernou;",
      "Β": "&Beta;",
      "𝔅": "&Bfr;",
      "𝔹": "&Bopf;",
      "˘": "&breve;",
      "≎": "&bump;",
      "Ч": "&CHcy;",
      "©": "&copy;",
      "Ć": "&Cacute;",
      "⋒": "&Cap;",
      "ⅅ": "&DD;",
      "ℭ": "&Cfr;",
      "Č": "&Ccaron;",
      "Ç": "&Ccedil;",
      "Ĉ": "&Ccirc;",
      "∰": "&Cconint;",
      "Ċ": "&Cdot;",
      "¸": "&cedil;",
      "·": "&middot;",
      "Χ": "&Chi;",
      "⊙": "&odot;",
      "⊖": "&ominus;",
      "⊕": "&oplus;",
      "⊗": "&otimes;",
      "∲": "&cwconint;",
      "”": "&rdquor;",
      "’": "&rsquor;",
      "∷": "&Proportion;",
      "⩴": "&Colone;",
      "≡": "&equiv;",
      "∯": "&DoubleContourIntegral;",
      "∮": "&oint;",
      "ℂ": "&complexes;",
      "∐": "&coprod;",
      "∳": "&awconint;",
      "⨯": "&Cross;",
      "𝒞": "&Cscr;",
      "⋓": "&Cup;",
      "≍": "&asympeq;",
      "⤑": "&DDotrahd;",
      "Ђ": "&DJcy;",
      "Ѕ": "&DScy;",
      "Џ": "&DZcy;",
      "‡": "&ddagger;",
      "↡": "&Darr;",
      "⫤": "&DoubleLeftTee;",
      "Ď": "&Dcaron;",
      "Д": "&Dcy;",
      "∇": "&nabla;",
      "Δ": "&Delta;",
      "𝔇": "&Dfr;",
      "´": "&acute;",
      "˙": "&dot;",
      "˝": "&dblac;",
      "`": "&grave;",
      "˜": "&tilde;",
      "⋄": "&diamond;",
      "ⅆ": "&dd;",
      "𝔻": "&Dopf;",
      "¨": "&uml;",
      "⃜": "&DotDot;",
      "≐": "&esdot;",
      "⇓": "&dArr;",
      "⇐": "&lArr;",
      "⇔": "&iff;",
      "⟸": "&xlArr;",
      "⟺": "&xhArr;",
      "⟹": "&xrArr;",
      "⇒": "&rArr;",
      "⊨": "&vDash;",
      "⇑": "&uArr;",
      "⇕": "&vArr;",
      "∥": "&spar;",
      "↓": "&downarrow;",
      "⤓": "&DownArrowBar;",
      "⇵": "&duarr;",
      "̑": "&DownBreve;",
      "⥐": "&DownLeftRightVector;",
      "⥞": "&DownLeftTeeVector;",
      "↽": "&lhard;",
      "⥖": "&DownLeftVectorBar;",
      "⥟": "&DownRightTeeVector;",
      "⇁": "&rightharpoondown;",
      "⥗": "&DownRightVectorBar;",
      "⊤": "&top;",
      "↧": "&mapstodown;",
      "𝒟": "&Dscr;",
      "Đ": "&Dstrok;",
      "Ŋ": "&ENG;",
      "Ð": "&ETH;",
      "É": "&Eacute;",
      "Ě": "&Ecaron;",
      "Ê": "&Ecirc;",
      "Э": "&Ecy;",
      "Ė": "&Edot;",
      "𝔈": "&Efr;",
      "È": "&Egrave;",
      "∈": "&isinv;",
      "Ē": "&Emacr;",
      "◻": "&EmptySmallSquare;",
      "▫": "&EmptyVerySmallSquare;",
      "Ę": "&Eogon;",
      "𝔼": "&Eopf;",
      "Ε": "&Epsilon;",
      "⩵": "&Equal;",
      "≂": "&esim;",
      "⇌": "&rlhar;",
      "ℰ": "&expectation;",
      "⩳": "&Esim;",
      "Η": "&Eta;",
      "Ë": "&Euml;",
      "∃": "&exist;",
      "ⅇ": "&exponentiale;",
      "Ф": "&Fcy;",
      "𝔉": "&Ffr;",
      "◼": "&FilledSmallSquare;",
      "▪": "&squf;",
      "𝔽": "&Fopf;",
      "∀": "&forall;",
      "ℱ": "&Fscr;",
      "Ѓ": "&GJcy;",
      ">": "&gt;",
      "Γ": "&Gamma;",
      "Ϝ": "&Gammad;",
      "Ğ": "&Gbreve;",
      "Ģ": "&Gcedil;",
      "Ĝ": "&Gcirc;",
      "Г": "&Gcy;",
      "Ġ": "&Gdot;",
      "𝔊": "&Gfr;",
      "⋙": "&ggg;",
      "𝔾": "&Gopf;",
      "≥": "&geq;",
      "⋛": "&gtreqless;",
      "≧": "&geqq;",
      "⪢": "&GreaterGreater;",
      "≷": "&gtrless;",
      "⩾": "&ges;",
      "≳": "&gtrsim;",
      "𝒢": "&Gscr;",
      "≫": "&gg;",
      "Ъ": "&HARDcy;",
      "ˇ": "&caron;",
      "^": "&Hat;",
      "Ĥ": "&Hcirc;",
      "ℌ": "&Poincareplane;",
      "ℋ": "&hamilt;",
      "ℍ": "&quaternions;",
      "─": "&boxh;",
      "Ħ": "&Hstrok;",
      "≏": "&bumpeq;",
      "Е": "&IEcy;",
      "Ĳ": "&IJlig;",
      "Ё": "&IOcy;",
      "Í": "&Iacute;",
      "Î": "&Icirc;",
      "И": "&Icy;",
      "İ": "&Idot;",
      "ℑ": "&imagpart;",
      "Ì": "&Igrave;",
      "Ī": "&Imacr;",
      "ⅈ": "&ii;",
      "∬": "&Int;",
      "∫": "&int;",
      "⋂": "&xcap;",
      "⁣": "&ic;",
      "⁢": "&it;",
      "Į": "&Iogon;",
      "𝕀": "&Iopf;",
      "Ι": "&Iota;",
      "ℐ": "&imagline;",
      "Ĩ": "&Itilde;",
      "І": "&Iukcy;",
      "Ï": "&Iuml;",
      "Ĵ": "&Jcirc;",
      "Й": "&Jcy;",
      "𝔍": "&Jfr;",
      "𝕁": "&Jopf;",
      "𝒥": "&Jscr;",
      "Ј": "&Jsercy;",
      "Є": "&Jukcy;",
      "Х": "&KHcy;",
      "Ќ": "&KJcy;",
      "Κ": "&Kappa;",
      "Ķ": "&Kcedil;",
      "К": "&Kcy;",
      "𝔎": "&Kfr;",
      "𝕂": "&Kopf;",
      "𝒦": "&Kscr;",
      "Љ": "&LJcy;",
      "<": "&lt;",
      "Ĺ": "&Lacute;",
      "Λ": "&Lambda;",
      "⟪": "&Lang;",
      "ℒ": "&lagran;",
      "↞": "&twoheadleftarrow;",
      "Ľ": "&Lcaron;",
      "Ļ": "&Lcedil;",
      "Л": "&Lcy;",
      "⟨": "&langle;",
      "←": "&slarr;",
      "⇤": "&larrb;",
      "⇆": "&lrarr;",
      "⌈": "&lceil;",
      "⟦": "&lobrk;",
      "⥡": "&LeftDownTeeVector;",
      "⇃": "&downharpoonleft;",
      "⥙": "&LeftDownVectorBar;",
      "⌊": "&lfloor;",
      "↔": "&leftrightarrow;",
      "⥎": "&LeftRightVector;",
      "⊣": "&dashv;",
      "↤": "&mapstoleft;",
      "⥚": "&LeftTeeVector;",
      "⊲": "&vltri;",
      "⧏": "&LeftTriangleBar;",
      "⊴": "&trianglelefteq;",
      "⥑": "&LeftUpDownVector;",
      "⥠": "&LeftUpTeeVector;",
      "↿": "&upharpoonleft;",
      "⥘": "&LeftUpVectorBar;",
      "↼": "&lharu;",
      "⥒": "&LeftVectorBar;",
      "⋚": "&lesseqgtr;",
      "≦": "&leqq;",
      "≶": "&lg;",
      "⪡": "&LessLess;",
      "⩽": "&les;",
      "≲": "&lsim;",
      "𝔏": "&Lfr;",
      "⋘": "&Ll;",
      "⇚": "&lAarr;",
      "Ŀ": "&Lmidot;",
      "⟵": "&xlarr;",
      "⟷": "&xharr;",
      "⟶": "&xrarr;",
      "𝕃": "&Lopf;",
      "↙": "&swarrow;",
      "↘": "&searrow;",
      "↰": "&lsh;",
      "Ł": "&Lstrok;",
      "≪": "&ll;",
      "⤅": "&Map;",
      "М": "&Mcy;",
      " ": "&MediumSpace;",
      "ℳ": "&phmmat;",
      "𝔐": "&Mfr;",
      "∓": "&mp;",
      "𝕄": "&Mopf;",
      "Μ": "&Mu;",
      "Њ": "&NJcy;",
      "Ń": "&Nacute;",
      "Ň": "&Ncaron;",
      "Ņ": "&Ncedil;",
      "Н": "&Ncy;",
      "​": "&ZeroWidthSpace;",
      "\n": "&NewLine;",
      "𝔑": "&Nfr;",
      "⁠": "&NoBreak;",
      " ": "&nbsp;",
      "ℕ": "&naturals;",
      "⫬": "&Not;",
      "≢": "&nequiv;",
      "≭": "&NotCupCap;",
      "∦": "&nspar;",
      "∉": "&notinva;",
      "≠": "&ne;",
      "≂̸": "&nesim;",
      "∄": "&nexists;",
      "≯": "&ngtr;",
      "≱": "&ngeq;",
      "≧̸": "&ngeqq;",
      "≫̸": "&nGtv;",
      "≹": "&ntgl;",
      "⩾̸": "&nges;",
      "≵": "&ngsim;",
      "≎̸": "&nbump;",
      "≏̸": "&nbumpe;",
      "⋪": "&ntriangleleft;",
      "⧏̸": "&NotLeftTriangleBar;",
      "⋬": "&ntrianglelefteq;",
      "≮": "&nlt;",
      "≰": "&nleq;",
      "≸": "&ntlg;",
      "≪̸": "&nLtv;",
      "⩽̸": "&nles;",
      "≴": "&nlsim;",
      "⪢̸": "&NotNestedGreaterGreater;",
      "⪡̸": "&NotNestedLessLess;",
      "⊀": "&nprec;",
      "⪯̸": "&npreceq;",
      "⋠": "&nprcue;",
      "∌": "&notniva;",
      "⋫": "&ntriangleright;",
      "⧐̸": "&NotRightTriangleBar;",
      "⋭": "&ntrianglerighteq;",
      "⊏̸": "&NotSquareSubset;",
      "⋢": "&nsqsube;",
      "⊐̸": "&NotSquareSuperset;",
      "⋣": "&nsqsupe;",
      "⊂⃒": "&vnsub;",
      "⊈": "&nsubseteq;",
      "⊁": "&nsucc;",
      "⪰̸": "&nsucceq;",
      "⋡": "&nsccue;",
      "≿̸": "&NotSucceedsTilde;",
      "⊃⃒": "&vnsup;",
      "⊉": "&nsupseteq;",
      "≁": "&nsim;",
      "≄": "&nsimeq;",
      "≇": "&ncong;",
      "≉": "&napprox;",
      "∤": "&nsmid;",
      "𝒩": "&Nscr;",
      "Ñ": "&Ntilde;",
      "Ν": "&Nu;",
      "Œ": "&OElig;",
      "Ó": "&Oacute;",
      "Ô": "&Ocirc;",
      "О": "&Ocy;",
      "Ő": "&Odblac;",
      "𝔒": "&Ofr;",
      "Ò": "&Ograve;",
      "Ō": "&Omacr;",
      "Ω": "&ohm;",
      "Ο": "&Omicron;",
      "𝕆": "&Oopf;",
      "“": "&ldquo;",
      "‘": "&lsquo;",
      "⩔": "&Or;",
      "𝒪": "&Oscr;",
      "Ø": "&Oslash;",
      "Õ": "&Otilde;",
      "⨷": "&Otimes;",
      "Ö": "&Ouml;",
      "‾": "&oline;",
      "⏞": "&OverBrace;",
      "⎴": "&tbrk;",
      "⏜": "&OverParenthesis;",
      "∂": "&part;",
      "П": "&Pcy;",
      "𝔓": "&Pfr;",
      "Φ": "&Phi;",
      "Π": "&Pi;",
      "±": "&pm;",
      "ℙ": "&primes;",
      "⪻": "&Pr;",
      "≺": "&prec;",
      "⪯": "&preceq;",
      "≼": "&preccurlyeq;",
      "≾": "&prsim;",
      "″": "&Prime;",
      "∏": "&prod;",
      "∝": "&vprop;",
      "𝒫": "&Pscr;",
      "Ψ": "&Psi;",
      '"': "&quot;",
      "𝔔": "&Qfr;",
      "ℚ": "&rationals;",
      "𝒬": "&Qscr;",
      "⤐": "&drbkarow;",
      "®": "&reg;",
      "Ŕ": "&Racute;",
      "⟫": "&Rang;",
      "↠": "&twoheadrightarrow;",
      "⤖": "&Rarrtl;",
      "Ř": "&Rcaron;",
      "Ŗ": "&Rcedil;",
      "Р": "&Rcy;",
      "ℜ": "&realpart;",
      "∋": "&niv;",
      "⇋": "&lrhar;",
      "⥯": "&duhar;",
      "Ρ": "&Rho;",
      "⟩": "&rangle;",
      "→": "&srarr;",
      "⇥": "&rarrb;",
      "⇄": "&rlarr;",
      "⌉": "&rceil;",
      "⟧": "&robrk;",
      "⥝": "&RightDownTeeVector;",
      "⇂": "&downharpoonright;",
      "⥕": "&RightDownVectorBar;",
      "⌋": "&rfloor;",
      "⊢": "&vdash;",
      "↦": "&mapsto;",
      "⥛": "&RightTeeVector;",
      "⊳": "&vrtri;",
      "⧐": "&RightTriangleBar;",
      "⊵": "&trianglerighteq;",
      "⥏": "&RightUpDownVector;",
      "⥜": "&RightUpTeeVector;",
      "↾": "&upharpoonright;",
      "⥔": "&RightUpVectorBar;",
      "⇀": "&rightharpoonup;",
      "⥓": "&RightVectorBar;",
      "ℝ": "&reals;",
      "⥰": "&RoundImplies;",
      "⇛": "&rAarr;",
      "ℛ": "&realine;",
      "↱": "&rsh;",
      "⧴": "&RuleDelayed;",
      "Щ": "&SHCHcy;",
      "Ш": "&SHcy;",
      "Ь": "&SOFTcy;",
      "Ś": "&Sacute;",
      "⪼": "&Sc;",
      "Š": "&Scaron;",
      "Ş": "&Scedil;",
      "Ŝ": "&Scirc;",
      "С": "&Scy;",
      "𝔖": "&Sfr;",
      "↑": "&uparrow;",
      "Σ": "&Sigma;",
      "∘": "&compfn;",
      "𝕊": "&Sopf;",
      "√": "&radic;",
      "□": "&square;",
      "⊓": "&sqcap;",
      "⊏": "&sqsubset;",
      "⊑": "&sqsubseteq;",
      "⊐": "&sqsupset;",
      "⊒": "&sqsupseteq;",
      "⊔": "&sqcup;",
      "𝒮": "&Sscr;",
      "⋆": "&sstarf;",
      "⋐": "&Subset;",
      "⊆": "&subseteq;",
      "≻": "&succ;",
      "⪰": "&succeq;",
      "≽": "&succcurlyeq;",
      "≿": "&succsim;",
      "∑": "&sum;",
      "⋑": "&Supset;",
      "⊃": "&supset;",
      "⊇": "&supseteq;",
      "Þ": "&THORN;",
      "™": "&trade;",
      "Ћ": "&TSHcy;",
      "Ц": "&TScy;",
      "\t": "&Tab;",
      "Τ": "&Tau;",
      "Ť": "&Tcaron;",
      "Ţ": "&Tcedil;",
      "Т": "&Tcy;",
      "𝔗": "&Tfr;",
      "∴": "&therefore;",
      "Θ": "&Theta;",
      "  ": "&ThickSpace;",
      " ": "&thinsp;",
      "∼": "&thksim;",
      "≃": "&simeq;",
      "≅": "&cong;",
      "≈": "&thkap;",
      "𝕋": "&Topf;",
      "⃛": "&tdot;",
      "𝒯": "&Tscr;",
      "Ŧ": "&Tstrok;",
      "Ú": "&Uacute;",
      "↟": "&Uarr;",
      "⥉": "&Uarrocir;",
      "Ў": "&Ubrcy;",
      "Ŭ": "&Ubreve;",
      "Û": "&Ucirc;",
      "У": "&Ucy;",
      "Ű": "&Udblac;",
      "𝔘": "&Ufr;",
      "Ù": "&Ugrave;",
      "Ū": "&Umacr;",
      _: "&lowbar;",
      "⏟": "&UnderBrace;",
      "⎵": "&bbrk;",
      "⏝": "&UnderParenthesis;",
      "⋃": "&xcup;",
      "⊎": "&uplus;",
      "Ų": "&Uogon;",
      "𝕌": "&Uopf;",
      "⤒": "&UpArrowBar;",
      "⇅": "&udarr;",
      "↕": "&varr;",
      "⥮": "&udhar;",
      "⊥": "&perp;",
      "↥": "&mapstoup;",
      "↖": "&nwarrow;",
      "↗": "&nearrow;",
      "ϒ": "&upsih;",
      "Υ": "&Upsilon;",
      "Ů": "&Uring;",
      "𝒰": "&Uscr;",
      "Ũ": "&Utilde;",
      "Ü": "&Uuml;",
      "⊫": "&VDash;",
      "⫫": "&Vbar;",
      "В": "&Vcy;",
      "⊩": "&Vdash;",
      "⫦": "&Vdashl;",
      "⋁": "&xvee;",
      "‖": "&Vert;",
      "∣": "&smid;",
      "|": "&vert;",
      "❘": "&VerticalSeparator;",
      "≀": "&wreath;",
      " ": "&hairsp;",
      "𝔙": "&Vfr;",
      "𝕍": "&Vopf;",
      "𝒱": "&Vscr;",
      "⊪": "&Vvdash;",
      "Ŵ": "&Wcirc;",
      "⋀": "&xwedge;",
      "𝔚": "&Wfr;",
      "𝕎": "&Wopf;",
      "𝒲": "&Wscr;",
      "𝔛": "&Xfr;",
      "Ξ": "&Xi;",
      "𝕏": "&Xopf;",
      "𝒳": "&Xscr;",
      "Я": "&YAcy;",
      "Ї": "&YIcy;",
      "Ю": "&YUcy;",
      "Ý": "&Yacute;",
      "Ŷ": "&Ycirc;",
      "Ы": "&Ycy;",
      "𝔜": "&Yfr;",
      "𝕐": "&Yopf;",
      "𝒴": "&Yscr;",
      "Ÿ": "&Yuml;",
      "Ж": "&ZHcy;",
      "Ź": "&Zacute;",
      "Ž": "&Zcaron;",
      "З": "&Zcy;",
      "Ż": "&Zdot;",
      "Ζ": "&Zeta;",
      "ℨ": "&zeetrf;",
      "ℤ": "&integers;",
      "𝒵": "&Zscr;",
      "á": "&aacute;",
      "ă": "&abreve;",
      "∾": "&mstpos;",
      "∾̳": "&acE;",
      "∿": "&acd;",
      "â": "&acirc;",
      "а": "&acy;",
      "æ": "&aelig;",
      "𝔞": "&afr;",
      "à": "&agrave;",
      "ℵ": "&aleph;",
      "α": "&alpha;",
      "ā": "&amacr;",
      "⨿": "&amalg;",
      "∧": "&wedge;",
      "⩕": "&andand;",
      "⩜": "&andd;",
      "⩘": "&andslope;",
      "⩚": "&andv;",
      "∠": "&angle;",
      "⦤": "&ange;",
      "∡": "&measuredangle;",
      "⦨": "&angmsdaa;",
      "⦩": "&angmsdab;",
      "⦪": "&angmsdac;",
      "⦫": "&angmsdad;",
      "⦬": "&angmsdae;",
      "⦭": "&angmsdaf;",
      "⦮": "&angmsdag;",
      "⦯": "&angmsdah;",
      "∟": "&angrt;",
      "⊾": "&angrtvb;",
      "⦝": "&angrtvbd;",
      "∢": "&angsph;",
      "⍼": "&angzarr;",
      "ą": "&aogon;",
      "𝕒": "&aopf;",
      "⩰": "&apE;",
      "⩯": "&apacir;",
      "≊": "&approxeq;",
      "≋": "&apid;",
      "'": "&apos;",
      "å": "&aring;",
      "𝒶": "&ascr;",
      "*": "&midast;",
      "ã": "&atilde;",
      "ä": "&auml;",
      "⨑": "&awint;",
      "⫭": "&bNot;",
      "≌": "&bcong;",
      "϶": "&bepsi;",
      "‵": "&bprime;",
      "∽": "&bsim;",
      "⋍": "&bsime;",
      "⊽": "&barvee;",
      "⌅": "&barwedge;",
      "⎶": "&bbrktbrk;",
      "б": "&bcy;",
      "„": "&ldquor;",
      "⦰": "&bemptyv;",
      "β": "&beta;",
      "ℶ": "&beth;",
      "≬": "&twixt;",
      "𝔟": "&bfr;",
      "◯": "&xcirc;",
      "⨀": "&xodot;",
      "⨁": "&xoplus;",
      "⨂": "&xotime;",
      "⨆": "&xsqcup;",
      "★": "&starf;",
      "▽": "&xdtri;",
      "△": "&xutri;",
      "⨄": "&xuplus;",
      "⤍": "&rbarr;",
      "⧫": "&lozf;",
      "▴": "&utrif;",
      "▾": "&dtrif;",
      "◂": "&ltrif;",
      "▸": "&rtrif;",
      "␣": "&blank;",
      "▒": "&blk12;",
      "░": "&blk14;",
      "▓": "&blk34;",
      "█": "&block;",
      "=⃥": "&bne;",
      "≡⃥": "&bnequiv;",
      "⌐": "&bnot;",
      "𝕓": "&bopf;",
      "⋈": "&bowtie;",
      "╗": "&boxDL;",
      "╔": "&boxDR;",
      "╖": "&boxDl;",
      "╓": "&boxDr;",
      "═": "&boxH;",
      "╦": "&boxHD;",
      "╩": "&boxHU;",
      "╤": "&boxHd;",
      "╧": "&boxHu;",
      "╝": "&boxUL;",
      "╚": "&boxUR;",
      "╜": "&boxUl;",
      "╙": "&boxUr;",
      "║": "&boxV;",
      "╬": "&boxVH;",
      "╣": "&boxVL;",
      "╠": "&boxVR;",
      "╫": "&boxVh;",
      "╢": "&boxVl;",
      "╟": "&boxVr;",
      "⧉": "&boxbox;",
      "╕": "&boxdL;",
      "╒": "&boxdR;",
      "┐": "&boxdl;",
      "┌": "&boxdr;",
      "╥": "&boxhD;",
      "╨": "&boxhU;",
      "┬": "&boxhd;",
      "┴": "&boxhu;",
      "⊟": "&minusb;",
      "⊞": "&plusb;",
      "⊠": "&timesb;",
      "╛": "&boxuL;",
      "╘": "&boxuR;",
      "┘": "&boxul;",
      "└": "&boxur;",
      "│": "&boxv;",
      "╪": "&boxvH;",
      "╡": "&boxvL;",
      "╞": "&boxvR;",
      "┼": "&boxvh;",
      "┤": "&boxvl;",
      "├": "&boxvr;",
      "¦": "&brvbar;",
      "𝒷": "&bscr;",
      "⁏": "&bsemi;",
      "\\": "&bsol;",
      "⧅": "&bsolb;",
      "⟈": "&bsolhsub;",
      "•": "&bullet;",
      "⪮": "&bumpE;",
      "ć": "&cacute;",
      "∩": "&cap;",
      "⩄": "&capand;",
      "⩉": "&capbrcup;",
      "⩋": "&capcap;",
      "⩇": "&capcup;",
      "⩀": "&capdot;",
      "∩︀": "&caps;",
      "⁁": "&caret;",
      "⩍": "&ccaps;",
      "č": "&ccaron;",
      "ç": "&ccedil;",
      "ĉ": "&ccirc;",
      "⩌": "&ccups;",
      "⩐": "&ccupssm;",
      "ċ": "&cdot;",
      "⦲": "&cemptyv;",
      "¢": "&cent;",
      "𝔠": "&cfr;",
      "ч": "&chcy;",
      "✓": "&checkmark;",
      "χ": "&chi;",
      "○": "&cir;",
      "⧃": "&cirE;",
      "ˆ": "&circ;",
      "≗": "&cire;",
      "↺": "&olarr;",
      "↻": "&orarr;",
      "Ⓢ": "&oS;",
      "⊛": "&oast;",
      "⊚": "&ocir;",
      "⊝": "&odash;",
      "⨐": "&cirfnint;",
      "⫯": "&cirmid;",
      "⧂": "&cirscir;",
      "♣": "&clubsuit;",
      ":": "&colon;",
      ",": "&comma;",
      "@": "&commat;",
      "∁": "&complement;",
      "⩭": "&congdot;",
      "𝕔": "&copf;",
      "℗": "&copysr;",
      "↵": "&crarr;",
      "✗": "&cross;",
      "𝒸": "&cscr;",
      "⫏": "&csub;",
      "⫑": "&csube;",
      "⫐": "&csup;",
      "⫒": "&csupe;",
      "⋯": "&ctdot;",
      "⤸": "&cudarrl;",
      "⤵": "&cudarrr;",
      "⋞": "&curlyeqprec;",
      "⋟": "&curlyeqsucc;",
      "↶": "&curvearrowleft;",
      "⤽": "&cularrp;",
      "∪": "&cup;",
      "⩈": "&cupbrcap;",
      "⩆": "&cupcap;",
      "⩊": "&cupcup;",
      "⊍": "&cupdot;",
      "⩅": "&cupor;",
      "∪︀": "&cups;",
      "↷": "&curvearrowright;",
      "⤼": "&curarrm;",
      "⋎": "&cuvee;",
      "⋏": "&cuwed;",
      "¤": "&curren;",
      "∱": "&cwint;",
      "⌭": "&cylcty;",
      "⥥": "&dHar;",
      "†": "&dagger;",
      "ℸ": "&daleth;",
      "‐": "&hyphen;",
      "⤏": "&rBarr;",
      "ď": "&dcaron;",
      "д": "&dcy;",
      "⇊": "&downdownarrows;",
      "⩷": "&eDDot;",
      "°": "&deg;",
      "δ": "&delta;",
      "⦱": "&demptyv;",
      "⥿": "&dfisht;",
      "𝔡": "&dfr;",
      "♦": "&diams;",
      "ϝ": "&gammad;",
      "⋲": "&disin;",
      "÷": "&divide;",
      "⋇": "&divonx;",
      "ђ": "&djcy;",
      "⌞": "&llcorner;",
      "⌍": "&dlcrop;",
      $: "&dollar;",
      "𝕕": "&dopf;",
      "≑": "&eDot;",
      "∸": "&minusd;",
      "∔": "&plusdo;",
      "⊡": "&sdotb;",
      "⌟": "&lrcorner;",
      "⌌": "&drcrop;",
      "𝒹": "&dscr;",
      "ѕ": "&dscy;",
      "⧶": "&dsol;",
      "đ": "&dstrok;",
      "⋱": "&dtdot;",
      "▿": "&triangledown;",
      "⦦": "&dwangle;",
      "џ": "&dzcy;",
      "⟿": "&dzigrarr;",
      "é": "&eacute;",
      "⩮": "&easter;",
      "ě": "&ecaron;",
      "≖": "&eqcirc;",
      "ê": "&ecirc;",
      "≕": "&eqcolon;",
      "э": "&ecy;",
      "ė": "&edot;",
      "≒": "&fallingdotseq;",
      "𝔢": "&efr;",
      "⪚": "&eg;",
      "è": "&egrave;",
      "⪖": "&eqslantgtr;",
      "⪘": "&egsdot;",
      "⪙": "&el;",
      "⏧": "&elinters;",
      "ℓ": "&ell;",
      "⪕": "&eqslantless;",
      "⪗": "&elsdot;",
      "ē": "&emacr;",
      "∅": "&varnothing;",
      " ": "&emsp13;",
      " ": "&emsp14;",
      " ": "&emsp;",
      "ŋ": "&eng;",
      " ": "&ensp;",
      "ę": "&eogon;",
      "𝕖": "&eopf;",
      "⋕": "&epar;",
      "⧣": "&eparsl;",
      "⩱": "&eplus;",
      "ε": "&epsilon;",
      "ϵ": "&varepsilon;",
      "=": "&equals;",
      "≟": "&questeq;",
      "⩸": "&equivDD;",
      "⧥": "&eqvparsl;",
      "≓": "&risingdotseq;",
      "⥱": "&erarr;",
      "ℯ": "&escr;",
      "η": "&eta;",
      "ð": "&eth;",
      "ë": "&euml;",
      "€": "&euro;",
      "!": "&excl;",
      "ф": "&fcy;",
      "♀": "&female;",
      "ﬃ": "&ffilig;",
      "ﬀ": "&fflig;",
      "ﬄ": "&ffllig;",
      "𝔣": "&ffr;",
      "ﬁ": "&filig;",
      fj: "&fjlig;",
      "♭": "&flat;",
      "ﬂ": "&fllig;",
      "▱": "&fltns;",
      "ƒ": "&fnof;",
      "𝕗": "&fopf;",
      "⋔": "&pitchfork;",
      "⫙": "&forkv;",
      "⨍": "&fpartint;",
      "½": "&half;",
      "⅓": "&frac13;",
      "¼": "&frac14;",
      "⅕": "&frac15;",
      "⅙": "&frac16;",
      "⅛": "&frac18;",
      "⅔": "&frac23;",
      "⅖": "&frac25;",
      "¾": "&frac34;",
      "⅗": "&frac35;",
      "⅜": "&frac38;",
      "⅘": "&frac45;",
      "⅚": "&frac56;",
      "⅝": "&frac58;",
      "⅞": "&frac78;",
      "⁄": "&frasl;",
      "⌢": "&sfrown;",
      "𝒻": "&fscr;",
      "⪌": "&gtreqqless;",
      "ǵ": "&gacute;",
      "γ": "&gamma;",
      "⪆": "&gtrapprox;",
      "ğ": "&gbreve;",
      "ĝ": "&gcirc;",
      "г": "&gcy;",
      "ġ": "&gdot;",
      "⪩": "&gescc;",
      "⪀": "&gesdot;",
      "⪂": "&gesdoto;",
      "⪄": "&gesdotol;",
      "⋛︀": "&gesl;",
      "⪔": "&gesles;",
      "𝔤": "&gfr;",
      "ℷ": "&gimel;",
      "ѓ": "&gjcy;",
      "⪒": "&glE;",
      "⪥": "&gla;",
      "⪤": "&glj;",
      "≩": "&gneqq;",
      "⪊": "&gnapprox;",
      "⪈": "&gneq;",
      "⋧": "&gnsim;",
      "𝕘": "&gopf;",
      "ℊ": "&gscr;",
      "⪎": "&gsime;",
      "⪐": "&gsiml;",
      "⪧": "&gtcc;",
      "⩺": "&gtcir;",
      "⋗": "&gtrdot;",
      "⦕": "&gtlPar;",
      "⩼": "&gtquest;",
      "⥸": "&gtrarr;",
      "≩︀": "&gvnE;",
      "ъ": "&hardcy;",
      "⥈": "&harrcir;",
      "↭": "&leftrightsquigarrow;",
      "ℏ": "&plankv;",
      "ĥ": "&hcirc;",
      "♥": "&heartsuit;",
      "…": "&mldr;",
      "⊹": "&hercon;",
      "𝔥": "&hfr;",
      "⤥": "&searhk;",
      "⤦": "&swarhk;",
      "⇿": "&hoarr;",
      "∻": "&homtht;",
      "↩": "&larrhk;",
      "↪": "&rarrhk;",
      "𝕙": "&hopf;",
      "―": "&horbar;",
      "𝒽": "&hscr;",
      "ħ": "&hstrok;",
      "⁃": "&hybull;",
      "í": "&iacute;",
      "î": "&icirc;",
      "и": "&icy;",
      "е": "&iecy;",
      "¡": "&iexcl;",
      "𝔦": "&ifr;",
      "ì": "&igrave;",
      "⨌": "&qint;",
      "∭": "&tint;",
      "⧜": "&iinfin;",
      "℩": "&iiota;",
      "ĳ": "&ijlig;",
      "ī": "&imacr;",
      "ı": "&inodot;",
      "⊷": "&imof;",
      "Ƶ": "&imped;",
      "℅": "&incare;",
      "∞": "&infin;",
      "⧝": "&infintie;",
      "⊺": "&intercal;",
      "⨗": "&intlarhk;",
      "⨼": "&iprod;",
      "ё": "&iocy;",
      "į": "&iogon;",
      "𝕚": "&iopf;",
      "ι": "&iota;",
      "¿": "&iquest;",
      "𝒾": "&iscr;",
      "⋹": "&isinE;",
      "⋵": "&isindot;",
      "⋴": "&isins;",
      "⋳": "&isinsv;",
      "ĩ": "&itilde;",
      "і": "&iukcy;",
      "ï": "&iuml;",
      "ĵ": "&jcirc;",
      "й": "&jcy;",
      "𝔧": "&jfr;",
      "ȷ": "&jmath;",
      "𝕛": "&jopf;",
      "𝒿": "&jscr;",
      "ј": "&jsercy;",
      "є": "&jukcy;",
      "κ": "&kappa;",
      "ϰ": "&varkappa;",
      "ķ": "&kcedil;",
      "к": "&kcy;",
      "𝔨": "&kfr;",
      "ĸ": "&kgreen;",
      "х": "&khcy;",
      "ќ": "&kjcy;",
      "𝕜": "&kopf;",
      "𝓀": "&kscr;",
      "⤛": "&lAtail;",
      "⤎": "&lBarr;",
      "⪋": "&lesseqqgtr;",
      "⥢": "&lHar;",
      "ĺ": "&lacute;",
      "⦴": "&laemptyv;",
      "λ": "&lambda;",
      "⦑": "&langd;",
      "⪅": "&lessapprox;",
      "«": "&laquo;",
      "⤟": "&larrbfs;",
      "⤝": "&larrfs;",
      "↫": "&looparrowleft;",
      "⤹": "&larrpl;",
      "⥳": "&larrsim;",
      "↢": "&leftarrowtail;",
      "⪫": "&lat;",
      "⤙": "&latail;",
      "⪭": "&late;",
      "⪭︀": "&lates;",
      "⤌": "&lbarr;",
      "❲": "&lbbrk;",
      "{": "&lcub;",
      "[": "&lsqb;",
      "⦋": "&lbrke;",
      "⦏": "&lbrksld;",
      "⦍": "&lbrkslu;",
      "ľ": "&lcaron;",
      "ļ": "&lcedil;",
      "л": "&lcy;",
      "⤶": "&ldca;",
      "⥧": "&ldrdhar;",
      "⥋": "&ldrushar;",
      "↲": "&ldsh;",
      "≤": "&leq;",
      "⇇": "&llarr;",
      "⋋": "&lthree;",
      "⪨": "&lescc;",
      "⩿": "&lesdot;",
      "⪁": "&lesdoto;",
      "⪃": "&lesdotor;",
      "⋚︀": "&lesg;",
      "⪓": "&lesges;",
      "⋖": "&ltdot;",
      "⥼": "&lfisht;",
      "𝔩": "&lfr;",
      "⪑": "&lgE;",
      "⥪": "&lharul;",
      "▄": "&lhblk;",
      "љ": "&ljcy;",
      "⥫": "&llhard;",
      "◺": "&lltri;",
      "ŀ": "&lmidot;",
      "⎰": "&lmoustache;",
      "≨": "&lneqq;",
      "⪉": "&lnapprox;",
      "⪇": "&lneq;",
      "⋦": "&lnsim;",
      "⟬": "&loang;",
      "⇽": "&loarr;",
      "⟼": "&xmap;",
      "↬": "&rarrlp;",
      "⦅": "&lopar;",
      "𝕝": "&lopf;",
      "⨭": "&loplus;",
      "⨴": "&lotimes;",
      "∗": "&lowast;",
      "◊": "&lozenge;",
      "(": "&lpar;",
      "⦓": "&lparlt;",
      "⥭": "&lrhard;",
      "‎": "&lrm;",
      "⊿": "&lrtri;",
      "‹": "&lsaquo;",
      "𝓁": "&lscr;",
      "⪍": "&lsime;",
      "⪏": "&lsimg;",
      "‚": "&sbquo;",
      "ł": "&lstrok;",
      "⪦": "&ltcc;",
      "⩹": "&ltcir;",
      "⋉": "&ltimes;",
      "⥶": "&ltlarr;",
      "⩻": "&ltquest;",
      "⦖": "&ltrPar;",
      "◃": "&triangleleft;",
      "⥊": "&lurdshar;",
      "⥦": "&luruhar;",
      "≨︀": "&lvnE;",
      "∺": "&mDDot;",
      "¯": "&strns;",
      "♂": "&male;",
      "✠": "&maltese;",
      "▮": "&marker;",
      "⨩": "&mcomma;",
      "м": "&mcy;",
      "—": "&mdash;",
      "𝔪": "&mfr;",
      "℧": "&mho;",
      "µ": "&micro;",
      "⫰": "&midcir;",
      "−": "&minus;",
      "⨪": "&minusdu;",
      "⫛": "&mlcp;",
      "⊧": "&models;",
      "𝕞": "&mopf;",
      "𝓂": "&mscr;",
      "μ": "&mu;",
      "⊸": "&mumap;",
      "⋙̸": "&nGg;",
      "≫⃒": "&nGt;",
      "⇍": "&nlArr;",
      "⇎": "&nhArr;",
      "⋘̸": "&nLl;",
      "≪⃒": "&nLt;",
      "⇏": "&nrArr;",
      "⊯": "&nVDash;",
      "⊮": "&nVdash;",
      "ń": "&nacute;",
      "∠⃒": "&nang;",
      "⩰̸": "&napE;",
      "≋̸": "&napid;",
      "ŉ": "&napos;",
      "♮": "&natural;",
      "⩃": "&ncap;",
      "ň": "&ncaron;",
      "ņ": "&ncedil;",
      "⩭̸": "&ncongdot;",
      "⩂": "&ncup;",
      "н": "&ncy;",
      "–": "&ndash;",
      "⇗": "&neArr;",
      "⤤": "&nearhk;",
      "≐̸": "&nedot;",
      "⤨": "&toea;",
      "𝔫": "&nfr;",
      "↮": "&nleftrightarrow;",
      "⫲": "&nhpar;",
      "⋼": "&nis;",
      "⋺": "&nisd;",
      "њ": "&njcy;",
      "≦̸": "&nleqq;",
      "↚": "&nleftarrow;",
      "‥": "&nldr;",
      "𝕟": "&nopf;",
      "¬": "&not;",
      "⋹̸": "&notinE;",
      "⋵̸": "&notindot;",
      "⋷": "&notinvb;",
      "⋶": "&notinvc;",
      "⋾": "&notnivb;",
      "⋽": "&notnivc;",
      "⫽⃥": "&nparsl;",
      "∂̸": "&npart;",
      "⨔": "&npolint;",
      "↛": "&nrightarrow;",
      "⤳̸": "&nrarrc;",
      "↝̸": "&nrarrw;",
      "𝓃": "&nscr;",
      "⊄": "&nsub;",
      "⫅̸": "&nsubseteqq;",
      "⊅": "&nsup;",
      "⫆̸": "&nsupseteqq;",
      "ñ": "&ntilde;",
      "ν": "&nu;",
      "#": "&num;",
      "№": "&numero;",
      " ": "&numsp;",
      "⊭": "&nvDash;",
      "⤄": "&nvHarr;",
      "≍⃒": "&nvap;",
      "⊬": "&nvdash;",
      "≥⃒": "&nvge;",
      ">⃒": "&nvgt;",
      "⧞": "&nvinfin;",
      "⤂": "&nvlArr;",
      "≤⃒": "&nvle;",
      "<⃒": "&nvlt;",
      "⊴⃒": "&nvltrie;",
      "⤃": "&nvrArr;",
      "⊵⃒": "&nvrtrie;",
      "∼⃒": "&nvsim;",
      "⇖": "&nwArr;",
      "⤣": "&nwarhk;",
      "⤧": "&nwnear;",
      "ó": "&oacute;",
      "ô": "&ocirc;",
      "о": "&ocy;",
      "ő": "&odblac;",
      "⨸": "&odiv;",
      "⦼": "&odsold;",
      "œ": "&oelig;",
      "⦿": "&ofcir;",
      "𝔬": "&ofr;",
      "˛": "&ogon;",
      "ò": "&ograve;",
      "⧁": "&ogt;",
      "⦵": "&ohbar;",
      "⦾": "&olcir;",
      "⦻": "&olcross;",
      "⧀": "&olt;",
      "ō": "&omacr;",
      "ω": "&omega;",
      "ο": "&omicron;",
      "⦶": "&omid;",
      "𝕠": "&oopf;",
      "⦷": "&opar;",
      "⦹": "&operp;",
      "∨": "&vee;",
      "⩝": "&ord;",
      "ℴ": "&oscr;",
      "ª": "&ordf;",
      "º": "&ordm;",
      "⊶": "&origof;",
      "⩖": "&oror;",
      "⩗": "&orslope;",
      "⩛": "&orv;",
      "ø": "&oslash;",
      "⊘": "&osol;",
      "õ": "&otilde;",
      "⨶": "&otimesas;",
      "ö": "&ouml;",
      "⌽": "&ovbar;",
      "¶": "&para;",
      "⫳": "&parsim;",
      "⫽": "&parsl;",
      "п": "&pcy;",
      "%": "&percnt;",
      ".": "&period;",
      "‰": "&permil;",
      "‱": "&pertenk;",
      "𝔭": "&pfr;",
      "φ": "&phi;",
      "ϕ": "&varphi;",
      "☎": "&phone;",
      "π": "&pi;",
      "ϖ": "&varpi;",
      "ℎ": "&planckh;",
      "+": "&plus;",
      "⨣": "&plusacir;",
      "⨢": "&pluscir;",
      "⨥": "&plusdu;",
      "⩲": "&pluse;",
      "⨦": "&plussim;",
      "⨧": "&plustwo;",
      "⨕": "&pointint;",
      "𝕡": "&popf;",
      "£": "&pound;",
      "⪳": "&prE;",
      "⪷": "&precapprox;",
      "⪹": "&prnap;",
      "⪵": "&prnE;",
      "⋨": "&prnsim;",
      "′": "&prime;",
      "⌮": "&profalar;",
      "⌒": "&profline;",
      "⌓": "&profsurf;",
      "⊰": "&prurel;",
      "𝓅": "&pscr;",
      "ψ": "&psi;",
      " ": "&puncsp;",
      "𝔮": "&qfr;",
      "𝕢": "&qopf;",
      "⁗": "&qprime;",
      "𝓆": "&qscr;",
      "⨖": "&quatint;",
      "?": "&quest;",
      "⤜": "&rAtail;",
      "⥤": "&rHar;",
      "∽̱": "&race;",
      "ŕ": "&racute;",
      "⦳": "&raemptyv;",
      "⦒": "&rangd;",
      "⦥": "&range;",
      "»": "&raquo;",
      "⥵": "&rarrap;",
      "⤠": "&rarrbfs;",
      "⤳": "&rarrc;",
      "⤞": "&rarrfs;",
      "⥅": "&rarrpl;",
      "⥴": "&rarrsim;",
      "↣": "&rightarrowtail;",
      "↝": "&rightsquigarrow;",
      "⤚": "&ratail;",
      "∶": "&ratio;",
      "❳": "&rbbrk;",
      "}": "&rcub;",
      "]": "&rsqb;",
      "⦌": "&rbrke;",
      "⦎": "&rbrksld;",
      "⦐": "&rbrkslu;",
      "ř": "&rcaron;",
      "ŗ": "&rcedil;",
      "р": "&rcy;",
      "⤷": "&rdca;",
      "⥩": "&rdldhar;",
      "↳": "&rdsh;",
      "▭": "&rect;",
      "⥽": "&rfisht;",
      "𝔯": "&rfr;",
      "⥬": "&rharul;",
      "ρ": "&rho;",
      "ϱ": "&varrho;",
      "⇉": "&rrarr;",
      "⋌": "&rthree;",
      "˚": "&ring;",
      "‏": "&rlm;",
      "⎱": "&rmoustache;",
      "⫮": "&rnmid;",
      "⟭": "&roang;",
      "⇾": "&roarr;",
      "⦆": "&ropar;",
      "𝕣": "&ropf;",
      "⨮": "&roplus;",
      "⨵": "&rotimes;",
      ")": "&rpar;",
      "⦔": "&rpargt;",
      "⨒": "&rppolint;",
      "›": "&rsaquo;",
      "𝓇": "&rscr;",
      "⋊": "&rtimes;",
      "▹": "&triangleright;",
      "⧎": "&rtriltri;",
      "⥨": "&ruluhar;",
      "℞": "&rx;",
      "ś": "&sacute;",
      "⪴": "&scE;",
      "⪸": "&succapprox;",
      "š": "&scaron;",
      "ş": "&scedil;",
      "ŝ": "&scirc;",
      "⪶": "&succneqq;",
      "⪺": "&succnapprox;",
      "⋩": "&succnsim;",
      "⨓": "&scpolint;",
      "с": "&scy;",
      "⋅": "&sdot;",
      "⩦": "&sdote;",
      "⇘": "&seArr;",
      "§": "&sect;",
      ";": "&semi;",
      "⤩": "&tosa;",
      "✶": "&sext;",
      "𝔰": "&sfr;",
      "♯": "&sharp;",
      "щ": "&shchcy;",
      "ш": "&shcy;",
      "­": "&shy;",
      "σ": "&sigma;",
      "ς": "&varsigma;",
      "⩪": "&simdot;",
      "⪞": "&simg;",
      "⪠": "&simgE;",
      "⪝": "&siml;",
      "⪟": "&simlE;",
      "≆": "&simne;",
      "⨤": "&simplus;",
      "⥲": "&simrarr;",
      "⨳": "&smashp;",
      "⧤": "&smeparsl;",
      "⌣": "&ssmile;",
      "⪪": "&smt;",
      "⪬": "&smte;",
      "⪬︀": "&smtes;",
      "ь": "&softcy;",
      "/": "&sol;",
      "⧄": "&solb;",
      "⌿": "&solbar;",
      "𝕤": "&sopf;",
      "♠": "&spadesuit;",
      "⊓︀": "&sqcaps;",
      "⊔︀": "&sqcups;",
      "𝓈": "&sscr;",
      "☆": "&star;",
      "⊂": "&subset;",
      "⫅": "&subseteqq;",
      "⪽": "&subdot;",
      "⫃": "&subedot;",
      "⫁": "&submult;",
      "⫋": "&subsetneqq;",
      "⊊": "&subsetneq;",
      "⪿": "&subplus;",
      "⥹": "&subrarr;",
      "⫇": "&subsim;",
      "⫕": "&subsub;",
      "⫓": "&subsup;",
      "♪": "&sung;",
      "¹": "&sup1;",
      "²": "&sup2;",
      "³": "&sup3;",
      "⫆": "&supseteqq;",
      "⪾": "&supdot;",
      "⫘": "&supdsub;",
      "⫄": "&supedot;",
      "⟉": "&suphsol;",
      "⫗": "&suphsub;",
      "⥻": "&suplarr;",
      "⫂": "&supmult;",
      "⫌": "&supsetneqq;",
      "⊋": "&supsetneq;",
      "⫀": "&supplus;",
      "⫈": "&supsim;",
      "⫔": "&supsub;",
      "⫖": "&supsup;",
      "⇙": "&swArr;",
      "⤪": "&swnwar;",
      "ß": "&szlig;",
      "⌖": "&target;",
      "τ": "&tau;",
      "ť": "&tcaron;",
      "ţ": "&tcedil;",
      "т": "&tcy;",
      "⌕": "&telrec;",
      "𝔱": "&tfr;",
      "θ": "&theta;",
      "ϑ": "&vartheta;",
      "þ": "&thorn;",
      "×": "&times;",
      "⨱": "&timesbar;",
      "⨰": "&timesd;",
      "⌶": "&topbot;",
      "⫱": "&topcir;",
      "𝕥": "&topf;",
      "⫚": "&topfork;",
      "‴": "&tprime;",
      "▵": "&utri;",
      "≜": "&trie;",
      "◬": "&tridot;",
      "⨺": "&triminus;",
      "⨹": "&triplus;",
      "⧍": "&trisb;",
      "⨻": "&tritime;",
      "⏢": "&trpezium;",
      "𝓉": "&tscr;",
      "ц": "&tscy;",
      "ћ": "&tshcy;",
      "ŧ": "&tstrok;",
      "⥣": "&uHar;",
      "ú": "&uacute;",
      "ў": "&ubrcy;",
      "ŭ": "&ubreve;",
      "û": "&ucirc;",
      "у": "&ucy;",
      "ű": "&udblac;",
      "⥾": "&ufisht;",
      "𝔲": "&ufr;",
      "ù": "&ugrave;",
      "▀": "&uhblk;",
      "⌜": "&ulcorner;",
      "⌏": "&ulcrop;",
      "◸": "&ultri;",
      "ū": "&umacr;",
      "ų": "&uogon;",
      "𝕦": "&uopf;",
      "υ": "&upsilon;",
      "⇈": "&uuarr;",
      "⌝": "&urcorner;",
      "⌎": "&urcrop;",
      "ů": "&uring;",
      "◹": "&urtri;",
      "𝓊": "&uscr;",
      "⋰": "&utdot;",
      "ũ": "&utilde;",
      "ü": "&uuml;",
      "⦧": "&uwangle;",
      "⫨": "&vBar;",
      "⫩": "&vBarv;",
      "⦜": "&vangrt;",
      "⊊︀": "&vsubne;",
      "⫋︀": "&vsubnE;",
      "⊋︀": "&vsupne;",
      "⫌︀": "&vsupnE;",
      "в": "&vcy;",
      "⊻": "&veebar;",
      "≚": "&veeeq;",
      "⋮": "&vellip;",
      "𝔳": "&vfr;",
      "𝕧": "&vopf;",
      "𝓋": "&vscr;",
      "⦚": "&vzigzag;",
      "ŵ": "&wcirc;",
      "⩟": "&wedbar;",
      "≙": "&wedgeq;",
      "℘": "&wp;",
      "𝔴": "&wfr;",
      "𝕨": "&wopf;",
      "𝓌": "&wscr;",
      "𝔵": "&xfr;",
      "ξ": "&xi;",
      "⋻": "&xnis;",
      "𝕩": "&xopf;",
      "𝓍": "&xscr;",
      "ý": "&yacute;",
      "я": "&yacy;",
      "ŷ": "&ycirc;",
      "ы": "&ycy;",
      "¥": "&yen;",
      "𝔶": "&yfr;",
      "ї": "&yicy;",
      "𝕪": "&yopf;",
      "𝓎": "&yscr;",
      "ю": "&yucy;",
      "ÿ": "&yuml;",
      "ź": "&zacute;",
      "ž": "&zcaron;",
      "з": "&zcy;",
      "ż": "&zdot;",
      "ζ": "&zeta;",
      "𝔷": "&zfr;",
      "ж": "&zhcy;",
      "⇝": "&zigrarr;",
      "𝕫": "&zopf;",
      "𝓏": "&zscr;",
      "‍": "&zwj;",
      "‌": "&zwnj;"
    }
  }
};

/***/ }),

/***/ "./node_modules/html-entities/lib/numeric-unicode-map.js":
/*!***************************************************************!*\
  !*** ./node_modules/html-entities/lib/numeric-unicode-map.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.numericUnicodeMap = {
  0: 65533,
  128: 8364,
  130: 8218,
  131: 402,
  132: 8222,
  133: 8230,
  134: 8224,
  135: 8225,
  136: 710,
  137: 8240,
  138: 352,
  139: 8249,
  140: 338,
  142: 381,
  145: 8216,
  146: 8217,
  147: 8220,
  148: 8221,
  149: 8226,
  150: 8211,
  151: 8212,
  152: 732,
  153: 8482,
  154: 353,
  155: 8250,
  156: 339,
  158: 382,
  159: 376
};

/***/ }),

/***/ "./node_modules/html-entities/lib/surrogate-pairs.js":
/*!***********************************************************!*\
  !*** ./node_modules/html-entities/lib/surrogate-pairs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

exports.fromCodePoint = String.fromCodePoint || function (astralCodePoint) {
  return String.fromCharCode(Math.floor((astralCodePoint - 65536) / 1024) + 55296, (astralCodePoint - 65536) % 1024 + 56320);
};

exports.getCodePoint = String.prototype.codePointAt ? function (input, position) {
  return input.codePointAt(position);
} : function (input, position) {
  return (input.charCodeAt(position) - 55296) * 1024 + input.charCodeAt(position + 1) - 56320 + 65536;
};
exports.highSurrogateFrom = 55296;
exports.highSurrogateTo = 56319;

/***/ }),

/***/ "./node_modules/imagesloaded/imagesloaded.js":
/*!***************************************************!*\
  !*** ./node_modules/imagesloaded/imagesloaded.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function (window, factory) {
  // universal module definition
  if ( true && module.exports) {
    // CommonJS
    module.exports = factory(window, __webpack_require__(/*! ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"));
  } else {
    // browser global
    window.imagesLoaded = factory(window, window.EvEmitter);
  }
})(typeof window !== 'undefined' ? window : this, function factory(window, EvEmitter) {
  let $ = window.jQuery;
  let console = window.console; // -------------------------- helpers -------------------------- //
  // turn element or nodeList into an array

  function makeArray(obj) {
    // use object if already an array
    if (Array.isArray(obj)) return obj;
    let isArrayLike = typeof obj == 'object' && typeof obj.length == 'number'; // convert nodeList to array

    if (isArrayLike) return [...obj]; // array of single index

    return [obj];
  } // -------------------------- imagesLoaded -------------------------- //

  /**
   * @param {[Array, Element, NodeList, String]} elem
   * @param {[Object, Function]} options - if function, use as callback
   * @param {Function} onAlways - callback function
   * @returns {ImagesLoaded}
   */


  function ImagesLoaded(elem, options, onAlways) {
    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
    if (!(this instanceof ImagesLoaded)) {
      return new ImagesLoaded(elem, options, onAlways);
    } // use elem as selector string


    let queryElem = elem;

    if (typeof elem == 'string') {
      queryElem = document.querySelectorAll(elem);
    } // bail if bad element


    if (!queryElem) {
      console.error(`Bad element for imagesLoaded ${queryElem || elem}`);
      return;
    }

    this.elements = makeArray(queryElem);
    this.options = {}; // shift arguments if no options set

    if (typeof options == 'function') {
      onAlways = options;
    } else {
      Object.assign(this.options, options);
    }

    if (onAlways) this.on('always', onAlways);
    this.getImages(); // add jQuery Deferred object

    if ($) this.jqDeferred = new $.Deferred(); // HACK check async to allow time to bind listeners

    setTimeout(this.check.bind(this));
  }

  ImagesLoaded.prototype = Object.create(EvEmitter.prototype);

  ImagesLoaded.prototype.getImages = function () {
    this.images = []; // filter & find items if we have an item selector

    this.elements.forEach(this.addElementImages, this);
  };

  const elementNodeTypes = [1, 9, 11];
  /**
   * @param {Node} elem
   */

  ImagesLoaded.prototype.addElementImages = function (elem) {
    // filter siblings
    if (elem.nodeName === 'IMG') {
      this.addImage(elem);
    } // get background image on element


    if (this.options.background === true) {
      this.addElementBackgroundImages(elem);
    } // find children
    // no non-element nodes, #143


    let {
      nodeType
    } = elem;
    if (!nodeType || !elementNodeTypes.includes(nodeType)) return;
    let childImgs = elem.querySelectorAll('img'); // concat childElems to filterFound array

    for (let img of childImgs) {
      this.addImage(img);
    } // get child background images


    if (typeof this.options.background == 'string') {
      let children = elem.querySelectorAll(this.options.background);

      for (let child of children) {
        this.addElementBackgroundImages(child);
      }
    }
  };

  const reURL = /url\((['"])?(.*?)\1\)/gi;

  ImagesLoaded.prototype.addElementBackgroundImages = function (elem) {
    let style = getComputedStyle(elem); // Firefox returns null if in a hidden iframe https://bugzil.la/548397

    if (!style) return; // get url inside url("...")

    let matches = reURL.exec(style.backgroundImage);

    while (matches !== null) {
      let url = matches && matches[2];

      if (url) {
        this.addBackground(url, elem);
      }

      matches = reURL.exec(style.backgroundImage);
    }
  };
  /**
   * @param {Image} img
   */


  ImagesLoaded.prototype.addImage = function (img) {
    let loadingImage = new LoadingImage(img);
    this.images.push(loadingImage);
  };

  ImagesLoaded.prototype.addBackground = function (url, elem) {
    let background = new Background(url, elem);
    this.images.push(background);
  };

  ImagesLoaded.prototype.check = function () {
    this.progressedCount = 0;
    this.hasAnyBroken = false; // complete if no images

    if (!this.images.length) {
      this.complete();
      return;
    }
    /* eslint-disable-next-line func-style */


    let onProgress = (image, elem, message) => {
      // HACK - Chrome triggers event before object properties have changed. #83
      setTimeout(() => {
        this.progress(image, elem, message);
      });
    };

    this.images.forEach(function (loadingImage) {
      loadingImage.once('progress', onProgress);
      loadingImage.check();
    });
  };

  ImagesLoaded.prototype.progress = function (image, elem, message) {
    this.progressedCount++;
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded; // progress event

    this.emitEvent('progress', [this, image, elem]);

    if (this.jqDeferred && this.jqDeferred.notify) {
      this.jqDeferred.notify(this, image);
    } // check if completed


    if (this.progressedCount === this.images.length) {
      this.complete();
    }

    if (this.options.debug && console) {
      console.log(`progress: ${message}`, image, elem);
    }
  };

  ImagesLoaded.prototype.complete = function () {
    let eventName = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    this.emitEvent(eventName, [this]);
    this.emitEvent('always', [this]);

    if (this.jqDeferred) {
      let jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
      this.jqDeferred[jqMethod](this);
    }
  }; // --------------------------  -------------------------- //


  function LoadingImage(img) {
    this.img = img;
  }

  LoadingImage.prototype = Object.create(EvEmitter.prototype);

  LoadingImage.prototype.check = function () {
    // If complete is true and browser supports natural sizes,
    // try to check for image status manually.
    let isComplete = this.getIsImageComplete();

    if (isComplete) {
      // report based on naturalWidth
      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
      return;
    } // If none of the checks above matched, simulate loading on detached element.


    this.proxyImage = new Image(); // add crossOrigin attribute. #204

    if (this.img.crossOrigin) {
      this.proxyImage.crossOrigin = this.img.crossOrigin;
    }

    this.proxyImage.addEventListener('load', this);
    this.proxyImage.addEventListener('error', this); // bind to image as well for Firefox. #191

    this.img.addEventListener('load', this);
    this.img.addEventListener('error', this);
    this.proxyImage.src = this.img.currentSrc || this.img.src;
  };

  LoadingImage.prototype.getIsImageComplete = function () {
    // check for non-zero, non-undefined naturalWidth
    // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
    return this.img.complete && this.img.naturalWidth;
  };

  LoadingImage.prototype.confirm = function (isLoaded, message) {
    this.isLoaded = isLoaded;
    let {
      parentNode
    } = this.img; // emit progress with parent <picture> or self <img>

    let elem = parentNode.nodeName === 'PICTURE' ? parentNode : this.img;
    this.emitEvent('progress', [this, elem, message]);
  }; // ----- events ----- //
  // trigger specified handler for event type


  LoadingImage.prototype.handleEvent = function (event) {
    let method = 'on' + event.type;

    if (this[method]) {
      this[method](event);
    }
  };

  LoadingImage.prototype.onload = function () {
    this.confirm(true, 'onload');
    this.unbindEvents();
  };

  LoadingImage.prototype.onerror = function () {
    this.confirm(false, 'onerror');
    this.unbindEvents();
  };

  LoadingImage.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener('load', this);
    this.proxyImage.removeEventListener('error', this);
    this.img.removeEventListener('load', this);
    this.img.removeEventListener('error', this);
  }; // -------------------------- Background -------------------------- //


  function Background(url, element) {
    this.url = url;
    this.element = element;
    this.img = new Image();
  } // inherit LoadingImage prototype


  Background.prototype = Object.create(LoadingImage.prototype);

  Background.prototype.check = function () {
    this.img.addEventListener('load', this);
    this.img.addEventListener('error', this);
    this.img.src = this.url; // check if image is already complete

    let isComplete = this.getIsImageComplete();

    if (isComplete) {
      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
      this.unbindEvents();
    }
  };

  Background.prototype.unbindEvents = function () {
    this.img.removeEventListener('load', this);
    this.img.removeEventListener('error', this);
  };

  Background.prototype.confirm = function (isLoaded, message) {
    this.isLoaded = isLoaded;
    this.emitEvent('progress', [this, this.element, message]);
  }; // -------------------------- jQuery -------------------------- //


  ImagesLoaded.makeJQueryPlugin = function (jQuery) {
    jQuery = jQuery || window.jQuery;
    if (!jQuery) return; // set local variable

    $ = jQuery; // $().imagesLoaded()

    $.fn.imagesLoaded = function (options, onAlways) {
      let instance = new ImagesLoaded(this, options, onAlways);
      return instance.jqDeferred.promise($(this));
    };
  }; // try making plugin


  ImagesLoaded.makeJQueryPlugin(); // --------------------------  -------------------------- //

  return ImagesLoaded;
});

/***/ }),

/***/ "./node_modules/normalize-wheel/index.js":
/*!***********************************************!*\
  !*** ./node_modules/normalize-wheel/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./src/normalizeWheel.js */ "./node_modules/normalize-wheel/src/normalizeWheel.js");

/***/ }),

/***/ "./node_modules/normalize-wheel/src/ExecutionEnvironment.js":
/*!******************************************************************!*\
  !*** ./node_modules/normalize-wheel/src/ExecutionEnvironment.js ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

/*jslint evil: true */


var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */

var ExecutionEnvironment = {
  canUseDOM: canUseDOM,
  canUseWorkers: typeof Worker !== 'undefined',
  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
  canUseViewport: canUseDOM && !!window.screen,
  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};
module.exports = ExecutionEnvironment;

/***/ }),

/***/ "./node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js":
/*!******************************************************************!*\
  !*** ./node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js ***!
  \******************************************************************/
/***/ ((module) => {

/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule UserAgent_DEPRECATED
 */

/**
 *  Provides entirely client-side User Agent and OS detection. You should prefer
 *  the non-deprecated UserAgent module when possible, which exposes our
 *  authoritative server-side PHP-based detection to the client.
 *
 *  Usage is straightforward:
 *
 *    if (UserAgent_DEPRECATED.ie()) {
 *      //  IE
 *    }
 *
 *  You can also do version checks:
 *
 *    if (UserAgent_DEPRECATED.ie() >= 7) {
 *      //  IE7 or better
 *    }
 *
 *  The browser functions will return NaN if the browser does not match, so
 *  you can also do version compares the other way:
 *
 *    if (UserAgent_DEPRECATED.ie() < 7) {
 *      //  IE6 or worse
 *    }
 *
 *  Note that the version is a float and may include a minor version number,
 *  so you should always use range operators to perform comparisons, not
 *  strict equality.
 *
 *  **Note:** You should **strongly** prefer capability detection to browser
 *  version detection where it's reasonable:
 *
 *    http://www.quirksmode.org/js/support.html
 *
 *  Further, we have a large number of mature wrapper functions and classes
 *  which abstract away many browser irregularities. Check the documentation,
 *  grep for things, or ask on javascript@lists.facebook.com before writing yet
 *  another copy of "event || window.event".
 *
 */
var _populated = false; // Browsers

var _ie, _firefox, _opera, _webkit, _chrome; // Actual IE browser for compatibility mode


var _ie_real_version; // Platforms


var _osx, _windows, _linux, _android; // Architectures


var _win64; // Devices


var _iphone, _ipad, _native;

var _mobile;

function _populate() {
  if (_populated) {
    return;
  }

  _populated = true; // To work around buggy JS libraries that can't handle multi-digit
  // version numbers, Opera 10's user agent string claims it's Opera
  // 9, then later includes a Version/X.Y field:
  //
  // Opera/9.80 (foo) Presto/2.2.15 Version/10.10

  var uas = navigator.userAgent;
  var agent = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas);
  var os = /(Mac OS X)|(Windows)|(Linux)/.exec(uas);
  _iphone = /\b(iPhone|iP[ao]d)/.exec(uas);
  _ipad = /\b(iP[ao]d)/.exec(uas);
  _android = /Android/i.exec(uas);
  _native = /FBAN\/\w+;/i.exec(uas);
  _mobile = /Mobile/i.exec(uas); // Note that the IE team blog would have you believe you should be checking
  // for 'Win64; x64'.  But MSDN then reveals that you can actually be coming
  // from either x64 or ia64;  so ultimately, you should just check for Win64
  // as in indicator of whether you're in 64-bit IE.  32-bit IE on 64-bit
  // Windows will send 'WOW64' instead.

  _win64 = !!/Win64/.exec(uas);

  if (agent) {
    _ie = agent[1] ? parseFloat(agent[1]) : agent[5] ? parseFloat(agent[5]) : NaN; // IE compatibility mode

    if (_ie && document && document.documentMode) {
      _ie = document.documentMode;
    } // grab the "true" ie version from the trident token if available


    var trident = /(?:Trident\/(\d+.\d+))/.exec(uas);
    _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie;
    _firefox = agent[2] ? parseFloat(agent[2]) : NaN;
    _opera = agent[3] ? parseFloat(agent[3]) : NaN;
    _webkit = agent[4] ? parseFloat(agent[4]) : NaN;

    if (_webkit) {
      // We do not add the regexp to the above test, because it will always
      // match 'safari' only since 'AppleWebKit' appears before 'Chrome' in
      // the userAgent string.
      agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas);
      _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN;
    } else {
      _chrome = NaN;
    }
  } else {
    _ie = _firefox = _opera = _chrome = _webkit = NaN;
  }

  if (os) {
    if (os[1]) {
      // Detect OS X version.  If no version number matches, set _osx to true.
      // Version examples:  10, 10_6_1, 10.7
      // Parses version number as a float, taking only first two sets of
      // digits.  If only one set of digits is found, returns just the major
      // version number.
      var ver = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);
      _osx = ver ? parseFloat(ver[1].replace('_', '.')) : true;
    } else {
      _osx = false;
    }

    _windows = !!os[2];
    _linux = !!os[3];
  } else {
    _osx = _windows = _linux = false;
  }
}

var UserAgent_DEPRECATED = {
  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function () {
    return _populate() || _ie;
  },

  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function () {
    return _populate() || _ie_real_version > _ie;
  },

  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function () {
    return UserAgent_DEPRECATED.ie() && _win64;
  },

  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function () {
    return _populate() || _firefox;
  },

  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function () {
    return _populate() || _opera;
  },

  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function () {
    return _populate() || _webkit;
  },

  /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */
  safari: function () {
    return UserAgent_DEPRECATED.webkit();
  },

  /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  chrome: function () {
    return _populate() || _chrome;
  },

  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function () {
    return _populate() || _windows;
  },

  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function () {
    return _populate() || _osx;
  },

  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function () {
    return _populate() || _linux;
  },

  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function () {
    return _populate() || _iphone;
  },
  mobile: function () {
    return _populate() || _iphone || _ipad || _android || _mobile;
  },
  nativeApp: function () {
    // webviews inside of the native apps
    return _populate() || _native;
  },
  android: function () {
    return _populate() || _android;
  },
  ipad: function () {
    return _populate() || _ipad;
  }
};
module.exports = UserAgent_DEPRECATED;

/***/ }),

/***/ "./node_modules/normalize-wheel/src/isEventSupported.js":
/*!**************************************************************!*\
  !*** ./node_modules/normalize-wheel/src/isEventSupported.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */


var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ "./node_modules/normalize-wheel/src/ExecutionEnvironment.js");

var useHasFeature;

if (ExecutionEnvironment.canUseDOM) {
  useHasFeature = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature('', '') !== true;
}
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */


function isEventSupported(eventNameSuffix, capture) {
  if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
    return false;
  }

  var eventName = 'on' + eventNameSuffix;
  var isSupported = (eventName in document);

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

module.exports = isEventSupported;

/***/ }),

/***/ "./node_modules/normalize-wheel/src/normalizeWheel.js":
/*!************************************************************!*\
  !*** ./node_modules/normalize-wheel/src/normalizeWheel.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule normalizeWheel
 * @typechecks
 */


var UserAgent_DEPRECATED = __webpack_require__(/*! ./UserAgent_DEPRECATED */ "./node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js");

var isEventSupported = __webpack_require__(/*! ./isEventSupported */ "./node_modules/normalize-wheel/src/isEventSupported.js"); // Reasonable defaults


var PIXEL_STEP = 10;
var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;
/**
 * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
 * complicated, thus this doc is long and (hopefully) detailed enough to answer
 * your questions.
 *
 * If you need to react to the mouse wheel in a predictable way, this code is
 * like your bestest friend. * hugs *
 *
 * As of today, there are 4 DOM event types you can listen to:
 *
 *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
 *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
 *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
 *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
 *
 * So what to do?  The is the best:
 *
 *   normalizeWheel.getEventType();
 *
 * In your event callback, use this code to get sane interpretation of the
 * deltas.  This code will return an object with properties:
 *
 *   spinX   -- normalized spin speed (use for zoom) - x plane
 *   spinY   -- " - y plane
 *   pixelX  -- normalized distance (to pixels) - x plane
 *   pixelY  -- " - y plane
 *
 * Wheel values are provided by the browser assuming you are using the wheel to
 * scroll a web page by a number of lines or pixels (or pages).  Values can vary
 * significantly on different platforms and browsers, forgetting that you can
 * scroll at different speeds.  Some devices (like trackpads) emit more events
 * at smaller increments with fine granularity, and some emit massive jumps with
 * linear speed or acceleration.
 *
 * This code does its best to normalize the deltas for you:
 *
 *   - spin is trying to normalize how far the wheel was spun (or trackpad
 *     dragged).  This is super useful for zoom support where you want to
 *     throw away the chunky scroll steps on the PC and make those equal to
 *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
 *     resolve a single slow step on a wheel to 1.
 *
 *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
 *     get the crazy differences between browsers, but at least it'll be in
 *     pixels!
 *
 *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
 *     should translate to positive value zooming IN, negative zooming OUT.
 *     This matches the newer 'wheel' event.
 *
 * Why are there spinX, spinY (or pixels)?
 *
 *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
 *     with a mouse.  It results in side-scrolling in the browser by default.
 *
 *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
 *
 *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
 *     probably is by browsers in conjunction with fancy 3D controllers .. but
 *     you know.
 *
 * Implementation info:
 *
 * Examples of 'wheel' event if you scroll slowly (down) by one step with an
 * average mouse:
 *
 *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
 *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
 *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
 *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
 *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
 *
 * On the trackpad:
 *
 *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
 *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
 *
 * On other/older browsers.. it's more complicated as there can be multiple and
 * also missing delta values.
 *
 * The 'wheel' event is more standard:
 *
 * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
 *
 * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
 * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
 * backward compatibility with older events.  Those other values help us
 * better normalize spin speed.  Example of what the browsers provide:
 *
 *                          | event.wheelDelta | event.detail
 *        ------------------+------------------+--------------
 *          Safari v5/OS X  |       -120       |       0
 *          Safari v5/Win7  |       -120       |       0
 *         Chrome v17/OS X  |       -120       |       0
 *         Chrome v17/Win7  |       -120       |       0
 *                IE9/Win7  |       -120       |   undefined
 *         Firefox v4/OS X  |     undefined    |       1
 *         Firefox v4/Win7  |     undefined    |       3
 *
 */

function normalizeWheel(
/*object*/
event)
/*object*/
{
  var sX = 0,
      sY = 0,
      // spinX, spinY
  pX = 0,
      pY = 0; // pixelX, pixelY
  // Legacy

  if ('detail' in event) {
    sY = event.detail;
  }

  if ('wheelDelta' in event) {
    sY = -event.wheelDelta / 120;
  }

  if ('wheelDeltaY' in event) {
    sY = -event.wheelDeltaY / 120;
  }

  if ('wheelDeltaX' in event) {
    sX = -event.wheelDeltaX / 120;
  } // side scrolling on FF with DOMMouseScroll


  if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
    sX = sY;
    sY = 0;
  }

  pX = sX * PIXEL_STEP;
  pY = sY * PIXEL_STEP;

  if ('deltaY' in event) {
    pY = event.deltaY;
  }

  if ('deltaX' in event) {
    pX = event.deltaX;
  }

  if ((pX || pY) && event.deltaMode) {
    if (event.deltaMode == 1) {
      // delta in LINE units
      pX *= LINE_HEIGHT;
      pY *= LINE_HEIGHT;
    } else {
      // delta in PAGE units
      pX *= PAGE_HEIGHT;
      pY *= PAGE_HEIGHT;
    }
  } // Fall-back if spin cannot be determined


  if (pX && !sX) {
    sX = pX < 1 ? -1 : 1;
  }

  if (pY && !sY) {
    sY = pY < 1 ? -1 : 1;
  }

  return {
    spinX: sX,
    spinY: sY,
    pixelX: pX,
    pixelY: pY
  };
}
/**
 * The best combination if you prefer spinX + spinY normalization.  It favors
 * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
 * 'wheel' event, making spin speed determination impossible.
 */


normalizeWheel.getEventType = function ()
/*string*/
{
  return UserAgent_DEPRECATED.firefox() ? 'DOMMouseScroll' : isEventSupported('wheel') ? 'wheel' : 'mousewheel';
};

module.exports = normalizeWheel;

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js":
/*!***************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WebSocketClient)
/* harmony export */ });
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}



var WebSocketClient = /*#__PURE__*/function () {
  /**
   * @param {string} url
   */
  function WebSocketClient(url) {
    _classCallCheck(this, WebSocketClient);

    this.client = new WebSocket(url);

    this.client.onerror = function (error) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_0__.log.error(error);
    };
  }
  /**
   * @param {(...args: any[]) => void} f
   */


  _createClass(WebSocketClient, [{
    key: "onOpen",
    value: function onOpen(f) {
      this.client.onopen = f;
    }
    /**
     * @param {(...args: any[]) => void} f
     */

  }, {
    key: "onClose",
    value: function onClose(f) {
      this.client.onclose = f;
    } // call f with the message string as the first argument

    /**
     * @param {(...args: any[]) => void} f
     */

  }, {
    key: "onMessage",
    value: function onMessage(f) {
      this.client.onmessage = function (e) {
        f(e.data);
      };
    }
  }]);

  return WebSocketClient;
}();



/***/ }),

/***/ "./node_modules/webpack-dev-server/client/modules/logger/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/modules/logger/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/******/
(function () {
  // webpackBootstrap

  /******/
  "use strict";
  /******/

  var __webpack_modules__ = {
    /***/
    "./client-src/modules/logger/SyncBailHookFake.js":
    /*!*******************************************************!*\
      !*** ./client-src/modules/logger/SyncBailHookFake.js ***!
      \*******************************************************/

    /***/
    function (module) {
      /**
       * Client stub for tapable SyncBailHook
       */
      module.exports = function clientTapableSyncBailHook() {
        return {
          call: function call() {}
        };
      };
      /***/

    },

    /***/
    "./node_modules/webpack/lib/logging/Logger.js":
    /*!****************************************************!*\
      !*** ./node_modules/webpack/lib/logging/Logger.js ***!
      \****************************************************/

    /***/
    function (__unused_webpack_module, exports) {
      /*
      	MIT License http://www.opensource.org/licenses/mit-license.php
      	Author Tobias Koppers @sokra
      */
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }

      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }

      function _iterableToArray(iter) {
        if (typeof (typeof Symbol !== "undefined" ? Symbol : function (i) {
          return i;
        }) !== "undefined" && iter[(typeof Symbol !== "undefined" ? Symbol : function (i) {
          return i;
        }).iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }

      var LogType = Object.freeze({
        error:
        /** @type {"error"} */
        "error",
        // message, c style arguments
        warn:
        /** @type {"warn"} */
        "warn",
        // message, c style arguments
        info:
        /** @type {"info"} */
        "info",
        // message, c style arguments
        log:
        /** @type {"log"} */
        "log",
        // message, c style arguments
        debug:
        /** @type {"debug"} */
        "debug",
        // message, c style arguments
        trace:
        /** @type {"trace"} */
        "trace",
        // no arguments
        group:
        /** @type {"group"} */
        "group",
        // [label]
        groupCollapsed:
        /** @type {"groupCollapsed"} */
        "groupCollapsed",
        // [label]
        groupEnd:
        /** @type {"groupEnd"} */
        "groupEnd",
        // [label]
        profile:
        /** @type {"profile"} */
        "profile",
        // [profileName]
        profileEnd:
        /** @type {"profileEnd"} */
        "profileEnd",
        // [profileName]
        time:
        /** @type {"time"} */
        "time",
        // name, time as [seconds, nanoseconds]
        clear:
        /** @type {"clear"} */
        "clear",
        // no arguments
        status:
        /** @type {"status"} */
        "status" // message, arguments

      });
      exports.LogType = LogType;
      /** @typedef {typeof LogType[keyof typeof LogType]} LogTypeEnum */

      var LOG_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) {
        return i;
      })("webpack logger raw log method");
      var TIMERS_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) {
        return i;
      })("webpack logger times");
      var TIMERS_AGGREGATES_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) {
        return i;
      })("webpack logger aggregated times");

      var WebpackLogger = /*#__PURE__*/function () {
        /**
         * @param {function(LogTypeEnum, any[]=): void} log log function
         * @param {function(string | function(): string): WebpackLogger} getChildLogger function to create child logger
         */
        function WebpackLogger(log, getChildLogger) {
          _classCallCheck(this, WebpackLogger);

          this[LOG_SYMBOL] = log;
          this.getChildLogger = getChildLogger;
        }

        _createClass(WebpackLogger, [{
          key: "error",
          value: function error() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            this[LOG_SYMBOL](LogType.error, args);
          }
        }, {
          key: "warn",
          value: function warn() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            this[LOG_SYMBOL](LogType.warn, args);
          }
        }, {
          key: "info",
          value: function info() {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            this[LOG_SYMBOL](LogType.info, args);
          }
        }, {
          key: "log",
          value: function log() {
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }

            this[LOG_SYMBOL](LogType.log, args);
          }
        }, {
          key: "debug",
          value: function debug() {
            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }

            this[LOG_SYMBOL](LogType.debug, args);
          }
        }, {
          key: "assert",
          value: function assert(assertion) {
            if (!assertion) {
              for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
                args[_key6 - 1] = arguments[_key6];
              }

              this[LOG_SYMBOL](LogType.error, args);
            }
          }
        }, {
          key: "trace",
          value: function trace() {
            this[LOG_SYMBOL](LogType.trace, ["Trace"]);
          }
        }, {
          key: "clear",
          value: function clear() {
            this[LOG_SYMBOL](LogType.clear);
          }
        }, {
          key: "status",
          value: function status() {
            for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              args[_key7] = arguments[_key7];
            }

            this[LOG_SYMBOL](LogType.status, args);
          }
        }, {
          key: "group",
          value: function group() {
            for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              args[_key8] = arguments[_key8];
            }

            this[LOG_SYMBOL](LogType.group, args);
          }
        }, {
          key: "groupCollapsed",
          value: function groupCollapsed() {
            for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              args[_key9] = arguments[_key9];
            }

            this[LOG_SYMBOL](LogType.groupCollapsed, args);
          }
        }, {
          key: "groupEnd",
          value: function groupEnd() {
            for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
              args[_key10] = arguments[_key10];
            }

            this[LOG_SYMBOL](LogType.groupEnd, args);
          }
        }, {
          key: "profile",
          value: function profile(label) {
            this[LOG_SYMBOL](LogType.profile, [label]);
          }
        }, {
          key: "profileEnd",
          value: function profileEnd(label) {
            this[LOG_SYMBOL](LogType.profileEnd, [label]);
          }
        }, {
          key: "time",
          value: function time(label) {
            this[TIMERS_SYMBOL] = this[TIMERS_SYMBOL] || new Map();
            this[TIMERS_SYMBOL].set(label, process.hrtime());
          }
        }, {
          key: "timeLog",
          value: function timeLog(label) {
            var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);

            if (!prev) {
              throw new Error("No such label '".concat(label, "' for WebpackLogger.timeLog()"));
            }

            var time = process.hrtime(prev);
            this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
          }
        }, {
          key: "timeEnd",
          value: function timeEnd(label) {
            var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);

            if (!prev) {
              throw new Error("No such label '".concat(label, "' for WebpackLogger.timeEnd()"));
            }

            var time = process.hrtime(prev);
            this[TIMERS_SYMBOL].delete(label);
            this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
          }
        }, {
          key: "timeAggregate",
          value: function timeAggregate(label) {
            var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);

            if (!prev) {
              throw new Error("No such label '".concat(label, "' for WebpackLogger.timeAggregate()"));
            }

            var time = process.hrtime(prev);
            this[TIMERS_SYMBOL].delete(label);
            this[TIMERS_AGGREGATES_SYMBOL] = this[TIMERS_AGGREGATES_SYMBOL] || new Map();
            var current = this[TIMERS_AGGREGATES_SYMBOL].get(label);

            if (current !== undefined) {
              if (time[1] + current[1] > 1e9) {
                time[0] += current[0] + 1;
                time[1] = time[1] - 1e9 + current[1];
              } else {
                time[0] += current[0];
                time[1] += current[1];
              }
            }

            this[TIMERS_AGGREGATES_SYMBOL].set(label, time);
          }
        }, {
          key: "timeAggregateEnd",
          value: function timeAggregateEnd(label) {
            if (this[TIMERS_AGGREGATES_SYMBOL] === undefined) return;
            var time = this[TIMERS_AGGREGATES_SYMBOL].get(label);
            if (time === undefined) return;
            this[TIMERS_AGGREGATES_SYMBOL].delete(label);
            this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
          }
        }]);

        return WebpackLogger;
      }();

      exports.Logger = WebpackLogger;
      /***/
    },

    /***/
    "./node_modules/webpack/lib/logging/createConsoleLogger.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/webpack/lib/logging/createConsoleLogger.js ***!
      \*****************************************************************/

    /***/
    function (module, __unused_webpack_exports, __nested_webpack_require_12752__) {
      /*
      	MIT License http://www.opensource.org/licenses/mit-license.php
      	Author Tobias Koppers @sokra
      */
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }

      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }

      function _iterableToArray(iter) {
        if (typeof (typeof Symbol !== "undefined" ? Symbol : function (i) {
          return i;
        }) !== "undefined" && iter[(typeof Symbol !== "undefined" ? Symbol : function (i) {
          return i;
        }).iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }

      var _require = __nested_webpack_require_12752__(
      /*! ./Logger */
      "./node_modules/webpack/lib/logging/Logger.js"),
          LogType = _require.LogType;
      /** @typedef {import("../../declarations/WebpackOptions").FilterItemTypes} FilterItemTypes */

      /** @typedef {import("../../declarations/WebpackOptions").FilterTypes} FilterTypes */

      /** @typedef {import("./Logger").LogTypeEnum} LogTypeEnum */

      /** @typedef {function(string): boolean} FilterFunction */

      /**
       * @typedef {Object} LoggerConsole
       * @property {function(): void} clear
       * @property {function(): void} trace
       * @property {(...args: any[]) => void} info
       * @property {(...args: any[]) => void} log
       * @property {(...args: any[]) => void} warn
       * @property {(...args: any[]) => void} error
       * @property {(...args: any[]) => void=} debug
       * @property {(...args: any[]) => void=} group
       * @property {(...args: any[]) => void=} groupCollapsed
       * @property {(...args: any[]) => void=} groupEnd
       * @property {(...args: any[]) => void=} status
       * @property {(...args: any[]) => void=} profile
       * @property {(...args: any[]) => void=} profileEnd
       * @property {(...args: any[]) => void=} logTime
       */

      /**
       * @typedef {Object} LoggerOptions
       * @property {false|true|"none"|"error"|"warn"|"info"|"log"|"verbose"} level loglevel
       * @property {FilterTypes|boolean} debug filter for debug logging
       * @property {LoggerConsole} console the console to log to
       */

      /**
       * @param {FilterItemTypes} item an input item
       * @returns {FilterFunction} filter function
       */


      var filterToFunction = function filterToFunction(item) {
        if (typeof item === "string") {
          var regExp = new RegExp("[\\\\/]".concat(item.replace( // eslint-disable-next-line no-useless-escape
          /[-[\]{}()*+?.\\^$|]/g, "\\$&"), "([\\\\/]|$|!|\\?)"));
          return function (ident) {
            return regExp.test(ident);
          };
        }

        if (item && typeof item === "object" && typeof item.test === "function") {
          return function (ident) {
            return item.test(ident);
          };
        }

        if (typeof item === "function") {
          return item;
        }

        if (typeof item === "boolean") {
          return function () {
            return item;
          };
        }
      };
      /**
       * @enum {number}
       */


      var LogLevel = {
        none: 6,
        false: 6,
        error: 5,
        warn: 4,
        info: 3,
        log: 2,
        true: 2,
        verbose: 1
      };
      /**
       * @param {LoggerOptions} options options object
       * @returns {function(string, LogTypeEnum, any[]): void} logging function
       */

      module.exports = function (_ref) {
        var _ref$level = _ref.level,
            level = _ref$level === void 0 ? "info" : _ref$level,
            _ref$debug = _ref.debug,
            debug = _ref$debug === void 0 ? false : _ref$debug,
            console = _ref.console;
        var debugFilters = typeof debug === "boolean" ? [function () {
          return debug;
        }] :
        /** @type {FilterItemTypes[]} */
        [].concat(debug).map(filterToFunction);
        /** @type {number} */

        var loglevel = LogLevel["".concat(level)] || 0;
        /**
         * @param {string} name name of the logger
         * @param {LogTypeEnum} type type of the log entry
         * @param {any[]} args arguments of the log entry
         * @returns {void}
         */

        var logger = function logger(name, type, args) {
          var labeledArgs = function labeledArgs() {
            if (Array.isArray(args)) {
              if (args.length > 0 && typeof args[0] === "string") {
                return ["[".concat(name, "] ").concat(args[0])].concat(_toConsumableArray(args.slice(1)));
              } else {
                return ["[".concat(name, "]")].concat(_toConsumableArray(args));
              }
            } else {
              return [];
            }
          };

          var debug = debugFilters.some(function (f) {
            return f(name);
          });

          switch (type) {
            case LogType.debug:
              if (!debug) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

              if (typeof console.debug === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.debug.apply(console, _toConsumableArray(labeledArgs()));
              } else {
                console.log.apply(console, _toConsumableArray(labeledArgs()));
              }

              break;

            case LogType.log:
              if (!debug && loglevel > LogLevel.log) return;
              console.log.apply(console, _toConsumableArray(labeledArgs()));
              break;

            case LogType.info:
              if (!debug && loglevel > LogLevel.info) return;
              console.info.apply(console, _toConsumableArray(labeledArgs()));
              break;

            case LogType.warn:
              if (!debug && loglevel > LogLevel.warn) return;
              console.warn.apply(console, _toConsumableArray(labeledArgs()));
              break;

            case LogType.error:
              if (!debug && loglevel > LogLevel.error) return;
              console.error.apply(console, _toConsumableArray(labeledArgs()));
              break;

            case LogType.trace:
              if (!debug) return;
              console.trace();
              break;

            case LogType.groupCollapsed:
              if (!debug && loglevel > LogLevel.log) return;

              if (!debug && loglevel > LogLevel.verbose) {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                if (typeof console.groupCollapsed === "function") {
                  // eslint-disable-next-line node/no-unsupported-features/node-builtins
                  console.groupCollapsed.apply(console, _toConsumableArray(labeledArgs()));
                } else {
                  console.log.apply(console, _toConsumableArray(labeledArgs()));
                }

                break;
              }

            // falls through

            case LogType.group:
              if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

              if (typeof console.group === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.group.apply(console, _toConsumableArray(labeledArgs()));
              } else {
                console.log.apply(console, _toConsumableArray(labeledArgs()));
              }

              break;

            case LogType.groupEnd:
              if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

              if (typeof console.groupEnd === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.groupEnd();
              }

              break;

            case LogType.time:
              {
                if (!debug && loglevel > LogLevel.log) return;
                var ms = args[1] * 1000 + args[2] / 1000000;
                var msg = "[".concat(name, "] ").concat(args[0], ": ").concat(ms, " ms");

                if (typeof console.logTime === "function") {
                  console.logTime(msg);
                } else {
                  console.log(msg);
                }

                break;
              }

            case LogType.profile:
              // eslint-disable-next-line node/no-unsupported-features/node-builtins
              if (typeof console.profile === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.profile.apply(console, _toConsumableArray(labeledArgs()));
              }

              break;

            case LogType.profileEnd:
              // eslint-disable-next-line node/no-unsupported-features/node-builtins
              if (typeof console.profileEnd === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.profileEnd.apply(console, _toConsumableArray(labeledArgs()));
              }

              break;

            case LogType.clear:
              if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

              if (typeof console.clear === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.clear();
              }

              break;

            case LogType.status:
              if (!debug && loglevel > LogLevel.info) return;

              if (typeof console.status === "function") {
                if (args.length === 0) {
                  console.status();
                } else {
                  console.status.apply(console, _toConsumableArray(labeledArgs()));
                }
              } else {
                if (args.length !== 0) {
                  console.info.apply(console, _toConsumableArray(labeledArgs()));
                }
              }

              break;

            default:
              throw new Error("Unexpected LogType ".concat(type));
          }
        };

        return logger;
      };
      /***/

    },

    /***/
    "./node_modules/webpack/lib/logging/runtime.js":
    /*!*****************************************************!*\
      !*** ./node_modules/webpack/lib/logging/runtime.js ***!
      \*****************************************************/

    /***/
    function (__unused_webpack_module, exports, __nested_webpack_require_24417__) {
      /*
      	MIT License http://www.opensource.org/licenses/mit-license.php
      	Author Tobias Koppers @sokra
      */
      function _extends() {
        _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

        return _extends.apply(this, arguments);
      }

      var SyncBailHook = __nested_webpack_require_24417__(
      /*! tapable/lib/SyncBailHook */
      "./client-src/modules/logger/SyncBailHookFake.js");

      var _require = __nested_webpack_require_24417__(
      /*! ./Logger */
      "./node_modules/webpack/lib/logging/Logger.js"),
          Logger = _require.Logger;

      var createConsoleLogger = __nested_webpack_require_24417__(
      /*! ./createConsoleLogger */
      "./node_modules/webpack/lib/logging/createConsoleLogger.js");
      /** @type {createConsoleLogger.LoggerOptions} */


      var currentDefaultLoggerOptions = {
        level: "info",
        debug: false,
        console: console
      };
      var currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);
      /**
       * @param {string} name name of the logger
       * @returns {Logger} a logger
       */

      exports.getLogger = function (name) {
        return new Logger(function (type, args) {
          if (exports.hooks.log.call(name, type, args) === undefined) {
            currentDefaultLogger(name, type, args);
          }
        }, function (childName) {
          return exports.getLogger("".concat(name, "/").concat(childName));
        });
      };
      /**
       * @param {createConsoleLogger.LoggerOptions} options new options, merge with old options
       * @returns {void}
       */


      exports.configureDefaultLogger = function (options) {
        _extends(currentDefaultLoggerOptions, options);

        currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);
      };

      exports.hooks = {
        log: new SyncBailHook(["origin", "type", "args"])
      };
      /***/
    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __nested_webpack_require_26919__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    var cachedModule = __webpack_module_cache__[moduleId];
    /******/

    if (cachedModule !== undefined) {
      /******/
      return cachedModule.exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_26919__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/define property getters */

  /******/


  !function () {
    /******/
    // define getter functions for harmony exports

    /******/
    __nested_webpack_require_26919__.d = function (exports, definition) {
      /******/
      for (var key in definition) {
        /******/
        if (__nested_webpack_require_26919__.o(definition, key) && !__nested_webpack_require_26919__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/

      }
      /******/

    };
    /******/

  }();
  /******/

  /******/

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/

  !function () {
    /******/
    __nested_webpack_require_26919__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/

  }();
  /******/

  /******/

  /* webpack/runtime/make namespace object */

  /******/

  !function () {
    /******/
    // define __esModule on exports

    /******/
    __nested_webpack_require_26919__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

  }();
  /******/

  /************************************************************************/

  var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.

  !function () {
    /*!********************************************!*\
      !*** ./client-src/modules/logger/index.js ***!
      \********************************************/
    __nested_webpack_require_26919__.r(__webpack_exports__);
    /* harmony export */


    __nested_webpack_require_26919__.d(__webpack_exports__, {
      /* harmony export */
      "default": function () {
        return (
          /* reexport default export from named module */
          webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__
        );
      }
      /* harmony export */

    });
    /* harmony import */


    var webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_26919__(
    /*! webpack/lib/logging/runtime.js */
    "./node_modules/webpack/lib/logging/runtime.js");
  }();
  var __webpack_export_target__ = exports;

  for (var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];

  if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
  /******/
})();

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/modules/strip-ansi/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/modules/strip-ansi/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/******/
(function () {
  // webpackBootstrap

  /******/
  "use strict";
  /******/

  var __webpack_modules__ = {
    /***/
    "./node_modules/strip-ansi/index.js":
    /*!******************************************!*\
      !*** ./node_modules/strip-ansi/index.js ***!
      \******************************************/

    /***/
    function (__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_406__) {
      __nested_webpack_require_406__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_406__.d(__webpack_exports__, {
        /* harmony export */
        "default": function () {
          return (
            /* binding */
            stripAnsi
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var ansi_regex__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_406__(
      /*! ansi-regex */
      "./node_modules/strip-ansi/node_modules/ansi-regex/index.js");

      function stripAnsi(string) {
        if (typeof string !== 'string') {
          throw new TypeError("Expected a `string`, got `".concat(typeof string, "`"));
        }

        return string.replace((0, ansi_regex__WEBPACK_IMPORTED_MODULE_0__["default"])(), '');
      }
      /***/

    },

    /***/
    "./node_modules/strip-ansi/node_modules/ansi-regex/index.js":
    /*!******************************************************************!*\
      !*** ./node_modules/strip-ansi/node_modules/ansi-regex/index.js ***!
      \******************************************************************/

    /***/
    function (__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_1632__) {
      __nested_webpack_require_1632__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_1632__.d(__webpack_exports__, {
        /* harmony export */
        "default": function () {
          return (
            /* binding */
            ansiRegex
          );
        }
        /* harmony export */

      });

      function ansiRegex() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$onlyFirst = _ref.onlyFirst,
            onlyFirst = _ref$onlyFirst === void 0 ? false : _ref$onlyFirst;

        var pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'].join('|');
        return new RegExp(pattern, onlyFirst ? undefined : 'g');
      }
      /***/

    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __nested_webpack_require_2778__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    var cachedModule = __webpack_module_cache__[moduleId];
    /******/

    if (cachedModule !== undefined) {
      /******/
      return cachedModule.exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_2778__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/define property getters */

  /******/


  !function () {
    /******/
    // define getter functions for harmony exports

    /******/
    __nested_webpack_require_2778__.d = function (exports, definition) {
      /******/
      for (var key in definition) {
        /******/
        if (__nested_webpack_require_2778__.o(definition, key) && !__nested_webpack_require_2778__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/

      }
      /******/

    };
    /******/

  }();
  /******/

  /******/

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/

  !function () {
    /******/
    __nested_webpack_require_2778__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/

  }();
  /******/

  /******/

  /* webpack/runtime/make namespace object */

  /******/

  !function () {
    /******/
    // define __esModule on exports

    /******/
    __nested_webpack_require_2778__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

  }();
  /******/

  /************************************************************************/

  var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.

  !function () {
    /*!************************************************!*\
      !*** ./client-src/modules/strip-ansi/index.js ***!
      \************************************************/
    __nested_webpack_require_2778__.r(__webpack_exports__);
    /* harmony import */


    var strip_ansi__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_2778__(
    /*! strip-ansi */
    "./node_modules/strip-ansi/index.js");
    /* harmony default export */


    __webpack_exports__["default"] = strip_ansi__WEBPACK_IMPORTED_MODULE_0__["default"];
  }();
  var __webpack_export_target__ = exports;

  for (var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];

  if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
  /******/
})();

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay.js":
/*!***********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatProblem": () => (/* binding */ formatProblem),
/* harmony export */   "hide": () => (/* binding */ hide),
/* harmony export */   "show": () => (/* binding */ show)
/* harmony export */ });
/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-html-community */ "./node_modules/ansi-html-community/index.js");
/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ansi_html_community__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/lib/index.js");
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_1__);
// The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)
// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).


var colors = {
  reset: ["transparent", "transparent"],
  black: "181818",
  red: "E36049",
  green: "B3CB74",
  yellow: "FFD080",
  blue: "7CAFC2",
  magenta: "7FACCA",
  cyan: "C3C2EF",
  lightgrey: "EBE7E3",
  darkgrey: "6D7891"
};
/** @type {HTMLIFrameElement | null | undefined} */

var iframeContainerElement;
/** @type {HTMLDivElement | null | undefined} */

var containerElement;
/** @type {Array<(element: HTMLDivElement) => void>} */

var onLoadQueue = [];
ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default().setColors(colors);

function createContainer() {
  iframeContainerElement = document.createElement("iframe");
  iframeContainerElement.id = "webpack-dev-server-client-overlay";
  iframeContainerElement.src = "about:blank";
  iframeContainerElement.style.position = "fixed";
  iframeContainerElement.style.left = 0;
  iframeContainerElement.style.top = 0;
  iframeContainerElement.style.right = 0;
  iframeContainerElement.style.bottom = 0;
  iframeContainerElement.style.width = "100vw";
  iframeContainerElement.style.height = "100vh";
  iframeContainerElement.style.border = "none";
  iframeContainerElement.style.zIndex = 9999999999;

  iframeContainerElement.onload = function () {
    containerElement =
    /** @type {Document} */

    /** @type {HTMLIFrameElement} */
    iframeContainerElement.contentDocument.createElement("div");
    containerElement.id = "webpack-dev-server-client-overlay-div";
    containerElement.style.position = "fixed";
    containerElement.style.boxSizing = "border-box";
    containerElement.style.left = 0;
    containerElement.style.top = 0;
    containerElement.style.right = 0;
    containerElement.style.bottom = 0;
    containerElement.style.width = "100vw";
    containerElement.style.height = "100vh";
    containerElement.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
    containerElement.style.color = "#E8E8E8";
    containerElement.style.fontFamily = "Menlo, Consolas, monospace";
    containerElement.style.fontSize = "large";
    containerElement.style.padding = "2rem";
    containerElement.style.lineHeight = "1.2";
    containerElement.style.whiteSpace = "pre-wrap";
    containerElement.style.overflow = "auto";
    var headerElement = document.createElement("span");
    headerElement.innerText = "Compiled with problems:";
    var closeButtonElement = document.createElement("button");
    closeButtonElement.innerText = "X";
    closeButtonElement.style.background = "transparent";
    closeButtonElement.style.border = "none";
    closeButtonElement.style.fontSize = "20px";
    closeButtonElement.style.fontWeight = "bold";
    closeButtonElement.style.color = "white";
    closeButtonElement.style.cursor = "pointer";
    closeButtonElement.style.cssFloat = "right"; // @ts-ignore

    closeButtonElement.style.styleFloat = "right";
    closeButtonElement.addEventListener("click", function () {
      hide();
    });
    containerElement.appendChild(headerElement);
    containerElement.appendChild(closeButtonElement);
    containerElement.appendChild(document.createElement("br"));
    containerElement.appendChild(document.createElement("br"));
    /** @type {Document} */

    /** @type {HTMLIFrameElement} */

    iframeContainerElement.contentDocument.body.appendChild(containerElement);
    onLoadQueue.forEach(function (onLoad) {
      onLoad(
      /** @type {HTMLDivElement} */
      containerElement);
    });
    onLoadQueue = [];
    /** @type {HTMLIFrameElement} */

    iframeContainerElement.onload = null;
  };

  document.body.appendChild(iframeContainerElement);
}
/**
 * @param {(element: HTMLDivElement) => void} callback
 */


function ensureOverlayExists(callback) {
  if (containerElement) {
    // Everything is ready, call the callback right away.
    callback(containerElement);
    return;
  }

  onLoadQueue.push(callback);

  if (iframeContainerElement) {
    return;
  }

  createContainer();
} // Successful compilation.


function hide() {
  if (!iframeContainerElement) {
    return;
  } // Clean up and reset internal state.


  document.body.removeChild(iframeContainerElement);
  iframeContainerElement = null;
  containerElement = null;
}
/**
 * @param {string} type
 * @param {string  | { file?: string, moduleName?: string, loc?: string, message?: string }} item
 * @returns {{ header: string, body: string }}
 */


function formatProblem(type, item) {
  var header = type === "warning" ? "WARNING" : "ERROR";
  var body = "";

  if (typeof item === "string") {
    body += item;
  } else {
    var file = item.file || ""; // eslint-disable-next-line no-nested-ternary

    var moduleName = item.moduleName ? item.moduleName.indexOf("!") !== -1 ? "".concat(item.moduleName.replace(/^(\s|\S)*!/, ""), " (").concat(item.moduleName, ")") : "".concat(item.moduleName) : "";
    var loc = item.loc;
    header += "".concat(moduleName || file ? " in ".concat(moduleName ? "".concat(moduleName).concat(file ? " (".concat(file, ")") : "") : file).concat(loc ? " ".concat(loc) : "") : "");
    body += item.message || "";
  }

  return {
    header: header,
    body: body
  };
} // Compilation with errors (e.g. syntax error or missing modules).

/**
 * @param {string} type
 * @param {Array<string  | { file?: string, moduleName?: string, loc?: string, message?: string }>} messages
 */


function show(type, messages) {
  ensureOverlayExists(function () {
    messages.forEach(function (message) {
      var entryElement = document.createElement("div");
      var typeElement = document.createElement("span");

      var _formatProblem = formatProblem(type, message),
          header = _formatProblem.header,
          body = _formatProblem.body;

      typeElement.innerText = header;
      typeElement.style.color = "#".concat(colors.red); // Make it look similar to our terminal.

      var text = ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default()((0,html_entities__WEBPACK_IMPORTED_MODULE_1__.encode)(body));
      var messageTextNode = document.createElement("div");
      messageTextNode.innerHTML = text;
      entryElement.appendChild(typeElement);
      entryElement.appendChild(document.createElement("br"));
      entryElement.appendChild(document.createElement("br"));
      entryElement.appendChild(messageTextNode);
      entryElement.appendChild(document.createElement("br"));
      entryElement.appendChild(document.createElement("br"));
      /** @type {HTMLDivElement} */

      containerElement.appendChild(entryElement);
    });
  });
}



/***/ }),

/***/ "./node_modules/webpack-dev-server/client/socket.js":
/*!**********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/socket.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
/* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__(/*! ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
/* global __webpack_dev_server_client__ */

 // this WebsocketClient is here as a default fallback, in case the client is not injected

/* eslint-disable camelcase */

var Client = // eslint-disable-next-line no-nested-ternary
typeof __webpack_dev_server_client__ !== "undefined" ? typeof __webpack_dev_server_client__.default !== "undefined" ? __webpack_dev_server_client__.default : __webpack_dev_server_client__ : _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* eslint-enable camelcase */

var retries = 0;
var maxRetries = 10;
var client = null;
/**
 * @param {string} url
 * @param {{ [handler: string]: (data?: any, params?: any) => any }} handlers
 * @param {number} [reconnect]
 */

var socket = function initSocket(url, handlers, reconnect) {
  client = new Client(url);
  client.onOpen(function () {
    retries = 0;

    if (typeof reconnect !== "undefined") {
      maxRetries = reconnect;
    }
  });
  client.onClose(function () {
    if (retries === 0) {
      handlers.close();
    } // Try to reconnect.


    client = null; // After 10 retries stop trying, to prevent logspam.

    if (retries < maxRetries) {
      // Exponentially increase timeout to reconnect.
      // Respectfully copied from the package `got`.
      // eslint-disable-next-line no-restricted-properties
      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
      retries += 1;
      _utils_log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("Trying to reconnect...");
      setTimeout(function () {
        socket(url, handlers, reconnect);
      }, retryInMs);
    }
  });
  client.onMessage(
  /**
   * @param {any} data
   */
  function (data) {
    var message = JSON.parse(data);

    if (handlers[message.type]) {
      handlers[message.type](message.data, message.params);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/createSocketURL.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/createSocketURL.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @param {{ protocol?: string, auth?: string, hostname?: string, port?: string, pathname?: string, search?: string, hash?: string, slashes?: boolean }} objURL
 * @returns {string}
 */
function format(objURL) {
  var protocol = objURL.protocol || "";

  if (protocol && protocol.substr(-1) !== ":") {
    protocol += ":";
  }

  var auth = objURL.auth || "";

  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ":");
    auth += "@";
  }

  var host = "";

  if (objURL.hostname) {
    host = auth + (objURL.hostname.indexOf(":") === -1 ? objURL.hostname : "[".concat(objURL.hostname, "]"));

    if (objURL.port) {
      host += ":".concat(objURL.port);
    }
  }

  var pathname = objURL.pathname || "";

  if (objURL.slashes) {
    host = "//".concat(host || "");

    if (pathname && pathname.charAt(0) !== "/") {
      pathname = "/".concat(pathname);
    }
  } else if (!host) {
    host = "";
  }

  var search = objURL.search || "";

  if (search && search.charAt(0) !== "?") {
    search = "?".concat(search);
  }

  var hash = objURL.hash || "";

  if (hash && hash.charAt(0) !== "#") {
    hash = "#".concat(hash);
  }

  pathname = pathname.replace(/[?#]/g,
  /**
   * @param {string} match
   * @returns {string}
   */
  function (match) {
    return encodeURIComponent(match);
  });
  search = search.replace("#", "%23");
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}
/**
 * @param {URL & { fromCurrentScript?: boolean }} parsedURL
 * @returns {string}
 */


function createSocketURL(parsedURL) {
  var hostname = parsedURL.hostname; // Node.js module parses it as `::`
  // `new URL(urlString, [baseURLString])` parses it as '[::]'

  var isInAddrAny = hostname === "0.0.0.0" || hostname === "::" || hostname === "[::]"; // why do we need this check?
  // hostname n/a for file protocol (example, when using electron, ionic)
  // see: https://github.com/webpack/webpack-dev-server/pull/384

  if (isInAddrAny && self.location.hostname && self.location.protocol.indexOf("http") === 0) {
    hostname = self.location.hostname;
  }

  var socketURLProtocol = parsedURL.protocol || self.location.protocol; // When https is used in the app, secure web sockets are always necessary because the browser doesn't accept non-secure web sockets.

  if (socketURLProtocol === "auto:" || hostname && isInAddrAny && self.location.protocol === "https:") {
    socketURLProtocol = self.location.protocol;
  }

  socketURLProtocol = socketURLProtocol.replace(/^(?:http|.+-extension|file)/i, "ws");
  var socketURLAuth = ""; // `new URL(urlString, [baseURLstring])` doesn't have `auth` property
  // Parse authentication credentials in case we need them

  if (parsedURL.username) {
    socketURLAuth = parsedURL.username; // Since HTTP basic authentication does not allow empty username,
    // we only include password if the username is not empty.

    if (parsedURL.password) {
      // Result: <username>:<password>
      socketURLAuth = socketURLAuth.concat(":", parsedURL.password);
    }
  } // In case the host is a raw IPv6 address, it can be enclosed in
  // the brackets as the brackets are needed in the final URL string.
  // Need to remove those as url.format blindly adds its own set of brackets
  // if the host string contains colons. That would lead to non-working
  // double brackets (e.g. [[::]]) host
  //
  // All of these web socket url params are optionally passed in through resourceQuery,
  // so we need to fall back to the default if they are not provided


  var socketURLHostname = (hostname || self.location.hostname || "localhost").replace(/^\[(.*)\]$/, "$1");
  var socketURLPort = parsedURL.port;

  if (!socketURLPort || socketURLPort === "0") {
    socketURLPort = self.location.port;
  } // If path is provided it'll be passed in via the resourceQuery as a
  // query param so it has to be parsed out of the querystring in order for the
  // client to open the socket to the correct location.


  var socketURLPathname = "/ws";

  if (parsedURL.pathname && !parsedURL.fromCurrentScript) {
    socketURLPathname = parsedURL.pathname;
  }

  return format({
    protocol: socketURLProtocol,
    auth: socketURLAuth,
    hostname: socketURLHostname,
    port: socketURLPort,
    pathname: socketURLPathname,
    slashes: true
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSocketURL);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js":
/*!********************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @returns {string}
 */
function getCurrentScriptSource() {
  // `document.currentScript` is the most accurate way to find the current script,
  // but is not supported in all browsers.
  if (document.currentScript) {
    return document.currentScript.getAttribute("src");
  } // Fallback to getting all scripts running in the document.


  var scriptElements = document.scripts || [];
  var scriptElementsWithSrc = Array.prototype.filter.call(scriptElements, function (element) {
    return element.getAttribute("src");
  });

  if (scriptElementsWithSrc.length > 0) {
    var currentScript = scriptElementsWithSrc[scriptElementsWithSrc.length - 1];
    return currentScript.getAttribute("src");
  } // Fail as there was no script to use.


  throw new Error("[webpack-dev-server] Failed to get current script source.");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentScriptSource);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/log.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log": () => (/* binding */ log),
/* harmony export */   "setLogLevel": () => (/* binding */ setLogLevel)
/* harmony export */ });
/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/logger/index.js */ "./node_modules/webpack-dev-server/client/modules/logger/index.js");
/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__);

var name = "webpack-dev-server"; // default level is set on the client side, so it does not need
// to be set by the CLI or API

var defaultLevel = "info"; // options new options, merge with old options

/**
 * @param {false | true | "none" | "error" | "warn" | "info" | "log" | "verbose"} level
 * @returns {void}
 */

function setLogLevel(level) {
  _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().configureDefaultLogger({
    level: level
  });
}

setLogLevel(defaultLevel);
var log = _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().getLogger(name);


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/parseURL.js":
/*!******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/parseURL.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrentScriptSource.js */ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js");

/**
 * @param {string} resourceQuery
 * @returns {{ [key: string]: string | boolean }}
 */

function parseURL(resourceQuery) {
  /** @type {{ [key: string]: string }} */
  var options = {};

  if (typeof resourceQuery === "string" && resourceQuery !== "") {
    var searchParams = resourceQuery.substr(1).split("&");

    for (var i = 0; i < searchParams.length; i++) {
      var pair = searchParams[i].split("=");
      options[pair[0]] = decodeURIComponent(pair[1]);
    }
  } else {
    // Else, get the url from the <script> this file was called with.
    var scriptSource = (0,_getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    var scriptSourceURL;

    try {
      // The placeholder `baseURL` with `window.location.href`,
      // is to allow parsing of path-relative or protocol-relative URLs,
      // and will have no effect if `scriptSource` is a fully valid URL.
      scriptSourceURL = new URL(scriptSource, self.location.href);
    } catch (error) {// URL parsing failed, do nothing.
      // We will still proceed to see if we can recover using `resourceQuery`
    }

    if (scriptSourceURL) {
      options = scriptSourceURL;
      options.fromCurrentScript = true;
    }
  }

  return options;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseURL);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/reloadApp.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/reloadApp.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/emitter.js */ "./node_modules/webpack/hot/emitter.js");
/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");


/** @typedef {import("../index").Options} Options
/** @typedef {import("../index").Status} Status

/**
 * @param {Options} options
 * @param {Status} status
 */

function reloadApp(_ref, status) {
  var hot = _ref.hot,
      liveReload = _ref.liveReload;

  if (status.isUnloading) {
    return;
  }

  var currentHash = status.currentHash,
      previousHash = status.previousHash;
  var isInitial = currentHash.indexOf(
  /** @type {string} */
  previousHash) >= 0;

  if (isInitial) {
    return;
  }
  /**
   * @param {Window} rootWindow
   * @param {number} intervalId
   */


  function applyReload(rootWindow, intervalId) {
    clearInterval(intervalId);
    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("App updated. Reloading...");
    rootWindow.location.reload();
  }

  var search = self.location.search.toLowerCase();
  var allowToHot = search.indexOf("webpack-dev-server-hot=false") === -1;
  var allowToLiveReload = search.indexOf("webpack-dev-server-live-reload=false") === -1;

  if (hot && allowToHot) {
    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("App hot update...");
    webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default().emit("webpackHotUpdate", status.currentHash);

    if (typeof self !== "undefined" && self.window) {
      // broadcast update to window
      self.postMessage("webpackHotUpdate".concat(status.currentHash), "*");
    }
  } // allow refreshing the page only if liveReload isn't disabled
  else if (liveReload && allowToLiveReload) {
    var rootWindow = self; // use parent window for reload (in case we're in an iframe with no valid src)

    var intervalId = self.setInterval(function () {
      if (rootWindow.location.protocol !== "about:") {
        // reload immediately if protocol is valid
        applyReload(rootWindow, intervalId);
      } else {
        rootWindow = rootWindow.parent;

        if (rootWindow.parent === rootWindow) {
          // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways
          applyReload(rootWindow, intervalId);
        }
      }
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reloadApp);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/sendMessage.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/sendMessage.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* global __resourceQuery WorkerGlobalScope */
// Send messages to the outside, so plugins can consume it.

/**
 * @param {string} type
 * @param {any} [data]
 */
function sendMsg(type, data) {
  if (typeof self !== "undefined" && (typeof WorkerGlobalScope === "undefined" || !(self instanceof WorkerGlobalScope))) {
    self.postMessage({
      type: "webpack".concat(type),
      data: data
    }, "*");
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendMsg);

/***/ }),

/***/ "./node_modules/webpack/hot/emitter.js":
/*!*********************************************!*\
  !*** ./node_modules/webpack/hot/emitter.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");

module.exports = new EventEmitter();

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
  var shouldLog = logLevel === "info" && level === "info" || ["info", "warning"].indexOf(logLevel) >= 0 && level === "warning" || ["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error";
  return shouldLog;
}

function logGroup(logFn) {
  return function (level, msg) {
    if (shouldLog(level)) {
      logFn(msg);
    }
  };
}

module.exports = function (level, msg) {
  if (shouldLog(level)) {
    if (level === "info") {
      console.log(msg);
    } else if (level === "warning") {
      console.warn(msg);
    } else if (level === "error") {
      console.error(msg);
    }
  }
};
/* eslint-disable node/no-unsupported-features/node-builtins */


var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);
module.exports.groupCollapsed = logGroup(groupCollapsed);
module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function (level) {
  logLevel = level;
};

module.exports.formatError = function (err) {
  var message = err.message;
  var stack = err.stack;

  if (!stack) {
    return message;
  } else if (stack.indexOf(message) < 0) {
    return message + "\n" + stack;
  } else {
    return stack;
  }
};

/***/ }),

/***/ "./datas/sounds.json":
/*!***************************!*\
  !*** ./datas/sounds.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"id":1,"title":"The Descent","link":"sound/BlueWednesdayInMyHead/The Descent.mp3","artist":{"name":"Blue Wednesday"},"album":{"id":1,"title":"In My Head","cover":"sound/BlueWednesdayInMyHead/cover.png"}},{"id":2,"title":"Aura","link":"sound/DaniSogenAWorlOfIllusion/Aura.mp3","artist":{"name":"Dani Sogen"},"album":{"id":2,"title":"A World of Illusion","cover":"sound/DaniSogenAWorlOfIllusion/cover.png"}},{"id":3,"title":"The Look","link":"sound/softyXlucidGreenOvernight/1. The Look.mp3","artist":{"name":"softy x lucid green"},"album":{"id":3,"title":"overnight","cover":"sound/softyXlucidGreenOvernight/cover.png"}}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("0b68085ac52e70f70170")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&reconnect=10 ***!
  \********************************************************************************************************************************************/
var __resourceQuery = "?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&reconnect=10";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/log.js */ "./node_modules/webpack/hot/log.js");
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_strip_ansi_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/strip-ansi/index.js */ "./node_modules/webpack-dev-server/client/modules/strip-ansi/index.js");
/* harmony import */ var _modules_strip_ansi_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_strip_ansi_index_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/parseURL.js */ "./node_modules/webpack-dev-server/client/utils/parseURL.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket.js */ "./node_modules/webpack-dev-server/client/socket.js");
/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay.js */ "./node_modules/webpack-dev-server/client/overlay.js");
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
/* harmony import */ var _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/sendMessage.js */ "./node_modules/webpack-dev-server/client/utils/sendMessage.js");
/* harmony import */ var _utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/reloadApp.js */ "./node_modules/webpack-dev-server/client/utils/reloadApp.js");
/* harmony import */ var _utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/createSocketURL.js */ "./node_modules/webpack-dev-server/client/utils/createSocketURL.js");
/* global __resourceQuery, __webpack_hash__ */
/// <reference types="webpack/module" />









/**
 * @typedef {Object} Options
 * @property {boolean} hot
 * @property {boolean} liveReload
 * @property {boolean} progress
 * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay
 * @property {string} [logging]
 * @property {number} [reconnect]
 */

/**
 * @typedef {Object} Status
 * @property {boolean} isUnloading
 * @property {string} currentHash
 * @property {string} [previousHash]
 */

/**
 * @type {Status}
 */

var status = {
  isUnloading: false,
  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement
  // eslint-disable-next-line camelcase
  currentHash:  true ? __webpack_require__.h() : 0
};
/** @type {Options} */

var options = {
  hot: false,
  liveReload: false,
  progress: false,
  overlay: false
};
var parsedResourceQuery = (0,_utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__["default"])(__resourceQuery);

if (parsedResourceQuery.hot === "true") {
  options.hot = true;
  _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Hot Module Replacement enabled.");
}

if (parsedResourceQuery["live-reload"] === "true") {
  options.liveReload = true;
  _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Live Reloading enabled.");
}

if (parsedResourceQuery.logging) {
  options.logging = parsedResourceQuery.logging;
}

if (typeof parsedResourceQuery.reconnect !== "undefined") {
  options.reconnect = Number(parsedResourceQuery.reconnect);
}
/**
 * @param {string} level
 */


function setAllLogLevel(level) {
  // This is needed because the HMR logger operate separately from dev server logger
  webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default().setLogLevel(level === "verbose" || level === "log" ? "info" : level);
  (0,_utils_log_js__WEBPACK_IMPORTED_MODULE_5__.setLogLevel)(level);
}

if (options.logging) {
  setAllLogLevel(options.logging);
}

self.addEventListener("beforeunload", function () {
  status.isUnloading = true;
});
var onSocketMessage = {
  hot: function hot() {
    if (parsedResourceQuery.hot === "false") {
      return;
    }

    options.hot = true;
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Hot Module Replacement enabled.");
  },
  liveReload: function liveReload() {
    if (parsedResourceQuery["live-reload"] === "false") {
      return;
    }

    options.liveReload = true;
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Live Reloading enabled.");
  },
  invalid: function invalid() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.

    if (options.overlay) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
    }

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Invalid");
  },

  /**
   * @param {string} hash
   */
  hash: function hash(_hash) {
    status.previousHash = status.currentHash;
    status.currentHash = _hash;
  },
  logging: setAllLogLevel,

  /**
   * @param {boolean} value
   */
  overlay: function overlay(value) {
    if (typeof document === "undefined") {
      return;
    }

    options.overlay = value;
  },

  /**
   * @param {number} value
   */
  reconnect: function reconnect(value) {
    if (parsedResourceQuery.reconnect === "false") {
      return;
    }

    options.reconnect = value;
  },

  /**
   * @param {boolean} value
   */
  progress: function progress(value) {
    options.progress = value;
  },

  /**
   * @param {{ pluginName?: string, percent: number, msg: string }} data
   */
  "progress-update": function progressUpdate(data) {
    if (options.progress) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));
    }

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Progress", data);
  },
  "still-ok": function stillOk() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Nothing changed.");

    if (options.overlay) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
    }

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("StillOk");
  },
  ok: function ok() {
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Ok");

    if (options.overlay) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
    }

    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, status);
  },
  // TODO: remove in v5 in favor of 'static-changed'

  /**
   * @param {string} file
   */
  "content-changed": function contentChanged(file) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
    self.location.reload();
  },

  /**
   * @param {string} file
   */
  "static-changed": function staticChanged(file) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
    self.location.reload();
  },

  /**
   * @param {Error[]} warnings
   * @param {any} params
   */
  warnings: function warnings(_warnings, params) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn("Warnings while compiling.");

    var printableWarnings = _warnings.map(function (error) {
      var _formatProblem = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)("warning", error),
          header = _formatProblem.header,
          body = _formatProblem.body;

      return "".concat(header, "\n").concat(_modules_strip_ansi_index_js__WEBPACK_IMPORTED_MODULE_1___default()(body));
    });

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Warnings", printableWarnings);

    for (var i = 0; i < printableWarnings.length; i++) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn(printableWarnings[i]);
    }

    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;

    if (needShowOverlayForWarnings) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.show)("warning", _warnings);
    }

    if (params && params.preventReloading) {
      return;
    }

    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, status);
  },

  /**
   * @param {Error[]} errors
   */
  errors: function errors(_errors) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error("Errors while compiling. Reload prevented.");

    var printableErrors = _errors.map(function (error) {
      var _formatProblem2 = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)("error", error),
          header = _formatProblem2.header,
          body = _formatProblem2.body;

      return "".concat(header, "\n").concat(_modules_strip_ansi_index_js__WEBPACK_IMPORTED_MODULE_1___default()(body));
    });

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Errors", printableErrors);

    for (var i = 0; i < printableErrors.length; i++) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(printableErrors[i]);
    }

    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;

    if (needShowOverlayForErrors) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.show)("error", _errors);
    }
  },

  /**
   * @param {Error} error
   */
  error: function error(_error) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(_error);
  },
  close: function close() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Disconnected!");

    if (options.overlay) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
    }

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Close");
  }
};
var socketURL = (0,_utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__["default"])(parsedResourceQuery);
(0,_socket_js__WEBPACK_IMPORTED_MODULE_3__["default"])(socketURL, onSocketMessage, options.reconnect);
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./app/pages/home/index.js");
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/about */ "./app/pages/about/index.js");
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Preloader */ "./app/components/Preloader.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Navigation */ "./app/components/Navigation.js");
/* harmony import */ var _animation_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation/canvas */ "./app/animation/canvas.js");
/* harmony import */ var _components_widgets_music_player_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/widgets/music-player/player */ "./app/components/widgets/music-player/player.js");
/* harmony import */ var _config_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/forms */ "./app/config/forms.js");
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Services */ "./app/components/Services.js");
/* harmony import */ var _utils_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/selectors */ "./app/utils/selectors.js");












class App {
  constructor() {
    this.init();
    this.createPreloader();
    this.initNavigation();
    this.getContent();
    this.initPages();
    this.config();
    this.eventListener();
  }

  init() {
    this.canvas = new _animation_canvas__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.player = new _components_widgets_music_player_player__WEBPACK_IMPORTED_MODULE_5__["default"]();
  }

  createPreloader() {
    this.preloader = new _components_Preloader__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.preloader.once('completed', _ => this.onPreloadEnd());
  }

  onPreloadEnd() {
    this.preloader.destroy();
  }

  getContent() {
    this.content = document.querySelector('#content');
    this.template = this.content.getAttribute('[data-template]');
  }

  initPages() {
    this.pages = {
      home: new _pages_home__WEBPACK_IMPORTED_MODULE_0__["default"](),
      about: new _pages_about__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
    this.page = this.pages[this.template];

    if (this.page && this.page.create()) {
      this.page.create();
    }
  }

  initNavigation() {
    this.navigation = new _components_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"]();
  }

  config() {
    this.formHandler = new _config_forms__WEBPACK_IMPORTED_MODULE_6__["default"]('connect', 'connect', 'POST');
    this.services = new _components_Services__WEBPACK_IMPORTED_MODULE_7__["default"]();
  }

  async onChange({
    url
  }) {
    // this.page.hide()
    const res = await window.fetch(url);

    if (res.status === 200) {
      const html = await res.text();
      window.history.pushState({}, '', url);
      const div = document.createElement('div');
      div.innerHTML = html;
      const divContent = div.querySelector('.content');
      this.template = divContent.getAttribute('data-template');
      this.content.innerHTML = divContent.innerHTML;
      window.scrollTo(0, 0);
      this.page = this.pages[this.template];
      this.page.create();
      this.page.show();
    } else {
      console.error('error: ' + res);
    }
  }

  eventListener() {
    const links = (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_8__.$All)('[data-links]');
    links.forEach(link => {
      if (link.getAttribute('data-links') === 'true') {
        link.onclick = e => {
          e.preventDefault();
          const {
            href
          } = link;
          this.onChange({
            url: href
          });
        };
      } else {
        link.onclick = e => {
          e.preventDefault();
          const {
            href
          } = link;
          const linkData = href.split('#');
          const [url, hash] = linkData;
          this.onChange({
            url
          });
          setTimeout(() => {
            scrollToElement(hash);
          }, 300);
        };
      }
    });

    function scrollToElement(className) {
      const element = (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_8__.$)(`.${className}`);
      const top = element.getBoundingClientRect().top;
      window.scrollTo({
        top
      });
    }
  }

} // eslint-disable-next-line no-new


new App();
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdCQUFNO0FBQUV1MEIsWUFBQUE7QUFBRixjQUFXN3VCLElBQWpCO0FBQ0EsZUFBS2t6QixRQUFMLENBQWM7QUFBRXhzQixZQUFBQSxHQUFHLEVBQUVtb0I7QUFBUCxXQUFkO0FBQ0QsU0FKRDtBQUtELE9BTkQsTUFNTztBQUNMN3VCLFFBQUFBLElBQUksQ0FBQ2hCLE9BQUwsR0FBZ0IzRSxDQUFELElBQU87QUFDcEJBLFVBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLGdCQUFNO0FBQUV1MEIsWUFBQUE7QUFBRixjQUFXN3VCLElBQWpCO0FBQ0EsZ0JBQU15ekIsUUFBUSxHQUFHNUUsSUFBSSxDQUFDTixLQUFMLENBQVcsR0FBWCxDQUFqQjtBQUNBLGdCQUFNLENBQUM3bkIsR0FBRCxFQUFNdW1CLElBQU4sSUFBY3dHLFFBQXBCO0FBQ0EsZUFBS1AsUUFBTCxDQUFjO0FBQUV4c0IsWUFBQUE7QUFBRixXQUFkO0FBRUF0SCxVQUFBQSxVQUFVLENBQUMsTUFBTTtBQUNmczBCLFlBQUFBLGVBQWUsQ0FBQ3pHLElBQUQsQ0FBZjtBQUNELFdBRlMsRUFFUCxHQUZPLENBQVY7QUFHRCxTQVZEO0FBV0Q7QUFDRixLQXBCRDs7QUFzQkEsYUFBU3lHLGVBQVQsQ0FBMEJ2N0IsU0FBMUIsRUFBcUM7QUFDbkMsWUFBTTBDLE9BQU8sR0FBR3RCLG1EQUFDLENBQUUsSUFBR3BCLFNBQVUsRUFBZixDQUFqQjtBQUNBLFlBQU1mLEdBQUcsR0FBR3lELE9BQU8sQ0FBQ3lGLHFCQUFSLEdBQWdDbEosR0FBNUM7QUFDQU0sTUFBQUEsTUFBTSxDQUFDNjdCLFFBQVAsQ0FBZ0I7QUFBRW44QixRQUFBQTtBQUFGLE9BQWhCO0FBQ0Q7QUFDRjs7QUF4R08sRUEyR1Y7OztBQUNBLElBQUlpN0IsR0FBSixHOzs7Ozs7Ozs7O0FDdkhBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vYXBwL2FuaW1hdGlvbi9TaGFwZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vYXBwL2FuaW1hdGlvbi9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vYXBwL2NsYXNzZXMvQ29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9hcHAvY2xhc3Nlcy9QYWdlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9hcHAvY29tcG9uZW50cy9BbGVydC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9hcHAvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9hcHAvY29tcG9uZW50cy9zbGlkZXIvU2xpZGVyLmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL2FwcC9jb21wb25lbnRzL3dpZGdldHMvbXVzaWMtcGxheWVyL01lZGlhTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9hcHAvY29tcG9uZW50cy93aWRnZXRzL211c2ljLXBsYXllci9UaW1lci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9hcHAvY29tcG9uZW50cy93aWRnZXRzL211c2ljLXBsYXllci9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vYXBwL2NvbXBvbmVudHMvd2lkZ2V0cy9tdXNpYy1wbGF5ZXIvdm9sdW1lLmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL2FwcC9jb25maWcvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vYXBwL3BhZ2VzL2Fib3V0L2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL2FwcC9wYWdlcy9ob21lL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL2FwcC91dGlscy9TbW9vdGhzY3JvbGwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vYXBwL3V0aWxzL2Z1bmN0aW9uLmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL2FwcC91dGlscy9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vbm9kZV9tb2R1bGVzL2Fuc2ktaHRtbC1jb21tdW5pdHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vbm9kZV9tb2R1bGVzL2V2LWVtaXR0ZXIvZXYtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9ub2RlX21vZHVsZXMvaHRtbC1lbnRpdGllcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vbm9kZV9tb2R1bGVzL2h0bWwtZW50aXRpZXMvbGliL25hbWVkLXJlZmVyZW5jZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vbm9kZV9tb2R1bGVzL2h0bWwtZW50aXRpZXMvbGliL251bWVyaWMtdW5pY29kZS1tYXAuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vbm9kZV9tb2R1bGVzL2h0bWwtZW50aXRpZXMvbGliL3N1cnJvZ2F0ZS1wYWlycy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9ub2RlX21vZHVsZXMvaW1hZ2VzbG9hZGVkL2ltYWdlc2xvYWRlZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLXdoZWVsL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtd2hlZWwvc3JjL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtd2hlZWwvc3JjL1VzZXJBZ2VudF9ERVBSRUNBVEVELmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtd2hlZWwvc3JjL2lzRXZlbnRTdXBwb3J0ZWQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS13aGVlbC9zcmMvbm9ybWFsaXplV2hlZWwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvY2xpZW50cy9XZWJTb2NrZXRDbGllbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvbW9kdWxlcy9sb2dnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvbW9kdWxlcy9zdHJpcC1hbnNpL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L292ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvc29ja2V0LmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L3V0aWxzL2NyZWF0ZVNvY2tldFVSTC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC91dGlscy9nZXRDdXJyZW50U2NyaXB0U291cmNlLmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L3V0aWxzL2xvZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC91dGlscy9wYXJzZVVSTC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC91dGlscy9yZWxvYWRBcHAuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvdXRpbHMvc2VuZE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtbmFtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi9hcHAvYXBwLmpzIiwid2VicGFjazovL3Byb2plY3QtbmFtZS8uL3N0eWxlcy9tYWluLnNjc3M/OWQ5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFwZXMge1xuICBjb25zdHJ1Y3RvciAoeyBwb3NpdGlvbiwgaGVpZ2h0LCB3aWR0aCwgYmx1ciwgYmFja2dyb3VuZCB9KSB7XG4gICAgdGhpcy50b3AgPSBwb3NpdGlvbi50b3AgPT09IC0xID8gdW5kZWZpbmVkIDogcG9zaXRpb24udG9wXG4gICAgdGhpcy5sZWZ0ID0gcG9zaXRpb24ubGVmdCA9PT0gLTEgPyB1bmRlZmluZWQgOiBwb3NpdGlvbi5sZWZ0XG4gICAgdGhpcy5yaWdodCA9IHBvc2l0aW9uLnJpZ2h0ID09PSAtMSA/IHVuZGVmaW5lZCA6IHBvc2l0aW9uLnJpZ2h0XG4gICAgdGhpcy5ib3R0b20gPSBwb3NpdGlvbi5ib3R0b20gPT09IC0xID8gdW5kZWZpbmVkIDogcG9zaXRpb24uYm90dG9tXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICB0aGlzLmJsdXIgPSBibHVyXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZFxuICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMuY3JlYXRlU2hhcGUoKVxuICAgIHRoaXMub25XaW5kb3dSZXNpemUoKVxuICAgIHRoaXMuZXZlbnRzKClcbiAgfVxuXG4gIGNyZWF0ZVNoYXBlICgpIHtcbiAgICB0aGlzLnNoYXBlRnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKVxuICAgIHRoaXMuc2hhcGVGcmFtZS5jbGFzc05hbWUgPSAnc2hhcGVzJ1xuICAgIHRoaXMuaWQgPSAnc2hhcGVzJ1xuXG4gICAgdGhpcy50ZXN0QnJlYWtwb2ludCgpXG4gICAgLy8gc3R5bGVcbiAgICB0aGlzLnNoYXBlRnJhbWUuc3R5bGUuYm9yZGVyUmFkaXVzID0gdGhpcy5oZWlnaHRbMl0gKyAncHgnXG4gICAgdGhpcy5zaGFwZUZyYW1lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuYmFja2dyb3VuZFxuICAgIC8vIHRoaXMuc2hhcGVGcmFtZS5zdHlsZS50cmFuc2l0aW9uID0gJ2FsbCA4cydcbiAgICB0aGlzLnNoYXBlRnJhbWUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG5cbiAgICAvLyBzZXQgc2hhcGUgcG9zaXRpb25cbiAgICB0aGlzLnNoYXBlRnJhbWUuc3R5bGUudG9wID0gdGhpcy50b3AgKyAncHgnXG4gICAgdGhpcy5zaGFwZUZyYW1lLnN0eWxlLmxlZnQgPSB0aGlzLmxlZnQgKyAncHgnXG4gICAgdGhpcy5zaGFwZUZyYW1lLnN0eWxlLnJpZ2h0ID0gdGhpcy5yaWdodCArICdweCdcbiAgICB0aGlzLnNoYXBlRnJhbWUuc3R5bGUuYm90dG9tID0gdGhpcy5ib3R0b20gKyAncHgnXG4gIH1cblxuICBhbmltc2hhcGVzIChhbmltYXRpb25BcnIpIHtcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgbGV0IGFuaW1GbG93ID0gbnVsbFxuXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID49IGFuaW1hdGlvbkFyci5sZW5ndGgpIGluZGV4ID0gMFxuICAgICAgYW5pbUZsb3cgPSBhbmltYXRpb25BcnJbaW5kZXhdXG4gICAgICB0aGlzLnNoYXBlRnJhbWUuc3R5bGUudG9wID0gYW5pbUZsb3cudG8udG9wICsgJ3B4J1xuICAgICAgdGhpcy5zaGFwZUZyYW1lLnN0eWxlLmxlZnQgPSBhbmltRmxvdy50by5sZWZ0ICsgJ3B4J1xuICAgICAgdGhpcy5zaGFwZUZyYW1lLnN0eWxlLmJvdHRvbSA9IGFuaW1GbG93LnRvLmJvdHRvbSArICdweCdcbiAgICAgIHRoaXMuc2hhcGVGcmFtZS5zdHlsZS5yaWdodCA9IGFuaW1GbG93LnRvLnJpZ2h0ICsgJ3B4J1xuICAgICAgdGhpcy5zaGFwZUZyYW1lLnN0eWxlLmZpbHRlciA9IGBibHVyKCR7dGhpcy5ibHVyfXB4KWBcblxuICAgICAgaW5kZXgrK1xuICAgIH0sIDQwMDApXG4gIH1cblxuICBtb3VudFNoYXBlIChwYXJlbnQpIHtcbiAgICBwYXJlbnQuYXBwZW5kKHRoaXMuc2hhcGVGcmFtZSlcbiAgfVxuXG4gIG9uV2luZG93UmVzaXplICgpIHtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgICB0aGlzLnRlc3RCcmVha3BvaW50KClcbiAgfVxuXG4gIHRlc3RCcmVha3BvaW50ICgpIHtcbiAgICBpZiAodGhpcy53aW5kb3dXaWR0aCA+PSA2NDAgJiYgdGhpcy53aW5kb3dXaWR0aCA8IDEwMjQpIHtcbiAgICAgIHRoaXMuc2hhcGVGcmFtZS5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodFsxXSArICdweCdcbiAgICAgIHRoaXMuc2hhcGVGcmFtZS5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGhbMV0gKyAncHgnXG4gICAgICB0aGlzLnNoYXBlRnJhbWUuc3R5bGUuZmlsdGVyID0gYGJsdXIoJHt0aGlzLmJsdXJbMF19cHgpYFxuICAgIH0gZWxzZSBpZiAodGhpcy53aW5kb3dXaWR0aCA+PSAxMDI0KSB7XG4gICAgICB0aGlzLnNoYXBlRnJhbWUuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHRbMl0gKyAncHgnXG4gICAgICB0aGlzLnNoYXBlRnJhbWUuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoWzJdICsgJ3B4J1xuICAgICAgdGhpcy5zaGFwZUZyYW1lLnN0eWxlLmZpbHRlciA9IGBibHVyKCR7dGhpcy5ibHVyWzFdfXB4KWBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaGFwZUZyYW1lLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0WzBdICsgJ3B4J1xuICAgICAgdGhpcy5zaGFwZUZyYW1lLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aFswXSArICdweCdcbiAgICAgIHRoaXMuc2hhcGVGcmFtZS5zdHlsZS5maWx0ZXIgPSBgYmx1cigke3RoaXMuYmx1clswXX1weClgXG4gICAgfVxuICB9XG5cbiAgZXZlbnRzICgpIHtcbiAgICBhZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQodGhpcykpXG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4uL2NsYXNzZXMvQ29tcG9uZW50cydcbmltcG9ydCB7ICQgfSBmcm9tICcuLi91dGlscy9zZWxlY3RvcnMnXG5pbXBvcnQgU2hhcGVzIGZyb20gJy4vU2hhcGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBDb21wb25lbnRzIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmlzTW91bnRlZCA9IGZhbHNlXG4gICAgdGhpcy5zaGFwZUdyYWRpZW50ID0gJyMwNjZENUInXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMubW91bnRGcmFtZSgpXG4gICAgaWYgKCF0aGlzLmlzTW91bnRlZCkgcmV0dXJuXG4gICAgY29uc3Qgc2hhcGUxID0gbmV3IFNoYXBlcyh7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB0b3A6IC0xLFxuICAgICAgICByaWdodDogLTEsXG4gICAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICAgIGJvdHRvbTogLTEwMFxuICAgICAgfSxcbiAgICAgIGhlaWdodDogWzQwMCwgNTAwLCA2MDBdLFxuICAgICAgd2lkdGg6IFs0MDAsIDUwMCwgNjAwXSxcbiAgICAgIGJsdXI6IFs1MCwgMTAwXSxcbiAgICAgIGJhY2tncm91bmQ6IHRoaXMuc2hhcGVHcmFkaWVudFxuICAgIH0pXG4gICAgY29uc3Qgc2hhcGUyID0gbmV3IFNoYXBlcyh7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB0b3A6IC0yMDAsXG4gICAgICAgIHJpZ2h0OiAtMTAwLFxuICAgICAgICBsZWZ0OiAtMSxcbiAgICAgICAgYm90dG9tOiAtMVxuICAgICAgfSxcbiAgICAgIGhlaWdodDogWzQwMCwgNTAwLCA2MDBdLFxuICAgICAgd2lkdGg6IFs0MDAsIDUwMCwgNjAwXSxcbiAgICAgIGJsdXI6IFs1MCwgMTAwXSxcbiAgICAgIGJhY2tncm91bmQ6IHRoaXMuc2hhcGVHcmFkaWVudFxuICAgIH0pXG4gICAgc2hhcGUxLm1vdW50U2hhcGUoJCgnI2ZyYW1lJykpXG4gICAgc2hhcGUyLm1vdW50U2hhcGUoJCgnI2ZyYW1lJykpXG4gIH1cblxuICBjcmVhdGVGcmFtZSAoKSB7XG4gICAgdGhpcy5mcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpXG4gICAgdGhpcy5mcmFtZS5jbGFzc05hbWUgPSAnZnJhbWUnXG4gICAgdGhpcy5mcmFtZS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCdcbiAgICB0aGlzLmZyYW1lLnN0eWxlLnRvcCA9IDBcbiAgICB0aGlzLmZyYW1lLnN0eWxlLmxlZnQgPSAwXG4gICAgdGhpcy5mcmFtZS5zdHlsZS53aWR0aCA9IGAke3dpbmRvdy5pbm5lcldpZHRofXB4YFxuICAgIHRoaXMuZnJhbWUuc3R5bGUuaGVpZ2h0ID0gYCR7d2luZG93LmlubmVySGVpZ2h0fXB4YFxuICAgIHRoaXMuZnJhbWUuc3R5bGUuekluZGV4ID0gJy0xJ1xuICAgIHRoaXMuZnJhbWUuaWQgPSAnZnJhbWUnXG4gIH1cblxuICBtb3VudEZyYW1lICgpIHtcbiAgICB0aGlzLmNyZWF0ZUZyYW1lKClcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmZyYW1lKVxuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcigpXG4gICAgdGhpcy5pc01vdW50ZWQgPSB0cnVlXG4gIH1cblxuICBvblJlc2l6ZSAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMubW91bnRlZEZyYW1lID0gJCgnI2ZyYW1lJylcbiAgICB0aGlzLm1vdW50ZWRGcmFtZS5zdHlsZS53aWR0aCA9IGAke3dpbmRvdy5pbm5lcldpZHRofXB4YFxuICAgIHRoaXMubW91bnRlZEZyYW1lLnN0eWxlLmhlaWdodCA9IGAke3dpbmRvdy5pbm5lckhlaWdodH1weGBcbiAgfVxuXG4gIGV2ZW50TGlzdGVuZXIgKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpXG4gIH1cbn1cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRzJ1xuaW1wb3J0IHsgJCwgJEFsbCB9IGZyb20gJy4uL3V0aWxzL3NlbGVjdG9ycydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50cyBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChjb21wb25lbnROYW1lKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc2VsZWN0b3JzID0ge1xuICAgICAgcHJlbG9hZGVyOiB7XG4gICAgICAgIGVsZW1lbnQ6ICQoJy5wcmVsb2FkZXInKSxcbiAgICAgICAgdGV4dDogJCgnLnByZWxvYWRlcl9fdGV4dF9faXRlbScpLFxuICAgICAgICBjb250YWluZXI6ICQoJy5wcmVsb2FkZXJfX3RleHQnKSxcbiAgICAgICAgbG9hZGVyOiAkKCcucHJlbG9hZGVyX19sb2FkZXJfX2JhcicpLFxuICAgICAgICB3cmFwcGVyOiAkKCcucHJlbG9hZGVyX190ZXh0X193cmFwcGVyJylcbiAgICAgIH0sXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIGhlYWRlcjogJCgnLmhlYWRlcicpLFxuICAgICAgICBuYXZMaXN0OiBbLi4uJEFsbCgnLm1lbnVfX2xpbmtzX19pdGVtJyldLFxuICAgICAgICBwcmV2aWV3SW1nOiAkKCcubWVudV9fbGlua3NfX21lZGlhX19pbWFnZScpLFxuICAgICAgICBjb250ZW50OiAkKCcubWVudV9fY29udGVudCcpLFxuICAgICAgICBvcGVuTWVudTogJCgnLmJ1dHRvbi1vcGVuJyksXG4gICAgICAgIGNsb3NlTWVudTogJCgnLmJ1dHRvbi1jbG9zZScpXG4gICAgICB9LFxuICAgICAgcGxheWVyOiB7XG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgIGV4cGFuZDogJCgnLnBsYXllcl9fYnV0dG9uLmV4cGFuZCcpLFxuICAgICAgICAgIGNsb3NlOiAkKCcucGxheWVyX19idXR0b24uY2xvc2UnKSxcbiAgICAgICAgICBwbGF5OiAkKCdbZGF0YS1pY29uPVwicm9iLXBsYXlcIl0nKSxcbiAgICAgICAgICBuZXh0OiAkKCdbZGF0YS1pY29uPVwicm9iLWZvcndhcmRcIl0nKSxcbiAgICAgICAgICBwcmV2OiAkKCdbZGF0YS1pY29uPVwicm9iLWJhY2t3YXJkXCJdJylcbiAgICAgICAgfSxcbiAgICAgICAgY292ZXJDb250YWluZXI6ICQoJy5wbGF5ZXJfX2NvdmVyJyksXG4gICAgICAgIGNvdmVyOiAkKCcucGxheWVyX19jb3ZlciBpbWcnKSxcbiAgICAgICAgc2VsZjogJCgnLnBsYXllcicpLFxuICAgICAgICBtZWRpYTogJCgnLnBsYXllcl9fbWVkaWEnKSxcbiAgICAgICAgYXJ0aXN0OiAkKCcucGxheWVyX19kZXRhaWxfX25hbWUnKSxcbiAgICAgICAgdGl0bGU6ICQoJy5wbGF5ZXJfX2RldGFpbF9fdGl0bGUnKSxcbiAgICAgICAgdGltZXI6IHtcbiAgICAgICAgICBzdGFydFRpbWU6ICQoJy5wbGF5ZXJfX3RpbWVyX190aW1lc19fc3RhcnR0aW1lJyksXG4gICAgICAgICAgZW5kVGltZTogJCgnLnBsYXllcl9fdGltZXJfX3RpbWVzX19lbmR0aW1lJyksXG4gICAgICAgICAgcmFuZ2U6ICQoJy5wbGF5ZXJfX3RpbWVyX19wcm9ncmVzc19fcmFuZ2UnKSxcbiAgICAgICAgICBwcm9ncmVzczogJCgnLnBsYXllcl9fdGltZXJfX3Byb2dyZXNzX19iYXInKSxcbiAgICAgICAgICBwcmVsb2FkOiAkKCcucGxheWVyX190aW1lcl9fcHJvZ3Jlc3NfX2VsYXBzZScpXG4gICAgICAgIH0sXG4gICAgICAgIHZvbHVtZToge1xuICAgICAgICAgIGdyYXBwZXI6ICQoJy5wbGF5ZXJfX3ZvbHVtZV9fZ3JhcCcpLFxuICAgICAgICAgIHNsaWRlcjogJCgnLnBsYXllcl9fdm9sdW1lX19zbGlkZXInKSxcbiAgICAgICAgICBjb250YWluZXI6ICQoJy5wbGF5ZXJfX3ZvbHVtZV9fd3JhcHBlcicpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmb3JtOiB7XG4gICAgICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgICBmb3JtOiAkKCcuY29ubmVjdF9fZm9ybScpLFxuICAgICAgICAgIGJ1dHRvbjogJCgnLmNvbm5lY3RfX2Zvcm0gLmJ1dHRvbicpLFxuICAgICAgICAgIG5hbWU6ICQoJy5pbnB1dF9fbmFtZScpLFxuICAgICAgICAgIG1haWw6ICQoJy5pbnB1dF9fZW1haWwnKSxcbiAgICAgICAgICBtZXNzYWdlOiAkKCcjbWVzc2FnZScpLFxuICAgICAgICAgIG5hbWVBbGVydDogJCgnLmlucHV0X19hbGVydC1uYW1lJyksXG4gICAgICAgICAgZW1haWxBbGVydDogJCgnLmlucHV0X19hbGVydC1lbWFpbCcpLFxuICAgICAgICAgIG1lc3NhZ2VBbGVydDogJCgnLmlucHV0X19hbGVydC1tZXNzYWdlJyksXG4gICAgICAgICAgYWxlcnQ6ICRBbGwoJy5pbnB1dF9fYWxlcnQnKVxuXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGFsOiB7XG4gICAgICAgICAgZm9ybTogJCgnLm1vZGFsX19mb3JtJyksXG4gICAgICAgICAgYnV0dG9uOiAkKCcubW9kYWxfX2Zvcm0gLmJ1dHRvbicpXG4gICAgICAgIH0sXG4gICAgICAgIGFsZXJ0OiAkKCcuYWxlcnQnKVxuICAgICAgfSxcbiAgICAgIHNsaWRlcjoge1xuICAgICAgICBidXR0b246IHtcbiAgICAgICAgICBwcmV2OiAkKCcjcmItc2xpZGVyLWJ1dHRvbi1wcmV2JyksXG4gICAgICAgICAgbmV4dDogJCgnI3JiLXNsaWRlci1idXR0b24tbmV4dCcpXG4gICAgICAgIH0sXG4gICAgICAgIHdyYXBwZXI6ICQoJy5yYi1zbGlkZXItd3JhcHBlcicpLFxuICAgICAgICBpdGVtczogJCgnLnJiLXNsaWRlci1pdGVtcycpLFxuICAgICAgICBjb250YWluZXI6ICQoJy5yYi1zbGlkZXInKVxuICAgICAgfSxcbiAgICAgIHNlcnZpY2VzOiB7XG4gICAgICAgIGJ1dHRvbnM6ICRBbGwoJy5zZXJ2aWNlc19fY3RhJylcbiAgICAgIH0sXG4gICAgICBtb2RhbDoge1xuICAgICAgICBzZWxmOiAkKCcubW9kYWwnKSxcbiAgICAgICAgYnV0dG9uOiAkKCcubW9kYWxfX2J1dHRvbiBidXR0b24nKVxuICAgICAgfSxcbiAgICAgIGltYWdlczogWy4uLiRBbGwoJ2ltZycpXVxuICAgIH1cbiAgICB0aGlzLmVsZW1lbnRzID0gdGhpcy5zZWxlY3RvcnNbY29tcG9uZW50TmFtZV1cbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9Db21wb25lbnRzJ1xuaW1wb3J0IFNtb290aHNjcm9sbCBmcm9tICcuLi91dGlscy9TbW9vdGhzY3JvbGwnXG5pbXBvcnQgeyAkIH0gZnJvbSAnLi4vdXRpbHMvc2VsZWN0b3JzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlcyBleHRlbmRzIENvbXBvbmVudHMge1xuICBjb25zdHJ1Y3RvciAoZWxlbWVudHMpIHtcbiAgICBzdXBlcihlbGVtZW50cylcbiAgICB0aGlzLndyYXBwZXIgPSAkKCcud3JhcHBlcicpXG4gICAgLy8gdGhpcy5zbW9vdHNjcm9sbCA9IG5ldyBTbW9vdGhzY3JvbGwodGhpcy53cmFwcGVyLCB7IGRpcmVjdGlvbjogJ3YnLCBzbW9vdGg6IDAuMSB9KVxuICB9XG5cbiAgY3JlYXRlICgpIHt9XG5cbiAgc2hvdyAoKSB7fVxuXG4gIGhpZGUgKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3BhZ2Ugd2FzIGhpZGUnICsgcmVzb2x2ZSlcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyAkIH0gZnJvbSAnLi4vdXRpbHMvc2VsZWN0b3JzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGVydCB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCB0eXBlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZVxuICAgIHRoaXMudHlwZSA9IHR5cGVcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5jcmVhdGUoKVxuICAgIHRoaXMuc2VsZiA9ICQoJy5hbGVydCcpXG4gIH1cblxuICBjcmVhdGUgKCkge1xuICAgIHRoaXMuZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJylcbiAgICB0aGlzLmRpdi5jbGFzc05hbWUgPSAnYWxlcnQnXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB0aGlzLmRpdi5jbGFzc0xpc3QuYWRkKCdhbGVydF9fc3VjY2VzcycpXG4gICAgZWxzZSB0aGlzLmRpdi5jbGFzc0xpc3QuYWRkKCdhbGVydF9fZXJyb3InKVxuXG4gICAgLy8gQ3JlYXRlIGFsZXJ0X193cmFwcGVyXG4gICAgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoJ0RJVicsICdhbGVydF9fd3JhcHBlcicpXG4gICAgLy8gY29udGVudFxuICAgIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVFbGVtZW50KCdESVYnLCAnYWxlcnRfX2NvbnRlbnQnKVxuICAgIC8vIGljb25zXG4gICAgY29uc3QgaWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ1NQQU4nLCAnYWxlcnRfX2ljb24nKVxuICAgIC8vIE1lc3NhZ2VcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlRWxlbWVudCgnUCcsICdhbGVydF9fbWVzc2FnZScpXG4gICAgbWVzc2FnZS5pbm5lclRleHQgPSB0aGlzLm1lc3NhZ2VcbiAgICAvLyBDbG9zZSBpY29uXG4gICAgY29uc3QgY2xvc2VJY29uID0gY3JlYXRlRWxlbWVudCgnU1BBTicsICdhbGVydF9fY2xvc2VJY29uJylcbiAgICBjb25zdCBpID0gY3JlYXRlRWxlbWVudCgnSScsICdyb2ItY2xvc2UnKVxuICAgIGNsb3NlSWNvbi5hcHBlbmQoaSlcbiAgICBjbG9zZUljb24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB0aGlzLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIC8vIGFwcG5lZCBjaGlsZFxuICAgIGNvbnRlbnQuYXBwZW5kKGljb24sIG1lc3NhZ2UpXG4gICAgd3JhcHBlci5hcHBlbmQoY29udGVudCwgY2xvc2VJY29uKVxuICAgIHRoaXMuZGl2LmFwcGVuZCh3cmFwcGVyKVxuICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZCh0aGlzLmRpdilcbiAgICB0aGlzLnNlbGYgPSB0aGlzLmRpdlxuICAgIHRoaXMuaGlkZSgpXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50ICh0YWcsIGNsYXNzTmFtZSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKVxuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWVcbiAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfVxuICB9XG5cbiAgc2hvdyAoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNlbGYuc3R5bGUucmlnaHQgPSAnLjVyZW0nXG4gICAgfSwgMTAwMClcbiAgfVxuXG4gIGhpZGUgKCkge1xuICAgIHRoaXMuc2VsZi5zdHlsZS5yaWdodCA9ICctMTAwJSdcbiAgICB0aGlzLnNlbGYudHJhbnNpdGlvbiA9ICdyaWdodCAuNnMnXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZGl2KVxuICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuLi9jbGFzc2VzL0NvbXBvbmVudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBDb21wb25lbnRzIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKCduYXZpZ2F0aW9uJylcbiAgICB0aGlzLmluaXQoKVxuICAgIHRoaXMuZXZlbnRzTGlzdGVuZXIoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgY29uc3QgZGVmYXVsdFNvdXJjZSA9ICdpbWFnZXMvcHJldmlld3MvaW1nLTEnXG4gICAgdGhpcy5zZWxlY3RvcnMubmF2aWdhdGlvbi5wcmV2aWV3SW1nLnNyYyA9IGAke2RlZmF1bHRTb3VyY2V9LnBuZ2BcbiAgfVxuXG4gIG9uTW91c2VIb3ZlckxpbmtzKGUpIHtcbiAgICBjb25zdCBzcmMgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNuYXAtaW1hZ2UnKVxuICAgIHRoaXMuc2VsZWN0b3JzLm5hdmlnYXRpb24ucHJldmlld0ltZy5zcmMgPSBgJHtzcmN9LnBuZ2BcbiAgfVxuXG4gIG9wZW5NZW51KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnNlbGVjdG9ycy5uYXZpZ2F0aW9uLmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWVudV9fY29udGVudC12aXNpYmxlJylcbiAgfVxuXG4gIGNsb3NlTWVudShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5zZWxlY3RvcnMubmF2aWdhdGlvbi5jb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfX2NvbnRlbnQtdmlzaWJsZScpXG4gIH1cblxuICBldmVudHNMaXN0ZW5lciAoKSB7XG4gICAgdGhpcy5zZWxlY3RvcnMubmF2aWdhdGlvbi5uYXZMaXN0LmZvckVhY2gobGluayA9PiB7XG4gICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMub25Nb3VzZUhvdmVyTGlua3MuYmluZCh0aGlzKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZWxlY3RvcnMubmF2aWdhdGlvbi5vcGVuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbk1lbnUuYmluZCh0aGlzKSlcbiAgICB0aGlzLnNlbGVjdG9ycy5uYXZpZ2F0aW9uLmNsb3NlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNZW51LmJpbmQodGhpcykpXG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4uL2NsYXNzZXMvQ29tcG9uZW50cydcbmltcG9ydCBpbWFnZXNMb2FkZWQgZnJvbSAnaW1hZ2VzbG9hZGVkJ1xuLy9pbXBvcnQgYXV0b0JpbmQgZnJvbSAnYXV0by1iaW5kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnRzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ3ByZWxvYWRlcicpXG5cbiAgICB0aGlzLmxlbmd0aCA9IDBcbiAgICB0aGlzLnN0YXJ0SW5kZXggPSAxXG5cbiAgICB0aGlzLnNpemUgPSB7XG4gICAgICBoZWlnaHQ6IE51bWJlcih0aGlzLmVsZW1lbnRzLnRleHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KSxcbiAgICAgIHdpZHRoOiBOdW1iZXIodGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudFdpZHRoKSxcbiAgICAgIGdhcDogMlxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlUHJlbG9hZGVyKClcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoKVxuICB9XG5cbiAgY3JlYXRlUHJlbG9hZGVyICgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RvcnMuaW1hZ2VzKSB7XG4gICAgICBjb25zdCBpbWdMb2FkID0gaW1hZ2VzTG9hZGVkKGRvY3VtZW50LmJvZHkpXG5cbiAgICAgIGltZ0xvYWQub24oJ3Byb2dyZXNzJywgKF8pID0+IHtcbiAgICAgICAgdGhpcy5vblByb2dyZXNzKGltZ0xvYWQuaW1hZ2VzLmxlbmd0aClcbiAgICAgIH0pXG5cbiAgICAgIGltZ0xvYWQub24oJ2Fsd2F5cycsIChfKSA9PiB7XG4gICAgICAgIHRoaXMub25Mb2FkKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgYW5pbVByZWxvYWRlclRleHQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZWxlbWVudHMud3JhcHBlci5jaGlsZHJlbi5sZW5ndGhcblxuICAgIC8vR2l2ZSB0aGUgd3JhcHBlciB0aGUgaGVpZ2h0IG9mIHRoZSB0ZXh0XG4gICAgdGhpcy5lbGVtZW50cy5jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5zaXplLmhlaWdodH1weGBcbiAgICB0aGlzLmVsZW1lbnRzLmNvbnRhaW5lci5zdHlsZS53aWR0aCA9IGAke3RoaXMuc2l6ZS53aWR0aH1weGBcblxuICAgIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGFydEluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZS50b3AgPSBgJHsoLXRoaXMuc2l6ZS5oZWlnaHQgLSB0aGlzLnNpemUuZ2FwKSAqIHRoaXMuc3RhcnRJbmRleH1weGBcbiAgICAgICAgdGhpcy5zdGFydEluZGV4KytcbiAgICAgIH1cbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgb25Qcm9ncmVzcyAobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggKz0gMVxuICAgIGNvbnN0IHBlcmNlbnQgPSB0aGlzLmxlbmd0aCAvIGxlbmd0aFxuXG4gICAgdGhpcy5lbGVtZW50cy5sb2FkZXIuc3R5bGUud2lkdGggPSBgJHtNYXRoLnJvdW5kKHBlcmNlbnQgKiAxMDApfSVgXG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5lbWl0KCdjb21wbGV0ZWQnKVxuICB9XG5cbiAgb25SZXNpemUoZSkge1xuICAgIHRoaXMuc2l6ZSA9IHtcbiAgICAgIGhlaWdodCA6ICBOdW1iZXIodGhpcy5lbGVtZW50cy50ZXh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCksXG4gICAgICB3aWR0aCA6ICBOdW1iZXIodGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudFdpZHRoKSxcbiAgICAgIGdhcCA6IDJcbiAgICB9XG4gICAgdGhpcy5hbmltUHJlbG9hZGVyVGV4dChlKVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRoaXMuYW5pbVByZWxvYWRlclRleHQuYmluZCh0aGlzKSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnRzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnRzLmVsZW1lbnQpXG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4uL2NsYXNzZXMvQ29tcG9uZW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmljZXMgZXh0ZW5kcyBDb21wb25lbnRzIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKCdzZXJ2aWNlcycpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMuYnV0dG9ucyA9IFsuLi50aGlzLmVsZW1lbnRzLmJ1dHRvbnNdXG4gICAgdGhpcy5ldmVudExpc3RlbmVyKClcbiAgfVxuXG4gIG9uQ2xpY2sgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBidXR0b24gPSBlLmN1cnJlbnRUYXJnZXRcbiAgICB0aGlzLnR5cGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXNlcnZpY2UnKVxuICAgIHRoaXMuc2VsZWN0b3JzLm1vZGFsLnNlbGYuY2xhc3NMaXN0LmFkZCgnbW9kYWwtdmlzaWJsZScpXG4gIH1cblxuICBjbG9zZU1vZGFsIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKHRoaXMuc2VsZWN0b3JzLm1vZGFsLnNlbGYuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC12aXNpYmxlJykpIHtcbiAgICAgIHRoaXMuc2VsZWN0b3JzLm1vZGFsLnNlbGYuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtdmlzaWJsZScpXG4gICAgfVxuICB9XG5cbiAgZXZlbnRMaXN0ZW5lciAoKSB7XG4gICAgdGhpcy5idXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKVxuICAgIH0pXG5cbiAgICB0aGlzLnNlbGVjdG9ycy5tb2RhbC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlTW9kYWwuYmluZCh0aGlzKSlcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi4vLi4vY2xhc3Nlcy9Db21wb25lbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnRzIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKCdzbGlkZXInKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLmNoaWxkID0gWy4uLnRoaXMuZWxlbWVudHMuaXRlbXMuY2hpbGRyZW5dXG4gICAgdGhpcy5pbmRleCA9IDFcbiAgICB0aGlzLnBhZGRpbmcgPSAyNFxuICAgIHRoaXMuY3VycmVudFBvc2l0aW9uID0gMFxuICAgIHRoaXMudHJlc2hvbGQgPSAwXG4gICAgdGhpcy5kcmFnSW50ZXJ2YWxsID0gNDBcbiAgICB0aGlzLnNldENoaWxkV2lkdGgoKVxuICAgIHRoaXMuc2V0UG9zaXRpb24oKVxuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcigpXG4gIH1cblxuICBzZXRDaGlsZFdpZHRoICgpIHtcbiAgICB0aGlzLmNoaWxkLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLnN0eWxlLmZsZXggPSAnbm9uZSdcbiAgICAgIGl0ZW0uc3R5bGUud2lkdGggPSBgJHt3aW5kb3cuaW5uZXJXaWR0aCAqIDAuODB9cHhgXG4gICAgfSlcbiAgfVxuXG4gIHNldFBvc2l0aW9uICgpIHtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5lbGVtZW50cy5pdGVtcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICAgIHRoaXMuY3VycmVudFBvc2l0aW9uID0gLSgoKHRoaXMud2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aCAtIDI0KSAvIDIpKSAqIHRoaXMuaW5kZXhcbiAgICB0aGlzLmVsZW1lbnRzLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzRCgke3RoaXMuY3VycmVudFBvc2l0aW9ufXB4LCAwLCAwKWBcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UG9zaXRpb25cbiAgfVxuXG4gIG5leHQgKCkge1xuICAgIGlmICh0aGlzLmluZGV4ID49IHRoaXMuY2hpbGQubGVuZ3RoIC0gMSkgcmV0dXJuXG4gICAgdGhpcy5pbmRleCsrXG4gICAgaWYgKHRoaXMuaW5kZXggPT09IDIpIHtcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLmVsZW1lbnRzLml0ZW1zLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbiA9IC0oKCh0aGlzLndpZHRoIC0gd2luZG93LmlubmVyV2lkdGgpIC8gMikpICogdGhpcy5pbmRleFxuICAgICAgdGhpcy5lbGVtZW50cy5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM0QoJHt0aGlzLmN1cnJlbnRQb3NpdGlvbiAtIHRoaXMucGFkZGluZ31weCwgMCwgMClgXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24oKVxuICAgIH1cbiAgfVxuXG4gIHByZXYgKCkge1xuICAgIGlmICh0aGlzLmluZGV4IDw9IDApIHtcbiAgICAgIHRoaXMuaW5kZXggPSAwXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5pbmRleC0tXG4gICAgaWYgKHRoaXMuaW5kZXggPT09IDApIHtcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLmVsZW1lbnRzLml0ZW1zLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbiA9IC0oKCh0aGlzLndpZHRoIC0gd2luZG93LmlubmVyV2lkdGggLSAyNCkgLyAyKSkgKiB0aGlzLmluZGV4XG4gICAgICB0aGlzLmVsZW1lbnRzLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzRCgke3RoaXMucGFkZGluZ31weCwgMCwgMClgXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24oKVxuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VEb3duIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5pc0Rvd24gPSB0cnVlXG4gICAgdGhpcy5kcmFnU3RhcnQgPSBlLnhcbiAgICB0aGlzLmRyYWdTdGFydHkgPSBlLnlcbiAgfVxuXG4gIG9uTW91c2VNb3ZlIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG4gICAgdGhpcy50cmVzaG9sZCA9IGUueCAtIHRoaXMuZHJhZ1N0YXJ0XG4gICAgdGhpcy5lbGVtZW50cy5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM0QoJHt0aGlzLmN1cnJlbnRQb3NpdGlvbiArIHRoaXMudHJlc2hvbGR9cHgsIDAsIDApYFxuICB9XG5cbiAgb25Nb3VzZVVwIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBpZiAodGhpcy50cmVzaG9sZCA+IDAgJiYgdGhpcy50cmVzaG9sZCA+PSB0aGlzLmRyYWdJbnRlcnZhbGwpIHtcbiAgICAgIHRoaXMucHJldigpXG4gICAgICBjb25zb2xlLmxvZygncHJldicpXG4gICAgfSBlbHNlIGlmICh0aGlzLnRyZXNob2xkIDwgMCAmJiB0aGlzLnRyZXNob2xkIDw9IC10aGlzLmRyYWdJbnRlcnZhbGwpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBjb25zb2xlLmxvZygnbmV4dCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNEKCR7dGhpcy5jdXJyZW50UG9zaXRpb259cHgsIDAsIDApYFxuICAgIH1cblxuICAgIHRoaXMuaXNEb3duID0gZmFsc2VcbiAgfVxuXG4gIG9uV2luZG93UmVzaXplIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5zZXRDaGlsZFdpZHRoKClcbiAgICB0aGlzLnNldFBvc2l0aW9uKClcbiAgfVxuXG4gIGV2ZW50TGlzdGVuZXIgKCkge1xuICAgIHRoaXMuZWxlbWVudHMuYnV0dG9uLm5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm5leHQuYmluZCh0aGlzKSlcbiAgICB0aGlzLmVsZW1lbnRzLmJ1dHRvbi5wcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcmV2LmJpbmQodGhpcykpXG5cbiAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpXG4gICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKVxuICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpKVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpKVxuICB9XG59XG4iLCJjb25zdCBkYXRhID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vZGF0YXMvc291bmRzLmpzb24nKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYU1hbmFnZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0dGltZSwgZW5kdGltZSwgcmFuZ2UsIHByb2dyZXNzLCBwcmVsb2FkZXIsIG1lZGlhKSB7XG4gICAgdGhpcy5lbGVtZW50cyA9IHsgc3RhcnR0aW1lLCBlbmR0aW1lLCByYW5nZSwgcHJlbG9hZGVyLCBwcm9ncmVzcyB9XG4gICAgdGhpcy5tZWRpYSA9IG1lZGlhXG4gICAgdGhpcy4jaW5pdCgpXG4gIH1cblxuICAjaW5pdCgpIHtcbiAgICB0aGlzLiNhZGRFdmVudExpc3RlbmVyKClcbiAgfVxuXG4gICNpc1BsYXkoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5tZWRpYS5jdXJyZW50VGltZSlcbiAgICBjb25zb2xlLmxvZygnaXMgc3RhcnQgcGxheScpXG4gIH1cblxuICAjb25QYXVzZSgpIHtcbiAgICBjb25zb2xlLmxvZygnUGF1c2UnKVxuICB9XG5cbiAgaXNFbmRlZChjYikge1xuICAgIGNiKClcbiAgfVxuXG4gICNzZXRUaW1lKCkge1xuICAgIHRoaXMuaG91cnMgPSBNYXRoLmZsb29yKHRoaXMubWVkaWEuY3VycmVudFRpbWUgLyAzNjAwKVxuICAgIHRoaXMubWludXRlcyA9IE1hdGguZmxvb3IodGhpcy5tZWRpYS5jdXJyZW50VGltZSAvIDYwKVxuICAgIHRoaXMuc2Vjb25kcyA9IE1hdGguZmxvb3IodGhpcy5tZWRpYS5jdXJyZW50VGltZSAtIHRoaXMubWludXRlcyAqIDYwKVxuXG4gICAgdGhpcy5ob3Vyc1ZhbHVlID0gdGhpcy5taW51dGVzVmFsdWUgPSB0aGlzLnNlY29uZHNWYWx1ZSA9IDBcblxuICAgIGlmICh0aGlzLmhvdXJzIDw9IDApIHtcbiAgICAgIHRoaXMuaG91cnNWYWx1ZSA9IGAwJHt0aGlzLmhvdXJzfWBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ob3Vyc1ZhbHVlID0gdGhpcy5ob3Vyc1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1pbnV0ZXMgPCAxMCkge1xuICAgICAgdGhpcy5taW51dGVzVmFsdWUgPSBgMCR7dGhpcy5taW51dGVzfWBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5taW51dGVzVmFsdWUgPSB0aGlzLm1pbnV0ZXNcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWNvbmRzIDwgMTApIHtcbiAgICAgIHRoaXMuc2Vjb25kc1ZhbHVlID0gYDAke3RoaXMuc2Vjb25kc31gXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2Vjb25kc1ZhbHVlID0gdGhpcy5zZWNvbmRzXG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50cy5zdGFydHRpbWUudGV4dENvbnRlbnQgPSBgJHt0aGlzLm1pbnV0ZXNWYWx1ZX0gOiAke3RoaXMuc2Vjb25kc1ZhbHVlfWBcbiAgICB0aGlzLiN1cGRhdGVQcm9ncmVzcygpXG4gIH1cblxuICAjdXBkYXRlUHJvZ3Jlc3MoKSB7XG4gICAgdGhpcy5lbGVtZW50cy5yYW5nZS52YWx1ZSA9IHRoaXMubWVkaWEuY3VycmVudFRpbWVcbiAgICB0aGlzLnJhdGlvID0gdGhpcy5lbGVtZW50cy5yYW5nZS52YWx1ZSAvIHRoaXMuZWxlbWVudHMucmFuZ2UubWF4XG4gICAgdGhpcy5lbGVtZW50cy5wcm9ncmVzcy5zdHlsZS53aWR0aCA9IGAke3RoaXMucmF0aW8gKiAxMDB9JWBcbiAgfVxuXG4gICNzZXRGdWxsVGltZSgpIHtcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IodGhpcy5tZWRpYS5kdXJhdGlvbiAvIDM2MDApXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGhpcy5tZWRpYS5kdXJhdGlvbiAvIDYwKVxuICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKHRoaXMubWVkaWEuZHVyYXRpb24gLSBtaW51dGVzICogNjApXG5cbiAgICBpZiAoaG91cnMgPD0gMCkge1xuICAgICAgdGhpcy5lbGVtZW50cy5lbmR0aW1lLnRleHRDb250ZW50ID0gYCR7bWludXRlc30gOiAke3NlY29uZHN9YFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLmVuZHRpbWUudGV4dENvbnRlbnQgPSBgJHtob3Vyc306JHttaW51dGVzfToke3NlY29uZHN9YFxuICAgIH1cbiAgfVxuXG4gICNvblRpbWVDaGFuZ2UoKSB7XG4gICAgdGhpcy5tZWRpYS5jdXJyZW50VGltZSA9IHRoaXMuZWxlbWVudHMucmFuZ2UudmFsdWVcbiAgICB0aGlzLiNzZXRUaW1lKClcbiAgfVxuXG4gICNwcm9ncmVzcygpIHtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMubWVkaWEuZHVyYXRpb25cbiAgICBjb25zb2xlLmxvZyhkdXJhdGlvbilcbiAgICBpZiAoZHVyYXRpb24gPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVkaWEuYnVmZmVyZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMubWVkaWEuYnVmZmVyZWQuc3RhcnQodGhpcy5tZWRpYS5idWZmZXJlZC5sZW5ndGggLSAxIC0gaSkgPFxuICAgICAgICAgIHRoaXMubWVkaWEuY3VycmVudFRpbWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICB0aGlzLm1lZGlhLmJ1ZmZlcmVkLmVuZChcbiAgICAgICAgICAgICAgdGhpcy5tZWRpYS5idWZmZXJlZC5sZW5ndGggLSAxIC0gaSAvIGR1cmF0aW9uXG4gICAgICAgICAgICApICogMTAwXG4gICAgICAgICAgKVxuICAgICAgICAgIHRoaXMuZWxlbWVudHMucHJlbG9hZGVyLnN0eWxlLndpZHRoID1cbiAgICAgICAgICAgICh0aGlzLm1lZGlhLmJ1ZmZlcmVkLmVuZCh0aGlzLm1lZGlhLmJ1ZmZlcmVkLmxlbmd0aCAtIDEgLSBpKSAvXG4gICAgICAgICAgICAgIGR1cmF0aW9uKSAqXG4gICAgICAgICAgICAgIDEwMCArXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI21ldGFEYXRhTG9hZGVkKCkge1xuICAgIHRoaXMuI3NldEZ1bGxUaW1lKClcbiAgICB0aGlzLmVsZW1lbnRzLnJhbmdlLm1heCA9IE1hdGguZmxvb3IodGhpcy5tZWRpYS5kdXJhdGlvbilcblxuICAgIHRoaXMuZWxlbWVudHMucmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLiNvblRpbWVDaGFuZ2UuYmluZCh0aGlzKSlcbiAgICB0aGlzLm1lZGlhLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXknLCB0aGlzLiNpc1BsYXkuYmluZCh0aGlzKSlcbiAgICB0aGlzLm1lZGlhLmFkZEV2ZW50TGlzdGVuZXIoJ3BhdXNlJywgdGhpcy4jb25QYXVzZS5iaW5kKHRoaXMpKVxuICAgIHRoaXMubWVkaWEuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCB0aGlzLmlzRW5kZWQuYmluZCh0aGlzKSlcbiAgICB0aGlzLm1lZGlhLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCB0aGlzLiNzZXRUaW1lLmJpbmQodGhpcykpXG4gIH1cblxuICAjYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLm1lZGlhLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgdGhpcy4jcHJvZ3Jlc3MuYmluZCh0aGlzKSlcbiAgICB0aGlzLm1lZGlhLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnbG9hZGVkbWV0YWRhdGEnLFxuICAgICAgdGhpcy4jbWV0YURhdGFMb2FkZWQuYmluZCh0aGlzKVxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9Db21wb25lbnRzJ1xuaW1wb3J0IE1lZGlhTWFuYWdlciBmcm9tICcuL01lZGlhTWFuYWdlcidcbmltcG9ydCBUaW1lciBmcm9tICcuL1RpbWVyJ1xuaW1wb3J0IFZvbHVtZSBmcm9tICcuL3ZvbHVtZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ29tcG9uZW50cyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdwbGF5ZXInKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuaXNFeHBhbmQgPSBmYWxzZVxuICAgIHRoaXMuc3JjID0gdGhpcy5lbGVtZW50cy5tZWRpYS5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgdGhpcy5tZWRpYSA9IHRoaXMuZWxlbWVudHMubWVkaWFcbiAgICB0aGlzLmxlbmd0aCA9IDBcbiAgICB0aGlzLnJhbmRvbUlkID0gMFxuICAgIHRoaXMuc291bmQgPSBudWxsXG4gICAgdGhpcy5pY29uID0gdGhpcy5lbGVtZW50cy5idXR0b24ucGxheS5xdWVyeVNlbGVjdG9yKCdpJylcblxuICAgIHRoaXMubWVkaWFNYW5hZ2VyID0gbmV3IE1lZGlhTWFuYWdlcigpXG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLm1lZGlhTWFuYWdlci5kYXRhLmxlbmd0aFxuICAgIHRoaXMucmFuZG9tSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxlbmd0aClcblxuICAgIHRoaXMuY29tcG9uZW50c0hhbmRsZXIodGhpcy5yYW5kb21JZClcbiAgICB0aGlzLmV2ZW50c0xpc3Rlcm5lcigpXG4gIH1cblxuICBleHBhbmQoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0b3JzLnBsYXllci5jb3ZlckNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2lzRXhwYW5kJykpIHtcbiAgICAgIHRoaXMuc2VsZWN0b3JzLnBsYXllci5jb3ZlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpc0V4cGFuZCcpXG4gICAgICB0aGlzLnNlbGVjdG9ycy5wbGF5ZXIuY292ZXJDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzBweCdcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RvcnMucGxheWVyLmNvdmVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lzRXhwYW5kJylcbiAgICAgIHRoaXMuc2VsZWN0b3JzLnBsYXllci5jb3ZlckNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMTgwcHgnXG4gICAgfVxuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5lbGVtZW50cy5zZWxmLmNsYXNzTGlzdC5hZGQoJ2lzSGlkZGVuJylcbiAgfVxuXG4gIGNvbXBvbmVudHNIYW5kbGVyKGlkKSB7XG4gICAgdGhpcy5zb3VuZCA9IHRoaXMubWVkaWFNYW5hZ2VyLmRhdGFbaWRdXG4gICAgdGhpcy5tZWRpYS5zcmMgPSB0aGlzLnNvdW5kLmxpbmtcbiAgICB0aGlzLnNldENvbXBvbmVudHModGhpcy5zb3VuZClcbiAgICB0aGlzLnRpbWVySGFuZGxlcih0aGlzLm1lZGlhKVxuICB9XG5cbiAgc2V0Q29tcG9uZW50cyhzb3VuZCkge1xuICAgIHRoaXMuY292ZXJIYW5kbGVyKHNvdW5kKVxuICAgIHRoaXMudm9sdW1lSGFuZGxlcih0aGlzLm1lZGlhKVxuICAgIHRoaXMuc2V0U291bmREZXRhaWxzKHNvdW5kKVxuICB9XG5cbiAgY292ZXJIYW5kbGVyKHNvdW5kKSB7XG4gICAgdGhpcy5lbGVtZW50cy5jb3Zlci5zcmMgPSBzb3VuZC5hbGJ1bS5jb3ZlclxuICB9XG5cbiAgc2V0U291bmREZXRhaWxzKHNvdW5kKSB7XG4gICAgdGhpcy5lbGVtZW50cy5hcnRpc3QuaW5uZXJUZXh0ID0gc291bmQuYXJ0aXN0Lm5hbWVcbiAgICB0aGlzLmVsZW1lbnRzLnRpdGxlLmlubmVyVGV4dCA9IHNvdW5kLnRpdGxlXG4gIH1cblxuICBwbGF5KCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRzLmJ1dHRvbi5wbGF5LmRhdGFzZXQuaWNvbiA9PT0gJ3JvYi1wbGF5Jykge1xuICAgICAgdGhpcy5lbGVtZW50cy5idXR0b24ucGxheS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicsICdyb2ItcGF1c2UnKVxuICAgICAgdGhpcy5pY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncm9iLXBhdXNlJylcbiAgICAgIHRoaXMubWVkaWEucGxheSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuYnV0dG9uLnBsYXkuc2V0QXR0cmlidXRlKCdkYXRhLWljb24nLCAncm9iLXBsYXknKVxuICAgICAgdGhpcy5pY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncm9iLXBsYXknKVxuICAgICAgdGhpcy5tZWRpYS5wYXVzZSgpXG4gICAgfVxuICB9XG5cbiAgcGF1c2UoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudHMuYnV0dG9uLnBsYXkuZGF0YXNldC5pY29uID09PSAncm9iLXBsYXknKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLmJ1dHRvbi5wbGF5LnNldEF0dHJpYnV0ZSgnZGF0YS1pY29uJywgJ3JvYi1wYXVzZScpXG4gICAgICB0aGlzLmljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdyb2ItcGF1c2UnKVxuICAgICAgdGhpcy5tZWRpYS5wYXVzZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuYnV0dG9uLnBsYXkuc2V0QXR0cmlidXRlKCdkYXRhLWljb24nLCAncm9iLXBsYXknKVxuICAgICAgdGhpcy5pY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncm9iLXBsYXknKVxuICAgIH1cbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5tZWRpYS5wYXVzZSgpXG4gICAgdGhpcy5tZWRpYS5jdXJyZW50VGltZSA9IDBcbiAgICB0aGlzLmVsZW1lbnRzLmJ1dHRvbi5wbGF5LnNldEF0dHJpYnV0ZSgnZGF0YS1pY29uJywgJ3JvYi1wbGF5JylcbiAgICB0aGlzLmljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdyb2ItcGxheScpXG4gIH1cblxuICBuZXh0KCkge1xuICAgIHRoaXMucmFuZG9tSWQrK1xuICAgIGlmICh0aGlzLnJhbmRvbUlkID4gdGhpcy5sZW5ndGggLSAxKSB0aGlzLnJhbmRvbUlkID0gMFxuICAgIHRoaXMuc3RvcCgpXG4gICAgdGhpcy5jb21wb25lbnRzSGFuZGxlcih0aGlzLnJhbmRvbUlkKVxuICAgIHRoaXMucGxheSgpXG4gIH1cblxuICBwcmV2KCkge1xuICAgIHRoaXMucmFuZG9tSWQtLVxuICAgIGlmICh0aGlzLnJhbmRvbUlkIDwgMCkgdGhpcy5yYW5kb21JZCA9IHRoaXMubGVuZ3RoIC0gMVxuICAgIHRoaXMuc3RvcCgpXG4gICAgdGhpcy5jb21wb25lbnRzSGFuZGxlcih0aGlzLnJhbmRvbUlkKVxuICAgIHRoaXMucGxheSgpXG4gIH1cblxuICB0aW1lckhhbmRsZXIobWVkaWEpIHtcbiAgICB0aGlzLnRpbWUgPSBuZXcgVGltZXIoXG4gICAgICB0aGlzLmVsZW1lbnRzLnRpbWVyLnN0YXJ0VGltZSxcbiAgICAgIHRoaXMuZWxlbWVudHMudGltZXIuZW5kVGltZSxcbiAgICAgIHRoaXMuZWxlbWVudHMudGltZXIucmFuZ2UsXG4gICAgICB0aGlzLmVsZW1lbnRzLnRpbWVyLnByb2dyZXNzLFxuICAgICAgdGhpcy5lbGVtZW50cy50aW1lci5wcmVsb2FkLFxuICAgICAgbWVkaWFcbiAgICApXG4gIH1cblxuICB2b2x1bWVIYW5kbGVyKHNvdW5kKSB7XG4gICAgdGhpcy52b2x1bWUgPSBuZXcgVm9sdW1lKFxuICAgICAgdGhpcy5lbGVtZW50cy52b2x1bWUuY29udGFpbmVyLFxuICAgICAgdGhpcy5lbGVtZW50cy52b2x1bWUuZ3JhcHBlcixcbiAgICAgIHRoaXMuZWxlbWVudHMudm9sdW1lLnNsaWRlcixcbiAgICAgIHNvdW5kXG4gICAgKVxuICB9XG5cbiAgZXZlbnRzTGlzdGVybmVyKCkge1xuICAgIHRoaXMuZWxlbWVudHMuYnV0dG9uLmV4cGFuZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMuZXhwYW5kLmJpbmQodGhpcylcbiAgICApXG4gICAgdGhpcy5lbGVtZW50cy5idXR0b24uY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlLmJpbmQodGhpcykpXG4gICAgLy8gQ29udHJvbFxuICAgIHRoaXMuZWxlbWVudHMuYnV0dG9uLnBsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnBsYXkuYmluZCh0aGlzKSlcbiAgICB0aGlzLmVsZW1lbnRzLmJ1dHRvbi5uZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5uZXh0LmJpbmQodGhpcykpXG4gICAgdGhpcy5lbGVtZW50cy5idXR0b24ucHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJldi5iaW5kKHRoaXMpKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWb2x1bWUge1xuICBjb25zdHJ1Y3RvciAoY29udGFpbmVyLCBncmFwcGVyLCBzbGlkZXIsIG1lZGlhKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICB0aGlzLmdyYXBwZXIgPSBncmFwcGVyXG4gICAgdGhpcy5jb250YWluZXJCb3R0b20gPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b21cbiAgICB0aGlzLmNvbnRhaW5lckhlaWdodCA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgIHRoaXMuY29udGFpbmVyVG9wID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG4gICAgdGhpcy5zbGlkZXIgPSBzbGlkZXJcbiAgICB0aGlzLm1lZGlhID0gbWVkaWFcbiAgICB0aGlzLmlzRG93biA9IGZhbHNlXG4gICAgdGhpcy5wb3NpdGlvbiA9IHsgc3RhcnQ6IDAsIGVuZDogMCB9XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKClcbiAgfVxuXG4gIG9uUG9pbnRlckRvd24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLmlzRG93biA9IHRydWVcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ3BvaW50ZXJtb3ZlJyxcbiAgICAgIHRoaXMub25Qb2ludGVyTW92ZS5iaW5kKHRoaXMpXG4gICAgKVxuICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHRoaXMub25Qb2ludGVyVXAuYmluZCh0aGlzKSlcbiAgfVxuXG4gIG9uUG9pbnRlck1vdmUgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAoIXRoaXMuaXNEb3duKSByZXR1cm5cbiAgICB0aGlzLnJhdGlvID0gdGhpcy5jb250YWluZXJIZWlnaHQgLSAoZS5wYWdlWSAtIHRoaXMuY29udGFpbmVyVG9wKVxuICAgIHRoaXMuc2xpZGVyLnN0eWxlLmhlaWdodCA9IGAkeyh0aGlzLnJhdGlvIC8gdGhpcy5jb250YWluZXJIZWlnaHQpICogMTAwfSVgXG4gICAgdGhpcy5tZWRpYS52b2x1bWUgPSB0aGlzLnJhdGlvIC8gdGhpcy5jb250YWluZXJIZWlnaHRcbiAgfVxuXG4gIG9uUG9pbnRlclVwICgpIHtcbiAgICB0aGlzLmlzRG93biA9IGZhbHNlXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ3BvaW50ZXJkb3duJyxcbiAgICAgIHRoaXMub25Qb2ludGVyRG93bi5iaW5kKHRoaXMpLFxuICAgICAgZmFsc2VcbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4uL2NsYXNzZXMvQ29tcG9uZW50cydcbmltcG9ydCBBbGVydCBmcm9tICcuLi9jb21wb25lbnRzL0FsZXJ0J1xuaW1wb3J0IHsgdmFsaWRFbWFpbCB9IGZyb20gJy4uL3V0aWxzL2Z1bmN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtSGFuZGxlciBleHRlbmRzIENvbXBvbmVudHMge1xuICBjb25zdHJ1Y3RvciAodHlwZSwgdXJsLCBtZXRob2QpIHtcbiAgICBzdXBlcignZm9ybScpXG4gICAgdGhpcy5mb3JtVHlwZSA9IHR5cGVcbiAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZFxuICAgIHRoaXMudXJsID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vJHt1cmx9YFxuICAgIHRoaXMuZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzW3RoaXMuZm9ybVR5cGVdXG4gICAgdGhpcy52YWwgPSAwXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcigpXG4gIH1cblxuICAvLyBTZW5kVG9EYiAoKSB7fVxuXG4gIGFzeW5jIGZldGNoICh1cmwsIG1ldGhvZCwgZGF0YSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBtZXRob2QsXG4gICAgICBtb2RlOiAnbm8tY29ycycsXG4gICAgICBib2R5OiBkYXRhXG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucylcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAvLyBzdWNjZXNzXG4gICAgICByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5hbGVydCA9IG5ldyBBbGVydChkYXRhLnRleHQsIGRhdGEudHlwZSlcbiAgICAgICAgdGhpcy5hbGVydC5zaG93KClcbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JtLnJlc2V0KClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVycm9yXG4gICAgICByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5hbGVydCA9IG5ldyBBbGVydChkYXRhLnRleHQsIGRhdGEudHlwZSlcbiAgICAgICAgdGhpcy5hbGVydC5zaG93KClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2VuZERhdGEgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB2YWxpZE51bWJlciA9IHRoaXMudmVyaWZ5RGF0YSh0aGlzLmVsZW1lbnRzLm1haWwsIHRoaXMuZWxlbWVudHMubmFtZSwgdGhpcy5lbGVtZW50cy5tZXNzYWdlKVxuICAgIGlmICghdmFsaWROdW1iZXIpIHJldHVyblxuICAgIHRoaXMuZWxlbWVudHMuYWxlcnQuZm9yRWFjaChlbCA9PiB7IGVsLmlubmVyVGV4dCA9ICcnIH0pXG4gICAgY29uc3QgZm9ybUVsZW1lbnRzID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhuZXcgRm9ybURhdGEodGhpcy5lbGVtZW50cy5mb3JtKSlcbiAgICB0aGlzLmZldGNoKHRoaXMudXJsLCB0aGlzLm1ldGhvZCwgZm9ybUVsZW1lbnRzKVxuICB9XG5cbiAgdmVyaWZ5RGF0YSAobWFpbCwgbmFtZSwgbWVzc2FnZSkge1xuICAgIHRoaXMudmFsID0gMFxuICAgIC8vIGVtYWlsXG4gICAgaWYgKHZhbGlkRW1haWwobWFpbC52YWx1ZSkpIHtcbiAgICAgIHRoaXMudmFsKytcbiAgICB9IGVsc2UgaWYgKG1haWwudmFsdWUgPT09ICcnKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLmVtYWlsQWxlcnQuaW5uZXJUZXh0ID0gJ1JlcXVpcmVkKidcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50cy5lbWFpbEFsZXJ0LmlubmVyVGV4dCA9ICdUaGlzIGVtYWlsIGlzIG5vdCB2YWxpZCdcbiAgICB9XG5cbiAgICAvLyBuYW1lXG4gICAgaWYgKG5hbWUudmFsdWUgPT09ICcnKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLm5hbWVBbGVydC5pbm5lclRleHQgPSAnUmVxdWlyZWQqJ1xuICAgIH0gZWxzZSB7IHRoaXMudmFsKysgfVxuXG4gICAgLy8gbWVzc2FnZVxuICAgIGlmIChtZXNzYWdlLnZhbHVlID09PSAnJykge1xuICAgICAgdGhpcy5lbGVtZW50cy5tZXNzYWdlQWxlcnQuaW5uZXJUZXh0ID0gJ1JlcXVpcmVkKidcbiAgICB9IGVsc2UgeyB0aGlzLnZhbCsrIH1cblxuICAgIHJldHVybiB0aGlzLnZhbCA9PT0gM1xuICB9XG5cbiAgZXZlbnRMaXN0ZW5lciAoKSB7XG4gICAgdGhpcy5lbGVtZW50cy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNlbmREYXRhLmJpbmQodGhpcykpXG4gIH1cbn1cbiIsImltcG9ydCBQYWdlcyBmcm9tICcuLi8uLi9jbGFzc2VzL1BhZ2VzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBQYWdlcyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcignYWJvdXQnKVxuICAgIGNvbnNvbGUubG9nKCdBYm91dCcpXG4gIH1cblxuICBjcmVhdGUgKCkge1xuICAgIHN1cGVyLmNyZWF0ZSgpXG4gIH1cbn1cbiIsImltcG9ydCBQYWdlcyBmcm9tICcuLi8uLi9jbGFzc2VzL1BhZ2VzJ1xuaW1wb3J0IFNsaWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NsaWRlci9TbGlkZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlcyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcignaG9tZScpXG4gICAgY29uc29sZS5sb2coJ2hvbWUnKVxuICAgIHRoaXMuY3JlYXRlKClcbiAgfVxuXG4gIGNyZWF0ZSAoKSB7XG4gICAgc3VwZXIuY3JlYXRlKClcbiAgICB0aGlzLnNsaWRlciA9IG5ldyBTbGlkZXIoKVxuICB9XG5cbiAgaGlkZSAoKSB7fVxufVxuIiwiaW1wb3J0IHsgbGVycCwgY2xhbXAgfSBmcm9tICcuL2Z1bmN0aW9uJ1xuaW1wb3J0IG5vcm1hbGl6ZVdoZWVsIGZyb20gJ25vcm1hbGl6ZS13aGVlbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU21vb3Roc2Nyb2xsIHtcbiAgY29uc3RydWN0b3IgKGVsZW1lbnQsIG9wdHMpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cbiAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgZGlyZWN0aW9uOiAndicsIC8vIHY6IHZlcnRpY2FsIG9yICB2LSA6IHZlcnRpY2FsIGJvdHRvbSB0byB0b3A7ICBoOiBIb3Jpem9udGFsIG9yIGgtIGhvcml6b250YWwgcmlnaHQgdG8gbGVmdFxuICAgICAgc21vb3RoOiAwLjEgLy8gU21vb3RoIGFtb3VudCAtPiBMZXJwIGZ1bmN0aW9uXG4gICAgfVxuICAgIHRoaXMuc21vb3RoT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5kZWZhdWx0T3B0aW9ucywge1xuICAgICAgLi4ub3B0c1xuICAgIH0pXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGltaXQ6IDBcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHRcblxuICAgIHRoaXMuYWRkTGlzdGVuZXIoKVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIG9uTW91c2VXaGVlbCAoZSkge1xuICAgIGNvbnN0IGV2ZW50ID0gbm9ybWFsaXplV2hlZWwoZSlcblxuICAgIGlmIChcbiAgICAgIHRoaXMuc21vb3RoT3B0aW9ucy5kaXJlY3Rpb24gPT09ICd2JyB8fFxuICAgICAgdGhpcy5zbW9vdGhPcHRpb25zLmRpcmVjdGlvbiA9PT0gJ3YtJ1xuICAgICkge1xuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IGV2ZW50LnBpeGVsWVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLnNtb290aE9wdGlvbnMuZGlyZWN0aW9uID09PSAnaCcgfHxcbiAgICAgIHRoaXMuc21vb3RoT3B0aW9ucy5kaXJlY3Rpb24gPT09ICdoLSdcbiAgICApIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBldmVudC5waXhlbFhcbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSAoKSB7XG4gICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XG4gIH1cblxuICBhZGRMaXN0ZW5lciAoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5vbk1vdXNlV2hlZWwuYmluZCh0aGlzKSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBjbGFtcCh0aGlzLnNjcm9sbC50YXJnZXQsIDAsIHRoaXMuc2Nyb2xsLmxpbWl0KVxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBsZXJwKFxuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCxcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCxcbiAgICAgIHRoaXMuc21vb3RoT3B0aW9ucy5zbW9vdGhcbiAgICApXG5cbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMDEpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwXG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2xhdGVCeUNhc2UoKVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSlcbiAgfVxuXG4gIHRyYW5zbGF0ZUJ5Q2FzZSAoKSB7XG4gICAgc3dpdGNoICh0aGlzLnNtb290aE9wdGlvbnMuZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICd2JzpcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKC0ke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICd2LSc6XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdoJzpcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdoLSc6XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYFxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGxlcnAgPSAoc3RhcnQsIGVuZCwgYW1vdW50KSA9PiB7XG4gIHJldHVybiAoMSAtIGFtb3VudCkgKiBzdGFydCArIGFtb3VudCAqIGVuZFxufVxuXG5leHBvcnQgY29uc3QgY2xhbXAgPSAodmFsdWUsIG1pbiwgbWF4KSA9PiB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KVxufVxuXG4vKipcbiAqIFbDqXJpZmllIHNpIHVuIGZpY2hpZXIgZXN0IGRlIHR5cGUgUERGLCAgRE9DIGV0IERPWCBjJ2VzdCDDoCBkaXJlXG4gKiB1biBkb2N1bWVudCB0ZXh0ZVxuICogQHBhcmFtIHtGSUxFfSBmaWxlIC0gbGUgZmljaGllciBxdWkgZG9pdCDDqnRyZSB2w6lyaWZpZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gbGUgdHlwZSBkZSBmaWNoaWVyIGRvY3VtZW50IHwgaW1hZ2VcbiAqIEByZXR1cm5zIHtCb29sZWFufSBCb29sZWFuXG4gKi9cbmV4cG9ydCBjb25zdCB2YWxpZEZpbGVUeXBlID0gKGZpbGUsIHR5cGUpID0+IHtcbiAgY29uc3QgZG9jdW1lbnRzID0gW1xuICAgICdhcHBsaWNhdGlvbi9wZGYnLFxuICAgICdhcHBsaWNhdGlvbi9kb2MnLFxuICAgICdhcHBsaWNhdGlvbi9kb2N4JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQnLFxuICAgICdhcHBsaWNhdGlvbi9tc3dvcmQnXG4gIF1cblxuICBjb25zdCBpbWFnZXMgPSBbXG4gICAgJ2ltYWdlL3BuZycsXG4gICAgJ2ltYWdlL2pwZWcnLFxuICAgICdpbWFnZS9qcGcnLFxuICAgICdpbWFnZS93ZWJwJyxcbiAgICAnaW1hZ2UvYm1wJ1xuICBdXG5cbiAgaWYgKHR5cGUgPT09ICdkb2N1bWVudHMnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb2N1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChmaWxlLnR5cGUgPT09IGRvY3VtZW50c1tpXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdpbWFnZXMnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChmaWxlLnR5cGUgPT09IGltYWdlc1tpXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogVsOpcmlmaWUgc2kgdW5lIFVybCBwb2ludGUgdmVycyB1bmUgcGFnZSB2YWxpZGVcbiAqXG4gKiBAYXN5bmNcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBsZSBsaWVuIGRlIGxhIHBhZ2VcbiAqIEByZXR1cm5zIHtib29sZWFufSBCb29sZWFuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBVcmxFeGlzdCAodXJsKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbW9kZTogJ25vLWNvcnMnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKidcbiAgICB9XG4gIH1cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpXG4gIHJldHVybiByZXNwb25zZS5zdGF0dXMgIT09ICc0MDQnXG59XG5cbi8qKlxuICogVmVyaWZpZSBzaSB1biBlbWFpbCBlc3QgdmFsaWRlXG4gKiBAcGFyYW0gZW1haWxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZEVtYWlsIChlbWFpbCkge1xuICBjb25zdCByZWdleCA9XG4gICAgL15bYS16QS1aMC05LiEjJCUmJyorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05LV0rKD86XFwuW2EtekEtWjAtOS1dKykqJC9cblxuICBpZiAocmVnZXgudGVzdChlbWFpbCkpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG4iLCIvKipcbiAqIFNlbGVjdCBlbGVtZW50IGluIERPTSBIVE1MXG4gKiBAcGFyYW0geyp9IGVsZW1lbnQgLSBUaGUgY3NzIHNlbGVjdG9yIG9mIHRoZSBIVE1MIGVsZW1lbnQgdG8gdGFyZ2V0XG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKi9cbmV4cG9ydCBjb25zdCAkID0gKGVsZW1lbnQpID0+IHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7ZWxlbWVudH1gKVxufVxuXG4vKipcbiAqIFNlbGVjdCBlbGVtZW50cyBpbiBET00gSFRNTFxuICogQHBhcmFtIHsqfSBlbGVtZW50cyAtIFRoZSBjc3Mgc2VsZWN0b3Igb2YgdGhlIEhUTUwgZWxlbWVudHMgdG8gdGFyZ2V0XG4gKiBAcmV0dXJucyB7Tm9kZUxpc3R9XG4gKi9cbmV4cG9ydCBjb25zdCAkQWxsID0gKGVsZW1lbnRzKSA9PiB7XG4gIHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtlbGVtZW50c31gKV1cbn1cblxuLyoqXG4gKiBHZXQgQXR0cmlidXRlIG9mIEVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBIVE1MIGVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5hbWUgLSBOYW1lIG9mIGF0dHJpYnV0ZSAoZXggOiBkYXRhLWFuaW1hdGlvbilcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCAkQXR0cmlidXRlID0gKGVsZW1lbnQsIG5hbWUpID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhbnNpSFRNTFxuXG4vLyBSZWZlcmVuY2UgdG8gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9hbnNpLXJlZ2V4XG52YXIgX3JlZ0FOU0kgPSAvKD86KD86XFx1MDAxYlxcWyl8XFx1MDA5YikoPzooPzpbMC05XXsxLDN9KT8oPzooPzo7WzAtOV17MCwzfSkqKT9bQS1NfGYtbV0pfFxcdTAwMWJbQS1NXS9cblxudmFyIF9kZWZDb2xvcnMgPSB7XG4gIHJlc2V0OiBbJ2ZmZicsICcwMDAnXSwgLy8gW0ZPUkVHUk9VRF9DT0xPUiwgQkFDS0dST1VORF9DT0xPUl1cbiAgYmxhY2s6ICcwMDAnLFxuICByZWQ6ICdmZjAwMDAnLFxuICBncmVlbjogJzIwOTgwNScsXG4gIHllbGxvdzogJ2U4YmYwMycsXG4gIGJsdWU6ICcwMDAwZmYnLFxuICBtYWdlbnRhOiAnZmYwMGZmJyxcbiAgY3lhbjogJzAwZmZlZScsXG4gIGxpZ2h0Z3JleTogJ2YwZjBmMCcsXG4gIGRhcmtncmV5OiAnODg4J1xufVxudmFyIF9zdHlsZXMgPSB7XG4gIDMwOiAnYmxhY2snLFxuICAzMTogJ3JlZCcsXG4gIDMyOiAnZ3JlZW4nLFxuICAzMzogJ3llbGxvdycsXG4gIDM0OiAnYmx1ZScsXG4gIDM1OiAnbWFnZW50YScsXG4gIDM2OiAnY3lhbicsXG4gIDM3OiAnbGlnaHRncmV5J1xufVxudmFyIF9vcGVuVGFncyA9IHtcbiAgJzEnOiAnZm9udC13ZWlnaHQ6Ym9sZCcsIC8vIGJvbGRcbiAgJzInOiAnb3BhY2l0eTowLjUnLCAvLyBkaW1cbiAgJzMnOiAnPGk+JywgLy8gaXRhbGljXG4gICc0JzogJzx1PicsIC8vIHVuZGVyc2NvcmVcbiAgJzgnOiAnZGlzcGxheTpub25lJywgLy8gaGlkZGVuXG4gICc5JzogJzxkZWw+JyAvLyBkZWxldGVcbn1cbnZhciBfY2xvc2VUYWdzID0ge1xuICAnMjMnOiAnPC9pPicsIC8vIHJlc2V0IGl0YWxpY1xuICAnMjQnOiAnPC91PicsIC8vIHJlc2V0IHVuZGVyc2NvcmVcbiAgJzI5JzogJzwvZGVsPicgLy8gcmVzZXQgZGVsZXRlXG59XG5cbjtbMCwgMjEsIDIyLCAyNywgMjgsIDM5LCA0OV0uZm9yRWFjaChmdW5jdGlvbiAobikge1xuICBfY2xvc2VUYWdzW25dID0gJzwvc3Bhbj4nXG59KVxuXG4vKipcbiAqIENvbnZlcnRzIHRleHQgd2l0aCBBTlNJIGNvbG9yIGNvZGVzIHRvIEhUTUwgbWFya3VwLlxuICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5mdW5jdGlvbiBhbnNpSFRNTCAodGV4dCkge1xuICAvLyBSZXR1cm5zIHRoZSB0ZXh0IGlmIHRoZSBzdHJpbmcgaGFzIG5vIEFOU0kgZXNjYXBlIGNvZGUuXG4gIGlmICghX3JlZ0FOU0kudGVzdCh0ZXh0KSkge1xuICAgIHJldHVybiB0ZXh0XG4gIH1cblxuICAvLyBDYWNoZSBvcGVuZWQgc2VxdWVuY2UuXG4gIHZhciBhbnNpQ29kZXMgPSBbXVxuICAvLyBSZXBsYWNlIHdpdGggbWFya3VwLlxuICB2YXIgcmV0ID0gdGV4dC5yZXBsYWNlKC9cXDAzM1xcWyhcXGQrKW0vZywgZnVuY3Rpb24gKG1hdGNoLCBzZXEpIHtcbiAgICB2YXIgb3QgPSBfb3BlblRhZ3Nbc2VxXVxuICAgIGlmIChvdCkge1xuICAgICAgLy8gSWYgY3VycmVudCBzZXF1ZW5jZSBoYXMgYmVlbiBvcGVuZWQsIGNsb3NlIGl0LlxuICAgICAgaWYgKCEhfmFuc2lDb2Rlcy5pbmRleE9mKHNlcSkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1leHRyYS1ib29sZWFuLWNhc3RcbiAgICAgICAgYW5zaUNvZGVzLnBvcCgpXG4gICAgICAgIHJldHVybiAnPC9zcGFuPidcbiAgICAgIH1cbiAgICAgIC8vIE9wZW4gdGFnLlxuICAgICAgYW5zaUNvZGVzLnB1c2goc2VxKVxuICAgICAgcmV0dXJuIG90WzBdID09PSAnPCcgPyBvdCA6ICc8c3BhbiBzdHlsZT1cIicgKyBvdCArICc7XCI+J1xuICAgIH1cblxuICAgIHZhciBjdCA9IF9jbG9zZVRhZ3Nbc2VxXVxuICAgIGlmIChjdCkge1xuICAgICAgLy8gUG9wIHNlcXVlbmNlXG4gICAgICBhbnNpQ29kZXMucG9wKClcbiAgICAgIHJldHVybiBjdFxuICAgIH1cbiAgICByZXR1cm4gJydcbiAgfSlcblxuICAvLyBNYWtlIHN1cmUgdGFncyBhcmUgY2xvc2VkLlxuICB2YXIgbCA9IGFuc2lDb2Rlcy5sZW5ndGhcbiAgOyhsID4gMCkgJiYgKHJldCArPSBBcnJheShsICsgMSkuam9pbignPC9zcGFuPicpKVxuXG4gIHJldHVybiByZXRcbn1cblxuLyoqXG4gKiBDdXN0b21pemUgY29sb3JzLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbG9ycyByZWZlcmVuY2UgdG8gX2RlZkNvbG9yc1xuICovXG5hbnNpSFRNTC5zZXRDb2xvcnMgPSBmdW5jdGlvbiAoY29sb3JzKSB7XG4gIGlmICh0eXBlb2YgY29sb3JzICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignYGNvbG9yc2AgcGFyYW1ldGVyIG11c3QgYmUgYW4gT2JqZWN0LicpXG4gIH1cblxuICB2YXIgX2ZpbmFsQ29sb3JzID0ge31cbiAgZm9yICh2YXIga2V5IGluIF9kZWZDb2xvcnMpIHtcbiAgICB2YXIgaGV4ID0gY29sb3JzLmhhc093blByb3BlcnR5KGtleSkgPyBjb2xvcnNba2V5XSA6IG51bGxcbiAgICBpZiAoIWhleCkge1xuICAgICAgX2ZpbmFsQ29sb3JzW2tleV0gPSBfZGVmQ29sb3JzW2tleV1cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmICgncmVzZXQnID09PSBrZXkpIHtcbiAgICAgIGlmICh0eXBlb2YgaGV4ID09PSAnc3RyaW5nJykge1xuICAgICAgICBoZXggPSBbaGV4XVxuICAgICAgfVxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGhleCkgfHwgaGV4Lmxlbmd0aCA9PT0gMCB8fCBoZXguc29tZShmdW5jdGlvbiAoaCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGggIT09ICdzdHJpbmcnXG4gICAgICB9KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSB2YWx1ZSBvZiBgJyArIGtleSArICdgIHByb3BlcnR5IG11c3QgYmUgYW4gQXJyYXkgYW5kIGVhY2ggaXRlbSBjb3VsZCBvbmx5IGJlIGEgaGV4IHN0cmluZywgZS5nLjogRkYwMDAwJylcbiAgICAgIH1cbiAgICAgIHZhciBkZWZIZXhDb2xvciA9IF9kZWZDb2xvcnNba2V5XVxuICAgICAgaWYgKCFoZXhbMF0pIHtcbiAgICAgICAgaGV4WzBdID0gZGVmSGV4Q29sb3JbMF1cbiAgICAgIH1cbiAgICAgIGlmIChoZXgubGVuZ3RoID09PSAxIHx8ICFoZXhbMV0pIHtcbiAgICAgICAgaGV4ID0gW2hleFswXV1cbiAgICAgICAgaGV4LnB1c2goZGVmSGV4Q29sb3JbMV0pXG4gICAgICB9XG5cbiAgICAgIGhleCA9IGhleC5zbGljZSgwLCAyKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGhleCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHZhbHVlIG9mIGAnICsga2V5ICsgJ2AgcHJvcGVydHkgbXVzdCBiZSBhIGhleCBzdHJpbmcsIGUuZy46IEZGMDAwMCcpXG4gICAgfVxuICAgIF9maW5hbENvbG9yc1trZXldID0gaGV4XG4gIH1cbiAgX3NldFRhZ3MoX2ZpbmFsQ29sb3JzKVxufVxuXG4vKipcbiAqIFJlc2V0IGNvbG9ycy5cbiAqL1xuYW5zaUhUTUwucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gIF9zZXRUYWdzKF9kZWZDb2xvcnMpXG59XG5cbi8qKlxuICogRXhwb3NlIHRhZ3MsIGluY2x1ZGluZyBvcGVuIGFuZCBjbG9zZS5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmFuc2lIVE1MLnRhZ3MgPSB7fVxuXG5pZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhbnNpSFRNTC50YWdzLCAnb3BlbicsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9vcGVuVGFncyB9XG4gIH0pXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhbnNpSFRNTC50YWdzLCAnY2xvc2UnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfY2xvc2VUYWdzIH1cbiAgfSlcbn0gZWxzZSB7XG4gIGFuc2lIVE1MLnRhZ3Mub3BlbiA9IF9vcGVuVGFnc1xuICBhbnNpSFRNTC50YWdzLmNsb3NlID0gX2Nsb3NlVGFnc1xufVxuXG5mdW5jdGlvbiBfc2V0VGFncyAoY29sb3JzKSB7XG4gIC8vIHJlc2V0IGFsbFxuICBfb3BlblRhZ3NbJzAnXSA9ICdmb250LXdlaWdodDpub3JtYWw7b3BhY2l0eToxO2NvbG9yOiMnICsgY29sb3JzLnJlc2V0WzBdICsgJztiYWNrZ3JvdW5kOiMnICsgY29sb3JzLnJlc2V0WzFdXG4gIC8vIGludmVyc2VcbiAgX29wZW5UYWdzWyc3J10gPSAnY29sb3I6IycgKyBjb2xvcnMucmVzZXRbMV0gKyAnO2JhY2tncm91bmQ6IycgKyBjb2xvcnMucmVzZXRbMF1cbiAgLy8gZGFyayBncmV5XG4gIF9vcGVuVGFnc1snOTAnXSA9ICdjb2xvcjojJyArIGNvbG9ycy5kYXJrZ3JleVxuXG4gIGZvciAodmFyIGNvZGUgaW4gX3N0eWxlcykge1xuICAgIHZhciBjb2xvciA9IF9zdHlsZXNbY29kZV1cbiAgICB2YXIgb3JpQ29sb3IgPSBjb2xvcnNbY29sb3JdIHx8ICcwMDAnXG4gICAgX29wZW5UYWdzW2NvZGVdID0gJ2NvbG9yOiMnICsgb3JpQ29sb3JcbiAgICBjb2RlID0gcGFyc2VJbnQoY29kZSlcbiAgICBfb3BlblRhZ3NbKGNvZGUgKyAxMCkudG9TdHJpbmcoKV0gPSAnYmFja2dyb3VuZDojJyArIG9yaUNvbG9yXG4gIH1cbn1cblxuYW5zaUhUTUwucmVzZXQoKVxuIiwiLyoqXG4gKiBFdkVtaXR0ZXIgdjIuMS4xXG4gKiBMaWwnIGV2ZW50IGVtaXR0ZXJcbiAqIE1JVCBMaWNlbnNlXG4gKi9cblxuKCBmdW5jdGlvbiggZ2xvYmFsLCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTIC0gQnJvd3NlcmlmeSwgV2VicGFja1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIGdsb2JhbC5FdkVtaXR0ZXIgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKCkge1xuXG5mdW5jdGlvbiBFdkVtaXR0ZXIoKSB7fVxuXG5sZXQgcHJvdG8gPSBFdkVtaXR0ZXIucHJvdG90eXBlO1xuXG5wcm90by5vbiA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBpZiAoICFldmVudE5hbWUgfHwgIWxpc3RlbmVyICkgcmV0dXJuIHRoaXM7XG5cbiAgLy8gc2V0IGV2ZW50cyBoYXNoXG4gIGxldCBldmVudHMgPSB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIC8vIHNldCBsaXN0ZW5lcnMgYXJyYXlcbiAgbGV0IGxpc3RlbmVycyA9IGV2ZW50c1sgZXZlbnROYW1lIF0gPSBldmVudHNbIGV2ZW50TmFtZSBdIHx8IFtdO1xuICAvLyBvbmx5IGFkZCBvbmNlXG4gIGlmICggIWxpc3RlbmVycy5pbmNsdWRlcyggbGlzdGVuZXIgKSApIHtcbiAgICBsaXN0ZW5lcnMucHVzaCggbGlzdGVuZXIgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub25jZSA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBpZiAoICFldmVudE5hbWUgfHwgIWxpc3RlbmVyICkgcmV0dXJuIHRoaXM7XG5cbiAgLy8gYWRkIGV2ZW50XG4gIHRoaXMub24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgLy8gc2V0IG9uY2UgZmxhZ1xuICAvLyBzZXQgb25jZUV2ZW50cyBoYXNoXG4gIGxldCBvbmNlRXZlbnRzID0gdGhpcy5fb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgfHwge307XG4gIC8vIHNldCBvbmNlTGlzdGVuZXJzIG9iamVjdFxuICBsZXQgb25jZUxpc3RlbmVycyA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gfHwge307XG4gIC8vIHNldCBmbGFnXG4gIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF0gPSB0cnVlO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub2ZmID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGxldCBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcbiAgaWYgKCAhbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoICkgcmV0dXJuIHRoaXM7XG5cbiAgbGV0IGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YoIGxpc3RlbmVyICk7XG4gIGlmICggaW5kZXggIT0gLTEgKSB7XG4gICAgbGlzdGVuZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8uZW1pdEV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgYXJncyApIHtcbiAgbGV0IGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbIGV2ZW50TmFtZSBdO1xuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSByZXR1cm4gdGhpcztcblxuICAvLyBjb3B5IG92ZXIgdG8gYXZvaWQgaW50ZXJmZXJlbmNlIGlmIC5vZmYoKSBpbiBsaXN0ZW5lclxuICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoIDAgKTtcbiAgYXJncyA9IGFyZ3MgfHwgW107XG4gIC8vIG9uY2Ugc3R1ZmZcbiAgbGV0IG9uY2VMaXN0ZW5lcnMgPSB0aGlzLl9vbmNlRXZlbnRzICYmIHRoaXMuX29uY2VFdmVudHNbIGV2ZW50TmFtZSBdO1xuXG4gIGZvciAoIGxldCBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMgKSB7XG4gICAgbGV0IGlzT25jZSA9IG9uY2VMaXN0ZW5lcnMgJiYgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICBpZiAoIGlzT25jZSApIHtcbiAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lclxuICAgICAgLy8gcmVtb3ZlIGJlZm9yZSB0cmlnZ2VyIHRvIHByZXZlbnQgcmVjdXJzaW9uXG4gICAgICB0aGlzLm9mZiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAgICAgLy8gdW5zZXQgb25jZSBmbGFnXG4gICAgICBkZWxldGUgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICB9XG4gICAgLy8gdHJpZ2dlciBsaXN0ZW5lclxuICAgIGxpc3RlbmVyLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLmFsbE9mZiA9IGZ1bmN0aW9uKCkge1xuICBkZWxldGUgdGhpcy5fZXZlbnRzO1xuICBkZWxldGUgdGhpcy5fb25jZUV2ZW50cztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5yZXR1cm4gRXZFbWl0dGVyO1xuXG59ICkgKTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5tb2R1bGUuZXhwb3J0cy5vbmNlID0gb25jZTtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIF9nZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIF9nZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSBfZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG9uY2UoZW1pdHRlciwgbmFtZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZ1bmN0aW9uIGVycm9yTGlzdGVuZXIoZXJyKSB7XG4gICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKG5hbWUsIHJlc29sdmVyKTtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVyKCkge1xuICAgICAgaWYgKHR5cGVvZiBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICByZXNvbHZlKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfTtcblxuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCByZXNvbHZlciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIGlmIChuYW1lICE9PSAnZXJyb3InKSB7XG4gICAgICBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBlcnJvckxpc3RlbmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgaGFuZGxlciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsICdlcnJvcicsIGhhbmRsZXIsIGZsYWdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgbGlzdGVuZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICBlbWl0dGVyLm9uY2UobmFtZSwgbGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWl0dGVyLm9uKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIEV2ZW50VGFyZ2V0IGRvZXMgbm90IGhhdmUgYGVycm9yYCBldmVudCBzZW1hbnRpY3MgbGlrZSBOb2RlXG4gICAgLy8gRXZlbnRFbWl0dGVycywgd2UgZG8gbm90IGxpc3RlbiBmb3IgYGVycm9yYCBldmVudHMgaGVyZS5cbiAgICBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZnVuY3Rpb24gd3JhcExpc3RlbmVyKGFyZykge1xuICAgICAgLy8gSUUgZG9lcyBub3QgaGF2ZSBidWlsdGluIGB7IG9uY2U6IHRydWUgfWAgc3VwcG9ydCBzbyB3ZVxuICAgICAgLy8gaGF2ZSB0byBkbyBpdCBtYW51YWxseS5cbiAgICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCB3cmFwTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgbGlzdGVuZXIoYXJnKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJlbWl0dGVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEV2ZW50RW1pdHRlci4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGVtaXR0ZXIpO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbmFtZWRfcmVmZXJlbmNlc18xID0gcmVxdWlyZShcIi4vbmFtZWQtcmVmZXJlbmNlc1wiKTtcbnZhciBudW1lcmljX3VuaWNvZGVfbWFwXzEgPSByZXF1aXJlKFwiLi9udW1lcmljLXVuaWNvZGUtbWFwXCIpO1xudmFyIHN1cnJvZ2F0ZV9wYWlyc18xID0gcmVxdWlyZShcIi4vc3Vycm9nYXRlLXBhaXJzXCIpO1xudmFyIGFsbE5hbWVkUmVmZXJlbmNlcyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBuYW1lZF9yZWZlcmVuY2VzXzEubmFtZWRSZWZlcmVuY2VzKSwgeyBhbGw6IG5hbWVkX3JlZmVyZW5jZXNfMS5uYW1lZFJlZmVyZW5jZXMuaHRtbDUgfSk7XG52YXIgZW5jb2RlUmVnRXhwcyA9IHtcbiAgICBzcGVjaWFsQ2hhcnM6IC9bPD4nXCImXS9nLFxuICAgIG5vbkFzY2lpOiAvKD86Wzw+J1wiJlxcdTAwODAtXFx1RDdGRlxcdUUwMDAtXFx1RkZGRl18W1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXXxbXFx1RDgwMC1cXHVEQkZGXSg/IVtcXHVEQzAwLVxcdURGRkZdKXwoPzpbXlxcdUQ4MDAtXFx1REJGRl18XilbXFx1REMwMC1cXHVERkZGXSkvZyxcbiAgICBub25Bc2NpaVByaW50YWJsZTogLyg/Ols8PidcIiZcXHgwMS1cXHgwOFxceDExLVxceDE1XFx4MTctXFx4MUZcXHg3Zi1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdKS9nLFxuICAgIGV4dGVuc2l2ZTogLyg/OltcXHgwMS1cXHgwY1xceDBlLVxceDFmXFx4MjEtXFx4MmNcXHgyZS1cXHgyZlxceDNhLVxceDQwXFx4NWItXFx4NjBcXHg3Yi1cXHg3ZFxceDdmLVxcdUQ3RkZcXHVFMDAwLVxcdUZGRkZdfFtcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl18W1xcdUQ4MDAtXFx1REJGRl0oPyFbXFx1REMwMC1cXHVERkZGXSl8KD86W15cXHVEODAwLVxcdURCRkZdfF4pW1xcdURDMDAtXFx1REZGRl0pL2dcbn07XG52YXIgZGVmYXVsdEVuY29kZU9wdGlvbnMgPSB7XG4gICAgbW9kZTogJ3NwZWNpYWxDaGFycycsXG4gICAgbGV2ZWw6ICdhbGwnLFxuICAgIG51bWVyaWM6ICdkZWNpbWFsJ1xufTtcbi8qKiBFbmNvZGVzIGFsbCB0aGUgbmVjZXNzYXJ5IChzcGVjaWZpZWQgYnkgYGxldmVsYCkgY2hhcmFjdGVycyBpbiB0aGUgdGV4dCAqL1xuZnVuY3Rpb24gZW5jb2RlKHRleHQsIF9hKSB7XG4gICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IGRlZmF1bHRFbmNvZGVPcHRpb25zIDogX2EsIF9jID0gX2IubW9kZSwgbW9kZSA9IF9jID09PSB2b2lkIDAgPyAnc3BlY2lhbENoYXJzJyA6IF9jLCBfZCA9IF9iLm51bWVyaWMsIG51bWVyaWMgPSBfZCA9PT0gdm9pZCAwID8gJ2RlY2ltYWwnIDogX2QsIF9lID0gX2IubGV2ZWwsIGxldmVsID0gX2UgPT09IHZvaWQgMCA/ICdhbGwnIDogX2U7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIGVuY29kZVJlZ0V4cCA9IGVuY29kZVJlZ0V4cHNbbW9kZV07XG4gICAgdmFyIHJlZmVyZW5jZXMgPSBhbGxOYW1lZFJlZmVyZW5jZXNbbGV2ZWxdLmNoYXJhY3RlcnM7XG4gICAgdmFyIGlzSGV4ID0gbnVtZXJpYyA9PT0gJ2hleGFkZWNpbWFsJztcbiAgICBlbmNvZGVSZWdFeHAubGFzdEluZGV4ID0gMDtcbiAgICB2YXIgX2IgPSBlbmNvZGVSZWdFeHAuZXhlYyh0ZXh0KTtcbiAgICB2YXIgX2M7XG4gICAgaWYgKF9iKSB7XG4gICAgICAgIF9jID0gJyc7XG4gICAgICAgIHZhciBfZCA9IDA7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmIChfZCAhPT0gX2IuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBfYyArPSB0ZXh0LnN1YnN0cmluZyhfZCwgX2IuaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9lID0gX2JbMF07XG4gICAgICAgICAgICB2YXIgcmVzdWx0XzEgPSByZWZlcmVuY2VzW19lXTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0XzEpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZV8xID0gX2UubGVuZ3RoID4gMSA/IHN1cnJvZ2F0ZV9wYWlyc18xLmdldENvZGVQb2ludChfZSwgMCkgOiBfZS5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgICAgIHJlc3VsdF8xID0gKGlzSGV4ID8gJyYjeCcgKyBjb2RlXzEudG9TdHJpbmcoMTYpIDogJyYjJyArIGNvZGVfMSkgKyAnOyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfYyArPSByZXN1bHRfMTtcbiAgICAgICAgICAgIF9kID0gX2IuaW5kZXggKyBfZS5sZW5ndGg7XG4gICAgICAgIH0gd2hpbGUgKChfYiA9IGVuY29kZVJlZ0V4cC5leGVjKHRleHQpKSk7XG4gICAgICAgIGlmIChfZCAhPT0gdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIF9jICs9IHRleHQuc3Vic3RyaW5nKF9kKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgX2MgPVxuICAgICAgICAgICAgdGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIF9jO1xufVxuZXhwb3J0cy5lbmNvZGUgPSBlbmNvZGU7XG52YXIgZGVmYXVsdERlY29kZU9wdGlvbnMgPSB7XG4gICAgc2NvcGU6ICdib2R5JyxcbiAgICBsZXZlbDogJ2FsbCdcbn07XG52YXIgc3RyaWN0ID0gLyYoPzojXFxkK3wjW3hYXVtcXGRhLWZBLUZdK3xbMC05YS16QS1aXSspOy9nO1xudmFyIGF0dHJpYnV0ZSA9IC8mKD86I1xcZCt8I1t4WF1bXFxkYS1mQS1GXSt8WzAtOWEtekEtWl0rKVs7PV0/L2c7XG52YXIgYmFzZURlY29kZVJlZ0V4cHMgPSB7XG4gICAgeG1sOiB7XG4gICAgICAgIHN0cmljdDogc3RyaWN0LFxuICAgICAgICBhdHRyaWJ1dGU6IGF0dHJpYnV0ZSxcbiAgICAgICAgYm9keTogbmFtZWRfcmVmZXJlbmNlc18xLmJvZHlSZWdFeHBzLnhtbFxuICAgIH0sXG4gICAgaHRtbDQ6IHtcbiAgICAgICAgc3RyaWN0OiBzdHJpY3QsXG4gICAgICAgIGF0dHJpYnV0ZTogYXR0cmlidXRlLFxuICAgICAgICBib2R5OiBuYW1lZF9yZWZlcmVuY2VzXzEuYm9keVJlZ0V4cHMuaHRtbDRcbiAgICB9LFxuICAgIGh0bWw1OiB7XG4gICAgICAgIHN0cmljdDogc3RyaWN0LFxuICAgICAgICBhdHRyaWJ1dGU6IGF0dHJpYnV0ZSxcbiAgICAgICAgYm9keTogbmFtZWRfcmVmZXJlbmNlc18xLmJvZHlSZWdFeHBzLmh0bWw1XG4gICAgfVxufTtcbnZhciBkZWNvZGVSZWdFeHBzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGJhc2VEZWNvZGVSZWdFeHBzKSwgeyBhbGw6IGJhc2VEZWNvZGVSZWdFeHBzLmh0bWw1IH0pO1xudmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG52YXIgb3V0T2ZCb3VuZHNDaGFyID0gZnJvbUNoYXJDb2RlKDY1NTMzKTtcbnZhciBkZWZhdWx0RGVjb2RlRW50aXR5T3B0aW9ucyA9IHtcbiAgICBsZXZlbDogJ2FsbCdcbn07XG4vKiogRGVjb2RlcyBhIHNpbmdsZSBlbnRpdHkgKi9cbmZ1bmN0aW9uIGRlY29kZUVudGl0eShlbnRpdHksIF9hKSB7XG4gICAgdmFyIF9iID0gKF9hID09PSB2b2lkIDAgPyBkZWZhdWx0RGVjb2RlRW50aXR5T3B0aW9ucyA6IF9hKS5sZXZlbCwgbGV2ZWwgPSBfYiA9PT0gdm9pZCAwID8gJ2FsbCcgOiBfYjtcbiAgICBpZiAoIWVudGl0eSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciBfYiA9IGVudGl0eTtcbiAgICB2YXIgZGVjb2RlRW50aXR5TGFzdENoYXJfMSA9IGVudGl0eVtlbnRpdHkubGVuZ3RoIC0gMV07XG4gICAgaWYgKGZhbHNlXG4gICAgICAgICYmIGRlY29kZUVudGl0eUxhc3RDaGFyXzEgPT09ICc9Jykge1xuICAgICAgICBfYiA9XG4gICAgICAgICAgICBlbnRpdHk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZhbHNlXG4gICAgICAgICYmIGRlY29kZUVudGl0eUxhc3RDaGFyXzEgIT09ICc7Jykge1xuICAgICAgICBfYiA9XG4gICAgICAgICAgICBlbnRpdHk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZGVjb2RlUmVzdWx0QnlSZWZlcmVuY2VfMSA9IGFsbE5hbWVkUmVmZXJlbmNlc1tsZXZlbF0uZW50aXRpZXNbZW50aXR5XTtcbiAgICAgICAgaWYgKGRlY29kZVJlc3VsdEJ5UmVmZXJlbmNlXzEpIHtcbiAgICAgICAgICAgIF9iID0gZGVjb2RlUmVzdWx0QnlSZWZlcmVuY2VfMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbnRpdHlbMF0gPT09ICcmJyAmJiBlbnRpdHlbMV0gPT09ICcjJykge1xuICAgICAgICAgICAgdmFyIGRlY29kZVNlY29uZENoYXJfMSA9IGVudGl0eVsyXTtcbiAgICAgICAgICAgIHZhciBkZWNvZGVDb2RlXzEgPSBkZWNvZGVTZWNvbmRDaGFyXzEgPT0gJ3gnIHx8IGRlY29kZVNlY29uZENoYXJfMSA9PSAnWCdcbiAgICAgICAgICAgICAgICA/IHBhcnNlSW50KGVudGl0eS5zdWJzdHIoMyksIDE2KVxuICAgICAgICAgICAgICAgIDogcGFyc2VJbnQoZW50aXR5LnN1YnN0cigyKSk7XG4gICAgICAgICAgICBfYiA9XG4gICAgICAgICAgICAgICAgZGVjb2RlQ29kZV8xID49IDB4MTBmZmZmXG4gICAgICAgICAgICAgICAgICAgID8gb3V0T2ZCb3VuZHNDaGFyXG4gICAgICAgICAgICAgICAgICAgIDogZGVjb2RlQ29kZV8xID4gNjU1MzVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc3Vycm9nYXRlX3BhaXJzXzEuZnJvbUNvZGVQb2ludChkZWNvZGVDb2RlXzEpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGZyb21DaGFyQ29kZShudW1lcmljX3VuaWNvZGVfbWFwXzEubnVtZXJpY1VuaWNvZGVNYXBbZGVjb2RlQ29kZV8xXSB8fCBkZWNvZGVDb2RlXzEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBfYjtcbn1cbmV4cG9ydHMuZGVjb2RlRW50aXR5ID0gZGVjb2RlRW50aXR5O1xuLyoqIERlY29kZXMgYWxsIGVudGl0aWVzIGluIHRoZSB0ZXh0ICovXG5mdW5jdGlvbiBkZWNvZGUodGV4dCwgX2EpIHtcbiAgICB2YXIgZGVjb2RlU2Vjb25kQ2hhcl8xID0gX2EgPT09IHZvaWQgMCA/IGRlZmF1bHREZWNvZGVPcHRpb25zIDogX2EsIGRlY29kZUNvZGVfMSA9IGRlY29kZVNlY29uZENoYXJfMS5sZXZlbCwgbGV2ZWwgPSBkZWNvZGVDb2RlXzEgPT09IHZvaWQgMCA/ICdhbGwnIDogZGVjb2RlQ29kZV8xLCBfYiA9IGRlY29kZVNlY29uZENoYXJfMS5zY29wZSwgc2NvcGUgPSBfYiA9PT0gdm9pZCAwID8gbGV2ZWwgPT09ICd4bWwnID8gJ3N0cmljdCcgOiAnYm9keScgOiBfYjtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgZGVjb2RlUmVnRXhwID0gZGVjb2RlUmVnRXhwc1tsZXZlbF1bc2NvcGVdO1xuICAgIHZhciByZWZlcmVuY2VzID0gYWxsTmFtZWRSZWZlcmVuY2VzW2xldmVsXS5lbnRpdGllcztcbiAgICB2YXIgaXNBdHRyaWJ1dGUgPSBzY29wZSA9PT0gJ2F0dHJpYnV0ZSc7XG4gICAgdmFyIGlzU3RyaWN0ID0gc2NvcGUgPT09ICdzdHJpY3QnO1xuICAgIGRlY29kZVJlZ0V4cC5sYXN0SW5kZXggPSAwO1xuICAgIHZhciByZXBsYWNlTWF0Y2hfMSA9IGRlY29kZVJlZ0V4cC5leGVjKHRleHQpO1xuICAgIHZhciByZXBsYWNlUmVzdWx0XzE7XG4gICAgaWYgKHJlcGxhY2VNYXRjaF8xKSB7XG4gICAgICAgIHJlcGxhY2VSZXN1bHRfMSA9ICcnO1xuICAgICAgICB2YXIgcmVwbGFjZUxhc3RJbmRleF8xID0gMDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKHJlcGxhY2VMYXN0SW5kZXhfMSAhPT0gcmVwbGFjZU1hdGNoXzEuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlUmVzdWx0XzEgKz0gdGV4dC5zdWJzdHJpbmcocmVwbGFjZUxhc3RJbmRleF8xLCByZXBsYWNlTWF0Y2hfMS5pbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVwbGFjZUlucHV0XzEgPSByZXBsYWNlTWF0Y2hfMVswXTtcbiAgICAgICAgICAgIHZhciBkZWNvZGVSZXN1bHRfMSA9IHJlcGxhY2VJbnB1dF8xO1xuICAgICAgICAgICAgdmFyIGRlY29kZUVudGl0eUxhc3RDaGFyXzIgPSByZXBsYWNlSW5wdXRfMVtyZXBsYWNlSW5wdXRfMS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmIChpc0F0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICYmIGRlY29kZUVudGl0eUxhc3RDaGFyXzIgPT09ICc9Jykge1xuICAgICAgICAgICAgICAgIGRlY29kZVJlc3VsdF8xID0gcmVwbGFjZUlucHV0XzE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc1N0cmljdFxuICAgICAgICAgICAgICAgICYmIGRlY29kZUVudGl0eUxhc3RDaGFyXzIgIT09ICc7Jykge1xuICAgICAgICAgICAgICAgIGRlY29kZVJlc3VsdF8xID0gcmVwbGFjZUlucHV0XzE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVjb2RlUmVzdWx0QnlSZWZlcmVuY2VfMiA9IHJlZmVyZW5jZXNbcmVwbGFjZUlucHV0XzFdO1xuICAgICAgICAgICAgICAgIGlmIChkZWNvZGVSZXN1bHRCeVJlZmVyZW5jZV8yKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY29kZVJlc3VsdF8xID0gZGVjb2RlUmVzdWx0QnlSZWZlcmVuY2VfMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVwbGFjZUlucHV0XzFbMF0gPT09ICcmJyAmJiByZXBsYWNlSW5wdXRfMVsxXSA9PT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWNvZGVTZWNvbmRDaGFyXzIgPSByZXBsYWNlSW5wdXRfMVsyXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlY29kZUNvZGVfMiA9IGRlY29kZVNlY29uZENoYXJfMiA9PSAneCcgfHwgZGVjb2RlU2Vjb25kQ2hhcl8yID09ICdYJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBwYXJzZUludChyZXBsYWNlSW5wdXRfMS5zdWJzdHIoMyksIDE2KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwYXJzZUludChyZXBsYWNlSW5wdXRfMS5zdWJzdHIoMikpO1xuICAgICAgICAgICAgICAgICAgICBkZWNvZGVSZXN1bHRfMSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVDb2RlXzIgPj0gMHgxMGZmZmZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG91dE9mQm91bmRzQ2hhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlQ29kZV8yID4gNjU1MzVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdXJyb2dhdGVfcGFpcnNfMS5mcm9tQ29kZVBvaW50KGRlY29kZUNvZGVfMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmcm9tQ2hhckNvZGUobnVtZXJpY191bmljb2RlX21hcF8xLm51bWVyaWNVbmljb2RlTWFwW2RlY29kZUNvZGVfMl0gfHwgZGVjb2RlQ29kZV8yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXBsYWNlUmVzdWx0XzEgKz0gZGVjb2RlUmVzdWx0XzE7XG4gICAgICAgICAgICByZXBsYWNlTGFzdEluZGV4XzEgPSByZXBsYWNlTWF0Y2hfMS5pbmRleCArIHJlcGxhY2VJbnB1dF8xLmxlbmd0aDtcbiAgICAgICAgfSB3aGlsZSAoKHJlcGxhY2VNYXRjaF8xID0gZGVjb2RlUmVnRXhwLmV4ZWModGV4dCkpKTtcbiAgICAgICAgaWYgKHJlcGxhY2VMYXN0SW5kZXhfMSAhPT0gdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlcGxhY2VSZXN1bHRfMSArPSB0ZXh0LnN1YnN0cmluZyhyZXBsYWNlTGFzdEluZGV4XzEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXBsYWNlUmVzdWx0XzEgPVxuICAgICAgICAgICAgdGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHJlcGxhY2VSZXN1bHRfMTtcbn1cbmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOnRydWV9KTtleHBvcnRzLmJvZHlSZWdFeHBzPXt4bWw6LyYoPzojXFxkK3wjW3hYXVtcXGRhLWZBLUZdK3xbMC05YS16QS1aXSspOz8vZyxodG1sNDovJig/Om5ic3B8aWV4Y2x8Y2VudHxwb3VuZHxjdXJyZW58eWVufGJydmJhcnxzZWN0fHVtbHxjb3B5fG9yZGZ8bGFxdW98bm90fHNoeXxyZWd8bWFjcnxkZWd8cGx1c21ufHN1cDJ8c3VwM3xhY3V0ZXxtaWNyb3xwYXJhfG1pZGRvdHxjZWRpbHxzdXAxfG9yZG18cmFxdW98ZnJhYzE0fGZyYWMxMnxmcmFjMzR8aXF1ZXN0fEFncmF2ZXxBYWN1dGV8QWNpcmN8QXRpbGRlfEF1bWx8QXJpbmd8QUVsaWd8Q2NlZGlsfEVncmF2ZXxFYWN1dGV8RWNpcmN8RXVtbHxJZ3JhdmV8SWFjdXRlfEljaXJjfEl1bWx8RVRIfE50aWxkZXxPZ3JhdmV8T2FjdXRlfE9jaXJjfE90aWxkZXxPdW1sfHRpbWVzfE9zbGFzaHxVZ3JhdmV8VWFjdXRlfFVjaXJjfFV1bWx8WWFjdXRlfFRIT1JOfHN6bGlnfGFncmF2ZXxhYWN1dGV8YWNpcmN8YXRpbGRlfGF1bWx8YXJpbmd8YWVsaWd8Y2NlZGlsfGVncmF2ZXxlYWN1dGV8ZWNpcmN8ZXVtbHxpZ3JhdmV8aWFjdXRlfGljaXJjfGl1bWx8ZXRofG50aWxkZXxvZ3JhdmV8b2FjdXRlfG9jaXJjfG90aWxkZXxvdW1sfGRpdmlkZXxvc2xhc2h8dWdyYXZlfHVhY3V0ZXx1Y2lyY3x1dW1sfHlhY3V0ZXx0aG9ybnx5dW1sfHF1b3R8YW1wfGx0fGd0fCNcXGQrfCNbeFhdW1xcZGEtZkEtRl0rfFswLTlhLXpBLVpdKyk7Py9nLGh0bWw1Oi8mKD86QUVsaWd8QU1QfEFhY3V0ZXxBY2lyY3xBZ3JhdmV8QXJpbmd8QXRpbGRlfEF1bWx8Q09QWXxDY2VkaWx8RVRIfEVhY3V0ZXxFY2lyY3xFZ3JhdmV8RXVtbHxHVHxJYWN1dGV8SWNpcmN8SWdyYXZlfEl1bWx8TFR8TnRpbGRlfE9hY3V0ZXxPY2lyY3xPZ3JhdmV8T3NsYXNofE90aWxkZXxPdW1sfFFVT1R8UkVHfFRIT1JOfFVhY3V0ZXxVY2lyY3xVZ3JhdmV8VXVtbHxZYWN1dGV8YWFjdXRlfGFjaXJjfGFjdXRlfGFlbGlnfGFncmF2ZXxhbXB8YXJpbmd8YXRpbGRlfGF1bWx8YnJ2YmFyfGNjZWRpbHxjZWRpbHxjZW50fGNvcHl8Y3VycmVufGRlZ3xkaXZpZGV8ZWFjdXRlfGVjaXJjfGVncmF2ZXxldGh8ZXVtbHxmcmFjMTJ8ZnJhYzE0fGZyYWMzNHxndHxpYWN1dGV8aWNpcmN8aWV4Y2x8aWdyYXZlfGlxdWVzdHxpdW1sfGxhcXVvfGx0fG1hY3J8bWljcm98bWlkZG90fG5ic3B8bm90fG50aWxkZXxvYWN1dGV8b2NpcmN8b2dyYXZlfG9yZGZ8b3JkbXxvc2xhc2h8b3RpbGRlfG91bWx8cGFyYXxwbHVzbW58cG91bmR8cXVvdHxyYXF1b3xyZWd8c2VjdHxzaHl8c3VwMXxzdXAyfHN1cDN8c3psaWd8dGhvcm58dGltZXN8dWFjdXRlfHVjaXJjfHVncmF2ZXx1bWx8dXVtbHx5YWN1dGV8eWVufHl1bWx8I1xcZCt8I1t4WF1bXFxkYS1mQS1GXSt8WzAtOWEtekEtWl0rKTs/L2d9O2V4cG9ydHMubmFtZWRSZWZlcmVuY2VzPXt4bWw6e2VudGl0aWVzOntcIiZsdDtcIjpcIjxcIixcIiZndDtcIjpcIj5cIixcIiZxdW90O1wiOidcIicsXCImYXBvcztcIjpcIidcIixcIiZhbXA7XCI6XCImXCJ9LGNoYXJhY3RlcnM6e1wiPFwiOlwiJmx0O1wiLFwiPlwiOlwiJmd0O1wiLCdcIic6XCImcXVvdDtcIixcIidcIjpcIiZhcG9zO1wiLFwiJlwiOlwiJmFtcDtcIn19LGh0bWw0OntlbnRpdGllczp7XCImYXBvcztcIjpcIidcIixcIiZuYnNwXCI6XCLCoFwiLFwiJm5ic3A7XCI6XCLCoFwiLFwiJmlleGNsXCI6XCLCoVwiLFwiJmlleGNsO1wiOlwiwqFcIixcIiZjZW50XCI6XCLColwiLFwiJmNlbnQ7XCI6XCLColwiLFwiJnBvdW5kXCI6XCLCo1wiLFwiJnBvdW5kO1wiOlwiwqNcIixcIiZjdXJyZW5cIjpcIsKkXCIsXCImY3VycmVuO1wiOlwiwqRcIixcIiZ5ZW5cIjpcIsKlXCIsXCImeWVuO1wiOlwiwqVcIixcIiZicnZiYXJcIjpcIsKmXCIsXCImYnJ2YmFyO1wiOlwiwqZcIixcIiZzZWN0XCI6XCLCp1wiLFwiJnNlY3Q7XCI6XCLCp1wiLFwiJnVtbFwiOlwiwqhcIixcIiZ1bWw7XCI6XCLCqFwiLFwiJmNvcHlcIjpcIsKpXCIsXCImY29weTtcIjpcIsKpXCIsXCImb3JkZlwiOlwiwqpcIixcIiZvcmRmO1wiOlwiwqpcIixcIiZsYXF1b1wiOlwiwqtcIixcIiZsYXF1bztcIjpcIsKrXCIsXCImbm90XCI6XCLCrFwiLFwiJm5vdDtcIjpcIsKsXCIsXCImc2h5XCI6XCLCrVwiLFwiJnNoeTtcIjpcIsKtXCIsXCImcmVnXCI6XCLCrlwiLFwiJnJlZztcIjpcIsKuXCIsXCImbWFjclwiOlwiwq9cIixcIiZtYWNyO1wiOlwiwq9cIixcIiZkZWdcIjpcIsKwXCIsXCImZGVnO1wiOlwiwrBcIixcIiZwbHVzbW5cIjpcIsKxXCIsXCImcGx1c21uO1wiOlwiwrFcIixcIiZzdXAyXCI6XCLCslwiLFwiJnN1cDI7XCI6XCLCslwiLFwiJnN1cDNcIjpcIsKzXCIsXCImc3VwMztcIjpcIsKzXCIsXCImYWN1dGVcIjpcIsK0XCIsXCImYWN1dGU7XCI6XCLCtFwiLFwiJm1pY3JvXCI6XCLCtVwiLFwiJm1pY3JvO1wiOlwiwrVcIixcIiZwYXJhXCI6XCLCtlwiLFwiJnBhcmE7XCI6XCLCtlwiLFwiJm1pZGRvdFwiOlwiwrdcIixcIiZtaWRkb3Q7XCI6XCLCt1wiLFwiJmNlZGlsXCI6XCLCuFwiLFwiJmNlZGlsO1wiOlwiwrhcIixcIiZzdXAxXCI6XCLCuVwiLFwiJnN1cDE7XCI6XCLCuVwiLFwiJm9yZG1cIjpcIsK6XCIsXCImb3JkbTtcIjpcIsK6XCIsXCImcmFxdW9cIjpcIsK7XCIsXCImcmFxdW87XCI6XCLCu1wiLFwiJmZyYWMxNFwiOlwiwrxcIixcIiZmcmFjMTQ7XCI6XCLCvFwiLFwiJmZyYWMxMlwiOlwiwr1cIixcIiZmcmFjMTI7XCI6XCLCvVwiLFwiJmZyYWMzNFwiOlwiwr5cIixcIiZmcmFjMzQ7XCI6XCLCvlwiLFwiJmlxdWVzdFwiOlwiwr9cIixcIiZpcXVlc3Q7XCI6XCLCv1wiLFwiJkFncmF2ZVwiOlwiw4BcIixcIiZBZ3JhdmU7XCI6XCLDgFwiLFwiJkFhY3V0ZVwiOlwiw4FcIixcIiZBYWN1dGU7XCI6XCLDgVwiLFwiJkFjaXJjXCI6XCLDglwiLFwiJkFjaXJjO1wiOlwiw4JcIixcIiZBdGlsZGVcIjpcIsODXCIsXCImQXRpbGRlO1wiOlwiw4NcIixcIiZBdW1sXCI6XCLDhFwiLFwiJkF1bWw7XCI6XCLDhFwiLFwiJkFyaW5nXCI6XCLDhVwiLFwiJkFyaW5nO1wiOlwiw4VcIixcIiZBRWxpZ1wiOlwiw4ZcIixcIiZBRWxpZztcIjpcIsOGXCIsXCImQ2NlZGlsXCI6XCLDh1wiLFwiJkNjZWRpbDtcIjpcIsOHXCIsXCImRWdyYXZlXCI6XCLDiFwiLFwiJkVncmF2ZTtcIjpcIsOIXCIsXCImRWFjdXRlXCI6XCLDiVwiLFwiJkVhY3V0ZTtcIjpcIsOJXCIsXCImRWNpcmNcIjpcIsOKXCIsXCImRWNpcmM7XCI6XCLDilwiLFwiJkV1bWxcIjpcIsOLXCIsXCImRXVtbDtcIjpcIsOLXCIsXCImSWdyYXZlXCI6XCLDjFwiLFwiJklncmF2ZTtcIjpcIsOMXCIsXCImSWFjdXRlXCI6XCLDjVwiLFwiJklhY3V0ZTtcIjpcIsONXCIsXCImSWNpcmNcIjpcIsOOXCIsXCImSWNpcmM7XCI6XCLDjlwiLFwiJkl1bWxcIjpcIsOPXCIsXCImSXVtbDtcIjpcIsOPXCIsXCImRVRIXCI6XCLDkFwiLFwiJkVUSDtcIjpcIsOQXCIsXCImTnRpbGRlXCI6XCLDkVwiLFwiJk50aWxkZTtcIjpcIsORXCIsXCImT2dyYXZlXCI6XCLDklwiLFwiJk9ncmF2ZTtcIjpcIsOSXCIsXCImT2FjdXRlXCI6XCLDk1wiLFwiJk9hY3V0ZTtcIjpcIsOTXCIsXCImT2NpcmNcIjpcIsOUXCIsXCImT2NpcmM7XCI6XCLDlFwiLFwiJk90aWxkZVwiOlwiw5VcIixcIiZPdGlsZGU7XCI6XCLDlVwiLFwiJk91bWxcIjpcIsOWXCIsXCImT3VtbDtcIjpcIsOWXCIsXCImdGltZXNcIjpcIsOXXCIsXCImdGltZXM7XCI6XCLDl1wiLFwiJk9zbGFzaFwiOlwiw5hcIixcIiZPc2xhc2g7XCI6XCLDmFwiLFwiJlVncmF2ZVwiOlwiw5lcIixcIiZVZ3JhdmU7XCI6XCLDmVwiLFwiJlVhY3V0ZVwiOlwiw5pcIixcIiZVYWN1dGU7XCI6XCLDmlwiLFwiJlVjaXJjXCI6XCLDm1wiLFwiJlVjaXJjO1wiOlwiw5tcIixcIiZVdW1sXCI6XCLDnFwiLFwiJlV1bWw7XCI6XCLDnFwiLFwiJllhY3V0ZVwiOlwiw51cIixcIiZZYWN1dGU7XCI6XCLDnVwiLFwiJlRIT1JOXCI6XCLDnlwiLFwiJlRIT1JOO1wiOlwiw55cIixcIiZzemxpZ1wiOlwiw59cIixcIiZzemxpZztcIjpcIsOfXCIsXCImYWdyYXZlXCI6XCLDoFwiLFwiJmFncmF2ZTtcIjpcIsOgXCIsXCImYWFjdXRlXCI6XCLDoVwiLFwiJmFhY3V0ZTtcIjpcIsOhXCIsXCImYWNpcmNcIjpcIsOiXCIsXCImYWNpcmM7XCI6XCLDolwiLFwiJmF0aWxkZVwiOlwiw6NcIixcIiZhdGlsZGU7XCI6XCLDo1wiLFwiJmF1bWxcIjpcIsOkXCIsXCImYXVtbDtcIjpcIsOkXCIsXCImYXJpbmdcIjpcIsOlXCIsXCImYXJpbmc7XCI6XCLDpVwiLFwiJmFlbGlnXCI6XCLDplwiLFwiJmFlbGlnO1wiOlwiw6ZcIixcIiZjY2VkaWxcIjpcIsOnXCIsXCImY2NlZGlsO1wiOlwiw6dcIixcIiZlZ3JhdmVcIjpcIsOoXCIsXCImZWdyYXZlO1wiOlwiw6hcIixcIiZlYWN1dGVcIjpcIsOpXCIsXCImZWFjdXRlO1wiOlwiw6lcIixcIiZlY2lyY1wiOlwiw6pcIixcIiZlY2lyYztcIjpcIsOqXCIsXCImZXVtbFwiOlwiw6tcIixcIiZldW1sO1wiOlwiw6tcIixcIiZpZ3JhdmVcIjpcIsOsXCIsXCImaWdyYXZlO1wiOlwiw6xcIixcIiZpYWN1dGVcIjpcIsOtXCIsXCImaWFjdXRlO1wiOlwiw61cIixcIiZpY2lyY1wiOlwiw65cIixcIiZpY2lyYztcIjpcIsOuXCIsXCImaXVtbFwiOlwiw69cIixcIiZpdW1sO1wiOlwiw69cIixcIiZldGhcIjpcIsOwXCIsXCImZXRoO1wiOlwiw7BcIixcIiZudGlsZGVcIjpcIsOxXCIsXCImbnRpbGRlO1wiOlwiw7FcIixcIiZvZ3JhdmVcIjpcIsOyXCIsXCImb2dyYXZlO1wiOlwiw7JcIixcIiZvYWN1dGVcIjpcIsOzXCIsXCImb2FjdXRlO1wiOlwiw7NcIixcIiZvY2lyY1wiOlwiw7RcIixcIiZvY2lyYztcIjpcIsO0XCIsXCImb3RpbGRlXCI6XCLDtVwiLFwiJm90aWxkZTtcIjpcIsO1XCIsXCImb3VtbFwiOlwiw7ZcIixcIiZvdW1sO1wiOlwiw7ZcIixcIiZkaXZpZGVcIjpcIsO3XCIsXCImZGl2aWRlO1wiOlwiw7dcIixcIiZvc2xhc2hcIjpcIsO4XCIsXCImb3NsYXNoO1wiOlwiw7hcIixcIiZ1Z3JhdmVcIjpcIsO5XCIsXCImdWdyYXZlO1wiOlwiw7lcIixcIiZ1YWN1dGVcIjpcIsO6XCIsXCImdWFjdXRlO1wiOlwiw7pcIixcIiZ1Y2lyY1wiOlwiw7tcIixcIiZ1Y2lyYztcIjpcIsO7XCIsXCImdXVtbFwiOlwiw7xcIixcIiZ1dW1sO1wiOlwiw7xcIixcIiZ5YWN1dGVcIjpcIsO9XCIsXCImeWFjdXRlO1wiOlwiw71cIixcIiZ0aG9yblwiOlwiw75cIixcIiZ0aG9ybjtcIjpcIsO+XCIsXCImeXVtbFwiOlwiw79cIixcIiZ5dW1sO1wiOlwiw79cIixcIiZxdW90XCI6J1wiJyxcIiZxdW90O1wiOidcIicsXCImYW1wXCI6XCImXCIsXCImYW1wO1wiOlwiJlwiLFwiJmx0XCI6XCI8XCIsXCImbHQ7XCI6XCI8XCIsXCImZ3RcIjpcIj5cIixcIiZndDtcIjpcIj5cIixcIiZPRWxpZztcIjpcIsWSXCIsXCImb2VsaWc7XCI6XCLFk1wiLFwiJlNjYXJvbjtcIjpcIsWgXCIsXCImc2Nhcm9uO1wiOlwixaFcIixcIiZZdW1sO1wiOlwixbhcIixcIiZjaXJjO1wiOlwiy4ZcIixcIiZ0aWxkZTtcIjpcIsucXCIsXCImZW5zcDtcIjpcIuKAglwiLFwiJmVtc3A7XCI6XCLigINcIixcIiZ0aGluc3A7XCI6XCLigIlcIixcIiZ6d25qO1wiOlwi4oCMXCIsXCImendqO1wiOlwi4oCNXCIsXCImbHJtO1wiOlwi4oCOXCIsXCImcmxtO1wiOlwi4oCPXCIsXCImbmRhc2g7XCI6XCLigJNcIixcIiZtZGFzaDtcIjpcIuKAlFwiLFwiJmxzcXVvO1wiOlwi4oCYXCIsXCImcnNxdW87XCI6XCLigJlcIixcIiZzYnF1bztcIjpcIuKAmlwiLFwiJmxkcXVvO1wiOlwi4oCcXCIsXCImcmRxdW87XCI6XCLigJ1cIixcIiZiZHF1bztcIjpcIuKAnlwiLFwiJmRhZ2dlcjtcIjpcIuKAoFwiLFwiJkRhZ2dlcjtcIjpcIuKAoVwiLFwiJnBlcm1pbDtcIjpcIuKAsFwiLFwiJmxzYXF1bztcIjpcIuKAuVwiLFwiJnJzYXF1bztcIjpcIuKAulwiLFwiJmV1cm87XCI6XCLigqxcIixcIiZmbm9mO1wiOlwixpJcIixcIiZBbHBoYTtcIjpcIs6RXCIsXCImQmV0YTtcIjpcIs6SXCIsXCImR2FtbWE7XCI6XCLOk1wiLFwiJkRlbHRhO1wiOlwizpRcIixcIiZFcHNpbG9uO1wiOlwizpVcIixcIiZaZXRhO1wiOlwizpZcIixcIiZFdGE7XCI6XCLOl1wiLFwiJlRoZXRhO1wiOlwizphcIixcIiZJb3RhO1wiOlwizplcIixcIiZLYXBwYTtcIjpcIs6aXCIsXCImTGFtYmRhO1wiOlwizptcIixcIiZNdTtcIjpcIs6cXCIsXCImTnU7XCI6XCLOnVwiLFwiJlhpO1wiOlwizp5cIixcIiZPbWljcm9uO1wiOlwizp9cIixcIiZQaTtcIjpcIs6gXCIsXCImUmhvO1wiOlwizqFcIixcIiZTaWdtYTtcIjpcIs6jXCIsXCImVGF1O1wiOlwizqRcIixcIiZVcHNpbG9uO1wiOlwizqVcIixcIiZQaGk7XCI6XCLOplwiLFwiJkNoaTtcIjpcIs6nXCIsXCImUHNpO1wiOlwizqhcIixcIiZPbWVnYTtcIjpcIs6pXCIsXCImYWxwaGE7XCI6XCLOsVwiLFwiJmJldGE7XCI6XCLOslwiLFwiJmdhbW1hO1wiOlwizrNcIixcIiZkZWx0YTtcIjpcIs60XCIsXCImZXBzaWxvbjtcIjpcIs61XCIsXCImemV0YTtcIjpcIs62XCIsXCImZXRhO1wiOlwizrdcIixcIiZ0aGV0YTtcIjpcIs64XCIsXCImaW90YTtcIjpcIs65XCIsXCIma2FwcGE7XCI6XCLOulwiLFwiJmxhbWJkYTtcIjpcIs67XCIsXCImbXU7XCI6XCLOvFwiLFwiJm51O1wiOlwizr1cIixcIiZ4aTtcIjpcIs6+XCIsXCImb21pY3JvbjtcIjpcIs6/XCIsXCImcGk7XCI6XCLPgFwiLFwiJnJobztcIjpcIs+BXCIsXCImc2lnbWFmO1wiOlwiz4JcIixcIiZzaWdtYTtcIjpcIs+DXCIsXCImdGF1O1wiOlwiz4RcIixcIiZ1cHNpbG9uO1wiOlwiz4VcIixcIiZwaGk7XCI6XCLPhlwiLFwiJmNoaTtcIjpcIs+HXCIsXCImcHNpO1wiOlwiz4hcIixcIiZvbWVnYTtcIjpcIs+JXCIsXCImdGhldGFzeW07XCI6XCLPkVwiLFwiJnVwc2loO1wiOlwiz5JcIixcIiZwaXY7XCI6XCLPllwiLFwiJmJ1bGw7XCI6XCLigKJcIixcIiZoZWxsaXA7XCI6XCLigKZcIixcIiZwcmltZTtcIjpcIuKAslwiLFwiJlByaW1lO1wiOlwi4oCzXCIsXCImb2xpbmU7XCI6XCLigL5cIixcIiZmcmFzbDtcIjpcIuKBhFwiLFwiJndlaWVycDtcIjpcIuKEmFwiLFwiJmltYWdlO1wiOlwi4oSRXCIsXCImcmVhbDtcIjpcIuKEnFwiLFwiJnRyYWRlO1wiOlwi4oSiXCIsXCImYWxlZnN5bTtcIjpcIuKEtVwiLFwiJmxhcnI7XCI6XCLihpBcIixcIiZ1YXJyO1wiOlwi4oaRXCIsXCImcmFycjtcIjpcIuKGklwiLFwiJmRhcnI7XCI6XCLihpNcIixcIiZoYXJyO1wiOlwi4oaUXCIsXCImY3JhcnI7XCI6XCLihrVcIixcIiZsQXJyO1wiOlwi4oeQXCIsXCImdUFycjtcIjpcIuKHkVwiLFwiJnJBcnI7XCI6XCLih5JcIixcIiZkQXJyO1wiOlwi4oeTXCIsXCImaEFycjtcIjpcIuKHlFwiLFwiJmZvcmFsbDtcIjpcIuKIgFwiLFwiJnBhcnQ7XCI6XCLiiIJcIixcIiZleGlzdDtcIjpcIuKIg1wiLFwiJmVtcHR5O1wiOlwi4oiFXCIsXCImbmFibGE7XCI6XCLiiIdcIixcIiZpc2luO1wiOlwi4oiIXCIsXCImbm90aW47XCI6XCLiiIlcIixcIiZuaTtcIjpcIuKIi1wiLFwiJnByb2Q7XCI6XCLiiI9cIixcIiZzdW07XCI6XCLiiJFcIixcIiZtaW51cztcIjpcIuKIklwiLFwiJmxvd2FzdDtcIjpcIuKIl1wiLFwiJnJhZGljO1wiOlwi4oiaXCIsXCImcHJvcDtcIjpcIuKInVwiLFwiJmluZmluO1wiOlwi4oieXCIsXCImYW5nO1wiOlwi4oigXCIsXCImYW5kO1wiOlwi4oinXCIsXCImb3I7XCI6XCLiiKhcIixcIiZjYXA7XCI6XCLiiKlcIixcIiZjdXA7XCI6XCLiiKpcIixcIiZpbnQ7XCI6XCLiiKtcIixcIiZ0aGVyZTQ7XCI6XCLiiLRcIixcIiZzaW07XCI6XCLiiLxcIixcIiZjb25nO1wiOlwi4omFXCIsXCImYXN5bXA7XCI6XCLiiYhcIixcIiZuZTtcIjpcIuKJoFwiLFwiJmVxdWl2O1wiOlwi4omhXCIsXCImbGU7XCI6XCLiiaRcIixcIiZnZTtcIjpcIuKJpVwiLFwiJnN1YjtcIjpcIuKKglwiLFwiJnN1cDtcIjpcIuKKg1wiLFwiJm5zdWI7XCI6XCLiioRcIixcIiZzdWJlO1wiOlwi4oqGXCIsXCImc3VwZTtcIjpcIuKKh1wiLFwiJm9wbHVzO1wiOlwi4oqVXCIsXCImb3RpbWVzO1wiOlwi4oqXXCIsXCImcGVycDtcIjpcIuKKpVwiLFwiJnNkb3Q7XCI6XCLii4VcIixcIiZsY2VpbDtcIjpcIuKMiFwiLFwiJnJjZWlsO1wiOlwi4oyJXCIsXCImbGZsb29yO1wiOlwi4oyKXCIsXCImcmZsb29yO1wiOlwi4oyLXCIsXCImbGFuZztcIjpcIuKMqVwiLFwiJnJhbmc7XCI6XCLijKpcIixcIiZsb3o7XCI6XCLil4pcIixcIiZzcGFkZXM7XCI6XCLimaBcIixcIiZjbHVicztcIjpcIuKZo1wiLFwiJmhlYXJ0cztcIjpcIuKZpVwiLFwiJmRpYW1zO1wiOlwi4pmmXCJ9LGNoYXJhY3RlcnM6e1wiJ1wiOlwiJmFwb3M7XCIsXCLCoFwiOlwiJm5ic3A7XCIsXCLCoVwiOlwiJmlleGNsO1wiLFwiwqJcIjpcIiZjZW50O1wiLFwiwqNcIjpcIiZwb3VuZDtcIixcIsKkXCI6XCImY3VycmVuO1wiLFwiwqVcIjpcIiZ5ZW47XCIsXCLCplwiOlwiJmJydmJhcjtcIixcIsKnXCI6XCImc2VjdDtcIixcIsKoXCI6XCImdW1sO1wiLFwiwqlcIjpcIiZjb3B5O1wiLFwiwqpcIjpcIiZvcmRmO1wiLFwiwqtcIjpcIiZsYXF1bztcIixcIsKsXCI6XCImbm90O1wiLFwiwq1cIjpcIiZzaHk7XCIsXCLCrlwiOlwiJnJlZztcIixcIsKvXCI6XCImbWFjcjtcIixcIsKwXCI6XCImZGVnO1wiLFwiwrFcIjpcIiZwbHVzbW47XCIsXCLCslwiOlwiJnN1cDI7XCIsXCLCs1wiOlwiJnN1cDM7XCIsXCLCtFwiOlwiJmFjdXRlO1wiLFwiwrVcIjpcIiZtaWNybztcIixcIsK2XCI6XCImcGFyYTtcIixcIsK3XCI6XCImbWlkZG90O1wiLFwiwrhcIjpcIiZjZWRpbDtcIixcIsK5XCI6XCImc3VwMTtcIixcIsK6XCI6XCImb3JkbTtcIixcIsK7XCI6XCImcmFxdW87XCIsXCLCvFwiOlwiJmZyYWMxNDtcIixcIsK9XCI6XCImZnJhYzEyO1wiLFwiwr5cIjpcIiZmcmFjMzQ7XCIsXCLCv1wiOlwiJmlxdWVzdDtcIixcIsOAXCI6XCImQWdyYXZlO1wiLFwiw4FcIjpcIiZBYWN1dGU7XCIsXCLDglwiOlwiJkFjaXJjO1wiLFwiw4NcIjpcIiZBdGlsZGU7XCIsXCLDhFwiOlwiJkF1bWw7XCIsXCLDhVwiOlwiJkFyaW5nO1wiLFwiw4ZcIjpcIiZBRWxpZztcIixcIsOHXCI6XCImQ2NlZGlsO1wiLFwiw4hcIjpcIiZFZ3JhdmU7XCIsXCLDiVwiOlwiJkVhY3V0ZTtcIixcIsOKXCI6XCImRWNpcmM7XCIsXCLDi1wiOlwiJkV1bWw7XCIsXCLDjFwiOlwiJklncmF2ZTtcIixcIsONXCI6XCImSWFjdXRlO1wiLFwiw45cIjpcIiZJY2lyYztcIixcIsOPXCI6XCImSXVtbDtcIixcIsOQXCI6XCImRVRIO1wiLFwiw5FcIjpcIiZOdGlsZGU7XCIsXCLDklwiOlwiJk9ncmF2ZTtcIixcIsOTXCI6XCImT2FjdXRlO1wiLFwiw5RcIjpcIiZPY2lyYztcIixcIsOVXCI6XCImT3RpbGRlO1wiLFwiw5ZcIjpcIiZPdW1sO1wiLFwiw5dcIjpcIiZ0aW1lcztcIixcIsOYXCI6XCImT3NsYXNoO1wiLFwiw5lcIjpcIiZVZ3JhdmU7XCIsXCLDmlwiOlwiJlVhY3V0ZTtcIixcIsObXCI6XCImVWNpcmM7XCIsXCLDnFwiOlwiJlV1bWw7XCIsXCLDnVwiOlwiJllhY3V0ZTtcIixcIsOeXCI6XCImVEhPUk47XCIsXCLDn1wiOlwiJnN6bGlnO1wiLFwiw6BcIjpcIiZhZ3JhdmU7XCIsXCLDoVwiOlwiJmFhY3V0ZTtcIixcIsOiXCI6XCImYWNpcmM7XCIsXCLDo1wiOlwiJmF0aWxkZTtcIixcIsOkXCI6XCImYXVtbDtcIixcIsOlXCI6XCImYXJpbmc7XCIsXCLDplwiOlwiJmFlbGlnO1wiLFwiw6dcIjpcIiZjY2VkaWw7XCIsXCLDqFwiOlwiJmVncmF2ZTtcIixcIsOpXCI6XCImZWFjdXRlO1wiLFwiw6pcIjpcIiZlY2lyYztcIixcIsOrXCI6XCImZXVtbDtcIixcIsOsXCI6XCImaWdyYXZlO1wiLFwiw61cIjpcIiZpYWN1dGU7XCIsXCLDrlwiOlwiJmljaXJjO1wiLFwiw69cIjpcIiZpdW1sO1wiLFwiw7BcIjpcIiZldGg7XCIsXCLDsVwiOlwiJm50aWxkZTtcIixcIsOyXCI6XCImb2dyYXZlO1wiLFwiw7NcIjpcIiZvYWN1dGU7XCIsXCLDtFwiOlwiJm9jaXJjO1wiLFwiw7VcIjpcIiZvdGlsZGU7XCIsXCLDtlwiOlwiJm91bWw7XCIsXCLDt1wiOlwiJmRpdmlkZTtcIixcIsO4XCI6XCImb3NsYXNoO1wiLFwiw7lcIjpcIiZ1Z3JhdmU7XCIsXCLDulwiOlwiJnVhY3V0ZTtcIixcIsO7XCI6XCImdWNpcmM7XCIsXCLDvFwiOlwiJnV1bWw7XCIsXCLDvVwiOlwiJnlhY3V0ZTtcIixcIsO+XCI6XCImdGhvcm47XCIsXCLDv1wiOlwiJnl1bWw7XCIsJ1wiJzpcIiZxdW90O1wiLFwiJlwiOlwiJmFtcDtcIixcIjxcIjpcIiZsdDtcIixcIj5cIjpcIiZndDtcIixcIsWSXCI6XCImT0VsaWc7XCIsXCLFk1wiOlwiJm9lbGlnO1wiLFwixaBcIjpcIiZTY2Fyb247XCIsXCLFoVwiOlwiJnNjYXJvbjtcIixcIsW4XCI6XCImWXVtbDtcIixcIsuGXCI6XCImY2lyYztcIixcIsucXCI6XCImdGlsZGU7XCIsXCLigIJcIjpcIiZlbnNwO1wiLFwi4oCDXCI6XCImZW1zcDtcIixcIuKAiVwiOlwiJnRoaW5zcDtcIixcIuKAjFwiOlwiJnp3bmo7XCIsXCLigI1cIjpcIiZ6d2o7XCIsXCLigI5cIjpcIiZscm07XCIsXCLigI9cIjpcIiZybG07XCIsXCLigJNcIjpcIiZuZGFzaDtcIixcIuKAlFwiOlwiJm1kYXNoO1wiLFwi4oCYXCI6XCImbHNxdW87XCIsXCLigJlcIjpcIiZyc3F1bztcIixcIuKAmlwiOlwiJnNicXVvO1wiLFwi4oCcXCI6XCImbGRxdW87XCIsXCLigJ1cIjpcIiZyZHF1bztcIixcIuKAnlwiOlwiJmJkcXVvO1wiLFwi4oCgXCI6XCImZGFnZ2VyO1wiLFwi4oChXCI6XCImRGFnZ2VyO1wiLFwi4oCwXCI6XCImcGVybWlsO1wiLFwi4oC5XCI6XCImbHNhcXVvO1wiLFwi4oC6XCI6XCImcnNhcXVvO1wiLFwi4oKsXCI6XCImZXVybztcIixcIsaSXCI6XCImZm5vZjtcIixcIs6RXCI6XCImQWxwaGE7XCIsXCLOklwiOlwiJkJldGE7XCIsXCLOk1wiOlwiJkdhbW1hO1wiLFwizpRcIjpcIiZEZWx0YTtcIixcIs6VXCI6XCImRXBzaWxvbjtcIixcIs6WXCI6XCImWmV0YTtcIixcIs6XXCI6XCImRXRhO1wiLFwizphcIjpcIiZUaGV0YTtcIixcIs6ZXCI6XCImSW90YTtcIixcIs6aXCI6XCImS2FwcGE7XCIsXCLOm1wiOlwiJkxhbWJkYTtcIixcIs6cXCI6XCImTXU7XCIsXCLOnVwiOlwiJk51O1wiLFwizp5cIjpcIiZYaTtcIixcIs6fXCI6XCImT21pY3JvbjtcIixcIs6gXCI6XCImUGk7XCIsXCLOoVwiOlwiJlJobztcIixcIs6jXCI6XCImU2lnbWE7XCIsXCLOpFwiOlwiJlRhdTtcIixcIs6lXCI6XCImVXBzaWxvbjtcIixcIs6mXCI6XCImUGhpO1wiLFwizqdcIjpcIiZDaGk7XCIsXCLOqFwiOlwiJlBzaTtcIixcIs6pXCI6XCImT21lZ2E7XCIsXCLOsVwiOlwiJmFscGhhO1wiLFwizrJcIjpcIiZiZXRhO1wiLFwizrNcIjpcIiZnYW1tYTtcIixcIs60XCI6XCImZGVsdGE7XCIsXCLOtVwiOlwiJmVwc2lsb247XCIsXCLOtlwiOlwiJnpldGE7XCIsXCLOt1wiOlwiJmV0YTtcIixcIs64XCI6XCImdGhldGE7XCIsXCLOuVwiOlwiJmlvdGE7XCIsXCLOulwiOlwiJmthcHBhO1wiLFwizrtcIjpcIiZsYW1iZGE7XCIsXCLOvFwiOlwiJm11O1wiLFwizr1cIjpcIiZudTtcIixcIs6+XCI6XCImeGk7XCIsXCLOv1wiOlwiJm9taWNyb247XCIsXCLPgFwiOlwiJnBpO1wiLFwiz4FcIjpcIiZyaG87XCIsXCLPglwiOlwiJnNpZ21hZjtcIixcIs+DXCI6XCImc2lnbWE7XCIsXCLPhFwiOlwiJnRhdTtcIixcIs+FXCI6XCImdXBzaWxvbjtcIixcIs+GXCI6XCImcGhpO1wiLFwiz4dcIjpcIiZjaGk7XCIsXCLPiFwiOlwiJnBzaTtcIixcIs+JXCI6XCImb21lZ2E7XCIsXCLPkVwiOlwiJnRoZXRhc3ltO1wiLFwiz5JcIjpcIiZ1cHNpaDtcIixcIs+WXCI6XCImcGl2O1wiLFwi4oCiXCI6XCImYnVsbDtcIixcIuKAplwiOlwiJmhlbGxpcDtcIixcIuKAslwiOlwiJnByaW1lO1wiLFwi4oCzXCI6XCImUHJpbWU7XCIsXCLigL5cIjpcIiZvbGluZTtcIixcIuKBhFwiOlwiJmZyYXNsO1wiLFwi4oSYXCI6XCImd2VpZXJwO1wiLFwi4oSRXCI6XCImaW1hZ2U7XCIsXCLihJxcIjpcIiZyZWFsO1wiLFwi4oSiXCI6XCImdHJhZGU7XCIsXCLihLVcIjpcIiZhbGVmc3ltO1wiLFwi4oaQXCI6XCImbGFycjtcIixcIuKGkVwiOlwiJnVhcnI7XCIsXCLihpJcIjpcIiZyYXJyO1wiLFwi4oaTXCI6XCImZGFycjtcIixcIuKGlFwiOlwiJmhhcnI7XCIsXCLihrVcIjpcIiZjcmFycjtcIixcIuKHkFwiOlwiJmxBcnI7XCIsXCLih5FcIjpcIiZ1QXJyO1wiLFwi4oeSXCI6XCImckFycjtcIixcIuKHk1wiOlwiJmRBcnI7XCIsXCLih5RcIjpcIiZoQXJyO1wiLFwi4oiAXCI6XCImZm9yYWxsO1wiLFwi4oiCXCI6XCImcGFydDtcIixcIuKIg1wiOlwiJmV4aXN0O1wiLFwi4oiFXCI6XCImZW1wdHk7XCIsXCLiiIdcIjpcIiZuYWJsYTtcIixcIuKIiFwiOlwiJmlzaW47XCIsXCLiiIlcIjpcIiZub3RpbjtcIixcIuKIi1wiOlwiJm5pO1wiLFwi4oiPXCI6XCImcHJvZDtcIixcIuKIkVwiOlwiJnN1bTtcIixcIuKIklwiOlwiJm1pbnVzO1wiLFwi4oiXXCI6XCImbG93YXN0O1wiLFwi4oiaXCI6XCImcmFkaWM7XCIsXCLiiJ1cIjpcIiZwcm9wO1wiLFwi4oieXCI6XCImaW5maW47XCIsXCLiiKBcIjpcIiZhbmc7XCIsXCLiiKdcIjpcIiZhbmQ7XCIsXCLiiKhcIjpcIiZvcjtcIixcIuKIqVwiOlwiJmNhcDtcIixcIuKIqlwiOlwiJmN1cDtcIixcIuKIq1wiOlwiJmludDtcIixcIuKItFwiOlwiJnRoZXJlNDtcIixcIuKIvFwiOlwiJnNpbTtcIixcIuKJhVwiOlwiJmNvbmc7XCIsXCLiiYhcIjpcIiZhc3ltcDtcIixcIuKJoFwiOlwiJm5lO1wiLFwi4omhXCI6XCImZXF1aXY7XCIsXCLiiaRcIjpcIiZsZTtcIixcIuKJpVwiOlwiJmdlO1wiLFwi4oqCXCI6XCImc3ViO1wiLFwi4oqDXCI6XCImc3VwO1wiLFwi4oqEXCI6XCImbnN1YjtcIixcIuKKhlwiOlwiJnN1YmU7XCIsXCLiiodcIjpcIiZzdXBlO1wiLFwi4oqVXCI6XCImb3BsdXM7XCIsXCLiipdcIjpcIiZvdGltZXM7XCIsXCLiiqVcIjpcIiZwZXJwO1wiLFwi4ouFXCI6XCImc2RvdDtcIixcIuKMiFwiOlwiJmxjZWlsO1wiLFwi4oyJXCI6XCImcmNlaWw7XCIsXCLijIpcIjpcIiZsZmxvb3I7XCIsXCLijItcIjpcIiZyZmxvb3I7XCIsXCLijKlcIjpcIiZsYW5nO1wiLFwi4oyqXCI6XCImcmFuZztcIixcIuKXilwiOlwiJmxvejtcIixcIuKZoFwiOlwiJnNwYWRlcztcIixcIuKZo1wiOlwiJmNsdWJzO1wiLFwi4pmlXCI6XCImaGVhcnRzO1wiLFwi4pmmXCI6XCImZGlhbXM7XCJ9fSxodG1sNTp7ZW50aXRpZXM6e1wiJkFFbGlnXCI6XCLDhlwiLFwiJkFFbGlnO1wiOlwiw4ZcIixcIiZBTVBcIjpcIiZcIixcIiZBTVA7XCI6XCImXCIsXCImQWFjdXRlXCI6XCLDgVwiLFwiJkFhY3V0ZTtcIjpcIsOBXCIsXCImQWJyZXZlO1wiOlwixIJcIixcIiZBY2lyY1wiOlwiw4JcIixcIiZBY2lyYztcIjpcIsOCXCIsXCImQWN5O1wiOlwi0JBcIixcIiZBZnI7XCI6XCLwnZSEXCIsXCImQWdyYXZlXCI6XCLDgFwiLFwiJkFncmF2ZTtcIjpcIsOAXCIsXCImQWxwaGE7XCI6XCLOkVwiLFwiJkFtYWNyO1wiOlwixIBcIixcIiZBbmQ7XCI6XCLiqZNcIixcIiZBb2dvbjtcIjpcIsSEXCIsXCImQW9wZjtcIjpcIvCdlLhcIixcIiZBcHBseUZ1bmN0aW9uO1wiOlwi4oGhXCIsXCImQXJpbmdcIjpcIsOFXCIsXCImQXJpbmc7XCI6XCLDhVwiLFwiJkFzY3I7XCI6XCLwnZKcXCIsXCImQXNzaWduO1wiOlwi4omUXCIsXCImQXRpbGRlXCI6XCLDg1wiLFwiJkF0aWxkZTtcIjpcIsODXCIsXCImQXVtbFwiOlwiw4RcIixcIiZBdW1sO1wiOlwiw4RcIixcIiZCYWNrc2xhc2g7XCI6XCLiiJZcIixcIiZCYXJ2O1wiOlwi4qunXCIsXCImQmFyd2VkO1wiOlwi4oyGXCIsXCImQmN5O1wiOlwi0JFcIixcIiZCZWNhdXNlO1wiOlwi4oi1XCIsXCImQmVybm91bGxpcztcIjpcIuKErFwiLFwiJkJldGE7XCI6XCLOklwiLFwiJkJmcjtcIjpcIvCdlIVcIixcIiZCb3BmO1wiOlwi8J2UuVwiLFwiJkJyZXZlO1wiOlwiy5hcIixcIiZCc2NyO1wiOlwi4oSsXCIsXCImQnVtcGVxO1wiOlwi4omOXCIsXCImQ0hjeTtcIjpcItCnXCIsXCImQ09QWVwiOlwiwqlcIixcIiZDT1BZO1wiOlwiwqlcIixcIiZDYWN1dGU7XCI6XCLEhlwiLFwiJkNhcDtcIjpcIuKLklwiLFwiJkNhcGl0YWxEaWZmZXJlbnRpYWxEO1wiOlwi4oWFXCIsXCImQ2F5bGV5cztcIjpcIuKErVwiLFwiJkNjYXJvbjtcIjpcIsSMXCIsXCImQ2NlZGlsXCI6XCLDh1wiLFwiJkNjZWRpbDtcIjpcIsOHXCIsXCImQ2NpcmM7XCI6XCLEiFwiLFwiJkNjb25pbnQ7XCI6XCLiiLBcIixcIiZDZG90O1wiOlwixIpcIixcIiZDZWRpbGxhO1wiOlwiwrhcIixcIiZDZW50ZXJEb3Q7XCI6XCLCt1wiLFwiJkNmcjtcIjpcIuKErVwiLFwiJkNoaTtcIjpcIs6nXCIsXCImQ2lyY2xlRG90O1wiOlwi4oqZXCIsXCImQ2lyY2xlTWludXM7XCI6XCLiipZcIixcIiZDaXJjbGVQbHVzO1wiOlwi4oqVXCIsXCImQ2lyY2xlVGltZXM7XCI6XCLiipdcIixcIiZDbG9ja3dpc2VDb250b3VySW50ZWdyYWw7XCI6XCLiiLJcIixcIiZDbG9zZUN1cmx5RG91YmxlUXVvdGU7XCI6XCLigJ1cIixcIiZDbG9zZUN1cmx5UXVvdGU7XCI6XCLigJlcIixcIiZDb2xvbjtcIjpcIuKIt1wiLFwiJkNvbG9uZTtcIjpcIuKptFwiLFwiJkNvbmdydWVudDtcIjpcIuKJoVwiLFwiJkNvbmludDtcIjpcIuKIr1wiLFwiJkNvbnRvdXJJbnRlZ3JhbDtcIjpcIuKIrlwiLFwiJkNvcGY7XCI6XCLihIJcIixcIiZDb3Byb2R1Y3Q7XCI6XCLiiJBcIixcIiZDb3VudGVyQ2xvY2t3aXNlQ29udG91ckludGVncmFsO1wiOlwi4oizXCIsXCImQ3Jvc3M7XCI6XCLiqK9cIixcIiZDc2NyO1wiOlwi8J2SnlwiLFwiJkN1cDtcIjpcIuKLk1wiLFwiJkN1cENhcDtcIjpcIuKJjVwiLFwiJkREO1wiOlwi4oWFXCIsXCImRERvdHJhaGQ7XCI6XCLipJFcIixcIiZESmN5O1wiOlwi0IJcIixcIiZEU2N5O1wiOlwi0IVcIixcIiZEWmN5O1wiOlwi0I9cIixcIiZEYWdnZXI7XCI6XCLigKFcIixcIiZEYXJyO1wiOlwi4oahXCIsXCImRGFzaHY7XCI6XCLiq6RcIixcIiZEY2Fyb247XCI6XCLEjlwiLFwiJkRjeTtcIjpcItCUXCIsXCImRGVsO1wiOlwi4oiHXCIsXCImRGVsdGE7XCI6XCLOlFwiLFwiJkRmcjtcIjpcIvCdlIdcIixcIiZEaWFjcml0aWNhbEFjdXRlO1wiOlwiwrRcIixcIiZEaWFjcml0aWNhbERvdDtcIjpcIsuZXCIsXCImRGlhY3JpdGljYWxEb3VibGVBY3V0ZTtcIjpcIsudXCIsXCImRGlhY3JpdGljYWxHcmF2ZTtcIjpcImBcIixcIiZEaWFjcml0aWNhbFRpbGRlO1wiOlwiy5xcIixcIiZEaWFtb25kO1wiOlwi4ouEXCIsXCImRGlmZmVyZW50aWFsRDtcIjpcIuKFhlwiLFwiJkRvcGY7XCI6XCLwnZS7XCIsXCImRG90O1wiOlwiwqhcIixcIiZEb3REb3Q7XCI6XCLig5xcIixcIiZEb3RFcXVhbDtcIjpcIuKJkFwiLFwiJkRvdWJsZUNvbnRvdXJJbnRlZ3JhbDtcIjpcIuKIr1wiLFwiJkRvdWJsZURvdDtcIjpcIsKoXCIsXCImRG91YmxlRG93bkFycm93O1wiOlwi4oeTXCIsXCImRG91YmxlTGVmdEFycm93O1wiOlwi4oeQXCIsXCImRG91YmxlTGVmdFJpZ2h0QXJyb3c7XCI6XCLih5RcIixcIiZEb3VibGVMZWZ0VGVlO1wiOlwi4qukXCIsXCImRG91YmxlTG9uZ0xlZnRBcnJvdztcIjpcIuKfuFwiLFwiJkRvdWJsZUxvbmdMZWZ0UmlnaHRBcnJvdztcIjpcIuKfulwiLFwiJkRvdWJsZUxvbmdSaWdodEFycm93O1wiOlwi4p+5XCIsXCImRG91YmxlUmlnaHRBcnJvdztcIjpcIuKHklwiLFwiJkRvdWJsZVJpZ2h0VGVlO1wiOlwi4oqoXCIsXCImRG91YmxlVXBBcnJvdztcIjpcIuKHkVwiLFwiJkRvdWJsZVVwRG93bkFycm93O1wiOlwi4oeVXCIsXCImRG91YmxlVmVydGljYWxCYXI7XCI6XCLiiKVcIixcIiZEb3duQXJyb3c7XCI6XCLihpNcIixcIiZEb3duQXJyb3dCYXI7XCI6XCLipJNcIixcIiZEb3duQXJyb3dVcEFycm93O1wiOlwi4oe1XCIsXCImRG93bkJyZXZlO1wiOlwizJFcIixcIiZEb3duTGVmdFJpZ2h0VmVjdG9yO1wiOlwi4qWQXCIsXCImRG93bkxlZnRUZWVWZWN0b3I7XCI6XCLipZ5cIixcIiZEb3duTGVmdFZlY3RvcjtcIjpcIuKGvVwiLFwiJkRvd25MZWZ0VmVjdG9yQmFyO1wiOlwi4qWWXCIsXCImRG93blJpZ2h0VGVlVmVjdG9yO1wiOlwi4qWfXCIsXCImRG93blJpZ2h0VmVjdG9yO1wiOlwi4oeBXCIsXCImRG93blJpZ2h0VmVjdG9yQmFyO1wiOlwi4qWXXCIsXCImRG93blRlZTtcIjpcIuKKpFwiLFwiJkRvd25UZWVBcnJvdztcIjpcIuKGp1wiLFwiJkRvd25hcnJvdztcIjpcIuKHk1wiLFwiJkRzY3I7XCI6XCLwnZKfXCIsXCImRHN0cm9rO1wiOlwixJBcIixcIiZFTkc7XCI6XCLFilwiLFwiJkVUSFwiOlwiw5BcIixcIiZFVEg7XCI6XCLDkFwiLFwiJkVhY3V0ZVwiOlwiw4lcIixcIiZFYWN1dGU7XCI6XCLDiVwiLFwiJkVjYXJvbjtcIjpcIsSaXCIsXCImRWNpcmNcIjpcIsOKXCIsXCImRWNpcmM7XCI6XCLDilwiLFwiJkVjeTtcIjpcItCtXCIsXCImRWRvdDtcIjpcIsSWXCIsXCImRWZyO1wiOlwi8J2UiFwiLFwiJkVncmF2ZVwiOlwiw4hcIixcIiZFZ3JhdmU7XCI6XCLDiFwiLFwiJkVsZW1lbnQ7XCI6XCLiiIhcIixcIiZFbWFjcjtcIjpcIsSSXCIsXCImRW1wdHlTbWFsbFNxdWFyZTtcIjpcIuKXu1wiLFwiJkVtcHR5VmVyeVNtYWxsU3F1YXJlO1wiOlwi4parXCIsXCImRW9nb247XCI6XCLEmFwiLFwiJkVvcGY7XCI6XCLwnZS8XCIsXCImRXBzaWxvbjtcIjpcIs6VXCIsXCImRXF1YWw7XCI6XCLiqbVcIixcIiZFcXVhbFRpbGRlO1wiOlwi4omCXCIsXCImRXF1aWxpYnJpdW07XCI6XCLih4xcIixcIiZFc2NyO1wiOlwi4oSwXCIsXCImRXNpbTtcIjpcIuKps1wiLFwiJkV0YTtcIjpcIs6XXCIsXCImRXVtbFwiOlwiw4tcIixcIiZFdW1sO1wiOlwiw4tcIixcIiZFeGlzdHM7XCI6XCLiiINcIixcIiZFeHBvbmVudGlhbEU7XCI6XCLihYdcIixcIiZGY3k7XCI6XCLQpFwiLFwiJkZmcjtcIjpcIvCdlIlcIixcIiZGaWxsZWRTbWFsbFNxdWFyZTtcIjpcIuKXvFwiLFwiJkZpbGxlZFZlcnlTbWFsbFNxdWFyZTtcIjpcIuKWqlwiLFwiJkZvcGY7XCI6XCLwnZS9XCIsXCImRm9yQWxsO1wiOlwi4oiAXCIsXCImRm91cmllcnRyZjtcIjpcIuKEsVwiLFwiJkZzY3I7XCI6XCLihLFcIixcIiZHSmN5O1wiOlwi0INcIixcIiZHVFwiOlwiPlwiLFwiJkdUO1wiOlwiPlwiLFwiJkdhbW1hO1wiOlwizpNcIixcIiZHYW1tYWQ7XCI6XCLPnFwiLFwiJkdicmV2ZTtcIjpcIsSeXCIsXCImR2NlZGlsO1wiOlwixKJcIixcIiZHY2lyYztcIjpcIsScXCIsXCImR2N5O1wiOlwi0JNcIixcIiZHZG90O1wiOlwixKBcIixcIiZHZnI7XCI6XCLwnZSKXCIsXCImR2c7XCI6XCLii5lcIixcIiZHb3BmO1wiOlwi8J2UvlwiLFwiJkdyZWF0ZXJFcXVhbDtcIjpcIuKJpVwiLFwiJkdyZWF0ZXJFcXVhbExlc3M7XCI6XCLii5tcIixcIiZHcmVhdGVyRnVsbEVxdWFsO1wiOlwi4omnXCIsXCImR3JlYXRlckdyZWF0ZXI7XCI6XCLiqqJcIixcIiZHcmVhdGVyTGVzcztcIjpcIuKJt1wiLFwiJkdyZWF0ZXJTbGFudEVxdWFsO1wiOlwi4qm+XCIsXCImR3JlYXRlclRpbGRlO1wiOlwi4omzXCIsXCImR3NjcjtcIjpcIvCdkqJcIixcIiZHdDtcIjpcIuKJq1wiLFwiJkhBUkRjeTtcIjpcItCqXCIsXCImSGFjZWs7XCI6XCLLh1wiLFwiJkhhdDtcIjpcIl5cIixcIiZIY2lyYztcIjpcIsSkXCIsXCImSGZyO1wiOlwi4oSMXCIsXCImSGlsYmVydFNwYWNlO1wiOlwi4oSLXCIsXCImSG9wZjtcIjpcIuKEjVwiLFwiJkhvcml6b250YWxMaW5lO1wiOlwi4pSAXCIsXCImSHNjcjtcIjpcIuKEi1wiLFwiJkhzdHJvaztcIjpcIsSmXCIsXCImSHVtcERvd25IdW1wO1wiOlwi4omOXCIsXCImSHVtcEVxdWFsO1wiOlwi4omPXCIsXCImSUVjeTtcIjpcItCVXCIsXCImSUpsaWc7XCI6XCLEslwiLFwiJklPY3k7XCI6XCLQgVwiLFwiJklhY3V0ZVwiOlwiw41cIixcIiZJYWN1dGU7XCI6XCLDjVwiLFwiJkljaXJjXCI6XCLDjlwiLFwiJkljaXJjO1wiOlwiw45cIixcIiZJY3k7XCI6XCLQmFwiLFwiJklkb3Q7XCI6XCLEsFwiLFwiJklmcjtcIjpcIuKEkVwiLFwiJklncmF2ZVwiOlwiw4xcIixcIiZJZ3JhdmU7XCI6XCLDjFwiLFwiJkltO1wiOlwi4oSRXCIsXCImSW1hY3I7XCI6XCLEqlwiLFwiJkltYWdpbmFyeUk7XCI6XCLihYhcIixcIiZJbXBsaWVzO1wiOlwi4oeSXCIsXCImSW50O1wiOlwi4oisXCIsXCImSW50ZWdyYWw7XCI6XCLiiKtcIixcIiZJbnRlcnNlY3Rpb247XCI6XCLii4JcIixcIiZJbnZpc2libGVDb21tYTtcIjpcIuKBo1wiLFwiJkludmlzaWJsZVRpbWVzO1wiOlwi4oGiXCIsXCImSW9nb247XCI6XCLErlwiLFwiJklvcGY7XCI6XCLwnZWAXCIsXCImSW90YTtcIjpcIs6ZXCIsXCImSXNjcjtcIjpcIuKEkFwiLFwiJkl0aWxkZTtcIjpcIsSoXCIsXCImSXVrY3k7XCI6XCLQhlwiLFwiJkl1bWxcIjpcIsOPXCIsXCImSXVtbDtcIjpcIsOPXCIsXCImSmNpcmM7XCI6XCLEtFwiLFwiJkpjeTtcIjpcItCZXCIsXCImSmZyO1wiOlwi8J2UjVwiLFwiJkpvcGY7XCI6XCLwnZWBXCIsXCImSnNjcjtcIjpcIvCdkqVcIixcIiZKc2VyY3k7XCI6XCLQiFwiLFwiJkp1a2N5O1wiOlwi0IRcIixcIiZLSGN5O1wiOlwi0KVcIixcIiZLSmN5O1wiOlwi0IxcIixcIiZLYXBwYTtcIjpcIs6aXCIsXCImS2NlZGlsO1wiOlwixLZcIixcIiZLY3k7XCI6XCLQmlwiLFwiJktmcjtcIjpcIvCdlI5cIixcIiZLb3BmO1wiOlwi8J2VglwiLFwiJktzY3I7XCI6XCLwnZKmXCIsXCImTEpjeTtcIjpcItCJXCIsXCImTFRcIjpcIjxcIixcIiZMVDtcIjpcIjxcIixcIiZMYWN1dGU7XCI6XCLEuVwiLFwiJkxhbWJkYTtcIjpcIs6bXCIsXCImTGFuZztcIjpcIuKfqlwiLFwiJkxhcGxhY2V0cmY7XCI6XCLihJJcIixcIiZMYXJyO1wiOlwi4oaeXCIsXCImTGNhcm9uO1wiOlwixL1cIixcIiZMY2VkaWw7XCI6XCLEu1wiLFwiJkxjeTtcIjpcItCbXCIsXCImTGVmdEFuZ2xlQnJhY2tldDtcIjpcIuKfqFwiLFwiJkxlZnRBcnJvdztcIjpcIuKGkFwiLFwiJkxlZnRBcnJvd0JhcjtcIjpcIuKHpFwiLFwiJkxlZnRBcnJvd1JpZ2h0QXJyb3c7XCI6XCLih4ZcIixcIiZMZWZ0Q2VpbGluZztcIjpcIuKMiFwiLFwiJkxlZnREb3VibGVCcmFja2V0O1wiOlwi4p+mXCIsXCImTGVmdERvd25UZWVWZWN0b3I7XCI6XCLipaFcIixcIiZMZWZ0RG93blZlY3RvcjtcIjpcIuKHg1wiLFwiJkxlZnREb3duVmVjdG9yQmFyO1wiOlwi4qWZXCIsXCImTGVmdEZsb29yO1wiOlwi4oyKXCIsXCImTGVmdFJpZ2h0QXJyb3c7XCI6XCLihpRcIixcIiZMZWZ0UmlnaHRWZWN0b3I7XCI6XCLipY5cIixcIiZMZWZ0VGVlO1wiOlwi4oqjXCIsXCImTGVmdFRlZUFycm93O1wiOlwi4oakXCIsXCImTGVmdFRlZVZlY3RvcjtcIjpcIuKlmlwiLFwiJkxlZnRUcmlhbmdsZTtcIjpcIuKKslwiLFwiJkxlZnRUcmlhbmdsZUJhcjtcIjpcIuKnj1wiLFwiJkxlZnRUcmlhbmdsZUVxdWFsO1wiOlwi4oq0XCIsXCImTGVmdFVwRG93blZlY3RvcjtcIjpcIuKlkVwiLFwiJkxlZnRVcFRlZVZlY3RvcjtcIjpcIuKloFwiLFwiJkxlZnRVcFZlY3RvcjtcIjpcIuKGv1wiLFwiJkxlZnRVcFZlY3RvckJhcjtcIjpcIuKlmFwiLFwiJkxlZnRWZWN0b3I7XCI6XCLihrxcIixcIiZMZWZ0VmVjdG9yQmFyO1wiOlwi4qWSXCIsXCImTGVmdGFycm93O1wiOlwi4oeQXCIsXCImTGVmdHJpZ2h0YXJyb3c7XCI6XCLih5RcIixcIiZMZXNzRXF1YWxHcmVhdGVyO1wiOlwi4ouaXCIsXCImTGVzc0Z1bGxFcXVhbDtcIjpcIuKJplwiLFwiJkxlc3NHcmVhdGVyO1wiOlwi4om2XCIsXCImTGVzc0xlc3M7XCI6XCLiqqFcIixcIiZMZXNzU2xhbnRFcXVhbDtcIjpcIuKpvVwiLFwiJkxlc3NUaWxkZTtcIjpcIuKJslwiLFwiJkxmcjtcIjpcIvCdlI9cIixcIiZMbDtcIjpcIuKLmFwiLFwiJkxsZWZ0YXJyb3c7XCI6XCLih5pcIixcIiZMbWlkb3Q7XCI6XCLEv1wiLFwiJkxvbmdMZWZ0QXJyb3c7XCI6XCLin7VcIixcIiZMb25nTGVmdFJpZ2h0QXJyb3c7XCI6XCLin7dcIixcIiZMb25nUmlnaHRBcnJvdztcIjpcIuKftlwiLFwiJkxvbmdsZWZ0YXJyb3c7XCI6XCLin7hcIixcIiZMb25nbGVmdHJpZ2h0YXJyb3c7XCI6XCLin7pcIixcIiZMb25ncmlnaHRhcnJvdztcIjpcIuKfuVwiLFwiJkxvcGY7XCI6XCLwnZWDXCIsXCImTG93ZXJMZWZ0QXJyb3c7XCI6XCLihplcIixcIiZMb3dlclJpZ2h0QXJyb3c7XCI6XCLihphcIixcIiZMc2NyO1wiOlwi4oSSXCIsXCImTHNoO1wiOlwi4oawXCIsXCImTHN0cm9rO1wiOlwixYFcIixcIiZMdDtcIjpcIuKJqlwiLFwiJk1hcDtcIjpcIuKkhVwiLFwiJk1jeTtcIjpcItCcXCIsXCImTWVkaXVtU3BhY2U7XCI6XCLigZ9cIixcIiZNZWxsaW50cmY7XCI6XCLihLNcIixcIiZNZnI7XCI6XCLwnZSQXCIsXCImTWludXNQbHVzO1wiOlwi4oiTXCIsXCImTW9wZjtcIjpcIvCdlYRcIixcIiZNc2NyO1wiOlwi4oSzXCIsXCImTXU7XCI6XCLOnFwiLFwiJk5KY3k7XCI6XCLQilwiLFwiJk5hY3V0ZTtcIjpcIsWDXCIsXCImTmNhcm9uO1wiOlwixYdcIixcIiZOY2VkaWw7XCI6XCLFhVwiLFwiJk5jeTtcIjpcItCdXCIsXCImTmVnYXRpdmVNZWRpdW1TcGFjZTtcIjpcIuKAi1wiLFwiJk5lZ2F0aXZlVGhpY2tTcGFjZTtcIjpcIuKAi1wiLFwiJk5lZ2F0aXZlVGhpblNwYWNlO1wiOlwi4oCLXCIsXCImTmVnYXRpdmVWZXJ5VGhpblNwYWNlO1wiOlwi4oCLXCIsXCImTmVzdGVkR3JlYXRlckdyZWF0ZXI7XCI6XCLiiatcIixcIiZOZXN0ZWRMZXNzTGVzcztcIjpcIuKJqlwiLFwiJk5ld0xpbmU7XCI6XCJcXG5cIixcIiZOZnI7XCI6XCLwnZSRXCIsXCImTm9CcmVhaztcIjpcIuKBoFwiLFwiJk5vbkJyZWFraW5nU3BhY2U7XCI6XCLCoFwiLFwiJk5vcGY7XCI6XCLihJVcIixcIiZOb3Q7XCI6XCLiq6xcIixcIiZOb3RDb25ncnVlbnQ7XCI6XCLiiaJcIixcIiZOb3RDdXBDYXA7XCI6XCLiia1cIixcIiZOb3REb3VibGVWZXJ0aWNhbEJhcjtcIjpcIuKIplwiLFwiJk5vdEVsZW1lbnQ7XCI6XCLiiIlcIixcIiZOb3RFcXVhbDtcIjpcIuKJoFwiLFwiJk5vdEVxdWFsVGlsZGU7XCI6XCLiiYLMuFwiLFwiJk5vdEV4aXN0cztcIjpcIuKIhFwiLFwiJk5vdEdyZWF0ZXI7XCI6XCLiia9cIixcIiZOb3RHcmVhdGVyRXF1YWw7XCI6XCLiibFcIixcIiZOb3RHcmVhdGVyRnVsbEVxdWFsO1wiOlwi4omnzLhcIixcIiZOb3RHcmVhdGVyR3JlYXRlcjtcIjpcIuKJq8y4XCIsXCImTm90R3JlYXRlckxlc3M7XCI6XCLiiblcIixcIiZOb3RHcmVhdGVyU2xhbnRFcXVhbDtcIjpcIuKpvsy4XCIsXCImTm90R3JlYXRlclRpbGRlO1wiOlwi4om1XCIsXCImTm90SHVtcERvd25IdW1wO1wiOlwi4omOzLhcIixcIiZOb3RIdW1wRXF1YWw7XCI6XCLiiY/MuFwiLFwiJk5vdExlZnRUcmlhbmdsZTtcIjpcIuKLqlwiLFwiJk5vdExlZnRUcmlhbmdsZUJhcjtcIjpcIuKnj8y4XCIsXCImTm90TGVmdFRyaWFuZ2xlRXF1YWw7XCI6XCLii6xcIixcIiZOb3RMZXNzO1wiOlwi4omuXCIsXCImTm90TGVzc0VxdWFsO1wiOlwi4omwXCIsXCImTm90TGVzc0dyZWF0ZXI7XCI6XCLiibhcIixcIiZOb3RMZXNzTGVzcztcIjpcIuKJqsy4XCIsXCImTm90TGVzc1NsYW50RXF1YWw7XCI6XCLiqb3MuFwiLFwiJk5vdExlc3NUaWxkZTtcIjpcIuKJtFwiLFwiJk5vdE5lc3RlZEdyZWF0ZXJHcmVhdGVyO1wiOlwi4qqizLhcIixcIiZOb3ROZXN0ZWRMZXNzTGVzcztcIjpcIuKqocy4XCIsXCImTm90UHJlY2VkZXM7XCI6XCLiioBcIixcIiZOb3RQcmVjZWRlc0VxdWFsO1wiOlwi4qqvzLhcIixcIiZOb3RQcmVjZWRlc1NsYW50RXF1YWw7XCI6XCLii6BcIixcIiZOb3RSZXZlcnNlRWxlbWVudDtcIjpcIuKIjFwiLFwiJk5vdFJpZ2h0VHJpYW5nbGU7XCI6XCLii6tcIixcIiZOb3RSaWdodFRyaWFuZ2xlQmFyO1wiOlwi4qeQzLhcIixcIiZOb3RSaWdodFRyaWFuZ2xlRXF1YWw7XCI6XCLii61cIixcIiZOb3RTcXVhcmVTdWJzZXQ7XCI6XCLiio/MuFwiLFwiJk5vdFNxdWFyZVN1YnNldEVxdWFsO1wiOlwi4ouiXCIsXCImTm90U3F1YXJlU3VwZXJzZXQ7XCI6XCLiipDMuFwiLFwiJk5vdFNxdWFyZVN1cGVyc2V0RXF1YWw7XCI6XCLii6NcIixcIiZOb3RTdWJzZXQ7XCI6XCLiioLig5JcIixcIiZOb3RTdWJzZXRFcXVhbDtcIjpcIuKKiFwiLFwiJk5vdFN1Y2NlZWRzO1wiOlwi4oqBXCIsXCImTm90U3VjY2VlZHNFcXVhbDtcIjpcIuKqsMy4XCIsXCImTm90U3VjY2VlZHNTbGFudEVxdWFsO1wiOlwi4ouhXCIsXCImTm90U3VjY2VlZHNUaWxkZTtcIjpcIuKJv8y4XCIsXCImTm90U3VwZXJzZXQ7XCI6XCLiioPig5JcIixcIiZOb3RTdXBlcnNldEVxdWFsO1wiOlwi4oqJXCIsXCImTm90VGlsZGU7XCI6XCLiiYFcIixcIiZOb3RUaWxkZUVxdWFsO1wiOlwi4omEXCIsXCImTm90VGlsZGVGdWxsRXF1YWw7XCI6XCLiiYdcIixcIiZOb3RUaWxkZVRpbGRlO1wiOlwi4omJXCIsXCImTm90VmVydGljYWxCYXI7XCI6XCLiiKRcIixcIiZOc2NyO1wiOlwi8J2SqVwiLFwiJk50aWxkZVwiOlwiw5FcIixcIiZOdGlsZGU7XCI6XCLDkVwiLFwiJk51O1wiOlwizp1cIixcIiZPRWxpZztcIjpcIsWSXCIsXCImT2FjdXRlXCI6XCLDk1wiLFwiJk9hY3V0ZTtcIjpcIsOTXCIsXCImT2NpcmNcIjpcIsOUXCIsXCImT2NpcmM7XCI6XCLDlFwiLFwiJk9jeTtcIjpcItCeXCIsXCImT2RibGFjO1wiOlwixZBcIixcIiZPZnI7XCI6XCLwnZSSXCIsXCImT2dyYXZlXCI6XCLDklwiLFwiJk9ncmF2ZTtcIjpcIsOSXCIsXCImT21hY3I7XCI6XCLFjFwiLFwiJk9tZWdhO1wiOlwizqlcIixcIiZPbWljcm9uO1wiOlwizp9cIixcIiZPb3BmO1wiOlwi8J2VhlwiLFwiJk9wZW5DdXJseURvdWJsZVF1b3RlO1wiOlwi4oCcXCIsXCImT3BlbkN1cmx5UXVvdGU7XCI6XCLigJhcIixcIiZPcjtcIjpcIuKplFwiLFwiJk9zY3I7XCI6XCLwnZKqXCIsXCImT3NsYXNoXCI6XCLDmFwiLFwiJk9zbGFzaDtcIjpcIsOYXCIsXCImT3RpbGRlXCI6XCLDlVwiLFwiJk90aWxkZTtcIjpcIsOVXCIsXCImT3RpbWVzO1wiOlwi4qi3XCIsXCImT3VtbFwiOlwiw5ZcIixcIiZPdW1sO1wiOlwiw5ZcIixcIiZPdmVyQmFyO1wiOlwi4oC+XCIsXCImT3ZlckJyYWNlO1wiOlwi4o+eXCIsXCImT3ZlckJyYWNrZXQ7XCI6XCLijrRcIixcIiZPdmVyUGFyZW50aGVzaXM7XCI6XCLij5xcIixcIiZQYXJ0aWFsRDtcIjpcIuKIglwiLFwiJlBjeTtcIjpcItCfXCIsXCImUGZyO1wiOlwi8J2Uk1wiLFwiJlBoaTtcIjpcIs6mXCIsXCImUGk7XCI6XCLOoFwiLFwiJlBsdXNNaW51cztcIjpcIsKxXCIsXCImUG9pbmNhcmVwbGFuZTtcIjpcIuKEjFwiLFwiJlBvcGY7XCI6XCLihJlcIixcIiZQcjtcIjpcIuKqu1wiLFwiJlByZWNlZGVzO1wiOlwi4om6XCIsXCImUHJlY2VkZXNFcXVhbDtcIjpcIuKqr1wiLFwiJlByZWNlZGVzU2xhbnRFcXVhbDtcIjpcIuKJvFwiLFwiJlByZWNlZGVzVGlsZGU7XCI6XCLiib5cIixcIiZQcmltZTtcIjpcIuKAs1wiLFwiJlByb2R1Y3Q7XCI6XCLiiI9cIixcIiZQcm9wb3J0aW9uO1wiOlwi4oi3XCIsXCImUHJvcG9ydGlvbmFsO1wiOlwi4oidXCIsXCImUHNjcjtcIjpcIvCdkqtcIixcIiZQc2k7XCI6XCLOqFwiLFwiJlFVT1RcIjonXCInLFwiJlFVT1Q7XCI6J1wiJyxcIiZRZnI7XCI6XCLwnZSUXCIsXCImUW9wZjtcIjpcIuKEmlwiLFwiJlFzY3I7XCI6XCLwnZKsXCIsXCImUkJhcnI7XCI6XCLipJBcIixcIiZSRUdcIjpcIsKuXCIsXCImUkVHO1wiOlwiwq5cIixcIiZSYWN1dGU7XCI6XCLFlFwiLFwiJlJhbmc7XCI6XCLin6tcIixcIiZSYXJyO1wiOlwi4oagXCIsXCImUmFycnRsO1wiOlwi4qSWXCIsXCImUmNhcm9uO1wiOlwixZhcIixcIiZSY2VkaWw7XCI6XCLFllwiLFwiJlJjeTtcIjpcItCgXCIsXCImUmU7XCI6XCLihJxcIixcIiZSZXZlcnNlRWxlbWVudDtcIjpcIuKIi1wiLFwiJlJldmVyc2VFcXVpbGlicml1bTtcIjpcIuKHi1wiLFwiJlJldmVyc2VVcEVxdWlsaWJyaXVtO1wiOlwi4qWvXCIsXCImUmZyO1wiOlwi4oScXCIsXCImUmhvO1wiOlwizqFcIixcIiZSaWdodEFuZ2xlQnJhY2tldDtcIjpcIuKfqVwiLFwiJlJpZ2h0QXJyb3c7XCI6XCLihpJcIixcIiZSaWdodEFycm93QmFyO1wiOlwi4oelXCIsXCImUmlnaHRBcnJvd0xlZnRBcnJvdztcIjpcIuKHhFwiLFwiJlJpZ2h0Q2VpbGluZztcIjpcIuKMiVwiLFwiJlJpZ2h0RG91YmxlQnJhY2tldDtcIjpcIuKfp1wiLFwiJlJpZ2h0RG93blRlZVZlY3RvcjtcIjpcIuKlnVwiLFwiJlJpZ2h0RG93blZlY3RvcjtcIjpcIuKHglwiLFwiJlJpZ2h0RG93blZlY3RvckJhcjtcIjpcIuKllVwiLFwiJlJpZ2h0Rmxvb3I7XCI6XCLijItcIixcIiZSaWdodFRlZTtcIjpcIuKKolwiLFwiJlJpZ2h0VGVlQXJyb3c7XCI6XCLihqZcIixcIiZSaWdodFRlZVZlY3RvcjtcIjpcIuKlm1wiLFwiJlJpZ2h0VHJpYW5nbGU7XCI6XCLiirNcIixcIiZSaWdodFRyaWFuZ2xlQmFyO1wiOlwi4qeQXCIsXCImUmlnaHRUcmlhbmdsZUVxdWFsO1wiOlwi4oq1XCIsXCImUmlnaHRVcERvd25WZWN0b3I7XCI6XCLipY9cIixcIiZSaWdodFVwVGVlVmVjdG9yO1wiOlwi4qWcXCIsXCImUmlnaHRVcFZlY3RvcjtcIjpcIuKGvlwiLFwiJlJpZ2h0VXBWZWN0b3JCYXI7XCI6XCLipZRcIixcIiZSaWdodFZlY3RvcjtcIjpcIuKHgFwiLFwiJlJpZ2h0VmVjdG9yQmFyO1wiOlwi4qWTXCIsXCImUmlnaHRhcnJvdztcIjpcIuKHklwiLFwiJlJvcGY7XCI6XCLihJ1cIixcIiZSb3VuZEltcGxpZXM7XCI6XCLipbBcIixcIiZScmlnaHRhcnJvdztcIjpcIuKHm1wiLFwiJlJzY3I7XCI6XCLihJtcIixcIiZSc2g7XCI6XCLihrFcIixcIiZSdWxlRGVsYXllZDtcIjpcIuKntFwiLFwiJlNIQ0hjeTtcIjpcItCpXCIsXCImU0hjeTtcIjpcItCoXCIsXCImU09GVGN5O1wiOlwi0KxcIixcIiZTYWN1dGU7XCI6XCLFmlwiLFwiJlNjO1wiOlwi4qq8XCIsXCImU2Nhcm9uO1wiOlwixaBcIixcIiZTY2VkaWw7XCI6XCLFnlwiLFwiJlNjaXJjO1wiOlwixZxcIixcIiZTY3k7XCI6XCLQoVwiLFwiJlNmcjtcIjpcIvCdlJZcIixcIiZTaG9ydERvd25BcnJvdztcIjpcIuKGk1wiLFwiJlNob3J0TGVmdEFycm93O1wiOlwi4oaQXCIsXCImU2hvcnRSaWdodEFycm93O1wiOlwi4oaSXCIsXCImU2hvcnRVcEFycm93O1wiOlwi4oaRXCIsXCImU2lnbWE7XCI6XCLOo1wiLFwiJlNtYWxsQ2lyY2xlO1wiOlwi4oiYXCIsXCImU29wZjtcIjpcIvCdlYpcIixcIiZTcXJ0O1wiOlwi4oiaXCIsXCImU3F1YXJlO1wiOlwi4pahXCIsXCImU3F1YXJlSW50ZXJzZWN0aW9uO1wiOlwi4oqTXCIsXCImU3F1YXJlU3Vic2V0O1wiOlwi4oqPXCIsXCImU3F1YXJlU3Vic2V0RXF1YWw7XCI6XCLiipFcIixcIiZTcXVhcmVTdXBlcnNldDtcIjpcIuKKkFwiLFwiJlNxdWFyZVN1cGVyc2V0RXF1YWw7XCI6XCLiipJcIixcIiZTcXVhcmVVbmlvbjtcIjpcIuKKlFwiLFwiJlNzY3I7XCI6XCLwnZKuXCIsXCImU3RhcjtcIjpcIuKLhlwiLFwiJlN1YjtcIjpcIuKLkFwiLFwiJlN1YnNldDtcIjpcIuKLkFwiLFwiJlN1YnNldEVxdWFsO1wiOlwi4oqGXCIsXCImU3VjY2VlZHM7XCI6XCLiibtcIixcIiZTdWNjZWVkc0VxdWFsO1wiOlwi4qqwXCIsXCImU3VjY2VlZHNTbGFudEVxdWFsO1wiOlwi4om9XCIsXCImU3VjY2VlZHNUaWxkZTtcIjpcIuKJv1wiLFwiJlN1Y2hUaGF0O1wiOlwi4oiLXCIsXCImU3VtO1wiOlwi4oiRXCIsXCImU3VwO1wiOlwi4ouRXCIsXCImU3VwZXJzZXQ7XCI6XCLiioNcIixcIiZTdXBlcnNldEVxdWFsO1wiOlwi4oqHXCIsXCImU3Vwc2V0O1wiOlwi4ouRXCIsXCImVEhPUk5cIjpcIsOeXCIsXCImVEhPUk47XCI6XCLDnlwiLFwiJlRSQURFO1wiOlwi4oSiXCIsXCImVFNIY3k7XCI6XCLQi1wiLFwiJlRTY3k7XCI6XCLQplwiLFwiJlRhYjtcIjpcIlxcdFwiLFwiJlRhdTtcIjpcIs6kXCIsXCImVGNhcm9uO1wiOlwixaRcIixcIiZUY2VkaWw7XCI6XCLFolwiLFwiJlRjeTtcIjpcItCiXCIsXCImVGZyO1wiOlwi8J2Ul1wiLFwiJlRoZXJlZm9yZTtcIjpcIuKItFwiLFwiJlRoZXRhO1wiOlwizphcIixcIiZUaGlja1NwYWNlO1wiOlwi4oGf4oCKXCIsXCImVGhpblNwYWNlO1wiOlwi4oCJXCIsXCImVGlsZGU7XCI6XCLiiLxcIixcIiZUaWxkZUVxdWFsO1wiOlwi4omDXCIsXCImVGlsZGVGdWxsRXF1YWw7XCI6XCLiiYVcIixcIiZUaWxkZVRpbGRlO1wiOlwi4omIXCIsXCImVG9wZjtcIjpcIvCdlYtcIixcIiZUcmlwbGVEb3Q7XCI6XCLig5tcIixcIiZUc2NyO1wiOlwi8J2Sr1wiLFwiJlRzdHJvaztcIjpcIsWmXCIsXCImVWFjdXRlXCI6XCLDmlwiLFwiJlVhY3V0ZTtcIjpcIsOaXCIsXCImVWFycjtcIjpcIuKGn1wiLFwiJlVhcnJvY2lyO1wiOlwi4qWJXCIsXCImVWJyY3k7XCI6XCLQjlwiLFwiJlVicmV2ZTtcIjpcIsWsXCIsXCImVWNpcmNcIjpcIsObXCIsXCImVWNpcmM7XCI6XCLDm1wiLFwiJlVjeTtcIjpcItCjXCIsXCImVWRibGFjO1wiOlwixbBcIixcIiZVZnI7XCI6XCLwnZSYXCIsXCImVWdyYXZlXCI6XCLDmVwiLFwiJlVncmF2ZTtcIjpcIsOZXCIsXCImVW1hY3I7XCI6XCLFqlwiLFwiJlVuZGVyQmFyO1wiOlwiX1wiLFwiJlVuZGVyQnJhY2U7XCI6XCLij59cIixcIiZVbmRlckJyYWNrZXQ7XCI6XCLijrVcIixcIiZVbmRlclBhcmVudGhlc2lzO1wiOlwi4o+dXCIsXCImVW5pb247XCI6XCLii4NcIixcIiZVbmlvblBsdXM7XCI6XCLiio5cIixcIiZVb2dvbjtcIjpcIsWyXCIsXCImVW9wZjtcIjpcIvCdlYxcIixcIiZVcEFycm93O1wiOlwi4oaRXCIsXCImVXBBcnJvd0JhcjtcIjpcIuKkklwiLFwiJlVwQXJyb3dEb3duQXJyb3c7XCI6XCLih4VcIixcIiZVcERvd25BcnJvdztcIjpcIuKGlVwiLFwiJlVwRXF1aWxpYnJpdW07XCI6XCLipa5cIixcIiZVcFRlZTtcIjpcIuKKpVwiLFwiJlVwVGVlQXJyb3c7XCI6XCLihqVcIixcIiZVcGFycm93O1wiOlwi4oeRXCIsXCImVXBkb3duYXJyb3c7XCI6XCLih5VcIixcIiZVcHBlckxlZnRBcnJvdztcIjpcIuKGllwiLFwiJlVwcGVyUmlnaHRBcnJvdztcIjpcIuKGl1wiLFwiJlVwc2k7XCI6XCLPklwiLFwiJlVwc2lsb247XCI6XCLOpVwiLFwiJlVyaW5nO1wiOlwixa5cIixcIiZVc2NyO1wiOlwi8J2SsFwiLFwiJlV0aWxkZTtcIjpcIsWoXCIsXCImVXVtbFwiOlwiw5xcIixcIiZVdW1sO1wiOlwiw5xcIixcIiZWRGFzaDtcIjpcIuKKq1wiLFwiJlZiYXI7XCI6XCLiq6tcIixcIiZWY3k7XCI6XCLQklwiLFwiJlZkYXNoO1wiOlwi4oqpXCIsXCImVmRhc2hsO1wiOlwi4qumXCIsXCImVmVlO1wiOlwi4ouBXCIsXCImVmVyYmFyO1wiOlwi4oCWXCIsXCImVmVydDtcIjpcIuKAllwiLFwiJlZlcnRpY2FsQmFyO1wiOlwi4oijXCIsXCImVmVydGljYWxMaW5lO1wiOlwifFwiLFwiJlZlcnRpY2FsU2VwYXJhdG9yO1wiOlwi4p2YXCIsXCImVmVydGljYWxUaWxkZTtcIjpcIuKJgFwiLFwiJlZlcnlUaGluU3BhY2U7XCI6XCLigIpcIixcIiZWZnI7XCI6XCLwnZSZXCIsXCImVm9wZjtcIjpcIvCdlY1cIixcIiZWc2NyO1wiOlwi8J2SsVwiLFwiJlZ2ZGFzaDtcIjpcIuKKqlwiLFwiJldjaXJjO1wiOlwixbRcIixcIiZXZWRnZTtcIjpcIuKLgFwiLFwiJldmcjtcIjpcIvCdlJpcIixcIiZXb3BmO1wiOlwi8J2VjlwiLFwiJldzY3I7XCI6XCLwnZKyXCIsXCImWGZyO1wiOlwi8J2Um1wiLFwiJlhpO1wiOlwizp5cIixcIiZYb3BmO1wiOlwi8J2Vj1wiLFwiJlhzY3I7XCI6XCLwnZKzXCIsXCImWUFjeTtcIjpcItCvXCIsXCImWUljeTtcIjpcItCHXCIsXCImWVVjeTtcIjpcItCuXCIsXCImWWFjdXRlXCI6XCLDnVwiLFwiJllhY3V0ZTtcIjpcIsOdXCIsXCImWWNpcmM7XCI6XCLFtlwiLFwiJlljeTtcIjpcItCrXCIsXCImWWZyO1wiOlwi8J2UnFwiLFwiJllvcGY7XCI6XCLwnZWQXCIsXCImWXNjcjtcIjpcIvCdkrRcIixcIiZZdW1sO1wiOlwixbhcIixcIiZaSGN5O1wiOlwi0JZcIixcIiZaYWN1dGU7XCI6XCLFuVwiLFwiJlpjYXJvbjtcIjpcIsW9XCIsXCImWmN5O1wiOlwi0JdcIixcIiZaZG90O1wiOlwixbtcIixcIiZaZXJvV2lkdGhTcGFjZTtcIjpcIuKAi1wiLFwiJlpldGE7XCI6XCLOllwiLFwiJlpmcjtcIjpcIuKEqFwiLFwiJlpvcGY7XCI6XCLihKRcIixcIiZac2NyO1wiOlwi8J2StVwiLFwiJmFhY3V0ZVwiOlwiw6FcIixcIiZhYWN1dGU7XCI6XCLDoVwiLFwiJmFicmV2ZTtcIjpcIsSDXCIsXCImYWM7XCI6XCLiiL5cIixcIiZhY0U7XCI6XCLiiL7Ms1wiLFwiJmFjZDtcIjpcIuKIv1wiLFwiJmFjaXJjXCI6XCLDolwiLFwiJmFjaXJjO1wiOlwiw6JcIixcIiZhY3V0ZVwiOlwiwrRcIixcIiZhY3V0ZTtcIjpcIsK0XCIsXCImYWN5O1wiOlwi0LBcIixcIiZhZWxpZ1wiOlwiw6ZcIixcIiZhZWxpZztcIjpcIsOmXCIsXCImYWY7XCI6XCLigaFcIixcIiZhZnI7XCI6XCLwnZSeXCIsXCImYWdyYXZlXCI6XCLDoFwiLFwiJmFncmF2ZTtcIjpcIsOgXCIsXCImYWxlZnN5bTtcIjpcIuKEtVwiLFwiJmFsZXBoO1wiOlwi4oS1XCIsXCImYWxwaGE7XCI6XCLOsVwiLFwiJmFtYWNyO1wiOlwixIFcIixcIiZhbWFsZztcIjpcIuKov1wiLFwiJmFtcFwiOlwiJlwiLFwiJmFtcDtcIjpcIiZcIixcIiZhbmQ7XCI6XCLiiKdcIixcIiZhbmRhbmQ7XCI6XCLiqZVcIixcIiZhbmRkO1wiOlwi4qmcXCIsXCImYW5kc2xvcGU7XCI6XCLiqZhcIixcIiZhbmR2O1wiOlwi4qmaXCIsXCImYW5nO1wiOlwi4oigXCIsXCImYW5nZTtcIjpcIuKmpFwiLFwiJmFuZ2xlO1wiOlwi4oigXCIsXCImYW5nbXNkO1wiOlwi4oihXCIsXCImYW5nbXNkYWE7XCI6XCLipqhcIixcIiZhbmdtc2RhYjtcIjpcIuKmqVwiLFwiJmFuZ21zZGFjO1wiOlwi4qaqXCIsXCImYW5nbXNkYWQ7XCI6XCLipqtcIixcIiZhbmdtc2RhZTtcIjpcIuKmrFwiLFwiJmFuZ21zZGFmO1wiOlwi4qatXCIsXCImYW5nbXNkYWc7XCI6XCLipq5cIixcIiZhbmdtc2RhaDtcIjpcIuKmr1wiLFwiJmFuZ3J0O1wiOlwi4oifXCIsXCImYW5ncnR2YjtcIjpcIuKKvlwiLFwiJmFuZ3J0dmJkO1wiOlwi4qadXCIsXCImYW5nc3BoO1wiOlwi4oiiXCIsXCImYW5nc3Q7XCI6XCLDhVwiLFwiJmFuZ3phcnI7XCI6XCLijbxcIixcIiZhb2dvbjtcIjpcIsSFXCIsXCImYW9wZjtcIjpcIvCdlZJcIixcIiZhcDtcIjpcIuKJiFwiLFwiJmFwRTtcIjpcIuKpsFwiLFwiJmFwYWNpcjtcIjpcIuKpr1wiLFwiJmFwZTtcIjpcIuKJilwiLFwiJmFwaWQ7XCI6XCLiiYtcIixcIiZhcG9zO1wiOlwiJ1wiLFwiJmFwcHJveDtcIjpcIuKJiFwiLFwiJmFwcHJveGVxO1wiOlwi4omKXCIsXCImYXJpbmdcIjpcIsOlXCIsXCImYXJpbmc7XCI6XCLDpVwiLFwiJmFzY3I7XCI6XCLwnZK2XCIsXCImYXN0O1wiOlwiKlwiLFwiJmFzeW1wO1wiOlwi4omIXCIsXCImYXN5bXBlcTtcIjpcIuKJjVwiLFwiJmF0aWxkZVwiOlwiw6NcIixcIiZhdGlsZGU7XCI6XCLDo1wiLFwiJmF1bWxcIjpcIsOkXCIsXCImYXVtbDtcIjpcIsOkXCIsXCImYXdjb25pbnQ7XCI6XCLiiLNcIixcIiZhd2ludDtcIjpcIuKokVwiLFwiJmJOb3Q7XCI6XCLiq61cIixcIiZiYWNrY29uZztcIjpcIuKJjFwiLFwiJmJhY2tlcHNpbG9uO1wiOlwiz7ZcIixcIiZiYWNrcHJpbWU7XCI6XCLigLVcIixcIiZiYWNrc2ltO1wiOlwi4oi9XCIsXCImYmFja3NpbWVxO1wiOlwi4ouNXCIsXCImYmFydmVlO1wiOlwi4oq9XCIsXCImYmFyd2VkO1wiOlwi4oyFXCIsXCImYmFyd2VkZ2U7XCI6XCLijIVcIixcIiZiYnJrO1wiOlwi4o61XCIsXCImYmJya3Ricms7XCI6XCLijrZcIixcIiZiY29uZztcIjpcIuKJjFwiLFwiJmJjeTtcIjpcItCxXCIsXCImYmRxdW87XCI6XCLigJ5cIixcIiZiZWNhdXM7XCI6XCLiiLVcIixcIiZiZWNhdXNlO1wiOlwi4oi1XCIsXCImYmVtcHR5djtcIjpcIuKmsFwiLFwiJmJlcHNpO1wiOlwiz7ZcIixcIiZiZXJub3U7XCI6XCLihKxcIixcIiZiZXRhO1wiOlwizrJcIixcIiZiZXRoO1wiOlwi4oS2XCIsXCImYmV0d2VlbjtcIjpcIuKJrFwiLFwiJmJmcjtcIjpcIvCdlJ9cIixcIiZiaWdjYXA7XCI6XCLii4JcIixcIiZiaWdjaXJjO1wiOlwi4pevXCIsXCImYmlnY3VwO1wiOlwi4ouDXCIsXCImYmlnb2RvdDtcIjpcIuKogFwiLFwiJmJpZ29wbHVzO1wiOlwi4qiBXCIsXCImYmlnb3RpbWVzO1wiOlwi4qiCXCIsXCImYmlnc3FjdXA7XCI6XCLiqIZcIixcIiZiaWdzdGFyO1wiOlwi4piFXCIsXCImYmlndHJpYW5nbGVkb3duO1wiOlwi4pa9XCIsXCImYmlndHJpYW5nbGV1cDtcIjpcIuKWs1wiLFwiJmJpZ3VwbHVzO1wiOlwi4qiEXCIsXCImYmlndmVlO1wiOlwi4ouBXCIsXCImYmlnd2VkZ2U7XCI6XCLii4BcIixcIiZia2Fyb3c7XCI6XCLipI1cIixcIiZibGFja2xvemVuZ2U7XCI6XCLip6tcIixcIiZibGFja3NxdWFyZTtcIjpcIuKWqlwiLFwiJmJsYWNrdHJpYW5nbGU7XCI6XCLilrRcIixcIiZibGFja3RyaWFuZ2xlZG93bjtcIjpcIuKWvlwiLFwiJmJsYWNrdHJpYW5nbGVsZWZ0O1wiOlwi4peCXCIsXCImYmxhY2t0cmlhbmdsZXJpZ2h0O1wiOlwi4pa4XCIsXCImYmxhbms7XCI6XCLikKNcIixcIiZibGsxMjtcIjpcIuKWklwiLFwiJmJsazE0O1wiOlwi4paRXCIsXCImYmxrMzQ7XCI6XCLilpNcIixcIiZibG9jaztcIjpcIuKWiFwiLFwiJmJuZTtcIjpcIj3ig6VcIixcIiZibmVxdWl2O1wiOlwi4omh4oOlXCIsXCImYm5vdDtcIjpcIuKMkFwiLFwiJmJvcGY7XCI6XCLwnZWTXCIsXCImYm90O1wiOlwi4oqlXCIsXCImYm90dG9tO1wiOlwi4oqlXCIsXCImYm93dGllO1wiOlwi4ouIXCIsXCImYm94REw7XCI6XCLilZdcIixcIiZib3hEUjtcIjpcIuKVlFwiLFwiJmJveERsO1wiOlwi4pWWXCIsXCImYm94RHI7XCI6XCLilZNcIixcIiZib3hIO1wiOlwi4pWQXCIsXCImYm94SEQ7XCI6XCLilaZcIixcIiZib3hIVTtcIjpcIuKVqVwiLFwiJmJveEhkO1wiOlwi4pWkXCIsXCImYm94SHU7XCI6XCLiladcIixcIiZib3hVTDtcIjpcIuKVnVwiLFwiJmJveFVSO1wiOlwi4pWaXCIsXCImYm94VWw7XCI6XCLilZxcIixcIiZib3hVcjtcIjpcIuKVmVwiLFwiJmJveFY7XCI6XCLilZFcIixcIiZib3hWSDtcIjpcIuKVrFwiLFwiJmJveFZMO1wiOlwi4pWjXCIsXCImYm94VlI7XCI6XCLilaBcIixcIiZib3hWaDtcIjpcIuKVq1wiLFwiJmJveFZsO1wiOlwi4pWiXCIsXCImYm94VnI7XCI6XCLilZ9cIixcIiZib3hib3g7XCI6XCLip4lcIixcIiZib3hkTDtcIjpcIuKVlVwiLFwiJmJveGRSO1wiOlwi4pWSXCIsXCImYm94ZGw7XCI6XCLilJBcIixcIiZib3hkcjtcIjpcIuKUjFwiLFwiJmJveGg7XCI6XCLilIBcIixcIiZib3hoRDtcIjpcIuKVpVwiLFwiJmJveGhVO1wiOlwi4pWoXCIsXCImYm94aGQ7XCI6XCLilKxcIixcIiZib3hodTtcIjpcIuKUtFwiLFwiJmJveG1pbnVzO1wiOlwi4oqfXCIsXCImYm94cGx1cztcIjpcIuKKnlwiLFwiJmJveHRpbWVzO1wiOlwi4oqgXCIsXCImYm94dUw7XCI6XCLilZtcIixcIiZib3h1UjtcIjpcIuKVmFwiLFwiJmJveHVsO1wiOlwi4pSYXCIsXCImYm94dXI7XCI6XCLilJRcIixcIiZib3h2O1wiOlwi4pSCXCIsXCImYm94dkg7XCI6XCLilapcIixcIiZib3h2TDtcIjpcIuKVoVwiLFwiJmJveHZSO1wiOlwi4pWeXCIsXCImYm94dmg7XCI6XCLilLxcIixcIiZib3h2bDtcIjpcIuKUpFwiLFwiJmJveHZyO1wiOlwi4pScXCIsXCImYnByaW1lO1wiOlwi4oC1XCIsXCImYnJldmU7XCI6XCLLmFwiLFwiJmJydmJhclwiOlwiwqZcIixcIiZicnZiYXI7XCI6XCLCplwiLFwiJmJzY3I7XCI6XCLwnZK3XCIsXCImYnNlbWk7XCI6XCLigY9cIixcIiZic2ltO1wiOlwi4oi9XCIsXCImYnNpbWU7XCI6XCLii41cIixcIiZic29sO1wiOlwiXFxcXFwiLFwiJmJzb2xiO1wiOlwi4qeFXCIsXCImYnNvbGhzdWI7XCI6XCLin4hcIixcIiZidWxsO1wiOlwi4oCiXCIsXCImYnVsbGV0O1wiOlwi4oCiXCIsXCImYnVtcDtcIjpcIuKJjlwiLFwiJmJ1bXBFO1wiOlwi4qquXCIsXCImYnVtcGU7XCI6XCLiiY9cIixcIiZidW1wZXE7XCI6XCLiiY9cIixcIiZjYWN1dGU7XCI6XCLEh1wiLFwiJmNhcDtcIjpcIuKIqVwiLFwiJmNhcGFuZDtcIjpcIuKphFwiLFwiJmNhcGJyY3VwO1wiOlwi4qmJXCIsXCImY2FwY2FwO1wiOlwi4qmLXCIsXCImY2FwY3VwO1wiOlwi4qmHXCIsXCImY2FwZG90O1wiOlwi4qmAXCIsXCImY2FwcztcIjpcIuKIqe+4gFwiLFwiJmNhcmV0O1wiOlwi4oGBXCIsXCImY2Fyb247XCI6XCLLh1wiLFwiJmNjYXBzO1wiOlwi4qmNXCIsXCImY2Nhcm9uO1wiOlwixI1cIixcIiZjY2VkaWxcIjpcIsOnXCIsXCImY2NlZGlsO1wiOlwiw6dcIixcIiZjY2lyYztcIjpcIsSJXCIsXCImY2N1cHM7XCI6XCLiqYxcIixcIiZjY3Vwc3NtO1wiOlwi4qmQXCIsXCImY2RvdDtcIjpcIsSLXCIsXCImY2VkaWxcIjpcIsK4XCIsXCImY2VkaWw7XCI6XCLCuFwiLFwiJmNlbXB0eXY7XCI6XCLiprJcIixcIiZjZW50XCI6XCLColwiLFwiJmNlbnQ7XCI6XCLColwiLFwiJmNlbnRlcmRvdDtcIjpcIsK3XCIsXCImY2ZyO1wiOlwi8J2UoFwiLFwiJmNoY3k7XCI6XCLRh1wiLFwiJmNoZWNrO1wiOlwi4pyTXCIsXCImY2hlY2ttYXJrO1wiOlwi4pyTXCIsXCImY2hpO1wiOlwiz4dcIixcIiZjaXI7XCI6XCLil4tcIixcIiZjaXJFO1wiOlwi4qeDXCIsXCImY2lyYztcIjpcIsuGXCIsXCImY2lyY2VxO1wiOlwi4omXXCIsXCImY2lyY2xlYXJyb3dsZWZ0O1wiOlwi4oa6XCIsXCImY2lyY2xlYXJyb3dyaWdodDtcIjpcIuKGu1wiLFwiJmNpcmNsZWRSO1wiOlwiwq5cIixcIiZjaXJjbGVkUztcIjpcIuKTiFwiLFwiJmNpcmNsZWRhc3Q7XCI6XCLiiptcIixcIiZjaXJjbGVkY2lyYztcIjpcIuKKmlwiLFwiJmNpcmNsZWRkYXNoO1wiOlwi4oqdXCIsXCImY2lyZTtcIjpcIuKJl1wiLFwiJmNpcmZuaW50O1wiOlwi4qiQXCIsXCImY2lybWlkO1wiOlwi4quvXCIsXCImY2lyc2NpcjtcIjpcIuKnglwiLFwiJmNsdWJzO1wiOlwi4pmjXCIsXCImY2x1YnN1aXQ7XCI6XCLimaNcIixcIiZjb2xvbjtcIjpcIjpcIixcIiZjb2xvbmU7XCI6XCLiiZRcIixcIiZjb2xvbmVxO1wiOlwi4omUXCIsXCImY29tbWE7XCI6XCIsXCIsXCImY29tbWF0O1wiOlwiQFwiLFwiJmNvbXA7XCI6XCLiiIFcIixcIiZjb21wZm47XCI6XCLiiJhcIixcIiZjb21wbGVtZW50O1wiOlwi4oiBXCIsXCImY29tcGxleGVzO1wiOlwi4oSCXCIsXCImY29uZztcIjpcIuKJhVwiLFwiJmNvbmdkb3Q7XCI6XCLiqa1cIixcIiZjb25pbnQ7XCI6XCLiiK5cIixcIiZjb3BmO1wiOlwi8J2VlFwiLFwiJmNvcHJvZDtcIjpcIuKIkFwiLFwiJmNvcHlcIjpcIsKpXCIsXCImY29weTtcIjpcIsKpXCIsXCImY29weXNyO1wiOlwi4oSXXCIsXCImY3JhcnI7XCI6XCLihrVcIixcIiZjcm9zcztcIjpcIuKcl1wiLFwiJmNzY3I7XCI6XCLwnZK4XCIsXCImY3N1YjtcIjpcIuKrj1wiLFwiJmNzdWJlO1wiOlwi4quRXCIsXCImY3N1cDtcIjpcIuKrkFwiLFwiJmNzdXBlO1wiOlwi4quSXCIsXCImY3Rkb3Q7XCI6XCLii69cIixcIiZjdWRhcnJsO1wiOlwi4qS4XCIsXCImY3VkYXJycjtcIjpcIuKktVwiLFwiJmN1ZXByO1wiOlwi4oueXCIsXCImY3Vlc2M7XCI6XCLii59cIixcIiZjdWxhcnI7XCI6XCLihrZcIixcIiZjdWxhcnJwO1wiOlwi4qS9XCIsXCImY3VwO1wiOlwi4oiqXCIsXCImY3VwYnJjYXA7XCI6XCLiqYhcIixcIiZjdXBjYXA7XCI6XCLiqYZcIixcIiZjdXBjdXA7XCI6XCLiqYpcIixcIiZjdXBkb3Q7XCI6XCLiio1cIixcIiZjdXBvcjtcIjpcIuKphVwiLFwiJmN1cHM7XCI6XCLiiKrvuIBcIixcIiZjdXJhcnI7XCI6XCLihrdcIixcIiZjdXJhcnJtO1wiOlwi4qS8XCIsXCImY3VybHllcXByZWM7XCI6XCLii55cIixcIiZjdXJseWVxc3VjYztcIjpcIuKLn1wiLFwiJmN1cmx5dmVlO1wiOlwi4ouOXCIsXCImY3VybHl3ZWRnZTtcIjpcIuKLj1wiLFwiJmN1cnJlblwiOlwiwqRcIixcIiZjdXJyZW47XCI6XCLCpFwiLFwiJmN1cnZlYXJyb3dsZWZ0O1wiOlwi4oa2XCIsXCImY3VydmVhcnJvd3JpZ2h0O1wiOlwi4oa3XCIsXCImY3V2ZWU7XCI6XCLii45cIixcIiZjdXdlZDtcIjpcIuKLj1wiLFwiJmN3Y29uaW50O1wiOlwi4oiyXCIsXCImY3dpbnQ7XCI6XCLiiLFcIixcIiZjeWxjdHk7XCI6XCLijK1cIixcIiZkQXJyO1wiOlwi4oeTXCIsXCImZEhhcjtcIjpcIuKlpVwiLFwiJmRhZ2dlcjtcIjpcIuKAoFwiLFwiJmRhbGV0aDtcIjpcIuKEuFwiLFwiJmRhcnI7XCI6XCLihpNcIixcIiZkYXNoO1wiOlwi4oCQXCIsXCImZGFzaHY7XCI6XCLiiqNcIixcIiZkYmthcm93O1wiOlwi4qSPXCIsXCImZGJsYWM7XCI6XCLLnVwiLFwiJmRjYXJvbjtcIjpcIsSPXCIsXCImZGN5O1wiOlwi0LRcIixcIiZkZDtcIjpcIuKFhlwiLFwiJmRkYWdnZXI7XCI6XCLigKFcIixcIiZkZGFycjtcIjpcIuKHilwiLFwiJmRkb3RzZXE7XCI6XCLiqbdcIixcIiZkZWdcIjpcIsKwXCIsXCImZGVnO1wiOlwiwrBcIixcIiZkZWx0YTtcIjpcIs60XCIsXCImZGVtcHR5djtcIjpcIuKmsVwiLFwiJmRmaXNodDtcIjpcIuKlv1wiLFwiJmRmcjtcIjpcIvCdlKFcIixcIiZkaGFybDtcIjpcIuKHg1wiLFwiJmRoYXJyO1wiOlwi4oeCXCIsXCImZGlhbTtcIjpcIuKLhFwiLFwiJmRpYW1vbmQ7XCI6XCLii4RcIixcIiZkaWFtb25kc3VpdDtcIjpcIuKZplwiLFwiJmRpYW1zO1wiOlwi4pmmXCIsXCImZGllO1wiOlwiwqhcIixcIiZkaWdhbW1hO1wiOlwiz51cIixcIiZkaXNpbjtcIjpcIuKLslwiLFwiJmRpdjtcIjpcIsO3XCIsXCImZGl2aWRlXCI6XCLDt1wiLFwiJmRpdmlkZTtcIjpcIsO3XCIsXCImZGl2aWRlb250aW1lcztcIjpcIuKLh1wiLFwiJmRpdm9ueDtcIjpcIuKLh1wiLFwiJmRqY3k7XCI6XCLRklwiLFwiJmRsY29ybjtcIjpcIuKMnlwiLFwiJmRsY3JvcDtcIjpcIuKMjVwiLFwiJmRvbGxhcjtcIjpcIiRcIixcIiZkb3BmO1wiOlwi8J2VlVwiLFwiJmRvdDtcIjpcIsuZXCIsXCImZG90ZXE7XCI6XCLiiZBcIixcIiZkb3RlcWRvdDtcIjpcIuKJkVwiLFwiJmRvdG1pbnVzO1wiOlwi4oi4XCIsXCImZG90cGx1cztcIjpcIuKIlFwiLFwiJmRvdHNxdWFyZTtcIjpcIuKKoVwiLFwiJmRvdWJsZWJhcndlZGdlO1wiOlwi4oyGXCIsXCImZG93bmFycm93O1wiOlwi4oaTXCIsXCImZG93bmRvd25hcnJvd3M7XCI6XCLih4pcIixcIiZkb3duaGFycG9vbmxlZnQ7XCI6XCLih4NcIixcIiZkb3duaGFycG9vbnJpZ2h0O1wiOlwi4oeCXCIsXCImZHJia2Fyb3c7XCI6XCLipJBcIixcIiZkcmNvcm47XCI6XCLijJ9cIixcIiZkcmNyb3A7XCI6XCLijIxcIixcIiZkc2NyO1wiOlwi8J2SuVwiLFwiJmRzY3k7XCI6XCLRlVwiLFwiJmRzb2w7XCI6XCLip7ZcIixcIiZkc3Ryb2s7XCI6XCLEkVwiLFwiJmR0ZG90O1wiOlwi4ouxXCIsXCImZHRyaTtcIjpcIuKWv1wiLFwiJmR0cmlmO1wiOlwi4pa+XCIsXCImZHVhcnI7XCI6XCLih7VcIixcIiZkdWhhcjtcIjpcIuKlr1wiLFwiJmR3YW5nbGU7XCI6XCLipqZcIixcIiZkemN5O1wiOlwi0Z9cIixcIiZkemlncmFycjtcIjpcIuKfv1wiLFwiJmVERG90O1wiOlwi4qm3XCIsXCImZURvdDtcIjpcIuKJkVwiLFwiJmVhY3V0ZVwiOlwiw6lcIixcIiZlYWN1dGU7XCI6XCLDqVwiLFwiJmVhc3RlcjtcIjpcIuKprlwiLFwiJmVjYXJvbjtcIjpcIsSbXCIsXCImZWNpcjtcIjpcIuKJllwiLFwiJmVjaXJjXCI6XCLDqlwiLFwiJmVjaXJjO1wiOlwiw6pcIixcIiZlY29sb247XCI6XCLiiZVcIixcIiZlY3k7XCI6XCLRjVwiLFwiJmVkb3Q7XCI6XCLEl1wiLFwiJmVlO1wiOlwi4oWHXCIsXCImZWZEb3Q7XCI6XCLiiZJcIixcIiZlZnI7XCI6XCLwnZSiXCIsXCImZWc7XCI6XCLiqppcIixcIiZlZ3JhdmVcIjpcIsOoXCIsXCImZWdyYXZlO1wiOlwiw6hcIixcIiZlZ3M7XCI6XCLiqpZcIixcIiZlZ3Nkb3Q7XCI6XCLiqphcIixcIiZlbDtcIjpcIuKqmVwiLFwiJmVsaW50ZXJzO1wiOlwi4o+nXCIsXCImZWxsO1wiOlwi4oSTXCIsXCImZWxzO1wiOlwi4qqVXCIsXCImZWxzZG90O1wiOlwi4qqXXCIsXCImZW1hY3I7XCI6XCLEk1wiLFwiJmVtcHR5O1wiOlwi4oiFXCIsXCImZW1wdHlzZXQ7XCI6XCLiiIVcIixcIiZlbXB0eXY7XCI6XCLiiIVcIixcIiZlbXNwMTM7XCI6XCLigIRcIixcIiZlbXNwMTQ7XCI6XCLigIVcIixcIiZlbXNwO1wiOlwi4oCDXCIsXCImZW5nO1wiOlwixYtcIixcIiZlbnNwO1wiOlwi4oCCXCIsXCImZW9nb247XCI6XCLEmVwiLFwiJmVvcGY7XCI6XCLwnZWWXCIsXCImZXBhcjtcIjpcIuKLlVwiLFwiJmVwYXJzbDtcIjpcIuKno1wiLFwiJmVwbHVzO1wiOlwi4qmxXCIsXCImZXBzaTtcIjpcIs61XCIsXCImZXBzaWxvbjtcIjpcIs61XCIsXCImZXBzaXY7XCI6XCLPtVwiLFwiJmVxY2lyYztcIjpcIuKJllwiLFwiJmVxY29sb247XCI6XCLiiZVcIixcIiZlcXNpbTtcIjpcIuKJglwiLFwiJmVxc2xhbnRndHI7XCI6XCLiqpZcIixcIiZlcXNsYW50bGVzcztcIjpcIuKqlVwiLFwiJmVxdWFscztcIjpcIj1cIixcIiZlcXVlc3Q7XCI6XCLiiZ9cIixcIiZlcXVpdjtcIjpcIuKJoVwiLFwiJmVxdWl2REQ7XCI6XCLiqbhcIixcIiZlcXZwYXJzbDtcIjpcIuKnpVwiLFwiJmVyRG90O1wiOlwi4omTXCIsXCImZXJhcnI7XCI6XCLipbFcIixcIiZlc2NyO1wiOlwi4oSvXCIsXCImZXNkb3Q7XCI6XCLiiZBcIixcIiZlc2ltO1wiOlwi4omCXCIsXCImZXRhO1wiOlwizrdcIixcIiZldGhcIjpcIsOwXCIsXCImZXRoO1wiOlwiw7BcIixcIiZldW1sXCI6XCLDq1wiLFwiJmV1bWw7XCI6XCLDq1wiLFwiJmV1cm87XCI6XCLigqxcIixcIiZleGNsO1wiOlwiIVwiLFwiJmV4aXN0O1wiOlwi4oiDXCIsXCImZXhwZWN0YXRpb247XCI6XCLihLBcIixcIiZleHBvbmVudGlhbGU7XCI6XCLihYdcIixcIiZmYWxsaW5nZG90c2VxO1wiOlwi4omSXCIsXCImZmN5O1wiOlwi0YRcIixcIiZmZW1hbGU7XCI6XCLimYBcIixcIiZmZmlsaWc7XCI6XCLvrINcIixcIiZmZmxpZztcIjpcIu+sgFwiLFwiJmZmbGxpZztcIjpcIu+shFwiLFwiJmZmcjtcIjpcIvCdlKNcIixcIiZmaWxpZztcIjpcIu+sgVwiLFwiJmZqbGlnO1wiOlwiZmpcIixcIiZmbGF0O1wiOlwi4pmtXCIsXCImZmxsaWc7XCI6XCLvrIJcIixcIiZmbHRucztcIjpcIuKWsVwiLFwiJmZub2Y7XCI6XCLGklwiLFwiJmZvcGY7XCI6XCLwnZWXXCIsXCImZm9yYWxsO1wiOlwi4oiAXCIsXCImZm9yaztcIjpcIuKLlFwiLFwiJmZvcmt2O1wiOlwi4quZXCIsXCImZnBhcnRpbnQ7XCI6XCLiqI1cIixcIiZmcmFjMTJcIjpcIsK9XCIsXCImZnJhYzEyO1wiOlwiwr1cIixcIiZmcmFjMTM7XCI6XCLihZNcIixcIiZmcmFjMTRcIjpcIsK8XCIsXCImZnJhYzE0O1wiOlwiwrxcIixcIiZmcmFjMTU7XCI6XCLihZVcIixcIiZmcmFjMTY7XCI6XCLihZlcIixcIiZmcmFjMTg7XCI6XCLihZtcIixcIiZmcmFjMjM7XCI6XCLihZRcIixcIiZmcmFjMjU7XCI6XCLihZZcIixcIiZmcmFjMzRcIjpcIsK+XCIsXCImZnJhYzM0O1wiOlwiwr5cIixcIiZmcmFjMzU7XCI6XCLihZdcIixcIiZmcmFjMzg7XCI6XCLihZxcIixcIiZmcmFjNDU7XCI6XCLihZhcIixcIiZmcmFjNTY7XCI6XCLihZpcIixcIiZmcmFjNTg7XCI6XCLihZ1cIixcIiZmcmFjNzg7XCI6XCLihZ5cIixcIiZmcmFzbDtcIjpcIuKBhFwiLFwiJmZyb3duO1wiOlwi4oyiXCIsXCImZnNjcjtcIjpcIvCdkrtcIixcIiZnRTtcIjpcIuKJp1wiLFwiJmdFbDtcIjpcIuKqjFwiLFwiJmdhY3V0ZTtcIjpcIse1XCIsXCImZ2FtbWE7XCI6XCLOs1wiLFwiJmdhbW1hZDtcIjpcIs+dXCIsXCImZ2FwO1wiOlwi4qqGXCIsXCImZ2JyZXZlO1wiOlwixJ9cIixcIiZnY2lyYztcIjpcIsSdXCIsXCImZ2N5O1wiOlwi0LNcIixcIiZnZG90O1wiOlwixKFcIixcIiZnZTtcIjpcIuKJpVwiLFwiJmdlbDtcIjpcIuKLm1wiLFwiJmdlcTtcIjpcIuKJpVwiLFwiJmdlcXE7XCI6XCLiiadcIixcIiZnZXFzbGFudDtcIjpcIuKpvlwiLFwiJmdlcztcIjpcIuKpvlwiLFwiJmdlc2NjO1wiOlwi4qqpXCIsXCImZ2VzZG90O1wiOlwi4qqAXCIsXCImZ2VzZG90bztcIjpcIuKqglwiLFwiJmdlc2RvdG9sO1wiOlwi4qqEXCIsXCImZ2VzbDtcIjpcIuKLm++4gFwiLFwiJmdlc2xlcztcIjpcIuKqlFwiLFwiJmdmcjtcIjpcIvCdlKRcIixcIiZnZztcIjpcIuKJq1wiLFwiJmdnZztcIjpcIuKLmVwiLFwiJmdpbWVsO1wiOlwi4oS3XCIsXCImZ2pjeTtcIjpcItGTXCIsXCImZ2w7XCI6XCLiibdcIixcIiZnbEU7XCI6XCLiqpJcIixcIiZnbGE7XCI6XCLiqqVcIixcIiZnbGo7XCI6XCLiqqRcIixcIiZnbkU7XCI6XCLiialcIixcIiZnbmFwO1wiOlwi4qqKXCIsXCImZ25hcHByb3g7XCI6XCLiqopcIixcIiZnbmU7XCI6XCLiqohcIixcIiZnbmVxO1wiOlwi4qqIXCIsXCImZ25lcXE7XCI6XCLiialcIixcIiZnbnNpbTtcIjpcIuKLp1wiLFwiJmdvcGY7XCI6XCLwnZWYXCIsXCImZ3JhdmU7XCI6XCJgXCIsXCImZ3NjcjtcIjpcIuKEilwiLFwiJmdzaW07XCI6XCLiibNcIixcIiZnc2ltZTtcIjpcIuKqjlwiLFwiJmdzaW1sO1wiOlwi4qqQXCIsXCImZ3RcIjpcIj5cIixcIiZndDtcIjpcIj5cIixcIiZndGNjO1wiOlwi4qqnXCIsXCImZ3RjaXI7XCI6XCLiqbpcIixcIiZndGRvdDtcIjpcIuKLl1wiLFwiJmd0bFBhcjtcIjpcIuKmlVwiLFwiJmd0cXVlc3Q7XCI6XCLiqbxcIixcIiZndHJhcHByb3g7XCI6XCLiqoZcIixcIiZndHJhcnI7XCI6XCLipbhcIixcIiZndHJkb3Q7XCI6XCLii5dcIixcIiZndHJlcWxlc3M7XCI6XCLii5tcIixcIiZndHJlcXFsZXNzO1wiOlwi4qqMXCIsXCImZ3RybGVzcztcIjpcIuKJt1wiLFwiJmd0cnNpbTtcIjpcIuKJs1wiLFwiJmd2ZXJ0bmVxcTtcIjpcIuKJqe+4gFwiLFwiJmd2bkU7XCI6XCLiianvuIBcIixcIiZoQXJyO1wiOlwi4oeUXCIsXCImaGFpcnNwO1wiOlwi4oCKXCIsXCImaGFsZjtcIjpcIsK9XCIsXCImaGFtaWx0O1wiOlwi4oSLXCIsXCImaGFyZGN5O1wiOlwi0YpcIixcIiZoYXJyO1wiOlwi4oaUXCIsXCImaGFycmNpcjtcIjpcIuKliFwiLFwiJmhhcnJ3O1wiOlwi4oatXCIsXCImaGJhcjtcIjpcIuKEj1wiLFwiJmhjaXJjO1wiOlwixKVcIixcIiZoZWFydHM7XCI6XCLimaVcIixcIiZoZWFydHN1aXQ7XCI6XCLimaVcIixcIiZoZWxsaXA7XCI6XCLigKZcIixcIiZoZXJjb247XCI6XCLiirlcIixcIiZoZnI7XCI6XCLwnZSlXCIsXCImaGtzZWFyb3c7XCI6XCLipKVcIixcIiZoa3N3YXJvdztcIjpcIuKkplwiLFwiJmhvYXJyO1wiOlwi4oe/XCIsXCImaG9tdGh0O1wiOlwi4oi7XCIsXCImaG9va2xlZnRhcnJvdztcIjpcIuKGqVwiLFwiJmhvb2tyaWdodGFycm93O1wiOlwi4oaqXCIsXCImaG9wZjtcIjpcIvCdlZlcIixcIiZob3JiYXI7XCI6XCLigJVcIixcIiZoc2NyO1wiOlwi8J2SvVwiLFwiJmhzbGFzaDtcIjpcIuKEj1wiLFwiJmhzdHJvaztcIjpcIsSnXCIsXCImaHlidWxsO1wiOlwi4oGDXCIsXCImaHlwaGVuO1wiOlwi4oCQXCIsXCImaWFjdXRlXCI6XCLDrVwiLFwiJmlhY3V0ZTtcIjpcIsOtXCIsXCImaWM7XCI6XCLigaNcIixcIiZpY2lyY1wiOlwiw65cIixcIiZpY2lyYztcIjpcIsOuXCIsXCImaWN5O1wiOlwi0LhcIixcIiZpZWN5O1wiOlwi0LVcIixcIiZpZXhjbFwiOlwiwqFcIixcIiZpZXhjbDtcIjpcIsKhXCIsXCImaWZmO1wiOlwi4oeUXCIsXCImaWZyO1wiOlwi8J2UplwiLFwiJmlncmF2ZVwiOlwiw6xcIixcIiZpZ3JhdmU7XCI6XCLDrFwiLFwiJmlpO1wiOlwi4oWIXCIsXCImaWlpaW50O1wiOlwi4qiMXCIsXCImaWlpbnQ7XCI6XCLiiK1cIixcIiZpaW5maW47XCI6XCLip5xcIixcIiZpaW90YTtcIjpcIuKEqVwiLFwiJmlqbGlnO1wiOlwixLNcIixcIiZpbWFjcjtcIjpcIsSrXCIsXCImaW1hZ2U7XCI6XCLihJFcIixcIiZpbWFnbGluZTtcIjpcIuKEkFwiLFwiJmltYWdwYXJ0O1wiOlwi4oSRXCIsXCImaW1hdGg7XCI6XCLEsVwiLFwiJmltb2Y7XCI6XCLiirdcIixcIiZpbXBlZDtcIjpcIsa1XCIsXCImaW47XCI6XCLiiIhcIixcIiZpbmNhcmU7XCI6XCLihIVcIixcIiZpbmZpbjtcIjpcIuKInlwiLFwiJmluZmludGllO1wiOlwi4qedXCIsXCImaW5vZG90O1wiOlwixLFcIixcIiZpbnQ7XCI6XCLiiKtcIixcIiZpbnRjYWw7XCI6XCLiirpcIixcIiZpbnRlZ2VycztcIjpcIuKEpFwiLFwiJmludGVyY2FsO1wiOlwi4oq6XCIsXCImaW50bGFyaGs7XCI6XCLiqJdcIixcIiZpbnRwcm9kO1wiOlwi4qi8XCIsXCImaW9jeTtcIjpcItGRXCIsXCImaW9nb247XCI6XCLEr1wiLFwiJmlvcGY7XCI6XCLwnZWaXCIsXCImaW90YTtcIjpcIs65XCIsXCImaXByb2Q7XCI6XCLiqLxcIixcIiZpcXVlc3RcIjpcIsK/XCIsXCImaXF1ZXN0O1wiOlwiwr9cIixcIiZpc2NyO1wiOlwi8J2SvlwiLFwiJmlzaW47XCI6XCLiiIhcIixcIiZpc2luRTtcIjpcIuKLuVwiLFwiJmlzaW5kb3Q7XCI6XCLii7VcIixcIiZpc2lucztcIjpcIuKLtFwiLFwiJmlzaW5zdjtcIjpcIuKLs1wiLFwiJmlzaW52O1wiOlwi4oiIXCIsXCImaXQ7XCI6XCLigaJcIixcIiZpdGlsZGU7XCI6XCLEqVwiLFwiJml1a2N5O1wiOlwi0ZZcIixcIiZpdW1sXCI6XCLDr1wiLFwiJml1bWw7XCI6XCLDr1wiLFwiJmpjaXJjO1wiOlwixLVcIixcIiZqY3k7XCI6XCLQuVwiLFwiJmpmcjtcIjpcIvCdlKdcIixcIiZqbWF0aDtcIjpcIsi3XCIsXCImam9wZjtcIjpcIvCdlZtcIixcIiZqc2NyO1wiOlwi8J2Sv1wiLFwiJmpzZXJjeTtcIjpcItGYXCIsXCImanVrY3k7XCI6XCLRlFwiLFwiJmthcHBhO1wiOlwizrpcIixcIiZrYXBwYXY7XCI6XCLPsFwiLFwiJmtjZWRpbDtcIjpcIsS3XCIsXCIma2N5O1wiOlwi0LpcIixcIiZrZnI7XCI6XCLwnZSoXCIsXCIma2dyZWVuO1wiOlwixLhcIixcIiZraGN5O1wiOlwi0YVcIixcIiZramN5O1wiOlwi0ZxcIixcIiZrb3BmO1wiOlwi8J2VnFwiLFwiJmtzY3I7XCI6XCLwnZOAXCIsXCImbEFhcnI7XCI6XCLih5pcIixcIiZsQXJyO1wiOlwi4oeQXCIsXCImbEF0YWlsO1wiOlwi4qSbXCIsXCImbEJhcnI7XCI6XCLipI5cIixcIiZsRTtcIjpcIuKJplwiLFwiJmxFZztcIjpcIuKqi1wiLFwiJmxIYXI7XCI6XCLipaJcIixcIiZsYWN1dGU7XCI6XCLEulwiLFwiJmxhZW1wdHl2O1wiOlwi4qa0XCIsXCImbGFncmFuO1wiOlwi4oSSXCIsXCImbGFtYmRhO1wiOlwizrtcIixcIiZsYW5nO1wiOlwi4p+oXCIsXCImbGFuZ2Q7XCI6XCLippFcIixcIiZsYW5nbGU7XCI6XCLin6hcIixcIiZsYXA7XCI6XCLiqoVcIixcIiZsYXF1b1wiOlwiwqtcIixcIiZsYXF1bztcIjpcIsKrXCIsXCImbGFycjtcIjpcIuKGkFwiLFwiJmxhcnJiO1wiOlwi4oekXCIsXCImbGFycmJmcztcIjpcIuKkn1wiLFwiJmxhcnJmcztcIjpcIuKknVwiLFwiJmxhcnJoaztcIjpcIuKGqVwiLFwiJmxhcnJscDtcIjpcIuKGq1wiLFwiJmxhcnJwbDtcIjpcIuKkuVwiLFwiJmxhcnJzaW07XCI6XCLipbNcIixcIiZsYXJydGw7XCI6XCLihqJcIixcIiZsYXQ7XCI6XCLiqqtcIixcIiZsYXRhaWw7XCI6XCLipJlcIixcIiZsYXRlO1wiOlwi4qqtXCIsXCImbGF0ZXM7XCI6XCLiqq3vuIBcIixcIiZsYmFycjtcIjpcIuKkjFwiLFwiJmxiYnJrO1wiOlwi4p2yXCIsXCImbGJyYWNlO1wiOlwie1wiLFwiJmxicmFjaztcIjpcIltcIixcIiZsYnJrZTtcIjpcIuKmi1wiLFwiJmxicmtzbGQ7XCI6XCLipo9cIixcIiZsYnJrc2x1O1wiOlwi4qaNXCIsXCImbGNhcm9uO1wiOlwixL5cIixcIiZsY2VkaWw7XCI6XCLEvFwiLFwiJmxjZWlsO1wiOlwi4oyIXCIsXCImbGN1YjtcIjpcIntcIixcIiZsY3k7XCI6XCLQu1wiLFwiJmxkY2E7XCI6XCLipLZcIixcIiZsZHF1bztcIjpcIuKAnFwiLFwiJmxkcXVvcjtcIjpcIuKAnlwiLFwiJmxkcmRoYXI7XCI6XCLipadcIixcIiZsZHJ1c2hhcjtcIjpcIuKli1wiLFwiJmxkc2g7XCI6XCLihrJcIixcIiZsZTtcIjpcIuKJpFwiLFwiJmxlZnRhcnJvdztcIjpcIuKGkFwiLFwiJmxlZnRhcnJvd3RhaWw7XCI6XCLihqJcIixcIiZsZWZ0aGFycG9vbmRvd247XCI6XCLihr1cIixcIiZsZWZ0aGFycG9vbnVwO1wiOlwi4oa8XCIsXCImbGVmdGxlZnRhcnJvd3M7XCI6XCLih4dcIixcIiZsZWZ0cmlnaHRhcnJvdztcIjpcIuKGlFwiLFwiJmxlZnRyaWdodGFycm93cztcIjpcIuKHhlwiLFwiJmxlZnRyaWdodGhhcnBvb25zO1wiOlwi4oeLXCIsXCImbGVmdHJpZ2h0c3F1aWdhcnJvdztcIjpcIuKGrVwiLFwiJmxlZnR0aHJlZXRpbWVzO1wiOlwi4ouLXCIsXCImbGVnO1wiOlwi4ouaXCIsXCImbGVxO1wiOlwi4omkXCIsXCImbGVxcTtcIjpcIuKJplwiLFwiJmxlcXNsYW50O1wiOlwi4qm9XCIsXCImbGVzO1wiOlwi4qm9XCIsXCImbGVzY2M7XCI6XCLiqqhcIixcIiZsZXNkb3Q7XCI6XCLiqb9cIixcIiZsZXNkb3RvO1wiOlwi4qqBXCIsXCImbGVzZG90b3I7XCI6XCLiqoNcIixcIiZsZXNnO1wiOlwi4oua77iAXCIsXCImbGVzZ2VzO1wiOlwi4qqTXCIsXCImbGVzc2FwcHJveDtcIjpcIuKqhVwiLFwiJmxlc3Nkb3Q7XCI6XCLii5ZcIixcIiZsZXNzZXFndHI7XCI6XCLii5pcIixcIiZsZXNzZXFxZ3RyO1wiOlwi4qqLXCIsXCImbGVzc2d0cjtcIjpcIuKJtlwiLFwiJmxlc3NzaW07XCI6XCLiibJcIixcIiZsZmlzaHQ7XCI6XCLipbxcIixcIiZsZmxvb3I7XCI6XCLijIpcIixcIiZsZnI7XCI6XCLwnZSpXCIsXCImbGc7XCI6XCLiibZcIixcIiZsZ0U7XCI6XCLiqpFcIixcIiZsaGFyZDtcIjpcIuKGvVwiLFwiJmxoYXJ1O1wiOlwi4oa8XCIsXCImbGhhcnVsO1wiOlwi4qWqXCIsXCImbGhibGs7XCI6XCLiloRcIixcIiZsamN5O1wiOlwi0ZlcIixcIiZsbDtcIjpcIuKJqlwiLFwiJmxsYXJyO1wiOlwi4oeHXCIsXCImbGxjb3JuZXI7XCI6XCLijJ5cIixcIiZsbGhhcmQ7XCI6XCLipatcIixcIiZsbHRyaTtcIjpcIuKXulwiLFwiJmxtaWRvdDtcIjpcIsWAXCIsXCImbG1vdXN0O1wiOlwi4o6wXCIsXCImbG1vdXN0YWNoZTtcIjpcIuKOsFwiLFwiJmxuRTtcIjpcIuKJqFwiLFwiJmxuYXA7XCI6XCLiqolcIixcIiZsbmFwcHJveDtcIjpcIuKqiVwiLFwiJmxuZTtcIjpcIuKqh1wiLFwiJmxuZXE7XCI6XCLiqodcIixcIiZsbmVxcTtcIjpcIuKJqFwiLFwiJmxuc2ltO1wiOlwi4oumXCIsXCImbG9hbmc7XCI6XCLin6xcIixcIiZsb2FycjtcIjpcIuKHvVwiLFwiJmxvYnJrO1wiOlwi4p+mXCIsXCImbG9uZ2xlZnRhcnJvdztcIjpcIuKftVwiLFwiJmxvbmdsZWZ0cmlnaHRhcnJvdztcIjpcIuKft1wiLFwiJmxvbmdtYXBzdG87XCI6XCLin7xcIixcIiZsb25ncmlnaHRhcnJvdztcIjpcIuKftlwiLFwiJmxvb3BhcnJvd2xlZnQ7XCI6XCLihqtcIixcIiZsb29wYXJyb3dyaWdodDtcIjpcIuKGrFwiLFwiJmxvcGFyO1wiOlwi4qaFXCIsXCImbG9wZjtcIjpcIvCdlZ1cIixcIiZsb3BsdXM7XCI6XCLiqK1cIixcIiZsb3RpbWVzO1wiOlwi4qi0XCIsXCImbG93YXN0O1wiOlwi4oiXXCIsXCImbG93YmFyO1wiOlwiX1wiLFwiJmxvejtcIjpcIuKXilwiLFwiJmxvemVuZ2U7XCI6XCLil4pcIixcIiZsb3pmO1wiOlwi4qerXCIsXCImbHBhcjtcIjpcIihcIixcIiZscGFybHQ7XCI6XCLippNcIixcIiZscmFycjtcIjpcIuKHhlwiLFwiJmxyY29ybmVyO1wiOlwi4oyfXCIsXCImbHJoYXI7XCI6XCLih4tcIixcIiZscmhhcmQ7XCI6XCLipa1cIixcIiZscm07XCI6XCLigI5cIixcIiZscnRyaTtcIjpcIuKKv1wiLFwiJmxzYXF1bztcIjpcIuKAuVwiLFwiJmxzY3I7XCI6XCLwnZOBXCIsXCImbHNoO1wiOlwi4oawXCIsXCImbHNpbTtcIjpcIuKJslwiLFwiJmxzaW1lO1wiOlwi4qqNXCIsXCImbHNpbWc7XCI6XCLiqo9cIixcIiZsc3FiO1wiOlwiW1wiLFwiJmxzcXVvO1wiOlwi4oCYXCIsXCImbHNxdW9yO1wiOlwi4oCaXCIsXCImbHN0cm9rO1wiOlwixYJcIixcIiZsdFwiOlwiPFwiLFwiJmx0O1wiOlwiPFwiLFwiJmx0Y2M7XCI6XCLiqqZcIixcIiZsdGNpcjtcIjpcIuKpuVwiLFwiJmx0ZG90O1wiOlwi4ouWXCIsXCImbHRocmVlO1wiOlwi4ouLXCIsXCImbHRpbWVzO1wiOlwi4ouJXCIsXCImbHRsYXJyO1wiOlwi4qW2XCIsXCImbHRxdWVzdDtcIjpcIuKpu1wiLFwiJmx0clBhcjtcIjpcIuKmllwiLFwiJmx0cmk7XCI6XCLil4NcIixcIiZsdHJpZTtcIjpcIuKKtFwiLFwiJmx0cmlmO1wiOlwi4peCXCIsXCImbHVyZHNoYXI7XCI6XCLipYpcIixcIiZsdXJ1aGFyO1wiOlwi4qWmXCIsXCImbHZlcnRuZXFxO1wiOlwi4omo77iAXCIsXCImbHZuRTtcIjpcIuKJqO+4gFwiLFwiJm1ERG90O1wiOlwi4oi6XCIsXCImbWFjclwiOlwiwq9cIixcIiZtYWNyO1wiOlwiwq9cIixcIiZtYWxlO1wiOlwi4pmCXCIsXCImbWFsdDtcIjpcIuKcoFwiLFwiJm1hbHRlc2U7XCI6XCLinKBcIixcIiZtYXA7XCI6XCLihqZcIixcIiZtYXBzdG87XCI6XCLihqZcIixcIiZtYXBzdG9kb3duO1wiOlwi4oanXCIsXCImbWFwc3RvbGVmdDtcIjpcIuKGpFwiLFwiJm1hcHN0b3VwO1wiOlwi4oalXCIsXCImbWFya2VyO1wiOlwi4pauXCIsXCImbWNvbW1hO1wiOlwi4qipXCIsXCImbWN5O1wiOlwi0LxcIixcIiZtZGFzaDtcIjpcIuKAlFwiLFwiJm1lYXN1cmVkYW5nbGU7XCI6XCLiiKFcIixcIiZtZnI7XCI6XCLwnZSqXCIsXCImbWhvO1wiOlwi4oSnXCIsXCImbWljcm9cIjpcIsK1XCIsXCImbWljcm87XCI6XCLCtVwiLFwiJm1pZDtcIjpcIuKIo1wiLFwiJm1pZGFzdDtcIjpcIipcIixcIiZtaWRjaXI7XCI6XCLiq7BcIixcIiZtaWRkb3RcIjpcIsK3XCIsXCImbWlkZG90O1wiOlwiwrdcIixcIiZtaW51cztcIjpcIuKIklwiLFwiJm1pbnVzYjtcIjpcIuKKn1wiLFwiJm1pbnVzZDtcIjpcIuKIuFwiLFwiJm1pbnVzZHU7XCI6XCLiqKpcIixcIiZtbGNwO1wiOlwi4qubXCIsXCImbWxkcjtcIjpcIuKAplwiLFwiJm1ucGx1cztcIjpcIuKIk1wiLFwiJm1vZGVscztcIjpcIuKKp1wiLFwiJm1vcGY7XCI6XCLwnZWeXCIsXCImbXA7XCI6XCLiiJNcIixcIiZtc2NyO1wiOlwi8J2TglwiLFwiJm1zdHBvcztcIjpcIuKIvlwiLFwiJm11O1wiOlwizrxcIixcIiZtdWx0aW1hcDtcIjpcIuKKuFwiLFwiJm11bWFwO1wiOlwi4oq4XCIsXCImbkdnO1wiOlwi4ouZzLhcIixcIiZuR3Q7XCI6XCLiiavig5JcIixcIiZuR3R2O1wiOlwi4omrzLhcIixcIiZuTGVmdGFycm93O1wiOlwi4oeNXCIsXCImbkxlZnRyaWdodGFycm93O1wiOlwi4oeOXCIsXCImbkxsO1wiOlwi4ouYzLhcIixcIiZuTHQ7XCI6XCLiiarig5JcIixcIiZuTHR2O1wiOlwi4omqzLhcIixcIiZuUmlnaHRhcnJvdztcIjpcIuKHj1wiLFwiJm5WRGFzaDtcIjpcIuKKr1wiLFwiJm5WZGFzaDtcIjpcIuKKrlwiLFwiJm5hYmxhO1wiOlwi4oiHXCIsXCImbmFjdXRlO1wiOlwixYRcIixcIiZuYW5nO1wiOlwi4oig4oOSXCIsXCImbmFwO1wiOlwi4omJXCIsXCImbmFwRTtcIjpcIuKpsMy4XCIsXCImbmFwaWQ7XCI6XCLiiYvMuFwiLFwiJm5hcG9zO1wiOlwixYlcIixcIiZuYXBwcm94O1wiOlwi4omJXCIsXCImbmF0dXI7XCI6XCLima5cIixcIiZuYXR1cmFsO1wiOlwi4pmuXCIsXCImbmF0dXJhbHM7XCI6XCLihJVcIixcIiZuYnNwXCI6XCLCoFwiLFwiJm5ic3A7XCI6XCLCoFwiLFwiJm5idW1wO1wiOlwi4omOzLhcIixcIiZuYnVtcGU7XCI6XCLiiY/MuFwiLFwiJm5jYXA7XCI6XCLiqYNcIixcIiZuY2Fyb247XCI6XCLFiFwiLFwiJm5jZWRpbDtcIjpcIsWGXCIsXCImbmNvbmc7XCI6XCLiiYdcIixcIiZuY29uZ2RvdDtcIjpcIuKprcy4XCIsXCImbmN1cDtcIjpcIuKpglwiLFwiJm5jeTtcIjpcItC9XCIsXCImbmRhc2g7XCI6XCLigJNcIixcIiZuZTtcIjpcIuKJoFwiLFwiJm5lQXJyO1wiOlwi4oeXXCIsXCImbmVhcmhrO1wiOlwi4qSkXCIsXCImbmVhcnI7XCI6XCLihpdcIixcIiZuZWFycm93O1wiOlwi4oaXXCIsXCImbmVkb3Q7XCI6XCLiiZDMuFwiLFwiJm5lcXVpdjtcIjpcIuKJolwiLFwiJm5lc2VhcjtcIjpcIuKkqFwiLFwiJm5lc2ltO1wiOlwi4omCzLhcIixcIiZuZXhpc3Q7XCI6XCLiiIRcIixcIiZuZXhpc3RzO1wiOlwi4oiEXCIsXCImbmZyO1wiOlwi8J2Uq1wiLFwiJm5nRTtcIjpcIuKJp8y4XCIsXCImbmdlO1wiOlwi4omxXCIsXCImbmdlcTtcIjpcIuKJsVwiLFwiJm5nZXFxO1wiOlwi4omnzLhcIixcIiZuZ2Vxc2xhbnQ7XCI6XCLiqb7MuFwiLFwiJm5nZXM7XCI6XCLiqb7MuFwiLFwiJm5nc2ltO1wiOlwi4om1XCIsXCImbmd0O1wiOlwi4omvXCIsXCImbmd0cjtcIjpcIuKJr1wiLFwiJm5oQXJyO1wiOlwi4oeOXCIsXCImbmhhcnI7XCI6XCLihq5cIixcIiZuaHBhcjtcIjpcIuKrslwiLFwiJm5pO1wiOlwi4oiLXCIsXCImbmlzO1wiOlwi4ou8XCIsXCImbmlzZDtcIjpcIuKLulwiLFwiJm5pdjtcIjpcIuKIi1wiLFwiJm5qY3k7XCI6XCLRmlwiLFwiJm5sQXJyO1wiOlwi4oeNXCIsXCImbmxFO1wiOlwi4ommzLhcIixcIiZubGFycjtcIjpcIuKGmlwiLFwiJm5sZHI7XCI6XCLigKVcIixcIiZubGU7XCI6XCLiibBcIixcIiZubGVmdGFycm93O1wiOlwi4oaaXCIsXCImbmxlZnRyaWdodGFycm93O1wiOlwi4oauXCIsXCImbmxlcTtcIjpcIuKJsFwiLFwiJm5sZXFxO1wiOlwi4ommzLhcIixcIiZubGVxc2xhbnQ7XCI6XCLiqb3MuFwiLFwiJm5sZXM7XCI6XCLiqb3MuFwiLFwiJm5sZXNzO1wiOlwi4omuXCIsXCImbmxzaW07XCI6XCLiibRcIixcIiZubHQ7XCI6XCLiia5cIixcIiZubHRyaTtcIjpcIuKLqlwiLFwiJm5sdHJpZTtcIjpcIuKLrFwiLFwiJm5taWQ7XCI6XCLiiKRcIixcIiZub3BmO1wiOlwi8J2Vn1wiLFwiJm5vdFwiOlwiwqxcIixcIiZub3Q7XCI6XCLCrFwiLFwiJm5vdGluO1wiOlwi4oiJXCIsXCImbm90aW5FO1wiOlwi4ou5zLhcIixcIiZub3RpbmRvdDtcIjpcIuKLtcy4XCIsXCImbm90aW52YTtcIjpcIuKIiVwiLFwiJm5vdGludmI7XCI6XCLii7dcIixcIiZub3RpbnZjO1wiOlwi4ou2XCIsXCImbm90bmk7XCI6XCLiiIxcIixcIiZub3RuaXZhO1wiOlwi4oiMXCIsXCImbm90bml2YjtcIjpcIuKLvlwiLFwiJm5vdG5pdmM7XCI6XCLii71cIixcIiZucGFyO1wiOlwi4oimXCIsXCImbnBhcmFsbGVsO1wiOlwi4oimXCIsXCImbnBhcnNsO1wiOlwi4qu94oOlXCIsXCImbnBhcnQ7XCI6XCLiiILMuFwiLFwiJm5wb2xpbnQ7XCI6XCLiqJRcIixcIiZucHI7XCI6XCLiioBcIixcIiZucHJjdWU7XCI6XCLii6BcIixcIiZucHJlO1wiOlwi4qqvzLhcIixcIiZucHJlYztcIjpcIuKKgFwiLFwiJm5wcmVjZXE7XCI6XCLiqq/MuFwiLFwiJm5yQXJyO1wiOlwi4oePXCIsXCImbnJhcnI7XCI6XCLihptcIixcIiZucmFycmM7XCI6XCLipLPMuFwiLFwiJm5yYXJydztcIjpcIuKGncy4XCIsXCImbnJpZ2h0YXJyb3c7XCI6XCLihptcIixcIiZucnRyaTtcIjpcIuKLq1wiLFwiJm5ydHJpZTtcIjpcIuKLrVwiLFwiJm5zYztcIjpcIuKKgVwiLFwiJm5zY2N1ZTtcIjpcIuKLoVwiLFwiJm5zY2U7XCI6XCLiqrDMuFwiLFwiJm5zY3I7XCI6XCLwnZODXCIsXCImbnNob3J0bWlkO1wiOlwi4oikXCIsXCImbnNob3J0cGFyYWxsZWw7XCI6XCLiiKZcIixcIiZuc2ltO1wiOlwi4omBXCIsXCImbnNpbWU7XCI6XCLiiYRcIixcIiZuc2ltZXE7XCI6XCLiiYRcIixcIiZuc21pZDtcIjpcIuKIpFwiLFwiJm5zcGFyO1wiOlwi4oimXCIsXCImbnNxc3ViZTtcIjpcIuKLolwiLFwiJm5zcXN1cGU7XCI6XCLii6NcIixcIiZuc3ViO1wiOlwi4oqEXCIsXCImbnN1YkU7XCI6XCLiq4XMuFwiLFwiJm5zdWJlO1wiOlwi4oqIXCIsXCImbnN1YnNldDtcIjpcIuKKguKDklwiLFwiJm5zdWJzZXRlcTtcIjpcIuKKiFwiLFwiJm5zdWJzZXRlcXE7XCI6XCLiq4XMuFwiLFwiJm5zdWNjO1wiOlwi4oqBXCIsXCImbnN1Y2NlcTtcIjpcIuKqsMy4XCIsXCImbnN1cDtcIjpcIuKKhVwiLFwiJm5zdXBFO1wiOlwi4quGzLhcIixcIiZuc3VwZTtcIjpcIuKKiVwiLFwiJm5zdXBzZXQ7XCI6XCLiioPig5JcIixcIiZuc3Vwc2V0ZXE7XCI6XCLiiolcIixcIiZuc3Vwc2V0ZXFxO1wiOlwi4quGzLhcIixcIiZudGdsO1wiOlwi4om5XCIsXCImbnRpbGRlXCI6XCLDsVwiLFwiJm50aWxkZTtcIjpcIsOxXCIsXCImbnRsZztcIjpcIuKJuFwiLFwiJm50cmlhbmdsZWxlZnQ7XCI6XCLii6pcIixcIiZudHJpYW5nbGVsZWZ0ZXE7XCI6XCLii6xcIixcIiZudHJpYW5nbGVyaWdodDtcIjpcIuKLq1wiLFwiJm50cmlhbmdsZXJpZ2h0ZXE7XCI6XCLii61cIixcIiZudTtcIjpcIs69XCIsXCImbnVtO1wiOlwiI1wiLFwiJm51bWVybztcIjpcIuKEllwiLFwiJm51bXNwO1wiOlwi4oCHXCIsXCImbnZEYXNoO1wiOlwi4oqtXCIsXCImbnZIYXJyO1wiOlwi4qSEXCIsXCImbnZhcDtcIjpcIuKJjeKDklwiLFwiJm52ZGFzaDtcIjpcIuKKrFwiLFwiJm52Z2U7XCI6XCLiiaXig5JcIixcIiZudmd0O1wiOlwiPuKDklwiLFwiJm52aW5maW47XCI6XCLip55cIixcIiZudmxBcnI7XCI6XCLipIJcIixcIiZudmxlO1wiOlwi4omk4oOSXCIsXCImbnZsdDtcIjpcIjzig5JcIixcIiZudmx0cmllO1wiOlwi4oq04oOSXCIsXCImbnZyQXJyO1wiOlwi4qSDXCIsXCImbnZydHJpZTtcIjpcIuKKteKDklwiLFwiJm52c2ltO1wiOlwi4oi84oOSXCIsXCImbndBcnI7XCI6XCLih5ZcIixcIiZud2FyaGs7XCI6XCLipKNcIixcIiZud2FycjtcIjpcIuKGllwiLFwiJm53YXJyb3c7XCI6XCLihpZcIixcIiZud25lYXI7XCI6XCLipKdcIixcIiZvUztcIjpcIuKTiFwiLFwiJm9hY3V0ZVwiOlwiw7NcIixcIiZvYWN1dGU7XCI6XCLDs1wiLFwiJm9hc3Q7XCI6XCLiiptcIixcIiZvY2lyO1wiOlwi4oqaXCIsXCImb2NpcmNcIjpcIsO0XCIsXCImb2NpcmM7XCI6XCLDtFwiLFwiJm9jeTtcIjpcItC+XCIsXCImb2Rhc2g7XCI6XCLiip1cIixcIiZvZGJsYWM7XCI6XCLFkVwiLFwiJm9kaXY7XCI6XCLiqLhcIixcIiZvZG90O1wiOlwi4oqZXCIsXCImb2Rzb2xkO1wiOlwi4qa8XCIsXCImb2VsaWc7XCI6XCLFk1wiLFwiJm9mY2lyO1wiOlwi4qa/XCIsXCImb2ZyO1wiOlwi8J2UrFwiLFwiJm9nb247XCI6XCLLm1wiLFwiJm9ncmF2ZVwiOlwiw7JcIixcIiZvZ3JhdmU7XCI6XCLDslwiLFwiJm9ndDtcIjpcIuKngVwiLFwiJm9oYmFyO1wiOlwi4qa1XCIsXCImb2htO1wiOlwizqlcIixcIiZvaW50O1wiOlwi4oiuXCIsXCImb2xhcnI7XCI6XCLihrpcIixcIiZvbGNpcjtcIjpcIuKmvlwiLFwiJm9sY3Jvc3M7XCI6XCLiprtcIixcIiZvbGluZTtcIjpcIuKAvlwiLFwiJm9sdDtcIjpcIuKngFwiLFwiJm9tYWNyO1wiOlwixY1cIixcIiZvbWVnYTtcIjpcIs+JXCIsXCImb21pY3JvbjtcIjpcIs6/XCIsXCImb21pZDtcIjpcIuKmtlwiLFwiJm9taW51cztcIjpcIuKKllwiLFwiJm9vcGY7XCI6XCLwnZWgXCIsXCImb3BhcjtcIjpcIuKmt1wiLFwiJm9wZXJwO1wiOlwi4qa5XCIsXCImb3BsdXM7XCI6XCLiipVcIixcIiZvcjtcIjpcIuKIqFwiLFwiJm9yYXJyO1wiOlwi4oa7XCIsXCImb3JkO1wiOlwi4qmdXCIsXCImb3JkZXI7XCI6XCLihLRcIixcIiZvcmRlcm9mO1wiOlwi4oS0XCIsXCImb3JkZlwiOlwiwqpcIixcIiZvcmRmO1wiOlwiwqpcIixcIiZvcmRtXCI6XCLCulwiLFwiJm9yZG07XCI6XCLCulwiLFwiJm9yaWdvZjtcIjpcIuKKtlwiLFwiJm9yb3I7XCI6XCLiqZZcIixcIiZvcnNsb3BlO1wiOlwi4qmXXCIsXCImb3J2O1wiOlwi4qmbXCIsXCImb3NjcjtcIjpcIuKEtFwiLFwiJm9zbGFzaFwiOlwiw7hcIixcIiZvc2xhc2g7XCI6XCLDuFwiLFwiJm9zb2w7XCI6XCLiiphcIixcIiZvdGlsZGVcIjpcIsO1XCIsXCImb3RpbGRlO1wiOlwiw7VcIixcIiZvdGltZXM7XCI6XCLiipdcIixcIiZvdGltZXNhcztcIjpcIuKotlwiLFwiJm91bWxcIjpcIsO2XCIsXCImb3VtbDtcIjpcIsO2XCIsXCImb3ZiYXI7XCI6XCLijL1cIixcIiZwYXI7XCI6XCLiiKVcIixcIiZwYXJhXCI6XCLCtlwiLFwiJnBhcmE7XCI6XCLCtlwiLFwiJnBhcmFsbGVsO1wiOlwi4oilXCIsXCImcGFyc2ltO1wiOlwi4quzXCIsXCImcGFyc2w7XCI6XCLiq71cIixcIiZwYXJ0O1wiOlwi4oiCXCIsXCImcGN5O1wiOlwi0L9cIixcIiZwZXJjbnQ7XCI6XCIlXCIsXCImcGVyaW9kO1wiOlwiLlwiLFwiJnBlcm1pbDtcIjpcIuKAsFwiLFwiJnBlcnA7XCI6XCLiiqVcIixcIiZwZXJ0ZW5rO1wiOlwi4oCxXCIsXCImcGZyO1wiOlwi8J2UrVwiLFwiJnBoaTtcIjpcIs+GXCIsXCImcGhpdjtcIjpcIs+VXCIsXCImcGhtbWF0O1wiOlwi4oSzXCIsXCImcGhvbmU7XCI6XCLimI5cIixcIiZwaTtcIjpcIs+AXCIsXCImcGl0Y2hmb3JrO1wiOlwi4ouUXCIsXCImcGl2O1wiOlwiz5ZcIixcIiZwbGFuY2s7XCI6XCLihI9cIixcIiZwbGFuY2toO1wiOlwi4oSOXCIsXCImcGxhbmt2O1wiOlwi4oSPXCIsXCImcGx1cztcIjpcIitcIixcIiZwbHVzYWNpcjtcIjpcIuKoo1wiLFwiJnBsdXNiO1wiOlwi4oqeXCIsXCImcGx1c2NpcjtcIjpcIuKoolwiLFwiJnBsdXNkbztcIjpcIuKIlFwiLFwiJnBsdXNkdTtcIjpcIuKopVwiLFwiJnBsdXNlO1wiOlwi4qmyXCIsXCImcGx1c21uXCI6XCLCsVwiLFwiJnBsdXNtbjtcIjpcIsKxXCIsXCImcGx1c3NpbTtcIjpcIuKoplwiLFwiJnBsdXN0d287XCI6XCLiqKdcIixcIiZwbTtcIjpcIsKxXCIsXCImcG9pbnRpbnQ7XCI6XCLiqJVcIixcIiZwb3BmO1wiOlwi8J2VoVwiLFwiJnBvdW5kXCI6XCLCo1wiLFwiJnBvdW5kO1wiOlwiwqNcIixcIiZwcjtcIjpcIuKJulwiLFwiJnByRTtcIjpcIuKqs1wiLFwiJnByYXA7XCI6XCLiqrdcIixcIiZwcmN1ZTtcIjpcIuKJvFwiLFwiJnByZTtcIjpcIuKqr1wiLFwiJnByZWM7XCI6XCLiibpcIixcIiZwcmVjYXBwcm94O1wiOlwi4qq3XCIsXCImcHJlY2N1cmx5ZXE7XCI6XCLiibxcIixcIiZwcmVjZXE7XCI6XCLiqq9cIixcIiZwcmVjbmFwcHJveDtcIjpcIuKquVwiLFwiJnByZWNuZXFxO1wiOlwi4qq1XCIsXCImcHJlY25zaW07XCI6XCLii6hcIixcIiZwcmVjc2ltO1wiOlwi4om+XCIsXCImcHJpbWU7XCI6XCLigLJcIixcIiZwcmltZXM7XCI6XCLihJlcIixcIiZwcm5FO1wiOlwi4qq1XCIsXCImcHJuYXA7XCI6XCLiqrlcIixcIiZwcm5zaW07XCI6XCLii6hcIixcIiZwcm9kO1wiOlwi4oiPXCIsXCImcHJvZmFsYXI7XCI6XCLijK5cIixcIiZwcm9mbGluZTtcIjpcIuKMklwiLFwiJnByb2ZzdXJmO1wiOlwi4oyTXCIsXCImcHJvcDtcIjpcIuKInVwiLFwiJnByb3B0bztcIjpcIuKInVwiLFwiJnByc2ltO1wiOlwi4om+XCIsXCImcHJ1cmVsO1wiOlwi4oqwXCIsXCImcHNjcjtcIjpcIvCdk4VcIixcIiZwc2k7XCI6XCLPiFwiLFwiJnB1bmNzcDtcIjpcIuKAiFwiLFwiJnFmcjtcIjpcIvCdlK5cIixcIiZxaW50O1wiOlwi4qiMXCIsXCImcW9wZjtcIjpcIvCdlaJcIixcIiZxcHJpbWU7XCI6XCLigZdcIixcIiZxc2NyO1wiOlwi8J2ThlwiLFwiJnF1YXRlcm5pb25zO1wiOlwi4oSNXCIsXCImcXVhdGludDtcIjpcIuKollwiLFwiJnF1ZXN0O1wiOlwiP1wiLFwiJnF1ZXN0ZXE7XCI6XCLiiZ9cIixcIiZxdW90XCI6J1wiJyxcIiZxdW90O1wiOidcIicsXCImckFhcnI7XCI6XCLih5tcIixcIiZyQXJyO1wiOlwi4oeSXCIsXCImckF0YWlsO1wiOlwi4qScXCIsXCImckJhcnI7XCI6XCLipI9cIixcIiZySGFyO1wiOlwi4qWkXCIsXCImcmFjZTtcIjpcIuKIvcyxXCIsXCImcmFjdXRlO1wiOlwixZVcIixcIiZyYWRpYztcIjpcIuKImlwiLFwiJnJhZW1wdHl2O1wiOlwi4qazXCIsXCImcmFuZztcIjpcIuKfqVwiLFwiJnJhbmdkO1wiOlwi4qaSXCIsXCImcmFuZ2U7XCI6XCLipqVcIixcIiZyYW5nbGU7XCI6XCLin6lcIixcIiZyYXF1b1wiOlwiwrtcIixcIiZyYXF1bztcIjpcIsK7XCIsXCImcmFycjtcIjpcIuKGklwiLFwiJnJhcnJhcDtcIjpcIuKltVwiLFwiJnJhcnJiO1wiOlwi4oelXCIsXCImcmFycmJmcztcIjpcIuKkoFwiLFwiJnJhcnJjO1wiOlwi4qSzXCIsXCImcmFycmZzO1wiOlwi4qSeXCIsXCImcmFycmhrO1wiOlwi4oaqXCIsXCImcmFycmxwO1wiOlwi4oasXCIsXCImcmFycnBsO1wiOlwi4qWFXCIsXCImcmFycnNpbTtcIjpcIuKltFwiLFwiJnJhcnJ0bDtcIjpcIuKGo1wiLFwiJnJhcnJ3O1wiOlwi4oadXCIsXCImcmF0YWlsO1wiOlwi4qSaXCIsXCImcmF0aW87XCI6XCLiiLZcIixcIiZyYXRpb25hbHM7XCI6XCLihJpcIixcIiZyYmFycjtcIjpcIuKkjVwiLFwiJnJiYnJrO1wiOlwi4p2zXCIsXCImcmJyYWNlO1wiOlwifVwiLFwiJnJicmFjaztcIjpcIl1cIixcIiZyYnJrZTtcIjpcIuKmjFwiLFwiJnJicmtzbGQ7XCI6XCLipo5cIixcIiZyYnJrc2x1O1wiOlwi4qaQXCIsXCImcmNhcm9uO1wiOlwixZlcIixcIiZyY2VkaWw7XCI6XCLFl1wiLFwiJnJjZWlsO1wiOlwi4oyJXCIsXCImcmN1YjtcIjpcIn1cIixcIiZyY3k7XCI6XCLRgFwiLFwiJnJkY2E7XCI6XCLipLdcIixcIiZyZGxkaGFyO1wiOlwi4qWpXCIsXCImcmRxdW87XCI6XCLigJ1cIixcIiZyZHF1b3I7XCI6XCLigJ1cIixcIiZyZHNoO1wiOlwi4oazXCIsXCImcmVhbDtcIjpcIuKEnFwiLFwiJnJlYWxpbmU7XCI6XCLihJtcIixcIiZyZWFscGFydDtcIjpcIuKEnFwiLFwiJnJlYWxzO1wiOlwi4oSdXCIsXCImcmVjdDtcIjpcIuKWrVwiLFwiJnJlZ1wiOlwiwq5cIixcIiZyZWc7XCI6XCLCrlwiLFwiJnJmaXNodDtcIjpcIuKlvVwiLFwiJnJmbG9vcjtcIjpcIuKMi1wiLFwiJnJmcjtcIjpcIvCdlK9cIixcIiZyaGFyZDtcIjpcIuKHgVwiLFwiJnJoYXJ1O1wiOlwi4oeAXCIsXCImcmhhcnVsO1wiOlwi4qWsXCIsXCImcmhvO1wiOlwiz4FcIixcIiZyaG92O1wiOlwiz7FcIixcIiZyaWdodGFycm93O1wiOlwi4oaSXCIsXCImcmlnaHRhcnJvd3RhaWw7XCI6XCLihqNcIixcIiZyaWdodGhhcnBvb25kb3duO1wiOlwi4oeBXCIsXCImcmlnaHRoYXJwb29udXA7XCI6XCLih4BcIixcIiZyaWdodGxlZnRhcnJvd3M7XCI6XCLih4RcIixcIiZyaWdodGxlZnRoYXJwb29ucztcIjpcIuKHjFwiLFwiJnJpZ2h0cmlnaHRhcnJvd3M7XCI6XCLih4lcIixcIiZyaWdodHNxdWlnYXJyb3c7XCI6XCLihp1cIixcIiZyaWdodHRocmVldGltZXM7XCI6XCLii4xcIixcIiZyaW5nO1wiOlwiy5pcIixcIiZyaXNpbmdkb3RzZXE7XCI6XCLiiZNcIixcIiZybGFycjtcIjpcIuKHhFwiLFwiJnJsaGFyO1wiOlwi4oeMXCIsXCImcmxtO1wiOlwi4oCPXCIsXCImcm1vdXN0O1wiOlwi4o6xXCIsXCImcm1vdXN0YWNoZTtcIjpcIuKOsVwiLFwiJnJubWlkO1wiOlwi4quuXCIsXCImcm9hbmc7XCI6XCLin61cIixcIiZyb2FycjtcIjpcIuKHvlwiLFwiJnJvYnJrO1wiOlwi4p+nXCIsXCImcm9wYXI7XCI6XCLipoZcIixcIiZyb3BmO1wiOlwi8J2Vo1wiLFwiJnJvcGx1cztcIjpcIuKorlwiLFwiJnJvdGltZXM7XCI6XCLiqLVcIixcIiZycGFyO1wiOlwiKVwiLFwiJnJwYXJndDtcIjpcIuKmlFwiLFwiJnJwcG9saW50O1wiOlwi4qiSXCIsXCImcnJhcnI7XCI6XCLih4lcIixcIiZyc2FxdW87XCI6XCLigLpcIixcIiZyc2NyO1wiOlwi8J2Th1wiLFwiJnJzaDtcIjpcIuKGsVwiLFwiJnJzcWI7XCI6XCJdXCIsXCImcnNxdW87XCI6XCLigJlcIixcIiZyc3F1b3I7XCI6XCLigJlcIixcIiZydGhyZWU7XCI6XCLii4xcIixcIiZydGltZXM7XCI6XCLii4pcIixcIiZydHJpO1wiOlwi4pa5XCIsXCImcnRyaWU7XCI6XCLiirVcIixcIiZydHJpZjtcIjpcIuKWuFwiLFwiJnJ0cmlsdHJpO1wiOlwi4qeOXCIsXCImcnVsdWhhcjtcIjpcIuKlqFwiLFwiJnJ4O1wiOlwi4oSeXCIsXCImc2FjdXRlO1wiOlwixZtcIixcIiZzYnF1bztcIjpcIuKAmlwiLFwiJnNjO1wiOlwi4om7XCIsXCImc2NFO1wiOlwi4qq0XCIsXCImc2NhcDtcIjpcIuKquFwiLFwiJnNjYXJvbjtcIjpcIsWhXCIsXCImc2NjdWU7XCI6XCLiib1cIixcIiZzY2U7XCI6XCLiqrBcIixcIiZzY2VkaWw7XCI6XCLFn1wiLFwiJnNjaXJjO1wiOlwixZ1cIixcIiZzY25FO1wiOlwi4qq2XCIsXCImc2NuYXA7XCI6XCLiqrpcIixcIiZzY25zaW07XCI6XCLii6lcIixcIiZzY3BvbGludDtcIjpcIuKok1wiLFwiJnNjc2ltO1wiOlwi4om/XCIsXCImc2N5O1wiOlwi0YFcIixcIiZzZG90O1wiOlwi4ouFXCIsXCImc2RvdGI7XCI6XCLiiqFcIixcIiZzZG90ZTtcIjpcIuKpplwiLFwiJnNlQXJyO1wiOlwi4oeYXCIsXCImc2VhcmhrO1wiOlwi4qSlXCIsXCImc2VhcnI7XCI6XCLihphcIixcIiZzZWFycm93O1wiOlwi4oaYXCIsXCImc2VjdFwiOlwiwqdcIixcIiZzZWN0O1wiOlwiwqdcIixcIiZzZW1pO1wiOlwiO1wiLFwiJnNlc3dhcjtcIjpcIuKkqVwiLFwiJnNldG1pbnVzO1wiOlwi4oiWXCIsXCImc2V0bW47XCI6XCLiiJZcIixcIiZzZXh0O1wiOlwi4py2XCIsXCImc2ZyO1wiOlwi8J2UsFwiLFwiJnNmcm93bjtcIjpcIuKMolwiLFwiJnNoYXJwO1wiOlwi4pmvXCIsXCImc2hjaGN5O1wiOlwi0YlcIixcIiZzaGN5O1wiOlwi0YhcIixcIiZzaG9ydG1pZDtcIjpcIuKIo1wiLFwiJnNob3J0cGFyYWxsZWw7XCI6XCLiiKVcIixcIiZzaHlcIjpcIsKtXCIsXCImc2h5O1wiOlwiwq1cIixcIiZzaWdtYTtcIjpcIs+DXCIsXCImc2lnbWFmO1wiOlwiz4JcIixcIiZzaWdtYXY7XCI6XCLPglwiLFwiJnNpbTtcIjpcIuKIvFwiLFwiJnNpbWRvdDtcIjpcIuKpqlwiLFwiJnNpbWU7XCI6XCLiiYNcIixcIiZzaW1lcTtcIjpcIuKJg1wiLFwiJnNpbWc7XCI6XCLiqp5cIixcIiZzaW1nRTtcIjpcIuKqoFwiLFwiJnNpbWw7XCI6XCLiqp1cIixcIiZzaW1sRTtcIjpcIuKqn1wiLFwiJnNpbW5lO1wiOlwi4omGXCIsXCImc2ltcGx1cztcIjpcIuKopFwiLFwiJnNpbXJhcnI7XCI6XCLipbJcIixcIiZzbGFycjtcIjpcIuKGkFwiLFwiJnNtYWxsc2V0bWludXM7XCI6XCLiiJZcIixcIiZzbWFzaHA7XCI6XCLiqLNcIixcIiZzbWVwYXJzbDtcIjpcIuKnpFwiLFwiJnNtaWQ7XCI6XCLiiKNcIixcIiZzbWlsZTtcIjpcIuKMo1wiLFwiJnNtdDtcIjpcIuKqqlwiLFwiJnNtdGU7XCI6XCLiqqxcIixcIiZzbXRlcztcIjpcIuKqrO+4gFwiLFwiJnNvZnRjeTtcIjpcItGMXCIsXCImc29sO1wiOlwiL1wiLFwiJnNvbGI7XCI6XCLip4RcIixcIiZzb2xiYXI7XCI6XCLijL9cIixcIiZzb3BmO1wiOlwi8J2VpFwiLFwiJnNwYWRlcztcIjpcIuKZoFwiLFwiJnNwYWRlc3VpdDtcIjpcIuKZoFwiLFwiJnNwYXI7XCI6XCLiiKVcIixcIiZzcWNhcDtcIjpcIuKKk1wiLFwiJnNxY2FwcztcIjpcIuKKk++4gFwiLFwiJnNxY3VwO1wiOlwi4oqUXCIsXCImc3FjdXBzO1wiOlwi4oqU77iAXCIsXCImc3FzdWI7XCI6XCLiio9cIixcIiZzcXN1YmU7XCI6XCLiipFcIixcIiZzcXN1YnNldDtcIjpcIuKKj1wiLFwiJnNxc3Vic2V0ZXE7XCI6XCLiipFcIixcIiZzcXN1cDtcIjpcIuKKkFwiLFwiJnNxc3VwZTtcIjpcIuKKklwiLFwiJnNxc3Vwc2V0O1wiOlwi4oqQXCIsXCImc3FzdXBzZXRlcTtcIjpcIuKKklwiLFwiJnNxdTtcIjpcIuKWoVwiLFwiJnNxdWFyZTtcIjpcIuKWoVwiLFwiJnNxdWFyZjtcIjpcIuKWqlwiLFwiJnNxdWY7XCI6XCLilqpcIixcIiZzcmFycjtcIjpcIuKGklwiLFwiJnNzY3I7XCI6XCLwnZOIXCIsXCImc3NldG1uO1wiOlwi4oiWXCIsXCImc3NtaWxlO1wiOlwi4oyjXCIsXCImc3N0YXJmO1wiOlwi4ouGXCIsXCImc3RhcjtcIjpcIuKYhlwiLFwiJnN0YXJmO1wiOlwi4piFXCIsXCImc3RyYWlnaHRlcHNpbG9uO1wiOlwiz7VcIixcIiZzdHJhaWdodHBoaTtcIjpcIs+VXCIsXCImc3RybnM7XCI6XCLCr1wiLFwiJnN1YjtcIjpcIuKKglwiLFwiJnN1YkU7XCI6XCLiq4VcIixcIiZzdWJkb3Q7XCI6XCLiqr1cIixcIiZzdWJlO1wiOlwi4oqGXCIsXCImc3ViZWRvdDtcIjpcIuKrg1wiLFwiJnN1Ym11bHQ7XCI6XCLiq4FcIixcIiZzdWJuRTtcIjpcIuKri1wiLFwiJnN1Ym5lO1wiOlwi4oqKXCIsXCImc3VicGx1cztcIjpcIuKqv1wiLFwiJnN1YnJhcnI7XCI6XCLipblcIixcIiZzdWJzZXQ7XCI6XCLiioJcIixcIiZzdWJzZXRlcTtcIjpcIuKKhlwiLFwiJnN1YnNldGVxcTtcIjpcIuKrhVwiLFwiJnN1YnNldG5lcTtcIjpcIuKKilwiLFwiJnN1YnNldG5lcXE7XCI6XCLiq4tcIixcIiZzdWJzaW07XCI6XCLiq4dcIixcIiZzdWJzdWI7XCI6XCLiq5VcIixcIiZzdWJzdXA7XCI6XCLiq5NcIixcIiZzdWNjO1wiOlwi4om7XCIsXCImc3VjY2FwcHJveDtcIjpcIuKquFwiLFwiJnN1Y2NjdXJseWVxO1wiOlwi4om9XCIsXCImc3VjY2VxO1wiOlwi4qqwXCIsXCImc3VjY25hcHByb3g7XCI6XCLiqrpcIixcIiZzdWNjbmVxcTtcIjpcIuKqtlwiLFwiJnN1Y2Nuc2ltO1wiOlwi4oupXCIsXCImc3VjY3NpbTtcIjpcIuKJv1wiLFwiJnN1bTtcIjpcIuKIkVwiLFwiJnN1bmc7XCI6XCLimapcIixcIiZzdXAxXCI6XCLCuVwiLFwiJnN1cDE7XCI6XCLCuVwiLFwiJnN1cDJcIjpcIsKyXCIsXCImc3VwMjtcIjpcIsKyXCIsXCImc3VwM1wiOlwiwrNcIixcIiZzdXAzO1wiOlwiwrNcIixcIiZzdXA7XCI6XCLiioNcIixcIiZzdXBFO1wiOlwi4quGXCIsXCImc3VwZG90O1wiOlwi4qq+XCIsXCImc3VwZHN1YjtcIjpcIuKrmFwiLFwiJnN1cGU7XCI6XCLiiodcIixcIiZzdXBlZG90O1wiOlwi4quEXCIsXCImc3VwaHNvbDtcIjpcIuKfiVwiLFwiJnN1cGhzdWI7XCI6XCLiq5dcIixcIiZzdXBsYXJyO1wiOlwi4qW7XCIsXCImc3VwbXVsdDtcIjpcIuKrglwiLFwiJnN1cG5FO1wiOlwi4quMXCIsXCImc3VwbmU7XCI6XCLiiotcIixcIiZzdXBwbHVzO1wiOlwi4quAXCIsXCImc3Vwc2V0O1wiOlwi4oqDXCIsXCImc3Vwc2V0ZXE7XCI6XCLiiodcIixcIiZzdXBzZXRlcXE7XCI6XCLiq4ZcIixcIiZzdXBzZXRuZXE7XCI6XCLiiotcIixcIiZzdXBzZXRuZXFxO1wiOlwi4quMXCIsXCImc3Vwc2ltO1wiOlwi4quIXCIsXCImc3Vwc3ViO1wiOlwi4quUXCIsXCImc3Vwc3VwO1wiOlwi4quWXCIsXCImc3dBcnI7XCI6XCLih5lcIixcIiZzd2FyaGs7XCI6XCLipKZcIixcIiZzd2FycjtcIjpcIuKGmVwiLFwiJnN3YXJyb3c7XCI6XCLihplcIixcIiZzd253YXI7XCI6XCLipKpcIixcIiZzemxpZ1wiOlwiw59cIixcIiZzemxpZztcIjpcIsOfXCIsXCImdGFyZ2V0O1wiOlwi4oyWXCIsXCImdGF1O1wiOlwiz4RcIixcIiZ0YnJrO1wiOlwi4o60XCIsXCImdGNhcm9uO1wiOlwixaVcIixcIiZ0Y2VkaWw7XCI6XCLFo1wiLFwiJnRjeTtcIjpcItGCXCIsXCImdGRvdDtcIjpcIuKDm1wiLFwiJnRlbHJlYztcIjpcIuKMlVwiLFwiJnRmcjtcIjpcIvCdlLFcIixcIiZ0aGVyZTQ7XCI6XCLiiLRcIixcIiZ0aGVyZWZvcmU7XCI6XCLiiLRcIixcIiZ0aGV0YTtcIjpcIs64XCIsXCImdGhldGFzeW07XCI6XCLPkVwiLFwiJnRoZXRhdjtcIjpcIs+RXCIsXCImdGhpY2thcHByb3g7XCI6XCLiiYhcIixcIiZ0aGlja3NpbTtcIjpcIuKIvFwiLFwiJnRoaW5zcDtcIjpcIuKAiVwiLFwiJnRoa2FwO1wiOlwi4omIXCIsXCImdGhrc2ltO1wiOlwi4oi8XCIsXCImdGhvcm5cIjpcIsO+XCIsXCImdGhvcm47XCI6XCLDvlwiLFwiJnRpbGRlO1wiOlwiy5xcIixcIiZ0aW1lc1wiOlwiw5dcIixcIiZ0aW1lcztcIjpcIsOXXCIsXCImdGltZXNiO1wiOlwi4oqgXCIsXCImdGltZXNiYXI7XCI6XCLiqLFcIixcIiZ0aW1lc2Q7XCI6XCLiqLBcIixcIiZ0aW50O1wiOlwi4oitXCIsXCImdG9lYTtcIjpcIuKkqFwiLFwiJnRvcDtcIjpcIuKKpFwiLFwiJnRvcGJvdDtcIjpcIuKMtlwiLFwiJnRvcGNpcjtcIjpcIuKrsVwiLFwiJnRvcGY7XCI6XCLwnZWlXCIsXCImdG9wZm9yaztcIjpcIuKrmlwiLFwiJnRvc2E7XCI6XCLipKlcIixcIiZ0cHJpbWU7XCI6XCLigLRcIixcIiZ0cmFkZTtcIjpcIuKEolwiLFwiJnRyaWFuZ2xlO1wiOlwi4pa1XCIsXCImdHJpYW5nbGVkb3duO1wiOlwi4pa/XCIsXCImdHJpYW5nbGVsZWZ0O1wiOlwi4peDXCIsXCImdHJpYW5nbGVsZWZ0ZXE7XCI6XCLiirRcIixcIiZ0cmlhbmdsZXE7XCI6XCLiiZxcIixcIiZ0cmlhbmdsZXJpZ2h0O1wiOlwi4pa5XCIsXCImdHJpYW5nbGVyaWdodGVxO1wiOlwi4oq1XCIsXCImdHJpZG90O1wiOlwi4pesXCIsXCImdHJpZTtcIjpcIuKJnFwiLFwiJnRyaW1pbnVzO1wiOlwi4qi6XCIsXCImdHJpcGx1cztcIjpcIuKouVwiLFwiJnRyaXNiO1wiOlwi4qeNXCIsXCImdHJpdGltZTtcIjpcIuKou1wiLFwiJnRycGV6aXVtO1wiOlwi4o+iXCIsXCImdHNjcjtcIjpcIvCdk4lcIixcIiZ0c2N5O1wiOlwi0YZcIixcIiZ0c2hjeTtcIjpcItGbXCIsXCImdHN0cm9rO1wiOlwixadcIixcIiZ0d2l4dDtcIjpcIuKJrFwiLFwiJnR3b2hlYWRsZWZ0YXJyb3c7XCI6XCLihp5cIixcIiZ0d29oZWFkcmlnaHRhcnJvdztcIjpcIuKGoFwiLFwiJnVBcnI7XCI6XCLih5FcIixcIiZ1SGFyO1wiOlwi4qWjXCIsXCImdWFjdXRlXCI6XCLDulwiLFwiJnVhY3V0ZTtcIjpcIsO6XCIsXCImdWFycjtcIjpcIuKGkVwiLFwiJnVicmN5O1wiOlwi0Z5cIixcIiZ1YnJldmU7XCI6XCLFrVwiLFwiJnVjaXJjXCI6XCLDu1wiLFwiJnVjaXJjO1wiOlwiw7tcIixcIiZ1Y3k7XCI6XCLRg1wiLFwiJnVkYXJyO1wiOlwi4oeFXCIsXCImdWRibGFjO1wiOlwixbFcIixcIiZ1ZGhhcjtcIjpcIuKlrlwiLFwiJnVmaXNodDtcIjpcIuKlvlwiLFwiJnVmcjtcIjpcIvCdlLJcIixcIiZ1Z3JhdmVcIjpcIsO5XCIsXCImdWdyYXZlO1wiOlwiw7lcIixcIiZ1aGFybDtcIjpcIuKGv1wiLFwiJnVoYXJyO1wiOlwi4oa+XCIsXCImdWhibGs7XCI6XCLiloBcIixcIiZ1bGNvcm47XCI6XCLijJxcIixcIiZ1bGNvcm5lcjtcIjpcIuKMnFwiLFwiJnVsY3JvcDtcIjpcIuKMj1wiLFwiJnVsdHJpO1wiOlwi4pe4XCIsXCImdW1hY3I7XCI6XCLFq1wiLFwiJnVtbFwiOlwiwqhcIixcIiZ1bWw7XCI6XCLCqFwiLFwiJnVvZ29uO1wiOlwixbNcIixcIiZ1b3BmO1wiOlwi8J2VplwiLFwiJnVwYXJyb3c7XCI6XCLihpFcIixcIiZ1cGRvd25hcnJvdztcIjpcIuKGlVwiLFwiJnVwaGFycG9vbmxlZnQ7XCI6XCLihr9cIixcIiZ1cGhhcnBvb25yaWdodDtcIjpcIuKGvlwiLFwiJnVwbHVzO1wiOlwi4oqOXCIsXCImdXBzaTtcIjpcIs+FXCIsXCImdXBzaWg7XCI6XCLPklwiLFwiJnVwc2lsb247XCI6XCLPhVwiLFwiJnVwdXBhcnJvd3M7XCI6XCLih4hcIixcIiZ1cmNvcm47XCI6XCLijJ1cIixcIiZ1cmNvcm5lcjtcIjpcIuKMnVwiLFwiJnVyY3JvcDtcIjpcIuKMjlwiLFwiJnVyaW5nO1wiOlwixa9cIixcIiZ1cnRyaTtcIjpcIuKXuVwiLFwiJnVzY3I7XCI6XCLwnZOKXCIsXCImdXRkb3Q7XCI6XCLii7BcIixcIiZ1dGlsZGU7XCI6XCLFqVwiLFwiJnV0cmk7XCI6XCLilrVcIixcIiZ1dHJpZjtcIjpcIuKWtFwiLFwiJnV1YXJyO1wiOlwi4oeIXCIsXCImdXVtbFwiOlwiw7xcIixcIiZ1dW1sO1wiOlwiw7xcIixcIiZ1d2FuZ2xlO1wiOlwi4qanXCIsXCImdkFycjtcIjpcIuKHlVwiLFwiJnZCYXI7XCI6XCLiq6hcIixcIiZ2QmFydjtcIjpcIuKrqVwiLFwiJnZEYXNoO1wiOlwi4oqoXCIsXCImdmFuZ3J0O1wiOlwi4qacXCIsXCImdmFyZXBzaWxvbjtcIjpcIs+1XCIsXCImdmFya2FwcGE7XCI6XCLPsFwiLFwiJnZhcm5vdGhpbmc7XCI6XCLiiIVcIixcIiZ2YXJwaGk7XCI6XCLPlVwiLFwiJnZhcnBpO1wiOlwiz5ZcIixcIiZ2YXJwcm9wdG87XCI6XCLiiJ1cIixcIiZ2YXJyO1wiOlwi4oaVXCIsXCImdmFycmhvO1wiOlwiz7FcIixcIiZ2YXJzaWdtYTtcIjpcIs+CXCIsXCImdmFyc3Vic2V0bmVxO1wiOlwi4oqK77iAXCIsXCImdmFyc3Vic2V0bmVxcTtcIjpcIuKri++4gFwiLFwiJnZhcnN1cHNldG5lcTtcIjpcIuKKi++4gFwiLFwiJnZhcnN1cHNldG5lcXE7XCI6XCLiq4zvuIBcIixcIiZ2YXJ0aGV0YTtcIjpcIs+RXCIsXCImdmFydHJpYW5nbGVsZWZ0O1wiOlwi4oqyXCIsXCImdmFydHJpYW5nbGVyaWdodDtcIjpcIuKKs1wiLFwiJnZjeTtcIjpcItCyXCIsXCImdmRhc2g7XCI6XCLiiqJcIixcIiZ2ZWU7XCI6XCLiiKhcIixcIiZ2ZWViYXI7XCI6XCLiirtcIixcIiZ2ZWVlcTtcIjpcIuKJmlwiLFwiJnZlbGxpcDtcIjpcIuKLrlwiLFwiJnZlcmJhcjtcIjpcInxcIixcIiZ2ZXJ0O1wiOlwifFwiLFwiJnZmcjtcIjpcIvCdlLNcIixcIiZ2bHRyaTtcIjpcIuKKslwiLFwiJnZuc3ViO1wiOlwi4oqC4oOSXCIsXCImdm5zdXA7XCI6XCLiioPig5JcIixcIiZ2b3BmO1wiOlwi8J2Vp1wiLFwiJnZwcm9wO1wiOlwi4oidXCIsXCImdnJ0cmk7XCI6XCLiirNcIixcIiZ2c2NyO1wiOlwi8J2Ti1wiLFwiJnZzdWJuRTtcIjpcIuKri++4gFwiLFwiJnZzdWJuZTtcIjpcIuKKiu+4gFwiLFwiJnZzdXBuRTtcIjpcIuKrjO+4gFwiLFwiJnZzdXBuZTtcIjpcIuKKi++4gFwiLFwiJnZ6aWd6YWc7XCI6XCLipppcIixcIiZ3Y2lyYztcIjpcIsW1XCIsXCImd2VkYmFyO1wiOlwi4qmfXCIsXCImd2VkZ2U7XCI6XCLiiKdcIixcIiZ3ZWRnZXE7XCI6XCLiiZlcIixcIiZ3ZWllcnA7XCI6XCLihJhcIixcIiZ3ZnI7XCI6XCLwnZS0XCIsXCImd29wZjtcIjpcIvCdlahcIixcIiZ3cDtcIjpcIuKEmFwiLFwiJndyO1wiOlwi4omAXCIsXCImd3JlYXRoO1wiOlwi4omAXCIsXCImd3NjcjtcIjpcIvCdk4xcIixcIiZ4Y2FwO1wiOlwi4ouCXCIsXCImeGNpcmM7XCI6XCLil69cIixcIiZ4Y3VwO1wiOlwi4ouDXCIsXCImeGR0cmk7XCI6XCLilr1cIixcIiZ4ZnI7XCI6XCLwnZS1XCIsXCImeGhBcnI7XCI6XCLin7pcIixcIiZ4aGFycjtcIjpcIuKft1wiLFwiJnhpO1wiOlwizr5cIixcIiZ4bEFycjtcIjpcIuKfuFwiLFwiJnhsYXJyO1wiOlwi4p+1XCIsXCImeG1hcDtcIjpcIuKfvFwiLFwiJnhuaXM7XCI6XCLii7tcIixcIiZ4b2RvdDtcIjpcIuKogFwiLFwiJnhvcGY7XCI6XCLwnZWpXCIsXCImeG9wbHVzO1wiOlwi4qiBXCIsXCImeG90aW1lO1wiOlwi4qiCXCIsXCImeHJBcnI7XCI6XCLin7lcIixcIiZ4cmFycjtcIjpcIuKftlwiLFwiJnhzY3I7XCI6XCLwnZONXCIsXCImeHNxY3VwO1wiOlwi4qiGXCIsXCImeHVwbHVzO1wiOlwi4qiEXCIsXCImeHV0cmk7XCI6XCLilrNcIixcIiZ4dmVlO1wiOlwi4ouBXCIsXCImeHdlZGdlO1wiOlwi4ouAXCIsXCImeWFjdXRlXCI6XCLDvVwiLFwiJnlhY3V0ZTtcIjpcIsO9XCIsXCImeWFjeTtcIjpcItGPXCIsXCImeWNpcmM7XCI6XCLFt1wiLFwiJnljeTtcIjpcItGLXCIsXCImeWVuXCI6XCLCpVwiLFwiJnllbjtcIjpcIsKlXCIsXCImeWZyO1wiOlwi8J2UtlwiLFwiJnlpY3k7XCI6XCLRl1wiLFwiJnlvcGY7XCI6XCLwnZWqXCIsXCImeXNjcjtcIjpcIvCdk45cIixcIiZ5dWN5O1wiOlwi0Y5cIixcIiZ5dW1sXCI6XCLDv1wiLFwiJnl1bWw7XCI6XCLDv1wiLFwiJnphY3V0ZTtcIjpcIsW6XCIsXCImemNhcm9uO1wiOlwixb5cIixcIiZ6Y3k7XCI6XCLQt1wiLFwiJnpkb3Q7XCI6XCLFvFwiLFwiJnplZXRyZjtcIjpcIuKEqFwiLFwiJnpldGE7XCI6XCLOtlwiLFwiJnpmcjtcIjpcIvCdlLdcIixcIiZ6aGN5O1wiOlwi0LZcIixcIiZ6aWdyYXJyO1wiOlwi4oedXCIsXCImem9wZjtcIjpcIvCdlatcIixcIiZ6c2NyO1wiOlwi8J2Tj1wiLFwiJnp3ajtcIjpcIuKAjVwiLFwiJnp3bmo7XCI6XCLigIxcIn0sY2hhcmFjdGVyczp7XCLDhlwiOlwiJkFFbGlnO1wiLFwiJlwiOlwiJmFtcDtcIixcIsOBXCI6XCImQWFjdXRlO1wiLFwixIJcIjpcIiZBYnJldmU7XCIsXCLDglwiOlwiJkFjaXJjO1wiLFwi0JBcIjpcIiZBY3k7XCIsXCLwnZSEXCI6XCImQWZyO1wiLFwiw4BcIjpcIiZBZ3JhdmU7XCIsXCLOkVwiOlwiJkFscGhhO1wiLFwixIBcIjpcIiZBbWFjcjtcIixcIuKpk1wiOlwiJkFuZDtcIixcIsSEXCI6XCImQW9nb247XCIsXCLwnZS4XCI6XCImQW9wZjtcIixcIuKBoVwiOlwiJmFmO1wiLFwiw4VcIjpcIiZhbmdzdDtcIixcIvCdkpxcIjpcIiZBc2NyO1wiLFwi4omUXCI6XCImY29sb25lcTtcIixcIsODXCI6XCImQXRpbGRlO1wiLFwiw4RcIjpcIiZBdW1sO1wiLFwi4oiWXCI6XCImc3NldG1uO1wiLFwi4qunXCI6XCImQmFydjtcIixcIuKMhlwiOlwiJmRvdWJsZWJhcndlZGdlO1wiLFwi0JFcIjpcIiZCY3k7XCIsXCLiiLVcIjpcIiZiZWNhdXNlO1wiLFwi4oSsXCI6XCImYmVybm91O1wiLFwizpJcIjpcIiZCZXRhO1wiLFwi8J2UhVwiOlwiJkJmcjtcIixcIvCdlLlcIjpcIiZCb3BmO1wiLFwiy5hcIjpcIiZicmV2ZTtcIixcIuKJjlwiOlwiJmJ1bXA7XCIsXCLQp1wiOlwiJkNIY3k7XCIsXCLCqVwiOlwiJmNvcHk7XCIsXCLEhlwiOlwiJkNhY3V0ZTtcIixcIuKLklwiOlwiJkNhcDtcIixcIuKFhVwiOlwiJkREO1wiLFwi4oStXCI6XCImQ2ZyO1wiLFwixIxcIjpcIiZDY2Fyb247XCIsXCLDh1wiOlwiJkNjZWRpbDtcIixcIsSIXCI6XCImQ2NpcmM7XCIsXCLiiLBcIjpcIiZDY29uaW50O1wiLFwixIpcIjpcIiZDZG90O1wiLFwiwrhcIjpcIiZjZWRpbDtcIixcIsK3XCI6XCImbWlkZG90O1wiLFwizqdcIjpcIiZDaGk7XCIsXCLiiplcIjpcIiZvZG90O1wiLFwi4oqWXCI6XCImb21pbnVzO1wiLFwi4oqVXCI6XCImb3BsdXM7XCIsXCLiipdcIjpcIiZvdGltZXM7XCIsXCLiiLJcIjpcIiZjd2NvbmludDtcIixcIuKAnVwiOlwiJnJkcXVvcjtcIixcIuKAmVwiOlwiJnJzcXVvcjtcIixcIuKIt1wiOlwiJlByb3BvcnRpb247XCIsXCLiqbRcIjpcIiZDb2xvbmU7XCIsXCLiiaFcIjpcIiZlcXVpdjtcIixcIuKIr1wiOlwiJkRvdWJsZUNvbnRvdXJJbnRlZ3JhbDtcIixcIuKIrlwiOlwiJm9pbnQ7XCIsXCLihIJcIjpcIiZjb21wbGV4ZXM7XCIsXCLiiJBcIjpcIiZjb3Byb2Q7XCIsXCLiiLNcIjpcIiZhd2NvbmludDtcIixcIuKor1wiOlwiJkNyb3NzO1wiLFwi8J2SnlwiOlwiJkNzY3I7XCIsXCLii5NcIjpcIiZDdXA7XCIsXCLiiY1cIjpcIiZhc3ltcGVxO1wiLFwi4qSRXCI6XCImRERvdHJhaGQ7XCIsXCLQglwiOlwiJkRKY3k7XCIsXCLQhVwiOlwiJkRTY3k7XCIsXCLQj1wiOlwiJkRaY3k7XCIsXCLigKFcIjpcIiZkZGFnZ2VyO1wiLFwi4oahXCI6XCImRGFycjtcIixcIuKrpFwiOlwiJkRvdWJsZUxlZnRUZWU7XCIsXCLEjlwiOlwiJkRjYXJvbjtcIixcItCUXCI6XCImRGN5O1wiLFwi4oiHXCI6XCImbmFibGE7XCIsXCLOlFwiOlwiJkRlbHRhO1wiLFwi8J2Uh1wiOlwiJkRmcjtcIixcIsK0XCI6XCImYWN1dGU7XCIsXCLLmVwiOlwiJmRvdDtcIixcIsudXCI6XCImZGJsYWM7XCIsXCJgXCI6XCImZ3JhdmU7XCIsXCLLnFwiOlwiJnRpbGRlO1wiLFwi4ouEXCI6XCImZGlhbW9uZDtcIixcIuKFhlwiOlwiJmRkO1wiLFwi8J2Uu1wiOlwiJkRvcGY7XCIsXCLCqFwiOlwiJnVtbDtcIixcIuKDnFwiOlwiJkRvdERvdDtcIixcIuKJkFwiOlwiJmVzZG90O1wiLFwi4oeTXCI6XCImZEFycjtcIixcIuKHkFwiOlwiJmxBcnI7XCIsXCLih5RcIjpcIiZpZmY7XCIsXCLin7hcIjpcIiZ4bEFycjtcIixcIuKfulwiOlwiJnhoQXJyO1wiLFwi4p+5XCI6XCImeHJBcnI7XCIsXCLih5JcIjpcIiZyQXJyO1wiLFwi4oqoXCI6XCImdkRhc2g7XCIsXCLih5FcIjpcIiZ1QXJyO1wiLFwi4oeVXCI6XCImdkFycjtcIixcIuKIpVwiOlwiJnNwYXI7XCIsXCLihpNcIjpcIiZkb3duYXJyb3c7XCIsXCLipJNcIjpcIiZEb3duQXJyb3dCYXI7XCIsXCLih7VcIjpcIiZkdWFycjtcIixcIsyRXCI6XCImRG93bkJyZXZlO1wiLFwi4qWQXCI6XCImRG93bkxlZnRSaWdodFZlY3RvcjtcIixcIuKlnlwiOlwiJkRvd25MZWZ0VGVlVmVjdG9yO1wiLFwi4oa9XCI6XCImbGhhcmQ7XCIsXCLipZZcIjpcIiZEb3duTGVmdFZlY3RvckJhcjtcIixcIuKln1wiOlwiJkRvd25SaWdodFRlZVZlY3RvcjtcIixcIuKHgVwiOlwiJnJpZ2h0aGFycG9vbmRvd247XCIsXCLipZdcIjpcIiZEb3duUmlnaHRWZWN0b3JCYXI7XCIsXCLiiqRcIjpcIiZ0b3A7XCIsXCLihqdcIjpcIiZtYXBzdG9kb3duO1wiLFwi8J2Sn1wiOlwiJkRzY3I7XCIsXCLEkFwiOlwiJkRzdHJvaztcIixcIsWKXCI6XCImRU5HO1wiLFwiw5BcIjpcIiZFVEg7XCIsXCLDiVwiOlwiJkVhY3V0ZTtcIixcIsSaXCI6XCImRWNhcm9uO1wiLFwiw4pcIjpcIiZFY2lyYztcIixcItCtXCI6XCImRWN5O1wiLFwixJZcIjpcIiZFZG90O1wiLFwi8J2UiFwiOlwiJkVmcjtcIixcIsOIXCI6XCImRWdyYXZlO1wiLFwi4oiIXCI6XCImaXNpbnY7XCIsXCLEklwiOlwiJkVtYWNyO1wiLFwi4pe7XCI6XCImRW1wdHlTbWFsbFNxdWFyZTtcIixcIuKWq1wiOlwiJkVtcHR5VmVyeVNtYWxsU3F1YXJlO1wiLFwixJhcIjpcIiZFb2dvbjtcIixcIvCdlLxcIjpcIiZFb3BmO1wiLFwizpVcIjpcIiZFcHNpbG9uO1wiLFwi4qm1XCI6XCImRXF1YWw7XCIsXCLiiYJcIjpcIiZlc2ltO1wiLFwi4oeMXCI6XCImcmxoYXI7XCIsXCLihLBcIjpcIiZleHBlY3RhdGlvbjtcIixcIuKps1wiOlwiJkVzaW07XCIsXCLOl1wiOlwiJkV0YTtcIixcIsOLXCI6XCImRXVtbDtcIixcIuKIg1wiOlwiJmV4aXN0O1wiLFwi4oWHXCI6XCImZXhwb25lbnRpYWxlO1wiLFwi0KRcIjpcIiZGY3k7XCIsXCLwnZSJXCI6XCImRmZyO1wiLFwi4pe8XCI6XCImRmlsbGVkU21hbGxTcXVhcmU7XCIsXCLilqpcIjpcIiZzcXVmO1wiLFwi8J2UvVwiOlwiJkZvcGY7XCIsXCLiiIBcIjpcIiZmb3JhbGw7XCIsXCLihLFcIjpcIiZGc2NyO1wiLFwi0INcIjpcIiZHSmN5O1wiLFwiPlwiOlwiJmd0O1wiLFwizpNcIjpcIiZHYW1tYTtcIixcIs+cXCI6XCImR2FtbWFkO1wiLFwixJ5cIjpcIiZHYnJldmU7XCIsXCLEolwiOlwiJkdjZWRpbDtcIixcIsScXCI6XCImR2NpcmM7XCIsXCLQk1wiOlwiJkdjeTtcIixcIsSgXCI6XCImR2RvdDtcIixcIvCdlIpcIjpcIiZHZnI7XCIsXCLii5lcIjpcIiZnZ2c7XCIsXCLwnZS+XCI6XCImR29wZjtcIixcIuKJpVwiOlwiJmdlcTtcIixcIuKLm1wiOlwiJmd0cmVxbGVzcztcIixcIuKJp1wiOlwiJmdlcXE7XCIsXCLiqqJcIjpcIiZHcmVhdGVyR3JlYXRlcjtcIixcIuKJt1wiOlwiJmd0cmxlc3M7XCIsXCLiqb5cIjpcIiZnZXM7XCIsXCLiibNcIjpcIiZndHJzaW07XCIsXCLwnZKiXCI6XCImR3NjcjtcIixcIuKJq1wiOlwiJmdnO1wiLFwi0KpcIjpcIiZIQVJEY3k7XCIsXCLLh1wiOlwiJmNhcm9uO1wiLFwiXlwiOlwiJkhhdDtcIixcIsSkXCI6XCImSGNpcmM7XCIsXCLihIxcIjpcIiZQb2luY2FyZXBsYW5lO1wiLFwi4oSLXCI6XCImaGFtaWx0O1wiLFwi4oSNXCI6XCImcXVhdGVybmlvbnM7XCIsXCLilIBcIjpcIiZib3hoO1wiLFwixKZcIjpcIiZIc3Ryb2s7XCIsXCLiiY9cIjpcIiZidW1wZXE7XCIsXCLQlVwiOlwiJklFY3k7XCIsXCLEslwiOlwiJklKbGlnO1wiLFwi0IFcIjpcIiZJT2N5O1wiLFwiw41cIjpcIiZJYWN1dGU7XCIsXCLDjlwiOlwiJkljaXJjO1wiLFwi0JhcIjpcIiZJY3k7XCIsXCLEsFwiOlwiJklkb3Q7XCIsXCLihJFcIjpcIiZpbWFncGFydDtcIixcIsOMXCI6XCImSWdyYXZlO1wiLFwixKpcIjpcIiZJbWFjcjtcIixcIuKFiFwiOlwiJmlpO1wiLFwi4oisXCI6XCImSW50O1wiLFwi4oirXCI6XCImaW50O1wiLFwi4ouCXCI6XCImeGNhcDtcIixcIuKBo1wiOlwiJmljO1wiLFwi4oGiXCI6XCImaXQ7XCIsXCLErlwiOlwiJklvZ29uO1wiLFwi8J2VgFwiOlwiJklvcGY7XCIsXCLOmVwiOlwiJklvdGE7XCIsXCLihJBcIjpcIiZpbWFnbGluZTtcIixcIsSoXCI6XCImSXRpbGRlO1wiLFwi0IZcIjpcIiZJdWtjeTtcIixcIsOPXCI6XCImSXVtbDtcIixcIsS0XCI6XCImSmNpcmM7XCIsXCLQmVwiOlwiJkpjeTtcIixcIvCdlI1cIjpcIiZKZnI7XCIsXCLwnZWBXCI6XCImSm9wZjtcIixcIvCdkqVcIjpcIiZKc2NyO1wiLFwi0IhcIjpcIiZKc2VyY3k7XCIsXCLQhFwiOlwiJkp1a2N5O1wiLFwi0KVcIjpcIiZLSGN5O1wiLFwi0IxcIjpcIiZLSmN5O1wiLFwizppcIjpcIiZLYXBwYTtcIixcIsS2XCI6XCImS2NlZGlsO1wiLFwi0JpcIjpcIiZLY3k7XCIsXCLwnZSOXCI6XCImS2ZyO1wiLFwi8J2VglwiOlwiJktvcGY7XCIsXCLwnZKmXCI6XCImS3NjcjtcIixcItCJXCI6XCImTEpjeTtcIixcIjxcIjpcIiZsdDtcIixcIsS5XCI6XCImTGFjdXRlO1wiLFwizptcIjpcIiZMYW1iZGE7XCIsXCLin6pcIjpcIiZMYW5nO1wiLFwi4oSSXCI6XCImbGFncmFuO1wiLFwi4oaeXCI6XCImdHdvaGVhZGxlZnRhcnJvdztcIixcIsS9XCI6XCImTGNhcm9uO1wiLFwixLtcIjpcIiZMY2VkaWw7XCIsXCLQm1wiOlwiJkxjeTtcIixcIuKfqFwiOlwiJmxhbmdsZTtcIixcIuKGkFwiOlwiJnNsYXJyO1wiLFwi4oekXCI6XCImbGFycmI7XCIsXCLih4ZcIjpcIiZscmFycjtcIixcIuKMiFwiOlwiJmxjZWlsO1wiLFwi4p+mXCI6XCImbG9icms7XCIsXCLipaFcIjpcIiZMZWZ0RG93blRlZVZlY3RvcjtcIixcIuKHg1wiOlwiJmRvd25oYXJwb29ubGVmdDtcIixcIuKlmVwiOlwiJkxlZnREb3duVmVjdG9yQmFyO1wiLFwi4oyKXCI6XCImbGZsb29yO1wiLFwi4oaUXCI6XCImbGVmdHJpZ2h0YXJyb3c7XCIsXCLipY5cIjpcIiZMZWZ0UmlnaHRWZWN0b3I7XCIsXCLiiqNcIjpcIiZkYXNodjtcIixcIuKGpFwiOlwiJm1hcHN0b2xlZnQ7XCIsXCLipZpcIjpcIiZMZWZ0VGVlVmVjdG9yO1wiLFwi4oqyXCI6XCImdmx0cmk7XCIsXCLip49cIjpcIiZMZWZ0VHJpYW5nbGVCYXI7XCIsXCLiirRcIjpcIiZ0cmlhbmdsZWxlZnRlcTtcIixcIuKlkVwiOlwiJkxlZnRVcERvd25WZWN0b3I7XCIsXCLipaBcIjpcIiZMZWZ0VXBUZWVWZWN0b3I7XCIsXCLihr9cIjpcIiZ1cGhhcnBvb25sZWZ0O1wiLFwi4qWYXCI6XCImTGVmdFVwVmVjdG9yQmFyO1wiLFwi4oa8XCI6XCImbGhhcnU7XCIsXCLipZJcIjpcIiZMZWZ0VmVjdG9yQmFyO1wiLFwi4ouaXCI6XCImbGVzc2VxZ3RyO1wiLFwi4ommXCI6XCImbGVxcTtcIixcIuKJtlwiOlwiJmxnO1wiLFwi4qqhXCI6XCImTGVzc0xlc3M7XCIsXCLiqb1cIjpcIiZsZXM7XCIsXCLiibJcIjpcIiZsc2ltO1wiLFwi8J2Uj1wiOlwiJkxmcjtcIixcIuKLmFwiOlwiJkxsO1wiLFwi4oeaXCI6XCImbEFhcnI7XCIsXCLEv1wiOlwiJkxtaWRvdDtcIixcIuKftVwiOlwiJnhsYXJyO1wiLFwi4p+3XCI6XCImeGhhcnI7XCIsXCLin7ZcIjpcIiZ4cmFycjtcIixcIvCdlYNcIjpcIiZMb3BmO1wiLFwi4oaZXCI6XCImc3dhcnJvdztcIixcIuKGmFwiOlwiJnNlYXJyb3c7XCIsXCLihrBcIjpcIiZsc2g7XCIsXCLFgVwiOlwiJkxzdHJvaztcIixcIuKJqlwiOlwiJmxsO1wiLFwi4qSFXCI6XCImTWFwO1wiLFwi0JxcIjpcIiZNY3k7XCIsXCLigZ9cIjpcIiZNZWRpdW1TcGFjZTtcIixcIuKEs1wiOlwiJnBobW1hdDtcIixcIvCdlJBcIjpcIiZNZnI7XCIsXCLiiJNcIjpcIiZtcDtcIixcIvCdlYRcIjpcIiZNb3BmO1wiLFwizpxcIjpcIiZNdTtcIixcItCKXCI6XCImTkpjeTtcIixcIsWDXCI6XCImTmFjdXRlO1wiLFwixYdcIjpcIiZOY2Fyb247XCIsXCLFhVwiOlwiJk5jZWRpbDtcIixcItCdXCI6XCImTmN5O1wiLFwi4oCLXCI6XCImWmVyb1dpZHRoU3BhY2U7XCIsXCJcXG5cIjpcIiZOZXdMaW5lO1wiLFwi8J2UkVwiOlwiJk5mcjtcIixcIuKBoFwiOlwiJk5vQnJlYWs7XCIsXCLCoFwiOlwiJm5ic3A7XCIsXCLihJVcIjpcIiZuYXR1cmFscztcIixcIuKrrFwiOlwiJk5vdDtcIixcIuKJolwiOlwiJm5lcXVpdjtcIixcIuKJrVwiOlwiJk5vdEN1cENhcDtcIixcIuKIplwiOlwiJm5zcGFyO1wiLFwi4oiJXCI6XCImbm90aW52YTtcIixcIuKJoFwiOlwiJm5lO1wiLFwi4omCzLhcIjpcIiZuZXNpbTtcIixcIuKIhFwiOlwiJm5leGlzdHM7XCIsXCLiia9cIjpcIiZuZ3RyO1wiLFwi4omxXCI6XCImbmdlcTtcIixcIuKJp8y4XCI6XCImbmdlcXE7XCIsXCLiiavMuFwiOlwiJm5HdHY7XCIsXCLiiblcIjpcIiZudGdsO1wiLFwi4qm+zLhcIjpcIiZuZ2VzO1wiLFwi4om1XCI6XCImbmdzaW07XCIsXCLiiY7MuFwiOlwiJm5idW1wO1wiLFwi4omPzLhcIjpcIiZuYnVtcGU7XCIsXCLii6pcIjpcIiZudHJpYW5nbGVsZWZ0O1wiLFwi4qePzLhcIjpcIiZOb3RMZWZ0VHJpYW5nbGVCYXI7XCIsXCLii6xcIjpcIiZudHJpYW5nbGVsZWZ0ZXE7XCIsXCLiia5cIjpcIiZubHQ7XCIsXCLiibBcIjpcIiZubGVxO1wiLFwi4om4XCI6XCImbnRsZztcIixcIuKJqsy4XCI6XCImbkx0djtcIixcIuKpvcy4XCI6XCImbmxlcztcIixcIuKJtFwiOlwiJm5sc2ltO1wiLFwi4qqizLhcIjpcIiZOb3ROZXN0ZWRHcmVhdGVyR3JlYXRlcjtcIixcIuKqocy4XCI6XCImTm90TmVzdGVkTGVzc0xlc3M7XCIsXCLiioBcIjpcIiZucHJlYztcIixcIuKqr8y4XCI6XCImbnByZWNlcTtcIixcIuKLoFwiOlwiJm5wcmN1ZTtcIixcIuKIjFwiOlwiJm5vdG5pdmE7XCIsXCLii6tcIjpcIiZudHJpYW5nbGVyaWdodDtcIixcIuKnkMy4XCI6XCImTm90UmlnaHRUcmlhbmdsZUJhcjtcIixcIuKLrVwiOlwiJm50cmlhbmdsZXJpZ2h0ZXE7XCIsXCLiio/MuFwiOlwiJk5vdFNxdWFyZVN1YnNldDtcIixcIuKLolwiOlwiJm5zcXN1YmU7XCIsXCLiipDMuFwiOlwiJk5vdFNxdWFyZVN1cGVyc2V0O1wiLFwi4oujXCI6XCImbnNxc3VwZTtcIixcIuKKguKDklwiOlwiJnZuc3ViO1wiLFwi4oqIXCI6XCImbnN1YnNldGVxO1wiLFwi4oqBXCI6XCImbnN1Y2M7XCIsXCLiqrDMuFwiOlwiJm5zdWNjZXE7XCIsXCLii6FcIjpcIiZuc2NjdWU7XCIsXCLiib/MuFwiOlwiJk5vdFN1Y2NlZWRzVGlsZGU7XCIsXCLiioPig5JcIjpcIiZ2bnN1cDtcIixcIuKKiVwiOlwiJm5zdXBzZXRlcTtcIixcIuKJgVwiOlwiJm5zaW07XCIsXCLiiYRcIjpcIiZuc2ltZXE7XCIsXCLiiYdcIjpcIiZuY29uZztcIixcIuKJiVwiOlwiJm5hcHByb3g7XCIsXCLiiKRcIjpcIiZuc21pZDtcIixcIvCdkqlcIjpcIiZOc2NyO1wiLFwiw5FcIjpcIiZOdGlsZGU7XCIsXCLOnVwiOlwiJk51O1wiLFwixZJcIjpcIiZPRWxpZztcIixcIsOTXCI6XCImT2FjdXRlO1wiLFwiw5RcIjpcIiZPY2lyYztcIixcItCeXCI6XCImT2N5O1wiLFwixZBcIjpcIiZPZGJsYWM7XCIsXCLwnZSSXCI6XCImT2ZyO1wiLFwiw5JcIjpcIiZPZ3JhdmU7XCIsXCLFjFwiOlwiJk9tYWNyO1wiLFwizqlcIjpcIiZvaG07XCIsXCLOn1wiOlwiJk9taWNyb247XCIsXCLwnZWGXCI6XCImT29wZjtcIixcIuKAnFwiOlwiJmxkcXVvO1wiLFwi4oCYXCI6XCImbHNxdW87XCIsXCLiqZRcIjpcIiZPcjtcIixcIvCdkqpcIjpcIiZPc2NyO1wiLFwiw5hcIjpcIiZPc2xhc2g7XCIsXCLDlVwiOlwiJk90aWxkZTtcIixcIuKot1wiOlwiJk90aW1lcztcIixcIsOWXCI6XCImT3VtbDtcIixcIuKAvlwiOlwiJm9saW5lO1wiLFwi4o+eXCI6XCImT3ZlckJyYWNlO1wiLFwi4o60XCI6XCImdGJyaztcIixcIuKPnFwiOlwiJk92ZXJQYXJlbnRoZXNpcztcIixcIuKIglwiOlwiJnBhcnQ7XCIsXCLQn1wiOlwiJlBjeTtcIixcIvCdlJNcIjpcIiZQZnI7XCIsXCLOplwiOlwiJlBoaTtcIixcIs6gXCI6XCImUGk7XCIsXCLCsVwiOlwiJnBtO1wiLFwi4oSZXCI6XCImcHJpbWVzO1wiLFwi4qq7XCI6XCImUHI7XCIsXCLiibpcIjpcIiZwcmVjO1wiLFwi4qqvXCI6XCImcHJlY2VxO1wiLFwi4om8XCI6XCImcHJlY2N1cmx5ZXE7XCIsXCLiib5cIjpcIiZwcnNpbTtcIixcIuKAs1wiOlwiJlByaW1lO1wiLFwi4oiPXCI6XCImcHJvZDtcIixcIuKInVwiOlwiJnZwcm9wO1wiLFwi8J2Sq1wiOlwiJlBzY3I7XCIsXCLOqFwiOlwiJlBzaTtcIiwnXCInOlwiJnF1b3Q7XCIsXCLwnZSUXCI6XCImUWZyO1wiLFwi4oSaXCI6XCImcmF0aW9uYWxzO1wiLFwi8J2SrFwiOlwiJlFzY3I7XCIsXCLipJBcIjpcIiZkcmJrYXJvdztcIixcIsKuXCI6XCImcmVnO1wiLFwixZRcIjpcIiZSYWN1dGU7XCIsXCLin6tcIjpcIiZSYW5nO1wiLFwi4oagXCI6XCImdHdvaGVhZHJpZ2h0YXJyb3c7XCIsXCLipJZcIjpcIiZSYXJydGw7XCIsXCLFmFwiOlwiJlJjYXJvbjtcIixcIsWWXCI6XCImUmNlZGlsO1wiLFwi0KBcIjpcIiZSY3k7XCIsXCLihJxcIjpcIiZyZWFscGFydDtcIixcIuKIi1wiOlwiJm5pdjtcIixcIuKHi1wiOlwiJmxyaGFyO1wiLFwi4qWvXCI6XCImZHVoYXI7XCIsXCLOoVwiOlwiJlJobztcIixcIuKfqVwiOlwiJnJhbmdsZTtcIixcIuKGklwiOlwiJnNyYXJyO1wiLFwi4oelXCI6XCImcmFycmI7XCIsXCLih4RcIjpcIiZybGFycjtcIixcIuKMiVwiOlwiJnJjZWlsO1wiLFwi4p+nXCI6XCImcm9icms7XCIsXCLipZ1cIjpcIiZSaWdodERvd25UZWVWZWN0b3I7XCIsXCLih4JcIjpcIiZkb3duaGFycG9vbnJpZ2h0O1wiLFwi4qWVXCI6XCImUmlnaHREb3duVmVjdG9yQmFyO1wiLFwi4oyLXCI6XCImcmZsb29yO1wiLFwi4oqiXCI6XCImdmRhc2g7XCIsXCLihqZcIjpcIiZtYXBzdG87XCIsXCLipZtcIjpcIiZSaWdodFRlZVZlY3RvcjtcIixcIuKKs1wiOlwiJnZydHJpO1wiLFwi4qeQXCI6XCImUmlnaHRUcmlhbmdsZUJhcjtcIixcIuKKtVwiOlwiJnRyaWFuZ2xlcmlnaHRlcTtcIixcIuKlj1wiOlwiJlJpZ2h0VXBEb3duVmVjdG9yO1wiLFwi4qWcXCI6XCImUmlnaHRVcFRlZVZlY3RvcjtcIixcIuKGvlwiOlwiJnVwaGFycG9vbnJpZ2h0O1wiLFwi4qWUXCI6XCImUmlnaHRVcFZlY3RvckJhcjtcIixcIuKHgFwiOlwiJnJpZ2h0aGFycG9vbnVwO1wiLFwi4qWTXCI6XCImUmlnaHRWZWN0b3JCYXI7XCIsXCLihJ1cIjpcIiZyZWFscztcIixcIuKlsFwiOlwiJlJvdW5kSW1wbGllcztcIixcIuKHm1wiOlwiJnJBYXJyO1wiLFwi4oSbXCI6XCImcmVhbGluZTtcIixcIuKGsVwiOlwiJnJzaDtcIixcIuKntFwiOlwiJlJ1bGVEZWxheWVkO1wiLFwi0KlcIjpcIiZTSENIY3k7XCIsXCLQqFwiOlwiJlNIY3k7XCIsXCLQrFwiOlwiJlNPRlRjeTtcIixcIsWaXCI6XCImU2FjdXRlO1wiLFwi4qq8XCI6XCImU2M7XCIsXCLFoFwiOlwiJlNjYXJvbjtcIixcIsWeXCI6XCImU2NlZGlsO1wiLFwixZxcIjpcIiZTY2lyYztcIixcItChXCI6XCImU2N5O1wiLFwi8J2UllwiOlwiJlNmcjtcIixcIuKGkVwiOlwiJnVwYXJyb3c7XCIsXCLOo1wiOlwiJlNpZ21hO1wiLFwi4oiYXCI6XCImY29tcGZuO1wiLFwi8J2VilwiOlwiJlNvcGY7XCIsXCLiiJpcIjpcIiZyYWRpYztcIixcIuKWoVwiOlwiJnNxdWFyZTtcIixcIuKKk1wiOlwiJnNxY2FwO1wiLFwi4oqPXCI6XCImc3FzdWJzZXQ7XCIsXCLiipFcIjpcIiZzcXN1YnNldGVxO1wiLFwi4oqQXCI6XCImc3FzdXBzZXQ7XCIsXCLiipJcIjpcIiZzcXN1cHNldGVxO1wiLFwi4oqUXCI6XCImc3FjdXA7XCIsXCLwnZKuXCI6XCImU3NjcjtcIixcIuKLhlwiOlwiJnNzdGFyZjtcIixcIuKLkFwiOlwiJlN1YnNldDtcIixcIuKKhlwiOlwiJnN1YnNldGVxO1wiLFwi4om7XCI6XCImc3VjYztcIixcIuKqsFwiOlwiJnN1Y2NlcTtcIixcIuKJvVwiOlwiJnN1Y2NjdXJseWVxO1wiLFwi4om/XCI6XCImc3VjY3NpbTtcIixcIuKIkVwiOlwiJnN1bTtcIixcIuKLkVwiOlwiJlN1cHNldDtcIixcIuKKg1wiOlwiJnN1cHNldDtcIixcIuKKh1wiOlwiJnN1cHNldGVxO1wiLFwiw55cIjpcIiZUSE9STjtcIixcIuKEolwiOlwiJnRyYWRlO1wiLFwi0ItcIjpcIiZUU0hjeTtcIixcItCmXCI6XCImVFNjeTtcIixcIlxcdFwiOlwiJlRhYjtcIixcIs6kXCI6XCImVGF1O1wiLFwixaRcIjpcIiZUY2Fyb247XCIsXCLFolwiOlwiJlRjZWRpbDtcIixcItCiXCI6XCImVGN5O1wiLFwi8J2Ul1wiOlwiJlRmcjtcIixcIuKItFwiOlwiJnRoZXJlZm9yZTtcIixcIs6YXCI6XCImVGhldGE7XCIsXCLigZ/igIpcIjpcIiZUaGlja1NwYWNlO1wiLFwi4oCJXCI6XCImdGhpbnNwO1wiLFwi4oi8XCI6XCImdGhrc2ltO1wiLFwi4omDXCI6XCImc2ltZXE7XCIsXCLiiYVcIjpcIiZjb25nO1wiLFwi4omIXCI6XCImdGhrYXA7XCIsXCLwnZWLXCI6XCImVG9wZjtcIixcIuKDm1wiOlwiJnRkb3Q7XCIsXCLwnZKvXCI6XCImVHNjcjtcIixcIsWmXCI6XCImVHN0cm9rO1wiLFwiw5pcIjpcIiZVYWN1dGU7XCIsXCLihp9cIjpcIiZVYXJyO1wiLFwi4qWJXCI6XCImVWFycm9jaXI7XCIsXCLQjlwiOlwiJlVicmN5O1wiLFwixaxcIjpcIiZVYnJldmU7XCIsXCLDm1wiOlwiJlVjaXJjO1wiLFwi0KNcIjpcIiZVY3k7XCIsXCLFsFwiOlwiJlVkYmxhYztcIixcIvCdlJhcIjpcIiZVZnI7XCIsXCLDmVwiOlwiJlVncmF2ZTtcIixcIsWqXCI6XCImVW1hY3I7XCIsXzpcIiZsb3diYXI7XCIsXCLij59cIjpcIiZVbmRlckJyYWNlO1wiLFwi4o61XCI6XCImYmJyaztcIixcIuKPnVwiOlwiJlVuZGVyUGFyZW50aGVzaXM7XCIsXCLii4NcIjpcIiZ4Y3VwO1wiLFwi4oqOXCI6XCImdXBsdXM7XCIsXCLFslwiOlwiJlVvZ29uO1wiLFwi8J2VjFwiOlwiJlVvcGY7XCIsXCLipJJcIjpcIiZVcEFycm93QmFyO1wiLFwi4oeFXCI6XCImdWRhcnI7XCIsXCLihpVcIjpcIiZ2YXJyO1wiLFwi4qWuXCI6XCImdWRoYXI7XCIsXCLiiqVcIjpcIiZwZXJwO1wiLFwi4oalXCI6XCImbWFwc3RvdXA7XCIsXCLihpZcIjpcIiZud2Fycm93O1wiLFwi4oaXXCI6XCImbmVhcnJvdztcIixcIs+SXCI6XCImdXBzaWg7XCIsXCLOpVwiOlwiJlVwc2lsb247XCIsXCLFrlwiOlwiJlVyaW5nO1wiLFwi8J2SsFwiOlwiJlVzY3I7XCIsXCLFqFwiOlwiJlV0aWxkZTtcIixcIsOcXCI6XCImVXVtbDtcIixcIuKKq1wiOlwiJlZEYXNoO1wiLFwi4qurXCI6XCImVmJhcjtcIixcItCSXCI6XCImVmN5O1wiLFwi4oqpXCI6XCImVmRhc2g7XCIsXCLiq6ZcIjpcIiZWZGFzaGw7XCIsXCLii4FcIjpcIiZ4dmVlO1wiLFwi4oCWXCI6XCImVmVydDtcIixcIuKIo1wiOlwiJnNtaWQ7XCIsXCJ8XCI6XCImdmVydDtcIixcIuKdmFwiOlwiJlZlcnRpY2FsU2VwYXJhdG9yO1wiLFwi4omAXCI6XCImd3JlYXRoO1wiLFwi4oCKXCI6XCImaGFpcnNwO1wiLFwi8J2UmVwiOlwiJlZmcjtcIixcIvCdlY1cIjpcIiZWb3BmO1wiLFwi8J2SsVwiOlwiJlZzY3I7XCIsXCLiiqpcIjpcIiZWdmRhc2g7XCIsXCLFtFwiOlwiJldjaXJjO1wiLFwi4ouAXCI6XCImeHdlZGdlO1wiLFwi8J2UmlwiOlwiJldmcjtcIixcIvCdlY5cIjpcIiZXb3BmO1wiLFwi8J2SslwiOlwiJldzY3I7XCIsXCLwnZSbXCI6XCImWGZyO1wiLFwizp5cIjpcIiZYaTtcIixcIvCdlY9cIjpcIiZYb3BmO1wiLFwi8J2Ss1wiOlwiJlhzY3I7XCIsXCLQr1wiOlwiJllBY3k7XCIsXCLQh1wiOlwiJllJY3k7XCIsXCLQrlwiOlwiJllVY3k7XCIsXCLDnVwiOlwiJllhY3V0ZTtcIixcIsW2XCI6XCImWWNpcmM7XCIsXCLQq1wiOlwiJlljeTtcIixcIvCdlJxcIjpcIiZZZnI7XCIsXCLwnZWQXCI6XCImWW9wZjtcIixcIvCdkrRcIjpcIiZZc2NyO1wiLFwixbhcIjpcIiZZdW1sO1wiLFwi0JZcIjpcIiZaSGN5O1wiLFwixblcIjpcIiZaYWN1dGU7XCIsXCLFvVwiOlwiJlpjYXJvbjtcIixcItCXXCI6XCImWmN5O1wiLFwixbtcIjpcIiZaZG90O1wiLFwizpZcIjpcIiZaZXRhO1wiLFwi4oSoXCI6XCImemVldHJmO1wiLFwi4oSkXCI6XCImaW50ZWdlcnM7XCIsXCLwnZK1XCI6XCImWnNjcjtcIixcIsOhXCI6XCImYWFjdXRlO1wiLFwixINcIjpcIiZhYnJldmU7XCIsXCLiiL5cIjpcIiZtc3Rwb3M7XCIsXCLiiL7Ms1wiOlwiJmFjRTtcIixcIuKIv1wiOlwiJmFjZDtcIixcIsOiXCI6XCImYWNpcmM7XCIsXCLQsFwiOlwiJmFjeTtcIixcIsOmXCI6XCImYWVsaWc7XCIsXCLwnZSeXCI6XCImYWZyO1wiLFwiw6BcIjpcIiZhZ3JhdmU7XCIsXCLihLVcIjpcIiZhbGVwaDtcIixcIs6xXCI6XCImYWxwaGE7XCIsXCLEgVwiOlwiJmFtYWNyO1wiLFwi4qi/XCI6XCImYW1hbGc7XCIsXCLiiKdcIjpcIiZ3ZWRnZTtcIixcIuKplVwiOlwiJmFuZGFuZDtcIixcIuKpnFwiOlwiJmFuZGQ7XCIsXCLiqZhcIjpcIiZhbmRzbG9wZTtcIixcIuKpmlwiOlwiJmFuZHY7XCIsXCLiiKBcIjpcIiZhbmdsZTtcIixcIuKmpFwiOlwiJmFuZ2U7XCIsXCLiiKFcIjpcIiZtZWFzdXJlZGFuZ2xlO1wiLFwi4qaoXCI6XCImYW5nbXNkYWE7XCIsXCLipqlcIjpcIiZhbmdtc2RhYjtcIixcIuKmqlwiOlwiJmFuZ21zZGFjO1wiLFwi4qarXCI6XCImYW5nbXNkYWQ7XCIsXCLipqxcIjpcIiZhbmdtc2RhZTtcIixcIuKmrVwiOlwiJmFuZ21zZGFmO1wiLFwi4qauXCI6XCImYW5nbXNkYWc7XCIsXCLipq9cIjpcIiZhbmdtc2RhaDtcIixcIuKIn1wiOlwiJmFuZ3J0O1wiLFwi4oq+XCI6XCImYW5ncnR2YjtcIixcIuKmnVwiOlwiJmFuZ3J0dmJkO1wiLFwi4oiiXCI6XCImYW5nc3BoO1wiLFwi4o28XCI6XCImYW5nemFycjtcIixcIsSFXCI6XCImYW9nb247XCIsXCLwnZWSXCI6XCImYW9wZjtcIixcIuKpsFwiOlwiJmFwRTtcIixcIuKpr1wiOlwiJmFwYWNpcjtcIixcIuKJilwiOlwiJmFwcHJveGVxO1wiLFwi4omLXCI6XCImYXBpZDtcIixcIidcIjpcIiZhcG9zO1wiLFwiw6VcIjpcIiZhcmluZztcIixcIvCdkrZcIjpcIiZhc2NyO1wiLFwiKlwiOlwiJm1pZGFzdDtcIixcIsOjXCI6XCImYXRpbGRlO1wiLFwiw6RcIjpcIiZhdW1sO1wiLFwi4qiRXCI6XCImYXdpbnQ7XCIsXCLiq61cIjpcIiZiTm90O1wiLFwi4omMXCI6XCImYmNvbmc7XCIsXCLPtlwiOlwiJmJlcHNpO1wiLFwi4oC1XCI6XCImYnByaW1lO1wiLFwi4oi9XCI6XCImYnNpbTtcIixcIuKLjVwiOlwiJmJzaW1lO1wiLFwi4oq9XCI6XCImYmFydmVlO1wiLFwi4oyFXCI6XCImYmFyd2VkZ2U7XCIsXCLijrZcIjpcIiZiYnJrdGJyaztcIixcItCxXCI6XCImYmN5O1wiLFwi4oCeXCI6XCImbGRxdW9yO1wiLFwi4qawXCI6XCImYmVtcHR5djtcIixcIs6yXCI6XCImYmV0YTtcIixcIuKEtlwiOlwiJmJldGg7XCIsXCLiiaxcIjpcIiZ0d2l4dDtcIixcIvCdlJ9cIjpcIiZiZnI7XCIsXCLil69cIjpcIiZ4Y2lyYztcIixcIuKogFwiOlwiJnhvZG90O1wiLFwi4qiBXCI6XCImeG9wbHVzO1wiLFwi4qiCXCI6XCImeG90aW1lO1wiLFwi4qiGXCI6XCImeHNxY3VwO1wiLFwi4piFXCI6XCImc3RhcmY7XCIsXCLilr1cIjpcIiZ4ZHRyaTtcIixcIuKWs1wiOlwiJnh1dHJpO1wiLFwi4qiEXCI6XCImeHVwbHVzO1wiLFwi4qSNXCI6XCImcmJhcnI7XCIsXCLip6tcIjpcIiZsb3pmO1wiLFwi4pa0XCI6XCImdXRyaWY7XCIsXCLilr5cIjpcIiZkdHJpZjtcIixcIuKXglwiOlwiJmx0cmlmO1wiLFwi4pa4XCI6XCImcnRyaWY7XCIsXCLikKNcIjpcIiZibGFuaztcIixcIuKWklwiOlwiJmJsazEyO1wiLFwi4paRXCI6XCImYmxrMTQ7XCIsXCLilpNcIjpcIiZibGszNDtcIixcIuKWiFwiOlwiJmJsb2NrO1wiLFwiPeKDpVwiOlwiJmJuZTtcIixcIuKJoeKDpVwiOlwiJmJuZXF1aXY7XCIsXCLijJBcIjpcIiZibm90O1wiLFwi8J2Vk1wiOlwiJmJvcGY7XCIsXCLii4hcIjpcIiZib3d0aWU7XCIsXCLilZdcIjpcIiZib3hETDtcIixcIuKVlFwiOlwiJmJveERSO1wiLFwi4pWWXCI6XCImYm94RGw7XCIsXCLilZNcIjpcIiZib3hEcjtcIixcIuKVkFwiOlwiJmJveEg7XCIsXCLilaZcIjpcIiZib3hIRDtcIixcIuKVqVwiOlwiJmJveEhVO1wiLFwi4pWkXCI6XCImYm94SGQ7XCIsXCLiladcIjpcIiZib3hIdTtcIixcIuKVnVwiOlwiJmJveFVMO1wiLFwi4pWaXCI6XCImYm94VVI7XCIsXCLilZxcIjpcIiZib3hVbDtcIixcIuKVmVwiOlwiJmJveFVyO1wiLFwi4pWRXCI6XCImYm94VjtcIixcIuKVrFwiOlwiJmJveFZIO1wiLFwi4pWjXCI6XCImYm94Vkw7XCIsXCLilaBcIjpcIiZib3hWUjtcIixcIuKVq1wiOlwiJmJveFZoO1wiLFwi4pWiXCI6XCImYm94Vmw7XCIsXCLilZ9cIjpcIiZib3hWcjtcIixcIuKniVwiOlwiJmJveGJveDtcIixcIuKVlVwiOlwiJmJveGRMO1wiLFwi4pWSXCI6XCImYm94ZFI7XCIsXCLilJBcIjpcIiZib3hkbDtcIixcIuKUjFwiOlwiJmJveGRyO1wiLFwi4pWlXCI6XCImYm94aEQ7XCIsXCLilahcIjpcIiZib3hoVTtcIixcIuKUrFwiOlwiJmJveGhkO1wiLFwi4pS0XCI6XCImYm94aHU7XCIsXCLiip9cIjpcIiZtaW51c2I7XCIsXCLiip5cIjpcIiZwbHVzYjtcIixcIuKKoFwiOlwiJnRpbWVzYjtcIixcIuKVm1wiOlwiJmJveHVMO1wiLFwi4pWYXCI6XCImYm94dVI7XCIsXCLilJhcIjpcIiZib3h1bDtcIixcIuKUlFwiOlwiJmJveHVyO1wiLFwi4pSCXCI6XCImYm94djtcIixcIuKVqlwiOlwiJmJveHZIO1wiLFwi4pWhXCI6XCImYm94dkw7XCIsXCLilZ5cIjpcIiZib3h2UjtcIixcIuKUvFwiOlwiJmJveHZoO1wiLFwi4pSkXCI6XCImYm94dmw7XCIsXCLilJxcIjpcIiZib3h2cjtcIixcIsKmXCI6XCImYnJ2YmFyO1wiLFwi8J2St1wiOlwiJmJzY3I7XCIsXCLigY9cIjpcIiZic2VtaTtcIixcIlxcXFxcIjpcIiZic29sO1wiLFwi4qeFXCI6XCImYnNvbGI7XCIsXCLin4hcIjpcIiZic29saHN1YjtcIixcIuKAolwiOlwiJmJ1bGxldDtcIixcIuKqrlwiOlwiJmJ1bXBFO1wiLFwixIdcIjpcIiZjYWN1dGU7XCIsXCLiiKlcIjpcIiZjYXA7XCIsXCLiqYRcIjpcIiZjYXBhbmQ7XCIsXCLiqYlcIjpcIiZjYXBicmN1cDtcIixcIuKpi1wiOlwiJmNhcGNhcDtcIixcIuKph1wiOlwiJmNhcGN1cDtcIixcIuKpgFwiOlwiJmNhcGRvdDtcIixcIuKIqe+4gFwiOlwiJmNhcHM7XCIsXCLigYFcIjpcIiZjYXJldDtcIixcIuKpjVwiOlwiJmNjYXBzO1wiLFwixI1cIjpcIiZjY2Fyb247XCIsXCLDp1wiOlwiJmNjZWRpbDtcIixcIsSJXCI6XCImY2NpcmM7XCIsXCLiqYxcIjpcIiZjY3VwcztcIixcIuKpkFwiOlwiJmNjdXBzc207XCIsXCLEi1wiOlwiJmNkb3Q7XCIsXCLiprJcIjpcIiZjZW1wdHl2O1wiLFwiwqJcIjpcIiZjZW50O1wiLFwi8J2UoFwiOlwiJmNmcjtcIixcItGHXCI6XCImY2hjeTtcIixcIuKck1wiOlwiJmNoZWNrbWFyaztcIixcIs+HXCI6XCImY2hpO1wiLFwi4peLXCI6XCImY2lyO1wiLFwi4qeDXCI6XCImY2lyRTtcIixcIsuGXCI6XCImY2lyYztcIixcIuKJl1wiOlwiJmNpcmU7XCIsXCLihrpcIjpcIiZvbGFycjtcIixcIuKGu1wiOlwiJm9yYXJyO1wiLFwi4pOIXCI6XCImb1M7XCIsXCLiiptcIjpcIiZvYXN0O1wiLFwi4oqaXCI6XCImb2NpcjtcIixcIuKKnVwiOlwiJm9kYXNoO1wiLFwi4qiQXCI6XCImY2lyZm5pbnQ7XCIsXCLiq69cIjpcIiZjaXJtaWQ7XCIsXCLip4JcIjpcIiZjaXJzY2lyO1wiLFwi4pmjXCI6XCImY2x1YnN1aXQ7XCIsXCI6XCI6XCImY29sb247XCIsXCIsXCI6XCImY29tbWE7XCIsXCJAXCI6XCImY29tbWF0O1wiLFwi4oiBXCI6XCImY29tcGxlbWVudDtcIixcIuKprVwiOlwiJmNvbmdkb3Q7XCIsXCLwnZWUXCI6XCImY29wZjtcIixcIuKEl1wiOlwiJmNvcHlzcjtcIixcIuKGtVwiOlwiJmNyYXJyO1wiLFwi4pyXXCI6XCImY3Jvc3M7XCIsXCLwnZK4XCI6XCImY3NjcjtcIixcIuKrj1wiOlwiJmNzdWI7XCIsXCLiq5FcIjpcIiZjc3ViZTtcIixcIuKrkFwiOlwiJmNzdXA7XCIsXCLiq5JcIjpcIiZjc3VwZTtcIixcIuKLr1wiOlwiJmN0ZG90O1wiLFwi4qS4XCI6XCImY3VkYXJybDtcIixcIuKktVwiOlwiJmN1ZGFycnI7XCIsXCLii55cIjpcIiZjdXJseWVxcHJlYztcIixcIuKLn1wiOlwiJmN1cmx5ZXFzdWNjO1wiLFwi4oa2XCI6XCImY3VydmVhcnJvd2xlZnQ7XCIsXCLipL1cIjpcIiZjdWxhcnJwO1wiLFwi4oiqXCI6XCImY3VwO1wiLFwi4qmIXCI6XCImY3VwYnJjYXA7XCIsXCLiqYZcIjpcIiZjdXBjYXA7XCIsXCLiqYpcIjpcIiZjdXBjdXA7XCIsXCLiio1cIjpcIiZjdXBkb3Q7XCIsXCLiqYVcIjpcIiZjdXBvcjtcIixcIuKIqu+4gFwiOlwiJmN1cHM7XCIsXCLihrdcIjpcIiZjdXJ2ZWFycm93cmlnaHQ7XCIsXCLipLxcIjpcIiZjdXJhcnJtO1wiLFwi4ouOXCI6XCImY3V2ZWU7XCIsXCLii49cIjpcIiZjdXdlZDtcIixcIsKkXCI6XCImY3VycmVuO1wiLFwi4oixXCI6XCImY3dpbnQ7XCIsXCLijK1cIjpcIiZjeWxjdHk7XCIsXCLipaVcIjpcIiZkSGFyO1wiLFwi4oCgXCI6XCImZGFnZ2VyO1wiLFwi4oS4XCI6XCImZGFsZXRoO1wiLFwi4oCQXCI6XCImaHlwaGVuO1wiLFwi4qSPXCI6XCImckJhcnI7XCIsXCLEj1wiOlwiJmRjYXJvbjtcIixcItC0XCI6XCImZGN5O1wiLFwi4oeKXCI6XCImZG93bmRvd25hcnJvd3M7XCIsXCLiqbdcIjpcIiZlRERvdDtcIixcIsKwXCI6XCImZGVnO1wiLFwizrRcIjpcIiZkZWx0YTtcIixcIuKmsVwiOlwiJmRlbXB0eXY7XCIsXCLipb9cIjpcIiZkZmlzaHQ7XCIsXCLwnZShXCI6XCImZGZyO1wiLFwi4pmmXCI6XCImZGlhbXM7XCIsXCLPnVwiOlwiJmdhbW1hZDtcIixcIuKLslwiOlwiJmRpc2luO1wiLFwiw7dcIjpcIiZkaXZpZGU7XCIsXCLii4dcIjpcIiZkaXZvbng7XCIsXCLRklwiOlwiJmRqY3k7XCIsXCLijJ5cIjpcIiZsbGNvcm5lcjtcIixcIuKMjVwiOlwiJmRsY3JvcDtcIiwkOlwiJmRvbGxhcjtcIixcIvCdlZVcIjpcIiZkb3BmO1wiLFwi4omRXCI6XCImZURvdDtcIixcIuKIuFwiOlwiJm1pbnVzZDtcIixcIuKIlFwiOlwiJnBsdXNkbztcIixcIuKKoVwiOlwiJnNkb3RiO1wiLFwi4oyfXCI6XCImbHJjb3JuZXI7XCIsXCLijIxcIjpcIiZkcmNyb3A7XCIsXCLwnZK5XCI6XCImZHNjcjtcIixcItGVXCI6XCImZHNjeTtcIixcIuKntlwiOlwiJmRzb2w7XCIsXCLEkVwiOlwiJmRzdHJvaztcIixcIuKLsVwiOlwiJmR0ZG90O1wiLFwi4pa/XCI6XCImdHJpYW5nbGVkb3duO1wiLFwi4qamXCI6XCImZHdhbmdsZTtcIixcItGfXCI6XCImZHpjeTtcIixcIuKfv1wiOlwiJmR6aWdyYXJyO1wiLFwiw6lcIjpcIiZlYWN1dGU7XCIsXCLiqa5cIjpcIiZlYXN0ZXI7XCIsXCLEm1wiOlwiJmVjYXJvbjtcIixcIuKJllwiOlwiJmVxY2lyYztcIixcIsOqXCI6XCImZWNpcmM7XCIsXCLiiZVcIjpcIiZlcWNvbG9uO1wiLFwi0Y1cIjpcIiZlY3k7XCIsXCLEl1wiOlwiJmVkb3Q7XCIsXCLiiZJcIjpcIiZmYWxsaW5nZG90c2VxO1wiLFwi8J2UolwiOlwiJmVmcjtcIixcIuKqmlwiOlwiJmVnO1wiLFwiw6hcIjpcIiZlZ3JhdmU7XCIsXCLiqpZcIjpcIiZlcXNsYW50Z3RyO1wiLFwi4qqYXCI6XCImZWdzZG90O1wiLFwi4qqZXCI6XCImZWw7XCIsXCLij6dcIjpcIiZlbGludGVycztcIixcIuKEk1wiOlwiJmVsbDtcIixcIuKqlVwiOlwiJmVxc2xhbnRsZXNzO1wiLFwi4qqXXCI6XCImZWxzZG90O1wiLFwixJNcIjpcIiZlbWFjcjtcIixcIuKIhVwiOlwiJnZhcm5vdGhpbmc7XCIsXCLigIRcIjpcIiZlbXNwMTM7XCIsXCLigIVcIjpcIiZlbXNwMTQ7XCIsXCLigINcIjpcIiZlbXNwO1wiLFwixYtcIjpcIiZlbmc7XCIsXCLigIJcIjpcIiZlbnNwO1wiLFwixJlcIjpcIiZlb2dvbjtcIixcIvCdlZZcIjpcIiZlb3BmO1wiLFwi4ouVXCI6XCImZXBhcjtcIixcIuKno1wiOlwiJmVwYXJzbDtcIixcIuKpsVwiOlwiJmVwbHVzO1wiLFwizrVcIjpcIiZlcHNpbG9uO1wiLFwiz7VcIjpcIiZ2YXJlcHNpbG9uO1wiLFwiPVwiOlwiJmVxdWFscztcIixcIuKJn1wiOlwiJnF1ZXN0ZXE7XCIsXCLiqbhcIjpcIiZlcXVpdkREO1wiLFwi4qelXCI6XCImZXF2cGFyc2w7XCIsXCLiiZNcIjpcIiZyaXNpbmdkb3RzZXE7XCIsXCLipbFcIjpcIiZlcmFycjtcIixcIuKEr1wiOlwiJmVzY3I7XCIsXCLOt1wiOlwiJmV0YTtcIixcIsOwXCI6XCImZXRoO1wiLFwiw6tcIjpcIiZldW1sO1wiLFwi4oKsXCI6XCImZXVybztcIixcIiFcIjpcIiZleGNsO1wiLFwi0YRcIjpcIiZmY3k7XCIsXCLimYBcIjpcIiZmZW1hbGU7XCIsXCLvrINcIjpcIiZmZmlsaWc7XCIsXCLvrIBcIjpcIiZmZmxpZztcIixcIu+shFwiOlwiJmZmbGxpZztcIixcIvCdlKNcIjpcIiZmZnI7XCIsXCLvrIFcIjpcIiZmaWxpZztcIixmajpcIiZmamxpZztcIixcIuKZrVwiOlwiJmZsYXQ7XCIsXCLvrIJcIjpcIiZmbGxpZztcIixcIuKWsVwiOlwiJmZsdG5zO1wiLFwixpJcIjpcIiZmbm9mO1wiLFwi8J2Vl1wiOlwiJmZvcGY7XCIsXCLii5RcIjpcIiZwaXRjaGZvcms7XCIsXCLiq5lcIjpcIiZmb3JrdjtcIixcIuKojVwiOlwiJmZwYXJ0aW50O1wiLFwiwr1cIjpcIiZoYWxmO1wiLFwi4oWTXCI6XCImZnJhYzEzO1wiLFwiwrxcIjpcIiZmcmFjMTQ7XCIsXCLihZVcIjpcIiZmcmFjMTU7XCIsXCLihZlcIjpcIiZmcmFjMTY7XCIsXCLihZtcIjpcIiZmcmFjMTg7XCIsXCLihZRcIjpcIiZmcmFjMjM7XCIsXCLihZZcIjpcIiZmcmFjMjU7XCIsXCLCvlwiOlwiJmZyYWMzNDtcIixcIuKFl1wiOlwiJmZyYWMzNTtcIixcIuKFnFwiOlwiJmZyYWMzODtcIixcIuKFmFwiOlwiJmZyYWM0NTtcIixcIuKFmlwiOlwiJmZyYWM1NjtcIixcIuKFnVwiOlwiJmZyYWM1ODtcIixcIuKFnlwiOlwiJmZyYWM3ODtcIixcIuKBhFwiOlwiJmZyYXNsO1wiLFwi4oyiXCI6XCImc2Zyb3duO1wiLFwi8J2Su1wiOlwiJmZzY3I7XCIsXCLiqoxcIjpcIiZndHJlcXFsZXNzO1wiLFwix7VcIjpcIiZnYWN1dGU7XCIsXCLOs1wiOlwiJmdhbW1hO1wiLFwi4qqGXCI6XCImZ3RyYXBwcm94O1wiLFwixJ9cIjpcIiZnYnJldmU7XCIsXCLEnVwiOlwiJmdjaXJjO1wiLFwi0LNcIjpcIiZnY3k7XCIsXCLEoVwiOlwiJmdkb3Q7XCIsXCLiqqlcIjpcIiZnZXNjYztcIixcIuKqgFwiOlwiJmdlc2RvdDtcIixcIuKqglwiOlwiJmdlc2RvdG87XCIsXCLiqoRcIjpcIiZnZXNkb3RvbDtcIixcIuKLm++4gFwiOlwiJmdlc2w7XCIsXCLiqpRcIjpcIiZnZXNsZXM7XCIsXCLwnZSkXCI6XCImZ2ZyO1wiLFwi4oS3XCI6XCImZ2ltZWw7XCIsXCLRk1wiOlwiJmdqY3k7XCIsXCLiqpJcIjpcIiZnbEU7XCIsXCLiqqVcIjpcIiZnbGE7XCIsXCLiqqRcIjpcIiZnbGo7XCIsXCLiialcIjpcIiZnbmVxcTtcIixcIuKqilwiOlwiJmduYXBwcm94O1wiLFwi4qqIXCI6XCImZ25lcTtcIixcIuKLp1wiOlwiJmduc2ltO1wiLFwi8J2VmFwiOlwiJmdvcGY7XCIsXCLihIpcIjpcIiZnc2NyO1wiLFwi4qqOXCI6XCImZ3NpbWU7XCIsXCLiqpBcIjpcIiZnc2ltbDtcIixcIuKqp1wiOlwiJmd0Y2M7XCIsXCLiqbpcIjpcIiZndGNpcjtcIixcIuKLl1wiOlwiJmd0cmRvdDtcIixcIuKmlVwiOlwiJmd0bFBhcjtcIixcIuKpvFwiOlwiJmd0cXVlc3Q7XCIsXCLipbhcIjpcIiZndHJhcnI7XCIsXCLiianvuIBcIjpcIiZndm5FO1wiLFwi0YpcIjpcIiZoYXJkY3k7XCIsXCLipYhcIjpcIiZoYXJyY2lyO1wiLFwi4oatXCI6XCImbGVmdHJpZ2h0c3F1aWdhcnJvdztcIixcIuKEj1wiOlwiJnBsYW5rdjtcIixcIsSlXCI6XCImaGNpcmM7XCIsXCLimaVcIjpcIiZoZWFydHN1aXQ7XCIsXCLigKZcIjpcIiZtbGRyO1wiLFwi4oq5XCI6XCImaGVyY29uO1wiLFwi8J2UpVwiOlwiJmhmcjtcIixcIuKkpVwiOlwiJnNlYXJoaztcIixcIuKkplwiOlwiJnN3YXJoaztcIixcIuKHv1wiOlwiJmhvYXJyO1wiLFwi4oi7XCI6XCImaG9tdGh0O1wiLFwi4oapXCI6XCImbGFycmhrO1wiLFwi4oaqXCI6XCImcmFycmhrO1wiLFwi8J2VmVwiOlwiJmhvcGY7XCIsXCLigJVcIjpcIiZob3JiYXI7XCIsXCLwnZK9XCI6XCImaHNjcjtcIixcIsSnXCI6XCImaHN0cm9rO1wiLFwi4oGDXCI6XCImaHlidWxsO1wiLFwiw61cIjpcIiZpYWN1dGU7XCIsXCLDrlwiOlwiJmljaXJjO1wiLFwi0LhcIjpcIiZpY3k7XCIsXCLQtVwiOlwiJmllY3k7XCIsXCLCoVwiOlwiJmlleGNsO1wiLFwi8J2UplwiOlwiJmlmcjtcIixcIsOsXCI6XCImaWdyYXZlO1wiLFwi4qiMXCI6XCImcWludDtcIixcIuKIrVwiOlwiJnRpbnQ7XCIsXCLip5xcIjpcIiZpaW5maW47XCIsXCLihKlcIjpcIiZpaW90YTtcIixcIsSzXCI6XCImaWpsaWc7XCIsXCLEq1wiOlwiJmltYWNyO1wiLFwixLFcIjpcIiZpbm9kb3Q7XCIsXCLiirdcIjpcIiZpbW9mO1wiLFwixrVcIjpcIiZpbXBlZDtcIixcIuKEhVwiOlwiJmluY2FyZTtcIixcIuKInlwiOlwiJmluZmluO1wiLFwi4qedXCI6XCImaW5maW50aWU7XCIsXCLiirpcIjpcIiZpbnRlcmNhbDtcIixcIuKol1wiOlwiJmludGxhcmhrO1wiLFwi4qi8XCI6XCImaXByb2Q7XCIsXCLRkVwiOlwiJmlvY3k7XCIsXCLEr1wiOlwiJmlvZ29uO1wiLFwi8J2VmlwiOlwiJmlvcGY7XCIsXCLOuVwiOlwiJmlvdGE7XCIsXCLCv1wiOlwiJmlxdWVzdDtcIixcIvCdkr5cIjpcIiZpc2NyO1wiLFwi4ou5XCI6XCImaXNpbkU7XCIsXCLii7VcIjpcIiZpc2luZG90O1wiLFwi4ou0XCI6XCImaXNpbnM7XCIsXCLii7NcIjpcIiZpc2luc3Y7XCIsXCLEqVwiOlwiJml0aWxkZTtcIixcItGWXCI6XCImaXVrY3k7XCIsXCLDr1wiOlwiJml1bWw7XCIsXCLEtVwiOlwiJmpjaXJjO1wiLFwi0LlcIjpcIiZqY3k7XCIsXCLwnZSnXCI6XCImamZyO1wiLFwiyLdcIjpcIiZqbWF0aDtcIixcIvCdlZtcIjpcIiZqb3BmO1wiLFwi8J2Sv1wiOlwiJmpzY3I7XCIsXCLRmFwiOlwiJmpzZXJjeTtcIixcItGUXCI6XCImanVrY3k7XCIsXCLOulwiOlwiJmthcHBhO1wiLFwiz7BcIjpcIiZ2YXJrYXBwYTtcIixcIsS3XCI6XCIma2NlZGlsO1wiLFwi0LpcIjpcIiZrY3k7XCIsXCLwnZSoXCI6XCIma2ZyO1wiLFwixLhcIjpcIiZrZ3JlZW47XCIsXCLRhVwiOlwiJmtoY3k7XCIsXCLRnFwiOlwiJmtqY3k7XCIsXCLwnZWcXCI6XCIma29wZjtcIixcIvCdk4BcIjpcIiZrc2NyO1wiLFwi4qSbXCI6XCImbEF0YWlsO1wiLFwi4qSOXCI6XCImbEJhcnI7XCIsXCLiqotcIjpcIiZsZXNzZXFxZ3RyO1wiLFwi4qWiXCI6XCImbEhhcjtcIixcIsS6XCI6XCImbGFjdXRlO1wiLFwi4qa0XCI6XCImbGFlbXB0eXY7XCIsXCLOu1wiOlwiJmxhbWJkYTtcIixcIuKmkVwiOlwiJmxhbmdkO1wiLFwi4qqFXCI6XCImbGVzc2FwcHJveDtcIixcIsKrXCI6XCImbGFxdW87XCIsXCLipJ9cIjpcIiZsYXJyYmZzO1wiLFwi4qSdXCI6XCImbGFycmZzO1wiLFwi4oarXCI6XCImbG9vcGFycm93bGVmdDtcIixcIuKkuVwiOlwiJmxhcnJwbDtcIixcIuKls1wiOlwiJmxhcnJzaW07XCIsXCLihqJcIjpcIiZsZWZ0YXJyb3d0YWlsO1wiLFwi4qqrXCI6XCImbGF0O1wiLFwi4qSZXCI6XCImbGF0YWlsO1wiLFwi4qqtXCI6XCImbGF0ZTtcIixcIuKqre+4gFwiOlwiJmxhdGVzO1wiLFwi4qSMXCI6XCImbGJhcnI7XCIsXCLinbJcIjpcIiZsYmJyaztcIixcIntcIjpcIiZsY3ViO1wiLFwiW1wiOlwiJmxzcWI7XCIsXCLipotcIjpcIiZsYnJrZTtcIixcIuKmj1wiOlwiJmxicmtzbGQ7XCIsXCLipo1cIjpcIiZsYnJrc2x1O1wiLFwixL5cIjpcIiZsY2Fyb247XCIsXCLEvFwiOlwiJmxjZWRpbDtcIixcItC7XCI6XCImbGN5O1wiLFwi4qS2XCI6XCImbGRjYTtcIixcIuKlp1wiOlwiJmxkcmRoYXI7XCIsXCLipYtcIjpcIiZsZHJ1c2hhcjtcIixcIuKGslwiOlwiJmxkc2g7XCIsXCLiiaRcIjpcIiZsZXE7XCIsXCLih4dcIjpcIiZsbGFycjtcIixcIuKLi1wiOlwiJmx0aHJlZTtcIixcIuKqqFwiOlwiJmxlc2NjO1wiLFwi4qm/XCI6XCImbGVzZG90O1wiLFwi4qqBXCI6XCImbGVzZG90bztcIixcIuKqg1wiOlwiJmxlc2RvdG9yO1wiLFwi4oua77iAXCI6XCImbGVzZztcIixcIuKqk1wiOlwiJmxlc2dlcztcIixcIuKLllwiOlwiJmx0ZG90O1wiLFwi4qW8XCI6XCImbGZpc2h0O1wiLFwi8J2UqVwiOlwiJmxmcjtcIixcIuKqkVwiOlwiJmxnRTtcIixcIuKlqlwiOlwiJmxoYXJ1bDtcIixcIuKWhFwiOlwiJmxoYmxrO1wiLFwi0ZlcIjpcIiZsamN5O1wiLFwi4qWrXCI6XCImbGxoYXJkO1wiLFwi4pe6XCI6XCImbGx0cmk7XCIsXCLFgFwiOlwiJmxtaWRvdDtcIixcIuKOsFwiOlwiJmxtb3VzdGFjaGU7XCIsXCLiiahcIjpcIiZsbmVxcTtcIixcIuKqiVwiOlwiJmxuYXBwcm94O1wiLFwi4qqHXCI6XCImbG5lcTtcIixcIuKLplwiOlwiJmxuc2ltO1wiLFwi4p+sXCI6XCImbG9hbmc7XCIsXCLih71cIjpcIiZsb2FycjtcIixcIuKfvFwiOlwiJnhtYXA7XCIsXCLihqxcIjpcIiZyYXJybHA7XCIsXCLipoVcIjpcIiZsb3BhcjtcIixcIvCdlZ1cIjpcIiZsb3BmO1wiLFwi4qitXCI6XCImbG9wbHVzO1wiLFwi4qi0XCI6XCImbG90aW1lcztcIixcIuKIl1wiOlwiJmxvd2FzdDtcIixcIuKXilwiOlwiJmxvemVuZ2U7XCIsXCIoXCI6XCImbHBhcjtcIixcIuKmk1wiOlwiJmxwYXJsdDtcIixcIuKlrVwiOlwiJmxyaGFyZDtcIixcIuKAjlwiOlwiJmxybTtcIixcIuKKv1wiOlwiJmxydHJpO1wiLFwi4oC5XCI6XCImbHNhcXVvO1wiLFwi8J2TgVwiOlwiJmxzY3I7XCIsXCLiqo1cIjpcIiZsc2ltZTtcIixcIuKqj1wiOlwiJmxzaW1nO1wiLFwi4oCaXCI6XCImc2JxdW87XCIsXCLFglwiOlwiJmxzdHJvaztcIixcIuKqplwiOlwiJmx0Y2M7XCIsXCLiqblcIjpcIiZsdGNpcjtcIixcIuKLiVwiOlwiJmx0aW1lcztcIixcIuKltlwiOlwiJmx0bGFycjtcIixcIuKpu1wiOlwiJmx0cXVlc3Q7XCIsXCLippZcIjpcIiZsdHJQYXI7XCIsXCLil4NcIjpcIiZ0cmlhbmdsZWxlZnQ7XCIsXCLipYpcIjpcIiZsdXJkc2hhcjtcIixcIuKlplwiOlwiJmx1cnVoYXI7XCIsXCLiiajvuIBcIjpcIiZsdm5FO1wiLFwi4oi6XCI6XCImbUREb3Q7XCIsXCLCr1wiOlwiJnN0cm5zO1wiLFwi4pmCXCI6XCImbWFsZTtcIixcIuKcoFwiOlwiJm1hbHRlc2U7XCIsXCLilq5cIjpcIiZtYXJrZXI7XCIsXCLiqKlcIjpcIiZtY29tbWE7XCIsXCLQvFwiOlwiJm1jeTtcIixcIuKAlFwiOlwiJm1kYXNoO1wiLFwi8J2UqlwiOlwiJm1mcjtcIixcIuKEp1wiOlwiJm1obztcIixcIsK1XCI6XCImbWljcm87XCIsXCLiq7BcIjpcIiZtaWRjaXI7XCIsXCLiiJJcIjpcIiZtaW51cztcIixcIuKoqlwiOlwiJm1pbnVzZHU7XCIsXCLiq5tcIjpcIiZtbGNwO1wiLFwi4oqnXCI6XCImbW9kZWxzO1wiLFwi8J2VnlwiOlwiJm1vcGY7XCIsXCLwnZOCXCI6XCImbXNjcjtcIixcIs68XCI6XCImbXU7XCIsXCLiirhcIjpcIiZtdW1hcDtcIixcIuKLmcy4XCI6XCImbkdnO1wiLFwi4omr4oOSXCI6XCImbkd0O1wiLFwi4oeNXCI6XCImbmxBcnI7XCIsXCLih45cIjpcIiZuaEFycjtcIixcIuKLmMy4XCI6XCImbkxsO1wiLFwi4omq4oOSXCI6XCImbkx0O1wiLFwi4oePXCI6XCImbnJBcnI7XCIsXCLiiq9cIjpcIiZuVkRhc2g7XCIsXCLiiq5cIjpcIiZuVmRhc2g7XCIsXCLFhFwiOlwiJm5hY3V0ZTtcIixcIuKIoOKDklwiOlwiJm5hbmc7XCIsXCLiqbDMuFwiOlwiJm5hcEU7XCIsXCLiiYvMuFwiOlwiJm5hcGlkO1wiLFwixYlcIjpcIiZuYXBvcztcIixcIuKZrlwiOlwiJm5hdHVyYWw7XCIsXCLiqYNcIjpcIiZuY2FwO1wiLFwixYhcIjpcIiZuY2Fyb247XCIsXCLFhlwiOlwiJm5jZWRpbDtcIixcIuKprcy4XCI6XCImbmNvbmdkb3Q7XCIsXCLiqYJcIjpcIiZuY3VwO1wiLFwi0L1cIjpcIiZuY3k7XCIsXCLigJNcIjpcIiZuZGFzaDtcIixcIuKHl1wiOlwiJm5lQXJyO1wiLFwi4qSkXCI6XCImbmVhcmhrO1wiLFwi4omQzLhcIjpcIiZuZWRvdDtcIixcIuKkqFwiOlwiJnRvZWE7XCIsXCLwnZSrXCI6XCImbmZyO1wiLFwi4oauXCI6XCImbmxlZnRyaWdodGFycm93O1wiLFwi4quyXCI6XCImbmhwYXI7XCIsXCLii7xcIjpcIiZuaXM7XCIsXCLii7pcIjpcIiZuaXNkO1wiLFwi0ZpcIjpcIiZuamN5O1wiLFwi4ommzLhcIjpcIiZubGVxcTtcIixcIuKGmlwiOlwiJm5sZWZ0YXJyb3c7XCIsXCLigKVcIjpcIiZubGRyO1wiLFwi8J2Vn1wiOlwiJm5vcGY7XCIsXCLCrFwiOlwiJm5vdDtcIixcIuKLucy4XCI6XCImbm90aW5FO1wiLFwi4ou1zLhcIjpcIiZub3RpbmRvdDtcIixcIuKLt1wiOlwiJm5vdGludmI7XCIsXCLii7ZcIjpcIiZub3RpbnZjO1wiLFwi4ou+XCI6XCImbm90bml2YjtcIixcIuKLvVwiOlwiJm5vdG5pdmM7XCIsXCLiq73ig6VcIjpcIiZucGFyc2w7XCIsXCLiiILMuFwiOlwiJm5wYXJ0O1wiLFwi4qiUXCI6XCImbnBvbGludDtcIixcIuKGm1wiOlwiJm5yaWdodGFycm93O1wiLFwi4qSzzLhcIjpcIiZucmFycmM7XCIsXCLihp3MuFwiOlwiJm5yYXJydztcIixcIvCdk4NcIjpcIiZuc2NyO1wiLFwi4oqEXCI6XCImbnN1YjtcIixcIuKrhcy4XCI6XCImbnN1YnNldGVxcTtcIixcIuKKhVwiOlwiJm5zdXA7XCIsXCLiq4bMuFwiOlwiJm5zdXBzZXRlcXE7XCIsXCLDsVwiOlwiJm50aWxkZTtcIixcIs69XCI6XCImbnU7XCIsXCIjXCI6XCImbnVtO1wiLFwi4oSWXCI6XCImbnVtZXJvO1wiLFwi4oCHXCI6XCImbnVtc3A7XCIsXCLiiq1cIjpcIiZudkRhc2g7XCIsXCLipIRcIjpcIiZudkhhcnI7XCIsXCLiiY3ig5JcIjpcIiZudmFwO1wiLFwi4oqsXCI6XCImbnZkYXNoO1wiLFwi4oml4oOSXCI6XCImbnZnZTtcIixcIj7ig5JcIjpcIiZudmd0O1wiLFwi4qeeXCI6XCImbnZpbmZpbjtcIixcIuKkglwiOlwiJm52bEFycjtcIixcIuKJpOKDklwiOlwiJm52bGU7XCIsXCI84oOSXCI6XCImbnZsdDtcIixcIuKKtOKDklwiOlwiJm52bHRyaWU7XCIsXCLipINcIjpcIiZudnJBcnI7XCIsXCLiirXig5JcIjpcIiZudnJ0cmllO1wiLFwi4oi84oOSXCI6XCImbnZzaW07XCIsXCLih5ZcIjpcIiZud0FycjtcIixcIuKko1wiOlwiJm53YXJoaztcIixcIuKkp1wiOlwiJm53bmVhcjtcIixcIsOzXCI6XCImb2FjdXRlO1wiLFwiw7RcIjpcIiZvY2lyYztcIixcItC+XCI6XCImb2N5O1wiLFwixZFcIjpcIiZvZGJsYWM7XCIsXCLiqLhcIjpcIiZvZGl2O1wiLFwi4qa8XCI6XCImb2Rzb2xkO1wiLFwixZNcIjpcIiZvZWxpZztcIixcIuKmv1wiOlwiJm9mY2lyO1wiLFwi8J2UrFwiOlwiJm9mcjtcIixcIsubXCI6XCImb2dvbjtcIixcIsOyXCI6XCImb2dyYXZlO1wiLFwi4qeBXCI6XCImb2d0O1wiLFwi4qa1XCI6XCImb2hiYXI7XCIsXCLipr5cIjpcIiZvbGNpcjtcIixcIuKmu1wiOlwiJm9sY3Jvc3M7XCIsXCLip4BcIjpcIiZvbHQ7XCIsXCLFjVwiOlwiJm9tYWNyO1wiLFwiz4lcIjpcIiZvbWVnYTtcIixcIs6/XCI6XCImb21pY3JvbjtcIixcIuKmtlwiOlwiJm9taWQ7XCIsXCLwnZWgXCI6XCImb29wZjtcIixcIuKmt1wiOlwiJm9wYXI7XCIsXCLiprlcIjpcIiZvcGVycDtcIixcIuKIqFwiOlwiJnZlZTtcIixcIuKpnVwiOlwiJm9yZDtcIixcIuKEtFwiOlwiJm9zY3I7XCIsXCLCqlwiOlwiJm9yZGY7XCIsXCLCulwiOlwiJm9yZG07XCIsXCLiirZcIjpcIiZvcmlnb2Y7XCIsXCLiqZZcIjpcIiZvcm9yO1wiLFwi4qmXXCI6XCImb3JzbG9wZTtcIixcIuKpm1wiOlwiJm9ydjtcIixcIsO4XCI6XCImb3NsYXNoO1wiLFwi4oqYXCI6XCImb3NvbDtcIixcIsO1XCI6XCImb3RpbGRlO1wiLFwi4qi2XCI6XCImb3RpbWVzYXM7XCIsXCLDtlwiOlwiJm91bWw7XCIsXCLijL1cIjpcIiZvdmJhcjtcIixcIsK2XCI6XCImcGFyYTtcIixcIuKrs1wiOlwiJnBhcnNpbTtcIixcIuKrvVwiOlwiJnBhcnNsO1wiLFwi0L9cIjpcIiZwY3k7XCIsXCIlXCI6XCImcGVyY250O1wiLFwiLlwiOlwiJnBlcmlvZDtcIixcIuKAsFwiOlwiJnBlcm1pbDtcIixcIuKAsVwiOlwiJnBlcnRlbms7XCIsXCLwnZStXCI6XCImcGZyO1wiLFwiz4ZcIjpcIiZwaGk7XCIsXCLPlVwiOlwiJnZhcnBoaTtcIixcIuKYjlwiOlwiJnBob25lO1wiLFwiz4BcIjpcIiZwaTtcIixcIs+WXCI6XCImdmFycGk7XCIsXCLihI5cIjpcIiZwbGFuY2toO1wiLFwiK1wiOlwiJnBsdXM7XCIsXCLiqKNcIjpcIiZwbHVzYWNpcjtcIixcIuKoolwiOlwiJnBsdXNjaXI7XCIsXCLiqKVcIjpcIiZwbHVzZHU7XCIsXCLiqbJcIjpcIiZwbHVzZTtcIixcIuKoplwiOlwiJnBsdXNzaW07XCIsXCLiqKdcIjpcIiZwbHVzdHdvO1wiLFwi4qiVXCI6XCImcG9pbnRpbnQ7XCIsXCLwnZWhXCI6XCImcG9wZjtcIixcIsKjXCI6XCImcG91bmQ7XCIsXCLiqrNcIjpcIiZwckU7XCIsXCLiqrdcIjpcIiZwcmVjYXBwcm94O1wiLFwi4qq5XCI6XCImcHJuYXA7XCIsXCLiqrVcIjpcIiZwcm5FO1wiLFwi4ouoXCI6XCImcHJuc2ltO1wiLFwi4oCyXCI6XCImcHJpbWU7XCIsXCLijK5cIjpcIiZwcm9mYWxhcjtcIixcIuKMklwiOlwiJnByb2ZsaW5lO1wiLFwi4oyTXCI6XCImcHJvZnN1cmY7XCIsXCLiirBcIjpcIiZwcnVyZWw7XCIsXCLwnZOFXCI6XCImcHNjcjtcIixcIs+IXCI6XCImcHNpO1wiLFwi4oCIXCI6XCImcHVuY3NwO1wiLFwi8J2UrlwiOlwiJnFmcjtcIixcIvCdlaJcIjpcIiZxb3BmO1wiLFwi4oGXXCI6XCImcXByaW1lO1wiLFwi8J2ThlwiOlwiJnFzY3I7XCIsXCLiqJZcIjpcIiZxdWF0aW50O1wiLFwiP1wiOlwiJnF1ZXN0O1wiLFwi4qScXCI6XCImckF0YWlsO1wiLFwi4qWkXCI6XCImckhhcjtcIixcIuKIvcyxXCI6XCImcmFjZTtcIixcIsWVXCI6XCImcmFjdXRlO1wiLFwi4qazXCI6XCImcmFlbXB0eXY7XCIsXCLippJcIjpcIiZyYW5nZDtcIixcIuKmpVwiOlwiJnJhbmdlO1wiLFwiwrtcIjpcIiZyYXF1bztcIixcIuKltVwiOlwiJnJhcnJhcDtcIixcIuKkoFwiOlwiJnJhcnJiZnM7XCIsXCLipLNcIjpcIiZyYXJyYztcIixcIuKknlwiOlwiJnJhcnJmcztcIixcIuKlhVwiOlwiJnJhcnJwbDtcIixcIuKltFwiOlwiJnJhcnJzaW07XCIsXCLihqNcIjpcIiZyaWdodGFycm93dGFpbDtcIixcIuKGnVwiOlwiJnJpZ2h0c3F1aWdhcnJvdztcIixcIuKkmlwiOlwiJnJhdGFpbDtcIixcIuKItlwiOlwiJnJhdGlvO1wiLFwi4p2zXCI6XCImcmJicms7XCIsXCJ9XCI6XCImcmN1YjtcIixcIl1cIjpcIiZyc3FiO1wiLFwi4qaMXCI6XCImcmJya2U7XCIsXCLipo5cIjpcIiZyYnJrc2xkO1wiLFwi4qaQXCI6XCImcmJya3NsdTtcIixcIsWZXCI6XCImcmNhcm9uO1wiLFwixZdcIjpcIiZyY2VkaWw7XCIsXCLRgFwiOlwiJnJjeTtcIixcIuKkt1wiOlwiJnJkY2E7XCIsXCLipalcIjpcIiZyZGxkaGFyO1wiLFwi4oazXCI6XCImcmRzaDtcIixcIuKWrVwiOlwiJnJlY3Q7XCIsXCLipb1cIjpcIiZyZmlzaHQ7XCIsXCLwnZSvXCI6XCImcmZyO1wiLFwi4qWsXCI6XCImcmhhcnVsO1wiLFwiz4FcIjpcIiZyaG87XCIsXCLPsVwiOlwiJnZhcnJobztcIixcIuKHiVwiOlwiJnJyYXJyO1wiLFwi4ouMXCI6XCImcnRocmVlO1wiLFwiy5pcIjpcIiZyaW5nO1wiLFwi4oCPXCI6XCImcmxtO1wiLFwi4o6xXCI6XCImcm1vdXN0YWNoZTtcIixcIuKrrlwiOlwiJnJubWlkO1wiLFwi4p+tXCI6XCImcm9hbmc7XCIsXCLih75cIjpcIiZyb2FycjtcIixcIuKmhlwiOlwiJnJvcGFyO1wiLFwi8J2Vo1wiOlwiJnJvcGY7XCIsXCLiqK5cIjpcIiZyb3BsdXM7XCIsXCLiqLVcIjpcIiZyb3RpbWVzO1wiLFwiKVwiOlwiJnJwYXI7XCIsXCLippRcIjpcIiZycGFyZ3Q7XCIsXCLiqJJcIjpcIiZycHBvbGludDtcIixcIuKAulwiOlwiJnJzYXF1bztcIixcIvCdk4dcIjpcIiZyc2NyO1wiLFwi4ouKXCI6XCImcnRpbWVzO1wiLFwi4pa5XCI6XCImdHJpYW5nbGVyaWdodDtcIixcIuKnjlwiOlwiJnJ0cmlsdHJpO1wiLFwi4qWoXCI6XCImcnVsdWhhcjtcIixcIuKEnlwiOlwiJnJ4O1wiLFwixZtcIjpcIiZzYWN1dGU7XCIsXCLiqrRcIjpcIiZzY0U7XCIsXCLiqrhcIjpcIiZzdWNjYXBwcm94O1wiLFwixaFcIjpcIiZzY2Fyb247XCIsXCLFn1wiOlwiJnNjZWRpbDtcIixcIsWdXCI6XCImc2NpcmM7XCIsXCLiqrZcIjpcIiZzdWNjbmVxcTtcIixcIuKqulwiOlwiJnN1Y2NuYXBwcm94O1wiLFwi4oupXCI6XCImc3VjY25zaW07XCIsXCLiqJNcIjpcIiZzY3BvbGludDtcIixcItGBXCI6XCImc2N5O1wiLFwi4ouFXCI6XCImc2RvdDtcIixcIuKpplwiOlwiJnNkb3RlO1wiLFwi4oeYXCI6XCImc2VBcnI7XCIsXCLCp1wiOlwiJnNlY3Q7XCIsXCI7XCI6XCImc2VtaTtcIixcIuKkqVwiOlwiJnRvc2E7XCIsXCLinLZcIjpcIiZzZXh0O1wiLFwi8J2UsFwiOlwiJnNmcjtcIixcIuKZr1wiOlwiJnNoYXJwO1wiLFwi0YlcIjpcIiZzaGNoY3k7XCIsXCLRiFwiOlwiJnNoY3k7XCIsXCLCrVwiOlwiJnNoeTtcIixcIs+DXCI6XCImc2lnbWE7XCIsXCLPglwiOlwiJnZhcnNpZ21hO1wiLFwi4qmqXCI6XCImc2ltZG90O1wiLFwi4qqeXCI6XCImc2ltZztcIixcIuKqoFwiOlwiJnNpbWdFO1wiLFwi4qqdXCI6XCImc2ltbDtcIixcIuKqn1wiOlwiJnNpbWxFO1wiLFwi4omGXCI6XCImc2ltbmU7XCIsXCLiqKRcIjpcIiZzaW1wbHVzO1wiLFwi4qWyXCI6XCImc2ltcmFycjtcIixcIuKos1wiOlwiJnNtYXNocDtcIixcIuKnpFwiOlwiJnNtZXBhcnNsO1wiLFwi4oyjXCI6XCImc3NtaWxlO1wiLFwi4qqqXCI6XCImc210O1wiLFwi4qqsXCI6XCImc210ZTtcIixcIuKqrO+4gFwiOlwiJnNtdGVzO1wiLFwi0YxcIjpcIiZzb2Z0Y3k7XCIsXCIvXCI6XCImc29sO1wiLFwi4qeEXCI6XCImc29sYjtcIixcIuKMv1wiOlwiJnNvbGJhcjtcIixcIvCdlaRcIjpcIiZzb3BmO1wiLFwi4pmgXCI6XCImc3BhZGVzdWl0O1wiLFwi4oqT77iAXCI6XCImc3FjYXBzO1wiLFwi4oqU77iAXCI6XCImc3FjdXBzO1wiLFwi8J2TiFwiOlwiJnNzY3I7XCIsXCLimIZcIjpcIiZzdGFyO1wiLFwi4oqCXCI6XCImc3Vic2V0O1wiLFwi4quFXCI6XCImc3Vic2V0ZXFxO1wiLFwi4qq9XCI6XCImc3ViZG90O1wiLFwi4quDXCI6XCImc3ViZWRvdDtcIixcIuKrgVwiOlwiJnN1Ym11bHQ7XCIsXCLiq4tcIjpcIiZzdWJzZXRuZXFxO1wiLFwi4oqKXCI6XCImc3Vic2V0bmVxO1wiLFwi4qq/XCI6XCImc3VicGx1cztcIixcIuKluVwiOlwiJnN1YnJhcnI7XCIsXCLiq4dcIjpcIiZzdWJzaW07XCIsXCLiq5VcIjpcIiZzdWJzdWI7XCIsXCLiq5NcIjpcIiZzdWJzdXA7XCIsXCLimapcIjpcIiZzdW5nO1wiLFwiwrlcIjpcIiZzdXAxO1wiLFwiwrJcIjpcIiZzdXAyO1wiLFwiwrNcIjpcIiZzdXAzO1wiLFwi4quGXCI6XCImc3Vwc2V0ZXFxO1wiLFwi4qq+XCI6XCImc3VwZG90O1wiLFwi4quYXCI6XCImc3VwZHN1YjtcIixcIuKrhFwiOlwiJnN1cGVkb3Q7XCIsXCLin4lcIjpcIiZzdXBoc29sO1wiLFwi4quXXCI6XCImc3VwaHN1YjtcIixcIuKlu1wiOlwiJnN1cGxhcnI7XCIsXCLiq4JcIjpcIiZzdXBtdWx0O1wiLFwi4quMXCI6XCImc3Vwc2V0bmVxcTtcIixcIuKKi1wiOlwiJnN1cHNldG5lcTtcIixcIuKrgFwiOlwiJnN1cHBsdXM7XCIsXCLiq4hcIjpcIiZzdXBzaW07XCIsXCLiq5RcIjpcIiZzdXBzdWI7XCIsXCLiq5ZcIjpcIiZzdXBzdXA7XCIsXCLih5lcIjpcIiZzd0FycjtcIixcIuKkqlwiOlwiJnN3bndhcjtcIixcIsOfXCI6XCImc3psaWc7XCIsXCLijJZcIjpcIiZ0YXJnZXQ7XCIsXCLPhFwiOlwiJnRhdTtcIixcIsWlXCI6XCImdGNhcm9uO1wiLFwixaNcIjpcIiZ0Y2VkaWw7XCIsXCLRglwiOlwiJnRjeTtcIixcIuKMlVwiOlwiJnRlbHJlYztcIixcIvCdlLFcIjpcIiZ0ZnI7XCIsXCLOuFwiOlwiJnRoZXRhO1wiLFwiz5FcIjpcIiZ2YXJ0aGV0YTtcIixcIsO+XCI6XCImdGhvcm47XCIsXCLDl1wiOlwiJnRpbWVzO1wiLFwi4qixXCI6XCImdGltZXNiYXI7XCIsXCLiqLBcIjpcIiZ0aW1lc2Q7XCIsXCLijLZcIjpcIiZ0b3Bib3Q7XCIsXCLiq7FcIjpcIiZ0b3BjaXI7XCIsXCLwnZWlXCI6XCImdG9wZjtcIixcIuKrmlwiOlwiJnRvcGZvcms7XCIsXCLigLRcIjpcIiZ0cHJpbWU7XCIsXCLilrVcIjpcIiZ1dHJpO1wiLFwi4omcXCI6XCImdHJpZTtcIixcIuKXrFwiOlwiJnRyaWRvdDtcIixcIuKoulwiOlwiJnRyaW1pbnVzO1wiLFwi4qi5XCI6XCImdHJpcGx1cztcIixcIuKnjVwiOlwiJnRyaXNiO1wiLFwi4qi7XCI6XCImdHJpdGltZTtcIixcIuKPolwiOlwiJnRycGV6aXVtO1wiLFwi8J2TiVwiOlwiJnRzY3I7XCIsXCLRhlwiOlwiJnRzY3k7XCIsXCLRm1wiOlwiJnRzaGN5O1wiLFwixadcIjpcIiZ0c3Ryb2s7XCIsXCLipaNcIjpcIiZ1SGFyO1wiLFwiw7pcIjpcIiZ1YWN1dGU7XCIsXCLRnlwiOlwiJnVicmN5O1wiLFwixa1cIjpcIiZ1YnJldmU7XCIsXCLDu1wiOlwiJnVjaXJjO1wiLFwi0YNcIjpcIiZ1Y3k7XCIsXCLFsVwiOlwiJnVkYmxhYztcIixcIuKlvlwiOlwiJnVmaXNodDtcIixcIvCdlLJcIjpcIiZ1ZnI7XCIsXCLDuVwiOlwiJnVncmF2ZTtcIixcIuKWgFwiOlwiJnVoYmxrO1wiLFwi4oycXCI6XCImdWxjb3JuZXI7XCIsXCLijI9cIjpcIiZ1bGNyb3A7XCIsXCLil7hcIjpcIiZ1bHRyaTtcIixcIsWrXCI6XCImdW1hY3I7XCIsXCLFs1wiOlwiJnVvZ29uO1wiLFwi8J2VplwiOlwiJnVvcGY7XCIsXCLPhVwiOlwiJnVwc2lsb247XCIsXCLih4hcIjpcIiZ1dWFycjtcIixcIuKMnVwiOlwiJnVyY29ybmVyO1wiLFwi4oyOXCI6XCImdXJjcm9wO1wiLFwixa9cIjpcIiZ1cmluZztcIixcIuKXuVwiOlwiJnVydHJpO1wiLFwi8J2TilwiOlwiJnVzY3I7XCIsXCLii7BcIjpcIiZ1dGRvdDtcIixcIsWpXCI6XCImdXRpbGRlO1wiLFwiw7xcIjpcIiZ1dW1sO1wiLFwi4qanXCI6XCImdXdhbmdsZTtcIixcIuKrqFwiOlwiJnZCYXI7XCIsXCLiq6lcIjpcIiZ2QmFydjtcIixcIuKmnFwiOlwiJnZhbmdydDtcIixcIuKKiu+4gFwiOlwiJnZzdWJuZTtcIixcIuKri++4gFwiOlwiJnZzdWJuRTtcIixcIuKKi++4gFwiOlwiJnZzdXBuZTtcIixcIuKrjO+4gFwiOlwiJnZzdXBuRTtcIixcItCyXCI6XCImdmN5O1wiLFwi4oq7XCI6XCImdmVlYmFyO1wiLFwi4omaXCI6XCImdmVlZXE7XCIsXCLii65cIjpcIiZ2ZWxsaXA7XCIsXCLwnZSzXCI6XCImdmZyO1wiLFwi8J2Vp1wiOlwiJnZvcGY7XCIsXCLwnZOLXCI6XCImdnNjcjtcIixcIuKmmlwiOlwiJnZ6aWd6YWc7XCIsXCLFtVwiOlwiJndjaXJjO1wiLFwi4qmfXCI6XCImd2VkYmFyO1wiLFwi4omZXCI6XCImd2VkZ2VxO1wiLFwi4oSYXCI6XCImd3A7XCIsXCLwnZS0XCI6XCImd2ZyO1wiLFwi8J2VqFwiOlwiJndvcGY7XCIsXCLwnZOMXCI6XCImd3NjcjtcIixcIvCdlLVcIjpcIiZ4ZnI7XCIsXCLOvlwiOlwiJnhpO1wiLFwi4ou7XCI6XCImeG5pcztcIixcIvCdlalcIjpcIiZ4b3BmO1wiLFwi8J2TjVwiOlwiJnhzY3I7XCIsXCLDvVwiOlwiJnlhY3V0ZTtcIixcItGPXCI6XCImeWFjeTtcIixcIsW3XCI6XCImeWNpcmM7XCIsXCLRi1wiOlwiJnljeTtcIixcIsKlXCI6XCImeWVuO1wiLFwi8J2UtlwiOlwiJnlmcjtcIixcItGXXCI6XCImeWljeTtcIixcIvCdlapcIjpcIiZ5b3BmO1wiLFwi8J2TjlwiOlwiJnlzY3I7XCIsXCLRjlwiOlwiJnl1Y3k7XCIsXCLDv1wiOlwiJnl1bWw7XCIsXCLFulwiOlwiJnphY3V0ZTtcIixcIsW+XCI6XCImemNhcm9uO1wiLFwi0LdcIjpcIiZ6Y3k7XCIsXCLFvFwiOlwiJnpkb3Q7XCIsXCLOtlwiOlwiJnpldGE7XCIsXCLwnZS3XCI6XCImemZyO1wiLFwi0LZcIjpcIiZ6aGN5O1wiLFwi4oedXCI6XCImemlncmFycjtcIixcIvCdlatcIjpcIiZ6b3BmO1wiLFwi8J2Tj1wiOlwiJnpzY3I7XCIsXCLigI1cIjpcIiZ6d2o7XCIsXCLigIxcIjpcIiZ6d25qO1wifX19OyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTp0cnVlfSk7ZXhwb3J0cy5udW1lcmljVW5pY29kZU1hcD17MDo2NTUzMywxMjg6ODM2NCwxMzA6ODIxOCwxMzE6NDAyLDEzMjo4MjIyLDEzMzo4MjMwLDEzNDo4MjI0LDEzNTo4MjI1LDEzNjo3MTAsMTM3OjgyNDAsMTM4OjM1MiwxMzk6ODI0OSwxNDA6MzM4LDE0MjozODEsMTQ1OjgyMTYsMTQ2OjgyMTcsMTQ3OjgyMjAsMTQ4OjgyMjEsMTQ5OjgyMjYsMTUwOjgyMTEsMTUxOjgyMTIsMTUyOjczMiwxNTM6ODQ4MiwxNTQ6MzUzLDE1NTo4MjUwLDE1NjozMzksMTU4OjM4MiwxNTk6Mzc2fTsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6dHJ1ZX0pO2V4cG9ydHMuZnJvbUNvZGVQb2ludD1TdHJpbmcuZnJvbUNvZGVQb2ludHx8ZnVuY3Rpb24oYXN0cmFsQ29kZVBvaW50KXtyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShNYXRoLmZsb29yKChhc3RyYWxDb2RlUG9pbnQtNjU1MzYpLzEwMjQpKzU1Mjk2LChhc3RyYWxDb2RlUG9pbnQtNjU1MzYpJTEwMjQrNTYzMjApfTtleHBvcnRzLmdldENvZGVQb2ludD1TdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0P2Z1bmN0aW9uKGlucHV0LHBvc2l0aW9uKXtyZXR1cm4gaW5wdXQuY29kZVBvaW50QXQocG9zaXRpb24pfTpmdW5jdGlvbihpbnB1dCxwb3NpdGlvbil7cmV0dXJuKGlucHV0LmNoYXJDb2RlQXQocG9zaXRpb24pLTU1Mjk2KSoxMDI0K2lucHV0LmNoYXJDb2RlQXQocG9zaXRpb24rMSktNTYzMjArNjU1MzZ9O2V4cG9ydHMuaGlnaFN1cnJvZ2F0ZUZyb209NTUyOTY7ZXhwb3J0cy5oaWdoU3Vycm9nYXRlVG89NTYzMTk7IiwiLyohXG4gKiBpbWFnZXNMb2FkZWQgdjUuMC4wXG4gKiBKYXZhU2NyaXB0IGlzIGFsbCBsaWtlIFwiWW91IGltYWdlcyBhcmUgZG9uZSB5ZXQgb3Igd2hhdD9cIlxuICogTUlUIExpY2Vuc2VcbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoIHdpbmRvdywgcmVxdWlyZSgnZXYtZW1pdHRlcicpICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuaW1hZ2VzTG9hZGVkID0gZmFjdG9yeSggd2luZG93LCB3aW5kb3cuRXZFbWl0dGVyICk7XG4gIH1cblxufSApKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMsXG4gICAgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIgKSB7XG5cbmxldCAkID0gd2luZG93LmpRdWVyeTtcbmxldCBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gdHVybiBlbGVtZW50IG9yIG5vZGVMaXN0IGludG8gYW4gYXJyYXlcbmZ1bmN0aW9uIG1ha2VBcnJheSggb2JqICkge1xuICAvLyB1c2Ugb2JqZWN0IGlmIGFscmVhZHkgYW4gYXJyYXlcbiAgaWYgKCBBcnJheS5pc0FycmF5KCBvYmogKSApIHJldHVybiBvYmo7XG5cbiAgbGV0IGlzQXJyYXlMaWtlID0gdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqLmxlbmd0aCA9PSAnbnVtYmVyJztcbiAgLy8gY29udmVydCBub2RlTGlzdCB0byBhcnJheVxuICBpZiAoIGlzQXJyYXlMaWtlICkgcmV0dXJuIFsgLi4ub2JqIF07XG5cbiAgLy8gYXJyYXkgb2Ygc2luZ2xlIGluZGV4XG4gIHJldHVybiBbIG9iaiBdO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBpbWFnZXNMb2FkZWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBAcGFyYW0ge1tBcnJheSwgRWxlbWVudCwgTm9kZUxpc3QsIFN0cmluZ119IGVsZW1cbiAqIEBwYXJhbSB7W09iamVjdCwgRnVuY3Rpb25dfSBvcHRpb25zIC0gaWYgZnVuY3Rpb24sIHVzZSBhcyBjYWxsYmFja1xuICogQHBhcmFtIHtGdW5jdGlvbn0gb25BbHdheXMgLSBjYWxsYmFjayBmdW5jdGlvblxuICogQHJldHVybnMge0ltYWdlc0xvYWRlZH1cbiAqL1xuZnVuY3Rpb24gSW1hZ2VzTG9hZGVkKCBlbGVtLCBvcHRpb25zLCBvbkFsd2F5cyApIHtcbiAgLy8gY29lcmNlIEltYWdlc0xvYWRlZCgpIHdpdGhvdXQgbmV3LCB0byBiZSBuZXcgSW1hZ2VzTG9hZGVkKClcbiAgaWYgKCAhKCB0aGlzIGluc3RhbmNlb2YgSW1hZ2VzTG9hZGVkICkgKSB7XG4gICAgcmV0dXJuIG5ldyBJbWFnZXNMb2FkZWQoIGVsZW0sIG9wdGlvbnMsIG9uQWx3YXlzICk7XG4gIH1cbiAgLy8gdXNlIGVsZW0gYXMgc2VsZWN0b3Igc3RyaW5nXG4gIGxldCBxdWVyeUVsZW0gPSBlbGVtO1xuICBpZiAoIHR5cGVvZiBlbGVtID09ICdzdHJpbmcnICkge1xuICAgIHF1ZXJ5RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIGVsZW0gKTtcbiAgfVxuICAvLyBiYWlsIGlmIGJhZCBlbGVtZW50XG4gIGlmICggIXF1ZXJ5RWxlbSApIHtcbiAgICBjb25zb2xlLmVycm9yKGBCYWQgZWxlbWVudCBmb3IgaW1hZ2VzTG9hZGVkICR7cXVlcnlFbGVtIHx8IGVsZW19YCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5lbGVtZW50cyA9IG1ha2VBcnJheSggcXVlcnlFbGVtICk7XG4gIHRoaXMub3B0aW9ucyA9IHt9O1xuICAvLyBzaGlmdCBhcmd1bWVudHMgaWYgbm8gb3B0aW9ucyBzZXRcbiAgaWYgKCB0eXBlb2Ygb3B0aW9ucyA9PSAnZnVuY3Rpb24nICkge1xuICAgIG9uQWx3YXlzID0gb3B0aW9ucztcbiAgfSBlbHNlIHtcbiAgICBPYmplY3QuYXNzaWduKCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMgKTtcbiAgfVxuXG4gIGlmICggb25BbHdheXMgKSB0aGlzLm9uKCAnYWx3YXlzJywgb25BbHdheXMgKTtcblxuICB0aGlzLmdldEltYWdlcygpO1xuICAvLyBhZGQgalF1ZXJ5IERlZmVycmVkIG9iamVjdFxuICBpZiAoICQgKSB0aGlzLmpxRGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXG4gIC8vIEhBQ0sgY2hlY2sgYXN5bmMgdG8gYWxsb3cgdGltZSB0byBiaW5kIGxpc3RlbmVyc1xuICBzZXRUaW1lb3V0KCB0aGlzLmNoZWNrLmJpbmQoIHRoaXMgKSApO1xufVxuXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRXZFbWl0dGVyLnByb3RvdHlwZSApO1xuXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmdldEltYWdlcyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmltYWdlcyA9IFtdO1xuXG4gIC8vIGZpbHRlciAmIGZpbmQgaXRlbXMgaWYgd2UgaGF2ZSBhbiBpdGVtIHNlbGVjdG9yXG4gIHRoaXMuZWxlbWVudHMuZm9yRWFjaCggdGhpcy5hZGRFbGVtZW50SW1hZ2VzLCB0aGlzICk7XG59O1xuXG5jb25zdCBlbGVtZW50Tm9kZVR5cGVzID0gWyAxLCA5LCAxMSBdO1xuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gZWxlbVxuICovXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmFkZEVsZW1lbnRJbWFnZXMgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgLy8gZmlsdGVyIHNpYmxpbmdzXG4gIGlmICggZWxlbS5ub2RlTmFtZSA9PT0gJ0lNRycgKSB7XG4gICAgdGhpcy5hZGRJbWFnZSggZWxlbSApO1xuICB9XG4gIC8vIGdldCBiYWNrZ3JvdW5kIGltYWdlIG9uIGVsZW1lbnRcbiAgaWYgKCB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZCA9PT0gdHJ1ZSApIHtcbiAgICB0aGlzLmFkZEVsZW1lbnRCYWNrZ3JvdW5kSW1hZ2VzKCBlbGVtICk7XG4gIH1cblxuICAvLyBmaW5kIGNoaWxkcmVuXG4gIC8vIG5vIG5vbi1lbGVtZW50IG5vZGVzLCAjMTQzXG4gIGxldCB7IG5vZGVUeXBlIH0gPSBlbGVtO1xuICBpZiAoICFub2RlVHlwZSB8fCAhZWxlbWVudE5vZGVUeXBlcy5pbmNsdWRlcyggbm9kZVR5cGUgKSApIHJldHVybjtcblxuICBsZXQgY2hpbGRJbWdzID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKTtcbiAgLy8gY29uY2F0IGNoaWxkRWxlbXMgdG8gZmlsdGVyRm91bmQgYXJyYXlcbiAgZm9yICggbGV0IGltZyBvZiBjaGlsZEltZ3MgKSB7XG4gICAgdGhpcy5hZGRJbWFnZSggaW1nICk7XG4gIH1cblxuICAvLyBnZXQgY2hpbGQgYmFja2dyb3VuZCBpbWFnZXNcbiAgaWYgKCB0eXBlb2YgdGhpcy5vcHRpb25zLmJhY2tncm91bmQgPT0gJ3N0cmluZycgKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZCApO1xuICAgIGZvciAoIGxldCBjaGlsZCBvZiBjaGlsZHJlbiApIHtcbiAgICAgIHRoaXMuYWRkRWxlbWVudEJhY2tncm91bmRJbWFnZXMoIGNoaWxkICk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCByZVVSTCA9IC91cmxcXCgoWydcIl0pPyguKj8pXFwxXFwpL2dpO1xuXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmFkZEVsZW1lbnRCYWNrZ3JvdW5kSW1hZ2VzID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoIGVsZW0gKTtcbiAgLy8gRmlyZWZveCByZXR1cm5zIG51bGwgaWYgaW4gYSBoaWRkZW4gaWZyYW1lIGh0dHBzOi8vYnVnemlsLmxhLzU0ODM5N1xuICBpZiAoICFzdHlsZSApIHJldHVybjtcblxuICAvLyBnZXQgdXJsIGluc2lkZSB1cmwoXCIuLi5cIilcbiAgbGV0IG1hdGNoZXMgPSByZVVSTC5leGVjKCBzdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgKTtcbiAgd2hpbGUgKCBtYXRjaGVzICE9PSBudWxsICkge1xuICAgIGxldCB1cmwgPSBtYXRjaGVzICYmIG1hdGNoZXNbMl07XG4gICAgaWYgKCB1cmwgKSB7XG4gICAgICB0aGlzLmFkZEJhY2tncm91bmQoIHVybCwgZWxlbSApO1xuICAgIH1cbiAgICBtYXRjaGVzID0gcmVVUkwuZXhlYyggc3R5bGUuYmFja2dyb3VuZEltYWdlICk7XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtJbWFnZX0gaW1nXG4gKi9cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUuYWRkSW1hZ2UgPSBmdW5jdGlvbiggaW1nICkge1xuICBsZXQgbG9hZGluZ0ltYWdlID0gbmV3IExvYWRpbmdJbWFnZSggaW1nICk7XG4gIHRoaXMuaW1hZ2VzLnB1c2goIGxvYWRpbmdJbWFnZSApO1xufTtcblxuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5hZGRCYWNrZ3JvdW5kID0gZnVuY3Rpb24oIHVybCwgZWxlbSApIHtcbiAgbGV0IGJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZCggdXJsLCBlbGVtICk7XG4gIHRoaXMuaW1hZ2VzLnB1c2goIGJhY2tncm91bmQgKTtcbn07XG5cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wcm9ncmVzc2VkQ291bnQgPSAwO1xuICB0aGlzLmhhc0FueUJyb2tlbiA9IGZhbHNlO1xuICAvLyBjb21wbGV0ZSBpZiBubyBpbWFnZXNcbiAgaWYgKCAhdGhpcy5pbWFnZXMubGVuZ3RoICkge1xuICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1zdHlsZSAqL1xuICBsZXQgb25Qcm9ncmVzcyA9ICggaW1hZ2UsIGVsZW0sIG1lc3NhZ2UgKSA9PiB7XG4gICAgLy8gSEFDSyAtIENocm9tZSB0cmlnZ2VycyBldmVudCBiZWZvcmUgb2JqZWN0IHByb3BlcnRpZXMgaGF2ZSBjaGFuZ2VkLiAjODNcbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICB0aGlzLnByb2dyZXNzKCBpbWFnZSwgZWxlbSwgbWVzc2FnZSApO1xuICAgIH0gKTtcbiAgfTtcblxuICB0aGlzLmltYWdlcy5mb3JFYWNoKCBmdW5jdGlvbiggbG9hZGluZ0ltYWdlICkge1xuICAgIGxvYWRpbmdJbWFnZS5vbmNlKCAncHJvZ3Jlc3MnLCBvblByb2dyZXNzICk7XG4gICAgbG9hZGluZ0ltYWdlLmNoZWNrKCk7XG4gIH0gKTtcbn07XG5cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUucHJvZ3Jlc3MgPSBmdW5jdGlvbiggaW1hZ2UsIGVsZW0sIG1lc3NhZ2UgKSB7XG4gIHRoaXMucHJvZ3Jlc3NlZENvdW50Kys7XG4gIHRoaXMuaGFzQW55QnJva2VuID0gdGhpcy5oYXNBbnlCcm9rZW4gfHwgIWltYWdlLmlzTG9hZGVkO1xuICAvLyBwcm9ncmVzcyBldmVudFxuICB0aGlzLmVtaXRFdmVudCggJ3Byb2dyZXNzJywgWyB0aGlzLCBpbWFnZSwgZWxlbSBdICk7XG4gIGlmICggdGhpcy5qcURlZmVycmVkICYmIHRoaXMuanFEZWZlcnJlZC5ub3RpZnkgKSB7XG4gICAgdGhpcy5qcURlZmVycmVkLm5vdGlmeSggdGhpcywgaW1hZ2UgKTtcbiAgfVxuICAvLyBjaGVjayBpZiBjb21wbGV0ZWRcbiAgaWYgKCB0aGlzLnByb2dyZXNzZWRDb3VudCA9PT0gdGhpcy5pbWFnZXMubGVuZ3RoICkge1xuICAgIHRoaXMuY29tcGxldGUoKTtcbiAgfVxuXG4gIGlmICggdGhpcy5vcHRpb25zLmRlYnVnICYmIGNvbnNvbGUgKSB7XG4gICAgY29uc29sZS5sb2coIGBwcm9ncmVzczogJHttZXNzYWdlfWAsIGltYWdlLCBlbGVtICk7XG4gIH1cbn07XG5cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgbGV0IGV2ZW50TmFtZSA9IHRoaXMuaGFzQW55QnJva2VuID8gJ2ZhaWwnIDogJ2RvbmUnO1xuICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuICB0aGlzLmVtaXRFdmVudCggZXZlbnROYW1lLCBbIHRoaXMgXSApO1xuICB0aGlzLmVtaXRFdmVudCggJ2Fsd2F5cycsIFsgdGhpcyBdICk7XG4gIGlmICggdGhpcy5qcURlZmVycmVkICkge1xuICAgIGxldCBqcU1ldGhvZCA9IHRoaXMuaGFzQW55QnJva2VuID8gJ3JlamVjdCcgOiAncmVzb2x2ZSc7XG4gICAgdGhpcy5qcURlZmVycmVkWyBqcU1ldGhvZCBdKCB0aGlzICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBMb2FkaW5nSW1hZ2UoIGltZyApIHtcbiAgdGhpcy5pbWcgPSBpbWc7XG59XG5cbkxvYWRpbmdJbWFnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5cbkxvYWRpbmdJbWFnZS5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbigpIHtcbiAgLy8gSWYgY29tcGxldGUgaXMgdHJ1ZSBhbmQgYnJvd3NlciBzdXBwb3J0cyBuYXR1cmFsIHNpemVzLFxuICAvLyB0cnkgdG8gY2hlY2sgZm9yIGltYWdlIHN0YXR1cyBtYW51YWxseS5cbiAgbGV0IGlzQ29tcGxldGUgPSB0aGlzLmdldElzSW1hZ2VDb21wbGV0ZSgpO1xuICBpZiAoIGlzQ29tcGxldGUgKSB7XG4gICAgLy8gcmVwb3J0IGJhc2VkIG9uIG5hdHVyYWxXaWR0aFxuICAgIHRoaXMuY29uZmlybSggdGhpcy5pbWcubmF0dXJhbFdpZHRoICE9PSAwLCAnbmF0dXJhbFdpZHRoJyApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIElmIG5vbmUgb2YgdGhlIGNoZWNrcyBhYm92ZSBtYXRjaGVkLCBzaW11bGF0ZSBsb2FkaW5nIG9uIGRldGFjaGVkIGVsZW1lbnQuXG4gIHRoaXMucHJveHlJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAvLyBhZGQgY3Jvc3NPcmlnaW4gYXR0cmlidXRlLiAjMjA0XG4gIGlmICggdGhpcy5pbWcuY3Jvc3NPcmlnaW4gKSB7XG4gICAgdGhpcy5wcm94eUltYWdlLmNyb3NzT3JpZ2luID0gdGhpcy5pbWcuY3Jvc3NPcmlnaW47XG4gIH1cbiAgdGhpcy5wcm94eUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgdGhpcyApO1xuICB0aGlzLnByb3h5SW1hZ2UuYWRkRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgdGhpcyApO1xuICAvLyBiaW5kIHRvIGltYWdlIGFzIHdlbGwgZm9yIEZpcmVmb3guICMxOTFcbiAgdGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCB0aGlzICk7XG4gIHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcbiAgdGhpcy5wcm94eUltYWdlLnNyYyA9IHRoaXMuaW1nLmN1cnJlbnRTcmMgfHwgdGhpcy5pbWcuc3JjO1xufTtcblxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5nZXRJc0ltYWdlQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gY2hlY2sgZm9yIG5vbi16ZXJvLCBub24tdW5kZWZpbmVkIG5hdHVyYWxXaWR0aFxuICAvLyBmaXhlcyBTYWZhcmkrSW5maW5pdGVTY3JvbGwrTWFzb25yeSBidWcgaW5maW5pdGUtc2Nyb2xsIzY3MVxuICByZXR1cm4gdGhpcy5pbWcuY29tcGxldGUgJiYgdGhpcy5pbWcubmF0dXJhbFdpZHRoO1xufTtcblxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5jb25maXJtID0gZnVuY3Rpb24oIGlzTG9hZGVkLCBtZXNzYWdlICkge1xuICB0aGlzLmlzTG9hZGVkID0gaXNMb2FkZWQ7XG4gIGxldCB7IHBhcmVudE5vZGUgfSA9IHRoaXMuaW1nO1xuICAvLyBlbWl0IHByb2dyZXNzIHdpdGggcGFyZW50IDxwaWN0dXJlPiBvciBzZWxmIDxpbWc+XG4gIGxldCBlbGVtID0gcGFyZW50Tm9kZS5ub2RlTmFtZSA9PT0gJ1BJQ1RVUkUnID8gcGFyZW50Tm9kZSA6IHRoaXMuaW1nO1xuICB0aGlzLmVtaXRFdmVudCggJ3Byb2dyZXNzJywgWyB0aGlzLCBlbGVtLCBtZXNzYWdlIF0gKTtcbn07XG5cbi8vIC0tLS0tIGV2ZW50cyAtLS0tLSAvL1xuXG4vLyB0cmlnZ2VyIHNwZWNpZmllZCBoYW5kbGVyIGZvciBldmVudCB0eXBlXG5Mb2FkaW5nSW1hZ2UucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICBsZXQgbWV0aG9kID0gJ29uJyArIGV2ZW50LnR5cGU7XG4gIGlmICggdGhpc1sgbWV0aG9kIF0gKSB7XG4gICAgdGhpc1sgbWV0aG9kIF0oIGV2ZW50ICk7XG4gIH1cbn07XG5cbkxvYWRpbmdJbWFnZS5wcm90b3R5cGUub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY29uZmlybSggdHJ1ZSwgJ29ubG9hZCcgKTtcbiAgdGhpcy51bmJpbmRFdmVudHMoKTtcbn07XG5cbkxvYWRpbmdJbWFnZS5wcm90b3R5cGUub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNvbmZpcm0oIGZhbHNlLCAnb25lcnJvcicgKTtcbiAgdGhpcy51bmJpbmRFdmVudHMoKTtcbn07XG5cbkxvYWRpbmdJbWFnZS5wcm90b3R5cGUudW5iaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucHJveHlJbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMgKTtcbiAgdGhpcy5wcm94eUltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcbiAgdGhpcy5pbWcucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCB0aGlzICk7XG4gIHRoaXMuaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEJhY2tncm91bmQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gQmFja2dyb3VuZCggdXJsLCBlbGVtZW50ICkge1xuICB0aGlzLnVybCA9IHVybDtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbn1cblxuLy8gaW5oZXJpdCBMb2FkaW5nSW1hZ2UgcHJvdG90eXBlXG5CYWNrZ3JvdW5kLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIExvYWRpbmdJbWFnZS5wcm90b3R5cGUgKTtcblxuQmFja2dyb3VuZC5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCB0aGlzICk7XG4gIHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcbiAgdGhpcy5pbWcuc3JjID0gdGhpcy51cmw7XG4gIC8vIGNoZWNrIGlmIGltYWdlIGlzIGFscmVhZHkgY29tcGxldGVcbiAgbGV0IGlzQ29tcGxldGUgPSB0aGlzLmdldElzSW1hZ2VDb21wbGV0ZSgpO1xuICBpZiAoIGlzQ29tcGxldGUgKSB7XG4gICAgdGhpcy5jb25maXJtKCB0aGlzLmltZy5uYXR1cmFsV2lkdGggIT09IDAsICduYXR1cmFsV2lkdGgnICk7XG4gICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgfVxufTtcblxuQmFja2dyb3VuZC5wcm90b3R5cGUudW5iaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdsb2FkJywgdGhpcyApO1xuICB0aGlzLmltZy5yZW1vdmVFdmVudExpc3RlbmVyKCAnZXJyb3InLCB0aGlzICk7XG59O1xuXG5CYWNrZ3JvdW5kLnByb3RvdHlwZS5jb25maXJtID0gZnVuY3Rpb24oIGlzTG9hZGVkLCBtZXNzYWdlICkge1xuICB0aGlzLmlzTG9hZGVkID0gaXNMb2FkZWQ7XG4gIHRoaXMuZW1pdEV2ZW50KCAncHJvZ3Jlc3MnLCBbIHRoaXMsIHRoaXMuZWxlbWVudCwgbWVzc2FnZSBdICk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBqUXVlcnkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuSW1hZ2VzTG9hZGVkLm1ha2VKUXVlcnlQbHVnaW4gPSBmdW5jdGlvbiggalF1ZXJ5ICkge1xuICBqUXVlcnkgPSBqUXVlcnkgfHwgd2luZG93LmpRdWVyeTtcbiAgaWYgKCAhalF1ZXJ5ICkgcmV0dXJuO1xuXG4gIC8vIHNldCBsb2NhbCB2YXJpYWJsZVxuICAkID0galF1ZXJ5O1xuICAvLyAkKCkuaW1hZ2VzTG9hZGVkKClcbiAgJC5mbi5pbWFnZXNMb2FkZWQgPSBmdW5jdGlvbiggb3B0aW9ucywgb25BbHdheXMgKSB7XG4gICAgbGV0IGluc3RhbmNlID0gbmV3IEltYWdlc0xvYWRlZCggdGhpcywgb3B0aW9ucywgb25BbHdheXMgKTtcbiAgICByZXR1cm4gaW5zdGFuY2UuanFEZWZlcnJlZC5wcm9taXNlKCAkKCB0aGlzICkgKTtcbiAgfTtcbn07XG4vLyB0cnkgbWFraW5nIHBsdWdpblxuSW1hZ2VzTG9hZGVkLm1ha2VKUXVlcnlQbHVnaW4oKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnJldHVybiBJbWFnZXNMb2FkZWQ7XG5cbn0gKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zcmMvbm9ybWFsaXplV2hlZWwuanMnKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEV4ZWN1dGlvbkVudmlyb25tZW50XG4gKi9cblxuLypqc2xpbnQgZXZpbDogdHJ1ZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBjYW5Vc2VET00gPSAhIShcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgd2luZG93LmRvY3VtZW50ICYmXG4gIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50XG4pO1xuXG4vKipcbiAqIFNpbXBsZSwgbGlnaHR3ZWlnaHQgbW9kdWxlIGFzc2lzdGluZyB3aXRoIHRoZSBkZXRlY3Rpb24gYW5kIGNvbnRleHQgb2ZcbiAqIFdvcmtlci4gSGVscHMgYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jaWVzIGFuZCBhbGxvd3MgY29kZSB0byByZWFzb24gYWJvdXRcbiAqIHdoZXRoZXIgb3Igbm90IHRoZXkgYXJlIGluIGEgV29ya2VyLCBldmVuIGlmIHRoZXkgbmV2ZXIgaW5jbHVkZSB0aGUgbWFpblxuICogYFJlYWN0V29ya2VyYCBkZXBlbmRlbmN5LlxuICovXG52YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cbiAgY2FuVXNlRE9NOiBjYW5Vc2VET00sXG5cbiAgY2FuVXNlV29ya2VyczogdHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcsXG5cbiAgY2FuVXNlRXZlbnRMaXN0ZW5lcnM6XG4gICAgY2FuVXNlRE9NICYmICEhKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIHx8IHdpbmRvdy5hdHRhY2hFdmVudCksXG5cbiAgY2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW4sXG5cbiAgaXNJbldvcmtlcjogIWNhblVzZURPTSAvLyBGb3Igbm93LCB0aGlzIGlzIHRydWUgLSBtaWdodCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS5cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMDQtcHJlc2VudCBGYWNlYm9vay4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgVXNlckFnZW50X0RFUFJFQ0FURURcbiAqL1xuXG4vKipcbiAqICBQcm92aWRlcyBlbnRpcmVseSBjbGllbnQtc2lkZSBVc2VyIEFnZW50IGFuZCBPUyBkZXRlY3Rpb24uIFlvdSBzaG91bGQgcHJlZmVyXG4gKiAgdGhlIG5vbi1kZXByZWNhdGVkIFVzZXJBZ2VudCBtb2R1bGUgd2hlbiBwb3NzaWJsZSwgd2hpY2ggZXhwb3NlcyBvdXJcbiAqICBhdXRob3JpdGF0aXZlIHNlcnZlci1zaWRlIFBIUC1iYXNlZCBkZXRlY3Rpb24gdG8gdGhlIGNsaWVudC5cbiAqXG4gKiAgVXNhZ2UgaXMgc3RyYWlnaHRmb3J3YXJkOlxuICpcbiAqICAgIGlmIChVc2VyQWdlbnRfREVQUkVDQVRFRC5pZSgpKSB7XG4gKiAgICAgIC8vICBJRVxuICogICAgfVxuICpcbiAqICBZb3UgY2FuIGFsc28gZG8gdmVyc2lvbiBjaGVja3M6XG4gKlxuICogICAgaWYgKFVzZXJBZ2VudF9ERVBSRUNBVEVELmllKCkgPj0gNykge1xuICogICAgICAvLyAgSUU3IG9yIGJldHRlclxuICogICAgfVxuICpcbiAqICBUaGUgYnJvd3NlciBmdW5jdGlvbnMgd2lsbCByZXR1cm4gTmFOIGlmIHRoZSBicm93c2VyIGRvZXMgbm90IG1hdGNoLCBzb1xuICogIHlvdSBjYW4gYWxzbyBkbyB2ZXJzaW9uIGNvbXBhcmVzIHRoZSBvdGhlciB3YXk6XG4gKlxuICogICAgaWYgKFVzZXJBZ2VudF9ERVBSRUNBVEVELmllKCkgPCA3KSB7XG4gKiAgICAgIC8vICBJRTYgb3Igd29yc2VcbiAqICAgIH1cbiAqXG4gKiAgTm90ZSB0aGF0IHRoZSB2ZXJzaW9uIGlzIGEgZmxvYXQgYW5kIG1heSBpbmNsdWRlIGEgbWlub3IgdmVyc2lvbiBudW1iZXIsXG4gKiAgc28geW91IHNob3VsZCBhbHdheXMgdXNlIHJhbmdlIG9wZXJhdG9ycyB0byBwZXJmb3JtIGNvbXBhcmlzb25zLCBub3RcbiAqICBzdHJpY3QgZXF1YWxpdHkuXG4gKlxuICogICoqTm90ZToqKiBZb3Ugc2hvdWxkICoqc3Ryb25nbHkqKiBwcmVmZXIgY2FwYWJpbGl0eSBkZXRlY3Rpb24gdG8gYnJvd3NlclxuICogIHZlcnNpb24gZGV0ZWN0aW9uIHdoZXJlIGl0J3MgcmVhc29uYWJsZTpcbiAqXG4gKiAgICBodHRwOi8vd3d3LnF1aXJrc21vZGUub3JnL2pzL3N1cHBvcnQuaHRtbFxuICpcbiAqICBGdXJ0aGVyLCB3ZSBoYXZlIGEgbGFyZ2UgbnVtYmVyIG9mIG1hdHVyZSB3cmFwcGVyIGZ1bmN0aW9ucyBhbmQgY2xhc3Nlc1xuICogIHdoaWNoIGFic3RyYWN0IGF3YXkgbWFueSBicm93c2VyIGlycmVndWxhcml0aWVzLiBDaGVjayB0aGUgZG9jdW1lbnRhdGlvbixcbiAqICBncmVwIGZvciB0aGluZ3MsIG9yIGFzayBvbiBqYXZhc2NyaXB0QGxpc3RzLmZhY2Vib29rLmNvbSBiZWZvcmUgd3JpdGluZyB5ZXRcbiAqICBhbm90aGVyIGNvcHkgb2YgXCJldmVudCB8fCB3aW5kb3cuZXZlbnRcIi5cbiAqXG4gKi9cblxudmFyIF9wb3B1bGF0ZWQgPSBmYWxzZTtcblxuLy8gQnJvd3NlcnNcbnZhciBfaWUsIF9maXJlZm94LCBfb3BlcmEsIF93ZWJraXQsIF9jaHJvbWU7XG5cbi8vIEFjdHVhbCBJRSBicm93c2VyIGZvciBjb21wYXRpYmlsaXR5IG1vZGVcbnZhciBfaWVfcmVhbF92ZXJzaW9uO1xuXG4vLyBQbGF0Zm9ybXNcbnZhciBfb3N4LCBfd2luZG93cywgX2xpbnV4LCBfYW5kcm9pZDtcblxuLy8gQXJjaGl0ZWN0dXJlc1xudmFyIF93aW42NDtcblxuLy8gRGV2aWNlc1xudmFyIF9pcGhvbmUsIF9pcGFkLCBfbmF0aXZlO1xuXG52YXIgX21vYmlsZTtcblxuZnVuY3Rpb24gX3BvcHVsYXRlKCkge1xuICBpZiAoX3BvcHVsYXRlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIF9wb3B1bGF0ZWQgPSB0cnVlO1xuXG4gIC8vIFRvIHdvcmsgYXJvdW5kIGJ1Z2d5IEpTIGxpYnJhcmllcyB0aGF0IGNhbid0IGhhbmRsZSBtdWx0aS1kaWdpdFxuICAvLyB2ZXJzaW9uIG51bWJlcnMsIE9wZXJhIDEwJ3MgdXNlciBhZ2VudCBzdHJpbmcgY2xhaW1zIGl0J3MgT3BlcmFcbiAgLy8gOSwgdGhlbiBsYXRlciBpbmNsdWRlcyBhIFZlcnNpb24vWC5ZIGZpZWxkOlxuICAvL1xuICAvLyBPcGVyYS85LjgwIChmb28pIFByZXN0by8yLjIuMTUgVmVyc2lvbi8xMC4xMFxuICB2YXIgdWFzID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgdmFyIGFnZW50ID0gLyg/Ok1TSUUuKFxcZCtcXC5cXGQrKSl8KD86KD86RmlyZWZveHxHcmFuUGFyYWRpc298SWNld2Vhc2VsKS4oXFxkK1xcLlxcZCspKXwoPzpPcGVyYSg/Oi4rVmVyc2lvbi58LikoXFxkK1xcLlxcZCspKXwoPzpBcHBsZVdlYktpdC4oXFxkKyg/OlxcLlxcZCspPykpfCg/OlRyaWRlbnRcXC9cXGQrXFwuXFxkKy4qcnY6KFxcZCtcXC5cXGQrKSkvLmV4ZWModWFzKTtcbiAgdmFyIG9zICAgID0gLyhNYWMgT1MgWCl8KFdpbmRvd3MpfChMaW51eCkvLmV4ZWModWFzKTtcblxuICBfaXBob25lID0gL1xcYihpUGhvbmV8aVBbYW9dZCkvLmV4ZWModWFzKTtcbiAgX2lwYWQgPSAvXFxiKGlQW2FvXWQpLy5leGVjKHVhcyk7XG4gIF9hbmRyb2lkID0gL0FuZHJvaWQvaS5leGVjKHVhcyk7XG4gIF9uYXRpdmUgPSAvRkJBTlxcL1xcdys7L2kuZXhlYyh1YXMpO1xuICBfbW9iaWxlID0gL01vYmlsZS9pLmV4ZWModWFzKTtcblxuICAvLyBOb3RlIHRoYXQgdGhlIElFIHRlYW0gYmxvZyB3b3VsZCBoYXZlIHlvdSBiZWxpZXZlIHlvdSBzaG91bGQgYmUgY2hlY2tpbmdcbiAgLy8gZm9yICdXaW42NDsgeDY0Jy4gIEJ1dCBNU0ROIHRoZW4gcmV2ZWFscyB0aGF0IHlvdSBjYW4gYWN0dWFsbHkgYmUgY29taW5nXG4gIC8vIGZyb20gZWl0aGVyIHg2NCBvciBpYTY0OyAgc28gdWx0aW1hdGVseSwgeW91IHNob3VsZCBqdXN0IGNoZWNrIGZvciBXaW42NFxuICAvLyBhcyBpbiBpbmRpY2F0b3Igb2Ygd2hldGhlciB5b3UncmUgaW4gNjQtYml0IElFLiAgMzItYml0IElFIG9uIDY0LWJpdFxuICAvLyBXaW5kb3dzIHdpbGwgc2VuZCAnV09XNjQnIGluc3RlYWQuXG4gIF93aW42NCA9ICEhKC9XaW42NC8uZXhlYyh1YXMpKTtcblxuICBpZiAoYWdlbnQpIHtcbiAgICBfaWUgPSBhZ2VudFsxXSA/IHBhcnNlRmxvYXQoYWdlbnRbMV0pIDogKFxuICAgICAgICAgIGFnZW50WzVdID8gcGFyc2VGbG9hdChhZ2VudFs1XSkgOiBOYU4pO1xuICAgIC8vIElFIGNvbXBhdGliaWxpdHkgbW9kZVxuICAgIGlmIChfaWUgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB7XG4gICAgICBfaWUgPSBkb2N1bWVudC5kb2N1bWVudE1vZGU7XG4gICAgfVxuICAgIC8vIGdyYWIgdGhlIFwidHJ1ZVwiIGllIHZlcnNpb24gZnJvbSB0aGUgdHJpZGVudCB0b2tlbiBpZiBhdmFpbGFibGVcbiAgICB2YXIgdHJpZGVudCA9IC8oPzpUcmlkZW50XFwvKFxcZCsuXFxkKykpLy5leGVjKHVhcyk7XG4gICAgX2llX3JlYWxfdmVyc2lvbiA9IHRyaWRlbnQgPyBwYXJzZUZsb2F0KHRyaWRlbnRbMV0pICsgNCA6IF9pZTtcblxuICAgIF9maXJlZm94ID0gYWdlbnRbMl0gPyBwYXJzZUZsb2F0KGFnZW50WzJdKSA6IE5hTjtcbiAgICBfb3BlcmEgICA9IGFnZW50WzNdID8gcGFyc2VGbG9hdChhZ2VudFszXSkgOiBOYU47XG4gICAgX3dlYmtpdCAgPSBhZ2VudFs0XSA/IHBhcnNlRmxvYXQoYWdlbnRbNF0pIDogTmFOO1xuICAgIGlmIChfd2Via2l0KSB7XG4gICAgICAvLyBXZSBkbyBub3QgYWRkIHRoZSByZWdleHAgdG8gdGhlIGFib3ZlIHRlc3QsIGJlY2F1c2UgaXQgd2lsbCBhbHdheXNcbiAgICAgIC8vIG1hdGNoICdzYWZhcmknIG9ubHkgc2luY2UgJ0FwcGxlV2ViS2l0JyBhcHBlYXJzIGJlZm9yZSAnQ2hyb21lJyBpblxuICAgICAgLy8gdGhlIHVzZXJBZ2VudCBzdHJpbmcuXG4gICAgICBhZ2VudCA9IC8oPzpDaHJvbWVcXC8oXFxkK1xcLlxcZCspKS8uZXhlYyh1YXMpO1xuICAgICAgX2Nocm9tZSA9IGFnZW50ICYmIGFnZW50WzFdID8gcGFyc2VGbG9hdChhZ2VudFsxXSkgOiBOYU47XG4gICAgfSBlbHNlIHtcbiAgICAgIF9jaHJvbWUgPSBOYU47XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIF9pZSA9IF9maXJlZm94ID0gX29wZXJhID0gX2Nocm9tZSA9IF93ZWJraXQgPSBOYU47XG4gIH1cblxuICBpZiAob3MpIHtcbiAgICBpZiAob3NbMV0pIHtcbiAgICAgIC8vIERldGVjdCBPUyBYIHZlcnNpb24uICBJZiBubyB2ZXJzaW9uIG51bWJlciBtYXRjaGVzLCBzZXQgX29zeCB0byB0cnVlLlxuICAgICAgLy8gVmVyc2lvbiBleGFtcGxlczogIDEwLCAxMF82XzEsIDEwLjdcbiAgICAgIC8vIFBhcnNlcyB2ZXJzaW9uIG51bWJlciBhcyBhIGZsb2F0LCB0YWtpbmcgb25seSBmaXJzdCB0d28gc2V0cyBvZlxuICAgICAgLy8gZGlnaXRzLiAgSWYgb25seSBvbmUgc2V0IG9mIGRpZ2l0cyBpcyBmb3VuZCwgcmV0dXJucyBqdXN0IHRoZSBtYWpvclxuICAgICAgLy8gdmVyc2lvbiBudW1iZXIuXG4gICAgICB2YXIgdmVyID0gLyg/Ok1hYyBPUyBYIChcXGQrKD86Wy5fXVxcZCspPykpLy5leGVjKHVhcyk7XG5cbiAgICAgIF9vc3ggPSB2ZXIgPyBwYXJzZUZsb2F0KHZlclsxXS5yZXBsYWNlKCdfJywgJy4nKSkgOiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBfb3N4ID0gZmFsc2U7XG4gICAgfVxuICAgIF93aW5kb3dzID0gISFvc1syXTtcbiAgICBfbGludXggICA9ICEhb3NbM107XG4gIH0gZWxzZSB7XG4gICAgX29zeCA9IF93aW5kb3dzID0gX2xpbnV4ID0gZmFsc2U7XG4gIH1cbn1cblxudmFyIFVzZXJBZ2VudF9ERVBSRUNBVEVEID0ge1xuXG4gIC8qKlxuICAgKiAgQ2hlY2sgaWYgdGhlIFVBIGlzIEludGVybmV0IEV4cGxvcmVyLlxuICAgKlxuICAgKlxuICAgKiAgQHJldHVybiBmbG9hdHxOYU4gVmVyc2lvbiBudW1iZXIgKGlmIG1hdGNoKSBvciBOYU4uXG4gICAqL1xuICBpZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9pZTtcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgd2UncmUgaW4gSW50ZXJuZXQgRXhwbG9yZXIgY29tcGF0aWJpbGl0eSBtb2RlLlxuICAgKlxuICAgKiBAcmV0dXJuIGJvb2wgdHJ1ZSBpZiBpbiBjb21wYXRpYmlsaXR5IG1vZGUsIGZhbHNlIGlmXG4gICAqIG5vdCBjb21wYXRpYmlsaXR5IG1vZGUgb3Igbm90IGllXG4gICAqL1xuICBpZUNvbXBhdGliaWxpdHlNb2RlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgKF9pZV9yZWFsX3ZlcnNpb24gPiBfaWUpO1xuICB9LFxuXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGJyb3dzZXIgaXMgNjQtYml0IElFLiAgUmVhbGx5LCB0aGlzIGlzIGtpbmQgb2Ygd2VhayBzYXVjZTsgIHdlXG4gICAqIG9ubHkgbmVlZCB0aGlzIGJlY2F1c2UgU2t5cGUgY2FuJ3QgaGFuZGxlIDY0LWJpdCBJRSB5ZXQuICBXZSBuZWVkIHRvIHJlbW92ZVxuICAgKiB0aGlzIHdoZW4gd2UgZG9uJ3QgbmVlZCBpdCAtLSB0cmFja2VkIGJ5ICM2MDE5NTcuXG4gICAqL1xuICBpZTY0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gVXNlckFnZW50X0RFUFJFQ0FURUQuaWUoKSAmJiBfd2luNjQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqICBDaGVjayBpZiB0aGUgVUEgaXMgRmlyZWZveC5cbiAgICpcbiAgICpcbiAgICogIEByZXR1cm4gZmxvYXR8TmFOIFZlcnNpb24gbnVtYmVyIChpZiBtYXRjaCkgb3IgTmFOLlxuICAgKi9cbiAgZmlyZWZveDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9maXJlZm94O1xuICB9LFxuXG5cbiAgLyoqXG4gICAqICBDaGVjayBpZiB0aGUgVUEgaXMgT3BlcmEuXG4gICAqXG4gICAqXG4gICAqICBAcmV0dXJuIGZsb2F0fE5hTiBWZXJzaW9uIG51bWJlciAoaWYgbWF0Y2gpIG9yIE5hTi5cbiAgICovXG4gIG9wZXJhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgX29wZXJhO1xuICB9LFxuXG5cbiAgLyoqXG4gICAqICBDaGVjayBpZiB0aGUgVUEgaXMgV2ViS2l0LlxuICAgKlxuICAgKlxuICAgKiAgQHJldHVybiBmbG9hdHxOYU4gVmVyc2lvbiBudW1iZXIgKGlmIG1hdGNoKSBvciBOYU4uXG4gICAqL1xuICB3ZWJraXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfd2Via2l0O1xuICB9LFxuXG4gIC8qKlxuICAgKiAgRm9yIFB1c2hcbiAgICogIFdJTEwgQkUgUkVNT1ZFRCBWRVJZIFNPT04uIFVzZSBVc2VyQWdlbnRfREVQUkVDQVRFRC53ZWJraXRcbiAgICovXG4gIHNhZmFyaTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFVzZXJBZ2VudF9ERVBSRUNBVEVELndlYmtpdCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiAgQ2hlY2sgaWYgdGhlIFVBIGlzIGEgQ2hyb21lIGJyb3dzZXIuXG4gICAqXG4gICAqXG4gICAqICBAcmV0dXJuIGZsb2F0fE5hTiBWZXJzaW9uIG51bWJlciAoaWYgbWF0Y2gpIG9yIE5hTi5cbiAgICovXG4gIGNocm9tZSA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfY2hyb21lO1xuICB9LFxuXG5cbiAgLyoqXG4gICAqICBDaGVjayBpZiB0aGUgdXNlciBpcyBydW5uaW5nIFdpbmRvd3MuXG4gICAqXG4gICAqICBAcmV0dXJuIGJvb2wgYHRydWUnIGlmIHRoZSB1c2VyJ3MgT1MgaXMgV2luZG93cy5cbiAgICovXG4gIHdpbmRvd3M6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfd2luZG93cztcbiAgfSxcblxuXG4gIC8qKlxuICAgKiAgQ2hlY2sgaWYgdGhlIHVzZXIgaXMgcnVubmluZyBNYWMgT1MgWC5cbiAgICpcbiAgICogIEByZXR1cm4gZmxvYXR8Ym9vbCAgIFJldHVybnMgYSBmbG9hdCBpZiBhIHZlcnNpb24gbnVtYmVyIGlzIGRldGVjdGVkLFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJ3aXNlIHRydWUvZmFsc2UuXG4gICAqL1xuICBvc3g6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfb3N4O1xuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgdXNlciBpcyBydW5uaW5nIExpbnV4LlxuICAgKlxuICAgKiBAcmV0dXJuIGJvb2wgYHRydWUnIGlmIHRoZSB1c2VyJ3MgT1MgaXMgc29tZSBmbGF2b3Igb2YgTGludXguXG4gICAqL1xuICBsaW51eDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9saW51eDtcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHVzZXIgaXMgcnVubmluZyBvbiBhbiBpUGhvbmUgb3IgaVBvZCBwbGF0Zm9ybS5cbiAgICpcbiAgICogQHJldHVybiBib29sIGB0cnVlJyBpZiB0aGUgdXNlciBpcyBydW5uaW5nIHNvbWUgZmxhdm9yIG9mIHRoZVxuICAgKiAgICBpUGhvbmUgT1MuXG4gICAqL1xuICBpcGhvbmU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfaXBob25lO1xuICB9LFxuXG4gIG1vYmlsZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IChfaXBob25lIHx8IF9pcGFkIHx8IF9hbmRyb2lkIHx8IF9tb2JpbGUpO1xuICB9LFxuXG4gIG5hdGl2ZUFwcDogZnVuY3Rpb24oKSB7XG4gICAgLy8gd2Vidmlld3MgaW5zaWRlIG9mIHRoZSBuYXRpdmUgYXBwc1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfbmF0aXZlO1xuICB9LFxuXG4gIGFuZHJvaWQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfYW5kcm9pZDtcbiAgfSxcblxuICBpcGFkOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgX2lwYWQ7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVXNlckFnZW50X0RFUFJFQ0FURUQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgaXNFdmVudFN1cHBvcnRlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG52YXIgdXNlSGFzRmVhdHVyZTtcbmlmIChFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00pIHtcbiAgdXNlSGFzRmVhdHVyZSA9XG4gICAgZG9jdW1lbnQuaW1wbGVtZW50YXRpb24gJiZcbiAgICBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlICYmXG4gICAgLy8gYWx3YXlzIHJldHVybnMgdHJ1ZSBpbiBuZXdlciBicm93c2VycyBhcyBwZXIgdGhlIHN0YW5kYXJkLlxuICAgIC8vIEBzZWUgaHR0cDovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1kb21pbXBsZW1lbnRhdGlvbi1oYXNmZWF0dXJlXG4gICAgZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZSgnJywgJycpICE9PSB0cnVlO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhbiBldmVudCBpcyBzdXBwb3J0ZWQgaW4gdGhlIGN1cnJlbnQgZXhlY3V0aW9uIGVudmlyb25tZW50LlxuICpcbiAqIE5PVEU6IFRoaXMgd2lsbCBub3Qgd29yayBjb3JyZWN0bHkgZm9yIG5vbi1nZW5lcmljIGV2ZW50cyBzdWNoIGFzIGBjaGFuZ2VgLFxuICogYHJlc2V0YCwgYGxvYWRgLCBgZXJyb3JgLCBhbmQgYHNlbGVjdGAuXG4gKlxuICogQm9ycm93cyBmcm9tIE1vZGVybml6ci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lU3VmZml4IEV2ZW50IG5hbWUsIGUuZy4gXCJjbGlja1wiLlxuICogQHBhcmFtIHs/Ym9vbGVhbn0gY2FwdHVyZSBDaGVjayBpZiB0aGUgY2FwdHVyZSBwaGFzZSBpcyBzdXBwb3J0ZWQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBldmVudCBpcyBzdXBwb3J0ZWQuXG4gKiBAaW50ZXJuYWxcbiAqIEBsaWNlbnNlIE1vZGVybml6ciAzLjAuMHByZSAoQ3VzdG9tIEJ1aWxkKSB8IE1JVFxuICovXG5mdW5jdGlvbiBpc0V2ZW50U3VwcG9ydGVkKGV2ZW50TmFtZVN1ZmZpeCwgY2FwdHVyZSkge1xuICBpZiAoIUV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSB8fFxuICAgICAgY2FwdHVyZSAmJiAhKCdhZGRFdmVudExpc3RlbmVyJyBpbiBkb2N1bWVudCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZXZlbnROYW1lID0gJ29uJyArIGV2ZW50TmFtZVN1ZmZpeDtcbiAgdmFyIGlzU3VwcG9ydGVkID0gZXZlbnROYW1lIGluIGRvY3VtZW50O1xuXG4gIGlmICghaXNTdXBwb3J0ZWQpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGV2ZW50TmFtZSwgJ3JldHVybjsnKTtcbiAgICBpc1N1cHBvcnRlZCA9IHR5cGVvZiBlbGVtZW50W2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBpZiAoIWlzU3VwcG9ydGVkICYmIHVzZUhhc0ZlYXR1cmUgJiYgZXZlbnROYW1lU3VmZml4ID09PSAnd2hlZWwnKSB7XG4gICAgLy8gVGhpcyBpcyB0aGUgb25seSB3YXkgdG8gdGVzdCBzdXBwb3J0IGZvciB0aGUgYHdoZWVsYCBldmVudCBpbiBJRTkrLlxuICAgIGlzU3VwcG9ydGVkID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZSgnRXZlbnRzLndoZWVsJywgJzMuMCcpO1xuICB9XG5cbiAgcmV0dXJuIGlzU3VwcG9ydGVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRXZlbnRTdXBwb3J0ZWQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBub3JtYWxpemVXaGVlbFxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBVc2VyQWdlbnRfREVQUkVDQVRFRCA9IHJlcXVpcmUoJy4vVXNlckFnZW50X0RFUFJFQ0FURUQnKTtcblxudmFyIGlzRXZlbnRTdXBwb3J0ZWQgPSByZXF1aXJlKCcuL2lzRXZlbnRTdXBwb3J0ZWQnKTtcblxuXG4vLyBSZWFzb25hYmxlIGRlZmF1bHRzXG52YXIgUElYRUxfU1RFUCAgPSAxMDtcbnZhciBMSU5FX0hFSUdIVCA9IDQwO1xudmFyIFBBR0VfSEVJR0hUID0gODAwO1xuXG4vKipcbiAqIE1vdXNlIHdoZWVsIChhbmQgMi1maW5nZXIgdHJhY2twYWQpIHN1cHBvcnQgb24gdGhlIHdlYiBzdWNrcy4gIEl0IGlzXG4gKiBjb21wbGljYXRlZCwgdGh1cyB0aGlzIGRvYyBpcyBsb25nIGFuZCAoaG9wZWZ1bGx5KSBkZXRhaWxlZCBlbm91Z2ggdG8gYW5zd2VyXG4gKiB5b3VyIHF1ZXN0aW9ucy5cbiAqXG4gKiBJZiB5b3UgbmVlZCB0byByZWFjdCB0byB0aGUgbW91c2Ugd2hlZWwgaW4gYSBwcmVkaWN0YWJsZSB3YXksIHRoaXMgY29kZSBpc1xuICogbGlrZSB5b3VyIGJlc3Rlc3QgZnJpZW5kLiAqIGh1Z3MgKlxuICpcbiAqIEFzIG9mIHRvZGF5LCB0aGVyZSBhcmUgNCBET00gZXZlbnQgdHlwZXMgeW91IGNhbiBsaXN0ZW4gdG86XG4gKlxuICogICAnd2hlZWwnICAgICAgICAgICAgICAgIC0tIENocm9tZSgzMSspLCBGRigxNyspLCBJRSg5KylcbiAqICAgJ21vdXNld2hlZWwnICAgICAgICAgICAtLSBDaHJvbWUsIElFKDYrKSwgT3BlcmEsIFNhZmFyaVxuICogICAnTW96TW91c2VQaXhlbFNjcm9sbCcgIC0tIEZGKDMuNSBvbmx5ISkgKDIwMTAtMjAxMykgLS0gZG9uJ3QgYm90aGVyIVxuICogICAnRE9NTW91c2VTY3JvbGwnICAgICAgIC0tIEZGKDAuOS43Kykgc2luY2UgMjAwM1xuICpcbiAqIFNvIHdoYXQgdG8gZG8/ICBUaGUgaXMgdGhlIGJlc3Q6XG4gKlxuICogICBub3JtYWxpemVXaGVlbC5nZXRFdmVudFR5cGUoKTtcbiAqXG4gKiBJbiB5b3VyIGV2ZW50IGNhbGxiYWNrLCB1c2UgdGhpcyBjb2RlIHRvIGdldCBzYW5lIGludGVycHJldGF0aW9uIG9mIHRoZVxuICogZGVsdGFzLiAgVGhpcyBjb2RlIHdpbGwgcmV0dXJuIGFuIG9iamVjdCB3aXRoIHByb3BlcnRpZXM6XG4gKlxuICogICBzcGluWCAgIC0tIG5vcm1hbGl6ZWQgc3BpbiBzcGVlZCAodXNlIGZvciB6b29tKSAtIHggcGxhbmVcbiAqICAgc3BpblkgICAtLSBcIiAtIHkgcGxhbmVcbiAqICAgcGl4ZWxYICAtLSBub3JtYWxpemVkIGRpc3RhbmNlICh0byBwaXhlbHMpIC0geCBwbGFuZVxuICogICBwaXhlbFkgIC0tIFwiIC0geSBwbGFuZVxuICpcbiAqIFdoZWVsIHZhbHVlcyBhcmUgcHJvdmlkZWQgYnkgdGhlIGJyb3dzZXIgYXNzdW1pbmcgeW91IGFyZSB1c2luZyB0aGUgd2hlZWwgdG9cbiAqIHNjcm9sbCBhIHdlYiBwYWdlIGJ5IGEgbnVtYmVyIG9mIGxpbmVzIG9yIHBpeGVscyAob3IgcGFnZXMpLiAgVmFsdWVzIGNhbiB2YXJ5XG4gKiBzaWduaWZpY2FudGx5IG9uIGRpZmZlcmVudCBwbGF0Zm9ybXMgYW5kIGJyb3dzZXJzLCBmb3JnZXR0aW5nIHRoYXQgeW91IGNhblxuICogc2Nyb2xsIGF0IGRpZmZlcmVudCBzcGVlZHMuICBTb21lIGRldmljZXMgKGxpa2UgdHJhY2twYWRzKSBlbWl0IG1vcmUgZXZlbnRzXG4gKiBhdCBzbWFsbGVyIGluY3JlbWVudHMgd2l0aCBmaW5lIGdyYW51bGFyaXR5LCBhbmQgc29tZSBlbWl0IG1hc3NpdmUganVtcHMgd2l0aFxuICogbGluZWFyIHNwZWVkIG9yIGFjY2VsZXJhdGlvbi5cbiAqXG4gKiBUaGlzIGNvZGUgZG9lcyBpdHMgYmVzdCB0byBub3JtYWxpemUgdGhlIGRlbHRhcyBmb3IgeW91OlxuICpcbiAqICAgLSBzcGluIGlzIHRyeWluZyB0byBub3JtYWxpemUgaG93IGZhciB0aGUgd2hlZWwgd2FzIHNwdW4gKG9yIHRyYWNrcGFkXG4gKiAgICAgZHJhZ2dlZCkuICBUaGlzIGlzIHN1cGVyIHVzZWZ1bCBmb3Igem9vbSBzdXBwb3J0IHdoZXJlIHlvdSB3YW50IHRvXG4gKiAgICAgdGhyb3cgYXdheSB0aGUgY2h1bmt5IHNjcm9sbCBzdGVwcyBvbiB0aGUgUEMgYW5kIG1ha2UgdGhvc2UgZXF1YWwgdG9cbiAqICAgICB0aGUgc2xvdyBhbmQgc21vb3RoIHRpbnkgc3RlcHMgb24gdGhlIE1hYy4gS2V5IGRhdGE6IFRoaXMgY29kZSB0cmllcyB0b1xuICogICAgIHJlc29sdmUgYSBzaW5nbGUgc2xvdyBzdGVwIG9uIGEgd2hlZWwgdG8gMS5cbiAqXG4gKiAgIC0gcGl4ZWwgaXMgbm9ybWFsaXppbmcgdGhlIGRlc2lyZWQgc2Nyb2xsIGRlbHRhIGluIHBpeGVsIHVuaXRzLiAgWW91J2xsXG4gKiAgICAgZ2V0IHRoZSBjcmF6eSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGJyb3dzZXJzLCBidXQgYXQgbGVhc3QgaXQnbGwgYmUgaW5cbiAqICAgICBwaXhlbHMhXG4gKlxuICogICAtIHBvc2l0aXZlIHZhbHVlIGluZGljYXRlcyBzY3JvbGxpbmcgRE9XTi9SSUdIVCwgbmVnYXRpdmUgVVAvTEVGVC4gIFRoaXNcbiAqICAgICBzaG91bGQgdHJhbnNsYXRlIHRvIHBvc2l0aXZlIHZhbHVlIHpvb21pbmcgSU4sIG5lZ2F0aXZlIHpvb21pbmcgT1VULlxuICogICAgIFRoaXMgbWF0Y2hlcyB0aGUgbmV3ZXIgJ3doZWVsJyBldmVudC5cbiAqXG4gKiBXaHkgYXJlIHRoZXJlIHNwaW5YLCBzcGluWSAob3IgcGl4ZWxzKT9cbiAqXG4gKiAgIC0gc3BpblggaXMgYSAyLWZpbmdlciBzaWRlIGRyYWcgb24gdGhlIHRyYWNrcGFkLCBhbmQgYSBzaGlmdCArIHdoZWVsIHR1cm5cbiAqICAgICB3aXRoIGEgbW91c2UuICBJdCByZXN1bHRzIGluIHNpZGUtc2Nyb2xsaW5nIGluIHRoZSBicm93c2VyIGJ5IGRlZmF1bHQuXG4gKlxuICogICAtIHNwaW5ZIGlzIHdoYXQgeW91IGV4cGVjdCAtLSBpdCdzIHRoZSBjbGFzc2ljIGF4aXMgb2YgYSBtb3VzZSB3aGVlbC5cbiAqXG4gKiAgIC0gSSBkcm9wcGVkIHNwaW5aL3BpeGVsWi4gIEl0IGlzIHN1cHBvcnRlZCBieSB0aGUgRE9NIDMgJ3doZWVsJyBldmVudCBhbmRcbiAqICAgICBwcm9iYWJseSBpcyBieSBicm93c2VycyBpbiBjb25qdW5jdGlvbiB3aXRoIGZhbmN5IDNEIGNvbnRyb2xsZXJzIC4uIGJ1dFxuICogICAgIHlvdSBrbm93LlxuICpcbiAqIEltcGxlbWVudGF0aW9uIGluZm86XG4gKlxuICogRXhhbXBsZXMgb2YgJ3doZWVsJyBldmVudCBpZiB5b3Ugc2Nyb2xsIHNsb3dseSAoZG93bikgYnkgb25lIHN0ZXAgd2l0aCBhblxuICogYXZlcmFnZSBtb3VzZTpcbiAqXG4gKiAgIE9TIFggKyBDaHJvbWUgIChtb3VzZSkgICAgIC0gICAgNCAgIHBpeGVsIGRlbHRhICAod2hlZWxEZWx0YSAtMTIwKVxuICogICBPUyBYICsgU2FmYXJpICAobW91c2UpICAgICAtICBOL0EgICBwaXhlbCBkZWx0YSAgKHdoZWVsRGVsdGEgIC0xMilcbiAqICAgT1MgWCArIEZpcmVmb3ggKG1vdXNlKSAgICAgLSAgICAwLjEgbGluZSAgZGVsdGEgICh3aGVlbERlbHRhICBOL0EpXG4gKiAgIFdpbjggKyBDaHJvbWUgIChtb3VzZSkgICAgIC0gIDEwMCAgIHBpeGVsIGRlbHRhICAod2hlZWxEZWx0YSAtMTIwKVxuICogICBXaW44ICsgRmlyZWZveCAobW91c2UpICAgICAtICAgIDMgICBsaW5lICBkZWx0YSAgKHdoZWVsRGVsdGEgLTEyMClcbiAqXG4gKiBPbiB0aGUgdHJhY2twYWQ6XG4gKlxuICogICBPUyBYICsgQ2hyb21lICAodHJhY2twYWQpICAtICAgIDIgICBwaXhlbCBkZWx0YSAgKHdoZWVsRGVsdGEgICAtNilcbiAqICAgT1MgWCArIEZpcmVmb3ggKHRyYWNrcGFkKSAgLSAgICAxICAgcGl4ZWwgZGVsdGEgICh3aGVlbERlbHRhICBOL0EpXG4gKlxuICogT24gb3RoZXIvb2xkZXIgYnJvd3NlcnMuLiBpdCdzIG1vcmUgY29tcGxpY2F0ZWQgYXMgdGhlcmUgY2FuIGJlIG11bHRpcGxlIGFuZFxuICogYWxzbyBtaXNzaW5nIGRlbHRhIHZhbHVlcy5cbiAqXG4gKiBUaGUgJ3doZWVsJyBldmVudCBpcyBtb3JlIHN0YW5kYXJkOlxuICpcbiAqIGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUV2ZW50cy8jZXZlbnRzLXdoZWVsZXZlbnRzXG4gKlxuICogVGhlIGJhc2ljcyBpcyB0aGF0IGl0IGluY2x1ZGVzIGEgdW5pdCwgZGVsdGFNb2RlIChwaXhlbHMsIGxpbmVzLCBwYWdlcyksIGFuZFxuICogZGVsdGFYLCBkZWx0YVkgYW5kIGRlbHRhWi4gIFNvbWUgYnJvd3NlcnMgcHJvdmlkZSBvdGhlciB2YWx1ZXMgdG8gbWFpbnRhaW5cbiAqIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBvbGRlciBldmVudHMuICBUaG9zZSBvdGhlciB2YWx1ZXMgaGVscCB1c1xuICogYmV0dGVyIG5vcm1hbGl6ZSBzcGluIHNwZWVkLiAgRXhhbXBsZSBvZiB3aGF0IHRoZSBicm93c2VycyBwcm92aWRlOlxuICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICB8IGV2ZW50LndoZWVsRGVsdGEgfCBldmVudC5kZXRhaWxcbiAqICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tXG4gKiAgICAgICAgICBTYWZhcmkgdjUvT1MgWCAgfCAgICAgICAtMTIwICAgICAgIHwgICAgICAgMFxuICogICAgICAgICAgU2FmYXJpIHY1L1dpbjcgIHwgICAgICAgLTEyMCAgICAgICB8ICAgICAgIDBcbiAqICAgICAgICAgQ2hyb21lIHYxNy9PUyBYICB8ICAgICAgIC0xMjAgICAgICAgfCAgICAgICAwXG4gKiAgICAgICAgIENocm9tZSB2MTcvV2luNyAgfCAgICAgICAtMTIwICAgICAgIHwgICAgICAgMFxuICogICAgICAgICAgICAgICAgSUU5L1dpbjcgIHwgICAgICAgLTEyMCAgICAgICB8ICAgdW5kZWZpbmVkXG4gKiAgICAgICAgIEZpcmVmb3ggdjQvT1MgWCAgfCAgICAgdW5kZWZpbmVkICAgIHwgICAgICAgMVxuICogICAgICAgICBGaXJlZm94IHY0L1dpbjcgIHwgICAgIHVuZGVmaW5lZCAgICB8ICAgICAgIDNcbiAqXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVdoZWVsKC8qb2JqZWN0Ki8gZXZlbnQpIC8qb2JqZWN0Ki8ge1xuICB2YXIgc1ggPSAwLCBzWSA9IDAsICAgICAgIC8vIHNwaW5YLCBzcGluWVxuICAgICAgcFggPSAwLCBwWSA9IDA7ICAgICAgIC8vIHBpeGVsWCwgcGl4ZWxZXG5cbiAgLy8gTGVnYWN5XG4gIGlmICgnZGV0YWlsJyAgICAgIGluIGV2ZW50KSB7IHNZID0gZXZlbnQuZGV0YWlsOyB9XG4gIGlmICgnd2hlZWxEZWx0YScgIGluIGV2ZW50KSB7IHNZID0gLWV2ZW50LndoZWVsRGVsdGEgLyAxMjA7IH1cbiAgaWYgKCd3aGVlbERlbHRhWScgaW4gZXZlbnQpIHsgc1kgPSAtZXZlbnQud2hlZWxEZWx0YVkgLyAxMjA7IH1cbiAgaWYgKCd3aGVlbERlbHRhWCcgaW4gZXZlbnQpIHsgc1ggPSAtZXZlbnQud2hlZWxEZWx0YVggLyAxMjA7IH1cblxuICAvLyBzaWRlIHNjcm9sbGluZyBvbiBGRiB3aXRoIERPTU1vdXNlU2Nyb2xsXG4gIGlmICggJ2F4aXMnIGluIGV2ZW50ICYmIGV2ZW50LmF4aXMgPT09IGV2ZW50LkhPUklaT05UQUxfQVhJUyApIHtcbiAgICBzWCA9IHNZO1xuICAgIHNZID0gMDtcbiAgfVxuXG4gIHBYID0gc1ggKiBQSVhFTF9TVEVQO1xuICBwWSA9IHNZICogUElYRUxfU1RFUDtcblxuICBpZiAoJ2RlbHRhWScgaW4gZXZlbnQpIHsgcFkgPSBldmVudC5kZWx0YVk7IH1cbiAgaWYgKCdkZWx0YVgnIGluIGV2ZW50KSB7IHBYID0gZXZlbnQuZGVsdGFYOyB9XG5cbiAgaWYgKChwWCB8fCBwWSkgJiYgZXZlbnQuZGVsdGFNb2RlKSB7XG4gICAgaWYgKGV2ZW50LmRlbHRhTW9kZSA9PSAxKSB7ICAgICAgICAgIC8vIGRlbHRhIGluIExJTkUgdW5pdHNcbiAgICAgIHBYICo9IExJTkVfSEVJR0hUO1xuICAgICAgcFkgKj0gTElORV9IRUlHSFQ7XG4gICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlbHRhIGluIFBBR0UgdW5pdHNcbiAgICAgIHBYICo9IFBBR0VfSEVJR0hUO1xuICAgICAgcFkgKj0gUEFHRV9IRUlHSFQ7XG4gICAgfVxuICB9XG5cbiAgLy8gRmFsbC1iYWNrIGlmIHNwaW4gY2Fubm90IGJlIGRldGVybWluZWRcbiAgaWYgKHBYICYmICFzWCkgeyBzWCA9IChwWCA8IDEpID8gLTEgOiAxOyB9XG4gIGlmIChwWSAmJiAhc1kpIHsgc1kgPSAocFkgPCAxKSA/IC0xIDogMTsgfVxuXG4gIHJldHVybiB7IHNwaW5YICA6IHNYLFxuICAgICAgICAgICBzcGluWSAgOiBzWSxcbiAgICAgICAgICAgcGl4ZWxYIDogcFgsXG4gICAgICAgICAgIHBpeGVsWSA6IHBZIH07XG59XG5cblxuLyoqXG4gKiBUaGUgYmVzdCBjb21iaW5hdGlvbiBpZiB5b3UgcHJlZmVyIHNwaW5YICsgc3Bpblkgbm9ybWFsaXphdGlvbi4gIEl0IGZhdm9yc1xuICogdGhlIG9sZGVyIERPTU1vdXNlU2Nyb2xsIGZvciBGaXJlZm94LCBhcyBGRiBkb2VzIG5vdCBpbmNsdWRlIHdoZWVsRGVsdGEgd2l0aFxuICogJ3doZWVsJyBldmVudCwgbWFraW5nIHNwaW4gc3BlZWQgZGV0ZXJtaW5hdGlvbiBpbXBvc3NpYmxlLlxuICovXG5ub3JtYWxpemVXaGVlbC5nZXRFdmVudFR5cGUgPSBmdW5jdGlvbigpIC8qc3RyaW5nKi8ge1xuICByZXR1cm4gKFVzZXJBZ2VudF9ERVBSRUNBVEVELmZpcmVmb3goKSlcbiAgICAgICAgICAgPyAnRE9NTW91c2VTY3JvbGwnXG4gICAgICAgICAgIDogKGlzRXZlbnRTdXBwb3J0ZWQoJ3doZWVsJykpXG4gICAgICAgICAgICAgICA/ICd3aGVlbCdcbiAgICAgICAgICAgICAgIDogJ21vdXNld2hlZWwnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemVXaGVlbDtcbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuaW1wb3J0IHsgbG9nIH0gZnJvbSBcIi4uL3V0aWxzL2xvZy5qc1wiO1xuXG52YXIgV2ViU29ja2V0Q2xpZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIGZ1bmN0aW9uIFdlYlNvY2tldENsaWVudCh1cmwpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2ViU29ja2V0Q2xpZW50KTtcblxuICAgIHRoaXMuY2xpZW50ID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuXG4gICAgdGhpcy5jbGllbnQub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgbG9nLmVycm9yKGVycm9yKTtcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0geyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZH0gZlxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhXZWJTb2NrZXRDbGllbnQsIFt7XG4gICAga2V5OiBcIm9uT3BlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk9wZW4oZikge1xuICAgICAgdGhpcy5jbGllbnQub25vcGVuID0gZjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsoLi4uYXJnczogYW55W10pID0+IHZvaWR9IGZcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9uQ2xvc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DbG9zZShmKSB7XG4gICAgICB0aGlzLmNsaWVudC5vbmNsb3NlID0gZjtcbiAgICB9IC8vIGNhbGwgZiB3aXRoIHRoZSBtZXNzYWdlIHN0cmluZyBhcyB0aGUgZmlyc3QgYXJndW1lbnRcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkfSBmXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvbk1lc3NhZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25NZXNzYWdlKGYpIHtcbiAgICAgIHRoaXMuY2xpZW50Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGYoZS5kYXRhKTtcbiAgICAgIH07XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFdlYlNvY2tldENsaWVudDtcbn0oKTtcblxuZXhwb3J0IHsgV2ViU29ja2V0Q2xpZW50IGFzIGRlZmF1bHQgfTsiLCIvKioqKioqLyAoZnVuY3Rpb24oKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0XCJ1c2Ugc3RyaWN0XCI7XG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gXCIuL2NsaWVudC1zcmMvbW9kdWxlcy9sb2dnZXIvU3luY0JhaWxIb29rRmFrZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL2NsaWVudC1zcmMvbW9kdWxlcy9sb2dnZXIvU3luY0JhaWxIb29rRmFrZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxuXG4vKipcbiAqIENsaWVudCBzdHViIGZvciB0YXBhYmxlIFN5bmNCYWlsSG9va1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2xpZW50VGFwYWJsZVN5bmNCYWlsSG9vaygpIHtcbiAgcmV0dXJuIHtcbiAgICBjYWxsOiBmdW5jdGlvbiBjYWxsKCkge31cbiAgfTtcbn07XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvTG9nZ2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvTG9nZ2VyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKGZ1bmN0aW9uKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBleHBvcnRzKSB7XG5cbi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbnZhciBMb2dUeXBlID0gT2JqZWN0LmZyZWV6ZSh7XG4gIGVycm9yOlxuICAvKiogQHR5cGUge1wiZXJyb3JcIn0gKi9cbiAgXCJlcnJvclwiLFxuICAvLyBtZXNzYWdlLCBjIHN0eWxlIGFyZ3VtZW50c1xuICB3YXJuOlxuICAvKiogQHR5cGUge1wid2FyblwifSAqL1xuICBcIndhcm5cIixcbiAgLy8gbWVzc2FnZSwgYyBzdHlsZSBhcmd1bWVudHNcbiAgaW5mbzpcbiAgLyoqIEB0eXBlIHtcImluZm9cIn0gKi9cbiAgXCJpbmZvXCIsXG4gIC8vIG1lc3NhZ2UsIGMgc3R5bGUgYXJndW1lbnRzXG4gIGxvZzpcbiAgLyoqIEB0eXBlIHtcImxvZ1wifSAqL1xuICBcImxvZ1wiLFxuICAvLyBtZXNzYWdlLCBjIHN0eWxlIGFyZ3VtZW50c1xuICBkZWJ1ZzpcbiAgLyoqIEB0eXBlIHtcImRlYnVnXCJ9ICovXG4gIFwiZGVidWdcIixcbiAgLy8gbWVzc2FnZSwgYyBzdHlsZSBhcmd1bWVudHNcbiAgdHJhY2U6XG4gIC8qKiBAdHlwZSB7XCJ0cmFjZVwifSAqL1xuICBcInRyYWNlXCIsXG4gIC8vIG5vIGFyZ3VtZW50c1xuICBncm91cDpcbiAgLyoqIEB0eXBlIHtcImdyb3VwXCJ9ICovXG4gIFwiZ3JvdXBcIixcbiAgLy8gW2xhYmVsXVxuICBncm91cENvbGxhcHNlZDpcbiAgLyoqIEB0eXBlIHtcImdyb3VwQ29sbGFwc2VkXCJ9ICovXG4gIFwiZ3JvdXBDb2xsYXBzZWRcIixcbiAgLy8gW2xhYmVsXVxuICBncm91cEVuZDpcbiAgLyoqIEB0eXBlIHtcImdyb3VwRW5kXCJ9ICovXG4gIFwiZ3JvdXBFbmRcIixcbiAgLy8gW2xhYmVsXVxuICBwcm9maWxlOlxuICAvKiogQHR5cGUge1wicHJvZmlsZVwifSAqL1xuICBcInByb2ZpbGVcIixcbiAgLy8gW3Byb2ZpbGVOYW1lXVxuICBwcm9maWxlRW5kOlxuICAvKiogQHR5cGUge1wicHJvZmlsZUVuZFwifSAqL1xuICBcInByb2ZpbGVFbmRcIixcbiAgLy8gW3Byb2ZpbGVOYW1lXVxuICB0aW1lOlxuICAvKiogQHR5cGUge1widGltZVwifSAqL1xuICBcInRpbWVcIixcbiAgLy8gbmFtZSwgdGltZSBhcyBbc2Vjb25kcywgbmFub3NlY29uZHNdXG4gIGNsZWFyOlxuICAvKiogQHR5cGUge1wiY2xlYXJcIn0gKi9cbiAgXCJjbGVhclwiLFxuICAvLyBubyBhcmd1bWVudHNcbiAgc3RhdHVzOlxuICAvKiogQHR5cGUge1wic3RhdHVzXCJ9ICovXG4gIFwic3RhdHVzXCIgLy8gbWVzc2FnZSwgYXJndW1lbnRzXG5cbn0pO1xuZXhwb3J0cy5Mb2dUeXBlID0gTG9nVHlwZTtcbi8qKiBAdHlwZWRlZiB7dHlwZW9mIExvZ1R5cGVba2V5b2YgdHlwZW9mIExvZ1R5cGVdfSBMb2dUeXBlRW51bSAqL1xuXG52YXIgTE9HX1NZTUJPTCA9ICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pKFwid2VicGFjayBsb2dnZXIgcmF3IGxvZyBtZXRob2RcIik7XG52YXIgVElNRVJTX1NZTUJPTCA9ICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pKFwid2VicGFjayBsb2dnZXIgdGltZXNcIik7XG52YXIgVElNRVJTX0FHR1JFR0FURVNfU1lNQk9MID0gKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkoXCJ3ZWJwYWNrIGxvZ2dlciBhZ2dyZWdhdGVkIHRpbWVzXCIpO1xuXG52YXIgV2VicGFja0xvZ2dlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKExvZ1R5cGVFbnVtLCBhbnlbXT0pOiB2b2lkfSBsb2cgbG9nIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nIHwgZnVuY3Rpb24oKTogc3RyaW5nKTogV2VicGFja0xvZ2dlcn0gZ2V0Q2hpbGRMb2dnZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGNoaWxkIGxvZ2dlclxuICAgKi9cbiAgZnVuY3Rpb24gV2VicGFja0xvZ2dlcihsb2csIGdldENoaWxkTG9nZ2VyKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdlYnBhY2tMb2dnZXIpO1xuXG4gICAgdGhpc1tMT0dfU1lNQk9MXSA9IGxvZztcbiAgICB0aGlzLmdldENoaWxkTG9nZ2VyID0gZ2V0Q2hpbGRMb2dnZXI7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoV2VicGFja0xvZ2dlciwgW3tcbiAgICBrZXk6IFwiZXJyb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXJyb3IoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmVycm9yLCBhcmdzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwid2FyblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3YXJuKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLndhcm4sIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbmZvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluZm8oKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgfVxuXG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUuaW5mbywgYXJncyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2coKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgICAgYXJnc1tfa2V5NF0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgICAgfVxuXG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUubG9nLCBhcmdzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVidWdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVidWcoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjUpLCBfa2V5NSA9IDA7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICAgICAgYXJnc1tfa2V5NV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICAgICAgfVxuXG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUuZGVidWcsIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhc3NlcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXNzZXJ0KGFzc2VydGlvbikge1xuICAgICAgaWYgKCFhc3NlcnRpb24pIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjYgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW42ID4gMSA/IF9sZW42IC0gMSA6IDApLCBfa2V5NiA9IDE7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICAgICAgICBhcmdzW19rZXk2IC0gMV0gPSBhcmd1bWVudHNbX2tleTZdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmVycm9yLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidHJhY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdHJhY2UoKSB7XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUudHJhY2UsIFtcIlRyYWNlXCJdKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xlYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUuY2xlYXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGF0dXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhdHVzKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjcgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW43KSwgX2tleTcgPSAwOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XG4gICAgICAgIGFyZ3NbX2tleTddID0gYXJndW1lbnRzW19rZXk3XTtcbiAgICAgIH1cblxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLnN0YXR1cywgYXJncyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdyb3VwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdyb3VwKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjggPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW44KSwgX2tleTggPSAwOyBfa2V5OCA8IF9sZW44OyBfa2V5OCsrKSB7XG4gICAgICAgIGFyZ3NbX2tleThdID0gYXJndW1lbnRzW19rZXk4XTtcbiAgICAgIH1cblxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmdyb3VwLCBhcmdzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ3JvdXBDb2xsYXBzZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ3JvdXBDb2xsYXBzZWQoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuOSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjkpLCBfa2V5OSA9IDA7IF9rZXk5IDwgX2xlbjk7IF9rZXk5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5OV0gPSBhcmd1bWVudHNbX2tleTldO1xuICAgICAgfVxuXG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUuZ3JvdXBDb2xsYXBzZWQsIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJncm91cEVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBncm91cEVuZCgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4xMCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjEwKSwgX2tleTEwID0gMDsgX2tleTEwIDwgX2xlbjEwOyBfa2V5MTArKykge1xuICAgICAgICBhcmdzW19rZXkxMF0gPSBhcmd1bWVudHNbX2tleTEwXTtcbiAgICAgIH1cblxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmdyb3VwRW5kLCBhcmdzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicHJvZmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcm9maWxlKGxhYmVsKSB7XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUucHJvZmlsZSwgW2xhYmVsXSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInByb2ZpbGVFbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJvZmlsZUVuZChsYWJlbCkge1xuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLnByb2ZpbGVFbmQsIFtsYWJlbF0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0aW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRpbWUobGFiZWwpIHtcbiAgICAgIHRoaXNbVElNRVJTX1NZTUJPTF0gPSB0aGlzW1RJTUVSU19TWU1CT0xdIHx8IG5ldyBNYXAoKTtcbiAgICAgIHRoaXNbVElNRVJTX1NZTUJPTF0uc2V0KGxhYmVsLCBwcm9jZXNzLmhydGltZSgpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidGltZUxvZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0aW1lTG9nKGxhYmVsKSB7XG4gICAgICB2YXIgcHJldiA9IHRoaXNbVElNRVJTX1NZTUJPTF0gJiYgdGhpc1tUSU1FUlNfU1lNQk9MXS5nZXQobGFiZWwpO1xuXG4gICAgICBpZiAoIXByZXYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3VjaCBsYWJlbCAnXCIuY29uY2F0KGxhYmVsLCBcIicgZm9yIFdlYnBhY2tMb2dnZXIudGltZUxvZygpXCIpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRpbWUgPSBwcm9jZXNzLmhydGltZShwcmV2KTtcbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS50aW1lLCBbbGFiZWxdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkodGltZSkpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidGltZUVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0aW1lRW5kKGxhYmVsKSB7XG4gICAgICB2YXIgcHJldiA9IHRoaXNbVElNRVJTX1NZTUJPTF0gJiYgdGhpc1tUSU1FUlNfU1lNQk9MXS5nZXQobGFiZWwpO1xuXG4gICAgICBpZiAoIXByZXYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3VjaCBsYWJlbCAnXCIuY29uY2F0KGxhYmVsLCBcIicgZm9yIFdlYnBhY2tMb2dnZXIudGltZUVuZCgpXCIpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRpbWUgPSBwcm9jZXNzLmhydGltZShwcmV2KTtcbiAgICAgIHRoaXNbVElNRVJTX1NZTUJPTF0uZGVsZXRlKGxhYmVsKTtcbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS50aW1lLCBbbGFiZWxdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkodGltZSkpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidGltZUFnZ3JlZ2F0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0aW1lQWdncmVnYXRlKGxhYmVsKSB7XG4gICAgICB2YXIgcHJldiA9IHRoaXNbVElNRVJTX1NZTUJPTF0gJiYgdGhpc1tUSU1FUlNfU1lNQk9MXS5nZXQobGFiZWwpO1xuXG4gICAgICBpZiAoIXByZXYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3VjaCBsYWJlbCAnXCIuY29uY2F0KGxhYmVsLCBcIicgZm9yIFdlYnBhY2tMb2dnZXIudGltZUFnZ3JlZ2F0ZSgpXCIpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRpbWUgPSBwcm9jZXNzLmhydGltZShwcmV2KTtcbiAgICAgIHRoaXNbVElNRVJTX1NZTUJPTF0uZGVsZXRlKGxhYmVsKTtcbiAgICAgIHRoaXNbVElNRVJTX0FHR1JFR0FURVNfU1lNQk9MXSA9IHRoaXNbVElNRVJTX0FHR1JFR0FURVNfU1lNQk9MXSB8fCBuZXcgTWFwKCk7XG4gICAgICB2YXIgY3VycmVudCA9IHRoaXNbVElNRVJTX0FHR1JFR0FURVNfU1lNQk9MXS5nZXQobGFiZWwpO1xuXG4gICAgICBpZiAoY3VycmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0aW1lWzFdICsgY3VycmVudFsxXSA+IDFlOSkge1xuICAgICAgICAgIHRpbWVbMF0gKz0gY3VycmVudFswXSArIDE7XG4gICAgICAgICAgdGltZVsxXSA9IHRpbWVbMV0gLSAxZTkgKyBjdXJyZW50WzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpbWVbMF0gKz0gY3VycmVudFswXTtcbiAgICAgICAgICB0aW1lWzFdICs9IGN1cnJlbnRbMV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpc1tUSU1FUlNfQUdHUkVHQVRFU19TWU1CT0xdLnNldChsYWJlbCwgdGltZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRpbWVBZ2dyZWdhdGVFbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdGltZUFnZ3JlZ2F0ZUVuZChsYWJlbCkge1xuICAgICAgaWYgKHRoaXNbVElNRVJTX0FHR1JFR0FURVNfU1lNQk9MXSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICB2YXIgdGltZSA9IHRoaXNbVElNRVJTX0FHR1JFR0FURVNfU1lNQk9MXS5nZXQobGFiZWwpO1xuICAgICAgaWYgKHRpbWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgdGhpc1tUSU1FUlNfQUdHUkVHQVRFU19TWU1CT0xdLmRlbGV0ZShsYWJlbCk7XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUudGltZSwgW2xhYmVsXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHRpbWUpKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFdlYnBhY2tMb2dnZXI7XG59KCk7XG5cbmV4cG9ydHMuTG9nZ2VyID0gV2VicGFja0xvZ2dlcjtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9jcmVhdGVDb25zb2xlTG9nZ2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL2NyZWF0ZUNvbnNvbGVMb2dnZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX191bnVzZWRfd2VicGFja19leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxudmFyIF9yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9Mb2dnZXIgKi8gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL0xvZ2dlci5qc1wiKSxcbiAgICBMb2dUeXBlID0gX3JlcXVpcmUuTG9nVHlwZTtcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KFwiLi4vLi4vZGVjbGFyYXRpb25zL1dlYnBhY2tPcHRpb25zXCIpLkZpbHRlckl0ZW1UeXBlc30gRmlsdGVySXRlbVR5cGVzICovXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KFwiLi4vLi4vZGVjbGFyYXRpb25zL1dlYnBhY2tPcHRpb25zXCIpLkZpbHRlclR5cGVzfSBGaWx0ZXJUeXBlcyAqL1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydChcIi4vTG9nZ2VyXCIpLkxvZ1R5cGVFbnVtfSBMb2dUeXBlRW51bSAqL1xuXG4vKiogQHR5cGVkZWYge2Z1bmN0aW9uKHN0cmluZyk6IGJvb2xlYW59IEZpbHRlckZ1bmN0aW9uICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gTG9nZ2VyQ29uc29sZVxuICogQHByb3BlcnR5IHtmdW5jdGlvbigpOiB2b2lkfSBjbGVhclxuICogQHByb3BlcnR5IHtmdW5jdGlvbigpOiB2b2lkfSB0cmFjZVxuICogQHByb3BlcnR5IHsoLi4uYXJnczogYW55W10pID0+IHZvaWR9IGluZm9cbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkfSBsb2dcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkfSB3YXJuXG4gKiBAcHJvcGVydHkgeyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZH0gZXJyb3JcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkPX0gZGVidWdcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkPX0gZ3JvdXBcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkPX0gZ3JvdXBDb2xsYXBzZWRcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkPX0gZ3JvdXBFbmRcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkPX0gc3RhdHVzXG4gKiBAcHJvcGVydHkgeyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZD19IHByb2ZpbGVcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkPX0gcHJvZmlsZUVuZFxuICogQHByb3BlcnR5IHsoLi4uYXJnczogYW55W10pID0+IHZvaWQ9fSBsb2dUaW1lXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBMb2dnZXJPcHRpb25zXG4gKiBAcHJvcGVydHkge2ZhbHNlfHRydWV8XCJub25lXCJ8XCJlcnJvclwifFwid2FyblwifFwiaW5mb1wifFwibG9nXCJ8XCJ2ZXJib3NlXCJ9IGxldmVsIGxvZ2xldmVsXG4gKiBAcHJvcGVydHkge0ZpbHRlclR5cGVzfGJvb2xlYW59IGRlYnVnIGZpbHRlciBmb3IgZGVidWcgbG9nZ2luZ1xuICogQHByb3BlcnR5IHtMb2dnZXJDb25zb2xlfSBjb25zb2xlIHRoZSBjb25zb2xlIHRvIGxvZyB0b1xuICovXG5cbi8qKlxuICogQHBhcmFtIHtGaWx0ZXJJdGVtVHlwZXN9IGl0ZW0gYW4gaW5wdXQgaXRlbVxuICogQHJldHVybnMge0ZpbHRlckZ1bmN0aW9ufSBmaWx0ZXIgZnVuY3Rpb25cbiAqL1xuXG5cbnZhciBmaWx0ZXJUb0Z1bmN0aW9uID0gZnVuY3Rpb24gZmlsdGVyVG9GdW5jdGlvbihpdGVtKSB7XG4gIGlmICh0eXBlb2YgaXRlbSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHZhciByZWdFeHAgPSBuZXcgUmVnRXhwKFwiW1xcXFxcXFxcL11cIi5jb25jYXQoaXRlbS5yZXBsYWNlKCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgICAvWy1bXFxde30oKSorPy5cXFxcXiR8XS9nLCBcIlxcXFwkJlwiKSwgXCIoW1xcXFxcXFxcL118JHwhfFxcXFw/KVwiKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpZGVudCkge1xuICAgICAgcmV0dXJuIHJlZ0V4cC50ZXN0KGlkZW50KTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGl0ZW0udGVzdCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpZGVudCkge1xuICAgICAgcmV0dXJuIGl0ZW0udGVzdChpZGVudCk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgaXRlbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBpZiAodHlwZW9mIGl0ZW0gPT09IFwiYm9vbGVhblwiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH07XG4gIH1cbn07XG4vKipcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cblxuXG52YXIgTG9nTGV2ZWwgPSB7XG4gIG5vbmU6IDYsXG4gIGZhbHNlOiA2LFxuICBlcnJvcjogNSxcbiAgd2FybjogNCxcbiAgaW5mbzogMyxcbiAgbG9nOiAyLFxuICB0cnVlOiAyLFxuICB2ZXJib3NlOiAxXG59O1xuLyoqXG4gKiBAcGFyYW0ge0xvZ2dlck9wdGlvbnN9IG9wdGlvbnMgb3B0aW9ucyBvYmplY3RcbiAqIEByZXR1cm5zIHtmdW5jdGlvbihzdHJpbmcsIExvZ1R5cGVFbnVtLCBhbnlbXSk6IHZvaWR9IGxvZ2dpbmcgZnVuY3Rpb25cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBfcmVmJGxldmVsID0gX3JlZi5sZXZlbCxcbiAgICAgIGxldmVsID0gX3JlZiRsZXZlbCA9PT0gdm9pZCAwID8gXCJpbmZvXCIgOiBfcmVmJGxldmVsLFxuICAgICAgX3JlZiRkZWJ1ZyA9IF9yZWYuZGVidWcsXG4gICAgICBkZWJ1ZyA9IF9yZWYkZGVidWcgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRkZWJ1ZyxcbiAgICAgIGNvbnNvbGUgPSBfcmVmLmNvbnNvbGU7XG4gIHZhciBkZWJ1Z0ZpbHRlcnMgPSB0eXBlb2YgZGVidWcgPT09IFwiYm9vbGVhblwiID8gW2Z1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGVidWc7XG4gIH1dIDpcbiAgLyoqIEB0eXBlIHtGaWx0ZXJJdGVtVHlwZXNbXX0gKi9cbiAgW10uY29uY2F0KGRlYnVnKS5tYXAoZmlsdGVyVG9GdW5jdGlvbik7XG4gIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuXG4gIHZhciBsb2dsZXZlbCA9IExvZ0xldmVsW1wiXCIuY29uY2F0KGxldmVsKV0gfHwgMDtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGxvZ2dlclxuICAgKiBAcGFyYW0ge0xvZ1R5cGVFbnVtfSB0eXBlIHR5cGUgb2YgdGhlIGxvZyBlbnRyeVxuICAgKiBAcGFyYW0ge2FueVtdfSBhcmdzIGFyZ3VtZW50cyBvZiB0aGUgbG9nIGVudHJ5XG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cblxuICB2YXIgbG9nZ2VyID0gZnVuY3Rpb24gbG9nZ2VyKG5hbWUsIHR5cGUsIGFyZ3MpIHtcbiAgICB2YXIgbGFiZWxlZEFyZ3MgPSBmdW5jdGlvbiBsYWJlbGVkQXJncygpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDAgJiYgdHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICByZXR1cm4gW1wiW1wiLmNvbmNhdChuYW1lLCBcIl0gXCIpLmNvbmNhdChhcmdzWzBdKV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhcmdzLnNsaWNlKDEpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFtcIltcIi5jb25jYXQobmFtZSwgXCJdXCIpXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZGVidWcgPSBkZWJ1Z0ZpbHRlcnMuc29tZShmdW5jdGlvbiAoZikge1xuICAgICAgcmV0dXJuIGYobmFtZSk7XG4gICAgfSk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgTG9nVHlwZS5kZWJ1ZzpcbiAgICAgICAgaWYgKCFkZWJ1ZykgcmV0dXJuOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLmRlYnVnID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgICAgY29uc29sZS5kZWJ1Zy5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBMb2dUeXBlLmxvZzpcbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLmxvZykgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBMb2dUeXBlLmluZm86XG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC5pbmZvKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUuaW5mby5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBMb2dUeXBlLndhcm46XG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC53YXJuKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUud2Fybi5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBMb2dUeXBlLmVycm9yOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwuZXJyb3IpIHJldHVybjtcbiAgICAgICAgY29uc29sZS5lcnJvci5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBMb2dUeXBlLnRyYWNlOlxuICAgICAgICBpZiAoIWRlYnVnKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTG9nVHlwZS5ncm91cENvbGxhcHNlZDpcbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLmxvZykgcmV0dXJuO1xuXG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC52ZXJib3NlKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZS5ncm91cENvbGxhcHNlZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuXG4gICAgICBjYXNlIExvZ1R5cGUuZ3JvdXA6XG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC5sb2cpIHJldHVybjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZS5ncm91cCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuICAgICAgICAgIGNvbnNvbGUuZ3JvdXAuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTG9nVHlwZS5ncm91cEVuZDpcbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLmxvZykgcmV0dXJuOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLmdyb3VwRW5kID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTG9nVHlwZS50aW1lOlxuICAgICAgICB7XG4gICAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLmxvZykgcmV0dXJuO1xuICAgICAgICAgIHZhciBtcyA9IGFyZ3NbMV0gKiAxMDAwICsgYXJnc1syXSAvIDEwMDAwMDA7XG4gICAgICAgICAgdmFyIG1zZyA9IFwiW1wiLmNvbmNhdChuYW1lLCBcIl0gXCIpLmNvbmNhdChhcmdzWzBdLCBcIjogXCIpLmNvbmNhdChtcywgXCIgbXNcIik7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUubG9nVGltZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZ1RpbWUobXNnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIExvZ1R5cGUucHJvZmlsZTpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUucHJvZmlsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuICAgICAgICAgIGNvbnNvbGUucHJvZmlsZS5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTG9nVHlwZS5wcm9maWxlRW5kOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZS5wcm9maWxlRW5kID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgICAgY29uc29sZS5wcm9maWxlRW5kLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBMb2dUeXBlLmNsZWFyOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwubG9nKSByZXR1cm47IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUuY2xlYXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBMb2dUeXBlLnN0YXR1czpcbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLmluZm8pIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUuc3RhdHVzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuc3RhdHVzKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuc3RhdHVzLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgTG9nVHlwZSBcIi5jb25jYXQodHlwZSkpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbG9nZ2VyO1xufTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9ydW50aW1lLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL3J1bnRpbWUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKGZ1bmN0aW9uKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxudmFyIFN5bmNCYWlsSG9vayA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIHRhcGFibGUvbGliL1N5bmNCYWlsSG9vayAqLyBcIi4vY2xpZW50LXNyYy9tb2R1bGVzL2xvZ2dlci9TeW5jQmFpbEhvb2tGYWtlLmpzXCIpO1xuXG52YXIgX3JlcXVpcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0xvZ2dlciAqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvTG9nZ2VyLmpzXCIpLFxuICAgIExvZ2dlciA9IF9yZXF1aXJlLkxvZ2dlcjtcblxudmFyIGNyZWF0ZUNvbnNvbGVMb2dnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NyZWF0ZUNvbnNvbGVMb2dnZXIgKi8gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL2NyZWF0ZUNvbnNvbGVMb2dnZXIuanNcIik7XG4vKiogQHR5cGUge2NyZWF0ZUNvbnNvbGVMb2dnZXIuTG9nZ2VyT3B0aW9uc30gKi9cblxuXG52YXIgY3VycmVudERlZmF1bHRMb2dnZXJPcHRpb25zID0ge1xuICBsZXZlbDogXCJpbmZvXCIsXG4gIGRlYnVnOiBmYWxzZSxcbiAgY29uc29sZTogY29uc29sZVxufTtcbnZhciBjdXJyZW50RGVmYXVsdExvZ2dlciA9IGNyZWF0ZUNvbnNvbGVMb2dnZXIoY3VycmVudERlZmF1bHRMb2dnZXJPcHRpb25zKTtcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbG9nZ2VyXG4gKiBAcmV0dXJucyB7TG9nZ2VyfSBhIGxvZ2dlclxuICovXG5cbmV4cG9ydHMuZ2V0TG9nZ2VyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5ldyBMb2dnZXIoZnVuY3Rpb24gKHR5cGUsIGFyZ3MpIHtcbiAgICBpZiAoZXhwb3J0cy5ob29rcy5sb2cuY2FsbChuYW1lLCB0eXBlLCBhcmdzKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjdXJyZW50RGVmYXVsdExvZ2dlcihuYW1lLCB0eXBlLCBhcmdzKTtcbiAgICB9XG4gIH0sIGZ1bmN0aW9uIChjaGlsZE5hbWUpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5nZXRMb2dnZXIoXCJcIi5jb25jYXQobmFtZSwgXCIvXCIpLmNvbmNhdChjaGlsZE5hbWUpKTtcbiAgfSk7XG59O1xuLyoqXG4gKiBAcGFyYW0ge2NyZWF0ZUNvbnNvbGVMb2dnZXIuTG9nZ2VyT3B0aW9uc30gb3B0aW9ucyBuZXcgb3B0aW9ucywgbWVyZ2Ugd2l0aCBvbGQgb3B0aW9uc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cblxuXG5leHBvcnRzLmNvbmZpZ3VyZURlZmF1bHRMb2dnZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBfZXh0ZW5kcyhjdXJyZW50RGVmYXVsdExvZ2dlck9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gIGN1cnJlbnREZWZhdWx0TG9nZ2VyID0gY3JlYXRlQ29uc29sZUxvZ2dlcihjdXJyZW50RGVmYXVsdExvZ2dlck9wdGlvbnMpO1xufTtcblxuZXhwb3J0cy5ob29rcyA9IHtcbiAgbG9nOiBuZXcgU3luY0JhaWxIb29rKFtcIm9yaWdpblwiLCBcInR5cGVcIiwgXCJhcmdzXCJdKVxufTtcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gXHR9KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzICovXG4vKioqKioqLyBcdCFmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuLyoqKioqKi8gXHRcdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuLyoqKioqKi8gXHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0fSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCAqL1xuLyoqKioqKi8gXHQhZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfVxuLyoqKioqKi8gXHR9KCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0ICovXG4vKioqKioqLyBcdCFmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KCk7XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG4vLyBUaGlzIGVudHJ5IG5lZWQgdG8gYmUgd3JhcHBlZCBpbiBhbiBJSUZFIGJlY2F1c2UgaXQgbmVlZCB0byBiZSBpc29sYXRlZCBhZ2FpbnN0IG90aGVyIG1vZHVsZXMgaW4gdGhlIGNodW5rLlxuIWZ1bmN0aW9uKCkge1xuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9jbGllbnQtc3JjL21vZHVsZXMvbG9nZ2VyL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0ICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XG4vKiBoYXJtb255IGV4cG9ydCAqLyAgIFwiZGVmYXVsdFwiOiBmdW5jdGlvbigpIHsgcmV0dXJuIC8qIHJlZXhwb3J0IGRlZmF1bHQgZXhwb3J0IGZyb20gbmFtZWQgbW9kdWxlICovIHdlYnBhY2tfbGliX2xvZ2dpbmdfcnVudGltZV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fOyB9XG4vKiBoYXJtb255IGV4cG9ydCAqLyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciB3ZWJwYWNrX2xpYl9sb2dnaW5nX3J1bnRpbWVfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIHdlYnBhY2svbGliL2xvZ2dpbmcvcnVudGltZS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvcnVudGltZS5qc1wiKTtcblxufSgpO1xudmFyIF9fd2VicGFja19leHBvcnRfdGFyZ2V0X18gPSBleHBvcnRzO1xuZm9yKHZhciBpIGluIF9fd2VicGFja19leHBvcnRzX18pIF9fd2VicGFja19leHBvcnRfdGFyZ2V0X19baV0gPSBfX3dlYnBhY2tfZXhwb3J0c19fW2ldO1xuaWYoX193ZWJwYWNrX2V4cG9ydHNfXy5fX2VzTW9kdWxlKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoX193ZWJwYWNrX2V4cG9ydF90YXJnZXRfXywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyB9KSgpXG47IiwiLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdFwidXNlIHN0cmljdFwiO1xuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvc3RyaXAtYW5zaS9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3N0cmlwLWFuc2kvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX19fd2VicGFja19tb2R1bGVfXywgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuLyogaGFybW9ueSBleHBvcnQgKi8gICBcImRlZmF1bHRcIjogZnVuY3Rpb24oKSB7IHJldHVybiAvKiBiaW5kaW5nICovIHN0cmlwQW5zaTsgfVxuLyogaGFybW9ueSBleHBvcnQgKi8gfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgYW5zaV9yZWdleF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgYW5zaS1yZWdleCAqLyBcIi4vbm9kZV9tb2R1bGVzL3N0cmlwLWFuc2kvbm9kZV9tb2R1bGVzL2Fuc2ktcmVnZXgvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHN0cmlwQW5zaShzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGEgYHN0cmluZ2AsIGdvdCBgXCIuY29uY2F0KHR5cGVvZiBzdHJpbmcsIFwiYFwiKSk7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoKDAsYW5zaV9yZWdleF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXSkoKSwgJycpO1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9zdHJpcC1hbnNpL25vZGVfbW9kdWxlcy9hbnNpLXJlZ2V4L2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvc3RyaXAtYW5zaS9ub2RlX21vZHVsZXMvYW5zaS1yZWdleC9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKGZ1bmN0aW9uKF9fdW51c2VkX3dlYnBhY2tfX193ZWJwYWNrX21vZHVsZV9fLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0ICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XG4vKiBoYXJtb255IGV4cG9ydCAqLyAgIFwiZGVmYXVsdFwiOiBmdW5jdGlvbigpIHsgcmV0dXJuIC8qIGJpbmRpbmcgKi8gYW5zaVJlZ2V4OyB9XG4vKiBoYXJtb255IGV4cG9ydCAqLyB9KTtcbmZ1bmN0aW9uIGFuc2lSZWdleCgpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgX3JlZiRvbmx5Rmlyc3QgPSBfcmVmLm9ubHlGaXJzdCxcbiAgICAgIG9ubHlGaXJzdCA9IF9yZWYkb25seUZpcnN0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkb25seUZpcnN0O1xuXG4gIHZhciBwYXR0ZXJuID0gW1wiW1xcXFx1MDAxQlxcXFx1MDA5Ql1bW1xcXFxdKCkjOz9dKig/Oig/Oig/Oig/OjtbLWEtekEtWlxcXFxkXFxcXC8jJi46PT8lQH5fXSspKnxbYS16QS1aXFxcXGRdKyg/OjtbLWEtekEtWlxcXFxkXFxcXC8jJi46PT8lQH5fXSopKik/XFxcXHUwMDA3KVwiLCAnKD86KD86XFxcXGR7MSw0fSg/OjtcXFxcZHswLDR9KSopP1tcXFxcZEEtUFItVFpjZi1udHFyeT0+PH5dKSknXS5qb2luKCd8Jyk7XG4gIHJldHVybiBuZXcgUmVnRXhwKHBhdHRlcm4sIG9ubHlGaXJzdCA/IHVuZGVmaW5lZCA6ICdnJyk7XG59XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyAqL1xuLyoqKioqKi8gXHQhZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcbi8qKioqKiovIFx0XHRcdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcbi8qKioqKiovIFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0oKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQgKi9cbi8qKioqKiovIFx0IWZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH1cbi8qKioqKiovIFx0fSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCAqL1xuLyoqKioqKi8gXHQhZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0fSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuLy8gVGhpcyBlbnRyeSBuZWVkIHRvIGJlIHdyYXBwZWQgaW4gYW4gSUlGRSBiZWNhdXNlIGl0IG5lZWQgdG8gYmUgaXNvbGF0ZWQgYWdhaW5zdCBvdGhlciBtb2R1bGVzIGluIHRoZSBjaHVuay5cbiFmdW5jdGlvbigpIHtcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL2NsaWVudC1zcmMvbW9kdWxlcy9zdHJpcC1hbnNpL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgc3RyaXBfYW5zaV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgc3RyaXAtYW5zaSAqLyBcIi4vbm9kZV9tb2R1bGVzL3N0cmlwLWFuc2kvaW5kZXguanNcIik7XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoc3RyaXBfYW5zaV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXSk7XG59KCk7XG52YXIgX193ZWJwYWNrX2V4cG9ydF90YXJnZXRfXyA9IGV4cG9ydHM7XG5mb3IodmFyIGkgaW4gX193ZWJwYWNrX2V4cG9ydHNfXykgX193ZWJwYWNrX2V4cG9ydF90YXJnZXRfX1tpXSA9IF9fd2VicGFja19leHBvcnRzX19baV07XG5pZihfX3dlYnBhY2tfZXhwb3J0c19fLl9fZXNNb2R1bGUpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3dlYnBhY2tfZXhwb3J0X3RhcmdldF9fLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIH0pKClcbjsiLCIvLyBUaGUgZXJyb3Igb3ZlcmxheSBpcyBpbnNwaXJlZCAoYW5kIG1vc3RseSBjb3BpZWQpIGZyb20gQ3JlYXRlIFJlYWN0IEFwcCAoaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29raW5jdWJhdG9yL2NyZWF0ZS1yZWFjdC1hcHApXG4vLyBUaGV5LCBpbiB0dXJuLCBnb3QgaW5zcGlyZWQgYnkgd2VicGFjay1ob3QtbWlkZGxld2FyZSAoaHR0cHM6Ly9naXRodWIuY29tL2dsZW5qYW1pbi93ZWJwYWNrLWhvdC1taWRkbGV3YXJlKS5cbmltcG9ydCBhbnNpSFRNTCBmcm9tIFwiYW5zaS1odG1sLWNvbW11bml0eVwiO1xuaW1wb3J0IHsgZW5jb2RlIH0gZnJvbSBcImh0bWwtZW50aXRpZXNcIjtcbnZhciBjb2xvcnMgPSB7XG4gIHJlc2V0OiBbXCJ0cmFuc3BhcmVudFwiLCBcInRyYW5zcGFyZW50XCJdLFxuICBibGFjazogXCIxODE4MThcIixcbiAgcmVkOiBcIkUzNjA0OVwiLFxuICBncmVlbjogXCJCM0NCNzRcIixcbiAgeWVsbG93OiBcIkZGRDA4MFwiLFxuICBibHVlOiBcIjdDQUZDMlwiLFxuICBtYWdlbnRhOiBcIjdGQUNDQVwiLFxuICBjeWFuOiBcIkMzQzJFRlwiLFxuICBsaWdodGdyZXk6IFwiRUJFN0UzXCIsXG4gIGRhcmtncmV5OiBcIjZENzg5MVwiXG59O1xuLyoqIEB0eXBlIHtIVE1MSUZyYW1lRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWR9ICovXG5cbnZhciBpZnJhbWVDb250YWluZXJFbGVtZW50O1xuLyoqIEB0eXBlIHtIVE1MRGl2RWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWR9ICovXG5cbnZhciBjb250YWluZXJFbGVtZW50O1xuLyoqIEB0eXBlIHtBcnJheTwoZWxlbWVudDogSFRNTERpdkVsZW1lbnQpID0+IHZvaWQ+fSAqL1xuXG52YXIgb25Mb2FkUXVldWUgPSBbXTtcbmFuc2lIVE1MLnNldENvbG9ycyhjb2xvcnMpO1xuXG5mdW5jdGlvbiBjcmVhdGVDb250YWluZXIoKSB7XG4gIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICBpZnJhbWVDb250YWluZXJFbGVtZW50LmlkID0gXCJ3ZWJwYWNrLWRldi1zZXJ2ZXItY2xpZW50LW92ZXJsYXlcIjtcbiAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5zcmMgPSBcImFib3V0OmJsYW5rXCI7XG4gIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQuc3R5bGUubGVmdCA9IDA7XG4gIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQuc3R5bGUudG9wID0gMDtcbiAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5zdHlsZS5yaWdodCA9IDA7XG4gIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQuc3R5bGUuYm90dG9tID0gMDtcbiAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCA9IFwiMTAwdndcIjtcbiAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcIjEwMHZoXCI7XG4gIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQuc3R5bGUuekluZGV4ID0gOTk5OTk5OTk5OTtcblxuICBpZnJhbWVDb250YWluZXJFbGVtZW50Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb250YWluZXJFbGVtZW50ID1cbiAgICAvKiogQHR5cGUge0RvY3VtZW50fSAqL1xuXG4gICAgLyoqIEB0eXBlIHtIVE1MSUZyYW1lRWxlbWVudH0gKi9cbiAgICBpZnJhbWVDb250YWluZXJFbGVtZW50LmNvbnRlbnREb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lckVsZW1lbnQuaWQgPSBcIndlYnBhY2stZGV2LXNlcnZlci1jbGllbnQtb3ZlcmxheS1kaXZcIjtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XG4gICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5sZWZ0ID0gMDtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLnRvcCA9IDA7XG4gICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5yaWdodCA9IDA7XG4gICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5ib3R0b20gPSAwO1xuICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUud2lkdGggPSBcIjEwMHZ3XCI7XG4gICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcIjEwMHZoXCI7XG4gICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC44NSlcIjtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmNvbG9yID0gXCIjRThFOEU4XCI7XG4gICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5mb250RmFtaWx5ID0gXCJNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZVwiO1xuICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBcImxhcmdlXCI7XG4gICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5wYWRkaW5nID0gXCIycmVtXCI7XG4gICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5saW5lSGVpZ2h0ID0gXCIxLjJcIjtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLndoaXRlU3BhY2UgPSBcInByZS13cmFwXCI7XG4gICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xuICAgIHZhciBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaGVhZGVyRWxlbWVudC5pbm5lclRleHQgPSBcIkNvbXBpbGVkIHdpdGggcHJvYmxlbXM6XCI7XG4gICAgdmFyIGNsb3NlQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2VCdXR0b25FbGVtZW50LmlubmVyVGV4dCA9IFwiWFwiO1xuICAgIGNsb3NlQnV0dG9uRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ0cmFuc3BhcmVudFwiO1xuICAgIGNsb3NlQnV0dG9uRWxlbWVudC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICBjbG9zZUJ1dHRvbkVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcbiAgICBjbG9zZUJ1dHRvbkVsZW1lbnQuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuICAgIGNsb3NlQnV0dG9uRWxlbWVudC5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICBjbG9zZUJ1dHRvbkVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgY2xvc2VCdXR0b25FbGVtZW50LnN0eWxlLmNzc0Zsb2F0ID0gXCJyaWdodFwiOyAvLyBAdHMtaWdub3JlXG5cbiAgICBjbG9zZUJ1dHRvbkVsZW1lbnQuc3R5bGUuc3R5bGVGbG9hdCA9IFwicmlnaHRcIjtcbiAgICBjbG9zZUJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhpZGUoKTtcbiAgICB9KTtcbiAgICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlckVsZW1lbnQpO1xuICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b25FbGVtZW50KTtcbiAgICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgIC8qKiBAdHlwZSB7RG9jdW1lbnR9ICovXG5cbiAgICAvKiogQHR5cGUge0hUTUxJRnJhbWVFbGVtZW50fSAqL1xuICAgIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQuY29udGVudERvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyRWxlbWVudCk7XG4gICAgb25Mb2FkUXVldWUuZm9yRWFjaChmdW5jdGlvbiAob25Mb2FkKSB7XG4gICAgICBvbkxvYWQoXG4gICAgICAvKiogQHR5cGUge0hUTUxEaXZFbGVtZW50fSAqL1xuICAgICAgY29udGFpbmVyRWxlbWVudCk7XG4gICAgfSk7XG4gICAgb25Mb2FkUXVldWUgPSBbXTtcbiAgICAvKiogQHR5cGUge0hUTUxJRnJhbWVFbGVtZW50fSAqL1xuXG4gICAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5vbmxvYWQgPSBudWxsO1xuICB9O1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lQ29udGFpbmVyRWxlbWVudCk7XG59XG4vKipcbiAqIEBwYXJhbSB7KGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KSA9PiB2b2lkfSBjYWxsYmFja1xuICovXG5cblxuZnVuY3Rpb24gZW5zdXJlT3ZlcmxheUV4aXN0cyhjYWxsYmFjaykge1xuICBpZiAoY29udGFpbmVyRWxlbWVudCkge1xuICAgIC8vIEV2ZXJ5dGhpbmcgaXMgcmVhZHksIGNhbGwgdGhlIGNhbGxiYWNrIHJpZ2h0IGF3YXkuXG4gICAgY2FsbGJhY2soY29udGFpbmVyRWxlbWVudCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb25Mb2FkUXVldWUucHVzaChjYWxsYmFjayk7XG5cbiAgaWYgKGlmcmFtZUNvbnRhaW5lckVsZW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjcmVhdGVDb250YWluZXIoKTtcbn0gLy8gU3VjY2Vzc2Z1bCBjb21waWxhdGlvbi5cblxuXG5mdW5jdGlvbiBoaWRlKCkge1xuICBpZiAoIWlmcmFtZUNvbnRhaW5lckVsZW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gQ2xlYW4gdXAgYW5kIHJlc2V0IGludGVybmFsIHN0YXRlLlxuXG5cbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWVDb250YWluZXJFbGVtZW50KTtcbiAgaWZyYW1lQ29udGFpbmVyRWxlbWVudCA9IG51bGw7XG4gIGNvbnRhaW5lckVsZW1lbnQgPSBudWxsO1xufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtzdHJpbmcgIHwgeyBmaWxlPzogc3RyaW5nLCBtb2R1bGVOYW1lPzogc3RyaW5nLCBsb2M/OiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcgfX0gaXRlbVxuICogQHJldHVybnMge3sgaGVhZGVyOiBzdHJpbmcsIGJvZHk6IHN0cmluZyB9fVxuICovXG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvYmxlbSh0eXBlLCBpdGVtKSB7XG4gIHZhciBoZWFkZXIgPSB0eXBlID09PSBcIndhcm5pbmdcIiA/IFwiV0FSTklOR1wiIDogXCJFUlJPUlwiO1xuICB2YXIgYm9keSA9IFwiXCI7XG5cbiAgaWYgKHR5cGVvZiBpdGVtID09PSBcInN0cmluZ1wiKSB7XG4gICAgYm9keSArPSBpdGVtO1xuICB9IGVsc2Uge1xuICAgIHZhciBmaWxlID0gaXRlbS5maWxlIHx8IFwiXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuXG4gICAgdmFyIG1vZHVsZU5hbWUgPSBpdGVtLm1vZHVsZU5hbWUgPyBpdGVtLm1vZHVsZU5hbWUuaW5kZXhPZihcIiFcIikgIT09IC0xID8gXCJcIi5jb25jYXQoaXRlbS5tb2R1bGVOYW1lLnJlcGxhY2UoL14oXFxzfFxcUykqIS8sIFwiXCIpLCBcIiAoXCIpLmNvbmNhdChpdGVtLm1vZHVsZU5hbWUsIFwiKVwiKSA6IFwiXCIuY29uY2F0KGl0ZW0ubW9kdWxlTmFtZSkgOiBcIlwiO1xuICAgIHZhciBsb2MgPSBpdGVtLmxvYztcbiAgICBoZWFkZXIgKz0gXCJcIi5jb25jYXQobW9kdWxlTmFtZSB8fCBmaWxlID8gXCIgaW4gXCIuY29uY2F0KG1vZHVsZU5hbWUgPyBcIlwiLmNvbmNhdChtb2R1bGVOYW1lKS5jb25jYXQoZmlsZSA/IFwiIChcIi5jb25jYXQoZmlsZSwgXCIpXCIpIDogXCJcIikgOiBmaWxlKS5jb25jYXQobG9jID8gXCIgXCIuY29uY2F0KGxvYykgOiBcIlwiKSA6IFwiXCIpO1xuICAgIGJvZHkgKz0gaXRlbS5tZXNzYWdlIHx8IFwiXCI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhlYWRlcjogaGVhZGVyLFxuICAgIGJvZHk6IGJvZHlcbiAgfTtcbn0gLy8gQ29tcGlsYXRpb24gd2l0aCBlcnJvcnMgKGUuZy4gc3ludGF4IGVycm9yIG9yIG1pc3NpbmcgbW9kdWxlcykuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nICB8IHsgZmlsZT86IHN0cmluZywgbW9kdWxlTmFtZT86IHN0cmluZywgbG9jPzogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nIH0+fSBtZXNzYWdlc1xuICovXG5cblxuZnVuY3Rpb24gc2hvdyh0eXBlLCBtZXNzYWdlcykge1xuICBlbnN1cmVPdmVybGF5RXhpc3RzKGZ1bmN0aW9uICgpIHtcbiAgICBtZXNzYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICB2YXIgZW50cnlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHZhciB0eXBlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgICB2YXIgX2Zvcm1hdFByb2JsZW0gPSBmb3JtYXRQcm9ibGVtKHR5cGUsIG1lc3NhZ2UpLFxuICAgICAgICAgIGhlYWRlciA9IF9mb3JtYXRQcm9ibGVtLmhlYWRlcixcbiAgICAgICAgICBib2R5ID0gX2Zvcm1hdFByb2JsZW0uYm9keTtcblxuICAgICAgdHlwZUVsZW1lbnQuaW5uZXJUZXh0ID0gaGVhZGVyO1xuICAgICAgdHlwZUVsZW1lbnQuc3R5bGUuY29sb3IgPSBcIiNcIi5jb25jYXQoY29sb3JzLnJlZCk7IC8vIE1ha2UgaXQgbG9vayBzaW1pbGFyIHRvIG91ciB0ZXJtaW5hbC5cblxuICAgICAgdmFyIHRleHQgPSBhbnNpSFRNTChlbmNvZGUoYm9keSkpO1xuICAgICAgdmFyIG1lc3NhZ2VUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBtZXNzYWdlVGV4dE5vZGUuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgIGVudHJ5RWxlbWVudC5hcHBlbmRDaGlsZCh0eXBlRWxlbWVudCk7XG4gICAgICBlbnRyeUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICAgIGVudHJ5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgICAgZW50cnlFbGVtZW50LmFwcGVuZENoaWxkKG1lc3NhZ2VUZXh0Tm9kZSk7XG4gICAgICBlbnRyeUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICAgIGVudHJ5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgICAgLyoqIEB0eXBlIHtIVE1MRGl2RWxlbWVudH0gKi9cblxuICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChlbnRyeUVsZW1lbnQpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgZm9ybWF0UHJvYmxlbSwgc2hvdywgaGlkZSB9OyIsIi8qIGdsb2JhbCBfX3dlYnBhY2tfZGV2X3NlcnZlcl9jbGllbnRfXyAqL1xuaW1wb3J0IFdlYlNvY2tldENsaWVudCBmcm9tIFwiLi9jbGllbnRzL1dlYlNvY2tldENsaWVudC5qc1wiO1xuaW1wb3J0IHsgbG9nIH0gZnJvbSBcIi4vdXRpbHMvbG9nLmpzXCI7IC8vIHRoaXMgV2Vic29ja2V0Q2xpZW50IGlzIGhlcmUgYXMgYSBkZWZhdWx0IGZhbGxiYWNrLCBpbiBjYXNlIHRoZSBjbGllbnQgaXMgbm90IGluamVjdGVkXG5cbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuXG52YXIgQ2xpZW50ID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG50eXBlb2YgX193ZWJwYWNrX2Rldl9zZXJ2ZXJfY2xpZW50X18gIT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgX193ZWJwYWNrX2Rldl9zZXJ2ZXJfY2xpZW50X18uZGVmYXVsdCAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19kZXZfc2VydmVyX2NsaWVudF9fLmRlZmF1bHQgOiBfX3dlYnBhY2tfZGV2X3NlcnZlcl9jbGllbnRfXyA6IFdlYlNvY2tldENsaWVudDtcbi8qIGVzbGludC1lbmFibGUgY2FtZWxjYXNlICovXG5cbnZhciByZXRyaWVzID0gMDtcbnZhciBtYXhSZXRyaWVzID0gMTA7XG52YXIgY2xpZW50ID0gbnVsbDtcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHt7IFtoYW5kbGVyOiBzdHJpbmddOiAoZGF0YT86IGFueSwgcGFyYW1zPzogYW55KSA9PiBhbnkgfX0gaGFuZGxlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcmVjb25uZWN0XVxuICovXG5cbnZhciBzb2NrZXQgPSBmdW5jdGlvbiBpbml0U29ja2V0KHVybCwgaGFuZGxlcnMsIHJlY29ubmVjdCkge1xuICBjbGllbnQgPSBuZXcgQ2xpZW50KHVybCk7XG4gIGNsaWVudC5vbk9wZW4oZnVuY3Rpb24gKCkge1xuICAgIHJldHJpZXMgPSAwO1xuXG4gICAgaWYgKHR5cGVvZiByZWNvbm5lY3QgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIG1heFJldHJpZXMgPSByZWNvbm5lY3Q7XG4gICAgfVxuICB9KTtcbiAgY2xpZW50Lm9uQ2xvc2UoZnVuY3Rpb24gKCkge1xuICAgIGlmIChyZXRyaWVzID09PSAwKSB7XG4gICAgICBoYW5kbGVycy5jbG9zZSgpO1xuICAgIH0gLy8gVHJ5IHRvIHJlY29ubmVjdC5cblxuXG4gICAgY2xpZW50ID0gbnVsbDsgLy8gQWZ0ZXIgMTAgcmV0cmllcyBzdG9wIHRyeWluZywgdG8gcHJldmVudCBsb2dzcGFtLlxuXG4gICAgaWYgKHJldHJpZXMgPCBtYXhSZXRyaWVzKSB7XG4gICAgICAvLyBFeHBvbmVudGlhbGx5IGluY3JlYXNlIHRpbWVvdXQgdG8gcmVjb25uZWN0LlxuICAgICAgLy8gUmVzcGVjdGZ1bGx5IGNvcGllZCBmcm9tIHRoZSBwYWNrYWdlIGBnb3RgLlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtcHJvcGVydGllc1xuICAgICAgdmFyIHJldHJ5SW5NcyA9IDEwMDAgKiBNYXRoLnBvdygyLCByZXRyaWVzKSArIE1hdGgucmFuZG9tKCkgKiAxMDA7XG4gICAgICByZXRyaWVzICs9IDE7XG4gICAgICBsb2cuaW5mbyhcIlRyeWluZyB0byByZWNvbm5lY3QuLi5cIik7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc29ja2V0KHVybCwgaGFuZGxlcnMsIHJlY29ubmVjdCk7XG4gICAgICB9LCByZXRyeUluTXMpO1xuICAgIH1cbiAgfSk7XG4gIGNsaWVudC5vbk1lc3NhZ2UoXG4gIC8qKlxuICAgKiBAcGFyYW0ge2FueX0gZGF0YVxuICAgKi9cbiAgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgbWVzc2FnZSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cbiAgICBpZiAoaGFuZGxlcnNbbWVzc2FnZS50eXBlXSkge1xuICAgICAgaGFuZGxlcnNbbWVzc2FnZS50eXBlXShtZXNzYWdlLmRhdGEsIG1lc3NhZ2UucGFyYW1zKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc29ja2V0OyIsIi8qKlxuICogQHBhcmFtIHt7IHByb3RvY29sPzogc3RyaW5nLCBhdXRoPzogc3RyaW5nLCBob3N0bmFtZT86IHN0cmluZywgcG9ydD86IHN0cmluZywgcGF0aG5hbWU/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgaGFzaD86IHN0cmluZywgc2xhc2hlcz86IGJvb2xlYW4gfX0gb2JqVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBmb3JtYXQob2JqVVJMKSB7XG4gIHZhciBwcm90b2NvbCA9IG9ialVSTC5wcm90b2NvbCB8fCBcIlwiO1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSBcIjpcIikge1xuICAgIHByb3RvY29sICs9IFwiOlwiO1xuICB9XG5cbiAgdmFyIGF1dGggPSBvYmpVUkwuYXV0aCB8fCBcIlwiO1xuXG4gIGlmIChhdXRoKSB7XG4gICAgYXV0aCA9IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKTtcbiAgICBhdXRoID0gYXV0aC5yZXBsYWNlKC8lM0EvaSwgXCI6XCIpO1xuICAgIGF1dGggKz0gXCJAXCI7XG4gIH1cblxuICB2YXIgaG9zdCA9IFwiXCI7XG5cbiAgaWYgKG9ialVSTC5ob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKG9ialVSTC5ob3N0bmFtZS5pbmRleE9mKFwiOlwiKSA9PT0gLTEgPyBvYmpVUkwuaG9zdG5hbWUgOiBcIltcIi5jb25jYXQob2JqVVJMLmhvc3RuYW1lLCBcIl1cIikpO1xuXG4gICAgaWYgKG9ialVSTC5wb3J0KSB7XG4gICAgICBob3N0ICs9IFwiOlwiLmNvbmNhdChvYmpVUkwucG9ydCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHBhdGhuYW1lID0gb2JqVVJMLnBhdGhuYW1lIHx8IFwiXCI7XG5cbiAgaWYgKG9ialVSTC5zbGFzaGVzKSB7XG4gICAgaG9zdCA9IFwiLy9cIi5jb25jYXQoaG9zdCB8fCBcIlwiKTtcblxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZS5jaGFyQXQoMCkgIT09IFwiL1wiKSB7XG4gICAgICBwYXRobmFtZSA9IFwiL1wiLmNvbmNhdChwYXRobmFtZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9IFwiXCI7XG4gIH1cblxuICB2YXIgc2VhcmNoID0gb2JqVVJMLnNlYXJjaCB8fCBcIlwiO1xuXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoLmNoYXJBdCgwKSAhPT0gXCI/XCIpIHtcbiAgICBzZWFyY2ggPSBcIj9cIi5jb25jYXQoc2VhcmNoKTtcbiAgfVxuXG4gIHZhciBoYXNoID0gb2JqVVJMLmhhc2ggfHwgXCJcIjtcblxuICBpZiAoaGFzaCAmJiBoYXNoLmNoYXJBdCgwKSAhPT0gXCIjXCIpIHtcbiAgICBoYXNoID0gXCIjXCIuY29uY2F0KGhhc2gpO1xuICB9XG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0Y2hcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQobWF0Y2gpO1xuICB9KTtcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoXCIjXCIsIFwiJTIzXCIpO1xuICByZXR1cm4gXCJcIi5jb25jYXQocHJvdG9jb2wpLmNvbmNhdChob3N0KS5jb25jYXQocGF0aG5hbWUpLmNvbmNhdChzZWFyY2gpLmNvbmNhdChoYXNoKTtcbn1cbi8qKlxuICogQHBhcmFtIHtVUkwgJiB7IGZyb21DdXJyZW50U2NyaXB0PzogYm9vbGVhbiB9fSBwYXJzZWRVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVTb2NrZXRVUkwocGFyc2VkVVJMKSB7XG4gIHZhciBob3N0bmFtZSA9IHBhcnNlZFVSTC5ob3N0bmFtZTsgLy8gTm9kZS5qcyBtb2R1bGUgcGFyc2VzIGl0IGFzIGA6OmBcbiAgLy8gYG5ldyBVUkwodXJsU3RyaW5nLCBbYmFzZVVSTFN0cmluZ10pYCBwYXJzZXMgaXQgYXMgJ1s6Ol0nXG5cbiAgdmFyIGlzSW5BZGRyQW55ID0gaG9zdG5hbWUgPT09IFwiMC4wLjAuMFwiIHx8IGhvc3RuYW1lID09PSBcIjo6XCIgfHwgaG9zdG5hbWUgPT09IFwiWzo6XVwiOyAvLyB3aHkgZG8gd2UgbmVlZCB0aGlzIGNoZWNrP1xuICAvLyBob3N0bmFtZSBuL2EgZm9yIGZpbGUgcHJvdG9jb2wgKGV4YW1wbGUsIHdoZW4gdXNpbmcgZWxlY3Ryb24sIGlvbmljKVxuICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrL3dlYnBhY2stZGV2LXNlcnZlci9wdWxsLzM4NFxuXG4gIGlmIChpc0luQWRkckFueSAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICYmIHNlbGYubG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIikgPT09IDApIHtcbiAgICBob3N0bmFtZSA9IHNlbGYubG9jYXRpb24uaG9zdG5hbWU7XG4gIH1cblxuICB2YXIgc29ja2V0VVJMUHJvdG9jb2wgPSBwYXJzZWRVUkwucHJvdG9jb2wgfHwgc2VsZi5sb2NhdGlvbi5wcm90b2NvbDsgLy8gV2hlbiBodHRwcyBpcyB1c2VkIGluIHRoZSBhcHAsIHNlY3VyZSB3ZWIgc29ja2V0cyBhcmUgYWx3YXlzIG5lY2Vzc2FyeSBiZWNhdXNlIHRoZSBicm93c2VyIGRvZXNuJ3QgYWNjZXB0IG5vbi1zZWN1cmUgd2ViIHNvY2tldHMuXG5cbiAgaWYgKHNvY2tldFVSTFByb3RvY29sID09PSBcImF1dG86XCIgfHwgaG9zdG5hbWUgJiYgaXNJbkFkZHJBbnkgJiYgc2VsZi5sb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIikge1xuICAgIHNvY2tldFVSTFByb3RvY29sID0gc2VsZi5sb2NhdGlvbi5wcm90b2NvbDtcbiAgfVxuXG4gIHNvY2tldFVSTFByb3RvY29sID0gc29ja2V0VVJMUHJvdG9jb2wucmVwbGFjZSgvXig/Omh0dHB8ListZXh0ZW5zaW9ufGZpbGUpL2ksIFwid3NcIik7XG4gIHZhciBzb2NrZXRVUkxBdXRoID0gXCJcIjsgLy8gYG5ldyBVUkwodXJsU3RyaW5nLCBbYmFzZVVSTHN0cmluZ10pYCBkb2Vzbid0IGhhdmUgYGF1dGhgIHByb3BlcnR5XG4gIC8vIFBhcnNlIGF1dGhlbnRpY2F0aW9uIGNyZWRlbnRpYWxzIGluIGNhc2Ugd2UgbmVlZCB0aGVtXG5cbiAgaWYgKHBhcnNlZFVSTC51c2VybmFtZSkge1xuICAgIHNvY2tldFVSTEF1dGggPSBwYXJzZWRVUkwudXNlcm5hbWU7IC8vIFNpbmNlIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb24gZG9lcyBub3QgYWxsb3cgZW1wdHkgdXNlcm5hbWUsXG4gICAgLy8gd2Ugb25seSBpbmNsdWRlIHBhc3N3b3JkIGlmIHRoZSB1c2VybmFtZSBpcyBub3QgZW1wdHkuXG5cbiAgICBpZiAocGFyc2VkVVJMLnBhc3N3b3JkKSB7XG4gICAgICAvLyBSZXN1bHQ6IDx1c2VybmFtZT46PHBhc3N3b3JkPlxuICAgICAgc29ja2V0VVJMQXV0aCA9IHNvY2tldFVSTEF1dGguY29uY2F0KFwiOlwiLCBwYXJzZWRVUkwucGFzc3dvcmQpO1xuICAgIH1cbiAgfSAvLyBJbiBjYXNlIHRoZSBob3N0IGlzIGEgcmF3IElQdjYgYWRkcmVzcywgaXQgY2FuIGJlIGVuY2xvc2VkIGluXG4gIC8vIHRoZSBicmFja2V0cyBhcyB0aGUgYnJhY2tldHMgYXJlIG5lZWRlZCBpbiB0aGUgZmluYWwgVVJMIHN0cmluZy5cbiAgLy8gTmVlZCB0byByZW1vdmUgdGhvc2UgYXMgdXJsLmZvcm1hdCBibGluZGx5IGFkZHMgaXRzIG93biBzZXQgb2YgYnJhY2tldHNcbiAgLy8gaWYgdGhlIGhvc3Qgc3RyaW5nIGNvbnRhaW5zIGNvbG9ucy4gVGhhdCB3b3VsZCBsZWFkIHRvIG5vbi13b3JraW5nXG4gIC8vIGRvdWJsZSBicmFja2V0cyAoZS5nLiBbWzo6XV0pIGhvc3RcbiAgLy9cbiAgLy8gQWxsIG9mIHRoZXNlIHdlYiBzb2NrZXQgdXJsIHBhcmFtcyBhcmUgb3B0aW9uYWxseSBwYXNzZWQgaW4gdGhyb3VnaCByZXNvdXJjZVF1ZXJ5LFxuICAvLyBzbyB3ZSBuZWVkIHRvIGZhbGwgYmFjayB0byB0aGUgZGVmYXVsdCBpZiB0aGV5IGFyZSBub3QgcHJvdmlkZWRcblxuXG4gIHZhciBzb2NrZXRVUkxIb3N0bmFtZSA9IChob3N0bmFtZSB8fCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIHx8IFwibG9jYWxob3N0XCIpLnJlcGxhY2UoL15cXFsoLiopXFxdJC8sIFwiJDFcIik7XG4gIHZhciBzb2NrZXRVUkxQb3J0ID0gcGFyc2VkVVJMLnBvcnQ7XG5cbiAgaWYgKCFzb2NrZXRVUkxQb3J0IHx8IHNvY2tldFVSTFBvcnQgPT09IFwiMFwiKSB7XG4gICAgc29ja2V0VVJMUG9ydCA9IHNlbGYubG9jYXRpb24ucG9ydDtcbiAgfSAvLyBJZiBwYXRoIGlzIHByb3ZpZGVkIGl0J2xsIGJlIHBhc3NlZCBpbiB2aWEgdGhlIHJlc291cmNlUXVlcnkgYXMgYVxuICAvLyBxdWVyeSBwYXJhbSBzbyBpdCBoYXMgdG8gYmUgcGFyc2VkIG91dCBvZiB0aGUgcXVlcnlzdHJpbmcgaW4gb3JkZXIgZm9yIHRoZVxuICAvLyBjbGllbnQgdG8gb3BlbiB0aGUgc29ja2V0IHRvIHRoZSBjb3JyZWN0IGxvY2F0aW9uLlxuXG5cbiAgdmFyIHNvY2tldFVSTFBhdGhuYW1lID0gXCIvd3NcIjtcblxuICBpZiAocGFyc2VkVVJMLnBhdGhuYW1lICYmICFwYXJzZWRVUkwuZnJvbUN1cnJlbnRTY3JpcHQpIHtcbiAgICBzb2NrZXRVUkxQYXRobmFtZSA9IHBhcnNlZFVSTC5wYXRobmFtZTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXQoe1xuICAgIHByb3RvY29sOiBzb2NrZXRVUkxQcm90b2NvbCxcbiAgICBhdXRoOiBzb2NrZXRVUkxBdXRoLFxuICAgIGhvc3RuYW1lOiBzb2NrZXRVUkxIb3N0bmFtZSxcbiAgICBwb3J0OiBzb2NrZXRVUkxQb3J0LFxuICAgIHBhdGhuYW1lOiBzb2NrZXRVUkxQYXRobmFtZSxcbiAgICBzbGFzaGVzOiB0cnVlXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTb2NrZXRVUkw7IiwiLyoqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRDdXJyZW50U2NyaXB0U291cmNlKCkge1xuICAvLyBgZG9jdW1lbnQuY3VycmVudFNjcmlwdGAgaXMgdGhlIG1vc3QgYWNjdXJhdGUgd2F5IHRvIGZpbmQgdGhlIGN1cnJlbnQgc2NyaXB0LFxuICAvLyBidXQgaXMgbm90IHN1cHBvcnRlZCBpbiBhbGwgYnJvd3NlcnMuXG4gIGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xuICB9IC8vIEZhbGxiYWNrIHRvIGdldHRpbmcgYWxsIHNjcmlwdHMgcnVubmluZyBpbiB0aGUgZG9jdW1lbnQuXG5cblxuICB2YXIgc2NyaXB0RWxlbWVudHMgPSBkb2N1bWVudC5zY3JpcHRzIHx8IFtdO1xuICB2YXIgc2NyaXB0RWxlbWVudHNXaXRoU3JjID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKHNjcmlwdEVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShcInNyY1wiKTtcbiAgfSk7XG5cbiAgaWYgKHNjcmlwdEVsZW1lbnRzV2l0aFNyYy5sZW5ndGggPiAwKSB7XG4gICAgdmFyIGN1cnJlbnRTY3JpcHQgPSBzY3JpcHRFbGVtZW50c1dpdGhTcmNbc2NyaXB0RWxlbWVudHNXaXRoU3JjLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiBjdXJyZW50U2NyaXB0LmdldEF0dHJpYnV0ZShcInNyY1wiKTtcbiAgfSAvLyBGYWlsIGFzIHRoZXJlIHdhcyBubyBzY3JpcHQgdG8gdXNlLlxuXG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiW3dlYnBhY2stZGV2LXNlcnZlcl0gRmFpbGVkIHRvIGdldCBjdXJyZW50IHNjcmlwdCBzb3VyY2UuXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRDdXJyZW50U2NyaXB0U291cmNlOyIsImltcG9ydCBsb2dnZXIgZnJvbSBcIi4uL21vZHVsZXMvbG9nZ2VyL2luZGV4LmpzXCI7XG52YXIgbmFtZSA9IFwid2VicGFjay1kZXYtc2VydmVyXCI7IC8vIGRlZmF1bHQgbGV2ZWwgaXMgc2V0IG9uIHRoZSBjbGllbnQgc2lkZSwgc28gaXQgZG9lcyBub3QgbmVlZFxuLy8gdG8gYmUgc2V0IGJ5IHRoZSBDTEkgb3IgQVBJXG5cbnZhciBkZWZhdWx0TGV2ZWwgPSBcImluZm9cIjsgLy8gb3B0aW9ucyBuZXcgb3B0aW9ucywgbWVyZ2Ugd2l0aCBvbGQgb3B0aW9uc1xuXG4vKipcbiAqIEBwYXJhbSB7ZmFsc2UgfCB0cnVlIHwgXCJub25lXCIgfCBcImVycm9yXCIgfCBcIndhcm5cIiB8IFwiaW5mb1wiIHwgXCJsb2dcIiB8IFwidmVyYm9zZVwifSBsZXZlbFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cblxuZnVuY3Rpb24gc2V0TG9nTGV2ZWwobGV2ZWwpIHtcbiAgbG9nZ2VyLmNvbmZpZ3VyZURlZmF1bHRMb2dnZXIoe1xuICAgIGxldmVsOiBsZXZlbFxuICB9KTtcbn1cblxuc2V0TG9nTGV2ZWwoZGVmYXVsdExldmVsKTtcbnZhciBsb2cgPSBsb2dnZXIuZ2V0TG9nZ2VyKG5hbWUpO1xuZXhwb3J0IHsgbG9nLCBzZXRMb2dMZXZlbCB9OyIsImltcG9ydCBnZXRDdXJyZW50U2NyaXB0U291cmNlIGZyb20gXCIuL2dldEN1cnJlbnRTY3JpcHRTb3VyY2UuanNcIjtcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlUXVlcnlcbiAqIEByZXR1cm5zIHt7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfX1cbiAqL1xuXG5mdW5jdGlvbiBwYXJzZVVSTChyZXNvdXJjZVF1ZXJ5KSB7XG4gIC8qKiBAdHlwZSB7eyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfX0gKi9cbiAgdmFyIG9wdGlvbnMgPSB7fTtcblxuICBpZiAodHlwZW9mIHJlc291cmNlUXVlcnkgPT09IFwic3RyaW5nXCIgJiYgcmVzb3VyY2VRdWVyeSAhPT0gXCJcIikge1xuICAgIHZhciBzZWFyY2hQYXJhbXMgPSByZXNvdXJjZVF1ZXJ5LnN1YnN0cigxKS5zcGxpdChcIiZcIik7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlYXJjaFBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBhaXIgPSBzZWFyY2hQYXJhbXNbaV0uc3BsaXQoXCI9XCIpO1xuICAgICAgb3B0aW9uc1twYWlyWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gRWxzZSwgZ2V0IHRoZSB1cmwgZnJvbSB0aGUgPHNjcmlwdD4gdGhpcyBmaWxlIHdhcyBjYWxsZWQgd2l0aC5cbiAgICB2YXIgc2NyaXB0U291cmNlID0gZ2V0Q3VycmVudFNjcmlwdFNvdXJjZSgpO1xuICAgIHZhciBzY3JpcHRTb3VyY2VVUkw7XG5cbiAgICB0cnkge1xuICAgICAgLy8gVGhlIHBsYWNlaG9sZGVyIGBiYXNlVVJMYCB3aXRoIGB3aW5kb3cubG9jYXRpb24uaHJlZmAsXG4gICAgICAvLyBpcyB0byBhbGxvdyBwYXJzaW5nIG9mIHBhdGgtcmVsYXRpdmUgb3IgcHJvdG9jb2wtcmVsYXRpdmUgVVJMcyxcbiAgICAgIC8vIGFuZCB3aWxsIGhhdmUgbm8gZWZmZWN0IGlmIGBzY3JpcHRTb3VyY2VgIGlzIGEgZnVsbHkgdmFsaWQgVVJMLlxuICAgICAgc2NyaXB0U291cmNlVVJMID0gbmV3IFVSTChzY3JpcHRTb3VyY2UsIHNlbGYubG9jYXRpb24uaHJlZik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsvLyBVUkwgcGFyc2luZyBmYWlsZWQsIGRvIG5vdGhpbmcuXG4gICAgICAvLyBXZSB3aWxsIHN0aWxsIHByb2NlZWQgdG8gc2VlIGlmIHdlIGNhbiByZWNvdmVyIHVzaW5nIGByZXNvdXJjZVF1ZXJ5YFxuICAgIH1cblxuICAgIGlmIChzY3JpcHRTb3VyY2VVUkwpIHtcbiAgICAgIG9wdGlvbnMgPSBzY3JpcHRTb3VyY2VVUkw7XG4gICAgICBvcHRpb25zLmZyb21DdXJyZW50U2NyaXB0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VVUkw7IiwiaW1wb3J0IGhvdEVtaXR0ZXIgZnJvbSBcIndlYnBhY2svaG90L2VtaXR0ZXIuanNcIjtcbmltcG9ydCB7IGxvZyB9IGZyb20gXCIuL2xvZy5qc1wiO1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoXCIuLi9pbmRleFwiKS5PcHRpb25zfSBPcHRpb25zXG4vKiogQHR5cGVkZWYge2ltcG9ydChcIi4uL2luZGV4XCIpLlN0YXR1c30gU3RhdHVzXG5cbi8qKlxuICogQHBhcmFtIHtPcHRpb25zfSBvcHRpb25zXG4gKiBAcGFyYW0ge1N0YXR1c30gc3RhdHVzXG4gKi9cblxuZnVuY3Rpb24gcmVsb2FkQXBwKF9yZWYsIHN0YXR1cykge1xuICB2YXIgaG90ID0gX3JlZi5ob3QsXG4gICAgICBsaXZlUmVsb2FkID0gX3JlZi5saXZlUmVsb2FkO1xuXG4gIGlmIChzdGF0dXMuaXNVbmxvYWRpbmcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY3VycmVudEhhc2ggPSBzdGF0dXMuY3VycmVudEhhc2gsXG4gICAgICBwcmV2aW91c0hhc2ggPSBzdGF0dXMucHJldmlvdXNIYXNoO1xuICB2YXIgaXNJbml0aWFsID0gY3VycmVudEhhc2guaW5kZXhPZihcbiAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gIHByZXZpb3VzSGFzaCkgPj0gMDtcblxuICBpZiAoaXNJbml0aWFsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge1dpbmRvd30gcm9vdFdpbmRvd1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW50ZXJ2YWxJZFxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGFwcGx5UmVsb2FkKHJvb3RXaW5kb3csIGludGVydmFsSWQpIHtcbiAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgIGxvZy5pbmZvKFwiQXBwIHVwZGF0ZWQuIFJlbG9hZGluZy4uLlwiKTtcbiAgICByb290V2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG5cbiAgdmFyIHNlYXJjaCA9IHNlbGYubG9jYXRpb24uc2VhcmNoLnRvTG93ZXJDYXNlKCk7XG4gIHZhciBhbGxvd1RvSG90ID0gc2VhcmNoLmluZGV4T2YoXCJ3ZWJwYWNrLWRldi1zZXJ2ZXItaG90PWZhbHNlXCIpID09PSAtMTtcbiAgdmFyIGFsbG93VG9MaXZlUmVsb2FkID0gc2VhcmNoLmluZGV4T2YoXCJ3ZWJwYWNrLWRldi1zZXJ2ZXItbGl2ZS1yZWxvYWQ9ZmFsc2VcIikgPT09IC0xO1xuXG4gIGlmIChob3QgJiYgYWxsb3dUb0hvdCkge1xuICAgIGxvZy5pbmZvKFwiQXBwIGhvdCB1cGRhdGUuLi5cIik7XG4gICAgaG90RW1pdHRlci5lbWl0KFwid2VicGFja0hvdFVwZGF0ZVwiLCBzdGF0dXMuY3VycmVudEhhc2gpO1xuXG4gICAgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYud2luZG93KSB7XG4gICAgICAvLyBicm9hZGNhc3QgdXBkYXRlIHRvIHdpbmRvd1xuICAgICAgc2VsZi5wb3N0TWVzc2FnZShcIndlYnBhY2tIb3RVcGRhdGVcIi5jb25jYXQoc3RhdHVzLmN1cnJlbnRIYXNoKSwgXCIqXCIpO1xuICAgIH1cbiAgfSAvLyBhbGxvdyByZWZyZXNoaW5nIHRoZSBwYWdlIG9ubHkgaWYgbGl2ZVJlbG9hZCBpc24ndCBkaXNhYmxlZFxuICBlbHNlIGlmIChsaXZlUmVsb2FkICYmIGFsbG93VG9MaXZlUmVsb2FkKSB7XG4gICAgdmFyIHJvb3RXaW5kb3cgPSBzZWxmOyAvLyB1c2UgcGFyZW50IHdpbmRvdyBmb3IgcmVsb2FkIChpbiBjYXNlIHdlJ3JlIGluIGFuIGlmcmFtZSB3aXRoIG5vIHZhbGlkIHNyYylcblxuICAgIHZhciBpbnRlcnZhbElkID0gc2VsZi5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocm9vdFdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCAhPT0gXCJhYm91dDpcIikge1xuICAgICAgICAvLyByZWxvYWQgaW1tZWRpYXRlbHkgaWYgcHJvdG9jb2wgaXMgdmFsaWRcbiAgICAgICAgYXBwbHlSZWxvYWQocm9vdFdpbmRvdywgaW50ZXJ2YWxJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb290V2luZG93ID0gcm9vdFdpbmRvdy5wYXJlbnQ7XG5cbiAgICAgICAgaWYgKHJvb3RXaW5kb3cucGFyZW50ID09PSByb290V2luZG93KSB7XG4gICAgICAgICAgLy8gaWYgcGFyZW50IGVxdWFscyBjdXJyZW50IHdpbmRvdyB3ZSd2ZSByZWFjaGVkIHRoZSByb290IHdoaWNoIHdvdWxkIGNvbnRpbnVlIGZvcmV2ZXIsIHNvIHRyaWdnZXIgYSByZWxvYWQgYW55d2F5c1xuICAgICAgICAgIGFwcGx5UmVsb2FkKHJvb3RXaW5kb3csIGludGVydmFsSWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVsb2FkQXBwOyIsIi8qIGdsb2JhbCBfX3Jlc291cmNlUXVlcnkgV29ya2VyR2xvYmFsU2NvcGUgKi9cbi8vIFNlbmQgbWVzc2FnZXMgdG8gdGhlIG91dHNpZGUsIHNvIHBsdWdpbnMgY2FuIGNvbnN1bWUgaXQuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7YW55fSBbZGF0YV1cbiAqL1xuZnVuY3Rpb24gc2VuZE1zZyh0eXBlLCBkYXRhKSB7XG4gIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiAodHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlID09PSBcInVuZGVmaW5lZFwiIHx8ICEoc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlKSkpIHtcbiAgICBzZWxmLnBvc3RNZXNzYWdlKHtcbiAgICAgIHR5cGU6IFwid2VicGFja1wiLmNvbmNhdCh0eXBlKSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9LCBcIipcIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VuZE1zZzsiLCJ2YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZShcImV2ZW50c1wiKTtcbm1vZHVsZS5leHBvcnRzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuIiwidmFyIGxvZ0xldmVsID0gXCJpbmZvXCI7XG5cbmZ1bmN0aW9uIGR1bW15KCkge31cblxuZnVuY3Rpb24gc2hvdWxkTG9nKGxldmVsKSB7XG5cdHZhciBzaG91bGRMb2cgPVxuXHRcdChsb2dMZXZlbCA9PT0gXCJpbmZvXCIgJiYgbGV2ZWwgPT09IFwiaW5mb1wiKSB8fFxuXHRcdChbXCJpbmZvXCIsIFwid2FybmluZ1wiXS5pbmRleE9mKGxvZ0xldmVsKSA+PSAwICYmIGxldmVsID09PSBcIndhcm5pbmdcIikgfHxcblx0XHQoW1wiaW5mb1wiLCBcIndhcm5pbmdcIiwgXCJlcnJvclwiXS5pbmRleE9mKGxvZ0xldmVsKSA+PSAwICYmIGxldmVsID09PSBcImVycm9yXCIpO1xuXHRyZXR1cm4gc2hvdWxkTG9nO1xufVxuXG5mdW5jdGlvbiBsb2dHcm91cChsb2dGbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGxldmVsLCBtc2cpIHtcblx0XHRpZiAoc2hvdWxkTG9nKGxldmVsKSkge1xuXHRcdFx0bG9nRm4obXNnKTtcblx0XHR9XG5cdH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxldmVsLCBtc2cpIHtcblx0aWYgKHNob3VsZExvZyhsZXZlbCkpIHtcblx0XHRpZiAobGV2ZWwgPT09IFwiaW5mb1wiKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhtc2cpO1xuXHRcdH0gZWxzZSBpZiAobGV2ZWwgPT09IFwid2FybmluZ1wiKSB7XG5cdFx0XHRjb25zb2xlLndhcm4obXNnKTtcblx0XHR9IGVsc2UgaWYgKGxldmVsID09PSBcImVycm9yXCIpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IobXNnKTtcblx0XHR9XG5cdH1cbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGlucyAqL1xudmFyIGdyb3VwID0gY29uc29sZS5ncm91cCB8fCBkdW1teTtcbnZhciBncm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQgfHwgZHVtbXk7XG52YXIgZ3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kIHx8IGR1bW15O1xuLyogZXNsaW50LWVuYWJsZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnMgKi9cblxubW9kdWxlLmV4cG9ydHMuZ3JvdXAgPSBsb2dHcm91cChncm91cCk7XG5cbm1vZHVsZS5leHBvcnRzLmdyb3VwQ29sbGFwc2VkID0gbG9nR3JvdXAoZ3JvdXBDb2xsYXBzZWQpO1xuXG5tb2R1bGUuZXhwb3J0cy5ncm91cEVuZCA9IGxvZ0dyb3VwKGdyb3VwRW5kKTtcblxubW9kdWxlLmV4cG9ydHMuc2V0TG9nTGV2ZWwgPSBmdW5jdGlvbiAobGV2ZWwpIHtcblx0bG9nTGV2ZWwgPSBsZXZlbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzLmZvcm1hdEVycm9yID0gZnVuY3Rpb24gKGVycikge1xuXHR2YXIgbWVzc2FnZSA9IGVyci5tZXNzYWdlO1xuXHR2YXIgc3RhY2sgPSBlcnIuc3RhY2s7XG5cdGlmICghc3RhY2spIHtcblx0XHRyZXR1cm4gbWVzc2FnZTtcblx0fSBlbHNlIGlmIChzdGFjay5pbmRleE9mKG1lc3NhZ2UpIDwgMCkge1xuXHRcdHJldHVybiBtZXNzYWdlICsgXCJcXG5cIiArIHN0YWNrO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBzdGFjaztcblx0fVxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBiNjgwODVhYzUyZTcwZjcwMTcwXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGdsb2JhbCBfX3Jlc291cmNlUXVlcnksIF9fd2VicGFja19oYXNoX18gKi9cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwid2VicGFjay9tb2R1bGVcIiAvPlxuaW1wb3J0IHdlYnBhY2tIb3RMb2cgZnJvbSBcIndlYnBhY2svaG90L2xvZy5qc1wiO1xuaW1wb3J0IHN0cmlwQW5zaSBmcm9tIFwiLi9tb2R1bGVzL3N0cmlwLWFuc2kvaW5kZXguanNcIjtcbmltcG9ydCBwYXJzZVVSTCBmcm9tIFwiLi91dGlscy9wYXJzZVVSTC5qc1wiO1xuaW1wb3J0IHNvY2tldCBmcm9tIFwiLi9zb2NrZXQuanNcIjtcbmltcG9ydCB7IGZvcm1hdFByb2JsZW0sIHNob3csIGhpZGUgfSBmcm9tIFwiLi9vdmVybGF5LmpzXCI7XG5pbXBvcnQgeyBsb2csIHNldExvZ0xldmVsIH0gZnJvbSBcIi4vdXRpbHMvbG9nLmpzXCI7XG5pbXBvcnQgc2VuZE1lc3NhZ2UgZnJvbSBcIi4vdXRpbHMvc2VuZE1lc3NhZ2UuanNcIjtcbmltcG9ydCByZWxvYWRBcHAgZnJvbSBcIi4vdXRpbHMvcmVsb2FkQXBwLmpzXCI7XG5pbXBvcnQgY3JlYXRlU29ja2V0VVJMIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVNvY2tldFVSTC5qc1wiO1xuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGhvdFxuICogQHByb3BlcnR5IHtib29sZWFufSBsaXZlUmVsb2FkXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHByb2dyZXNzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCB7IHdhcm5pbmdzPzogYm9vbGVhbiwgZXJyb3JzPzogYm9vbGVhbiB9fSBvdmVybGF5XG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2xvZ2dpbmddXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3JlY29ubmVjdF1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFN0YXR1c1xuICogQHByb3BlcnR5IHtib29sZWFufSBpc1VubG9hZGluZ1xuICogQHByb3BlcnR5IHtzdHJpbmd9IGN1cnJlbnRIYXNoXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3ByZXZpb3VzSGFzaF1cbiAqL1xuXG4vKipcbiAqIEB0eXBlIHtTdGF0dXN9XG4gKi9cblxudmFyIHN0YXR1cyA9IHtcbiAgaXNVbmxvYWRpbmc6IGZhbHNlLFxuICAvLyBUT0RPIFdvcmthcm91bmQgZm9yIHdlYnBhY2sgdjQsIGBfX3dlYnBhY2tfaGFzaF9fYCBpcyBub3QgcmVwbGFjZWQgd2l0aG91dCBIb3RNb2R1bGVSZXBsYWNlbWVudFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG4gIGN1cnJlbnRIYXNoOiB0eXBlb2YgX193ZWJwYWNrX2hhc2hfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19oYXNoX18gOiBcIlwiXG59O1xuLyoqIEB0eXBlIHtPcHRpb25zfSAqL1xuXG52YXIgb3B0aW9ucyA9IHtcbiAgaG90OiBmYWxzZSxcbiAgbGl2ZVJlbG9hZDogZmFsc2UsXG4gIHByb2dyZXNzOiBmYWxzZSxcbiAgb3ZlcmxheTogZmFsc2Vcbn07XG52YXIgcGFyc2VkUmVzb3VyY2VRdWVyeSA9IHBhcnNlVVJMKF9fcmVzb3VyY2VRdWVyeSk7XG5cbmlmIChwYXJzZWRSZXNvdXJjZVF1ZXJ5LmhvdCA9PT0gXCJ0cnVlXCIpIHtcbiAgb3B0aW9ucy5ob3QgPSB0cnVlO1xuICBsb2cuaW5mbyhcIkhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgZW5hYmxlZC5cIik7XG59XG5cbmlmIChwYXJzZWRSZXNvdXJjZVF1ZXJ5W1wibGl2ZS1yZWxvYWRcIl0gPT09IFwidHJ1ZVwiKSB7XG4gIG9wdGlvbnMubGl2ZVJlbG9hZCA9IHRydWU7XG4gIGxvZy5pbmZvKFwiTGl2ZSBSZWxvYWRpbmcgZW5hYmxlZC5cIik7XG59XG5cbmlmIChwYXJzZWRSZXNvdXJjZVF1ZXJ5LmxvZ2dpbmcpIHtcbiAgb3B0aW9ucy5sb2dnaW5nID0gcGFyc2VkUmVzb3VyY2VRdWVyeS5sb2dnaW5nO1xufVxuXG5pZiAodHlwZW9mIHBhcnNlZFJlc291cmNlUXVlcnkucmVjb25uZWN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIG9wdGlvbnMucmVjb25uZWN0ID0gTnVtYmVyKHBhcnNlZFJlc291cmNlUXVlcnkucmVjb25uZWN0KTtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGxldmVsXG4gKi9cblxuXG5mdW5jdGlvbiBzZXRBbGxMb2dMZXZlbChsZXZlbCkge1xuICAvLyBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHRoZSBITVIgbG9nZ2VyIG9wZXJhdGUgc2VwYXJhdGVseSBmcm9tIGRldiBzZXJ2ZXIgbG9nZ2VyXG4gIHdlYnBhY2tIb3RMb2cuc2V0TG9nTGV2ZWwobGV2ZWwgPT09IFwidmVyYm9zZVwiIHx8IGxldmVsID09PSBcImxvZ1wiID8gXCJpbmZvXCIgOiBsZXZlbCk7XG4gIHNldExvZ0xldmVsKGxldmVsKTtcbn1cblxuaWYgKG9wdGlvbnMubG9nZ2luZykge1xuICBzZXRBbGxMb2dMZXZlbChvcHRpb25zLmxvZ2dpbmcpO1xufVxuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICBzdGF0dXMuaXNVbmxvYWRpbmcgPSB0cnVlO1xufSk7XG52YXIgb25Tb2NrZXRNZXNzYWdlID0ge1xuICBob3Q6IGZ1bmN0aW9uIGhvdCgpIHtcbiAgICBpZiAocGFyc2VkUmVzb3VyY2VRdWVyeS5ob3QgPT09IFwiZmFsc2VcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9wdGlvbnMuaG90ID0gdHJ1ZTtcbiAgICBsb2cuaW5mbyhcIkhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgZW5hYmxlZC5cIik7XG4gIH0sXG4gIGxpdmVSZWxvYWQ6IGZ1bmN0aW9uIGxpdmVSZWxvYWQoKSB7XG4gICAgaWYgKHBhcnNlZFJlc291cmNlUXVlcnlbXCJsaXZlLXJlbG9hZFwiXSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3B0aW9ucy5saXZlUmVsb2FkID0gdHJ1ZTtcbiAgICBsb2cuaW5mbyhcIkxpdmUgUmVsb2FkaW5nIGVuYWJsZWQuXCIpO1xuICB9LFxuICBpbnZhbGlkOiBmdW5jdGlvbiBpbnZhbGlkKCkge1xuICAgIGxvZy5pbmZvKFwiQXBwIHVwZGF0ZWQuIFJlY29tcGlsaW5nLi4uXCIpOyAvLyBGaXhlcyAjMTA0Mi4gb3ZlcmxheSBkb2Vzbid0IGNsZWFyIGlmIGVycm9ycyBhcmUgZml4ZWQgYnV0IHdhcm5pbmdzIHJlbWFpbi5cblxuICAgIGlmIChvcHRpb25zLm92ZXJsYXkpIHtcbiAgICAgIGhpZGUoKTtcbiAgICB9XG5cbiAgICBzZW5kTWVzc2FnZShcIkludmFsaWRcIik7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqL1xuICBoYXNoOiBmdW5jdGlvbiBoYXNoKF9oYXNoKSB7XG4gICAgc3RhdHVzLnByZXZpb3VzSGFzaCA9IHN0YXR1cy5jdXJyZW50SGFzaDtcbiAgICBzdGF0dXMuY3VycmVudEhhc2ggPSBfaGFzaDtcbiAgfSxcbiAgbG9nZ2luZzogc2V0QWxsTG9nTGV2ZWwsXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAgICovXG4gIG92ZXJsYXk6IGZ1bmN0aW9uIG92ZXJsYXkodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3B0aW9ucy5vdmVybGF5ID0gdmFsdWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgKi9cbiAgcmVjb25uZWN0OiBmdW5jdGlvbiByZWNvbm5lY3QodmFsdWUpIHtcbiAgICBpZiAocGFyc2VkUmVzb3VyY2VRdWVyeS5yZWNvbm5lY3QgPT09IFwiZmFsc2VcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9wdGlvbnMucmVjb25uZWN0ID0gdmFsdWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAgICovXG4gIHByb2dyZXNzOiBmdW5jdGlvbiBwcm9ncmVzcyh2YWx1ZSkge1xuICAgIG9wdGlvbnMucHJvZ3Jlc3MgPSB2YWx1ZTtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHt7IHBsdWdpbk5hbWU/OiBzdHJpbmcsIHBlcmNlbnQ6IG51bWJlciwgbXNnOiBzdHJpbmcgfX0gZGF0YVxuICAgKi9cbiAgXCJwcm9ncmVzcy11cGRhdGVcIjogZnVuY3Rpb24gcHJvZ3Jlc3NVcGRhdGUoZGF0YSkge1xuICAgIGlmIChvcHRpb25zLnByb2dyZXNzKSB7XG4gICAgICBsb2cuaW5mbyhcIlwiLmNvbmNhdChkYXRhLnBsdWdpbk5hbWUgPyBcIltcIi5jb25jYXQoZGF0YS5wbHVnaW5OYW1lLCBcIl0gXCIpIDogXCJcIikuY29uY2F0KGRhdGEucGVyY2VudCwgXCIlIC0gXCIpLmNvbmNhdChkYXRhLm1zZywgXCIuXCIpKTtcbiAgICB9XG5cbiAgICBzZW5kTWVzc2FnZShcIlByb2dyZXNzXCIsIGRhdGEpO1xuICB9LFxuICBcInN0aWxsLW9rXCI6IGZ1bmN0aW9uIHN0aWxsT2soKSB7XG4gICAgbG9nLmluZm8oXCJOb3RoaW5nIGNoYW5nZWQuXCIpO1xuXG4gICAgaWYgKG9wdGlvbnMub3ZlcmxheSkge1xuICAgICAgaGlkZSgpO1xuICAgIH1cblxuICAgIHNlbmRNZXNzYWdlKFwiU3RpbGxPa1wiKTtcbiAgfSxcbiAgb2s6IGZ1bmN0aW9uIG9rKCkge1xuICAgIHNlbmRNZXNzYWdlKFwiT2tcIik7XG5cbiAgICBpZiAob3B0aW9ucy5vdmVybGF5KSB7XG4gICAgICBoaWRlKCk7XG4gICAgfVxuXG4gICAgcmVsb2FkQXBwKG9wdGlvbnMsIHN0YXR1cyk7XG4gIH0sXG4gIC8vIFRPRE86IHJlbW92ZSBpbiB2NSBpbiBmYXZvciBvZiAnc3RhdGljLWNoYW5nZWQnXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlXG4gICAqL1xuICBcImNvbnRlbnQtY2hhbmdlZFwiOiBmdW5jdGlvbiBjb250ZW50Q2hhbmdlZChmaWxlKSB7XG4gICAgbG9nLmluZm8oXCJcIi5jb25jYXQoZmlsZSA/IFwiXFxcIlwiLmNvbmNhdChmaWxlLCBcIlxcXCJcIikgOiBcIkNvbnRlbnRcIiwgXCIgZnJvbSBzdGF0aWMgZGlyZWN0b3J5IHdhcyBjaGFuZ2VkLiBSZWxvYWRpbmcuLi5cIikpO1xuICAgIHNlbGYubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlXG4gICAqL1xuICBcInN0YXRpYy1jaGFuZ2VkXCI6IGZ1bmN0aW9uIHN0YXRpY0NoYW5nZWQoZmlsZSkge1xuICAgIGxvZy5pbmZvKFwiXCIuY29uY2F0KGZpbGUgPyBcIlxcXCJcIi5jb25jYXQoZmlsZSwgXCJcXFwiXCIpIDogXCJDb250ZW50XCIsIFwiIGZyb20gc3RhdGljIGRpcmVjdG9yeSB3YXMgY2hhbmdlZC4gUmVsb2FkaW5nLi4uXCIpKTtcbiAgICBzZWxmLmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0Vycm9yW119IHdhcm5pbmdzXG4gICAqIEBwYXJhbSB7YW55fSBwYXJhbXNcbiAgICovXG4gIHdhcm5pbmdzOiBmdW5jdGlvbiB3YXJuaW5ncyhfd2FybmluZ3MsIHBhcmFtcykge1xuICAgIGxvZy53YXJuKFwiV2FybmluZ3Mgd2hpbGUgY29tcGlsaW5nLlwiKTtcblxuICAgIHZhciBwcmludGFibGVXYXJuaW5ncyA9IF93YXJuaW5ncy5tYXAoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICB2YXIgX2Zvcm1hdFByb2JsZW0gPSBmb3JtYXRQcm9ibGVtKFwid2FybmluZ1wiLCBlcnJvciksXG4gICAgICAgICAgaGVhZGVyID0gX2Zvcm1hdFByb2JsZW0uaGVhZGVyLFxuICAgICAgICAgIGJvZHkgPSBfZm9ybWF0UHJvYmxlbS5ib2R5O1xuXG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQoaGVhZGVyLCBcIlxcblwiKS5jb25jYXQoc3RyaXBBbnNpKGJvZHkpKTtcbiAgICB9KTtcblxuICAgIHNlbmRNZXNzYWdlKFwiV2FybmluZ3NcIiwgcHJpbnRhYmxlV2FybmluZ3MpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmludGFibGVXYXJuaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgbG9nLndhcm4ocHJpbnRhYmxlV2FybmluZ3NbaV0pO1xuICAgIH1cblxuICAgIHZhciBuZWVkU2hvd092ZXJsYXlGb3JXYXJuaW5ncyA9IHR5cGVvZiBvcHRpb25zLm92ZXJsYXkgPT09IFwiYm9vbGVhblwiID8gb3B0aW9ucy5vdmVybGF5IDogb3B0aW9ucy5vdmVybGF5ICYmIG9wdGlvbnMub3ZlcmxheS53YXJuaW5ncztcblxuICAgIGlmIChuZWVkU2hvd092ZXJsYXlGb3JXYXJuaW5ncykge1xuICAgICAgc2hvdyhcIndhcm5pbmdcIiwgX3dhcm5pbmdzKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcmV2ZW50UmVsb2FkaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVsb2FkQXBwKG9wdGlvbnMsIHN0YXR1cyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXJyb3JbXX0gZXJyb3JzXG4gICAqL1xuICBlcnJvcnM6IGZ1bmN0aW9uIGVycm9ycyhfZXJyb3JzKSB7XG4gICAgbG9nLmVycm9yKFwiRXJyb3JzIHdoaWxlIGNvbXBpbGluZy4gUmVsb2FkIHByZXZlbnRlZC5cIik7XG5cbiAgICB2YXIgcHJpbnRhYmxlRXJyb3JzID0gX2Vycm9ycy5tYXAoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICB2YXIgX2Zvcm1hdFByb2JsZW0yID0gZm9ybWF0UHJvYmxlbShcImVycm9yXCIsIGVycm9yKSxcbiAgICAgICAgICBoZWFkZXIgPSBfZm9ybWF0UHJvYmxlbTIuaGVhZGVyLFxuICAgICAgICAgIGJvZHkgPSBfZm9ybWF0UHJvYmxlbTIuYm9keTtcblxuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGhlYWRlciwgXCJcXG5cIikuY29uY2F0KHN0cmlwQW5zaShib2R5KSk7XG4gICAgfSk7XG5cbiAgICBzZW5kTWVzc2FnZShcIkVycm9yc1wiLCBwcmludGFibGVFcnJvcnMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmludGFibGVFcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxvZy5lcnJvcihwcmludGFibGVFcnJvcnNbaV0pO1xuICAgIH1cblxuICAgIHZhciBuZWVkU2hvd092ZXJsYXlGb3JFcnJvcnMgPSB0eXBlb2Ygb3B0aW9ucy5vdmVybGF5ID09PSBcImJvb2xlYW5cIiA/IG9wdGlvbnMub3ZlcmxheSA6IG9wdGlvbnMub3ZlcmxheSAmJiBvcHRpb25zLm92ZXJsYXkuZXJyb3JzO1xuXG4gICAgaWYgKG5lZWRTaG93T3ZlcmxheUZvckVycm9ycykge1xuICAgICAgc2hvdyhcImVycm9yXCIsIF9lcnJvcnMpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtFcnJvcn0gZXJyb3JcbiAgICovXG4gIGVycm9yOiBmdW5jdGlvbiBlcnJvcihfZXJyb3IpIHtcbiAgICBsb2cuZXJyb3IoX2Vycm9yKTtcbiAgfSxcbiAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIGxvZy5pbmZvKFwiRGlzY29ubmVjdGVkIVwiKTtcblxuICAgIGlmIChvcHRpb25zLm92ZXJsYXkpIHtcbiAgICAgIGhpZGUoKTtcbiAgICB9XG5cbiAgICBzZW5kTWVzc2FnZShcIkNsb3NlXCIpO1xuICB9XG59O1xudmFyIHNvY2tldFVSTCA9IGNyZWF0ZVNvY2tldFVSTChwYXJzZWRSZXNvdXJjZVF1ZXJ5KTtcbnNvY2tldChzb2NrZXRVUkwsIG9uU29ja2V0TWVzc2FnZSwgb3B0aW9ucy5yZWNvbm5lY3QpOyIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9wYWdlcy9ob21lJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4vcGFnZXMvYWJvdXQnXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJy4vY29tcG9uZW50cy9QcmVsb2FkZXInXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvTmF2aWdhdGlvbidcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9hbmltYXRpb24vY2FudmFzJ1xuaW1wb3J0IFBsYXllciBmcm9tICcuL2NvbXBvbmVudHMvd2lkZ2V0cy9tdXNpYy1wbGF5ZXIvcGxheWVyJ1xuaW1wb3J0IEZvcm1IYW5kbGVyIGZyb20gJy4vY29uZmlnL2Zvcm1zJ1xuaW1wb3J0IFNlcnZpY2VzIGZyb20gJy4vY29tcG9uZW50cy9TZXJ2aWNlcydcbmltcG9ydCB7ICRBbGwsICQgfSBmcm9tICcuL3V0aWxzL3NlbGVjdG9ycydcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuaW5pdCgpXG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxuICAgIHRoaXMuaW5pdE5hdmlnYXRpb24oKVxuICAgIHRoaXMuZ2V0Q29udGVudCgpXG4gICAgdGhpcy5pbml0UGFnZXMoKVxuICAgIHRoaXMuY29uZmlnKClcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXIoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKClcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKVxuICB9XG5cbiAgY3JlYXRlUHJlbG9hZGVyICgpIHtcbiAgICB0aGlzLnByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXIoKVxuICAgIHRoaXMucHJlbG9hZGVyLm9uY2UoJ2NvbXBsZXRlZCcsIChfKSA9PiB0aGlzLm9uUHJlbG9hZEVuZCgpKVxuICB9XG5cbiAgb25QcmVsb2FkRW5kICgpIHtcbiAgICB0aGlzLnByZWxvYWRlci5kZXN0cm95KClcbiAgfVxuXG4gIGdldENvbnRlbnQgKCkge1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZSgnW2RhdGEtdGVtcGxhdGVdJylcbiAgfVxuXG4gIGluaXRQYWdlcyAoKSB7XG4gICAgdGhpcy5wYWdlcyA9IHtcbiAgICAgIGhvbWU6IG5ldyBIb21lKCksXG4gICAgICBhYm91dDogbmV3IEFib3V0KClcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG5cbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5jcmVhdGUoKSkge1xuICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG4gICAgfVxuICB9XG5cbiAgaW5pdE5hdmlnYXRpb24gKCkge1xuICAgIHRoaXMubmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKClcbiAgfVxuXG4gIGNvbmZpZyAoKSB7XG4gICAgdGhpcy5mb3JtSGFuZGxlciA9IG5ldyBGb3JtSGFuZGxlcignY29ubmVjdCcsICdjb25uZWN0JywgJ1BPU1QnKVxuICAgIHRoaXMuc2VydmljZXMgPSBuZXcgU2VydmljZXMoKVxuICB9XG5cbiAgYXN5bmMgb25DaGFuZ2UgKHsgdXJsIH0pIHtcbiAgICAvLyB0aGlzLnBhZ2UuaGlkZSgpXG4gICAgY29uc3QgcmVzID0gYXdhaXQgd2luZG93LmZldGNoKHVybClcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVzLnRleHQoKVxuXG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCB1cmwpXG5cbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbFxuXG4gICAgICBjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICAgIHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXG4gICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gZGl2Q29udGVudC5pbm5lckhUTUxcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG4gICAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yOiAnICsgcmVzKVxuICAgIH1cbiAgfVxuXG4gIGV2ZW50TGlzdGVuZXIgKCkge1xuICAgIGNvbnN0IGxpbmtzID0gJEFsbCgnW2RhdGEtbGlua3NdJylcbiAgICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgaWYgKGxpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLWxpbmtzJykgPT09ICd0cnVlJykge1xuICAgICAgICBsaW5rLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGlua1xuICAgICAgICAgIHRoaXMub25DaGFuZ2UoeyB1cmw6IGhyZWYgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGluay5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbmtcbiAgICAgICAgICBjb25zdCBsaW5rRGF0YSA9IGhyZWYuc3BsaXQoJyMnKVxuICAgICAgICAgIGNvbnN0IFt1cmwsIGhhc2hdID0gbGlua0RhdGFcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHsgdXJsIH0pXG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNjcm9sbFRvRWxlbWVudChoYXNoKVxuICAgICAgICAgIH0sIDMwMClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBzY3JvbGxUb0VsZW1lbnQgKGNsYXNzTmFtZSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9ICQoYC4ke2NsYXNzTmFtZX1gKVxuICAgICAgY29uc3QgdG9wID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcCB9KVxuICAgIH1cbiAgfVxufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XG5uZXcgQXBwKClcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJTaGFwZXMiLCJjb25zdHJ1Y3RvciIsInBvc2l0aW9uIiwiaGVpZ2h0Iiwid2lkdGgiLCJibHVyIiwiYmFja2dyb3VuZCIsInRvcCIsInVuZGVmaW5lZCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImluaXQiLCJjcmVhdGVTaGFwZSIsIm9uV2luZG93UmVzaXplIiwiZXZlbnRzIiwic2hhcGVGcmFtZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlkIiwidGVzdEJyZWFrcG9pbnQiLCJzdHlsZSIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImFuaW1zaGFwZXMiLCJhbmltYXRpb25BcnIiLCJpbmRleCIsImFuaW1GbG93Iiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJ0byIsImZpbHRlciIsIm1vdW50U2hhcGUiLCJwYXJlbnQiLCJhcHBlbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiYmluZCIsIkNvbXBvbmVudHMiLCIkIiwiQ2FudmFzIiwiaXNNb3VudGVkIiwic2hhcGVHcmFkaWVudCIsIm1vdW50RnJhbWUiLCJzaGFwZTEiLCJzaGFwZTIiLCJjcmVhdGVGcmFtZSIsImZyYW1lIiwiaW5uZXJIZWlnaHQiLCJ6SW5kZXgiLCJib2R5IiwiZXZlbnRMaXN0ZW5lciIsIm9uUmVzaXplIiwiZSIsInByZXZlbnREZWZhdWx0IiwibW91bnRlZEZyYW1lIiwiRXZlbnRFbWl0dGVyIiwiJEFsbCIsImNvbXBvbmVudE5hbWUiLCJzZWxlY3RvcnMiLCJwcmVsb2FkZXIiLCJlbGVtZW50IiwidGV4dCIsImNvbnRhaW5lciIsImxvYWRlciIsIndyYXBwZXIiLCJuYXZpZ2F0aW9uIiwiaGVhZGVyIiwibmF2TGlzdCIsInByZXZpZXdJbWciLCJjb250ZW50Iiwib3Blbk1lbnUiLCJjbG9zZU1lbnUiLCJwbGF5ZXIiLCJidXR0b24iLCJleHBhbmQiLCJjbG9zZSIsInBsYXkiLCJuZXh0IiwicHJldiIsImNvdmVyQ29udGFpbmVyIiwiY292ZXIiLCJzZWxmIiwibWVkaWEiLCJhcnRpc3QiLCJ0aXRsZSIsInRpbWVyIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInJhbmdlIiwicHJvZ3Jlc3MiLCJwcmVsb2FkIiwidm9sdW1lIiwiZ3JhcHBlciIsInNsaWRlciIsImZvcm0iLCJjb25uZWN0IiwibmFtZSIsIm1haWwiLCJtZXNzYWdlIiwibmFtZUFsZXJ0IiwiZW1haWxBbGVydCIsIm1lc3NhZ2VBbGVydCIsImFsZXJ0IiwibW9kYWwiLCJpdGVtcyIsInNlcnZpY2VzIiwiYnV0dG9ucyIsImltYWdlcyIsImVsZW1lbnRzIiwiU21vb3Roc2Nyb2xsIiwiUGFnZXMiLCJjcmVhdGUiLCJzaG93IiwiaGlkZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY29uc29sZSIsImxvZyIsIkFsZXJ0IiwidHlwZSIsImRpdiIsImNsYXNzTGlzdCIsImFkZCIsImljb24iLCJpbm5lclRleHQiLCJjbG9zZUljb24iLCJpIiwib25jbGljayIsImRlc3Ryb3kiLCJwcmVwZW5kIiwidGFnIiwic2V0VGltZW91dCIsInRyYW5zaXRpb24iLCJyZW1vdmVDaGlsZCIsIk5hdmlnYXRpb24iLCJldmVudHNMaXN0ZW5lciIsImRlZmF1bHRTb3VyY2UiLCJzcmMiLCJvbk1vdXNlSG92ZXJMaW5rcyIsImN1cnJlbnRUYXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJmb3JFYWNoIiwibGluayIsImltYWdlc0xvYWRlZCIsIlByZWxvYWRlciIsInN0YXJ0SW5kZXgiLCJzaXplIiwiTnVtYmVyIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50V2lkdGgiLCJnYXAiLCJjcmVhdGVQcmVsb2FkZXIiLCJpbWdMb2FkIiwib24iLCJfIiwib25Qcm9ncmVzcyIsIm9uTG9hZCIsImFuaW1QcmVsb2FkZXJUZXh0IiwiY2hpbGRyZW4iLCJwZXJjZW50IiwiTWF0aCIsInJvdW5kIiwiZW1pdCIsInBhcmVudE5vZGUiLCJTZXJ2aWNlcyIsIm9uQ2xpY2siLCJjbG9zZU1vZGFsIiwiY29udGFpbnMiLCJTbGlkZXIiLCJjaGlsZCIsInBhZGRpbmciLCJjdXJyZW50UG9zaXRpb24iLCJ0cmVzaG9sZCIsImRyYWdJbnRlcnZhbGwiLCJzZXRDaGlsZFdpZHRoIiwic2V0UG9zaXRpb24iLCJpdGVtIiwiZmxleCIsInRyYW5zZm9ybSIsIm9uTW91c2VEb3duIiwiaXNEb3duIiwiZHJhZ1N0YXJ0IiwieCIsImRyYWdTdGFydHkiLCJ5Iiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJkYXRhIiwicmVxdWlyZSIsIk1lZGlhTWFuYWdlciIsIlRpbWVyIiwic3RhcnR0aW1lIiwiZW5kdGltZSIsImlzUGxheSIsImN1cnJlbnRUaW1lIiwib25QYXVzZSIsImlzRW5kZWQiLCJjYiIsInNldFRpbWUiLCJob3VycyIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJob3Vyc1ZhbHVlIiwibWludXRlc1ZhbHVlIiwic2Vjb25kc1ZhbHVlIiwidGV4dENvbnRlbnQiLCJ1cGRhdGVQcm9ncmVzcyIsInZhbHVlIiwicmF0aW8iLCJtYXgiLCJzZXRGdWxsVGltZSIsImR1cmF0aW9uIiwib25UaW1lQ2hhbmdlIiwiYnVmZmVyZWQiLCJzdGFydCIsImVuZCIsIm1ldGFEYXRhTG9hZGVkIiwiVm9sdW1lIiwiUGxheWVyIiwiaXNFeHBhbmQiLCJyYW5kb21JZCIsInNvdW5kIiwicXVlcnlTZWxlY3RvciIsIm1lZGlhTWFuYWdlciIsInJhbmRvbSIsImNvbXBvbmVudHNIYW5kbGVyIiwiZXZlbnRzTGlzdGVybmVyIiwic2V0Q29tcG9uZW50cyIsInRpbWVySGFuZGxlciIsImNvdmVySGFuZGxlciIsInZvbHVtZUhhbmRsZXIiLCJzZXRTb3VuZERldGFpbHMiLCJhbGJ1bSIsImRhdGFzZXQiLCJzZXRBdHRyaWJ1dGUiLCJwYXVzZSIsInN0b3AiLCJ0aW1lIiwiY29udGFpbmVyQm90dG9tIiwiY29udGFpbmVySGVpZ2h0IiwiY29udGFpbmVyVG9wIiwib25Qb2ludGVyRG93biIsIm9uUG9pbnRlck1vdmUiLCJvblBvaW50ZXJVcCIsInBhZ2VZIiwidmFsaWRFbWFpbCIsIkZvcm1IYW5kbGVyIiwidXJsIiwibWV0aG9kIiwiZm9ybVR5cGUiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInZhbCIsImZldGNoIiwib3B0aW9ucyIsIm1vZGUiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwidGhlbiIsInJlc2V0Iiwic2VuZERhdGEiLCJ2YWxpZE51bWJlciIsInZlcmlmeURhdGEiLCJlbCIsImZvcm1FbGVtZW50cyIsIlVSTFNlYXJjaFBhcmFtcyIsIkZvcm1EYXRhIiwiQWJvdXQiLCJIb21lIiwibGVycCIsImNsYW1wIiwibm9ybWFsaXplV2hlZWwiLCJvcHRzIiwiZGVmYXVsdE9wdGlvbnMiLCJkaXJlY3Rpb24iLCJzbW9vdGgiLCJzbW9vdGhPcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxpbWl0IiwiY2xpZW50SGVpZ2h0IiwiYWRkTGlzdGVuZXIiLCJ1cGRhdGUiLCJvbk1vdXNlV2hlZWwiLCJldmVudCIsInBpeGVsWSIsInBpeGVsWCIsInRyYW5zbGF0ZUJ5Q2FzZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFtb3VudCIsIm1pbiIsInZhbGlkRmlsZVR5cGUiLCJmaWxlIiwiZG9jdW1lbnRzIiwiVXJsRXhpc3QiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJlbWFpbCIsInJlZ2V4IiwidGVzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCIkQXR0cmlidXRlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFuc2lIVE1MIiwiX3JlZ0FOU0kiLCJfZGVmQ29sb3JzIiwiYmxhY2siLCJyZWQiLCJncmVlbiIsInllbGxvdyIsImJsdWUiLCJtYWdlbnRhIiwiY3lhbiIsImxpZ2h0Z3JleSIsImRhcmtncmV5IiwiX3N0eWxlcyIsIl9vcGVuVGFncyIsIl9jbG9zZVRhZ3MiLCJuIiwiYW5zaUNvZGVzIiwicmV0IiwicmVwbGFjZSIsIm1hdGNoIiwic2VxIiwib3QiLCJpbmRleE9mIiwicG9wIiwicHVzaCIsImN0IiwibCIsIkFycmF5Iiwiam9pbiIsInNldENvbG9ycyIsImNvbG9ycyIsIkVycm9yIiwiX2ZpbmFsQ29sb3JzIiwia2V5IiwiaGV4IiwiaGFzT3duUHJvcGVydHkiLCJpc0FycmF5Iiwic29tZSIsImgiLCJkZWZIZXhDb2xvciIsInNsaWNlIiwiX3NldFRhZ3MiLCJ0YWdzIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJvcGVuIiwiY29kZSIsImNvbG9yIiwib3JpQ29sb3IiLCJwYXJzZUludCIsInRvU3RyaW5nIiwiZ2xvYmFsIiwiZmFjdG9yeSIsIkV2RW1pdHRlciIsInByb3RvIiwicHJvdG90eXBlIiwiZXZlbnROYW1lIiwibGlzdGVuZXIiLCJfZXZlbnRzIiwibGlzdGVuZXJzIiwiaW5jbHVkZXMiLCJvbmNlIiwib25jZUV2ZW50cyIsIl9vbmNlRXZlbnRzIiwib25jZUxpc3RlbmVycyIsIm9mZiIsInNwbGljZSIsImVtaXRFdmVudCIsImFyZ3MiLCJpc09uY2UiLCJhcHBseSIsImFsbE9mZiIsIlIiLCJSZWZsZWN0IiwiUmVmbGVjdEFwcGx5IiwicmVjZWl2ZXIiLCJGdW5jdGlvbiIsImNhbGwiLCJSZWZsZWN0T3duS2V5cyIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiY29uY2F0IiwiUHJvY2Vzc0VtaXRXYXJuaW5nIiwid2FybmluZyIsIndhcm4iLCJOdW1iZXJJc05hTiIsImlzTmFOIiwiX2V2ZW50c0NvdW50IiwiX21heExpc3RlbmVycyIsImRlZmF1bHRNYXhMaXN0ZW5lcnMiLCJjaGVja0xpc3RlbmVyIiwiVHlwZUVycm9yIiwiZW51bWVyYWJsZSIsInNldCIsImFyZyIsIlJhbmdlRXJyb3IiLCJnZXRQcm90b3R5cGVPZiIsInNldE1heExpc3RlbmVycyIsIl9nZXRNYXhMaXN0ZW5lcnMiLCJ0aGF0IiwiZ2V0TWF4TGlzdGVuZXJzIiwiYXJndW1lbnRzIiwiZG9FcnJvciIsImVycm9yIiwiZXIiLCJlcnIiLCJjb250ZXh0IiwiaGFuZGxlciIsImxlbiIsImFycmF5Q2xvbmUiLCJfYWRkTGlzdGVuZXIiLCJtIiwiZXhpc3RpbmciLCJuZXdMaXN0ZW5lciIsInVuc2hpZnQiLCJ3YXJuZWQiLCJ3IiwiU3RyaW5nIiwiZW1pdHRlciIsImNvdW50IiwicHJlcGVuZExpc3RlbmVyIiwib25jZVdyYXBwZXIiLCJmaXJlZCIsInJlbW92ZUxpc3RlbmVyIiwid3JhcEZuIiwiX29uY2VXcmFwIiwic3RhdGUiLCJ3cmFwcGVkIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3QiLCJvcmlnaW5hbExpc3RlbmVyIiwic2hpZnQiLCJzcGxpY2VPbmUiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJrZXlzIiwiX2xpc3RlbmVycyIsInVud3JhcCIsImV2bGlzdGVuZXIiLCJ1bndyYXBMaXN0ZW5lcnMiLCJyYXdMaXN0ZW5lcnMiLCJsaXN0ZW5lckNvdW50IiwiZXZlbnROYW1lcyIsImFyciIsImNvcHkiLCJyZWplY3QiLCJlcnJvckxpc3RlbmVyIiwicmVzb2x2ZXIiLCJldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIiLCJhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlciIsImZsYWdzIiwid3JhcExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9fYXNzaWduIiwidCIsInMiLCJwIiwibmFtZWRfcmVmZXJlbmNlc18xIiwibnVtZXJpY191bmljb2RlX21hcF8xIiwic3Vycm9nYXRlX3BhaXJzXzEiLCJhbGxOYW1lZFJlZmVyZW5jZXMiLCJuYW1lZFJlZmVyZW5jZXMiLCJhbGwiLCJodG1sNSIsImVuY29kZVJlZ0V4cHMiLCJzcGVjaWFsQ2hhcnMiLCJub25Bc2NpaSIsIm5vbkFzY2lpUHJpbnRhYmxlIiwiZXh0ZW5zaXZlIiwiZGVmYXVsdEVuY29kZU9wdGlvbnMiLCJsZXZlbCIsIm51bWVyaWMiLCJlbmNvZGUiLCJfYSIsIl9iIiwiX2MiLCJfZCIsIl9lIiwiZW5jb2RlUmVnRXhwIiwicmVmZXJlbmNlcyIsImNoYXJhY3RlcnMiLCJpc0hleCIsImxhc3RJbmRleCIsImV4ZWMiLCJzdWJzdHJpbmciLCJyZXN1bHRfMSIsImNvZGVfMSIsImdldENvZGVQb2ludCIsImNoYXJDb2RlQXQiLCJkZWZhdWx0RGVjb2RlT3B0aW9ucyIsInNjb3BlIiwic3RyaWN0IiwiYXR0cmlidXRlIiwiYmFzZURlY29kZVJlZ0V4cHMiLCJ4bWwiLCJib2R5UmVnRXhwcyIsImh0bWw0IiwiZGVjb2RlUmVnRXhwcyIsImZyb21DaGFyQ29kZSIsIm91dE9mQm91bmRzQ2hhciIsImRlZmF1bHREZWNvZGVFbnRpdHlPcHRpb25zIiwiZGVjb2RlRW50aXR5IiwiZW50aXR5IiwiZGVjb2RlRW50aXR5TGFzdENoYXJfMSIsImRlY29kZVJlc3VsdEJ5UmVmZXJlbmNlXzEiLCJlbnRpdGllcyIsImRlY29kZVNlY29uZENoYXJfMSIsImRlY29kZUNvZGVfMSIsInN1YnN0ciIsImZyb21Db2RlUG9pbnQiLCJudW1lcmljVW5pY29kZU1hcCIsImRlY29kZSIsImRlY29kZVJlZ0V4cCIsImlzQXR0cmlidXRlIiwiaXNTdHJpY3QiLCJyZXBsYWNlTWF0Y2hfMSIsInJlcGxhY2VSZXN1bHRfMSIsInJlcGxhY2VMYXN0SW5kZXhfMSIsInJlcGxhY2VJbnB1dF8xIiwiZGVjb2RlUmVzdWx0XzEiLCJkZWNvZGVFbnRpdHlMYXN0Q2hhcl8yIiwiZGVjb2RlUmVzdWx0QnlSZWZlcmVuY2VfMiIsImRlY29kZVNlY29uZENoYXJfMiIsImRlY29kZUNvZGVfMiIsImZqIiwiYXN0cmFsQ29kZVBvaW50IiwiY29kZVBvaW50QXQiLCJpbnB1dCIsImhpZ2hTdXJyb2dhdGVGcm9tIiwiaGlnaFN1cnJvZ2F0ZVRvIiwialF1ZXJ5IiwibWFrZUFycmF5Iiwib2JqIiwiaXNBcnJheUxpa2UiLCJJbWFnZXNMb2FkZWQiLCJlbGVtIiwib25BbHdheXMiLCJxdWVyeUVsZW0iLCJnZXRJbWFnZXMiLCJqcURlZmVycmVkIiwiRGVmZXJyZWQiLCJjaGVjayIsImFkZEVsZW1lbnRJbWFnZXMiLCJlbGVtZW50Tm9kZVR5cGVzIiwibm9kZU5hbWUiLCJhZGRJbWFnZSIsImFkZEVsZW1lbnRCYWNrZ3JvdW5kSW1hZ2VzIiwibm9kZVR5cGUiLCJjaGlsZEltZ3MiLCJpbWciLCJyZVVSTCIsImdldENvbXB1dGVkU3R5bGUiLCJtYXRjaGVzIiwiYmFja2dyb3VuZEltYWdlIiwiYWRkQmFja2dyb3VuZCIsImxvYWRpbmdJbWFnZSIsIkxvYWRpbmdJbWFnZSIsIkJhY2tncm91bmQiLCJwcm9ncmVzc2VkQ291bnQiLCJoYXNBbnlCcm9rZW4iLCJjb21wbGV0ZSIsImltYWdlIiwiaXNMb2FkZWQiLCJub3RpZnkiLCJkZWJ1ZyIsImlzQ29tcGxldGUiLCJqcU1ldGhvZCIsImdldElzSW1hZ2VDb21wbGV0ZSIsImNvbmZpcm0iLCJuYXR1cmFsV2lkdGgiLCJwcm94eUltYWdlIiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsImN1cnJlbnRTcmMiLCJoYW5kbGVFdmVudCIsIm9ubG9hZCIsInVuYmluZEV2ZW50cyIsIm9uZXJyb3IiLCJtYWtlSlF1ZXJ5UGx1Z2luIiwiZm4iLCJpbnN0YW5jZSIsInByb21pc2UiLCJjYW5Vc2VET00iLCJFeGVjdXRpb25FbnZpcm9ubWVudCIsImNhblVzZVdvcmtlcnMiLCJXb3JrZXIiLCJjYW5Vc2VFdmVudExpc3RlbmVycyIsImF0dGFjaEV2ZW50IiwiY2FuVXNlVmlld3BvcnQiLCJzY3JlZW4iLCJpc0luV29ya2VyIiwiX3BvcHVsYXRlZCIsIl9pZSIsIl9maXJlZm94IiwiX29wZXJhIiwiX3dlYmtpdCIsIl9jaHJvbWUiLCJfaWVfcmVhbF92ZXJzaW9uIiwiX29zeCIsIl93aW5kb3dzIiwiX2xpbnV4IiwiX2FuZHJvaWQiLCJfd2luNjQiLCJfaXBob25lIiwiX2lwYWQiLCJfbmF0aXZlIiwiX21vYmlsZSIsIl9wb3B1bGF0ZSIsInVhcyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImFnZW50Iiwib3MiLCJwYXJzZUZsb2F0IiwiTmFOIiwiZG9jdW1lbnRNb2RlIiwidHJpZGVudCIsInZlciIsIlVzZXJBZ2VudF9ERVBSRUNBVEVEIiwiaWUiLCJpZUNvbXBhdGliaWxpdHlNb2RlIiwiaWU2NCIsImZpcmVmb3giLCJvcGVyYSIsIndlYmtpdCIsInNhZmFyaSIsImNocm9tZSIsIndpbmRvd3MiLCJvc3giLCJsaW51eCIsImlwaG9uZSIsIm1vYmlsZSIsIm5hdGl2ZUFwcCIsImFuZHJvaWQiLCJpcGFkIiwidXNlSGFzRmVhdHVyZSIsImltcGxlbWVudGF0aW9uIiwiaGFzRmVhdHVyZSIsImlzRXZlbnRTdXBwb3J0ZWQiLCJldmVudE5hbWVTdWZmaXgiLCJjYXB0dXJlIiwiaXNTdXBwb3J0ZWQiLCJQSVhFTF9TVEVQIiwiTElORV9IRUlHSFQiLCJQQUdFX0hFSUdIVCIsInNYIiwic1kiLCJwWCIsInBZIiwiZGV0YWlsIiwid2hlZWxEZWx0YSIsIndoZWVsRGVsdGFZIiwid2hlZWxEZWx0YVgiLCJheGlzIiwiSE9SSVpPTlRBTF9BWElTIiwiZGVsdGFZIiwiZGVsdGFYIiwiZGVsdGFNb2RlIiwic3BpblgiLCJzcGluWSIsImdldEV2ZW50VHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsIkNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIldlYlNvY2tldENsaWVudCIsImNsaWVudCIsIldlYlNvY2tldCIsIm9uT3BlbiIsImYiLCJvbm9wZW4iLCJvbkNsb3NlIiwib25jbG9zZSIsIm9uTWVzc2FnZSIsIm9ubWVzc2FnZSIsImRlZmF1bHQiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiY2xpZW50VGFwYWJsZVN5bmNCYWlsSG9vayIsIl9fdW51c2VkX3dlYnBhY2tfbW9kdWxlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIm8iLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsImZyb20iLCJpdGVyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJhcnIyIiwiTG9nVHlwZSIsImZyZWV6ZSIsImluZm8iLCJ0cmFjZSIsImdyb3VwIiwiZ3JvdXBDb2xsYXBzZWQiLCJncm91cEVuZCIsInByb2ZpbGUiLCJwcm9maWxlRW5kIiwiY2xlYXIiLCJMT0dfU1lNQk9MIiwiVElNRVJTX1NZTUJPTCIsIlRJTUVSU19BR0dSRUdBVEVTX1NZTUJPTCIsIldlYnBhY2tMb2dnZXIiLCJnZXRDaGlsZExvZ2dlciIsIl9sZW4iLCJfa2V5IiwiX2xlbjIiLCJfa2V5MiIsIl9sZW4zIiwiX2tleTMiLCJfbGVuNCIsIl9rZXk0IiwiX2xlbjUiLCJfa2V5NSIsImFzc2VydCIsImFzc2VydGlvbiIsIl9sZW42IiwiX2tleTYiLCJfbGVuNyIsIl9rZXk3IiwiX2xlbjgiLCJfa2V5OCIsIl9sZW45IiwiX2tleTkiLCJfbGVuMTAiLCJfa2V5MTAiLCJsYWJlbCIsIk1hcCIsInByb2Nlc3MiLCJocnRpbWUiLCJ0aW1lTG9nIiwidGltZUVuZCIsImRlbGV0ZSIsInRpbWVBZ2dyZWdhdGUiLCJ0aW1lQWdncmVnYXRlRW5kIiwiTG9nZ2VyIiwiX191bnVzZWRfd2VicGFja19leHBvcnRzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9yZXF1aXJlIiwiZmlsdGVyVG9GdW5jdGlvbiIsInJlZ0V4cCIsIlJlZ0V4cCIsImlkZW50IiwiTG9nTGV2ZWwiLCJub25lIiwiZmFsc2UiLCJ0cnVlIiwidmVyYm9zZSIsIl9yZWYiLCJfcmVmJGxldmVsIiwiX3JlZiRkZWJ1ZyIsImRlYnVnRmlsdGVycyIsIm1hcCIsImxvZ2xldmVsIiwibG9nZ2VyIiwibGFiZWxlZEFyZ3MiLCJtcyIsIm1zZyIsImxvZ1RpbWUiLCJfZXh0ZW5kcyIsInNvdXJjZSIsIlN5bmNCYWlsSG9vayIsImNyZWF0ZUNvbnNvbGVMb2dnZXIiLCJjdXJyZW50RGVmYXVsdExvZ2dlck9wdGlvbnMiLCJjdXJyZW50RGVmYXVsdExvZ2dlciIsImdldExvZ2dlciIsImhvb2tzIiwiY2hpbGROYW1lIiwiY29uZmlndXJlRGVmYXVsdExvZ2dlciIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwiZCIsImRlZmluaXRpb24iLCJwcm9wIiwiciIsInRvU3RyaW5nVGFnIiwiX193ZWJwYWNrX2V4cG9ydHNfXyIsIndlYnBhY2tfbGliX2xvZ2dpbmdfcnVudGltZV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fIiwiX193ZWJwYWNrX2V4cG9ydF90YXJnZXRfXyIsIl9fZXNNb2R1bGUiLCJfX3VudXNlZF93ZWJwYWNrX19fd2VicGFja19tb2R1bGVfXyIsInN0cmlwQW5zaSIsImFuc2lfcmVnZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyIsInN0cmluZyIsImFuc2lSZWdleCIsIl9yZWYkb25seUZpcnN0Iiwib25seUZpcnN0IiwicGF0dGVybiIsInN0cmlwX2Fuc2lfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyIsImlmcmFtZUNvbnRhaW5lckVsZW1lbnQiLCJjb250YWluZXJFbGVtZW50Iiwib25Mb2FkUXVldWUiLCJjcmVhdGVDb250YWluZXIiLCJib3JkZXIiLCJjb250ZW50RG9jdW1lbnQiLCJib3hTaXppbmciLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0Iiwid2hpdGVTcGFjZSIsIm92ZXJmbG93IiwiaGVhZGVyRWxlbWVudCIsImNsb3NlQnV0dG9uRWxlbWVudCIsImZvbnRXZWlnaHQiLCJjdXJzb3IiLCJjc3NGbG9hdCIsInN0eWxlRmxvYXQiLCJhcHBlbmRDaGlsZCIsImVuc3VyZU92ZXJsYXlFeGlzdHMiLCJjYWxsYmFjayIsImZvcm1hdFByb2JsZW0iLCJtb2R1bGVOYW1lIiwibG9jIiwibWVzc2FnZXMiLCJlbnRyeUVsZW1lbnQiLCJ0eXBlRWxlbWVudCIsIl9mb3JtYXRQcm9ibGVtIiwibWVzc2FnZVRleHROb2RlIiwiaW5uZXJIVE1MIiwiQ2xpZW50IiwiX193ZWJwYWNrX2Rldl9zZXJ2ZXJfY2xpZW50X18iLCJyZXRyaWVzIiwibWF4UmV0cmllcyIsInNvY2tldCIsImluaXRTb2NrZXQiLCJoYW5kbGVycyIsInJlY29ubmVjdCIsInJldHJ5SW5NcyIsInBvdyIsIkpTT04iLCJwYXJzZSIsInBhcmFtcyIsImZvcm1hdCIsIm9ialVSTCIsInByb3RvY29sIiwiYXV0aCIsImVuY29kZVVSSUNvbXBvbmVudCIsImhvc3QiLCJob3N0bmFtZSIsInBvcnQiLCJwYXRobmFtZSIsInNsYXNoZXMiLCJjaGFyQXQiLCJzZWFyY2giLCJoYXNoIiwiY3JlYXRlU29ja2V0VVJMIiwicGFyc2VkVVJMIiwiaXNJbkFkZHJBbnkiLCJzb2NrZXRVUkxQcm90b2NvbCIsInNvY2tldFVSTEF1dGgiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwic29ja2V0VVJMSG9zdG5hbWUiLCJzb2NrZXRVUkxQb3J0Iiwic29ja2V0VVJMUGF0aG5hbWUiLCJmcm9tQ3VycmVudFNjcmlwdCIsImdldEN1cnJlbnRTY3JpcHRTb3VyY2UiLCJjdXJyZW50U2NyaXB0Iiwic2NyaXB0RWxlbWVudHMiLCJzY3JpcHRzIiwic2NyaXB0RWxlbWVudHNXaXRoU3JjIiwiZGVmYXVsdExldmVsIiwic2V0TG9nTGV2ZWwiLCJwYXJzZVVSTCIsInJlc291cmNlUXVlcnkiLCJzZWFyY2hQYXJhbXMiLCJzcGxpdCIsInBhaXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzY3JpcHRTb3VyY2UiLCJzY3JpcHRTb3VyY2VVUkwiLCJVUkwiLCJocmVmIiwiaG90RW1pdHRlciIsInJlbG9hZEFwcCIsImhvdCIsImxpdmVSZWxvYWQiLCJpc1VubG9hZGluZyIsImN1cnJlbnRIYXNoIiwicHJldmlvdXNIYXNoIiwiaXNJbml0aWFsIiwiYXBwbHlSZWxvYWQiLCJyb290V2luZG93IiwiaW50ZXJ2YWxJZCIsImNsZWFySW50ZXJ2YWwiLCJyZWxvYWQiLCJ0b0xvd2VyQ2FzZSIsImFsbG93VG9Ib3QiLCJhbGxvd1RvTGl2ZVJlbG9hZCIsInBvc3RNZXNzYWdlIiwic2VuZE1zZyIsIldvcmtlckdsb2JhbFNjb3BlIiwibG9nTGV2ZWwiLCJkdW1teSIsInNob3VsZExvZyIsImxvZ0dyb3VwIiwibG9nRm4iLCJmb3JtYXRFcnJvciIsInN0YWNrIiwid2VicGFja0hvdExvZyIsInNlbmRNZXNzYWdlIiwiX193ZWJwYWNrX2hhc2hfXyIsIm92ZXJsYXkiLCJwYXJzZWRSZXNvdXJjZVF1ZXJ5IiwiX19yZXNvdXJjZVF1ZXJ5IiwibG9nZ2luZyIsInNldEFsbExvZ0xldmVsIiwib25Tb2NrZXRNZXNzYWdlIiwiaW52YWxpZCIsIl9oYXNoIiwicHJvZ3Jlc3NVcGRhdGUiLCJwbHVnaW5OYW1lIiwic3RpbGxPayIsIm9rIiwiY29udGVudENoYW5nZWQiLCJzdGF0aWNDaGFuZ2VkIiwid2FybmluZ3MiLCJfd2FybmluZ3MiLCJwcmludGFibGVXYXJuaW5ncyIsIm5lZWRTaG93T3ZlcmxheUZvcldhcm5pbmdzIiwicHJldmVudFJlbG9hZGluZyIsImVycm9ycyIsIl9lcnJvcnMiLCJwcmludGFibGVFcnJvcnMiLCJfZm9ybWF0UHJvYmxlbTIiLCJuZWVkU2hvd092ZXJsYXlGb3JFcnJvcnMiLCJfZXJyb3IiLCJzb2NrZXRVUkwiLCJBcHAiLCJpbml0TmF2aWdhdGlvbiIsImdldENvbnRlbnQiLCJpbml0UGFnZXMiLCJjb25maWciLCJjYW52YXMiLCJvblByZWxvYWRFbmQiLCJ0ZW1wbGF0ZSIsInBhZ2VzIiwiaG9tZSIsImFib3V0IiwicGFnZSIsImZvcm1IYW5kbGVyIiwib25DaGFuZ2UiLCJodG1sIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImRpdkNvbnRlbnQiLCJzY3JvbGxUbyIsImxpbmtzIiwibGlua0RhdGEiLCJzY3JvbGxUb0VsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9