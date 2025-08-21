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
            { text: "\"မင်းကသန်မာတဲ့လူတစ်ယောက်ပဲ။\"", nextSceneId: 'scene_ch8_04b_htooaung_interrupts' },
            { text: "\"ဒါကပင်ပန်းစရာကြီးပဲ။\"", nextSceneId: 'scene_ch8_04b_htooaung_interrupts' }
        ]
    },
    'scene_ch8_04b_htooaung_interrupts': {
        sceneId: 'scene_ch8_04b_htooaung_interrupts',
        narratorText: ["သင်တို့စကားပြောနေစဉ် ရင်းနှီးပြီးမနှစ်မြို့ဖွယ်ကောင်းသောအသံတစ်ခုကြားလိုက်ရသည်။", "ထူးအောင်ဖြစ်သည်။ သူကသင့်နောက်မှာရပ်နေပြီး မထီမဲ့မြင်အပြုံးဖြင့်ပြုံးနေသည်။"],
        dialogue: [
            { character: "ထူးအောင်", line: "အိုး၊ သန့်လင်းစိုးပါလား။ မင်းရဲ့ဒိတ်ကအနုပညာပြခန်းကနေပန်းခြံကိုအဆင့်နှိမ့်သွားပြီလား? ပြီးတော့... မင်းကကလေးထိန်းပါငှားလာတာလား?" }
        ],
        internalMonologue: "သူကဒီမှာဘယ်လိုရောက်နေတာလဲ? တိုက်ဆိုင်တာလားဒါမှမဟုတ်သူငါ့နောက်ကိုလိုက်နေတာလား?",
        playerChoices: [
            { text: "သူ့ကိုလျစ်လျူရှုလိုက်သည်။ \"သွားရအောင် ပိုးလေး။\"", nextSceneId: 'scene_ch8_05_poelay_date_2_end', stateUpdates: {relationshipScores: [{character: 'poeLay', change: -1}]} },
            { text: "ထရပ်လိုက်သည်။ \"ထူးအောင်၊ မင်းပါးစပ်ပိတ်ထား။\"", nextSceneId: 'scene_ch8_04c_htooaung_confrontation' }
        ]
    },
    'scene_ch8_04c_htooaung_confrontation': {
        sceneId: 'scene_ch8_04c_htooaung_confrontation',
        narratorText: ["ပိုးလေးကသင့်လက်မောင်းကိုဆွဲထားသော်လည်း သင်ကမလှုပ်မယှက်ရပ်နေသည်။"],
        dialogue: [
            { character: "ထူးအောင်", line: "ဘာလဲ? ငါအမှန်ပြောနေတာမဟုတ်ဘူးလား? မင်းကတော့တကယ်ကိုအောက်ဆုံးအထိရောက်သွားပြီပဲ၊ single mom တစ်ယောက်နဲ့ဒိတ်လုပ်နေတယ်ပေါ့။" },
            { character: "ပိုးလေး", line: "သန့်လင်းစိုး၊ မလိုပါဘူး..." }
        ],
        playerChoices: [
            { text: "\"မင်းအခုချက်ချင်းဒီကနေထွက်သွား၊ ဒါမှမဟုတ်ငါမင်းကိုကန်ထဲပစ်ချလိုက်မယ်။\"", nextSceneId: 'scene_ch8_05_poelay_date_2_end', stateUpdates: {relationshipScores: [{character: 'poeLay', change: 3}, {character: 'htooAung', change: -3}]} },
            { text: "\"သူမကမင်းထက်အဆတစ်ထောင်သာတဲ့လူတစ်ယောက်ပဲ။ မင်းရဲ့မနာလိုဖြစ်နေတဲ့စိတ်ကိုเอาไปไกลๆ။\"", nextSceneId: 'scene_ch8_05_poelay_date_2_end', stateUpdates: {relationshipScores: [{character: 'poeLay', change: 4}, {character: 'htooAung', change: -2}]} }
        ]
    },
    'scene_ch8_05_poelay_date_2_end': {
        sceneId: 'scene_ch8_05_poelay_date_2_end',
        narratorText: ["ထူးအောင်ကရယ်ပြီးထွက်သွားသည်။ ပိုးလေးကသင့်ကိုစိုးရိမ်တဲ့မျက်လုံးတွေနဲ့ကြည့်နေသည်။ သူမမျက်လုံးထဲမှာကျေးဇူးတင်တဲ့အရိပ်အယောင်တွေလည်းတွေ့ရသည်။"],
        dialogue: [
            { character: "ပိုးလေး", line: "ကျေးဇူးတင်ပါတယ်။ ရှင်အဲလိုလုပ်စရာမလိုပါဘူး။" }
        ],
        playerChoices: [
            { text: "သူမလက်ကိုကိုင်လိုက်သည်။ \"ငါလုပ်ချင်လို့လုပ်တာ။\"", nextSceneId: 'scene_ch9_01_friends_intervention', stateUpdates: {relationshipScores: [{character: 'poeLay', change: 2}]} },
            { text: "ပြုံးပြလိုက်သည်။ \"သူကလူဆိုးတစ်ယောက်ပဲ။\"", nextSceneId: 'scene_ch9_01_friends_intervention', stateUpdates: {relationshipScores: [{character: 'poeLay', change: 1}]} }
        ]
    }
};