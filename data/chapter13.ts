import type { Scene } from '../types';

export const chapter13Data: Record<string, Scene> = {
    // CHAPTER 13, PATH 1: WATI'S THIRD DATE
    'scene_ch13_01_wati_date_3_intro': {
        sceneId: 'scene_ch13_01_wati_date_3_intro',
        narratorText: [
            "သင်ဝတီ၏တောင်းပန်မှုကိုလက်ခံပြီးနောက် သူမကသင့်ကို message ပို့သည်: 'ဒီတစ်ခါတော့ အမှားမဖြစ်အောင် ကျွန်မတို့ သူငယ်ချင်းတွေခေါ်သွားကြရအောင်။ မေလေးနဲ့အောင်ရဲမာန်နဲ့အတူ အနုပညာပြခန်းကိုသွားကြမလား?'",
            "သင်တို့လေးယောက် ပြခန်းတွင်တွေ့ကြသည်။ အောင်ရဲမာန်က 'ယဉ်ကျေး'ဟန်ဆောင်နေပြီး မေလေးကတော့ သင့်ကို စာနာသောအကြည့်ဖြင့်ကြည့်နေသည်။"
        ],
        dialogue: [
            { character: "ဝတီ", line: "ဒီတစ်ခါတော့ ထူးအောင်မရှိလောက်ဘူးလို့ မျှော်လင့်ပါတယ်။" },
            { character: "အောင်ရဲမာန်", line: "စိတ်မပူနဲ့! ငါဒီမှာရှိတယ်။ ငါက မင်းရဲ့ bodyguard ပဲ!" }
        ],
        playerChoices: [
            { text: "ဒါကတော့ ထူးဆန်းတဲ့အစပဲ။", nextSceneId: 'scene_ch13_02_wati_date_3_talk' }
        ]
    },
    'scene_ch13_02_wati_date_3_talk': {
        sceneId: 'scene_ch13_02_wati_date_3_talk',
        narratorText: ["နာရီဝက်ခန့်ကြာသော် အောင်ရဲမာန်က ဗိုက်ကိုပွတ်ပြီး မေလေးကိုကြည့်လိုက်သည်။", "'အချစ်လေး၊ ငါတို့ ရုတ်တရက်... အိမ်သာသွားဖို့လိုလာပြီ' ဟု သူပြောပြီး သူမကိုဆွဲခေါ်သွားသည်။ သူတို့က သင့်ကို မျက်စိတစ်ဖက်မှိတ်ပြသွားသည်။"],
        internalMonologue: "သူတို့ကတော့တကယ်ကိုသိမ်မွေ့တာပဲ။",
        dialogue: [
            { character: "ဝတီ", line: "သူတို့က ကျွန်မတို့ကို တစ်ယောက်တည်း အတူတူရှိစေချင်လို့ ထင်တယ်။" }
        ],
        playerChoices: [
            { text: "\"ငါလည်းအဲလိုထင်တယ်။ ဒါပေမဲ့ငါစိတ်မဆိုးပါဘူး။\"", nextSceneId: 'scene_ch13_03_wati_date_3_end', stateUpdates: {relationshipScores: [{character: 'wati', change: 1}]} },
            { text: "\"အောင်ရဲမာန်ကတော့ အောင်ရဲမာန်ပဲ။\"", nextSceneId: 'scene_ch13_03_wati_date_3_end' }
        ]
    },
    'scene_ch13_03_wati_date_3_end': {
        sceneId: 'scene_ch13_03_wati_date_3_end',
        narratorText: ["သင်တို့နှစ်ယောက်တည်းကျန်ခဲ့သည်။ ဝတီက သင့်ကိုကြည့်နေသည်။ သူမအကြည့်ကပိုပြီးလေးနက်နေသည်။"],
        dialogue: [
            { character: "ဝတီ", line: "ကျွန်မ... အတည်တကျဆက်ဆံရေးတစ်ခုကိုရှာနေတာကြာပြီ။ ကျွန်မကကစားပွဲတွေမကြိုက်ဘူး။ ကျွန်မကတည်ငြိမ်ပြီးရိုးသားတဲ့လူတစ်ယောက်ကိုလိုချင်တယ်။ ရှင်လိုပေါ့။" }
        ],
        internalMonologue: "သူမကတော်တော်လေးပွင့်လင်းတာပဲ။",
        playerChoices: [
            { text: "သူမလက်ကိုဆုပ်ကိုင်လိုက်သည်။", nextSceneId: 'scene_ch14_01_final_choice_hub', stateUpdates: {keyEvents: ['romance_path_wati']} }
        ]
    },

    // CHAPTER 13, PATH 2: THU THU MAY'S THIRD DATE
    'scene_ch13_01_thuthumay_date_3_intro': {
        sceneId: 'scene_ch13_01_thuthumay_date_3_intro',
        narratorText: [
            "သင်ထွန်းမင်းအောင်နှင့် ဘားတစ်ခုတွင်သောက်နေစဉ် သင့်ဖုန်းမြည်လာသည်။ သုသုမေဖြစ်သည်။",
            "'ဦးဘယ်မှာလဲ! ကျွန်မသူငယ်ချင်းတွေနဲ့ Night Club မှာ! လာခဲ့ပါ!'",
            "ထွန်းမင်းအောင်က သင့်ကို မကောင်းဆိုးဝါးအပြုံးဖြင့်ကြည့်သည်။ 'သွားရအောင်ကွာ။ ပျော်စရာကောင်းမှာ။'"
        ],
        playerChoices: [
            { text: "ဒါကတော့မကောင်းတဲ့အကြံပဲ။ သွားမယ်။", nextSceneId: 'scene_ch13_02_thuthumay_date_3_talk' }
        ]
    },
     'scene_ch13_02_thuthumay_date_3_talk': {
        sceneId: 'scene_ch13_02_thuthumay_date_3_talk',
        narratorText: ["ကလပ်ကဆူညံပြီးလူတွေပြည့်ကျပ်နေသည်။ သုသုမေကသင့်ကိုတွေ့တော့ပြေးဖက်ပြီး သင့်ကို tequila တစ်ခွက်ကမ်းပေးသည်။", "ညကတော့ဝေဝါးသွားသည်။ ကခုန်ခြင်း၊ သောက်ခြင်း၊ ရယ်မောခြင်းတွေနဲ့။ ညနက်လာတော့ သုသုမေကတော်တော်လေးမူးနေပြီ။"],
        dialogue: [
            { character: "သုသုမေ", line: "ဦး... ကျွန်မဦးကိုတကယ်သဘောကျတယ်။ ဦးကတခြားလူတွေနဲ့မတူဘူး။ ကျွန်မနဲ့ဒီညအတူတူရှိပေးပါလား?" }
        ],
        internalMonologue: "သူမကမူးနေတယ်။ သူမဘာပြောနေလဲသူမကိုယ်တိုင်သိမှာမဟုတ်ဘူး။ ငါအခွင့်အရေးမယူသင့်ဘူး။",
        playerChoices: [
            { text: "\"လာ၊ ငါမင်းကိုအိမ်ပြန်ပို့ပေးမယ်။\"", nextSceneId: 'scene_ch13_03_thuthumay_date_3_end', stateUpdates: {relationshipScores: [{character: 'thuThuMay', change: 3}]} },
            { text: "\"မင်းအရမ်းမူးနေပြီ။\"", nextSceneId: 'scene_ch13_03_thuthumay_date_3_end' }
        ]
    },
    'scene_ch13_03_thuthumay_date_3_end': {
        sceneId: 'scene_ch13_03_thuthumay_date_3_end',
        narratorText: ["သင်သူမကို taxi ငှားပြီးသူမအိမ်ကိုလိုက်ပို့ပေးသည်။ သူမကသင့်ပခုံးပေါ်မှာအိပ်ပျော်နေသည်။", "သင်သူမကိုသူမတိုက်ခန်းရှေ့မှာချပေးလိုက်သည်။ သူမကသင့်ကိုမော့ကြည့်သည်။", "သူမကသင့်ပါးကိုနမ်းပြီး သင့်နားထဲမှာတိုးတိုးလေးပြောလိုက်သည်။"],
        dialogue: [
            { character: "သုသုမေ", line: "ကျေးဇူးတင်ပါတယ်။ ဦးကလူကောင်းတစ်ယောက်ပဲ။" }
        ],
        playerChoices: [
            { text: "သူမကိုပြုံးပြပြီးထွက်လာခဲ့သည်။", nextSceneId: 'scene_ch14_01_final_choice_hub', stateUpdates: {keyEvents: ['romance_path_thuthumay']} }
        ]
    },

    // CHAPTER 13, PATH 3: HNIN PWINT'S THIRD DATE
    'scene_ch13_01_hninpwint_date_3_intro': {
        sceneId: 'scene_ch13_01_hninpwint_date_3_intro',
        narratorText: ["နှင်းပွင့်ကသင့်ကို message ပို့သည်: 'ငါ Excel spreadsheet အသစ်တစ်ခုလုပ်နေတယ်။ မင်းရဲ့ဘား inventory အတွက်။ ငါမင်းကိုဘယ်လိုသုံးရမလဲဆိုတာသင်ပေးချင်တယ်။'", "သူမသင့်ဘားကိုရောက်လာသည်။ ထွန်းကိုကိုလည်းရှိနေသည်။"],
        dialogue: [
            { character: "ထွန်းကိုကို", line: "ဝိုး! အချစ်ငှက်နှစ်ကောင်အတူတူအလုပ်လုပ်နေကြတာပဲ! ငါမနှောင့်ယှက်တော့ဘူး!" },
        ],
        internalMonologue: "သူကမျက်စိမှိတ်ပြပြီး 'မင်းအတွက်ဒါကိုငါလုပ်ပေးတာ' ဆိုတဲ့အမူအရာနဲ့ထွက်သွားတယ်။",
        playerChoices: [
            { text: "သူကတော့တကယ်ကိုသိမ်မွေ့တာပဲ။", nextSceneId: 'scene_ch13_02_hninpwint_date_3_talk' }
        ]
    },
    'scene_ch13_02_hninpwint_date_3_talk': {
        sceneId: 'scene_ch13_02_hninpwint_date_3_talk',
        narratorText: ["သူမက laptop ကိုဖွင့်ပြီး သင့်ကို pivot tables တွေ၊ VLOOKUP တွေအကြောင်းရှင်းပြသည်။ သင်ကနားမလည်သလိုဟန်ဆောင်နေပေမယ့် သူမရဲ့စိတ်အားထက်သန်မှုကိုကြည့်ရတာကိုသင်သဘောကျနေသည်။", "သူမက formula တစ်ခုကိုရှင်းပြဖို့ သင့်ဘက်ကိုလှည့်လိုက်သည်။ သင်တို့မျက်နှာတွေကလက်မအနည်းငယ်ပဲကွာတော့သည်။"],
        internalMonologue: "အိုး။ ငါတို့တော်တော်နီးကပ်နေတာပဲ။",
        playerChoices: [
            { text: "သူမကိုစိုက်ကြည့်နေလိုက်သည်။", nextSceneId: 'scene_ch13_03_hninpwint_date_3_end' },
            { text: "ချောင်းဟန့်ပြီး နောက်ဆုတ်လိုက်သည်။", nextSceneId: 'scene_ch13_03_hninpwint_date_3_end', stateUpdates: {relationshipScores: [{character: 'hninPwint', change: -1}]} }
        ]
    },
    'scene_ch13_03_hninpwint_date_3_end': {
        sceneId: 'scene_ch13_03_hninpwint_date_3_end',
        narratorText: ["လေထုကတင်းမာနေသည်။ သင်တို့နှစ်ယောက်လုံးမလှုပ်မယှက်ရပ်နေကြသည်။ သင်ရှေ့နည်းနည်းတိုးလိုက်သလို သူမလည်းတိုးလာသည်။", "ဒါပေမဲ့နောက်ဆုံးلحظةမှာ သူမကမျက်လုံးပြူးပြီးနောက်ဆုတ်လိုက်သည်။ သူမပါးတွေကပန်းရောင်ဖြစ်နေသည်။", "'ကျွန်မ... ကျွန်မသွားတော့မယ်' ဟုသူမပြောပြီး ပစ္စည်းတွေသိမ်းကာ အမြန်ထွက်သွားသည်။"],
        playerChoices: [
            { text: "ဒါကတော့... မမျှော်လင့်ထားဘူး။", nextSceneId: 'scene_ch14_01_final_choice_hub', stateUpdates: {keyEvents: ['romance_path_hninpwint']} }
        ]
    },

     // CHAPTER 13, PATH 4: POE LAY'S THIRD DATE
     'scene_ch13_01_poelay_date_3_intro': {
        sceneId: 'scene_ch13_01_poelay_date_3_intro',
        narratorText: [
            "သင်ပိုးလေးကိုဖုန်းခေါ်ပြီး တတိယအကြိမ်ဒိတ်လုပ်ရန်ပြောသည်။ သူမကလက်ခံသော်လည်း အနည်းငယ်တွေဝေနေသည်။",
            "'ဒီတစ်ခါတော့ကျွန်မသမီးလေးကိုအဖွားအိမ်မှာထားခဲ့မယ်' ဟုသူမပြောသည်။ 'ကျွန်မတို့နှစ်ယောက်တည်းစကားပြောဖို့အချိန်လိုတယ်လို့ထင်တယ်။'"
        ],
        dialogue: [
            { character: "ပိုးလေး", line: "ကျွန်မတို့... ရိုးရိုးရှင်းရှင်းပဲနေကြရအောင်။ ညစာစားပြီးစကားပြောကြတာပေါ့။" }
        ],
        playerChoices: [
            { text: "ကောင်းတာပေါ့။", nextSceneId: 'scene_ch13_02_poelay_date_3_talk' }
        ]
    },
    'scene_ch13_02_poelay_date_3_talk': {
        sceneId: 'scene_ch13_02_poelay_date_3_talk',
        narratorText: ["သင်တို့တိတ်ဆိတ်သောစားသောက်ဆိုင်တစ်ခုတွင်ညစာစားကြသည်။ အစပိုင်းတွင်အခြေအနေကအနည်းငယ်အဆင်မပြေဖြစ်နေသည်။"],
        dialogue: [
            { character: "ပိုးလေး", line: "ဟိုနေ့ကအထင်လွဲမှုအတွက်ကျွန်မတကယ်စိတ်မကောင်းပါဘူး။" }
        ],
        playerChoices: [
            { text: "\"ဘာမှတောင်းပန်စရာမလိုပါဘူး။ ငါတို့ကတစ်ယောက်နဲ့တစ်ယောက်ပြန်ရင်းနှီးနေကြတာပဲ။ အချိန်ယူပါ။\"", nextSceneId: 'scene_ch13_03_poelay_date_3_end', stateUpdates: {relationshipScores: [{character: 'poeLay', change: 1}]} },
            { text: "\"ငါ့ဘက်ကလည်း အဆင်မပြေဖြစ်ခဲ့တာတွေရှိပါတယ်။ ငါ့သူငယ်ချင်းတွေသာမရှိရင်ငါအိမ်ထဲကတောင်ထွက်မှာမဟုတ်ဘူး။\"", nextSceneId: 'scene_ch13_03_poelay_date_3_end', stateUpdates: {relationshipScores: [{character: 'poeLay', change: 2}]} }
        ]
    },
    'scene_ch13_03_poelay_date_3_end': {
        sceneId: 'scene_ch13_03_poelay_date_3_end',
        narratorText: ["စကားဝိုင်းကပိုပြီးပွင့်လင်းလာသည်။ သူမကသူမရဲ့အိမ်ထောင်ရေး၊ အိပ်မက်တွေနဲ့သူမသမီးလေးအတွက်မျှော်လင့်ချက်တွေအကြောင်းပြောပြသည်။ သင်ကသင့်ရဲ့အထီးကျန်မှု၊ ကြောက်ရွံ့မှုတွေနဲ့သင်တကယ်ဘာလိုချင်လဲဆိုတာမသိတဲ့အကြောင်းပြောပြသည်။"],
        dialogue: [
            { character: "ပိုးလေး", line: "ကျွန်မတို့နှစ်ယောက်လုံးကနည်းနည်းတော့ပျက်စီးနေကြတာပဲနော်?" }
        ],
        playerChoices: [
            { text: "\"အင်း၊ ဒါပေမဲ့အဲဒါကငါတို့ကိုပိုစိတ်ဝင်စားစရာကောင်းစေတာပေါ့။\"", nextSceneId: 'scene_ch14_01_final_choice_hub', stateUpdates: {keyEvents: ['romance_path_poelay']} }
        ]
    }
};