import type { Scene } from '../types';

export const chapter8Data: Record<string, Scene> = {
    // CHAPTER 8: THE SECOND DATE WITH THE PAST (POE LAY)
    'scene_ch8_01_poelay_call': {
        sceneId: 'scene_ch8_01_poelay_call',
        narratorText: ["တစ်ပတ်ခန့်အကြာ။ သင်နောက်ဆုံးတွင်သတ္တိမွေးပြီး ပိုးလေး၏နံပါတ်ကိုခေါ်ဆိုလိုက်သည်။ သင့်လက်ဖဝါးများချွေးစေးများထွက်နေသည်။"],
        internalMonologue: "ဒါကအရမ်းထူးဆန်းတယ်။ ငါကဆယ်ကျော်သက်တစ်ယောက်လိုပဲ။ ဒါပေမဲ့သူမကိုထပ်တွေ့ချင်တဲ့စိတ်က... တကယ့်ကိုပြင်းပြနေတယ်။",
        playerChoices: [
            { text: "ဖုန်းခေါ်လိုက်သည်။", nextSceneId: 'scene_ch8_02_poelay_call_convo' }
        ]
    },
    'scene_ch8_02_poelay_call_convo': {
        sceneId: 'scene_ch8_02_poelay_call_convo',
        narratorText: ["ဖုန်းဝင်သွားပြီးနောက် သူမဖုန်းကိုင်လိုက်သည်။"],
        dialogue: [
            { character: "ပိုးလေး", line: "ဟယ်လို?" },
            { character: "သန့်လင်းစိုး", line: "ဟေး ပိုးလေး၊ သန့်လင်းစိုးပါ။" },
            { character: "ပိုးလေး", line: "အိုး! ဟိုင်း! ရှင်ဖုန်းဆက်တာဝမ်းသာပါတယ်။" }
        ],
        playerChoices: [
            { text: "\"ငါတို့ထပ်တွေ့သင့်တယ်လို့ထင်တယ်။ မင်းရဲ့... အခြေအနေကိုငါနားလည်ပါတယ်။ ဒါပေမဲ့ငါမင်းကိုပိုသိချင်သေးတယ်။\"", nextSceneId: 'scene_ch8_03_poelay_date_2_intro', stateUpdates: {relationshipScores: [{character: 'poeLay', change: 2}]} },
            { text: "\"ငါဒီတိုင်းပဲ... အဆင်ပြေရဲ့လားလို့ဖုန်းဆက်လိုက်တာပါ။\"", nextSceneId: 'scene_ch9_01_friends_intervention' }
        ]
    },
    'scene_ch8_03_poelay_date_2_intro': {
        sceneId: 'scene_ch8_03_poelay_date_2_intro',
        narratorText: [
            "သင်တို့နှစ်ယောက် ကန်တော်ကြီးပန်းခြံတွင်တွေ့ဆုံရန်သဘောတူလိုက်ကြသည်။ တနင်္ဂနွေနေ့လည်ခင်းဖြစ်သည်။ နေရာက ကလေးများ၊ မိသားစုများနှင့်ပြည့်နေသည်။",
            "သူမရောက်လာသောအခါ သူမတစ်ယောက်တည်းမဟုတ်ပေ။ သူမလက်ကိုကိုင်ထားသောភ្នែកធំៗနှင့်မိန်းကလေးငယ်တစ်ဦးပါလာသည်။"
        ],
        dialogue: [
            { character: "ပိုးလေး", line: "သန့်လင်းစိုး၊ ဒါကကျွန်မသမီးလေးမေပါ။ မေ၊ ဒါကမာμάရဲ့သူငယ်ချင်းဦးသန့်လင်းစိုး။" }
        ],
        internalMonologue: "သူမသမီးလေးကိုခေါ်လာတယ်။ ဒါ... ငါမမျှော်လင့်ထားဘူး။ ဒါပေမဲ့ဒါကကောင်းတဲ့လက္ခဏာပဲထင်တယ်။",
        playerChoices: [
            { text: "ကလေးမလေးကိုပြုံးပြလိုက်သည်။ \"တွေ့ရတာဝမ်းသာပါတယ် မေ။\"", nextSceneId: 'scene_ch8_04_poelay_date_2_talk' },
            { text: "အနည်းငယ်အဆင်မပြေစွာပြုံးလိုက်သည်။", nextSceneId: 'scene_ch8_04_poelay_date_2_talk' }
        ]
    },
    'scene_ch8_04_poelay_date_2_talk': {
        sceneId: 'scene_ch8_04_poelay_date_2_talk',
        narratorText: ["သင်တို့သုံးယောက်ပန်းခြံထဲတွင်လမ်းလျှောက်ကြသည်။ မေကသင့်ကိုမယုံသင်္ကာမျက်လုံးများဖြင့်ကြည့်နေသော်လည်း ခဏအကြာတွင်တော့သင့်ကိုယုံကြည်လာသည်။", "သင်တို့ရေကန်ဘေးကခုံတန်းတစ်ခုတွင်ထိုင်ကြသည်။ မေကဘဲတွေကိုအစာကျွေးနေသည်။"],
        dialogue: [
            { character: "ပိုးလေး", line: "ဒီလိုမျိုးထွက်ရတာကျွန်မအတွက်ရှားပါတယ်။ အချိန်မရှိသလောက်ပဲ။" },
            { character: "သန့်လင်းစိုး", line: "မင်းတစ်ယောက်တည်းဒါတွေအားလုံးကိုဘယ်လိုလုပ်နေလဲဆိုတာငါနားမလည်နိုင်ဘူး။" }
        ],
        playerChoices: [
            { text: "\"မင်းကသန်မာတဲ့လူတစ်ယောက်ပဲ။\"", nextSceneId: 'scene_ch8_05_poelay_date_2_end' },
            { text: "\"ဒါကပင်ပန်းစရာကြီးပဲ။\"", nextSceneId: 'scene_ch8_05_poelay_date_2_end' }
        ]
    },
    'scene_ch8_05_poelay_date_2_end': {
        sceneId: 'scene_ch8_05_poelay_date_2_end',
        narratorText: ["သူမကသင့်ကိုကြည့်ပြီးပြုံးလိုက်သည်။ ဒီတစ်ခါတော့သူမရဲ့အပြုံးတွေကမျက်လုံးအထိရောက်နေသည်။"],
        dialogue: [
            { character: "ပိုးလေး", line: "ကျေးဇူးတင်ပါတယ်။ ဒါကိုနားလည်ပေးတဲ့လူသိပ်မရှိဘူး။" }
        ],
        playerChoices: [
            { text: "သူမလက်ကိုကိုင်လိုက်သည်။", nextSceneId: 'scene_ch9_01_friends_intervention', stateUpdates: {relationshipScores: [{character: 'poeLay', change: 3}]} },
            { text: "ပြုံးပြလိုက်သည်။", nextSceneId: 'scene_ch9_01_friends_intervention', stateUpdates: {relationshipScores: [{character: 'poeLay', change: 1}]} }
        ]
    }
};