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
          {text: "\"အဲဒါသူတို့ကိုဖော်ပြဖို့နည်းလမ်းတစ်ခုပဲ။ တောင်းပန်ပါတယ်။\"", nextSceneId: 'scene_ch5_07_branch_after_wati'},
          {text: "\"သူတို့ကသစ္စာရှိတယ်။ အဲဒါတော့ပြောရမယ်။\"", nextSceneId: 'scene_ch5_07_branch_after_wati', stateUpdates: {relationshipScores: [{character: 'wati', change: 1}]}}
        ]
      },
      'scene_ch5_07_branch_after_wati': {
        sceneId: 'scene_ch5_07_branch_after_wati',
        narratorText: ["ဝတီနဲ့ဒိတ်ပြီးသွားတော့ သင်နည်းနည်းစဉ်းစားချိန်လိုလာတယ်။ ဒီ 'ကောင်စီ' ရဲ့စီစဉ်မှုတွေကတစ်မျိုးပဲ။ သင်တကယ်ဘာလိုချင်လဲဆိုတာကိုပြန်သုံးသပ်ဖို့လိုလာပြီ။"],
        playerChoices: [
          {text: "ဇာတ်လမ်းအတိုင်းဆက်သွားရန်... (နှင်းပွင့်ကိုဆက်သွယ်ရန်)", nextSceneId: 'scene_ch6_01_hninpwint_call'},
          {text: "ငါတကယ်အရက်သောက်ဖို့လိုနေပြီ။ သူငယ်ချင်းဟောင်းထွန်းမင်းအောင်ကိုဖုန်းဆက်ကြည့်မယ်။", nextSceneId: 'scene_ch5_08_tunminaung_intro'}
        ]
      },
      'scene_ch5_08_tunminaung_intro': {
        sceneId: 'scene_ch5_08_tunminaung_intro',
        narratorText: ["သင်ထွန်းမင်းအောင်ကိုဖုန်းဆက်လိုက်သည်။ သူက မြို့ထဲကလူသိပ်မသိတဲ့ ဘားအ陈旧တစ်ခုမှာရှိနေသည်။ 'မင်းအတွက်ငါ့မှာအချိန်အမြဲရှိတယ်ကွာ' ဟုသူပြောသည်။", "သင်ရောက်သွားတော့ သူကထောင့်โต๊ะတစ်လုံးမှာထိုင်နေပြီး ဂီတာအဟောင်းတစ်လုံးကိုတီးခတ်နေသည်။ သူကသင့်ကိုတွေ့တော့ပြုံးလိုက်သည်။ သူ့အပြုံးကပင်ပန်းနေပေမယ့်နွေးထွေးမှုရှိသည်။"],
        dialogue: [
            {character: "ထွန်းမင်းအောင်", line: "ငါ့ကောင်ကြီး! မင်းမျက်နှာကကမ္ဘာကြီးပြိုလဲတော့မယ့်အတိုင်းပဲ။ မိန်းကလေးကိစ္စပဲမဟုတ်လား?"}
        ],
        playerChoices: [
          {text: "\"အဲဒီလောက်တောင်သိသာနေလား?\"", nextSceneId: 'scene_ch5_09_tunminaung_talk', stateUpdates: {relationshipScores: [{character: 'tunMinAung', change: 1}]}},
          {text: "\"မဟုတ်ပါဘူး။ ငါဒီတိုင်း... ဘီယာသောက်ချင်လို့။\"", nextSceneId: 'scene_ch5_09_tunminaung_talk'}
        ]
      },
      'scene_ch5_09_tunminaung_talk': {
        sceneId: 'scene_ch5_09_tunminaung_talk',
        narratorText: ["သင်သူ့ကိုဖြစ်ပျက်ခဲ့တာတွေအားလုံးပြောပြလိုက်တယ်- 'ကောင်စီ'၊ ဒိတ်သုံးလေးခု၊ ပြီးတော့သင်ဘယ်လောက်တောင်စိတ်ရှုပ်နေလဲဆိုတာကိုပေါ့။ သူကတိတ်တဆိတ်နားထောင်နေပြီး ဘီယာတစ်ငုံသောက်လိုက်တယ်။"],
        dialogue: [
            {character: "ထွန်းမင်းအောင်", line: "အောင်ရဲမာန်တို့ကတော့ကလေးတွေပဲ။ သူတို့ကအချစ်ဆိုတာကို formula တစ်ခုလိုထင်နေကြတယ်။ x+y=z ပေါ့။ ဒါပေမဲ့အချစ်ကအဲလိုမဟုတ်ဘူး။ အချစ်ဆိုတာကမင်းရဲ့သီချင်းတစ်ပုဒ်ကိုဖျက်ဆီးလိုက်တဲ့ feedback loop တစ်ခုလိုပဲ။ ရှုပ်ထွေးတယ်၊ ဆူညံတယ်၊ ပြီးတော့တစ်ခါတလေကျရင်မင်းရဲ့နားစည်ကိုကွဲထွက်သွားစေတယ်။"},
            {character: "ထွန်းမင်းအောင်", line: "မင်းလုပ်ရမှာကမင်းရဲ့ amplifier ကိုရှာဖို့ပဲ။ မင်းရဲ့အသံကိုပိုကျယ်စေမယ့်သူ၊ မင်းရဲ့အမှားအယွင်းတွေကိုတောင်ဂီတတစ်ခုလိုဖြစ်သွားစေမယ့်သူပေါ့။"}
        ],
        internalMonologue: "ဒါက... ငါကြားဖူးသမျှထဲမှာအနက်နဲဆုံးအကြံဉာဏ်ပဲ။",
        playerChoices: [
          {text: "\"ငါ့ amplifier ကိုငါဘယ်လိုရှာရမှာလဲ?\"", nextSceneId: 'scene_ch5_10_tunminaung_end'},
          {text: "\"ဒါကတော့... အရမ်းကဗျာဆန်တာပဲ။\"", nextSceneId: 'scene_ch5_10_tunminaung_end'}
        ]
      },
      'scene_ch5_10_tunminaung_end': {
        sceneId: 'scene_ch5_10_tunminaung_end',
        dialogue: [
            {character: "ထွန်းမင်းအောင်", line: "အဲဒါကိုတော့မင်းကိုယ်တိုင်ရှာရမှာပေါ့ကွာ။ ဒါပေမဲ့အကြံပေးရရင်တော့... သူများတွေရဲ့သီချင်းတွေကိုလိုက်မဆိုနဲ့တော့။ မင်းရဲ့ကိုယ်ပိုင်သီချင်းကိုစရေးလိုက်တော့။"}
        ],
        narratorText: ["သင်တို့နှစ်ယောက်စကားမပြောဘဲထိုင်နေကြသည်။ သူ့စကားတွေကသင့်စိတ်ထဲမှာစွဲကျန်နေခဲ့သည်။"],
        playerChoices: [
          {text: "သူ့အကြံဉာဏ်အတွက်ကျေးဇူးတင်ပြီးဇာတ်လမ်းကိုဆက်ရန်...", nextSceneId: 'scene_ch6_01_hninpwint_call', stateUpdates: {relationshipScores: [{character: 'tunMinAung', change: 2}]}}
        ]
      }
};