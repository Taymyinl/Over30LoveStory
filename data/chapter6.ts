import type { Scene } from '../types';

export const chapter6Data: Record<string, Scene> = {
    // CHAPTER 6: THE INTELLECTUAL'S CRISIS (HNIN PWINT)
    'scene_ch6_01_hninpwint_call': {
        sceneId: 'scene_ch6_01_hninpwint_call',
        narratorText: ["တစ်ပတ်လောက်အကြာတွင် သင့်ဖုန်းမြည်လာသည်။ နှင်းပွင့်။ ဒါကအံ့ဩစရာပဲ။"],
        dialogue: [
            { character: "နှင်းပွင့်", line: "သန့်လင်းစိုး။ မင်းအလုပ်များနေလား?" }
        ],
        internalMonologue: "သူမရဲ့အသံကတင်းမာနေတယ်။ ပုံမှန်မဟုတ်ဘူး။",
        playerChoices: [
            { text: "\"ငါ့အတွက်တော့အမြဲတမ်းအားတယ်။ ဘာဖြစ်လို့လဲ?\"", nextSceneId: 'scene_ch6_02_hninpwint_proposes_date' },
            { text: "\"အလုပ်ပေါ်မူတည်တယ်။ ဘားကိုမီးရှို့ဖို့ကြိုးစားနေတဲ့သူရှိလား? မဟုတ်ရင်တော့အားတယ်။\"", nextSceneId: 'scene_ch6_02_hninpwint_proposes_date', stateUpdates: {relationshipScores: [{character: 'hninPwint', change: 1}]}}
        ]
    },
    'scene_ch6_02_hninpwint_proposes_date': {
        sceneId: 'scene_ch6_02_hninpwint_proposes_date',
        narratorText: ["သူမသက်ပြင်းချသံကိုသင်ကြားလိုက်ရသည်။"],
        dialogue: [
            { character: "နှင်းပွင့်", line: "ငါအလုပ်ကိစ္စတစ်ခုမှာပိတ်မိနေတယ်။ ငါ့ code ထဲက bug ကိုရှာမတွေ့ဘူး။ ငါနေရာပြောင်းဖို့လိုတယ်။ မင်းဘားမှာငါထိုင်လို့ရမလား? ငါအနှောင့်အယှက်မပေးပါဘူး။" }
        ],
        internalMonologue: "ဒါကတော့ဒိတ်အသစ်တစ်မျိုးပဲ။ သူမကငါနဲ့အချိန်ဖြုန်းချင်တာမဟုတ်ဘူး၊ ငါ့ရဲ့ Wi-Fi ကိုသုံးချင်တာ။",
        playerChoices: [
            { text: "\"ရပါတယ်။ ငါ့ဘားကမင်းရဲ့ဘားပဲ။ ငါမင်းအတွက်ကော်ဖီပြင်းပြင်းတစ်ခွက်ဖျော်ထားလိုက်မယ်။\"", nextSceneId: 'scene_ch6_03_hninpwint_date_2_intro', stateUpdates: {keyEvents: ['agreed_to_date_2_hninpwint']}},
            { text: "\"ငါ့ရဲ့ Wi-Fi ကသိပ်မကောင်းဘူး။ ဒါပေမဲ့လာခဲ့ပါ။\"", nextSceneId: 'scene_ch6_03_hninpwint_date_2_intro', stateUpdates: {relationshipScores: [{character: 'hninPwint', change: -1}]}}
        ]
    },
    'scene_ch6_03_hninpwint_date_2_intro': {
        sceneId: 'scene_ch6_03_hninpwint_date_2_intro',
        narratorText: ["နာရီဝက်အကြာတွင် သူမရောက်လာသည်။ ပင်ပန်းနေပုံရပြီး သူ့မျက်လုံးအောက်တွင်အညိုရောင်အစင်းများထင်နေသည်။ သူမခေါင်းညိတ်ပြပြီး ထောင့်စားပွဲတစ်လုံးတွင်နေရာယူလိုက်ကာ ချက်ချင်းအလုပ်လုပ်တော့သည်။", "သင်သူမကိုကော်ဖီတစ်ခွက်ယူသွားပေးလိုက်သည်။ သူမကကျေးဇူးတင်စကားတောင်မပြောဘဲယူသောက်လိုက်သည်။"],
        internalMonologue: "သူမတကယ်စိတ်ဖိစီးနေတာပဲ။ ငါစကားစပြောသင့်လား? ဒါမှမဟုတ်အဲဒါကပိုဆိုးသွားမလား?",
        playerChoices: [
            { text: "သူမကိုအာရုံစိုက်ခွင့်ပေးလိုက်သည်။", nextSceneId: 'scene_ch6_04_hninpwint_date_2_wait' },
            { text: "\"ပြဿနာကဘာလဲပြောပြ။ တခါတလေကျရင်ပြဿနာကိုရှင်းပြလိုက်တာကအဖြေရှာတွေ့စေနိုင်တယ်။\"", nextSceneId: 'scene_ch6_04_hninpwint_date_2_talk' }
        ]
    },
    'scene_ch6_04_hninpwint_date_2_wait': {
        sceneId: 'scene_ch6_04_hninpwint_date_2_wait',
        narratorText: ["သင်သူမကိုတစ်နာရီလောက်တစ်ယောက်တည်းထားလိုက်သည်။ သူမကကီးဘုတ်ကိုတဖျောက်ဖျောက်ရိုက်လိုက်၊ မကျေမနပ်ရေရွတ်လိုက်လုပ်နေသည်။ နောက်ဆုံးမှာတော့သူမကကျယ်လောင်စွာညည်းညူပြီး laptop ကိုဒုန်းခနဲပိတ်လိုက်သည်။"],
        dialogue: [
            { character: "နှင်းပွင့်", line: "ဒါအသုံးမဝင်တော့ဘူး။ ကျွန်မဦးနှောက်ကပျော့ဖတ်ဖြစ်နေပြီ။" }
        ],
        playerChoices: [
            { text: "\"ခဏနားလိုက်ပါ။ ဘီယာတစ်ခွက်လောက်သောက်။ မင်းဒီလိုဆက်လုပ်နေရင်မင်းကိုမင်းပင်ပန်းအောင်ပဲလုပ်နေတာပဲ။\"", nextSceneId: 'scene_ch6_05_hninpwint_end_date_2', stateUpdates: {relationshipScores: [{character: 'hninPwint', change: 1}]} }
        ]
    },
    'scene_ch6_04_hninpwint_date_2_talk': {
        sceneId: 'scene_ch6_04_hninpwint_date_2_talk',
        narratorText: ["သူမကမော့ကြည့်တယ်၊ မျက်လုံးထဲမှာအံ့ဩမှုနဲ့စိတ်တိုမှုအရိပ်အယောင်တွေနဲ့။"],
        dialogue: [
            { character: "နှင်းပွင့်", line: "ဒါက recursive function တစ်ခုထဲက memory leak ပဲ။ မင်းနားလည်မှာမဟုတ်ဘူး။" }
        ],
        playerChoices: [
            { text: "\"ဟုတ်တယ်၊ မင်းမှန်တယ်။ ဒါပေမဲ့ငါဘားတွေအကြောင်းနားလည်တယ်။ လူတွေပြဿနာတွေနဲ့ဝင်လာပြီးမတူညီတဲ့အမြင်နဲ့ပြန်ထွက်သွားကြတယ်။ ခဏနားလိုက်ပါ။\"", nextSceneId: 'scene_ch6_05_hninpwint_end_date_2', stateUpdates: {relationshipScores: [{character: 'hninPwint', change: 1}]} },
            { text: "\"Function ကသူ့ကိုယ်သူပြန်ခေါ်နေတာလား? အဆုံးမရှိတဲ့ loop ထဲရောက်နေတာမျိုးလား? ငါ့ဘဝလိုပဲပေါ့။\"", nextSceneId: 'scene_ch6_05_hninpwint_end_date_2', stateUpdates: {relationshipScores: [{character: 'hninPwint', change: 2}]} }
        ]
    },
    'scene_ch6_05_hninpwint_end_date_2': {
        sceneId: 'scene_ch6_05_hninpwint_end_date_2',
        narratorText: ["သူမနောက်ဆုံးတော့လက်လျှော့ပြီးခေါင်းညိတ်လိုက်သည်။ သင်သူမကိုဘီယာတစ်ခွက်ငှဲ့ပေးလိုက်သည်။ သူမကတစ်ငုံမော့သောက်လိုက်ပြီးသက်ပြင်းချလိုက်သည်။"],
        dialogue: [
            { character: "နှင်းပွင့်", line: "ကျေးဇူးပဲ။ တောင်းပန်ပါတယ်။ ငါအလုပ်ထဲမှာဆိုရင်နည်းနည်း... စိတ်စွဲလမ်းတတ်တယ်။" }
        ],
        playerChoices: [
            { text: "\"ငါသတိထားမိတယ်။ ဒါပေမဲ့အဲဒါကမင်းကိုကောင်းအောင်လုပ်ပေးတဲ့အရာပဲမဟုတ်လား?\"", nextSceneId: 'scene_ch7_01_thuthumay_call', stateUpdates: {relationshipScores: [{character: 'hninPwint', change: 1}]} }
        ]
    }
};