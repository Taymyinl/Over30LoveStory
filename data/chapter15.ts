import type { Scene } from '../types';

export const chapter15Data: Record<string, Scene> = {
    // CHAPTER 15: ENDINGS
    'scene_ch15_01_ending_wati': {
        sceneId: 'scene_ch15_01_ending_wati',
        narratorText: ["တစ်နှစ်အကြာ။ သင်နှင့်ဝတီသည် သင်တို့၏တိုက်ခန်းတွင် ဆိုဖာပေါ်တွင်ထိုင်နေကြသည်။ တိတ်ဆိတ်ငြိမ်သက်ပြီး သက်သောင့်သက်သာရှိနေသည်။", "သူမကသင့်ကိုခေါင်းမှီလိုက်သည်။ 'ကျွန်မဒါကိုကြိုက်တယ်' ဟုသူမပြောသည်။ သင်လည်းကြိုက်သည်။ ၃၄ နှစ်ကြာယားယံမှုက နောက်ဆုံးတော့ပျောက်ကင်းသွားပြီ။"],
        playerChoices: [
            { text: "ဇာတ်လမ်းပြီးဆုံးပါပြီ။ (ဝတီနှင့်အတူ)", nextSceneId: 'scene_wai_yan_epilogue_check', stateUpdates: {keyEvents: ['ending_wati_romance', 'romance_success']} }
        ]
    },
    'scene_ch15_01_ending_thuthumay': {
        sceneId: 'scene_ch15_01_ending_thuthumay',
        narratorText: ["တစ်နှစ်အကြာ။ သင်က K-pop ဖျော်ဖြေပွဲတစ်ခုမှာရှိနေသည်။ ဒီတစ်ခါတော့သင်ကအော်ဟစ်နေသည်။ သုသုမေကသင့်ဘေးမှာရယ်မောနေသည်။", "ဘဝကဆူညံ၊ ရှုပ်ထွေးပြီး အံ့ဩစရာကောင်းလောက်အောင်ပျော်စရာကောင်းနေသည်။ သင်ကသူမကိုအမီလိုက်နိုင်ဖို့ကြိုးစားနေရတုန်းပဲ၊ ဒါပေမဲ့သင်ဘယ်တော့မှမရပ်တန့်ချင်တော့ဘူး။"],
        playerChoices: [
            { text: "ဇာတ်လမ်းပြီးဆုံးပါပြီ။ (သုသုမေနှင့်အတူ)", nextSceneId: 'scene_wai_yan_epilogue_check', stateUpdates: {keyEvents: ['ending_thuthumay_romance', 'romance_success']} }
        ]
    },
    'scene_ch15_01_ending_hninpwint': {
        sceneId: 'scene_ch15_01_ending_hninpwint',
        narratorText: ["တစ်နှစ်အကြာ။ သင်နှင့်နှင်းပွင့်သည် သင်တို့၏ဘားတွင်ထိုင်နေကြသည်၊ whiteboard တစ်ခုပေါ်တွင်ငြင်းခုန်နေကြသည်။ ခေါင်းစဉ်ကတော့: ကမ္ဘာပေါ်မှာအကောင်းဆုံးဘီယာ။", "သူမကပြုံးလိုက်သည်။ 'ရှင့်အချက်အလက်တွေကမှားနေတယ်၊ ဒါပေမဲ့ရှင့်ရဲ့စိတ်အားထက်သန်မှုကတော့น่ารักတယ်။' ဒါကသင်ကြားဖူးသမျှထဲမှာအချစ်ဆုံးစကားပဲ။"],
        playerChoices: [
            { text: "ဇာတ်လမ်းပြီးဆုံးပါပြီ။ (နှင်းပွင့်နှင့်အတူ)", nextSceneId: 'scene_wai_yan_epilogue_check', stateUpdates: {keyEvents: ['ending_hninpwint_romance', 'romance_success']} }
        ]
    },
    'scene_ch15_01_ending_poelay': {
        sceneId: 'scene_ch15_01_ending_poelay',
        narratorText: ["တစ်နှစ်အကြာ။ သင်ပန်းခြံထဲမှာရှိနေသည်။ ပိုးလေးကသင့်ဘေးမှာထိုင်နေပြီး သူမသမီးလေးမေကမြက်ခင်းပေါ်မှာပြေးလွှားနေသည်။", "ဒါကစိတ်လှုပ်ရှားစရာမကောင်းဘူး။ ဒါကစွန့်စားမှုတစ်ခုမဟုတ်ဘူး။ ဒါကဘဝပဲ။ ရှုပ်ထွေးပြီး၊ လှပပြီး၊ နောက်ဆုံးတော့... အေးချမ်းတယ်။"],
        playerChoices: [
            { text: "ဇာတ်လမ်းပြီးဆုံးပါပြီ။ (ပိုးလေးနှင့်အတူ)", nextSceneId: 'scene_wai_yan_epilogue_check', stateUpdates: {keyEvents: ['ending_poelay_romance', 'romance_success']} }
        ]
    },
    'scene_ch15_01_ending_single': {
        sceneId: 'scene_ch15_01_ending_single',
        narratorText: ["တစ်နှစ်အကြာ။ သင်ကသင့်ဘားမှာရှိနေသည်။ တိတ်ဆိတ်ငြိမ်သက်သော အင်္ဂါနေ့ညနေခင်း။", "ဒီတစ်ခါတော့ တိတ်ဆိတ်မှုက နှစ်သိမ့်မှုပေးသည်။ သင်ကတစ်ယောက်တည်း၊ ဒါပေမဲ့အထီးမကျန်တော့ဘူး။ သင်ကသင်ကိုယ်တိုင်နဲ့အဆင်ပြေနေပြီ။", "အောင်ရဲမာန်ဝင်လာသည်။ 'ငါ့ကောင်!' သူစပြောသည်။ 'ငါမှာအကြံတစ်ခုရှိတယ်...' သင်ရယ်လိုက်သည်။"],
        playerChoices: [
            { text: "ဇာတ်လမ်းပြီးဆုံးပါပြီ။ (လူပျိုကြီး)", nextSceneId: 'scene_credits' }
        ]
    },
    'scene_ch15_01_ending_platonic': {
        sceneId: 'scene_ch15_01_ending_platonic',
        narratorText: ["တစ်နှစ်အကြာ။ သင်နှင့်ထက်နိုင်သည် ဘားတွင်ထိုင်နေကြသည်၊ ဘီယာသောက်ရင်းစကားပြောနေကြသည်။", "သင်တို့ကမ္ဘာကြီးကိုဖြေရှင်းနေကြသည်။ သင့်အချစ်ရေးကမပြောင်းလဲသေးဘူး၊ ဒါပေမဲ့သင်ကပြောင်းလဲသွားပြီ။ သင်ကပိုပျော်ရွှင်တယ်၊ ပိုပေါ့ပါးတယ်။", "သင်ကအချစ်ကိုမတွေ့ခဲ့ဘူး၊ ဒါပေမဲ့သင်ကကိုယ့်ကိုယ်ကိုတွေ့ခဲ့တယ်။ ပြီးတော့အဲဒါကပိုကောင်းတယ်။"],
        playerChoices: [
            { text: "ဇာတ်လမ်းပြီးဆုံးပါပြီ။ (ထက်နိုင်နှင့်အတူ)", nextSceneId: 'scene_credits' }
        ]
    },

    // WAI YAN EPILOGUE
    'scene_wai_yan_epilogue_check': {
        sceneId: 'scene_wai_yan_epilogue_check',
        narratorText: [],
        playerChoices: [
            { text: "ဆက်ရန်...", 
              nextSceneId: 'scene_credits',
              branches: [{requiredKeyEvent: 'romance_success', nextSceneId: 'scene_wai_yan_epilogue_intro'}] 
            }
        ]
    },
    'scene_wai_yan_epilogue_intro': {
        sceneId: 'scene_wai_yan_epilogue_intro',
        narratorText: [
            "**--- လပေါင်းများစွာကြာပြီးနောက် ---**",
            "တစ်ညမှာ။ ထူးဆန်းတဲ့အရာတစ်ခုဖြစ်ပွားခဲ့တယ်။",
            "သင်၊ အောင်ရဲမာန်၊ ထွန်းကိုကိုနဲ့ လင်းကိုတို့အားလုံးက တူညီတဲ့အိပ်မက်ကို တစ်ပြိုင်နက်တည်းမက်ခဲ့ကြတယ်။"
        ],
        playerChoices: [
            { text: "...", nextSceneId: 'scene_wai_yan_epilogue_dream' }
        ]
    },
    'scene_wai_yan_epilogue_dream': {
        sceneId: 'scene_wai_yan_epilogue_dream',
        narratorText: [
            "အိပ်မက်ထဲမှာ၊ သင်တို့အားလုံးက 'The Den' မှာအရင်တုန်းကလိုပဲ ပြန်ရောက်နေကြတယ်။ ငယ်ရွယ်ပြီး ပေါ့ပါးလွတ်လပ်စွာနဲ့ပေါ့။",
            "ပြီးတော့ သူအဲဒီမှာရှိနေတယ်။ ဝေယံ။ သူကသင့်တို့ရဲ့ပျောက်ဆုံးသွားတဲ့သူငယ်ချင်း။ သူကနှစ်ပေါင်းများစွာကတည်းကဆုံးပါးသွားခဲ့ပြီ။ ဒါပေမဲ့အိပ်မက်ထဲမှာတော့ သူကအသက်ရှင်နေပြီး၊ ငြိမ်းချမ်းစွာပြုံးနေတယ်။",
            "သူကသင်တို့တစ်ယောက်ချင်းစီကိုကြည့်ပြီး ရိုးရှင်းတဲ့စကားတစ်ခွန်းပြောလိုက်တယ်။"
        ],
        dialogue: [
            { character: "ဝေယံ", line: "သူပြန်လာပြီ။" }
        ],
        playerChoices: [
            { text: "...", nextSceneId: 'scene_wai_yan_epilogue_wakeup' }
        ]
    },
    'scene_wai_yan_epilogue_wakeup': {
        sceneId: 'scene_wai_yan_epilogue_wakeup',
        narratorText: [
            "သင်တို့လေးယောက်လုံးတစ်ပြိုင်နက်တည်းနိုးထလာကြသည်။ နှလုံးခုန်မြန်နေပြီး၊ လွမ်းဆွတ်မှု၊ နားမလည်နိုင်မှုနဲ့ မရှင်းပြနိုင်တဲ့အအေးဓာတ်တစ်ခုကိုခံစားနေရသည်။",
            "ဒါကအမှတ်တရတစ်ခုထက်ပိုခဲ့တယ်။ ဒါကသတင်းစကားတစ်ခုလိုပဲ။",
            "၃၄ နှစ်ကြာယားယံမှုကပြီးဆုံးသွားပြီဖြစ်နိုင်ပေမယ့် ဇာတ်လမ်းကတော့မပြီးသေးဘူး။"
        ],
        playerChoices: [
            { text: "ပြီးပါပြီ။", nextSceneId: 'scene_credits' }
        ]
    },
    'scene_credits': {
        sceneId: 'scene_credits',
        narratorText: ["ကစားသည့်အတွက်ကျေးဇူးတင်ပါသည်။"],
        playerChoices: [
            {text: "အစမှပြန်ကစားရန်", nextSceneId: 'scene_01_bar_ambush'}
        ]
    }
};