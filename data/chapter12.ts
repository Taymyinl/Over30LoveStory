import type { Scene } from '../types';

export const chapter12Data: Record<string, Scene> = {
    // CHAPTER 12: THE POINT OF NO RETURN
    'scene_ch12_01_fork_in_the_road': {
        sceneId: 'scene_ch12_01_fork_in_the_road',
        narratorText: [
            "သင်၏တောင်းပန်မှုများအပြီး နှစ်ရက်အကြာတွင် အဖြစ်အပျက်နှစ်ခု တပြိုင်နက်တည်း ဖြစ်ပွားခဲ့သည်။",
            "ပထမအဖြစ်အပျက်- သင်တောင်းပန်မှု အောင်မြင်ခဲ့သော အမျိုးသမီးတစ်ဦးထံမှ message တစ်စောင် ရောက်လာသည်။ 'ဟေး၊ ရှင်တကယ်တောင်းပန်ချင်တယ်ဆိုရင် ကျွန်မကိုဒီညနေ လက်ဖက်ရည်ဝယ်တိုက်ပါ။'",
            "ဒုတိယအဖြစ်အပျက်- အောင်ရဲမာန်က သင့်ထံ အသည်းအသန်ဖုန်းခေါ်သည်။ 'သန့်လင်းစိုး! ဒုက္ခရောက်ပြီ! ငါ့ဆိုင်ကယ်ပျက်သွားလို့ လင်းကိုနဲ့ငါ လမ်းဘေးမှာရောက်နေတယ်။ ထွန်းကိုကိုက သူ့အမေဆီသွားနေတယ်။ မင်းငါတို့ကိုလာခေါ်လို့ရမလား?'"
        ],
        internalMonologue: "ကံကြမ္မာကငါ့ကိုရယ်နေတာပဲ။ ငါ့မှာရွေးချယ်စရာတစ်ခုရှိတယ်- နောက်ဆုံးတော့တကယ့်ဒိတ်တစ်ခုဖြစ်နိုင်ခြေနဲ့ ငါ့ရဲ့အသုံးမကျပေမယ့်သစ္စာရှိတဲ့သူငယ်ချင်းတွေ။",
        playerChoices: [
            { 
                text: "ဒိတ်ကိုရွေးချယ်မည်။ သူငယ်ချင်းတွေကစောင့်နိုင်ပါတယ်။", 
                nextSceneId: 'scene_ch13_01_friends_path_intro', // Fallback, though a branch should always hit.
                branches: [
                    { requiredKeyEvent: 'apology_successful_wati', nextSceneId: 'scene_ch13_01_wati_date_3_intro' },
                    { requiredKeyEvent: 'apology_successful_thuthumay', nextSceneId: 'scene_ch13_01_thuthumay_date_3_intro' },
                    { requiredKeyEvent: 'apology_successful_hninpwint', nextSceneId: 'scene_ch13_01_hninpwint_date_3_intro' },
                    { requiredKeyEvent: 'apology_successful_poelay', nextSceneId: 'scene_ch13_01_poelay_date_3_intro' },
                ],
                stateUpdates: { keyEvents: ['chose_date_over_friends'] }
            },
            { 
                text: "သူငယ်ချင်းတွေကိုရွေးချယ်မည်။ သူတို့ကငါ့ကိုအရင်လိုအပ်တယ်။", 
                nextSceneId: 'scene_ch12_02_choose_friends',
                stateUpdates: { keyEvents: ['chose_friends_over_date'] }
            }
        ]
    },

    // Path: Choose the Friends
    'scene_ch12_02_choose_friends': {
        sceneId: 'scene_ch12_02_choose_friends',
        narratorText: [
            "သင်သက်ပြင်းချလိုက်ပြီး သင့်ကားသော့ကိုဆွဲယူလိုက်သည်။ သင်ဒိတ်လုပ်မည့်အမျိုးသမီးထံ 'တောင်းပန်ပါတယ်၊ အရေးပေါ်အခြေအနေတစ်ခုပေါ်လာလို့' ဟုစာပို့လိုက်သည်။ သူမဆီမှ reply ပြန်မလာပေ။",
            "သင်ရောက်သွားသောအခါ အောင်ရဲမာန်နှင့်လင်းကိုတို့သည် လမ်းဘေးတွင် စိတ်ပျက်စွာထိုင်နေကြသည်။"
        ],
        dialogue: [
            { character: "အောင်ရဲမာန်", line: "မင်းရောက်လာပြီ! မင်းကတကယ့်သူရဲကောင်းပဲ! ငါတို့မင်းကိုသံသယဝင်မိတော့မလို့။" },
            { character: "လင်းကို", line: "ဒီဆိုင်ကယ်က K-pop အဖွဲ့တစ်ဖွဲ့လိုပဲ။ တောက်ပြောင်ပေမယ့်စိတ်မချရဘူး။" }
        ],
        playerChoices: [
            { text: "ဇာတ်လမ်း၏နောက်ဆုံးအပိုင်းသို့ ဆက်ရန်...", nextSceneId: 'scene_ch13_01_friends_path_intro' }
        ]
    }
};