"use strict";
document.addEventListener("DOMContentLoaded", function () {
  // scroll
  function ScrollBlock(block) {
    $('a[href="' + block + '"]').click(function (e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(block).offset().top - 90,
        },
        1000
      );
    });
  }
  ScrollBlock("#form");

  // запуск скрипта "до и после"
  // function CurtainGo() {
  //   let bBlurBox = document.getElementById("curtain_box");
  //   let bBlur = document.getElementById("curtain");

  //   let isDragging = false;
  //   let startPositionX = 0;
  //   let offsetX = 0;
  //   let lastTranslateX = 300;
  //   bBlur.style.transform = "translateX(" + lastTranslateX + "px)";

  //   bBlurBox.addEventListener("mousedown", function (event) {
  //     isDragging = true;
  //     startPositionX = event.clientX;
  //     offsetX = 0;
  //     bBlur.style.transition = "none";
  //     bBlur.style.transform = "translateX(" + lastTranslateX + "px)";
  //     bBlurBox.style.cursor = "grabbing";
  //   });

  //   document.addEventListener("mousemove", function (event) {
  //     if (isDragging) {
  //       offsetX = event.clientX - startPositionX;
  //       let shift = lastTranslateX + offsetX;
  //       if (shift < 0) {
  //         // shift = 0;
  //         return;
  //       } else if (shift > 845) {
  //         // shift = 845;
  //         return;
  //       }
  //       bBlur.style.transform = "translateX(" + shift + "px)";
  //     }
  //   });

  //   document.addEventListener("mouseup", function () {
  //     if (isDragging) {
  //       isDragging = false;
  //       bBlur.style.transition = "transform 0.3s ease";
  //       bBlurBox.style.cursor = "grab";

  //       let threshold = 100;
  //       if (Math.abs(offsetX) >= threshold) {
  //         bBlur.classList.add("open");
  //         lastTranslateX += offsetX;
  //       } else {
  //         bBlur.classList.remove("open");
  //       }
  //     }
  //   });
  // }

  // CurtainGo();

  // b-danger
  // const Danger = {
  //   point: document.querySelector(".b-danger").querySelectorAll(".b-check"),
  //   img: document.querySelector(".b-danger").querySelectorAll(".b-images"),
  //   bntOpen: document.getElementById("danger_open"),
  //   bntClose: document.getElementById("danger_close"),
  //   modal: document.querySelector(".b-danger").querySelector(".b-modal"),
  //   count: 0,
  //   Click() {
  //     for (let i = 0; i < this.point.length; i++) {
  //       this.point[i].addEventListener("click", () => {
  //         if (this.point[i].dataset.view == 0) {
  //           this.point[i].classList.add("yes");
  //           this.point[i].dataset.view = 1;
  //           this.count++;
  //           for (let j = 0; j < this.img.length; j++) {
  //             this.img[j].dataset.visibility = this.count;
  //           }
  //         } else {
  //           this.point[i].classList.remove("yes");
  //           this.point[i].dataset.view = 0;
  //           this.count--;
  //           for (let j = 0; j < this.img.length; j++) {
  //             this.img[j].dataset.visibility = this.count;
  //           }
  //         }
  //       });
  //     }
  //     this.Btns();
  //   },
  //   Btns() {
  //     this.bntOpen.addEventListener("click", () => {
  //       this.modal.classList.add("active");
  //     });
  //     this.bntClose.addEventListener("click", () => {
  //       this.modal.classList.add("out");
  //       setTimeout(() => {
  //         this.modal.classList.remove("active");
  //         this.modal.classList.remove("out");
  //       }, 500);
  //     });
  //   },
  // };
  // Danger.Click();

  // слайдер
  $("#rewiews_box").slick();

  // SPOLER
  // const Spoler = {
  //   items: document
  //     .querySelector(".b-spoler-box")
  //     .querySelectorAll(".b-spoler"),
  //   leftItems: document
  //     .querySelector(".b-spoler-box")
  //     .querySelectorAll(".b-spoler"),
  //   rightItem: document
  //     .querySelector(".b-spoler-box")
  //     .querySelectorAll(".b-spoler"),
  //   Click(item) {
  //     for (let i = 0; i < item.length; i++) {
  //       item[i].addEventListener("click", () => {
  //         let open = false;
  //         for (let c = 0; c < item[i].classList.length; c++) {
  //           if (item[i].classList[c] == "open") {
  //             open = true;
  //           }
  //         }
  //         if (open) {
  //           item[i].classList.remove("open");
  //         } else {
  //           item[i].classList.add("open");
  //         }
  //       });
  //     }
  //   },
  //   Start() {
  //     this.Click(this.items);
  //   },
  // };
  // // запуск сполера
  // Spoler.Start();
});
