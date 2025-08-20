import type { Scene } from '../types';

export const chapter5Data: Record<string, Scene> = {
    // CHAPTER 5: A SECOND CHANCE (WATI)
    'scene_ch5_01_wati_call': {
      sceneId: 'scene_ch5_01_wati_call',
      narratorText: ["တစ်ပတ်ခန့်အကြာ၊ သင်ဘားတွင် အလုပ်ရှုပ်နေစဉ် သင့်ဖုန်းမြည်လာသည်။ မထင်မှတ်ဘဲ ဝတီဆီကဖြစ်သည်။"],
      dialogue: [
        {character: "ဝတီ", line: "ဟယ်လို၊ ကိုသန့်လင်းစိုးလား? ဝတီပါ။ မအားရင်တောင်းပန်ပါတယ်။"}
      ],
      playerChoices: [
        {text: "\"ဪ၊ ဝတီ။ ရပါတယ်။ ဘာကိစ္စရှိလို့လဲ?\"", nextSceneId: 'scene_ch5_02_wati_proposes_date'},
        {text: "\"အင်း၊ နည်းနည်းတော့အလုပ်ရှုပ်နေတယ်။\"", nextSceneId: 'scene_ch5_02_wati_proposes_date', stateUpdates: {relationshipScores: [{character: 'wati', change: -1}]}}
      ]
    },
    'scene_ch5_02_wati_proposes_date': {
      sceneId: 'scene_ch5_02_wati_proposes_date',
      narratorText: ["သူမ၏အသံသည် ဖုန်းထဲတွင် အနည်းငယ်တုန်ယင်နေသော်လည်း တည်ငြိမ်မှုရှိသည်။"],
      dialogue: [
        {character: "ဝတီ", line: "ဟိုနေ့က ပြခန်းမှာ... အဆင်မပြေဖြစ်သွားတဲ့အတွက် တောင်းပန်ပါတယ်။ ရှင့်သူငယ်ချင်းက... တော်တော်လေး... စိတ်အားထက်သန်ပုံပဲ။ ဒါနဲ့... ကျွန်မစဉ်းစားမိတာက၊ နောက်တစ်ခါထပ်တွေ့ရင်ကောင်းမလားလို့ပါ။ ပိုပြီး... သာမန်နေရာတစ်ခုမှာပေါ့။"}
      ],
      internalMonologue: "သူကငါ့ကိုပြန်ချိန်းနေတာလား? မဆိုးပါဘူး။ အနုပညာပြခန်းကအဖြစ်အပျက်ကိုသူမစိတ်ထဲမထားဘူးဆိုတာကောင်းတယ်။",
      playerChoices: [
        {text: "\"စိတ်ကူးကောင်းပဲ။ ဘယ်နေရာမှာတွေ့ချင်လဲ?\"", nextSceneId: 'scene_ch5_03_wati_date_2_intro', stateUpdates: {keyEvents: ['agreed_to_date_2_wati']}},
        {text: "\"အင်း... ကျွန်တော်မသေချာဘူး။ အခုတလောတော်တော်အလုပ်များနေလို့။\"", nextSceneId: 'scene_ch6_01_hninpwint_call'}
      ]
    },
    'scene_ch5_03_wati_date_2_intro': {
        sceneId: 'scene_ch5_03_wati_date_2_intro',
        narratorText: ["သင်တို့နှစ်ယောက် ညဈေးတန်းတစ်ခုတွင် တွေ့ဆုံရန်သဘောတူလိုက်ကြသည်။ လူစည်ကားပြီး ဆူညံကာ အနုပညာပြခန်းနှင့် လုံးဝဆန့်ကျင်ဘက်ဖြစ်သည်။", "ဝတီသည် ဂျင်းဘောင်းဘီနှင့် တီရှပ်ရိုးရိုးလေးဝတ်ထားပြီး ယခင်ကထက် ပို၍ပေါ့ပေါ့ပါးပါးဖြစ်နေသည်။"],
        dialogue: [
          {character: "ဝတီ", line: "ဒီနေရာကိုကြိုက်မယ်လို့ထင်ပါတယ်။ လူတွေစည်ကားတာက စိတ်ဝင်စားစရာကောင်းတယ်မလား?"}
        ],
        playerChoices: [
          {text: "\"တိတ်ဆိတ်တာထက်တော့သေချာပေါက်ပိုကောင်းပါတယ်။ ဒီလိုနေရာမျိုးကြိုက်မယ်လို့မထင်ထားဘူး။\"", nextSceneId: 'scene_ch5_04_wati_date_2_talk', stateUpdates: {relationshipScores: [{character: 'wati', change: 1}]}},
          {text: "\"ဒါက... ဆူညံတယ်။\"", nextSceneId: 'scene_ch5_04_wati_date_2_talk', stateUpdates: {relationshipScores: [{character: 'wati', change: -1}]}}
        ]
      },
      'scene_ch5_04_wati_date_2_talk': {
        sceneId: 'scene_ch5_04_wati_date_2_talk',
        narratorText: ["သူမသည် မုန့်လုံးတစ်လုံးကို အားရပါးရစားရင်း ရယ်လိုက်သည်။"],
        dialogue: [
          {character: "ဝတီ", line: "ကျွန်မကအမြဲတမ်း 'အဆင်ပြေတဲ့' လူတစ်ယောက်မဟုတ်ပါဘူး။ တခါတလေတော့လည်း ရှုပ်ယှက်ခတ်နေတာကိုကြိုက်တယ်။ လူတွေရဲ့ဇာတ်လမ်းတွေကိုကြည့်ရတာပေါ့။ ရှင်ကရော? ဘားမှာအလုပ်လုပ်တာစိတ်ဝင်စားစရာအကောင်းဆုံးကဘာလဲ?"}
        ],
        playerChoices: [
          {text: "\"လူတွေရဲ့အကောင်းဆုံးနဲ့အဆိုးဆုံးအချိန်တွေကိုမြင်ရတာပဲ။ တစ်ညတည်းမှာပဲ စေ့စပ်ပွဲနဲ့အသည်းကွဲခြင်းကိုတွေ့နိုင်တယ်။\"", nextSceneId: 'scene_ch5_05_htunKoKo_interrupts'},
          {text: "\"ရိုးရိုးသားသားပြောရရင်တော့ ပိတ်ချိန်ပါပဲ။\"", nextSceneId: 'scene_ch5_05_htunKoKo_interrupts', stateUpdates: {relationshipScores: [{character: 'wati', change: -1}]}}
        ]
      },
      'scene_ch5_05_htunKoKo_interrupts': {
        sceneId: 'scene_ch5_05_htunKoKo_interrupts',
        narratorText: ["သင်တို့စကားပြောနေစဉ်မှာပဲ လူတစ်ယောက်က သင့်ပခုံးကိုလာဖက်လိုက်သည်။ အလွန်အကျွံရင်းနှီးစွာပင်။ ထိုအရာက ဘီယာနံ့နှင့် စျေးပေါသောကိုယ်ခန္ဓာဖျန်းဆေးရည်နံ့ရနေသည်။ ထွန်းကိုကိုဖြစ်သည်။"],
        dialogue: [
          {character: "ထွန်းကိုကို", line: "ကိုသန့်! ငါ့ကောင်ကြီး! မင်းဒီမှာဘာလုပ်နေ... အိုး! မင်းဒိတ်လုပ်နေတာပဲ! ဟေး! ငါကထွန်းကိုကို! သန့်လင်းစိုးရဲ့အချစ်ဆုံးသူငယ်ချင်း!"}
        ],
        internalMonologue: "အိုး ဘုရားသခင်။ မြေကြီးကငါ့ကိုမြိုသွားပါတော့။",
        playerChoices: [
          {text: "ယဉ်ကျေးစွာသူ့ကိုမိတ်ဆက်ပေးလိုက်သည်။ \"ဝတီ၊ ဒါကထွန်းကိုကိုပါ။ ကျွန်တော့်သူငယ်ချင်းပါ။ ထွန်းကိုကို၊ ဒါဝတီပါ။\"", nextSceneId: 'scene_ch5_06_wati_end_date_2'},
          {text: "သူ့ကိုလျစ်လျူရှုလိုက်သည်။ \"တောင်းပန်ပါတယ်၊ ခင်ဗျားကိုကျွန်တော်သိလို့လား?\"", nextSceneId: 'scene_ch5_06_wati_end_date_2', stateUpdates: {relationshipScores: [{character: 'htunKoKo', change: -2}, {character: 'wati', change: 1}]}}
        ]
      },
      'scene_ch5_06_wati_end_date_2': {
        sceneId: 'scene_ch5_06_wati_end_date_2',
        narratorText: ["ထွန်းကိုကိုက ဝတီကိုလက်ဆွဲနှုတ်ဆက်ပြီးနောက် နောက်ထပ်မိနစ်နှစ်ဆယ်လောက် မဆိုင်တဲ့စကားတွေပြောနေတော့သည်။ နောက်ဆုံးမှာတော့ သင်သူ့ကိုနှင်ထုတ်နိုင်ခဲ့သည်။", "အခြေအနေကတော့နည်းနည်းထူးဆန်းသွားပေမယ့် ဝတီကတော့ရယ်နေသည်။"],
        dialogue: [
          {character: "ဝတီ", line: "ရှင့်သူငယ်ချင်းတွေက... တော်တော်လေး... စိတ်ဝင်စားစရာကောင်းတယ်။"}
        ],
        playerChoices: [
          {text: "\"အဲဒါသူတို့ကိုဖော်ပြဖို့နည်းလမ်းတစ်ခုပဲ။ တောင်းပန်ပါတယ်။\"", nextSceneId: 'scene_ch6_01_hninpwint_call'},
          {text: "\"သူတို့ကသစ္စာရှိတယ်။ အဲဒါတော့ပြောရမယ်။\"", nextSceneId: 'scene_ch6_01_hninpwint_call', stateUpdates: {relationshipScores: [{character: 'wati', change: 1}]}}
        ]
      }
};