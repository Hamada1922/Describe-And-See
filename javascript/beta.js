let firstChar = document.getElementById("first-char"),
    charNumber = document.getElementById("char-num"),
    eye = document.getElementById("eye-color"),
    skin = document.getElementById("skin-color"),
    hair = document.getElementById("hair-color"),
    lenght = document.getElementById("meter"),
    weight = document.getElementById("kg"),
    meet = document.getElementById("meet"),
    result = document.getElementById("result"),
    para = document.getElementById("para"),
    total = document.getElementById("total"),

    //
    counter = document.getElementById("counter"),
    overlay = document.getElementById("overlay"),
    start = document.getElementById("start"),

    //
    colorDiv = document.getElementById("color-div"),
    changeSelect = document.getElementById("change-select"),
    circleMenu = document.getElementById("circle-menu"),
    btnChange = document.getElementById("btn-change"),

    //
    wow = document.querySelector(".wow"),
    arrowDown = document.querySelectorAll(".fa-angle-double-down"),
    myName = document.querySelector("footer p span"),
    iconColors = document.querySelector("#circle-menu i"),
    selectInnerCOlor = document.querySelectorAll(".describe .container .double div select"),
    logo = document.querySelector(".logo"),
    //
    up = document.querySelector(".up");

let random = "";
let colorMood = "on";

// Countdown set
let countdown = setInterval(() => {
    counter.innerHTML -= 1;
    if (counter.innerHTML === "0") {
        counter.innerHTML = "100";
    }
}, 300);

// counter
start.onclick = () => {
    let counterValue = parseInt(counter.innerHTML);
    overlay.style.display = "none";
    result.style.zIndex = "2";
    if (counterValue <= 10) {
        random = "sub";
    } else if (counterValue > 10 && counterValue <= 20) {
        random = "sum";
    } else if (counterValue > 20 && counterValue <= 30) {
        random = "div";
    } else if (counterValue > 30 && counterValue <= 40) {
        random = "mul";
    } else if (counterValue > 40 && counterValue <= 50) {
        random = "sub+2";
    } else if (counterValue > 50 && counterValue <= 60) {
        random = "sum-3";
    } else if (counterValue > 60 && counterValue <= 70) {
        random = "div+4";
    } else if (counterValue > 70 && counterValue <= 80) {
        random = "mul-2";
    } else if (counterValue > 80 && counterValue <= 90) {
        random = "sum";
    } else if (counterValue > 90 && counterValue <= 100) {
        random = "sub";
    }
}

// Sum
result.onclick = function () {
    let final = 0;
    let numberValue = parseInt(charNumber.value);

    let sum =
        +firstChar.value
        + +eye.value
        + +skin.value
        + +hair.value
        + +lenght.value
        + +weight.value
        + +meet.value;

    switch (random) {
        case "sub":
            final = sum - numberValue;
            break;
        case "sum":
            final = sum + numberValue;
            break;
        case "div":
            final = sum / numberValue;
            break;
        case "mul":
            final = sum * 2;
            break;
        case "sub+2":
            final = sum - numberValue + 2;
            break;
        case "sum-3":
            final = sum + numberValue - 2;
            break;
        case "div+4":
            final = sum / numberValue + 4;
            break;
        case "mul-2":
            final = sum * 2 - 4;
            break;
        default:
            final = sum;
            break;
    }
    if (final < 7) {
        final = 7 + numberValue;
    } else if (final > 42) {
        final = 45 - numberValue;
    }
    total.innerHTML = sum;

    switch (final) {
        case 7:
            para.innerHTML = "الحياة لا تعدل فقط تعود عليها كما هي"
            break;
        case 8:
            para.innerHTML = "اذا نظرت للحياة بروح مبتسمة حتمًا ستجدها مثيرة للاهتمام";
            break;
        case 9:
            para.innerHTML = "الحياة جميلة عندما تختار حياتك الخاصة بدلاً من حياة الآخرين";
            break
        case 10:
            para.innerHTML = "أكثر الناس حقارة هو ذلك الذي يعطيك ظهره وأنت في أمس الحاجة إلى يده";
            break;
        case 11:
            para.innerHTML = "ستُصبح الحياة أكثر إيجابيّة لو نظرنا إليها بعين التفاؤل والأمل";
            break;
        case 12:
            para.innerHTML = "لا يوجد أسوأ من إنسان يسألك عن اسمك الذي طالما كان يقرنه دائماً بكلمة أحبك";
            break;
        case 13:
            para.innerHTML = "ربنا علي الظالم";
            break;
        case 14:
            para.innerHTML = "الهي اصحي الصبح الاقي بيتكم بيولع";
            break
        case 15:
            para.innerHTML = "لا شك في أنّك أغبى الناس إذا كنت تبحث عن الحب في قلب يكرهك عبيط يعني";
            break;
        case 16:
            para.innerHTML = "تصرَّف كما لو أنّه من المستحيل أن تفشل ولو معرفتش يا سيدي تخيييل";
            break;
        case 17:
            para.innerHTML = "هتعيش كلب وهتموت كلب";
            break;
        case 18:
            para.innerHTML = "لا أفكر فالعمر المتبقي لي، ولكني أتمنى أن يكون كله وأنا معك";
            break;
        case 19:
            para.innerHTML = "لو متعرفش فيه مكان اسمه حمام عشان الريحة بس";
            break
        case 20:
            para.innerHTML = "قد تكسب في يوم ما شخصًا يعادل ما خسرته في حياتك كلها وهو يكمل على اللي باقي";
            break;
        case 21:
            para.innerHTML = "القرد فى عين امه غزال";
            break;
        case 22:
            para.innerHTML = "ليس هناك شخص عظيم يشكو من نقص الفرص انت بس احيانا المحن بيغلب الواحد";
            break;
        case 23:
            para.innerHTML = "يا ابن الكلب يا واطي";
            break;
        case 24:
            para.innerHTML = "من المعروف أن الرجل لا يمكنه أن يكون شخصاً قاسياً مع من يحبها نسيت الشبشب";
            break
        case 25:
            para.innerHTML = "أعظم مصائب الجهل أن يجهل الجاهل جهله عبيط ومش عارف انه عبيط";
            break;
        case 26:
            para.innerHTML = "من حفر حفرة لأخيه وقع فيها و ربنا مطلعك منها";
            break;
        case 27:
            para.innerHTML = "أحياناً تصبح الغيرة إثبات للملكية وليست دليل على الحب";
            break;
        case 28:
            para.innerHTML = "إنّ ما تحصل عليه من دون جهد أو ثمن ليس له قيمة طبعا فاهم يا برطه";
            break;
        case 29:
            para.innerHTML = "حسبى الله ونعم الوكيل فيك";
            break
        case 30:
            para.innerHTML = "أحببتك جدًا لدرجة أنه عندما تغيب عني يغيب معك كل شيء يا خي حتي الربسو طب سيب أي حاجة";
            break;
        case 31:
            para.innerHTML = "حاول أن تتحكم بشعورك بالقلق، لأنه أكثر سبب مدمر للعلاقات اللي هي اساسا منتهية بس نكون عملنا اللي علينا";
            break;
        case 32:
            para.innerHTML = "اخبرني ماذا رأيت من الله حتى تكره لقاءه قصدي الصلاة متعملش عبيط";
            break;
        case 33:
            para.innerHTML = "جودة الكلام في الاختصار يعني ولا لخص يلا";
            break;
        case 34:
            para.innerHTML = "بركة المال في أداء الزكاة عشان كده ربنا ماسحك";
            break
        case 35:
            para.innerHTML = "كل ما أريده هو أن تبقى في حياتي للأبد بس من غير نكد ابوس ايد أمك";
            break;
        case 36:
            para.innerHTML = "هُناك دائماً مكان في القمة لك أنت ده لو ناوي تعمل حاجة يعنى ده اقتراح يعني والنبي ما تزعل ياغتي";
            break;
        case 37:
            para.innerHTML = "القلوب التي تعوّدت أن تبيع من الصعب أن تشتري أصل الدولار رفع تانى";
            break;
        case 38:
            para.innerHTML = "امنح الناس دائماً أكثر مما يتوقعون الحصول عليه وبعدها عيش في الدور";
            break;
        case 39:
            para.innerHTML = "من جد وجد، ومن زرع بلح يستني بقا 5 سنين";
            break
        case 40:
            para.innerHTML = "الحياة إمّا أن تكون مُغامرة جرئية، أو لا شيء يا جبان خايف من ايه قولى";
            break;
        case 41:
            para.innerHTML = " إفشاء السر خصلة مبغوضة يا فتاااان هتروح النار";
            break;
        case 42:
            para.innerHTML = "من العذاب: أن تكتب لمن لا يقرأ لك وأن تنتظر من لا يأتي";
            break;
        default:
            para.innerHTML = "شوف حظك"
    }
    overlay.style.display = "block";
}


// change color show

circleMenu.onclick = () => {
    if (colorMood === "on") {
        colorDiv.style.display = "block";
        colorMood = "off";
    } else {
        colorDiv.style.display = "none";
        colorMood = "on";
    }
}

// change color

changeColor = function (color) {
    logo.style.color = `${color}`;
    wow.style.color = `${color}`;
    start.style.backgroundColor = `${color}`;
    result.style.backgroundColor = `${color}`;
    total.style.color = `${color}`;
    myName.style.color = `${color}`;
    iconColors.style.color = `${color}`;
    changeSelect.style.cssText = `
    color: ${color};
    border-color: ${color};
    `;
    up.style.cssText = `
    border-bottom-color: ${color};
    `;

    //
    for (let i = 0; i < arrowDown.length; i++) {
        arrowDown[i].style.color = `${color}`;
    }
    for (let i = 0; i < selectInnerCOlor.length; i++) {
        selectInnerCOlor[i].style.color = `${color}`;
    }
}

if (localStorage.getItem("color")) {
    changeColor(localStorage.color);
}

btnChange.onclick = () => {
    changeColor(changeSelect.value)
    localStorage.setItem("color", changeSelect.value);
}

// up button
window.onscroll = () => {
    if (window.scrollY < 100) {
        up.style.display = "none";
    } else {
        up.style.display = "block";
    }
};

up.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};
