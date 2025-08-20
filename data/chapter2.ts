import type { Scene } from '../types';

export const chapter2Data: Record<string, Scene> = {
  // CHAPTER 2: FIRST DATES - WATI
  'scene_ch2_01_date_wati_intro': {
      sceneId: 'scene_ch2_01_date_wati_intro',
      narratorText: [
        "သင်အနုပညာပြခန်းသို့ရောက်ရှိလာသည်။ သန့်ရှင်းပြီးတိတ်ဆိတ်ငြိမ်သက်နေကာသံပရာရနံ့သန့်စင်ဆေးရည်အနံ့ကိုခပ်ရေးရေးရနေသည်။",
        "အခန်းঅপরဘက်တွင်သူမကိုသင်တွေ့လိုက်ရသည်။ ဝတီ။ ဖော်ပြထားသည့်အတိုင်းပင်- အဆင်ပြေပြီးယဉ်ကျေးသိမ်မွေ့သည်။ အနည်းငယ်... ငြီးငွေ့စရာကောင်းလောက်အောင်'ကောင်း'နေသည်။"
      ],
      dialogue: [
        {character: "ဝတီ", line: "သန့်လင်းစိုးလား? ကျွန်မဝတီပါ။ တွေ့ဆုံရတာဝမ်းသာပါတယ်။ မေလေးကရှင့်အကြောင်းတွေအများကြီးပြောပြထားတယ်။"}
      ],
      internalMonologue: "သူ့အပြုံးကလှတယ်။ သူ့အဝတ်အစားကလှတယ်။ အရာအားလုံးကအလွန်အမင်းသာယာနေတယ်။ ဒီညနေတော့ရှည်လျားမယ့်ပုံပဲ။",
      playerChoices: [
          {
            text: "\"တွေ့ရတာကျွန်တော်လည်းဝမ်းသာပါတယ်။ ကျွန်တော်က... ပန်းချီကားရဲ့အကွေးအကောက်ပုံစံတွေကိုအရမ်းကြိုက်တဲ့သူတစ်ယောက်ပါ။\"",
            nextSceneId: 'scene_ch2_02_wati_art_talk',
            stateUpdates: { relationshipScores: [{character: 'wati', change: 0}]}
          },
          {
            text: "\"မေလေးကတော့ပိုပိုသာသာပြောတတ်တယ်။ ကောင်းတဲ့အချက်တွေပဲလို့တော့မျှော်လင့်ပါတယ်။\"",
            nextSceneId: 'scene_ch2_02_wati_art_talk',
            stateUpdates: { relationshipScores: [{character: 'wati', change: 1}]}
          },
      ]
  },
  'scene_ch2_02_wati_art_talk': {
    sceneId: 'scene_ch2_02_wati_art_talk',
    narratorText: ["သူမကယဉ်ကျေးစွာရယ်ပြီး လုံးဝအနီရောင်ချယ်ထားတဲ့ ပန်းချီကားကြီးတစ်ချပ်ကို လက်ညှိုးထိုးပြတယ်။"],
    dialogue: [{character: "ဝတီ", line: "ဒီတစ်ချပ်ကိုဘယ်လိုထင်လဲ? ပန်းချီဆရာကဒါကို 'တိတ်ဆိတ်သောနှလုံးသားရဲ့ဒေါသ' ကိုကိုယ်စားပြုတယ်လို့ပြောတယ်။"}],
    playerChoices: [
      {
        text: "\"ဒါက... အရမ်းနီတာပဲ။ ဒေါသကတော်တော်ပြင်းထန်မှာပဲ။\"",
        nextSceneId: 'scene_ch2_03_wati_rival_appears',
        stateUpdates: {relationshipScores: [{character: 'wati', change: 0}]}
      },
      {
        text: "\"ကျွန်တော့်အထင်တော့ဒါကဆေးနီကိုဈေးပေါပေါနဲ့ရလိုက်တဲ့ပန်းချီဆရာကိုကိုယ်စားပြုတယ်။\"",
        nextSceneId: 'scene_ch2_03_wati_rival_appears',
        stateUpdates: {relationshipScores: [{character: 'wati', change: -1}]}
      },
      {
        text: "\"ဒါကကျွန်တော့်ဘဏ်စာရင်းရှင်းတမ်းကိုသတိရစေတယ်။ ဟုတ်တယ်၊ 'ဒေါသ' ဆိုတာမှန်လောက်တယ်။\"",
        nextSceneId: 'scene_ch2_03_wati_rival_appears',
        stateUpdates: {relationshipScores: [{character: 'wati', change: 1}]}
      }
    ]
  },
  'scene_ch2_03_wati_rival_appears': {
    sceneId: 'scene_ch2_03_wati_rival_appears',
    narratorText: ["ဝတီမတုံ့ပြန်ခင်မှာပဲ ကျယ်လောင်ပြီး စိတ်အနှောင့်အယှက်ဖြစ်စရာကောင်းတဲ့ ရင်းနှီးတဲ့အသံက ပြခန်းထဲမှာ ဟိန်းထွက်လာတယ်။"],
    dialogue: [
      {character: "ထူးအောင်", line: "သန့်လင်းစိုး! မင်းကိုဒီလိုနေရာမှာတွေ့မယ်လို့ငါသိသားပဲ! မင်းရဲ့ညံ့ဖျင်းတဲ့ပင်ကိုယ်စရိုက်ကိုဖုံးကွယ်ဖို့ယဉ်ကျေးမှုနည်းနည်းစုပ်ယူနေတာလား?"},
      {character: "ဝတီ", line: "...ရှင်သူ့ကိုသိလား?"}
    ],
    internalMonologue: "ကမ္ဘာပေါ်ကပြခန်းတွေအားလုံးထဲမှာမှသူကငါရှိတဲ့နေရာကိုရောက်လာရတယ်လို့။ ကွက်တိပဲ။",
    playerChoices: [
      {
        text: "\"ထူးအောင်ပါ။ ငါတို့ကငယ်ငယ်ကတည်းကသူငယ်ချင်းတွေ။ ကံမကောင်းစွာနဲ့ပေါ့။\"",
        nextSceneId: 'scene_ch2_04_wati_end_date',
        stateUpdates: {relationshipScores: [{character: 'htooAung', change: -1}]}
      },
      {
        text: "\"သူကငါ့ရဲ့အကြီးဆုံးပရိသတ်ပဲ။ ငါ့နောက်ကိုနေရာတကာလိုက်နေတာ။\"",
        nextSceneId: 'scene_ch2_04_wati_end_date',
        stateUpdates: {relationshipScores: [{character: 'wati', change: 1}]}
      },
    ]
  },
  'scene_ch2_04_wati_end_date': {
      sceneId: 'scene_ch2_04_wati_end_date',
      narratorText: [
        "ထူးအောင်ကမင်းတို့ကိုမထီမဲ့မြင်ပြုတဲ့အကြည့်နဲ့ကြည့်ပြီးထွက်သွားတယ်။ အခြေအနေကတော့နည်းနည်းပျက်စီးသွားပြီ။",
        "ဝတီနဲ့ကျန်တဲ့ဒိတ်ကတော့ယဉ်ကျေးတဲ့စကားပြောဆိုမှုတွေနဲ့ပဲပြီးသွားတယ်၊ ဒါပေမဲ့အစပိုင်းကလိုတော့မဟုတ်တော့ဘူး။ သူမကိုပြန်ပို့ပြီးတဲ့နောက်မှာတော့သင်အရက်သောက်ပြီးသုံးသပ်ချက်လုပ်ဖို့အရမ်းလိုအပ်နေတယ်။"
    ],
      playerChoices: [
        {text: "ပြန်သုံးသပ်ချက်အစည်းအဝေးသွားမယ်။", nextSceneId: 'scene_ch3_01_post_date_debrief_choice'}
      ]
    },

  // CHAPTER 2: FIRST DATES - THU THU MAY
  'scene_ch2_01_date_thuthumay_intro': {
      sceneId: 'scene_ch2_01_date_thuthumay_intro',
      narratorText: ["သောကြာနေ့ည။ သင့်ကိုအသက်တစ်ရာလောက်ကြီးသွားသလိုခံစားရစေတဲ့တေးဂီတမျိုးနဲ့ဆူညံနေတဲ့ခေတ်မီကဖေးဆိုင်တစ်ခုထဲကိုသင်ဝင်လာခဲ့သည်။", "ပန်းရောင်ဆံပင်တောက်တောက်နဲ့မိန်းကလေးတစ်ယောက်ကထောင့်โต๊ะကနေအားရပါးရလှမ်းပြနေတယ်။သူမပဲဖြစ်ရမည်။"],
      dialogue: [{character: "သုသုမေ", line: "OMG! ကိုသန့်ဟုတ်တယ်မလား? အောင်ရဲမာန်ရဲ့သူငယ်ချင်း? ဟိုင်း! ကျွန်မနာမည်သုသုမေ! ရှင့်အတွက် Caramel Macchiato နဲ့ whipped cream အပိုနဲ့မှာထားပြီးပြီ! ဒါကျွန်မအကြိုက်ဆုံးပဲ!"}],
      internalMonologue: "'ကိုသန့်?' ငါသူမထက်ဆယ်နှစ်လောက်ကြီးတယ်။ ပြီးတော့ငါ့အတွက်မှာထားပေးတယ်? ၉၀% သကြားဓာတ်တွေနဲ့လုပ်ထားတဲ့သောက်စရာကို? အောင်ရဲမာန်၊မင်းကိုငါသတ်မယ်။",
      playerChoices: [
          {
            text: "\"ကျေးဇူးပါ၊ဒါပေမယ့်ကျွန်တော်ကော်ဖီအနက်ပဲသောက်မယ်။ပိုပြင်းလေပိုကောင်းလေပဲ။\"",
            nextSceneId: 'scene_ch2_02_thuthumay_age_gap',
            stateUpdates: { relationshipScores: [{character: 'thuThuMay', change: -1}]}
          },
          {
            text: "\"ဝိုး၊မင်းကစွမ်းအင်တွေအပြည့်ပဲนะ။ဒီသကြားဗုံးကငါ့ကိုလိုက်မီအောင်ကူညီနိုင်မလားကြည့်ကြတာပေါ့။\"",
            nextSceneId: 'scene_ch2_02_thuthumay_age_gap',
            stateUpdates: { relationshipScores: [{character: 'thuThuMay', change: 1}]}
          },
      ]
  },
  'scene_ch2_02_thuthumay_age_gap': {
    sceneId: 'scene_ch2_02_thuthumay_age_gap',
    narratorText: ["သူမကသူမရဲ့သကြားဓာတ်များတဲ့သောက်စရာကိုတစ်ငုံကြီးမော့သောက်လိုက်တယ်၊ ဘာမှမဖြစ်သလိုပဲ။"],
    dialogue: [{character: "သုသုမေ", line: "ဒါနဲ့၊ အောင်ရဲမာန်ကပြောတယ်၊ ရှင်ကသုံးဆယ့်လေးနှစ်လား? အရမ်းအသက်ကြီးတာပဲ! လွန်ခဲ့တဲ့ရာစုနှစ်ကလိုပဲ! အင်တာနက်မရှိခင်ကဘယ်လိုနေလဲ?"}],
    playerChoices: [
      {
        text: "\"ငါတို့ကကျောက်တုံးတွေနဲ့ဆက်သွယ်ပြီးဂူနံရံတွေမှာပန်းချီဆွဲခဲ့ကြတယ်။ အဲဒီအချိန်ကပိုရိုးရှင်းခဲ့တယ်။\"",
        nextSceneId: 'scene_ch2_03_thuthumay_end_date',
        stateUpdates: {relationshipScores: [{character: 'thuThuMay', change: 1}]}
      },
      {
        text: "\"တိတ်ဆိတ်ငြိမ်သက်တယ်။ လူတွေကစာအုပ်တွေဖတ်ကြတယ်။ စက္ကူနဲ့လုပ်ထားတဲ့စာအုပ်တွေပေါ့။ ရှင်းပြရခက်တယ်။\"",
        nextSceneId: 'scene_ch2_03_thuthumay_end_date',
        stateUpdates: {relationshipScores: [{character: 'thuThuMay', change: -1}]}
      }
    ]
  },
  'scene_ch2_03_thuthumay_end_date': {
    sceneId: 'scene_ch2_03_thuthumay_end_date',
    narratorText: ["'ဒိတ်'ကနောက်ထပ်တစ်နာရီလောက်ဆက်သွားတယ်၊ TikTok trend တွေ၊ မင်းတစ်ခါမှမကြားဖူးတဲ့ influencer တွေနဲ့မင်းရဲ့မျိုးဆက်ကအရာအားလုံးကဘာကြောင့်'cheugy'ဖြစ်နေလဲဆိုတာတွေဆွေးနွေးရင်းနဲ့ပေါ့။ မင်းစိတ်ပိုင်းဆိုင်ရာနဲ့ဝိညာဉ်ပိုင်းဆိုင်ရာအရမ်းပင်ပန်းနေတယ်။"],
    playerChoices: [
      {text: "ညကိုအဆုံးသတ်ပြီးပြန်သုံးသပ်ဖို့သွားမယ်။", nextSceneId: 'scene_ch3_01_post_date_debrief_choice'}
    ]
  },

  // CHAPTER 2: FIRST DATES - HNIN PWINT
  'scene_ch2_01_date_hninpwint_intro': {
    sceneId: 'scene_ch2_01_date_hninpwint_intro',
    narratorText: ["ထွန်းကိုကိုပြောတဲ့ဘားကိုသင်သွားလိုက်သည်။ ဆူညံ၊ လူထူပြီးရင်းနှီးနေတဲ့နေရာ။ နောက်ဘက်ကโต๊ะတစ်လုံးမှာ laptop တစ်လုံးနဲ့အလုပ်ရှုပ်နေတဲ့သူမကိုသင်တွေ့လိုက်သည်။ သင်ချဉ်းကပ်သွားတော့သူမကမော့ကြည့်တယ်၊ သူ့မျက်လုံးတွေကထက်မြက်ပြီးစူးစမ်းနေတယ်။"],
    dialogue: [{character: "နှင်းပွင့်", line: "သန့်လင်းစိုး။ မင်းအချိန်မှန်ပဲ။ ငါအချိန်ကိုက်တာကိုတန်ဖိုးထားတယ်။ ထွန်းကိုကိုကမင်းခေါင်းမာတယ်လို့ပြောတယ်။ မင်းစိတ်ဝင်စားစရာကောင်းလားကြည့်ကြတာပေါ့။"}],
     internalMonologue: "သူမအချိန်မဖြုန်းတတ်ဘူးနော်? ဒါကအရမ်းကောင်းနိုင်သလိုအရမ်း၊ အရမ်းဆိုးသွားနိုင်တယ်။",
    playerChoices: [
      {
        text: "\"ကျွန်တော်ကအရည်အချင်းများစွာရှိတဲ့လူတစ်ယောက်ပါ။ ခေါင်းမာတာကတော့ကျွန်တော်အတော်ဆုံးအရာပဲ။\"",
        nextSceneId: 'scene_ch2_02_hninpwint_debate'
      },
      {
        text: "\"စိတ်ဝင်စားစရာလား? ကျွန်တော်ကဘားမန်နေဂျာပါ။ ကျွန်တော့်ဘဝက၉၀% ပုလင်းရေတွက်ပြီး၁၀% ကလူတွေကိုတော်လောက်ပြီလို့ပြောနေရတာပဲ။\"",
        nextSceneId: 'scene_ch2_02_hninpwint_debate',
        stateUpdates: {relationshipScores: [{character: 'hninPwint', change: -1}]}
      }
    ]
  },
   'scene_ch2_02_hninpwint_debate': {
    sceneId: 'scene_ch2_02_hninpwint_debate',
    narratorText: ["သူမရဲ့နှုတ်ခမ်းမှာသေးငယ်ပြီး မသိမသာအပြုံးတစ်ခုပေါ်လာတယ်။ သူမ laptop ကိုပိတ်လိုက်တယ်။"],
    dialogue: [{character: "နှင်းပွင့်", line: "ရိုးသားမှု။ ကောင်းတယ်။ ကောင်းပြီ၊ စမ်းသပ်မှုတစ်ခု။ ခေတ်သစ်လူ့အဖွဲ့အစည်းမှာအမွှမ်းတင်ဆုံးအယူအဆကဘာလဲ?"}],
    playerChoices: [
      {
        text: "\"အချစ်။ ဒါကနှုတ်ခွန်းဆက်ကတ်တွေနဲ့ဈေးကြီးတဲ့ညစာတွေရောင်းဖို့တီထွင်ထားတဲ့စျေးကွက်ရှာဖွေရေးလှည့်ကွက်တစ်ခုပဲ။\"",
        nextSceneId: 'scene_ch2_03_hninpwint_end_date',
        stateUpdates: {relationshipScores: [{character: 'hninPwint', change: 2}]}
      },
      {
        text: "\"အလုပ်များနေတဲ့ယဉ်ကျေးမှု။ ၂၄/၇ပတ်လုံးအလုပ်လုပ်မနေရင်ရှုံးနိမ့်သူတစ်ယောက်လို့သတ်မှတ်တဲ့အယူအဆပေါ့။\"",
        nextSceneId: 'scene_ch2_03_hninpwint_end_date',
        stateUpdates: {relationshipScores: [{character: 'hninPwint', change: 1}]}
      },
      {
        text: "\"ထောပတ်သီးပေါင်မုန့်။ ဒါကပေါင်မုန့်ပေါ်မှာသစ်သီးเละเละတင်ထားတာပဲ။ ကျွန်တော်နားမလည်ဘူး။\"",
        nextSceneId: 'scene_ch2_03_hninpwint_end_date',
        stateUpdates: {relationshipScores: [{character: 'hninPwint', change: -1}]}
      }
    ]
  },
  'scene_ch2_03_hninpwint_end_date': {
    sceneId: 'scene_ch2_03_hninpwint_end_date',
    narratorText: ["သူမကမင်းရဲ့အဖြေကိုသုံးသပ်ပြီးဖြည်းဖြည်းချင်းခေါင်းညိတ်လိုက်တယ်။ ပထမဆုံးအကြိမ်အဖြစ်သူမတကယ်စိတ်ဝင်စားသွားပုံရတယ်။", "အဲဒီနောက်စကားဝိုင်းကအံ့ဩစရာကောင်းလောက်အောင်လွယ်ကူသွားတယ်။ ဒဿနိကဗေဒကနေလက်ဖက်ရည်ကောင်းတစ်ခွက်ဘယ်လိုဖျော်ရမလဲဆိုတဲ့အထိအငြင်းအခုံတွေဆက်တိုက်ဖြစ်ခဲ့တယ်။ စိန်ခေါ်မှုရှိပေမယ့်မပင်ပန်းခဲ့ဘူး။"],
    playerChoices: [
      {text: "ဒါ... တကယ်တော့မဆိုးပါဘူး။ ပြန်သုံးသပ်ဖို့အချိန်တန်ပြီ။", nextSceneId: 'scene_ch3_01_post_date_debrief_choice'}
    ]
  }
};
