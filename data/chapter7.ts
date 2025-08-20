import type { Scene } from '../types';

export const chapter7Data: Record<string, Scene> = {
    // CHAPTER 7: CONFRONTING THE AGE GAP (THU THU MAY)
    'scene_ch7_01_thuthumay_call': {
        sceneId: 'scene_ch7_01_thuthumay_call',
        narratorText: ["သင်အလုပ်မှပြန်လာပြီး ဆိုဖာပေါ်တွင်လှဲနေစဉ် ဖုန်းမြည်လာသည်။ သုသုမေ။ သူမ၏အသံသည် အလွန်တက်ကြွနေသည်။"],
        dialogue: [
            { character: "သုသုမေ", line: "ကိုသန့်! ဒီအပတ်သောကြာနေ့ဘာလုပ်မလဲ? ကျွန်မသူငယ်ချင်းတွေကတက္ကသိုလ်မှာ K-pop dance showcase လုပ်နေကြတာ! ရှယ်လန်းမှာ! လာရမယ်နော်!" }
        ],
        internalMonologue: "K-pop? တက္ကသိုလ်မှာ? ဒါငါ့အတွက်ငရဲဘုံရဲ့အဓိပ္ပါယ်ဖွင့်ဆိုချက်ပဲ။",
        playerChoices: [
            { text: "\"အင်း... ကြားရတာကောင်းတာပေါ့။ ငါအဲဒီမှာရှိနေမယ်။\"", nextSceneId: 'scene_ch7_02_thuthumay_date_2_intro', stateUpdates: {keyEvents: ['agreed_to_date_2_thuthumay']} },
            { text: "\"တောင်းပန်ပါတယ် သုသုမေ။ အဲဒီညငါအလုပ်ရှိတယ်။\"", nextSceneId: 'scene_ch8_01_poelay_call' }
        ]
    },
    'scene_ch7_02_thuthumay_date_2_intro': {
        sceneId: 'scene_ch7_02_thuthumay_date_2_intro',
        narratorText: [
            "သောကြာနေ့ည။ သင်တက္ကသိုလ်ခန်းမတစ်ခုသို့ရောက်ရှိလာသည်။ လူတွေပြည့်ကျပ်နေပြီး၊ bass သံက သင့်ရင်ဘတ်ကိုတုန်ခါစေသည်။ ပရိသတ်အများစုက သင့်ထက်အသက်တစ်ဝက်လောက်ငယ်ပုံရသည်။",
            "သုသုမေက သင့်ကိုလက်လှမ်းပြပြီး အုပ်စုထဲသို့ဆွဲခေါ်သွားသည်။ သူမမျက်လုံးများက စိတ်လှုပ်ရှားမှုဖြင့်တောက်ပနေသည်။"
        ],
        dialogue: [
            { character: "သုသုမေ", line: "ရှယ်မိုက်တယ်မလား? ကျွန်မသူငယ်ချင်းကအကအဖွဲ့ထဲကစင်တာပဲ!" }
        ],
        playerChoices: [
            { text: "ပြုံးပြီးခေါင်းညိတ်လိုက်သည်။ \"အရမ်းကောင်းတာပဲ!\"", nextSceneId: 'scene_ch7_03_thuthumay_date_2_friends' },
            { text: "\"ဒါက... အသံကျယ်တယ်။\"", nextSceneId: 'scene_ch7_03_thuthumay_date_2_friends', stateUpdates: {relationshipScores: [{character: 'thuThuMay', change: -1}]} }
        ]
    },
    'scene_ch7_03_thuthumay_date_2_friends': {
        sceneId: 'scene_ch7_03_thuthumay_date_2_friends',
        narratorText: ["ဖျော်ဖြေပွဲပြီးနောက် သုသုမေက သင့်ကိုသူမ၏သူငယ်ချင်းများနှင့်မိတ်ဆက်ပေးသည်။ သူတို့အားလုံးကစွမ်းအင်အပြည့်နှင့်သင့်ကို 'ဦး' ဟုခေါ်ကြသည်။"],
        dialogue: [
            { character: "သူငယ်ချင်း ၁", line: "ဦးက သုသုမေရဲ့... သူငယ်ချင်းလား?" },
            { character: "သူငယ်ချင်း ၂", line: "သူက BTS အကြောင်းသိလား?" }
        ],
        internalMonologue: "'ဦး' တဲ့။ ငါကပြတိုက်ထဲကပြထားတဲ့ပစ္စည်းတစ်ခုလိုပဲ။",
        playerChoices: [
            { text: "\"ငါတို့ကသူငယ်ချင်းတွေပါ။ ပြီးတော့ BTS က... ကင်းမ်ချီလုပ်တဲ့အဖွဲ့လား?\"", nextSceneId: 'scene_ch7_04_thuthumay_end_date_2', stateUpdates: {relationshipScores: [{character: 'thuThuMay', change: -1}]} },
            { text: "\"သူမရဲ့အုပ်ထိန်းသူလို့ပြောလို့ရပါတယ်။ ဟုတ်တယ်၊ BTS ကအတော်ဆုံးပဲ။\"", nextSceneId: 'scene_ch7_04_thuthumay_end_date_2', stateUpdates: {relationshipScores: [{character: 'thuThuMay', change: 1}]} }
        ]
    },
    'scene_ch7_04_thuthumay_end_date_2': {
        sceneId: 'scene_ch7_04_thuthumay_end_date_2',
        narratorText: ["သင်သူငယ်ချင်းများနှင့်စကားပြောပြီးနောက် သုသုမေကသင့်ကိုအပြင်သို့ဆွဲခေါ်လာသည်။"],
        dialogue: [
            { character: "သုသုမေ", line: "ဦးပျင်းနေလားမသိဘူး။ တောင်းပန်ပါတယ်။ သူတို့ကနည်းနည်း... အားအင်တွေများနေတယ်။" }
        ],
        playerChoices: [
            { text: "\"မဟုတ်တာ။ ပျော်စရာကြီးပါ။ ငါမင်းရဲ့ကမ္ဘာကိုခဏလောက်မြင်တွေ့ခွင့်ရလိုက်တယ်။\"", nextSceneId: 'scene_ch8_01_poelay_call', stateUpdates: {relationshipScores: [{character: 'thuThuMay', change: 1}]} },
            { text: "\"အင်း၊ ငါကနည်းနည်းအသက်ကြီးနေပြီထင်တယ်။ ဒါပေမဲ့မင်းပျော်နေတာမြင်ရတော့ငါလည်းပျော်ပါတယ်။\"", nextSceneId: 'scene_ch8_01_poelay_call'}
        ]
    }
};