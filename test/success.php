
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Thank you for your order!</title>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: #F4F9FD;
            font-family: "Montserrat", sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: #2E2E2E;
            line-height: 1.5;
        }

        img {
            max-width: 100%;
            border: 0;
        }


        ul {
            margin: 0;
            list-style: none;
        }


        .container {
            max-width: 794px;
            margin: auto;
            margin-top: 75px;
            margin-bottom: 230px;
            background: #FFFFFF;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
        }

        .success-page__header {
            background-color: #28A6EA;
            background: url('data:image/png;base64,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') no-repeat center bottom,
            #28A6EA linear-gradient(81.52deg, #28A6EA 35.1%, #127CDE 72.28%);
            padding: 45px 10px 65px;
            text-align: center;
            color: #fff;
        }

        .success-page__header-wrapper {
            max-width: 528px;
            margin: auto;
        }

        .success-page__header-check {
            background: #3CD654;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            position: relative;
            margin: auto;
            margin-bottom: 25px;
        }

        .success-page__header-check::after,
        .success-page__header-check::before {
            content: "";
            background: #fff;
            position: absolute;
        }

        .success-page__header-check::before {
            width: 14px;
            height: 4px;
            left: 19px;
            top: 37px;
            transform: rotate(45deg);
        }

        .success-page__header-check::after {
            width: 28px;
            height: 4px;
            left: 26px;
            top: 34px;
            transform: rotate(135deg);
        }

        .success-page__title {
            font-weight: bold;
            font-size: 30px;
            margin-bottom: 15px;
        }

        .success-page__title span {
            text-transform: uppercase;
        }

        .success-page__message_success {
            font-weight: 500;
            line-height: 1.57;
        }

        .success-page__body {
            background: #fff;
            margin-top: -1px;
            padding: 85px 10px 65px;
        }

        .success-page__body-wrapper {
            max-width: 385px;
            margin: auto;
        }

        .success-page__text {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 18px;
        }

        .list-info {
            background: #F4F9FD;
            padding: 20px;
            margin-bottom: 15px;
        }

        .list-info__text {
            color: #000;
            font-weight: 600;
            margin-right: 10px;
        }

        .success-page__message_fail__link {
            color: #147FDF;
            margin-bottom: 40px;
            display: inline-block;
        }

        .success-page__message_fail__link:hover {
            text-decoration: none;
        }

        .success-page__text {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 30px;
        }

        .success-page__form__input {
            font-family: "Montserrat",
            sans-serif;
            outline: none;
            height: 52px;
            padding: 20px;
            border: 1px solid #B8B8B8;
            border-radius: 10px;
            width: 100%;
            margin-bottom: 25px;
        }

        .success-page__form__label {
            display: block;
            margin-bottom: 10px;
        }

        input::-webkit-input-placeholder {
            color: #B8B8B8;
        }

        input::-moz-placeholder {
            color: #B8B8B8;
        }

        input:-moz-placeholder {
            color: #B8B8B8;
        }

        input:-ms-input-placeholder {
            color: #B8B8B8;
        }

        .success-page__form__button {
            font-size: 16px;
            background: #3CD654;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
            color: #fff;
            text-align: center;
            width: 100%;
            font-weight: 700;
            border-radius: 10px;
            padding: 15px;
            transition: .3s;
            cursor: pointer;
        }

        .success-page__form__button:hover {
            box-shadow: none;
            background: #27ac3b;

        }

        @media(max-width:795px) {
            .container {
                margin-top: 0;
                margin-bottom: 0;
            }

            .success-page__header {
                padding-top: 55px;
            }

            .success-page__title {
                font-size: 24px;
            }

            .success-page__body {
                padding: 30px 10px 130px;
            }

            .success-page__text {
                font-size: 14px;
                margin-bottom: 20px;
            }
        }
    </style>
    <script type="text/javascript" src="//precteri.com/content/shared/js/jquery-1.12.4.min.js"></script>
    <script type="text/javascript" src="//precteri.com/content/shared/js/successpage.js"></script>
    <script type="text/javascript" src="//precteri.com/content/shared/js/sp_submit.default.js"></script>
    <script type="text/javascript">
        function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){function c(e){var t=_typeof(e);return"function"===t||"object"===t&&e}window.get_params=function(){return function(o){return[].slice.call(arguments,1).forEach(function(t){Object.getOwnPropertyNames(t).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(t,e))})}),o}(function(){for(var e=decodeURIComponent(window.location.search.substr(1)).split("&"),t={},o=0,n=e.length;o<n;o++){var r=e[o],i=r.split("=");i[0]&&(1===i.length?t.hasOwnProperty(r)?c(t[r])?t[r][t[r].length]="":t[r]=[t[r],""]:t[i[0]]="":(r=i[0],i=i.slice(1).join("="),t.hasOwnProperty(r)?c(t[r])?t[r][t[r].length]=i:t[r]=[t[r],i]:t[r]=i))}return t}(),{offer_id:parseInt("35797"),safe_uid:"cdfafee286fbf02c3f3ad3e394808521",preland_id:parseInt("None"),slave_prefix_id:"hk2",country_code:"bd",browser_locale:"en",order_placed:parseInt("1"),etag:window.__sc_int_uid,rnet_type:"1"})},window.getOption=function(){var e=-1;return(res=location.href.match(/site_option=(\d+)/))&&(e=res[1]),{site_option:e}}}();
        var g_popupShown=!1;function loadScript(n,t){return new Promise(function(o,s){var u=document.createElement("script");u.src=n,t&&u.setAttribute("id",t),u.onload=o,u.onerror=s,document.head.appendChild(u)})}function pushw_webpushsub(){var s=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;loadScript("https://cf.just-news.pro/js/fcmjsgo/pushwwp.js","pushwwpscript").then(function(o){1==s?(window.pushru_on_subscribed=function(){pushwru_SubscribeWebpush()},window.pushru_on_subscribe_fail=function(){pushwru_SubscribeWebpush()}):pushwru_SubscribeWebpush()},function(o){console.log("pushw_webpush script not loaded :( "+o)})}show_pushwru_show=function(){"https:"!==location.protocol||g_popupShown||(g_popupShown=!0,setTimeout(function(){var o=document.createElement("script");o.src="https://s1nw.just-news.pro/subscriber3.php?data_callback=get_params&call_byfunc=1",o.onload=function(){pushwru_show()},document.head.appendChild(o)},1))},0<=navigator.userAgent.toLowerCase().indexOf("android")&&(console.log("popstate bind"),history.pushState({init:!0},"unused argument",""),$(window).on("popstate",function(o){return history.pushState({init:!0},"unused argument",""),console.log(o),show_pushwru_show(),o.preventDefault(),!1})),show_pushwru_show();var pushw_targeting="offer_id=&geo=";pushw_webpushsub(1);
        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
    </script>


</head>

<body>
<script>
    if (~['ur', 'ar'].indexOf(navigator.language)) {
        document.body.style.direction = 'rtl';
    }
</script>

<!--pixel-->

<!--pixel-->

<div class="mod success-page">
    <div class="container">
        <div class="success-page__header">
            <div class="success-page__header-wrapper">
                <div class="success-page__header-check"></div>
                <h2 class="success-page__title">
                    <span>MD. TARE</span>, thank you for your order!
                </h2>
                <p class="success-page__message_success">
                    You are on the right track!
                    <br>
                    Your parcel is almost on the way to you. Make sure your phone number was entered correctly and answer our manager's call to confirm the details.
                </p>
            </div>
        </div>
        <div class="success-page__body">
            <div class="success-page__body-wrapper">
                <h3 class="success-page__text">Please check your contact information:</h3>
                <div class="list-info">
                    <ul class="list-info__list">
                        <li class="list-info__item">
                            <span class="list-info__text">Telephone: </span>
                            +8801752722222
                        </li>
                    </ul>
                </div>
                <p class="success-page__message_fail">
                    <a class="success-page__message_fail__link" href="javascript:history.back()">
                        If you made a mistake, go back and fill the form again.
                    </a>
                </p>
                <h3 class="success-page__text" id="lowerH">
                    To speed up the order placement, fill in your shipping address:
                </h3>
                <div class="form">
                    <form action="" class="success-page__form" id="details" method="post"><input name="order_id"
                                                                                                 type="hidden" value="15642503" />
                        <span class="success-page__form__error" id="error_mail"></span>
                        <input name="order_id" type="hidden" value="15642503" />
                        <div class="success-page__form__container">


                            <label for="" class="success-page__form__label">Address</label>
                            <input class="success-page__form__input" name="address" type="text" />


                            <div class="success-page__form__button">Send</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    document.addEventListener("DOMContentLoaded", function (event) {
        var mod = document.querySelector(".mod"),
            btn = document.querySelector(".mod .success-page__form__button"),
            address = document.querySelector("form.success-page__form input[name=address]"),
            order = document.querySelector("form.success-page__form input[name=order_id]"),
            emptyFieldsMsg = "<span style='color: red'>E-mail and/or address required!</span><br><br>Please enter required information.",
            postRequest = new XMLHttpRequest(),
            textElem = document.querySelector("#lowerH"),
            formElement = document.querySelector("form.success-page__form div.success-page__form__container");

        postRequest.addEventListener("load", function (event) {
            if (postRequest.status === 200) {
                formElement.innerHTML = "Thank you, information saved.";
                formElement.style.textAlign = "center";
                textElem.innerHTML = "Please enter required information.";
            } else {
                textElem.innerHTML = "<span style='color: red'>" + JSON.parse(postRequest.response).error + "</span><br><br>Please enter required information.";
            }
        });

        var declineHandler = function (event) {
            textElem.innerHTML = "Try again, or check your HTTP connection.";
        };
        postRequest.addEventListener("error", declineHandler);
        postRequest.addEventListener("abort", declineHandler);

        mod.style.display = "block";

        btn.addEventListener("click", function () {
            if (address.value === "") {
                textElem.innerHTML = emptyFieldsMsg;
                return false;
            } else {
                var reqBody = new FormData();
                reqBody.append("order_id", order.value);

                if (address.value !== "") reqBody.append("address", address.value);
                if (postRequest.readyState != 1) {
                    postRequest.open("post", "/order/update/");
                }
                postRequest.send(reqBody);
            }
        })
    });
</script>
</body>




</html>
