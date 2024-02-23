'use strict'
document.addEventListener("DOMContentLoaded", function () {
    // scroll
    $(document).ready(function() {
        // scroll
        function ScrollBlock(block) {
            $('a[href="' + block + '"]').click(function (e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: $(block).offset().top - 90
                }, 1000);
            });
        }
        ScrollBlock('#form');
    });
    // слайдер 
    const Slider = {
        Click(items, itemsTwo) {
            let positionNext = 0;
            for (let i=0; i < itemsTwo.length; i++) {
                itemsTwo[i].addEventListener('click', ()=>{
                    positionNext = i;
                    for (let y=0; y < itemsTwo.length; y++) {
                        items[y].classList.remove('active');
                        itemsTwo[y].classList.remove('active');
                    }
                    items[positionNext].classList.add("active");
                    itemsTwo[positionNext].classList.add("active");
                });
            }
        },
        Prev(items, itemsTwo) {
            let position = 0;
            let positionNext = 0;
            for (let i = 0; i < items.length; i++) {
                for (let y = 0; y < items[i].classList.length; y++) {
                    if (items[i].classList[y] == "active") {
                        position = i;
                    }
                }
            }
            if (position == 0) {
                positionNext = (items.length - 1);
            } else {
                positionNext = position - 1;
            }
            items[position].classList.remove("active");
            items[positionNext].classList.add("active");
            itemsTwo[position].classList.remove("active");
            itemsTwo[positionNext].classList.add("active");
        },
        Next(items, itemsTwo) {
            let position = 0;
            let positionNext = 0;
            for (let i = 0; i < items.length; i++) {
                for (let y = 0; y < items[i].classList.length; y++) {
                    if (items[i].classList[y] == "active") {
                        position = i;
                    }
                }
            }
            if (position == (items.length - 1)) {
                positionNext = 0;
            } else {
                positionNext = position + 1;
            }
            items[position].classList.remove("active");
            items[positionNext].classList.add("active");
            itemsTwo[position].classList.remove("active");
            itemsTwo[positionNext].classList.add("active");
        },
        Touch(box, slid, btn) {

            var touchStartX = null; //Точка начала касания
            var touchPositionX = null; //Текущая позиция
            const sensitivity = 50; // Чувствительность

            //Перехватываем события
            box.addEventListener("touchstart", function (e) { TouchStart(e) }); //Начало касания
            box.addEventListener("touchmove", function (e) { TouchMove(e) }); //Движение пальцем по экрану
            box.addEventListener("touchend", function (e) { TouchEnd(e) }); //Пользователь отпустил экран

            function TouchStart(e) {
                touchPositionX = null;
                //Получаем текущую позицию касания
                touchStartX = e.changedTouches[0].pageX;
            }

            function TouchMove(e) {
                //Получаем новую позицию
                touchPositionX = e.changedTouches[0].pageX;
            }

            function TouchEnd(e) {
                if ((touchPositionX < (touchStartX - sensitivity)) && (touchPositionX != null)) {
                    Slider.Next(slid, btn);
                } else if ((touchPositionX > (touchStartX + sensitivity)) && (touchPositionX != null)) {
                    Slider.Prev(slid, btn);
                }
            }

        },
        Start(box, slider, btn) {
            this.Touch(box, slider, btn);
            this.Click(slider, btn);
        },
    }
    // запускаем слайдер
    let PowerBox = this.querySelector('.b-power').querySelector('.b-slider-box');
    let PowerSliders = this.querySelector('.b-power').querySelectorAll('.b-slider');
    let PowerBtns = this.querySelector('.b-power').querySelectorAll('.b-btn');
    Slider.Start(PowerBox, PowerSliders, PowerBtns);

    
    let EffectBox = this.querySelector('.b-effect').querySelector('.b-slider-box');
    let EffectSliders = this.querySelector('.b-effect').querySelectorAll('.b-slider');
    let EffectBtns = this.querySelector('.b-effect').querySelectorAll('.b-btn');
    Slider.Start(EffectBox, EffectSliders, EffectBtns);

    // let CompounBox = this.querySelector('.b-compound').querySelector('.b-slider-box');
    // let CompounSliders = this.querySelector('.b-compound').querySelectorAll('.b-slider');
    // let CompounBtns = this.querySelector('.b-compound').querySelectorAll('.b-btn');
    // Slider.Start(CompounBox, CompounSliders, CompounBtns);
    
    let ReviewsBox = this.querySelector('.b-reviews').querySelector('.b-slider-box');
    let ReviewsSliders = this.querySelector('.b-reviews').querySelectorAll('.b-slider');
    let ReviewsBtns = this.querySelector('.b-reviews').querySelectorAll('.b-btn');
    Slider.Start(ReviewsBox, ReviewsSliders, ReviewsBtns);

    // счетчик
    let Сounter = {
        munbs: document.getElementById('counter').querySelectorAll('.numb'),
        GenerateStartNumber() {
            const now = new Date();
            const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            const minutesPassed = (now.getTime() - startOfDay.getTime()) / 60000; // Количество пройденных минут с начала текущего дня
            const number = (minutesPassed * 0.00055).toFixed(3) + 1; // + 1 для того что бы отображался последний ноль
            this.Update(number);
            return parseFloat(number);
        },
        Update(number) {
            this.munbs.forEach((block, index) => {
                block.textContent = number.toString()[index + 2];
            });
        },
        IncreaseNumber(number) {
            setInterval(() => {
                number += 0.001;
                this.Update(number);
            }, 5000);
        },
    }
    const number = Сounter.GenerateStartNumber();
    Сounter.IncreaseNumber(number);
});