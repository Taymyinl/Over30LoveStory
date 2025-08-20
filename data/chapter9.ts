import type { Scene } from '../types';

export const chapter9Data: Record<string, Scene> = {
    // CHAPTER 9: THE FRIENDS' ULTIMATE, DISASTROUS SCHEME
    'scene_ch9_01_friends_intervention': {
        sceneId: 'scene_ch9_01_friends_intervention',
        narratorText: ["နောက်တစ်ပတ်။ သင်ဘားမှာအေးဆေးနေတုန်း 'ကောင်စီ' ကဝင်လာသည်။ သူတို့မျက်နှာတွေကအရမ်းကိုလေးနက်နေသည်။"],
        dialogue: [
            { character: "အောင်ရဲမာန်", line: "သန့်လင်းစိုး။ ငါတို့စကားပြောဖို့လိုတယ်။" },
            { character: "ထွန်းကိုကို", line: "ဒါကကြားဝင်ဖြန်ဖြေမှုတစ်ခုပဲ။" },
            { character: "လင်းကို", line: "မင်း K-pop fan ဖြစ်သွားပြီလား? ငါတို့ကိုပြောပြလို့ရတယ်။" }
        ],
        playerChoices: [
            { text: "\"ဘာဖြစ်ကြတာလဲ? ငါဘားကိုမီးမရှို့မိပါဘူးနော်?\"", nextSceneId: 'scene_ch9_02_friends_master_plan' },
        ]
    },
    'scene_ch9_02_friends_master_plan': {
        sceneId: 'scene_ch9_02_friends_master_plan',
        narratorText: ["အောင်ရဲမာန်က whiteboard အသေးတစ်ချပ်ကိုထုတ်လိုက်သည်။"],
        dialogue: [
            { character: "အောင်ရဲမာန်", line: "ငါတို့မင်းရဲ့အချစ်ရေးတိုးတက်မှုကိုသုံးသပ်ပြီးပြီ။ မင်းကအရမ်းနှေးနေတယ်။ မင်းကတစ်ယောက်ပြီးတစ်ယောက်ဒိတ်နေတယ်။ ဒါကအချိန်ကုန်တယ်။" },
            { character: "ထွန်းကိုကို", line: "ဒါကြောင့်ငါတို့ကအစီအစဉ်ကိုအရှိန်မြှင့်တင်လိုက်ပြီ!" },
            { character: "အောင်ရဲမာန်", line: "ငါတို့က... အဖွဲ့လိုက်ဒိတ်တစ်ခုစီစဉ်လိုက်တယ်။ ဒီသောကြာနေ့ည။" }
        ],
        internalMonologue: "အဖွဲ့လိုက်ဒိတ်? သူတို့ဘာတွေပြောနေတာလဲ?",
        playerChoices: [
            { text: "\"မင်းတို့ငါ့ကိုမပြောဘဲနဲ့ဘယ်လိုလုပ်အဖွဲ့လိုက်ဒိတ်စီစဉ်လိုက်တာလဲ?\"", nextSceneId: 'scene_ch9_03_the_reveal' },
        ]
    },
    'scene_ch9_03_the_reveal': {
        sceneId: 'scene_ch9_03_the_reveal',
        narratorText: ["ထွန်းကိုကိုကအောင်ပွဲခံသလိုပြုံးလိုက်သည်။"],
        dialogue: [
            { character: "ထွန်းကိုကို", line: "ဒါကအကောင်းဆုံးအပိုင်းပဲ! ငါတို့ကဝတီ၊ သုသုမေ၊ နှင်းပွင့်... ပြီးတော့မင်းရဲ့တက္ကသိုလ်ကောင်မလေးပိုးလေးကိုပါဖိတ်ထားတယ်!" },
            { character: "လင်းကို", line: "သူတို့အားလုံးကိုတစ်နေရာတည်းမှာစုထားပြီးတော့သူတို့ရဲ့ K-pop နဲ့ပတ်သက်တဲ့သဘောထားတွေကိုတစ်ခါတည်းမေးလို့ရတာပေါ့။" }
        ],
        internalMonologue: "သူတို့... ဘာ... လုပ်... လိုက်... တယ်...?",
        playerChoices: [
            { text: "စကားတစ်ခွန်းမှမပြောနိုင်ဘဲ သူတို့ကိုကြောင်ကြည့်နေမိသည်။", nextSceneId: 'scene_ch9_04_the_disaster_date_intro' },
            { text: "\"မင်းတို့ရူးနေလား? ဒါကငါ့ဘဝမှာကြားဖူးသမျှထဲမှာအဆိုးဆုံးအကြံပဲ!\"", nextSceneId: 'scene_ch9_04_the_disaster_date_intro' }
        ]
    },
    'scene_ch9_04_the_disaster_date_intro': {
        sceneId: 'scene_ch9_04_the_disaster_date_intro',
        narratorText: [
            "သောကြာနေ့ည။ သင်ကကံဆိုးမိုးမှောင်ကျတဲ့စားသောက်ဆိုင်ကိုရောက်လာသည်။ သင့်သူငယ်ချင်းတွေကစားပွဲကြီးတစ်ခုမှာစောင့်နေကြသည်။",
            "ပထမဆုံးရောက်လာတာကဝတီ။ သူမကအခန်းကိုကြည့်ပြီးမျက်မှောင်ကြုတ်လိုက်တယ်။ ပြီးတော့သုသုမေရောက်လာပြီးအခန်းထဲကိုနေရောင်ခြည်ယူလာသလိုပဲ။ ပြီးတော့နှင်းပွင့်ရောက်လာပြီးအခန်းကိုချက်ချင်းသုံးသပ်နေတယ်။ နောက်ဆုံးမှာတော့ပိုးလေးရောက်လာပြီးအခြေအနေကိုနားမလည်နိုင်ဖြစ်နေသည်။"
        ],
        internalMonologue: "ဒါကငါ့ဘဝရဲ့အရှက်ရဆုံးညပဲဖြစ်တော့မယ်။",
        playerChoices: [
            { text: "အသက်ပြင်းပြင်းရှူပြီး သူတို့ကိုနှုတ်ဆက်လိုက်သည်။", nextSceneId: 'scene_ch9_05_the_group_date_talk' }
        ]
    },
    'scene_ch9_05_the_group_date_talk': {
        sceneId: 'scene_ch9_05_the_group_date_talk',
        narratorText: ["စားပွဲပေါ်ကတိတ်ဆိတ်မှုကနားမခံနိုင်အောင်ဖြစ်နေသည်။ သင့်သူငယ်ချင်းတွေကအခြေအနေကို'ကူညီ'ဖို့ဆုံးဖြတ်လိုက်ကြသည်။"],
        dialogue: [
            { character: "အောင်ရဲမာန်", line: "ကဲ၊ မိန်းကလေးတို့၊ သန့်လင်းစိုးရဲ့အားသာချက်အားနည်းချက်တွေကဘာတွေလဲ?" },
            { character: "ထွန်းကိုကို", line: "ဟုတ်တယ်! သူ့ရဲ့အဆိုးဆုံးအကျင့်ကဘာလဲ?" },
            { character: "လင်းကို", line: "BTS အဖွဲ့ဝင်တစ်ယောက်ယောက်ရဲ့နာမည်ကိုပြောနိုင်လား?" }
        ],
        playerChoices: [
            { text: "အောင်ရဲမာန်ကိုစားပွဲအောက်ကနေကန်လိုက်သည်။ \"ငါတို့ဒီတိုင်းပဲမှာလိုက်ကြရအောင်။\"", nextSceneId: 'scene_ch9_06_group_date_end' },
            { text: "မျက်နှာကိုလက်နဲ့အုပ်လိုက်သည်။ \"ငါတောင်းပန်ပါတယ်။\"", nextSceneId: 'scene_ch9_06_group_date_end' }
        ]
    },
    'scene_ch9_06_group_date_end': {
        sceneId: 'scene_ch9_06_group_date_end',
        narratorText: ["ညစာကတော့အဆိုးဆုံးပဲ။ မိန်းကလေးလေးယောက်လုံးကသင့်ကိုရောသင့်သူငယ်ချင်းတွေကိုရောမကျေမနပ်ကြည့်နေကြတယ်။ သူတို့ကအကြောင်းပြချက်အမျိုးမျိုးနဲ့တစ်ယောက်ပြီးတစ်ယောက်ထွက်သွားကြတယ်။", "သင်တစ်ယောက်တည်း သင့်ရဲ့မအောင်မြင်တဲ့အချစ်ရေးအပျက်အစီးတွေကြားမှာကျန်နေခဲ့သည်။"],
        playerChoices: [
            { text: "ဒါကတော့... တော်တော်ဆိုးတယ်။", nextSceneId: 'scene_ch10_01_the_hangover', stateUpdates: {
                relationshipScores: [
                    {character: 'wati', change: -5},
                    {character: 'thuThuMay', change: -5},
                    {character: 'hninPwint', change: -5},
                    {character: 'poeLay', change: -5},
                    {character: 'aungYeMan', change: -2},
                    {character: 'htunKoKo', change: -2}
                ],
                keyEvents: ['disaster_group_date']
            }}
        ]
    }
};