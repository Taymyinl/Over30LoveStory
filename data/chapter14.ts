import type { Scene } from '../types';

export const chapter14Data: Record<string, Scene> = {
    // CHAPTER 14, PATH 1: WATI'S FINAL CHOICE
    'scene_ch14_01_wati_final_choice': {
        sceneId: 'scene_ch14_01_wati_final_choice',
        narratorText: ["နောက်တစ်ပတ်အကြာ။ သင်ဝတီနှင့်အတူ သင့်တိုက်ခန်းတွင်ညစာချက်ပြုတ်နေသည်။ အရာရာကအံ့ဩစရာကောင်းလောက်အောင်သာယာနေသည်။"],
        dialogue: [
            { character: "ဝတီ", line: "ကျွန်မတို့ဒီလိုနေရတာကြိုက်တယ်။ တိတ်ဆိတ်ပြီး... ပုံမှန်အတိုင်းပဲ။" }
        ],
        internalMonologue: "ပုံမှန်။ ဒီစကားလုံးကအရင်ကငါ့ကိုကြောက်စေခဲ့တယ်။ အခုတော့... နှစ်သိမ့်မှုပေးသလိုပဲ။ ဒါငါ့ရဲ့အတိတ်ကထွက်ပြေးနေတာလား၊ ဒါမှမဟုတ်ငါတကယ်လိုချင်တာကိုရှာတွေ့နေတာလား?",
        playerChoices: [
            { text: "သူမကိုပြောလိုက်သည်။ \"ငါလည်းကြိုက်တယ်။\"", nextSceneId: 'scene_ch15_01_ending_wati', stateUpdates: {keyEvents: ['final_decision_wati']} },
            { text: "တိတ်ဆိတ်နေလိုက်သည်။", nextSceneId: 'scene_ch15_01_ending_single' }
        ]
    },

    // CHAPTER 14, PATH 2: THU THU MAY'S FINAL CHOICE
    'scene_ch14_01_thuthumay_final_choice': {
        sceneId: 'scene_ch14_01_thuthumay_final_choice',
        narratorText: ["သင်တို့မြို့ကိုကားမောင်းပြန်လာကြသည်။ တိတ်ဆိတ်မှုကသက်သောင့်သက်သာရှိနေသည်။"],
        dialogue: [
            { character: "သုသုမေ", line: "ဒီနေ့အတွက်ကျေးဇူးတင်ပါတယ်။ ဦးကကျွန်မထင်ထားတာထက်ပိုပြီး... ပျော်စရာကောင်းတယ်။" }
        ],
        internalMonologue: "သူမကငါ့ကိုပျော်ရွှင်စေတယ်။ ဒါပေမဲ့ဒါကရေရှည်တည်တံ့နိုင်ပါ့မလား? ငါကသူမအတွက်ဝန်ထုပ်ဝန်ပိုးဖြစ်သွားမှာလား?",
        playerChoices: [
            { text: "\"မင်းလည်းဒီလိုပါပဲ။\"", nextSceneId: 'scene_ch15_01_ending_thuthumay', stateUpdates: {keyEvents: ['final_decision_thuthumay']} },
            { text: "သူမကိုပြုံးပြလိုက်သည်။", nextSceneId: 'scene_ch15_01_ending_single' }
        ]
    },

    // CHAPTER 14, PATH 3: HNIN PWINT'S FINAL CHOICE
    'scene_ch14_01_hninpwint_final_choice': {
        sceneId: 'scene_ch14_01_hninpwint_final_choice',
        narratorText: ["ညနက်လာတော့ သင်တို့နှစ်ယောက်တည်းဘားမှာကျန်ခဲ့သည်။"],
        dialogue: [
            { character: "နှင်းပွင့်", line: "မင်းသိလား၊ မင်းကငါထင်ထားသလောက်စိတ်မတိုတတ်ဘူးပဲ။" }
        ],
        internalMonologue: "ဒါကသူမဆီကလာတဲ့အကြီးမားဆုံးချီးကျူးစကားပဲ။ သူမကငါ့ကိုစိန်ခေါ်တယ်။ သူမကငါ့ကိုနားလည်တယ်။ ဒါက... စိတ်လှုပ်ရှားစရာကောင်းတယ်။ ကြောက်စရာလည်းကောင်းတယ်။",
        playerChoices: [
            { text: "\"မင်းလည်းဒီလိုပါပဲ။\"", nextSceneId: 'scene_ch15_01_ending_hninpwint', stateUpdates: {keyEvents: ['final_decision_hninpwint']} },
            { text: "သူမကိုဘီယာတစ်ခွက်ထပ်ငှဲ့ပေးလိုက်သည်။", nextSceneId: 'scene_ch15_01_ending_single' }
        ]
    },
    
    // CHAPTER 14, PATH 4: POE LAY'S FINAL CHOICE
    'scene_ch14_01_poelay_final_choice': {
        sceneId: 'scene_ch14_01_poelay_final_choice',
        narratorText: ["သင်သူမကိုအိမ်ပြန်လိုက်ပို့သည်။ သူမတိုက်ခန်းရှေ့မှာရပ်နေကြသည်။"],
        dialogue: [
            { character: "ပိုးလေး", line: "ဒီညအတွက်ကျေးဇူးတင်ပါတယ်။ ကျွန်မ... ပျော်ခဲ့ပါတယ်။" }
        ],
        internalMonologue: "သူမရဲ့ဘဝကရှုပ်ထွေးတယ်။ ငါ့ဘဝလည်းရှုပ်ထွေးတယ်။ ဒါပေမဲ့... ငါတို့အတူတူဆိုရင်တော့သိပ်ရှုပ်ထွေးမှာမဟုတ်ဘူးလား?",
        playerChoices: [
            { text: "သူမကိုနမ်းလိုက်သည်။", nextSceneId: 'scene_ch15_01_ending_poelay', stateUpdates: {keyEvents: ['final_decision_poelay']} },
            { text: "\"ကောင်းသောညပါ ပိုးလေး။\"", nextSceneId: 'scene_ch15_01_ending_single' }
        ]
    },

    // CHAPTER 14, PATH 5: FRIENDS FINAL
    'scene_ch14_01_friends_final': {
        sceneId: 'scene_ch14_01_friends_final',
        narratorText: ["နောက်တစ်နေ့ သင်ထက်နိုင်နှင့်တွေ့သည်။ သင်သူ့ကိုအရာအားလုံးပြောပြလိုက်သည်။"],
        dialogue: [
            { character: "ထက်နိုင်", line: "ဒါဆိုမင်းကသူငယ်ချင်းတွေကိုရွေးလိုက်တာပေါ့။ မင်းအချစ်ကိုစွန့်လွှတ်လိုက်တာမဟုတ်ဘူး၊ မင်းကမင်းအတွက်အရေးကြီးတာကိုဦးစားပေးလိုက်တာပဲ။" }
        ],
        playerChoices: [
            { text: "\"ငါမှန်မှန်ကန်ကန်လုပ်ခဲ့တာလား?\"", nextSceneId: 'scene_ch15_01_ending_platonic' },
            { text: "\"ငါတစ်ယောက်တည်းပဲအဆုံးသတ်ရတော့မယ်ထင်တယ်။\"", nextSceneId: 'scene_ch15_01_ending_single' }
        ]
    },

    // CHAPTER 14, PATH 6: HTET NAING'S FINAL CHOICE
    'scene_ch14_01_htetnaing_final_choice': {
        sceneId: 'scene_ch14_01_htetnaing_final_choice',
        narratorText: ["သင်ထက်နိုင်ရဲ့တိုက်ခန်းမှာရှိနေသည်။ သူကသင့်ကိုလက်ဖက်ရည်တစ်ခွက်ဖျော်ပေးနေသည်။ သူ့နေရာကသန့်ရှင်းပြီး ngăn nắpကျသည်။ စာအုပ်တွေအများကြီးရှိသည်။"],
        dialogue: [
            { character: "ထက်နိုင်", line: "မင်းဒီရက်ပိုင်းတော်တော်လေးဖြတ်သန်းခဲ့ရတာပဲ။ အခုတော့အနားယူလိုက်တော့။" }
        ],
        internalMonologue: "သူနဲ့အတူရှိနေရင် အရာအားလုံးကပိုပြီးလွယ်ကူသွားသလိုပဲ။ ဒရာမာတွေမရှိဘူး။ ဟန်ဆောင်မှုတွေမရှိဘူး။ ဒီတိုင်းပဲ... တည်ငြိမ်နေတယ်။ ဒါကအချစ်လား? ဒါမှမဟုတ်သက်သောင့်သက်သာရှိမှုသက်သက်ပဲလား?",
        playerChoices: [
            { text: "သူ့လက်ကိုကိုင်လိုက်သည်။ \"ငါ့အတွက်မင်းရှိနေပေးလို့ကျေးဇူးတင်ပါတယ်။\"", nextSceneId: 'scene_ch15_01_ending_htetnaing', stateUpdates: {keyEvents: ['final_decision_htetnaing']} },
            { text: "\"မင်းကသူငယ်ချင်းကောင်းတစ်ယောက်ပဲ။\"", nextSceneId: 'scene_ch15_01_ending_platonic' }
        ]
    }
};