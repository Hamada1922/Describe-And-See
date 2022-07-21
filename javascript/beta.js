let firstChar = document.getElementById("first-char"),
    eye = document.getElementById("eye-color"),
    skin = document.getElementById("skin-color"),
    hair = document.getElementById("hair-color"),
    lenght = document.getElementById("meter"),
    weight = document.getElementById("kg"),
    meet = document.getElementById("meet"),
    result = document.getElementById("result"),
    para = document.getElementById("para"),
    total = document.getElementById("total");

result.onclick = function () {
    var sum =
        +firstChar.value
        + +eye.value
        + +skin.value
        + +hair.value
        + +lenght.value
        + +weight.value
        + +meet.value;

    total.innerHTML = sum;
    switch (sum) {
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

}


