import type { Scene } from '../types';

export const chapter4Data: Record<string, Scene> = {
    // CHAPTER 4: A DATE WITH THE PAST (POE LAY)
    'scene_ch4_01_poelay_call': {
        sceneId: 'scene_ch4_01_poelay_call',
        narratorText: ["နောက်တစ်နေ့ညနေ သင်ဖုန်းကိုစိုက်ကြည့်နေသည်။ ဆယ်နှစ်... ဆယ်နှစ်လုံးလုံး သူမကိုသင်မတွေ့ခဲ့။ အခုတော့ သင့်လက်ထဲမှာ သူမရဲ့ဖုန်းနံပါတ်ရှိနေပြီ။"],
        internalMonologue: "ငါဘာလုပ်ရမှာလဲ? ငါဖုန်းခေါ်လိုက်ရင် ဘာပြောရမလဲ? 'ဟေး၊ ငါတို့မတော်တဆတိုက်မိပြီးနောက်မှာ မင်းကိုစွဲလမ်းနေတုန်းပဲဆိုတာ သတိရသွားတယ်။' လုံးဝမဖြစ်နိုင်ဘူး။",
        playerChoices: [
            { text: "ဖုန်းခေါ်လိုက်သည်။ အဆိုးဆုံးဘာဖြစ်နိုင်မှာလဲ?", nextSceneId: 'scene_ch4_02_poelay_call_convo' },
            { text: "ဖုန်းမခေါ်သေးဘူး။ ငါနည်းနည်းအရက်သောက်ဖို့လိုတယ်။ သတ္တိအတွက်ပေါ့။", nextSceneId: 'scene_ch4_01_poelay_call' }
        ]
    },
    'scene_ch4_02_poelay_call_convo': {
        sceneId: 'scene_ch4_02_poelay_call_convo',
        narratorText: ["သင်ဖုန်းခေါ်လိုက်သည်။ ဖုန်းမြည်သံတစ်ချက်ချင်းစီက သင့်နှလုံးခုန်နှုန်းကိုမြန်စေသည်။ သူမဖုန်းကိုင်လိုက်သည်။"],
        dialogue: [
            { character: "ပိုးလေး", line: "ဟယ်လို?" },
            { character: "သန့်လင်းစိုး", line: "ဟေး ပိုးလေး။ သန့်လင်းစိုးပါ။ မနေ့ကလမ်းမှာတွေ့တဲ့တစ်ယောက်..." },
            { character: "ပိုးလေး", line: "အိုး! ဟုတ်ကဲ့! ရှင်ဖုန်းခေါ်မယ်လို့မထင်ထားဘူး။" }
        ],
        playerChoices: [
            { text: "\"ငါလည်းမထင်ထားပါဘူး။ ဒါပေမဲ့... ငါတို့စကားပြောလို့မပြီးသေးဘူးလို့ခံစားရတယ်။ မင်းအားရင်... ကော်ဖီဖြစ်ဖြစ်တွေ့သောက်ကြမလား?\"", nextSceneId: 'scene_ch4_03_poelay_date_intro' },
            { text: "\"ငါဒီတိုင်းပဲ... အဆင်ပြေရဲ့လားလို့ဖုန်းဆက်လိုက်တာပါ။\"", nextSceneId: 'scene_ch4_02_poelay_call_awkward_end' }
        ]
    },
    'scene_ch4_02_poelay_call_awkward_end': {
        sceneId: 'scene_ch4_02_poelay_call_awkward_end',
        narratorText: ["ဖုန်းထဲတွင် တိတ်ဆိတ်သွားသည်။"],
        dialogue: [
            { character: "ပိုးလေး", line: "...အင်း။ ကျွန်မအဆင်ပြေပါတယ်။ အခုတော့အလုပ်နည်းနည်းရှုပ်နေလို့။ နောက်မှတွေ့ကြတာပေါ့။" }
        ],
        internalMonologue: "ကောင်းတယ် သန့်လင်းစိုး။ မင်းကတော့တကယ့်ကိုကျွမ်းကျင်တာပဲ။",
        playerChoices: [
            { text: "ဇာတ်လမ်းကိုဆက်ရန်...", nextSceneId: 'scene_ch5_01_wati_call' }
        ]
    },
    'scene_ch4_03_poelay_date_intro': {
        sceneId: 'scene_ch4_03_poelay_date_intro',
        narratorText: ["သူမရယ်လိုက်သည်။ နွေးထွေးပြီး ရင်းနှီးတဲ့အသံတစ်ခု။", "သင်တို့နှစ်ယောက် တက္ကသိုလ်နားက လက်ဖက်ရည်ဆိုင်လေးတစ်ဆိုင်မှာတွေ့ဖို့သဘောတူလိုက်ကြတယ်။ အဲဒီနေရာကမပြောင်းလဲသေးဘူး၊ အချိန်ခရီးသွားနေသလိုပဲ။ သူမအရင်ရောက်နှင့်နေသည်။"],
        dialogue: [
            { character: "ပိုးလေး", line: "ဒီနေရာကိုကျွန်မမေ့နေတာကြာပြီ။ အမှတ်တရတွေအများကြီးပဲနော်။" }
        ],
        playerChoices: [
            { text: "\"ဟုတ်တယ်။ ငါတို့ဒီမှာစာမေးပွဲအတွက်ဘယ်လိုတွေကျက်ခဲ့ကြလဲဆိုတာမှတ်မိသေးလား?\"", nextSceneId: 'scene_ch4_04_poelay_date_talk', stateUpdates: {relationshipScores: [{character: 'poeLay', change: 1}]} },
            { text: "\"အင်း... ငါဒီကဖက်ထမင်းကြော်ကိုလွမ်းနေတာ။\"", nextSceneId: 'scene_ch4_04_poelay_date_talk' }
        ]
    },
    'scene_ch4_04_poelay_date_talk': {
        sceneId: 'scene_ch4_04_poelay_date_talk',
        narratorText: ["စကားဝိုင်းကလွယ်ကူစွာစီးဆင်းနေသည်။ သင်တို့နှစ်ယောက်လုံးရဲ့အလုပ်၊ သူငယ်ချင်းတွေနဲ့ ဆယ်နှစ်အတွင်းဖြစ်ပျက်ခဲ့တဲ့အရာတွေအကြောင်းပြောကြတယ်။ ဒါပေမဲ့သူမရဲ့အပြုံးတွေကမျက်လုံးအထိမရောက်သလိုပဲ၊ သင်သတိထားမိတယ်။"],
        dialogue: [
            { character: "သန့်လင်းစိုး", line: "မင်းတကယ်အဆင်ပြေရဲ့လား ပိုးလေး? မင်းနည်းနည်း... ဝမ်းနည်းနေသလိုပဲ။" }
        ],
        playerChoices: [
            { text: "သူမပခုံးကိုညင်သာစွာပုတ်လိုက်သည်။ \"ငါ့ကိုပြောပြလို့ရတယ်နော်။\"", nextSceneId: 'scene_ch4_05_poelay_reveal' },
            { text: "ဘာမှမပြောဘဲ စောင့်နေလိုက်သည်။", nextSceneId: 'scene_ch4_05_poelay_reveal' }
        ]
    },
    'scene_ch4_05_poelay_reveal': {
        sceneId: 'scene_ch4_05_poelay_reveal',
        narratorText: ["သူမသက်ပြင်းချလိုက်ပြီး လက်ဖက်ရည်ခွက်ကိုစိုက်ကြည့်နေသည်။"],
        dialogue: [
            { character: "ပိုးလေး", line: "ကျွန်မ... လွန်ခဲ့တဲ့နှစ်နှစ်ကကွာရှင်းထားတာ။ ကျွန်မတို့မှာ... ကလေးတစ်ယောက်ရှိတယ်။ ငါးနှစ်အရွယ်သမီးလေး။ အခုသူနဲ့အတူတူပြန်နေနေတာ။ ဒါကြောင့်... အရာရာကနည်းနည်းခက်ခဲနေတယ်။" }
        ],
        internalMonologue: "သူမက ကလေးအမေတစ်ယောက်။ ကွာရှင်းထားတယ်။ ဒါက... ငါထင်ထားတာထက်ပိုရှုပ်ထွေးတယ်။",
        playerChoices: [
            { text: "\"အိုး... ပိုးလေး။ ငါတကယ်စိတ်မကောင်းပါဘူး။ ဒါတော်တော်ခက်ခဲမှာပဲ။\"", nextSceneId: 'scene_ch4_06_poelay_end_date', stateUpdates: {relationshipScores: [{character: 'poeLay', change: 2}]} },
            { text: "\"ဒါ... ငါမမျှော်လင့်ထားဘူး။\"", nextSceneId: 'scene_ch4_06_poelay_end_date', stateUpdates: {relationshipScores: [{character: 'poeLay', change: -1}]} },
            { text: "ဘာပြောရမှန်းမသိဘဲ ခေါင်းညိတ်လိုက်သည်။", nextSceneId: 'scene_ch4_06_poelay_end_date' }
        ]
    },
    'scene_ch4_06_poelay_end_date': {
        sceneId: 'scene_ch4_06_poelay_end_date',
        narratorText: ["သင်တို့နှစ်ယောက်တိတ်ဆိတ်စွာထိုင်နေကြသည်။ အရင်ကပေါ့ပါးတဲ့လေထုကပျောက်ကွယ်သွားပြီး ပိုလေးနက်ပြီးပိုမှန်ကန်တဲ့အရာတစ်ခုနဲ့အစားထိုးသွားသည်။"],
        dialogue: [
          {character: "ပိုးလေး", line: "ရှင်ထွက်ပြေးသွားမယ်လို့ထင်နေတာ။ လူတိုင်းကဒီလိုပဲ။"}
        ],
        playerChoices: [
            { text: "\"ငါဘယ်မှမသွားဘူး။\"", nextSceneId: 'scene_ch5_01_wati_call', stateUpdates: {relationshipScores: [{character: 'poeLay', change: 1}]} }
        ]
    }
};
