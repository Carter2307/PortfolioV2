import Components from "classes/Components";
import { each } from "lodash";
import GSAP from "gsap";
import split from "utils/splittext";
import MagneticIMG from "utils//MagneticImg";

export default class Menu extends Components {
  constructor() {
    super({
      element: ".menu",
      elements: {
        button: ".navigation__button",
        list: ".menu__links",
        items: ".menu__links__items__link",
        number: ".menu__links__items__number",
      },
    });

    this.init();
  }

  init() {
    // each(this.elements.items, (item) => {
    //   split(item, "<br>");
    //   split(item, "<br>");
    //   this.elements.spans = item.querySelectorAll('span span')
    // })

    // each(this.elements.number, (item) => {
    //   split(item, "<br>");
    //   split(item, "<br>");
    //   this.elements.spans2 = item.querySelectorAll("span span");
    // });

    this.initAnimation()
    if (this.elements.button) {
      this.elements.button.onclick = () => this.toggle();
    }
  }

  toggle() {
    if (this.element.classList.contains("menu--open")) {
      this.elements.button.classList.remove("navigation__button--active");
      this.element.classList.remove("menu--open");
      this.hide();
    } else {
      this.elements.button.classList.add("navigation__button--active");
      this.element.classList.add("menu--open");
      this.show();
    }
  }

  initAnimation() {
    GSAP.set(this.element, {
      autoAlpha: 0,
    });

    // GSAP.set(this.elements.spans, {
    //   opacity: 0,
    //   visibility: 'hidden',
    //   y : "100%"
    // })

    // GSAP.set(this.elements.spans2, {
    //   opacity: 0,
    //   visibility: "hidden",
    //   y: "100%",
    // });
  }

  show() {


    this.animateIn = GSAP.timeline()

    this.animateIn.to(this.element, {
      autoAlpha : 1,
      duration: 2,
      ease: "expo.inOut",
    });

    // this.animateIn.to(this.elements.spans, {
    //   autoAlpha: 1,
    //   duration: 2,
    //   stagger: .4,
    //   y: "0%",
    //   ease: "expo.inOut",

    // });

    // this.animateIn.to(this.elements.spans2, {
    //   autoAlpha: 1,
    //   duration: 2,
    //   stagger: 0.4,
    //   y: "0%",
    //   ease: "expo.inOut",
    // });
    this.animateIn.call(() => {
      this.magneticimage = new MagneticIMG();
      this.magneticimage.init();
    })
  }

  hide() {
    this.animateOut = GSAP.timeline();

    this.animateOut.to(this.element, {
      autoAlpha: 0,
      duration: 2,
      ease: "expo.inOut",
    });
  }
}
