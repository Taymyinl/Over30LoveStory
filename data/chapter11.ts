import type { Scene } from '../types';

export const chapter11Data: Record<string, Scene> = {
    // CHAPTER 11: THE APOLOGY TOUR
    'scene_ch11_01_apology_tour_choice': {
        sceneId: 'scene_ch11_01_apology_tour_choice',
        narratorText: ["သင်အသက်ပြင်းပြင်းရှူလိုက်သည်။ ထက်နိုင်ကမှန်တယ်။ သင်ကြောက်နေတာကိုရပ်ပြီး ဒီအထင်လွဲမှုကိုရှင်းရမယ်။", "ဒါပေမဲ့ဘယ်ကစရမလဲ?"],
        internalMonologue: "ငါတစ်ယောက်ချင်းစီကိုရှင်းပြရမယ်။ သူတို့နားထောင်ပါ့မလား?",
        playerChoices: [
            { text: "ဝတီကိုအရင်ဖုန်းခေါ်မယ်။ သူမကအကျိုးသင့်အကြောင်းသင့်အရှိဆုံးဖြစ်နိုင်တယ်။", nextSceneId: 'scene_ch11_02_apology_wati' },
            { text: "သုသုမေကိုစာပို့မယ်။ သူမရဲ့တုံ့ပြန်မှုကအသိသာဆုံးဖြစ်လိမ့်မယ်။", nextSceneId: 'scene_ch11_02_apology_thuthumay' },
            { text: "နှင်းပွင့်ကိုအီးမေးလ်ပို့မယ်။ သူမကအချက်အလက်တွေကိုတန်ဖိုးထားလောက်တယ်။", nextSceneId: 'scene_ch11_02_apology_hninpwint' },
            { text: "ပိုးလေးကိုအားပေးစကားပြောမယ်။ သူမကဒီကိစ္စမှာမပါပေမယ့်သူမအပြစ်ရှိသလိုခံစားနေရတယ်။", nextSceneId: 'scene_ch11_02_apology_poelay' },
            { text: "[ဆုံးဖြတ်ချက်] ဘယ်သူမှ မတောင်းပန်နေတော့ဘူး လင်ပဲယူတာ့မယ်။", nextSceneId: 'scene_ch14_02_htetnaing_wedding_prep' },
        ]
    },
    'scene_ch11_01b_talk_to_htetnaing': {
        sceneId: 'scene_ch11_01b_talk_to_htetnaing',
        narratorText: ["သင်ထက်နိုင်ကိုဖုန်းဆက်လိုက်သည်။"],
        dialogue: [
            { character: "သန့်လင်းစိုး", line: "ငါ... ဒီအထင်လွဲမှုကိုရှင်းချင်တယ်။ ဒါပေမဲ့ဘယ်ကစရမလဲမသိဘူး။ ငါမှန်မှန်ကန်ကန်လုပ်ချင်တယ်။" },
            { character: "ထက်နိုင်", line: "ဒါကကောင်းတဲ့ပထမခြေလှမ်းပဲ။ မင်းဘယ်သူ့ရဲ့ထင်မြင်ချက်ကိုအလေးအနက်ထားဆုံးလဲ? မင်းဘယ်သူနဲ့အမှန်အတိုင်းပြန်ဆက်သွယ်ချင်ဆုံးလဲ?" }
        ],
        internalMonologue: "ဘယ်သူနဲ့ငါအမှန်အတိုင်းပြန်ဆက်သွယ်ချင်ဆုံးလဲ? ဒါက... ကောင်းတဲ့မေးခန်းပဲ။",
        playerChoices: [
            { text: "ကျေးဇူးပဲ ထက်နိုင်။ မင်းကအမြဲတမ်းမှန်ကန်တဲ့မေးခွန်းကိုမေးတယ်။", nextSceneId: 'scene_ch11_01_apology_tour_choice_focused', stateUpdates: {relationshipScores: [{character: 'htetNaing', change: 1}]} }
        ]
    },
    'scene_ch11_01_apology_tour_choice_focused': {
        sceneId: 'scene_ch11_01_apology_tour_choice_focused',
        narratorText: ["ထက်နိုင်နဲ့စကားပြောပြီးနောက် သင့်စိတ်ထဲမှာပိုပြီးရှင်းလင်းသွားသည်။"],
        playerChoices: [
            { text: "ဝတီကိုအရင်ဖုန်းခေါ်မယ်။", nextSceneId: 'scene_ch11_02_apology_wati' },
            { text: "သုသုမေကိုစာပို့မယ်။", nextSceneId: 'scene_ch11_02_apology_thuthumay' },
            { text: "နှင်းပွင့်ကိုအီးမေးလ်ပို့မယ်။", nextSceneId: 'scene_ch11_02_apology_hninpwint' },
            { text: "ပိုးလေးကိုအားပေးစကားပြောမယ်။", nextSceneId: 'scene_ch11_02_apology_poelay' }
        ]
    },

    // Wati's Apology Path
    'scene_ch11_02_apology_wati': {
        sceneId: 'scene_ch11_02_apology_wati',
        narratorText: ["သင်ဝတီကိုဖုန်းခေါ်လိုက်သည်။ သူမအသံကအေးစက်နေသည်။"],
        dialogue: [{ character: "ဝတီ", line: "ဟယ်လို။" }],
        playerChoices: [
            { text: "\"ဝတီ၊ ကျွန်တော်ပါ။ ပန်းခြံမှာခင်ဗျားမြင်လိုက်တဲ့အကြောင်းကိုရှင်းပြချင်လို့ပါ။ အဲဒါခင်ဗျားထင်သလိုမဟုတ်ဘူး။\"", nextSceneId: 'scene_ch11_03_wati_reaction' }
        ]
    },
    'scene_ch11_03_wati_reaction': {
        sceneId: 'scene_ch11_03_wati_reaction',
        narratorText: ["သင်အဖြစ်မှန်ကိုရှင်းပြလိုက်သည်။ ပိုးလေးကတက္ကသိုလ်ကသူငယ်ချင်းဟောင်းတစ်ယောက်ဖြစ်ပြီး ကလေးကသူမသမီးဖြစ်ကြောင်းပြောပြလိုက်သည်။"],
        dialogue: [{ character: "ဝတီ", line: "...အိုး။ ကျွန်မ... ကျွန်မအထင်လွဲသွားတာပဲ။ တောင်းပန်ပါတယ်။" }],
        playerChoices: [
            { text: "\"ရပါတယ်။ ဒါကအထင်လွဲစရာကြီးပဲ။ ငါတို့နောက်တစ်ခါထပ်တွေ့ပြီးအစကနေပြန်စလို့ရမလား?\"", nextSceneId: 'scene_ch13_01_wati_date_3_intro', stateUpdates: { relationshipScores: [{ character: 'wati', change: 2 }], keyEvents: ['apology_successful_wati'] } },
            { text: "\"ကျွန်တော်နားလည်ပါတယ်။\"", nextSceneId: 'scene_ch11_04_apology_tour_continue', stateUpdates: { keyEvents: ['apology_failed_wati'] } }
        ]
    },

    // Thu Thu May's Apology Path
    'scene_ch11_02_apology_thuthumay': {
        sceneId: 'scene_ch11_02_apology_thuthumay',
        narratorText: [
            "သင်သုသုမေကိုစာပို့သည်: 'ဟေး၊ ပန်းခြံကိစ္စကအထင်လွဲမှုတစ်ခုပါ။ ငါရှင်းပြခွင့်ရချင်တယ်။'",
            "သူမချက်ချင်းစာပြန်ပို့သည်။"
        ],
        dialogue: [{ character: "သုသုမေ", line: "OMG! ဦးကကလေးအဖေမဟုတ်ဘူးလား? ကျွန်မတော်တော်စိတ်သက်သာရာရသွားပြီ! ကျွန်မကအိမ်ထောင်သည်တွေကိုစိတ်မဝင်စားဘူး LOL!" }],
        playerChoices: [
            { text: "သက်ပြင်းချလိုက်သည်။ အနည်းဆုံးတော့သူမကတော့ပေါ့ပါးနေသေးတယ်။", nextSceneId: 'scene_ch13_01_thuthumay_date_3_intro', stateUpdates: { relationshipScores: [{ character: 'thuThuMay', change: 1 }], keyEvents: ['apology_successful_thuthumay'] } }
        ]
    },

    // Hnin Pwint's Apology Path
    'scene_ch11_02_apology_hninpwint': {
        sceneId: 'scene_ch11_02_apology_hninpwint',
        narratorText: ["သင်နှင်းပွင့်ကိုအဖြစ်မှန်အချက်အလက်အားလုံးနှင့်တကွ အီးမေးလ်တစ်စောင်ရေးလိုက်သည်။", "နာရီအနည်းငယ်အကြာတွင်သင့်ကိုအီးမေးလ်ပြန်ပို့သည်။"],
        dialogue: [{ character: "နှင်းပွင့်", line: "သန့်လင်းစိုး၊ မင်းရဲ့ရှင်းလင်းချက်ကိုလက်ခံရရှိပါတယ်။ ကောက်ချက်: ကျွန်မရဲ့ကနဦးကောက်ချက်ကအချက်အလက်မပြည့်စုံတဲ့အတွက်မှားယွင်းခဲ့ပါတယ်။ ဒီအမှားကိုကျွန်မမှတ်သားထားပါမယ်။" }],
        playerChoices: [
            { text: "ဒါကတော့... တောင်းပန်တာကိုလက်ခံတယ်လို့ပြောတာပဲထင်တယ်။", nextSceneId: 'scene_ch13_01_hninpwint_date_3_intro', stateUpdates: { relationshipScores: [{ character: 'hninPwint', change: 1 }], keyEvents: ['apology_successful_hninpwint'] } }
        ]
    },

    // Poe Lay's Apology Path
    'scene_ch11_02_apology_poelay': {
        sceneId: 'scene_ch11_02_apology_poelay',
        narratorText: ["သင်ပိုးလေးကိုဖုန်းခေါ်လိုက်သည်။"],
        playerChoices: [
            { text: "\"ငါအခြေအနေကိုရှင်းလိုက်ပြီ။ မင်းစိတ်မကောင်းဖြစ်စရာမလိုတော့ဘူး။ ဒါငါ့ပြဿနာ၊ ငါဖြေရှင်းလိုက်ပြီ။\"", nextSceneId: 'scene_ch11_03_poelay_reaction' }
        ]
    },
    'scene_ch11_03_poelay_reaction': {
        sceneId: 'scene_ch11_03_poelay_reaction',
        narratorText: [],
        dialogue: [{ character: "ပိုးလေး", line: "ကျေးဇူးတင်ပါတယ် သန့်လင်းစိုး။ ရှင်က... လူကောင်းတစ်ယောက်ပဲ။" }],
        playerChoices: [
            { text: "\"ငါတို့နှစ်ယောက်အတွက်ငါဒါကိုလုပ်တာ။\"", nextSceneId: 'scene_ch13_01_poelay_date_3_intro', stateUpdates: { relationshipScores: [{ character: 'poeLay', change: 2 }], keyEvents: ['apology_successful_poelay'] } }
        ]
    },

    // Continue Point - This scene is no longer needed as each apology path now branches directly to the next date.
    'scene_ch11_04_apology_tour_continue': {
        sceneId: 'scene_ch11_04_apology_tour_continue',
        narratorText: ["သင်အနည်းဆုံးတော့အပျက်အစီးတွေကိုရှင်းလင်းဖို့ကြိုးစားခဲ့သည်။ အခုဘာဆက်လုပ်မလဲ?"],
        playerChoices: [
            { text: "နောက်နေ့ကိုစောင့်ဆိုင်း...", nextSceneId: 'scene_ch14_01_final_choice_hub' } 
        ]
    }
};