import type { Scene } from '../types';

export const chapter13Data: Record<string, Scene> = {
    // CHAPTER 13, PATH 1: WATI'S THIRD DATE
    'scene_ch13_01_wati_date_3_intro': {
        sceneId: 'scene_ch13_01_wati_date_3_intro',
        narratorText: [
            "သင်ဝတီနှင့်တွေ့ရန် သူမရွေးချယ်ထားသောနေရာသို့သွားလိုက်သည်။ ထိုနေရာက စာအုပ်ဆိုင်အသေးလေးတစ်ခုဖြစ်ပြီး ကော်ဖီနံ့သင်းသင်းလေးရနေသည်။ သူမကထောင့်တစ်နေရာက သက်သောင့်သက်သာရှိသောထိုင်ခုံတစ်ခုတွင်ထိုင်နေပြီး စာအုပ်တစ်အုပ်ဖတ်နေသည်။",
            "သူမကသင့်ကိုတွေ့သောအခါပြုံးလိုက်သည်။ ယခင်ကထက်ပို၍ တည်ငြိမ်ပြီး သက်သောင့်သက်သာရှိနေပုံရသည်။"
        ],
        dialogue: [
            { character: "ဝတီ", line: "ရှင့်ကိုဒီနေရာမှာတွေ့ရတာဝမ်းသာပါတယ်။ ဒါကကျွန်မအကြိုက်ဆုံးနေရာတွေထဲကတစ်ခုပဲ။" }
        ],
        playerChoices: [
            { text: "\"ဒါက... အေးချမ်းတယ်။ ညဈေးတန်းနဲ့တော့တော်တော်ကွာတယ်။\"", nextSceneId: 'scene_ch13_02_wati_date_3_talk' },
            { text: "\"ငါလည်းစာအုပ်တွေကြိုက်ပါတယ်။ ဒါပေမဲ့များသောအားဖြင့်တော့ချက်ပြုတ်နည်းစာအုပ်တွေပေါ့။\"", nextSceneId: 'scene_ch13_02_wati_date_3_talk', stateUpdates: {relationshipScores: [{character: 'wati', change: 1}]} }
        ]
    },
    'scene_ch13_02_wati_date_3_talk': {
        sceneId: 'scene_ch13_02_wati_date_3_talk',
        narratorText: ["သင်တို့နှစ်ယောက်ကော်ဖီသောက်ရင်းစကားပြောကြသည်။ ဒီတစ်ခါတော့ပိုပြီးလွယ်ကူသွားသည်။ အဆင်မပြေတဲ့တိတ်ဆိတ်မှုတွေမရှိတော့ဘူး။"],
        dialogue: [
            { character: "ဝတီ", line: "ကျွန်မစဉ်းစားနေမိတာက... ရှင့်သူငယ်ချင်းတွေကဘာလို့ရှင့်အတွက်ဒီလောက်တောင်စိုးရိမ်နေကြတာလဲ? ရှင်ကအဆင်ပြေပုံရပါတယ်။" }
        ],
        playerChoices: [
            { text: "သူမကိုအမှန်အတိုင်းပြောပြလိုက်သည်။ \"ဒါကရှုပ်ထွေးတယ်။ ဆယ်နှစ်လောက်ကြာတဲ့ဆက်ဆံရေးတစ်ခုပြီးကတည်းကငါဘယ်သူနဲ့မှမဒိတ်တော့ဘူး။ သူတို့ကငါ့ကိုကူညီနေတယ်လို့ထင်နေကြတာ။\"", nextSceneId: 'scene_ch13_03_wati_date_3_end', stateUpdates: {relationshipScores: [{character: 'wati', change: 2}]} },
            { text: "\"သူတို့ကပျင်းနေလို့ပါ။ ငါကသူတို့ရဲ့ကစားစရာပဲ။\"", nextSceneId: 'scene_ch13_03_wati_date_3_end' }
        ]
    },
    'scene_ch13_03_wati_date_3_end': {
        sceneId: 'scene_ch13_03_wati_date_3_end',
        narratorText: ["သူမကသင့်လက်ကိုဆုပ်ကိုင်လိုက်သည်။ သူမရဲ့ထိတွေ့မှုကနွေးထွေးပြီးနှစ်သိမ့်မှုပေးသည်။"],
        dialogue: [
            { character: "ဝတီ", line: "လူတိုင်းမှာအတိတ်ဆိုတာရှိပါတယ်။ အရေးကြီးတာကအဲဒါကရှင့်ကိုဘယ်လိုပုံဖော်သလဲဆိုတာပါပဲ။ ပြီးတော့ရှင့်ကိုကြည့်ရတာ... ရှင်ကလူကောင်းတစ်ယောက်ပါ။" }
        ],
        playerChoices: [
            { text: "သူမလက်ကိုပြန်ညှစ်လိုက်သည်။", nextSceneId: 'scene_ch14_01_wati_final_choice', stateUpdates: {keyEvents: ['romance_path_wati']} }
        ]
    },

    // CHAPTER 13, PATH 2: THU THU MAY'S THIRD DATE
    'scene_ch13_01_thuthumay_date_3_intro': {
        sceneId: 'scene_ch13_01_thuthumay_date_3_intro',
        narratorText: [
            "သုသုမေကသင့်ကို message ပို့သည်: 'ကားအဆင်သင့်ပြင်ထား! ငါတို့ခရီးထွက်ကြမယ်!'",
            "နောက်တစ်နာရီအကြာတွင် သူမကသင့်ကားထဲတွင်ထိုင်နေပြီး သင်မြို့ပြင်သို့မောင်းထွက်နေသည်။ သူမကတက်ကြွတဲ့ playlist တစ်ခုဖွင့်ထားပြီး ပြတင်းပေါက်အပြင်ဘက်ကိုကြည့်ကာပျော်ရွှင်နေသည်။"
        ],
        dialogue: [
            { character: "သုသုမေ", line: "ဒီလိုမျိုးထွက်ရတာကောင်းတယ်မလား? မြို့ထဲမှာနေရတာပျင်းစရာကြီး!" }
        ],
        playerChoices: [
            { text: "\"ငါတို့ဘယ်သွားနေလဲဆိုတာတော့သိခွင့်ရှိမယ်ထင်တယ်။\"", nextSceneId: 'scene_ch13_02_thuthumay_date_3_talk' },
            { text: "\"မင်းဘေးမှာရှိနေရင်တော့ဘယ်နေရာမဆိုကောင်းပါတယ်။\"", nextSceneId: 'scene_ch13_02_thuthumay_date_3_talk', stateUpdates: {relationshipScores: [{character: 'thuThuMay', change: 1}]} }
        ]
    },
     'scene_ch13_02_thuthumay_date_3_talk': {
        sceneId: 'scene_ch13_02_thuthumay_date_3_talk',
        narratorText: ["သင်တို့ကမ်းခြေမြို့ငယ်လေးတစ်ခုသို့ရောက်လာသည်။ သင်တို့ကမ်းခြေမှာလမ်းလျှောက်ကြပြီး ရေခဲမုန့်စားကြသည်။ အသက်ကွာခြားမှုကအရေးမကြီးတော့သလိုပဲ။"],
        dialogue: [
            { character: "သုသုမေ", line: "ဦးသိလား၊ ကျွန်မသူငယ်ချင်းတွေကဦးကိုသဘောကျကြတယ်။ သူတို့ကဦးက 'တည်ငြိမ်ပြီးရင့်ကျက်တယ်' လို့ပြောတယ်။" }
        ],
        playerChoices: [
            { text: "\"အဲဒါက 'အဘိုးကြီး' လို့ပြောတာပဲ။\"", nextSceneId: 'scene_ch13_03_thuthumay_date_3_end' },
            { text: "\"သူတို့ကငါ့ကိုသဘောကျတာဝမ်းသာပါတယ်။ ငါလည်းသူတို့ကိုသဘောကျပါတယ်။\"", nextSceneId: 'scene_ch13_03_thuthumay_date_3_end', stateUpdates: {relationshipScores: [{character: 'thuThuMay', change: 1}]} }
        ]
    },
    'scene_ch13_03_thuthumay_date_3_end': {
        sceneId: 'scene_ch13_03_thuthumay_date_3_end',
        narratorText: ["နေဝင်သွားတော့ သူမကသင့်ပခုံးပေါ်ခေါင်းမှီလိုက်သည်။"],
        dialogue: [
            { character: "သုသုမေ", line: "ကျွန်မတို့ကြားကအသက်ကွာခြားမှုကတခါတလေကျွန်မကိုစိုးရိမ်စေတယ်။ ဒါပေမဲ့... ဦးနဲ့အတူရှိနေရင်တော့ပျော်တယ်။" }
        ],
        playerChoices: [
            { text: "သူမကိုဖက်ထားလိုက်သည်။", nextSceneId: 'scene_ch14_01_thuthumay_final_choice', stateUpdates: {keyEvents: ['romance_path_thuthumay']} }
        ]
    },

    // CHAPTER 13, PATH 3: HNIN PWINT'S THIRD DATE
    'scene_ch13_01_hninpwint_date_3_intro': {
        sceneId: 'scene_ch13_01_hninpwint_date_3_intro',
        narratorText: ["နှင်းပွင့်ကသင့်ကို message ပို့သည်: 'ငါ့ code အလုပ်လုပ်သွားပြီ။ မင်းကိုဘီယာတစ်ခွက်ဝယ်တိုက်ချင်တယ်။ ကျေးဇူးတင်တဲ့အနေနဲ့။'", "သင်ဘားမှာတွေ့ကြသည်။ သူမကပုံမှန်ထက်ပိုပြီးပေါ့ပေါ့ပါးပါးဖြစ်နေသည်။"],
        dialogue: [
            { character: "နှင်းပွင့်", line: "မင်းရဲ့ 'ပြဿနာကိုရှင်းပြခြင်း' နည်းလမ်းကတကယ်အလုပ်ဖြစ်ခဲ့တယ်။ ငါကပြဿနာကိုအရမ်းနီးကပ်လွန်းနေခဲ့တာ။" }
        ],
        playerChoices: [
            { text: "\"တွေ့လား? ငါကကုထုံးဆရာတစ်ယောက်ဖြစ်သင့်တာ။\"", nextSceneId: 'scene_ch13_02_hninpwint_date_3_talk' },
            { text: "\"ဝမ်းသာပါတယ်။ မင်းအနားယူနိုင်ပြီဆိုတော့။\"", nextSceneId: 'scene_ch13_02_hninpwint_date_3_talk', stateUpdates: {relationshipScores: [{character: 'hninPwint', change: 1}]} }
        ]
    },
    'scene_ch13_02_hninpwint_date_3_talk': {
        sceneId: 'scene_ch13_02_hninpwint_date_3_talk',
        narratorText: ["စကားဝိုင်းကအလုပ်အကြောင်းကနေဘဝအကြောင်းကိုရောက်သွားသည်။ သူမရဲ့ရည်မှန်းချက်တွေ၊ ကြောက်ရွံ့မှုတွေအကြောင်းပြောပြသည်။"],
        dialogue: [
            { character: "နှင်းပွင့်", line: "ငါ့ကိုလူတွေကစက်ရုပ်တစ်ကောင်လိုထင်ကြတယ်။ ငါကခံစားချက်မရှိဘူး၊ ယုတ္တိပဲရှိတယ်လို့။" }
        ],
        playerChoices: [
            { text: "\"မင်းကစက်ရုပ်မဟုတ်ပါဘူး။ မင်းကစိတ်အားထက်သန်တဲ့သူတစ်ယောက်ပဲ။ အဲဒါကမတူဘူး။\"", nextSceneId: 'scene_ch13_03_hninpwint_date_3_end', stateUpdates: {relationshipScores: [{character: 'hninPwint', change: 2}]} },
            { text: "\"နည်းနည်းတော့ဟုတ်တယ်။ ဒါပေမဲ့ငါကြိုက်တဲ့စက်ရုပ်အမျိုးအစားပေါ့။\"", nextSceneId: 'scene_ch13_03_hninpwint_date_3_end', stateUpdates: {relationshipScores: [{character: 'hninPwint', change: -1}]} }
        ]
    },
    'scene_ch13_03_hninpwint_date_3_end': {
        sceneId: 'scene_ch13_03_hninpwint_date_3_end',
        narratorText: ["သူမကသင့်ကိုစိုက်ကြည့်နေသည်။ သူမမျက်လုံးထဲမှာသင်အရင်ကမမြင်ဖူးတဲ့အားနည်းမှုတစ်ခုရှိနေသည်။"],
        dialogue: [
            { character: "နှင်းပွင့်", line: "မင်း... ငါ့ကိုနားလည်ပေးတယ်။ လူအများစုကအဲလိုမဟုတ်ဘူး။" }
        ],
        playerChoices: [
            { text: "သူမလက်ကိုဆုပ်ကိုင်လိုက်သည်။", nextSceneId: 'scene_ch14_01_hninpwint_final_choice', stateUpdates: {keyEvents: ['romance_path_hninpwint']} }
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
            { character: "ပိုးလေး", line: "ကျွန်မတောင်းပန်ပါတယ်။ ကျွန်မ... ဒိတ်လုပ်တာနဲ့အဆက်ပြတ်နေတာကြာပြီ။ အထူးသဖြင့်... အခုကျွန်မဘဝကဒီလိုဖြစ်နေတော့။" }
        ],
        playerChoices: [
            { text: "\"ဘာမှတောင်းပန်စရာမလိုပါဘူး။ ငါတို့ကတစ်ယောက်နဲ့တစ်ယောက်ပြန်ရင်းနှီးနေကြတာပဲ။ အချိန်ယူပါ။\"", nextSceneId: 'scene_ch13_03_poelay_date_3_end', stateUpdates: {relationshipScores: [{character: 'poeLay', change: 1}]} },
            { text: "\"ငါလည်းအဲလိုပါပဲ။ ငါ့သူငယ်ချင်းတွေသာမရှိရင်ငါအိမ်ထဲကတောင်ထွက်မှာမဟုတ်ဘူး။\"", nextSceneId: 'scene_ch13_03_poelay_date_3_end', stateUpdates: {relationshipScores: [{character: 'poeLay', change: 2}]} }
        ]
    },
    'scene_ch13_03_poelay_date_3_end': {
        sceneId: 'scene_ch13_03_poelay_date_3_end',
        narratorText: ["စကားဝိုင်းကပိုပြီးပွင့်လင်းလာသည်။ သူမကသူမရဲ့အိမ်ထောင်ရေး၊ အိပ်မက်တွေနဲ့သူမသမီးလေးအတွက်မျှော်လင့်ချက်တွေအကြောင်းပြောပြသည်။ သင်ကသင့်ရဲ့အထီးကျန်မှု၊ ကြောက်ရွံ့မှုတွေနဲ့သင်တကယ်ဘာလိုချင်လဲဆိုတာမသိတဲ့အကြောင်းပြောပြသည်။"],
        dialogue: [
            { character: "ပိုးလေး", line: "ကျွန်မတို့နှစ်ယောက်လုံးကနည်းနည်းတော့ပျက်စီးနေကြတာပဲနော်?" }
        ],
        playerChoices: [
            { text: "\"အင်း၊ ဒါပေမဲ့အဲဒါကငါတို့ကိုပိုစိတ်ဝင်စားစရာကောင်းစေတာပေါ့။\"", nextSceneId: 'scene_ch14_01_poelay_final_choice', stateUpdates: {keyEvents: ['romance_path_poelay']} }
        ]
    },

    // CHAPTER 13, PATH 5: FRIENDS PATH
    'scene_ch13_01_friends_path_intro': {
        sceneId: 'scene_ch13_01_friends_path_intro',
        narratorText: ["သင်သူငယ်ချင်းတွေကိုကူညီပြီးနောက် သူတို့ကသင့်ကိုဘီယာဝယ်တိုက်သည်။ သူတို့မျက်နှာတွေမှာအပြစ်ရှိတဲ့အရိပ်အယောင်တွေနဲ့။"],
        dialogue: [
            { character: "အောင်ရဲမာန်", line: "ငါတို့တောင်းပန်ပါတယ်။ ငါတို့က... နည်းနည်းလွန်သွားတယ်။" },
            { character: "ထွန်းကိုကို", line: "ငါတို့ကမင်းကိုကူညီချင်ရုံပါပဲ။" }
        ],
        playerChoices: [
            { text: "\"ငါသိပါတယ်။ ဒါပေမဲ့နောက်တစ်ခါငါ့ကိုအရင်မေးပါ။\"", nextSceneId: 'scene_ch13_02_friends_path_end' }
        ]
    },
    'scene_ch13_02_friends_path_end': {
        sceneId: 'scene_ch13_02_friends_path_end',
        narratorText: ["သင်တို့အတူတူထိုင်ပြီးရယ်မောကြသည်။ အချစ်ရေးမပါဝင်ပေမယ့် ဒါကလည်းမှန်ကန်တဲ့ရွေးချယ်မှုတစ်ခုလိုခံစားရသည်။"],
        playerChoices: [
            { text: "ဇာတ်လမ်း၏နောက်ဆုံးအပိုင်းသို့ ဆက်ရန်...", nextSceneId: 'scene_ch14_01_friends_final', stateUpdates: {keyEvents: ['platonic_path_friends']} }
        ]
    },

    // CHAPTER 13, PATH 6: HTET NAING PATH
    'scene_ch13_01_htetnaing_path_intro': {
        sceneId: 'scene_ch13_01_htetnaing_path_intro',
        narratorText: ["သင်ထက်နိုင်ကိုဖုန်းဆက်လိုက်သည်။ 'ဘာမှမလုပ်ဘူး။ မင်းဘားမှာလား? ငါလာခဲ့မယ်။' ဟုသူပြောသည်။", "ဘားပိတ်ပြီးနောက် သင်တို့နှစ်ယောက်တည်းကျန်ခဲ့သည်။ အပြင်ဘက်ကမြို့ရဲ့အသံတွေကတိုးညှင်းနေသည်။"],
        dialogue: [
            { character: "ထက်နိုင်", line: "မင်းဒီနေ့ဒိတ်ရှိတယ်လို့ငါထင်တာ။" }
        ],
        playerChoices: [
            { text: "\"ငါမသွားချင်တော့ဘူး။ ငါဒီအေးဆေးတိတ်ဆိတ်မှုကိုပဲလိုချင်တယ်။\"", nextSceneId: 'scene_ch13_02_htetnaing_path_talk', stateUpdates: {relationshipScores: [{character: 'htetNaing', change: 1}]} },
            { text: "\"ငါ့သူငယ်ချင်းတွေကလည်းအကူအညီလိုနေတယ်။ ဒါပေမဲ့... ငါဒီမှာပဲရှိချင်တယ်။\"", nextSceneId: 'scene_ch13_02_htetnaing_path_talk', stateUpdates: {relationshipScores: [{character: 'htetNaing', change: 2}]} }
        ]
    },
    'scene_ch13_02_htetnaing_path_talk': {
        sceneId: 'scene_ch13_02_htetnaing_path_talk',
        narratorText: ["သင်တို့နှစ်ယောက်စကားပြောကြသည်။ မိန်းကလေးတွေအကြောင်းမဟုတ်ဘူး။ ဘဝအကြောင်း၊ အိပ်မက်တွေအကြောင်း၊ ပြီးတော့အသက် ၃၄ နှစ်မှာလမ်းပျောက်နေတယ်လို့ခံစားရတဲ့အကြောင်း။"],
        dialogue: [
            { character: "ထက်နိုင်", line: "ဘယ်သူမှလမ်းမပျောက်ပါဘူး။ ငါတို့အားလုံးကဒီတိုင်းပဲ... ကိုယ့်လမ်းကိုယ်ရှာနေကြတာ။ တချို့ကမြေပုံနဲ့၊ တချို့က... မင်းသူငယ်ချင်းတွေလိုပေါ့၊ GPS ပျက်နေတဲ့သူတွေ။" },
            { character: "သန့်လင်းစိုး", line: "မင်းကရော? မင်းမှာမြေပုံရှိလား?" },
            { character: "ထက်နိုင်", line: "ငါ့မှာလား? ငါ့မှာကောင်းတဲ့ခရီးသွားဖော်တစ်ယောက်ရှိရင်တော်ပြီ။" }
        ],
        internalMonologue: "သူငါ့ကိုစိုက်ကြည့်နေတယ်။ သူ့အကြည့်က... ကွဲပြားနေတယ်။",
        playerChoices: [
            { text: "ဘာမှမပြောဘဲ သူ့ကိုပြန်ကြည့်လိုက်သည်။", nextSceneId: 'scene_ch13_03_htetnaing_path_end' }
        ]
    },
    'scene_ch13_03_htetnaing_path_end': {
        sceneId: 'scene_ch13_03_htetnaing_path_end',
        narratorText: ["တိတ်ဆိတ်မှုကသက်သောင့်သက်သာရှိနေသည်။ စကားလုံးတွေမလိုအပ်တော့ဘူး။", "ဒီရှုပ်ထွေးနေတဲ့ကမ္ဘာကြီးထဲမှာ တည်ငြိမ်တဲ့နေရာတစ်ခုရှိနေတယ်ဆိုတာသင်သဘောပေါက်လိုက်တယ်။ အဲဒီနေရာကဒီမှာ၊ ဒီလူနဲ့အတူတူပဲ။"],
        playerChoices: [
            { text: "ဆက်ရန်...", nextSceneId: 'scene_ch14_01_htetnaing_final_choice', stateUpdates: {keyEvents: ['romance_path_htetnaing']} }
        ]
    }
};