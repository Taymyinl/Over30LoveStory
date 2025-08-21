import type { Scene } from '../types';

export const chapter14Data: Record<string, Scene> = {
    'scene_ch14_01_final_choice_hub': {
        sceneId: 'scene_ch14_01_final_choice_hub',
        narratorText: [
            "ဒီရှုပ်ထွေးတဲ့ခရီးကအဆုံးသတ်တော့မယ်။ သင်လူလေးယောက်နဲ့တွေ့ခဲ့တယ်၊ သူတို့တစ်ယောက်ချင်းစီကသင့်ဘဝရဲ့အစိတ်အပိုင်းတစ်ခုကိုကိုယ်စားပြုတယ်- တည်ငြိမ်မှု၊ စိတ်လှုပ်ရှားမှု၊ ဉာဏ်ပညာနဲ့ အတိတ်။",
            "သင်တစ်ယောက်တည်းထိုင်နေရင်း သင့်ဖုန်းကိုကြည့်လိုက်သည်။ အခုဆုံးဖြတ်ချက်ချရမယ့်အချိန်ပဲ။ ဘယ်သူ့ကိုသင်ရွေးချယ်မလဲ?"
        ],
        internalMonologue: "ငါ့နှလုံးသားကဘယ်သူ့ကိုတကယ်တမ်းတနေတာလဲ?",
        playerChoices: [
            { 
                text: "တည်ငြိမ်ပြီးကြင်နာတတ်တဲ့ ဝတီ။", 
                nextSceneId: 'scene_ch15_01_ending_wati',
                branches: [{ requiredKeyEvent: 'romance_path_wati', nextSceneId: 'scene_ch15_01_ending_wati' }],
                stateUpdates: { keyEvents: ['final_decision_wati'] }
            },
            { 
                text: "တက်ကြွပြီးအံ့ဩစရာတွေနဲ့ပြည့်နေတဲ့ သုသုမေ။", 
                nextSceneId: 'scene_ch15_01_ending_thuthumay',
                branches: [{ requiredKeyEvent: 'romance_path_thuthumay', nextSceneId: 'scene_ch15_01_ending_thuthumay' }],
                stateUpdates: { keyEvents: ['final_decision_thuthumay'] }
            },
            { 
                text: "ထက်မြက်ပြီးစိန်ခေါ်မှုရှိတဲ့ နှင်းပွင့်။", 
                nextSceneId: 'scene_ch15_01_ending_hninpwint',
                branches: [{ requiredKeyEvent: 'romance_path_hninpwint', nextSceneId: 'scene_ch15_01_ending_hninpwint' }],
                stateUpdates: { keyEvents: ['final_decision_hninpwint'] }
            },
            { 
                text: "ရှုပ်ထွေးပေမယ့်အစစ်အမှန်ဖြစ်တဲ့ ပိုးလေး။", 
                nextSceneId: 'scene_ch15_01_ending_poelay',
                branches: [{ requiredKeyEvent: 'romance_path_poelay', nextSceneId: 'scene_ch15_01_ending_poelay' }],
                stateUpdates: { keyEvents: ['final_decision_poelay'] }
            },
            {
                text: "ငါဘယ်သူ့ကိုမှမရွေးဘူး။ ငါတစ်ယောက်တည်းနေတာပဲကောင်းတယ်။",
                nextSceneId: 'scene_ch15_01_ending_single'
            }
        ]
    },

    // HTET NAING WEDDING PATH
    'scene_ch14_02_htetnaing_wedding_prep': {
        sceneId: 'scene_ch14_02_htetnaing_wedding_prep',
        narratorText: [
            "သင်ဖုန်းကိုကောက်ကိုင်ပြီး ထက်နိုင်ကိုခေါ်လိုက်သည်။ သင့်အသံကတည်ငြိမ်နေသည်။",
            "သူဖုန်းကိုင်သည်။ 'ဟယ်လို?'"
        ],
        dialogue: [
            { character: "သန့်လင်းစိုး", line: "ထက်နိုင်... ငါပါ။ ငါတို့လက်ထပ်ကြရအောင်။" },
            { character: "ထက်နိုင်", line: "..." },
            { character: "ထက်နိုင်", line: "မင်းဘယ်မှာလဲ?" }
        ],
        playerChoices: [
            { text: "သင့်လိပ်စာကိုပြောလိုက်သည်။", nextSceneId: 'scene_ch14_03_htetnaing_wedding_scene' }
        ]
    },
    'scene_ch14_03_htetnaing_wedding_scene': {
        sceneId: 'scene_ch14_03_htetnaing_wedding_scene',
        narratorText: [
            "နာရီဝက်အကြာတွင် သူသင့်တိုက်ခန်းရှေ့သို့ရောက်လာသည်။ သူ့မျက်နှာကလေးနက်နေသည်။",
            "ထက်နိုင်ကသင့်ကိုစိုက်ကြည့်နေသည်။ သူ့မျက်လုံးထဲမှာမျက်ရည်တွေဝဲလာသည်။ သူပြုံးလိုက်သည်။ တောက်ပပြီးပျော်ရွှင်တဲ့အပြုံးတစ်ခု။"
        ],
        dialogue: [
            { character: "ထက်နိုင်", line: "မင်းတကယ်ပြောနေတာလား? ဒါကမင်းသူငယ်ချင်းတွေရဲ့နောက်ပြောင်မှုတစ်ခုမဟုတ်ဘူးလား?" },
            { character: "သန့်လင်းစိုး", line: "ငါ့ဘဝမှာဒီလောက်သေချာတာမျိုးတစ်ခါမှမဖြစ်ဖူးဘူး။ ဒီဒရာမာတွေအားလုံး၊ ဒီရှုပ်ထွေးမှုတွေအားလုံး... အဆုံးမှာတော့ငါ့စိတ်ထဲမှာရှင်းရှင်းလင်းလင်းမြင်နေတဲ့လူကမင်းပဲ။" },
            { character: "ထက်နိုင်", line: "ငါကမင်းရဲ့လုံခြုံတဲ့ရွေးချယ်မှုတစ်ခုပဲလား?" },
            { character: "သန့်လင်းစိုး", line: "မဟုတ်ဘူး။ မင်းကငါ့ရဲ့တစ်ခုတည်းသောရွေးချယ်မှုပဲ။" },
            { character: "ထက်နိုင်", line: "ကောင်းပြီလေ။ လက်ထပ်ကြတာပေါ့။" }
        ],
        playerChoices: [
            { text: "ဇာတ်လမ်းပြီးဆုံးပါပြီ။ (ထက်နိုင်နှင့်အတူ)", nextSceneId: 'scene_ch15_01_ending_htetnaing_wedding', stateUpdates: {keyEvents: ['final_decision_htetnaing_wedding']} }
        ]
    }
};