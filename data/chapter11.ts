import type { Scene } from '../types';

export const chapter11Data: Record<string, Scene> = {
    // CHAPTER 11: THE APOLOGY TOUR
    'scene_ch11_01_apology_tour_choice': {
        sceneId: 'scene_ch11_01_apology_tour_choice',
        narratorText: ["သင်အသက်ပြင်းပြင်းရှူလိုက်သည်။ ထက်နိုင်ကမှန်တယ်။ သင်ကြောက်နေတာကိုရပ်ပြီး တစ်ခုခုလုပ်ရမယ်။", "ဒါပေမဲ့ဘယ်ကစရမလဲ? မင်းရဲ့သူငယ်ချင်းတွေဖျက်ဆီးခဲ့တဲ့ဆက်ဆံရေးလေးခုရှိတယ်။"],
        internalMonologue: "ငါတစ်ယောက်ချင်းစီကိုတောင်းပန်ရမယ်။ ဒါပေမဲ့ဘယ်သူ့ကိုအရင်တောင်းပန်ရမလဲ?",
        playerChoices: [
            { text: "ဝတီကိုအရင်ဖုန်းခေါ်မယ်။ သူမကအယဉ်ကျေးဆုံးဖြစ်နိုင်တယ်။", nextSceneId: 'scene_ch11_02_apology_wati' },
            { text: "သုသုမေကိုစာပို့မယ်။ သူမကဒေါသအကြာကြီးမထွက်လောက်ဘူး။", nextSceneId: 'scene_ch11_02_apology_thuthumay' },
            { text: "နှင်းပွင့်ကိုအီးမေးလ်ပို့မယ်။ သူမကယုတ္တိရှိတဲ့ရှင်းပြချက်ကိုတန်ဖိုးထားလောက်တယ်။", nextSceneId: 'scene_ch11_02_apology_hninpwint' },
            { text: "ပိုးလေးကိုဖုန်းခေါ်မယ်။ ဒါကအရေးအကြီးဆုံးပဲ။", nextSceneId: 'scene_ch11_02_apology_poelay' }
        ]
    },

    // Wati's Apology Path
    'scene_ch11_02_apology_wati': {
        sceneId: 'scene_ch11_02_apology_wati',
        narratorText: ["သင်ဝတီကိုဖုန်းခေါ်လိုက်သည်။ သူမအသံကအေးစက်နေသည်။"],
        dialogue: [{ character: "ဝတီ", line: "ဟယ်လို။" }],
        playerChoices: [
            { text: "\"ဝတီ၊ ကျွန်တော်ပါ။ သောကြာနေ့ကဖြစ်ခဲ့တာတွေအတွက်တောင်းပန်ချင်လို့ပါ။ ကျွန်တော့်သူငယ်ချင်းတွေက... သူတို့ကလူကောင်းတွေပါ၊ ဒါပေမဲ့နည်းနည်းတော့... အသုံးမကျဘူး။\"", nextSceneId: 'scene_ch11_03_wati_reaction' }
        ]
    },
    'scene_ch11_03_wati_reaction': {
        sceneId: 'scene_ch11_03_wati_reaction',
        narratorText: ["ဖုန်းထဲတွင် တိတ်ဆိတ်နေသည်။"],
        dialogue: [{ character: "ဝတီ", line: "ကျွန်မနားလည်ပါတယ်။ ဒါပေမဲ့အဲဒါကတော်တော်လေးအဆင်မပြေဖြစ်စေခဲ့တယ်။ ကျွန်မကိုအကဲဖြတ်ခံနေရသလိုပဲ။" }],
        playerChoices: [
            { text: "\"မဟုတ်တာ။ မင်းကိုအကဲဖြတ်နေတာမဟုတ်ဘူး။ သူတို့ကအရူးတွေ။ ငါမင်းကိုထပ်တွေ့ပြီးတောင်းပန်ခွင့်ပြုပါ။ ကော်ဖီတစ်ခွက်လောက်... ငါတို့နှစ်ယောက်တည်း?\"", nextSceneId: 'scene_ch12_01_fork_in_the_road', stateUpdates: { relationshipScores: [{ character: 'wati', change: 2 }], keyEvents: ['apology_successful_wati'] } },
            { text: "\"ကျွန်တော်တောင်းပန်ပါတယ်။\"", nextSceneId: 'scene_ch11_04_apology_tour_continue', stateUpdates: { relationshipScores: [{ character: 'wati', change: -1 }], keyEvents: ['apology_failed_wati'] } }
        ]
    },

    // Thu Thu May's Apology Path
    'scene_ch11_02_apology_thuthumay': {
        sceneId: 'scene_ch11_02_apology_thuthumay',
        narratorText: [
            "သင်သုသုမေကိုစာပို့သည်: 'ဟေး၊ သောကြာနေ့ကအတွက်တောင်းပန်ပါတယ်။ ငါ့သူငယ်ချင်းတွေကအရူးတွေပဲ။'",
            "သူမချက်ချင်းစာပြန်ပို့သည်။"
        ],
        dialogue: [{ character: "သုသုမေ", line: "LOL! ရပါတယ်။ ရှယ်ရယ်ရတယ်။ ဦးရဲ့သူငယ်ချင်းတွေကဇာတ်ကားထဲကလိုပဲ! ဒါပေမဲ့နောက်တစ်ခါတော့ကျွန်မတို့ကိုတစ်ယောက်ချင်းပဲဒိတ်ပါနော် ;) " }],
        playerChoices: [
            { text: "သက်ပြင်းချလိုက်သည်။ အနည်းဆုံးတော့တစ်ယောက်ကတော့ပေါ့ပါးနေသေးတယ်။", nextSceneId: 'scene_ch11_04_apology_tour_continue', stateUpdates: { relationshipScores: [{ character: 'thuThuMay', change: 1 }], keyEvents: ['apology_successful_thuthumay'] } }
        ]
    },

    // Hnin Pwint's Apology Path
    'scene_ch11_02_apology_hninpwint': {
        sceneId: 'scene_ch11_02_apology_hninpwint',
        narratorText: ["သင်နှင်းပွင့်ကိုရှည်လျားသောအီးမေးလ်တစ်စောင်ရေးလိုက်သည်၊ အခြေအနေကိုရှင်းပြပြီး သင့်သူငယ်ချင်းတွေရဲ့မအောင်မြင်တဲ့ 'efficiency' ကြိုးပမ်းမှုကိုဝန်ခံလိုက်သည်။", "နာရီအနည်းငယ်အကြာတွင်သင့်ကိုအီးမေးလ်ပြန်ပို့သည်။"],
        dialogue: [{ character: "နှင်းပွင့်", line: "သန့်လင်းစိုး၊ မင်းရဲ့ system analysis ကမှန်ကန်ပါတယ်။ input variables တွေ (ငါတို့) ကမကိုက်ညီခဲ့ဘူး၊ ပြီးတော့ process (မင်းသူငယ်ချင်းတွေ) ကအမှားအယွင်းများစွာနဲ့ပြည့်နေတယ်။ output ကခန့်မှန်းနိုင်တဲ့အတိုင်းဘေးအန္တရာယ်တစ်ခုပဲ။ မင်းရဲ့ယုတ္တိရှိတဲ့ချဉ်းကပ်မှုကိုငါတန်ဖိုးထားတယ်။" }],
        playerChoices: [
            { text: "ဒါကတော့... တောင်းပန်တာကိုလက်ခံတယ်လို့ပြောတာပဲထင်တယ်။", nextSceneId: 'scene_ch11_04_apology_tour_continue', stateUpdates: { relationshipScores: [{ character: 'hninPwint', change: 1 }], keyEvents: ['apology_successful_hninpwint'] } }
        ]
    },

    // Poe Lay's Apology Path
    'scene_ch11_02_apology_poelay': {
        sceneId: 'scene_ch11_02_apology_poelay',
        narratorText: ["သင်ပိုးလေးကိုဖုန်းခေါ်လိုက်သည်။ သင့်နှလုံးသားကတဒုတ်ဒုတ်ခုန်နေသည်။"],
        dialogue: [{ character: "ပိုးလေး", line: "ဟယ်လို?" }],
        playerChoices: [
            { text: "\"ပိုးလေး၊ ငါပါ။ သောကြာနေ့ညကအတွက်ငါအရမ်းတောင်းပန်ပါတယ်။ ငါ့မှာဆင်ခြေမရှိဘူး။ ငါ့သူငယ်ချင်းတွေကနယ်ကျော်လိုက်တာ။ မင်းနဲ့မင်းရဲ့အချိန်ကိုငါလေးစားပါတယ်။\"", nextSceneId: 'scene_ch11_03_poelay_reaction' }
        ]
    },
    'scene_ch11_03_poelay_reaction': {
        sceneId: 'scene_ch11_03_poelay_reaction',
        narratorText: ["သူမခဏတိတ်ဆိတ်နေသည်။"],
        dialogue: [{ character: "ပိုးလေး", line: "အဲဒါက... ထူးဆန်းခဲ့တယ်။ ကျွန်မပြန်တွေ့ဖို့သဘောတူခဲ့တာအဲဒါမဟုတ်ဘူး။ ကျွန်မအချိန်သိပ်မရှိဘူး သန့်လင်းစိုး။" }],
        playerChoices: [
            { text: "\"ငါသိပါတယ်။ ဒါကြောင့်ပဲငါတောင်းပန်တာ။ ငါမင်းကိုလေးစားတယ်။ မင်းရဲ့အခြေအနေကိုငါလေးစားတယ်။ ငါနောက်တစ်ခါအခွင့်အရေးထပ်လိုချင်ပါတယ်။ တကယ့်အခွင့်အရေးပေါ့။\"", nextSceneId: 'scene_ch12_01_fork_in_the_road', stateUpdates: { relationshipScores: [{ character: 'poeLay', change: 2 }], keyEvents: ['apology_successful_poelay'] } },
            { text: "\"ငါနားလည်ပါတယ်။ တောင်းပန်ပါတယ်။\"", nextSceneId: 'scene_ch11_04_apology_tour_continue', stateUpdates: { keyEvents: ['apology_failed_poelay'] } }
        ]
    },

    // Continue Point
    'scene_ch11_04_apology_tour_continue': {
        sceneId: 'scene_ch11_04_apology_tour_continue',
        narratorText: ["သင်အနည်းဆုံးတော့အပျက်အစီးတွေကိုရှင်းလင်းဖို့ကြိုးစားခဲ့သည်။ အခုဘာဆက်လုပ်မလဲ?"],
        playerChoices: [
            { text: "နောက်နေ့ကိုစောင့်ဆိုင်း...", nextSceneId: 'scene_ch12_01_fork_in_the_road' }
        ]
    }
};