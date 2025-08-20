import { Scene } from '../types';

type GameData = {
  [sceneId: string]: Scene;
};

export const gameData: GameData = {
  // CHAPTER 1: THE AMBUSH
  'scene_01_bar_ambush': {
      sceneId: 'scene_01_bar_ambush',
      narratorText: [
        "တိတ်ဆိတ်ငြိမ်သက်နေသော အင်္ဂါနေ့ညနေခင်းသည် သားကောင်တစ်ကောင်ကြောင့်မဟုတ်ဘဲ တစ်အုပ်စုလုံးရောက်လာခြင်းကြောင့် ပျက်စီးသွားခဲ့သည်။",
        "ကိုယ့်ကိုယ်ကို မေတ္တာရေးရာဂုရုဟု ကြွေးကြော်ထားသည့် အောင်ရဲမာန်သည် မကောင်းဆိုးဝါးအပြုံးဖြင့် ဘားထိုင်ခုံပေါ်သို့ လျှောတိုက်ဝင်လာသည်။ သူ့ဘေးတွင် အဖွဲ့၏အားပေးသူ ထွန်းကိုကိုနှင့် ထူးဆန်းပြီး ဘေးထွက်စကားများသာပြောတတ်သည့် တိတ်တိတ်ဆိတ်ဆိတ်နေတတ်သူ လင်းကိုတို့လည်း ပါလာသည်။"
      ],
      dialogue: [
        { character: "အောင်ရဲမာန်", line: "ငါ့ကောင်! ကောင်စီကအစည်းအဝေးထိုင်ပြီး ဆုံးဖြတ်ချက်ချလိုက်ပြီ။ မင်းရဲ့ဆယ်စုနှစ်ကြာအချစ်ရေးမိုးခေါင်မှုက ဒီအပတ်မှာအဆုံးသတ်ပြီ!" },
        { character: "ထွန်းကိုကို", line: "ဟုတ်တယ်! ဟုတ်တယ်! Operation: သန့်လင်းစိုးအတွက်ကောင်မလေးရှာပုံတော်စပြီ! ငါတို့ကမင်းရဲ့ wingmen တွေ! မင်းရဲ့အချစ်ရေးကငါတို့ရဲ့ពិសိដ្ឋတာဝန်!" },
        { character: "လင်းကို", line: "သူမက K-pop fan မဟုတ်ဖို့တော့ငါမျှော်လင့်ပါတယ်။ K-pop ဆိုတာယဉ်ကျေးမှုဖျက်ဆီးရေးလက်နက်တစ်ခုပဲ၊ မင်းသိလား။ လူငယ်တွေရဲ့စိတ်ကိုပျော့ညံ့အောင်လုပ်ဖို့ဖန်တီးထားတာ။" }
      ],
      internalMonologue: "'ကောင်စီ'တဲ့။ ကိုယ့်ဘဝကိုတောင်စီမံခန့်ခွဲနိုင်ခြင်းမရှိတဲ့လူပေါ့သုံးယောက်ကငါ့ဘဝကိုကယ်တင်ဖို့ရောက်လာကြတယ်။ ဒါကတော့နာကျင်စရာပဲ။",
      playerChoices: [
        {
          text: "[ဟာသဖြင့်] \"ဝိုး၊ ကောင်စီတစ်ခုလုံးပါလား။ ငါဂုဏ်ယူပါတယ်။ ခန့်မှန်းကြည့်ရအောင်၊ မင်းတို့ငါ့အတွက် အမူအရာနဲ့ပဲစကားပြောတဲ့အကအဖွဲ့ကကောင်မလေးတစ်ယောက်ရှာထားပေးတယ်မဟုတ်လား?\"",
          nextSceneId: 'scene_02_bar_sarcastic_reply',
          stateUpdates: { relationshipScores: [{ character: 'aungYeMan', change: -1 }, { character: 'linKo', change: 1 }] }
        },
        {
          text: "[တိုက်ရိုက် & ငြီးငွေ့စွာ] \"မင်းတို့ရဲ့စေတနာကိုငါတန်ဖိုးထားပါတယ်၊ ဒါပေမဲ့ငါစိတ်မဝင်စားဘူး။ အတည်ပြောတာ။ ငါကသနားစရာကျောက်ဖြစ်ရုပ်ကြွင်းကြီးအဖြစ်နဲ့ပျော်နေတယ်။\"",
          nextSceneId: 'scene_02_bar_tired_reply',
        },
        {
          text: "[သက်ပြင်းချ며] \"ကောင်းပြီလေ... ငါလက်ခံလိုက်မယ်။ ဒီတစ်ခါငါ့အတွက်ဘယ်လိုသူရဲကောင်းဆန်တဲ့အစီအစဉ်တွေရှိလဲ?\"",
          nextSceneId: 'scene_02_bar_cautious_reply',
        }
      ]
    },
    'scene_02_bar_sarcastic_reply': {
      sceneId: 'scene_02_bar_sarcastic_reply',
      narratorText: ["ထွန်းကိုကိုက ကောင်တာကိုပုတ်ပြီးရယ်လိုက်သည်။ အောင်ရဲမာန်ရဲ့အပြုံးကတုန်သွားသည်။ လင်းကိုကစဉ်းစားပြီးခေါင်းညိတ်လိုက်သည်။"],
      dialogue: [
        { character: "အောင်ရဲမာန်", line: "တော်တော်ရယ်ရတယ်ပေါ့။ မင်းကလူရွှင်တော်ထင်နေလား? ဒါကြောင့်ပဲ မင်းကိုပထမဆုံးဒိတ်ပေးလိုက်မယ်။ သောကြာနေ့ည။ ငါ့ကောင်မလေးမေလေးရဲ့သူငယ်ချင်း။ ဝတီ။ သူက... အဆင်ပြေတယ်။" },
        { character: "လင်းကို", line: "အဆင်ပြေတာကောင်းပါတယ်။ အဆင်ပြေတဲ့လူတွေကနံရံမှာရောင်စုံဆံပင်နဲ့ကောင်လေးတွေရဲ့ပိုစတာတွေကပ်ထားဖို့အခွင့်အလမ်းနည်းတယ်။" }
      ],
      playerChoices: [
        { text: "ပြီးရော။ တစ်ခါပဲဒိတ်မယ်။ သူမကငါ့ကိုငါ့ရဲ့ရာသီခွင်ကဘာလဲလို့မေးရင်တော့ငါမင်းကိုဘီလ်ပို့လိုက်မယ်။", nextSceneId: "scene_03_wati_setup", stateUpdates: { keyEvents: ['agreed_to_date_with_wati'] } }
      ]
    },
    'scene_02_bar_tired_reply': {
      sceneId: 'scene_02_bar_tired_reply',
      narratorText: ["အောင်ရဲမာန်မျက်နှာညှိုးကျသွားသည်။ ထွန်းကိုကိုကကန်ကျောက်ခံလိုက်ရတဲ့ခွေးပေါက်လေးတစ်ကောင်လိုဖြစ်သွားသည်။"],
      dialogue: [
        { character: "အောင်ရဲမာန်", line: "ကျောက်ဖြစ်ရုပ်ကြွင်း? လာစမ်းပါကွာ။ ဒီလိုမလုပ်ပါနဲ့။ ငါတို့ကူညီချင်လို့ပါ။" },
        { character: "ထွန်းကိုကို", line: "ဟုတ်တယ်! ငါတို့ကမင်းရဲ့ညီအစ်ကိုတွေ! မင်းတစ်ယောက်တည်းညှိုးနွမ်းသွားတာကိုငါတို့ကြည့်မနေနိုင်ဘူး!" }
      ],
      playerChoices: [
        { text: "[သက်ပြင်းချ] ကောင်းပြီ၊ ကောင်းပြီ။ တစ်ခါပဲဒိတ်မယ်။ ပြီးရင်မင်းတို့ငါ့ကိုတစ်လလောက်အေးအေးဆေးဆေးထားရမယ်။", nextSceneId: "scene_03_thuthumay_setup", stateUpdates: { relationshipScores: [{ character: 'aungYeMan', change: 1 }, { character: 'htunKoKo', change: 1 }], keyEvents: ['agreed_to_date_with_thuthumay'] } }
      ]
    },
     'scene_02_bar_cautious_reply': {
      sceneId: 'scene_02_bar_cautious_reply',
      narratorText: ["သုံးယောက်လုံးမျက်နှာလင်းလက်သွားသည်။ အောင်ရဲမာန်ကရှေ့တိုးပြီးတာဝန်ယူလိုက်သည်။"],
      dialogue: [
        { character: "အောင်ရဲမာန်", line: "အကောင်းဆုံးရွေးချယ်မှုပဲ! ငါတို့မှာရွေးချယ်စရာတွေရှိတယ်။ ပထမတစ်ယောက်ကသုသုမေ။ သူက... တက်ကြွတယ်။ အရမ်းငယ်တယ်။ အွန်လိုင်းဆိုင်တစ်ဆိုင်ပိုင်တယ်။" },
        { character: "ထွန်းကိုကို", line: "ဒါမှမဟုတ်နှင်းပွင့်! ငါ့လုပ်ဖော်ကိုင်ဖက်! အရမ်းတော်၊ ထက်မြက်ပြီး ဘာမှမဟုတ်တာကိုသည်းမခံဘူး။ မင်းသူ့ကိုကြိုက်မှာပါ၊ သူလည်းအရမ်းခေါင်းမာတယ်!" }
      ],
      playerChoices: [
        { text: "\"တက်ကြွတဲ့တစ်ယောက်နဲ့သွားမယ်။ စိတ်ဝင်စားစရာကောင်းအောင်လုပ်လိုက်တာပေါ့။\"", nextSceneId: "scene_03_thuthumay_setup", stateUpdates: { keyEvents: ['agreed_to_date_with_thuthumay'] } },
        { text: "\"တော်ပြီးခေါင်းမာတဲ့တစ်ယောက်ကတော့ခေါင်းကိုက်စရာအကြောင်းပဲ။ ကောင်းတယ်။\"", nextSceneId: "scene_03_hninpwint_setup", stateUpdates: { keyEvents: ['agreed_to_date_with_hninpwint'] } }
      ]
    },
    'scene_03_thuthumay_setup': {
        sceneId: 'scene_03_thuthumay_setup',
        narratorText: ["အောင်ရဲမာန်ကမင်းရဲ့ကျောကိုပုတ်လိုက်ပြီးသူ့ရဲ့စိတ်ကောင်းနေမှုကချက်ချင်းပြန်ကောင်းသွားသည်။"],
        dialogue: [{character: "အောင်ရဲမာန်", line: "ကောင်းတယ်! မင်းနောင်တရမှာမဟုတ်ဘူး။ သောကြာနေ့။ ည၈နာရီ။ မြို့ထဲကကဖေးအသစ်မှာ။ သူ့နာမည်ကသုသုမေ။ သူကအတော်ကောင်းတယ်!"}],
        playerChoices: [{text: "ဒိတ်ကိုဆက်သွားရန်...", nextSceneId: 'scene_04_date_thuthumay_intro'}]
    },
    'scene_03_wati_setup': {
        sceneId: 'scene_03_wati_setup',
        narratorText: ["အောင်ရဲမာန်ကမင်းကိုဝတီနဲ့ဒိတ်ဖို့အသေးစိတ်အချက်အလက်တွေပေးသည်။ မင်းရဲ့ကံကြမ္မာကအဆုံးအဖြတ်ပေးခံလိုက်ရပြီထင်သည်။"],
        dialogue: [{character: "အောင်ရဲမာန်", line: "သူကမင်းကိုစနေနေ့မှာအနုပညာပြခန်းမှာစောင့်နေလိမ့်မယ်။ ငါ့အတွက်... အဲ... မင်းအတွက်ဒါကိုမဖျက်ဆီးလိုက်နဲ့။"}],
        playerChoices: [{text: "အနုပညာပြခန်းသို့...", nextSceneId: 'scene_04_date_wati_intro'}]
    },
    'scene_03_hninpwint_setup': {
      sceneId: 'scene_03_hninpwint_setup',
      narratorText: ["ထွန်းကိုကိုကစိတ်လှုပ်ရှားနေပုံရသည်။ သူချက်ချင်းဖုန်းထုတ်လိုက်သည်။"],
      dialogue: [{ character: "ထွန်းကိုကို", line: "ငါသူ့ကိုပြောလိုက်မယ်! သူကအလုပ်နောက်ကျမှဆင်းတာဆိုတော့ငါ့ရဲ့ပုံမှန်နေရာမှာဘယ်လိုလဲ? သူကဘီယာသောက်ရင်းငြင်းခုန်ရတာကြိုက်တယ်။" }],
      playerChoices: [{ text: "ဘီယာသောက်ရင်းငြင်းခုန်ရတာလား? ငါ့အကြိုက်ဒိတ်မျိုးပဲ။", nextSceneId: 'scene_04_date_hninpwint_intro' }]
    },
    // CHAPTER 2: FIRST DATES
    'scene_04_date_wati_intro': {
        sceneId: 'scene_04_date_wati_intro',
        narratorText: ["သင်အနုပညာပြခန်းသို့ရောက်ရှိလာသည်။ သန့်ရှင်းပြီးတိတ်ဆိတ်ငြိမ်သက်နေကာသံပရာရနံ့သန့်စင်ဆေးရည်အနံ့ကိုခပ်ရေးရေးရနေသည်။", "အခန်းঅপরဘက်တွင်သူမကိုသင်တွေ့လိုက်ရသည်။ ဝတီ။ ဖော်ပြထားသည့်အတိုင်းပင်- အဆင်ပြေပြီးယဉ်ကျေးသိမ်မွေ့သည်။ အနည်းငယ်... ငြီးငွေ့စရာကောင်းလောက်အောင်'ကောင်း'နေသည်။"],
        dialogue: [{character: "ဝတီ", line: "သန့်လင်းစိုးလား? ကျွန်မဝတီပါ။ တွေ့ဆုံရတာဝမ်းသာပါတယ်။ မေလေးကရှင့်အကြောင်းတွေအများကြီးပြောပြထားတယ်။"}],
        internalMonologue: "သူ့အပြုံးကလှတယ်။ သူ့အဝတ်အစားကလှတယ်။ အရာအားလုံးကအလွန်အမင်းသာယာနေတယ်။ ဒီညနေတော့ရှည်လျားမယ့်ပုံပဲ။",
        playerChoices: [
            {text: "\"တွေ့ရတာကျွန်တော်လည်းဝမ်းသာပါတယ်။ ကျွန်တော်က... ပန်းချီကားရဲ့အကွေးအကောက်ပုံစံတွေကိုအရမ်းကြိုက်တဲ့သူတစ်ယောက်ပါ။\"", nextSceneId: 'scene_05_wati_art_talk', stateUpdates: { relationshipScores: [{character: 'wati', change: 0}]}},
            {text: "\"မေလေးကတော့ပိုပိုသာသာပြောတတ်တယ်။ ကောင်းတဲ့အချက်တွေပဲလို့တော့မျှော်လင့်ပါတယ်။\"", nextSceneId: 'scene_05_wati_art_talk', stateUpdates: { relationshipScores: [{character: 'wati', change: 1}]}},
        ]
    },
    'scene_05_wati_art_talk': {
      sceneId: 'scene_05_wati_art_talk',
      narratorText: ["သူမကယဉ်ကျေးစွာရယ်ပြီး လုံးဝအနီရောင်ချယ်ထားတဲ့ ပန်းချီကားကြီးတစ်ချပ်ကို လက်ညှိုးထိုးပြတယ်။"],
      dialogue: [{character: "ဝတီ", line: "ဒီတစ်ချပ်ကိုဘယ်လိုထင်လဲ? ပန်းချီဆရာကဒါကို 'တိတ်ဆိတ်သောနှလုံးသားရဲ့ဒေါသ' ကိုကိုယ်စားပြုတယ်လို့ပြောတယ်။"}],
      playerChoices: [
        {text: "\"ဒါက... အရမ်းနီတာပဲ။ ဒေါသကတော်တော်ပြင်းထန်မှာပဲ။\"", nextSceneId: 'scene_06_wati_rival_appears', stateUpdates: {relationshipScores: [{character: 'wati', change: 0}]}},
        {text: "\"ကျွန်တော့်အထင်တော့ဒါကဆေးနီကိုဈေးပေါပေါနဲ့ရလိုက်တဲ့ပန်းချီဆရာကိုကိုယ်စားပြုတယ်။\"", nextSceneId: 'scene_06_wati_rival_appears', stateUpdates: {relationshipScores: [{character: 'wati', change: -1}]}},
        {text: "\"ဒါကကျွန်တော့်ဘဏ်စာရင်းရှင်းတမ်းကိုသတိရစေတယ်။ ဟုတ်တယ်၊ 'ဒေါသ' ဆိုတာမှန်လောက်တယ်။\"", nextSceneId: 'scene_06_wati_rival_appears', stateUpdates: {relationshipScores: [{character: 'wati', change: 1}]}}
      ]
    },
    'scene_06_wati_rival_appears': {
      sceneId: 'scene_06_wati_rival_appears',
      narratorText: ["ဝတီမတုံ့ပြန်ခင်မှာပဲ ကျယ်လောင်ပြီး စိတ်အနှောင့်အယှက်ဖြစ်စရာကောင်းတဲ့ ရင်းနှီးတဲ့အသံက ပြခန်းထဲမှာ ဟိန်းထွက်လာတယ်။"],
      dialogue: [
        {character: "ထူးအောင်", line: "သန့်လင်းစိုး! မင်းကိုဒီလိုနေရာမှာတွေ့မယ်လို့ငါသိသားပဲ! မင်းရဲ့ညံ့ဖျင်းတဲ့ပင်ကိုယ်စရိုက်ကိုဖုံးကွယ်ဖို့ယဉ်ကျေးမှုနည်းနည်းစုပ်ယူနေတာလား?"},
        {character: "ဝတီ", line: "...ရှင်သူ့ကိုသိလား?"}
      ],
      internalMonologue: "ကမ္ဘာပေါ်ကပြခန်းတွေအားလုံးထဲမှာမှသူကငါရှိတဲ့နေရာကိုရောက်လာရတယ်လို့။ ကွက်တိပဲ။",
      playerChoices: [
        {text: "\"ထူးအောင်ပါ။ ငါတို့ကငယ်ငယ်ကတည်းကသူငယ်ချင်းတွေ။ ကံမကောင်းစွာနဲ့ပေါ့။\"", nextSceneId: 'scene_07_wati_debrief', stateUpdates: {relationshipScores: [{character: 'htooAung', change: -1}]}},
        {text: "\"သူကငါ့ရဲ့အကြီးဆုံးပရိသတ်ပဲ။ ငါ့နောက်ကိုနေရာတကာလိုက်နေတာ။\"", nextSceneId: 'scene_07_wati_debrief', stateUpdates: {relationshipScores: [{character: 'wati', change: 1}]}},
      ]
    },
    'scene_07_wati_debrief': {
        sceneId: 'scene_07_wati_debrief',
        narratorText: ["ဝတီနဲ့ကျန်တဲ့ဒိတ်ကတော့ယဉ်ကျေးတဲ့စကားပြောဆိုမှုတွေနဲ့ပဲပြီးသွားတယ်။ သူမကိုပြန်ပို့ပြီးတဲ့နောက်မှာတော့သင်အရက်သောက်ပြီးသုံးသပ်ချက်လုပ်ဖို့အရမ်းလိုအပ်နေတယ်။"],
        playerChoices: [
          {text: "ပြန်သုံးသပ်ချက်အစည်းအဝေးသွားမယ်။", nextSceneId: 'scene_07_post_date_debrief_choice'}
        ]
      },
    'scene_04_date_thuthumay_intro': {
        sceneId: 'scene_04_date_thuthumay_intro',
        narratorText: ["သောကြာနေ့ည။ သင့်ကိုအသက်တစ်ရာလောက်ကြီးသွားသလိုခံစားရစေတဲ့တေးဂီတမျိုးနဲ့ဆူညံနေတဲ့ခေတ်မီကဖေးဆိုင်တစ်ခုထဲကိုသင်ဝင်လာခဲ့သည်။", "ပန်းရောင်ဆံပင်တောက်တောက်နဲ့မိန်းကလေးတစ်ယောက်ကထောင့်โต๊ะကနေအားရပါးရလှမ်းပြနေတယ်။သူမပဲဖြစ်ရမည်။"],
        dialogue: [{character: "သုသုမေ", line: "OMG! ကိုသန့်ဟုတ်တယ်မလား? အောင်ရဲမာန်ရဲ့သူငယ်ချင်း? ဟိုင်း! ကျွန်မနာမည်သုသုမေ! ရှင့်အတွက် Caramel Macchiato နဲ့ whipped cream အပိုနဲ့မှာထားပြီးပြီ! ဒါကျွန်မအကြိုက်ဆုံးပဲ!"}],
        internalMonologue: "'ကိုသန့်?' ငါသူမထက်ဆယ်နှစ်လောက်ကြီးတယ်။ ပြီးတော့ငါ့အတွက်မှာထားပေးတယ်? ၉၀% သကြားဓာတ်တွေနဲ့လုပ်ထားတဲ့သောက်စရာကို? အောင်ရဲမာန်၊မင်းကိုငါသတ်မယ်။",
        playerChoices: [
            {text: "\"ကျေးဇူးပါ၊ဒါပေမယ့်ကျွန်တော်ကော်ဖီအနက်ပဲသောက်မယ်။ပိုပြင်းလေပိုကောင်းလေပဲ။\"", nextSceneId: 'scene_05_thuthumay_age_gap', stateUpdates: { relationshipScores: [{character: 'thuThuMay', change: -1}]}},
            {text: "\"ဝိုး၊မင်းကစွမ်းအင်တွေအပြည့်ပဲนะ။ဒီသကြားဗုံးကငါ့ကိုလိုက်မီအောင်ကူညီနိုင်မလားကြည့်ကြတာပေါ့။\"", nextSceneId: 'scene_05_thuthumay_age_gap', stateUpdates: { relationshipScores: [{character: 'thuThuMay', change: 1}]}},
        ]
    },
    'scene_05_thuthumay_age_gap': {
      sceneId: 'scene_05_thuthumay_age_gap',
      narratorText: ["သူမကသူမရဲ့သကြားဓာတ်များတဲ့သောက်စရာကိုတစ်ငုံကြီးမော့သောက်လိုက်တယ်၊ ဘာမှမဖြစ်သလိုပဲ။"],
      dialogue: [{character: "သုသုမေ", line: "ဒါနဲ့၊ အောင်ရဲမာန်ကပြောတယ်၊ ရှင်ကသုံးဆယ့်လေးနှစ်လား? အရမ်းအသက်ကြီးတာပဲ! လွန်ခဲ့တဲ့ရာစုနှစ်ကလိုပဲ! အင်တာနက်မရှိခင်ကဘယ်လိုနေလဲ?"}],
      playerChoices: [
        {text: "\"ငါတို့ကကျောက်တုံးတွေနဲ့ဆက်သွယ်ပြီးဂူနံရံတွေမှာပန်းချီဆွဲခဲ့ကြတယ်။ အဲဒီအချိန်ကပိုရိုးရှင်းခဲ့တယ်။\"", nextSceneId: 'scene_06_thuthumay_end_date', stateUpdates: {relationshipScores: [{character: 'thuThuMay', change: 1}]}},
        {text: "\"တိတ်ဆိတ်ငြိမ်သက်တယ်။ လူတွေကစာအုပ်တွေဖတ်ကြတယ်။ စက္ကူနဲ့လုပ်ထားတဲ့စာအုပ်တွေပေါ့။ ရှင်းပြရခက်တယ်။\"", nextSceneId: 'scene_06_thuthumay_end_date', stateUpdates: {relationshipScores: [{character: 'thuThuMay', change: -1}]}}
      ]
    },
    'scene_06_thuthumay_end_date': {
      sceneId: 'scene_06_thuthumay_end_date',
      narratorText: ["'ဒိတ်'ကနောက်ထပ်တစ်နာရီလောက်ဆက်သွားတယ်၊ TikTok trend တွေ၊ မင်းတစ်ခါမှမကြားဖူးတဲ့ influencer တွေနဲ့မင်းရဲ့မျိုးဆက်ကအရာအားလုံးကဘာကြောင့်'cheugy'ဖြစ်နေလဲဆိုတာတွေဆွေးနွေးရင်းနဲ့ပေါ့။ မင်းစိတ်ပိုင်းဆိုင်ရာနဲ့ဝိညာဉ်ပိုင်းဆိုင်ရာအရမ်းပင်ပန်းနေတယ်။"],
      playerChoices: [
        {text: "ညကိုအဆုံးသတ်ပြီးပြန်သုံးသပ်ဖို့သွားမယ်။", nextSceneId: 'scene_07_post_date_debrief_choice'}
      ]
    },
    'scene_04_date_hninpwint_intro': {
      sceneId: 'scene_04_date_hninpwint_intro',
      narratorText: ["ထွန်းကိုကိုပြောတဲ့ဘားကိုသင်သွားလိုက်သည်။ ဆူညံ၊ လူထူပြီးရင်းနှီးနေတဲ့နေရာ။ နောက်ဘက်ကโต๊ะတစ်လုံးမှာ laptop တစ်လုံးနဲ့အလုပ်ရှုပ်နေတဲ့သူမကိုသင်တွေ့လိုက်သည်။ သင်ချဉ်းကပ်သွားတော့သူမကမော့ကြည့်တယ်၊ သူ့မျက်လုံးတွေကထက်မြက်ပြီးစူးစမ်းနေတယ်။"],
      dialogue: [{character: "နှင်းပွင့်", line: "သန့်လင်းစိုး။ မင်းအချိန်မှန်ပဲ။ ငါအချိန်ကိုက်တာကိုတန်ဖိုးထားတယ်။ ထွန်းကိုကိုကမင်းခေါင်းမာတယ်လို့ပြောတယ်။ မင်းစိတ်ဝင်စားစရာကောင်းလားကြည့်ကြတာပေါ့။"}],
       internalMonologue: "သူမအချိန်မဖြုန်းတတ်ဘူးနော်? ဒါကအရမ်းကောင်းနိုင်သလိုအရမ်း၊ အရမ်းဆိုးသွားနိုင်တယ်။",
      playerChoices: [
        {text: "\"ကျွန်တော်ကအရည်အချင်းများစွာရှိတဲ့လူတစ်ယောက်ပါ။ ခေါင်းမာတာကတော့ကျွန်တော်အတော်ဆုံးအရာပဲ။\"", nextSceneId: 'scene_05_hninpwint_debate'},
        {text: "\"စိတ်ဝင်စားစရာလား? ကျွန်တော်ကဘားမန်နေဂျာပါ။ ကျွန်တော့်ဘဝက၉၀% ပုလင်းရေတွက်ပြီး၁၀% ကလူတွေကိုတော်လောက်ပြီလို့ပြောနေရတာပဲ။\"", nextSceneId: 'scene_05_hninpwint_debate', stateUpdates: {relationshipScores: [{character: 'hninPwint', change: -1}]}}
      ]
    },
     'scene_05_hninpwint_debate': {
      sceneId: 'scene_05_hninpwint_debate',
      narratorText: ["သူမရဲ့နှုတ်ခမ်းမှာသေးငယ်ပြီး မသိမသာအပြုံးတစ်ခုပေါ်လာတယ်။ သူမ laptop ကိုပိတ်လိုက်တယ်။"],
      dialogue: [{character: "နှင်းပွင့်", line: "ရိုးသားမှု။ ကောင်းတယ်။ ကောင်းပြီ၊ စမ်းသပ်မှုတစ်ခု။ ခေတ်သစ်လူ့အဖွဲ့အစည်းမှာအမွှမ်းတင်ဆုံးအယူအဆကဘာလဲ?"}],
      playerChoices: [
        {text: "\"အချစ်။ ဒါကနှုတ်ခွန်းဆက်ကတ်တွေနဲ့ဈေးကြီးတဲ့ညစာတွေရောင်းဖို့တီထွင်ထားတဲ့စျေးကွက်ရှာဖွေရေးလှည့်ကွက်တစ်ခုပဲ။\"", nextSceneId: 'scene_06_hninpwint_end_date', stateUpdates: {relationshipScores: [{character: 'hninPwint', change: 2}]}},
        {text: "\"အလုပ်များနေတဲ့ယဉ်ကျေးမှု။ ၂၄/၇ပတ်လုံးအလုပ်လုပ်မနေရင်ရှုံးနိမ့်သူတစ်ယောက်လို့သတ်မှတ်တဲ့အယူအဆပေါ့။\"", nextSceneId: 'scene_06_hninpwint_end_date', stateUpdates: {relationshipScores: [{character: 'hninPwint', change: 1}]}},
        {text: "\"ထောပတ်သီးပေါင်မုန့်။ ဒါကပေါင်မုန့်ပေါ်မှာသစ်သီးเละเละတင်ထားတာပဲ။ ကျွန်တော်နားမလည်ဘူး။\"", nextSceneId: 'scene_06_hninpwint_end_date', stateUpdates: {relationshipScores: [{character: 'hninPwint', change: -1}]}}
      ]
    },
    'scene_06_hninpwint_end_date': {
      sceneId: 'scene_06_hninpwint_end_date',
      narratorText: ["သူမကမင်းရဲ့အဖြေကိုသုံးသပ်ပြီးဖြည်းဖြည်းချင်းခေါင်းညိတ်လိုက်တယ်။ ပထမဆုံးအကြိမ်အဖြစ်သူမတကယ်စိတ်ဝင်စားသွားပုံရတယ်။", "အဲဒီနောက်စကားဝိုင်းကအံ့ဩစရာကောင်းလောက်အောင်လွယ်ကူသွားတယ်။ ဒဿနိကဗေဒကနေလက်ဖက်ရည်ကောင်းတစ်ခွက်ဘယ်လိုဖျော်ရမလဲဆိုတဲ့အထိအငြင်းအခုံတွေဆက်တိုက်ဖြစ်ခဲ့တယ်။ စိန်ခေါ်မှုရှိပေမယ့်မပင်ပန်းခဲ့ဘူး။"],
      playerChoices: [
        {text: "ဒါ... တကယ်တော့မဆိုးပါဘူး။ ပြန်သုံးသပ်ဖို့အချိန်တန်ပြီ။", nextSceneId: 'scene_07_post_date_debrief_choice'}
      ]
    },
    // CHAPTER 2: THE AFTERMATH & A GHOST
    'scene_07_post_date_debrief_choice': {
      sceneId: 'scene_07_post_date_debrief_choice',
      narratorText: ["ခုနကဖြစ်ပျက်ခဲ့တာတွေနဲ့ပတ်သက်ပြီးတစ်ယောက်ယောက်နဲ့သင်စကားပြောဖို့လိုတယ်။ ဘယ်သူ့ကိုခေါ်မလဲ?"],
      playerChoices: [
        {text: "အောင်ရဲမာန်နဲ့'ကောင်စီ'ကိုခေါ်မယ်။ သူတို့ဒါကိုကြားသင့်တယ်။", nextSceneId: 'scene_08_debrief_with_friends'},
        {text: "ထက်နိုင်ကိုခေါ်မယ်။ ငါစိတ်မှန်တဲ့လူတစ်ယောက်ရဲ့အမြင်လိုတယ်။", nextSceneId: 'scene_08_debrief_with_htetnaing'}
      ]
    },
    'scene_08_debrief_with_friends': {
      sceneId: 'scene_08_debrief_with_friends',
      narratorText: ["မင်းဘားမှာသူငယ်ချင်းတွေနဲ့တွေ့တယ်။ မင်းစကားမပြောခင်မှာပဲသူတို့ကမေးခွန်းတွေတရစပ်မေးလာတယ်။"],
      dialogue: [
        {character: "အောင်ရဲမာန်", line: "ကဲ? ဘယ်လိုလဲ? ဒုတိယဒိတ်ရလား? ငါသင်ပေးလိုက်တဲ့စကားတွေသုံးခဲ့လား?"},
        {character: "ထွန်းကိုကို", line: "သူမကမင်းရဲ့တည်ငြိမ်ပြီးလျှို့ဝှက်တဲ့တိတ်ဆိတ်မှုကိုသဘောကျသွားလား? မိန်းကလေးတွေကအဲဒါကြိုက်တယ်!"},
        {character: "လင်းကို", line: "သူမရဲ့ K-pop နဲ့ပတ်သက်တဲ့အဆက်အနွယ်တွေအကြောင်းမေးခဲ့လား? ဒါကမင်းတို့ရဲ့ရေရှည်ဆက်ဆံရေးအတွက်အရေးကြီးတယ်။"}
      ],
      playerChoices: [
        {text: "သူတို့ကိုအကုန်ပြောပြမယ်။", nextSceneId: 'scene_09_ch2_start'}
      ]
    },
    'scene_08_debrief_with_htetnaing': {
      sceneId: 'scene_08_debrief_with_htetnaing',
      narratorText: ["မင်းထက်နိုင်နဲ့သူကြိုက်တဲ့တိတ်ဆိတ်တဲ့နေရာလေးတစ်ခုမှာတွေ့တယ်။ မင်းကအဖြစ်အပျက်အားလုံးကိုပြန်ပြောပြနေတုန်းမှာသူကစိတ်ရှည်ရှည်နဲ့နားထောင်ပြီးမျက်နှာမှာသိတဲ့အပြုံးလေးတစ်ခုနဲ့ပြုံးနေတယ်။"],
      dialogue: [
        {character: "ထက်နိုင်", line: "ဒါဆိုငါနားလည်အောင်ပြောပြမယ်။ သူတို့ကမင်းကိုလမ်းလျှောက်နေတဲ့ beige flag တစ်ခုလိုဖြစ်နေတဲ့ကောင်မလေးတစ်ယောက်နဲ့ချိန်းပေးတယ်၊ ပြီးတော့ပျင်းစရာကောင်းလို့မင်းအံ့ဩနေတာလား?"},
        {character: "ထက်နိုင်", line: "မင်းသူတို့ကိုငြင်းလို့ရတယ်ဆိုတာသိတယ်မလား? ဒါမှမဟုတ်၊ ဒါကတော့အရမ်းထူးဆန်းတဲ့အကြံဉာဏ်တစ်ခု၊ မင်းတကယ်ဒိတ်ချင်တဲ့သူတစ်ယောက်ကိုကိုယ့်ဘာသာကိုယ်ရှာလိုက်ပေါ့။"}
      ],
      playerChoices: [
        {text: "ဒါကရှုပ်ထွေးတယ်...", nextSceneId: 'scene_09_ch2_start', stateUpdates: {relationshipScores: [{character: 'htetNaing', change: 1}]}}
      ]
    },
     'scene_09_ch2_start': {
      sceneId: 'scene_09_ch2_start',
      narratorText: ["နောက်တစ်နေ့၊ ခေါင်းအနည်းငယ်ကိုက်နေသဖြင့် လမ်းလျှောက်ထွက်ရန် သင်ဆုံးဖြတ်လိုက်သည်။ မြို့တော်သည် ဟွန်းသံများနှင့် စကားသံများဖြင့် ဆူညံနေသည်။"],
      internalMonologue: "ထက်နိုင်ပြောတာမှန်လောက်တယ်။ ငါကြိုးစားကြည့်သင့်တယ်... ဒါပေမယ့်ဘယ်လိုလုပ်ရမလဲ? တစ်ယောက်ယောက်ဆီလမ်းလျှောက်သွားပြီး 'မင်္ဂလာပါ၊ ကျွန်တော်ကစိတ်ဒဏ်ရာရပြီး အဆိုးမြင်တတ်တဲ့သူတစ်ယောက်ပါ၊ ကော်ဖီသောက်ချင်ပါသလား?' လို့ပြောရမှာလား?",
      playerChoices: [{text: "သင်အတွေးလွန်နေရင်း လမ်းထောင့်တစ်နေရာသို့ ကွေ့လိုက်စဉ် တစ်စုံတစ်ယောက်နှင့် တည့်တည့်တိုးမိသွားသည်။", nextSceneId: 'scene_10_poelay_encounter'}]
    },
    'scene_10_poelay_encounter': {
      sceneId: 'scene_10_poelay_encounter',
      narratorText: ["'ဟေ့၊ ကြည့်ကြပ်သွားပါဦး!' ဟု သင်ပြောబోသော်လည်း မော့ကြည့်လိုက်သောအခါ သင့်ဦးနှောက်သည် ခေတ္တရပ်တန့်သွားသည်။ သူမဖြစ်သည်။ ပိုးလေး။ သင့်ရဲ့ ပထမဆုံးသော၊ မျှော်လင့်ချက်မဲ့ တက္ကသိုလ်ကျောင်းသားဘဝက အချစ်။ သူမ... အရင်အတိုင်းပင်၊ သို့သော် အနည်းငယ်ပြောင်းလဲသွားသည်။ ပိုပင်ပန်းနေသလိုပင်။ သို့သော် ထိုအပြုံးကတော့ အတူတူပင်။"],
      dialogue: [
        {character: "ပိုးလေး", line: "အိုး၊ တောင်းပန်ပါတယ်... သန့်လင်းစိုး? ဟုတ်ရဲ့လား?"}
      ],
      playerChoices: [
        {text: "\"ပိုးလေး? ဝိုး။ လူပေါင်းများစွာထဲမှာမှ။ အင်း၊ ဟိုင်း။\"", nextSceneId: 'scene_11_poelay_catchup', stateUpdates: {relationshipScores: [{character: 'poeLay', change: 1}]}},
        {text: "ခဏလောက်ကြောင်ကြည့်နေမိသည်။ \"ကျွန်တော်ခင်ဗျားကိုသိလို့လား?\"", nextSceneId: 'scene_11_poelay_catchup', stateUpdates: {relationshipScores: [{character: 'poeLay', change: -1}]}}
      ]
    },
    'scene_11_poelay_catchup': {
      sceneId: 'scene_11_poelay_catchup',
      narratorText: ["ခဏတာ တိတ်ဆိတ်သွားပြီးမှ သူမရယ်လိုက်သဖြင့် အခြေအနေမှာ ပေါ့ပါးသွားသည်။"],
      dialogue: [
        {character: "ပိုးလေး", line: "ဆယ်နှစ်လောက်ရှိပြီထင်တယ်? ရှင်ကတော့ အရင်အတိုင်းပဲ၊ နည်းနည်း... တည်ကြည်သွားတာကလွဲလို့။"},
        {character: "သန့်လင်းစိုး", line: "အဲဒါတစ်မျိုးပြောတာပေါ့။ နင်ကတော့ ကြည့်ကောင်းတုန်းပဲ။ အခုဘာတွေလုပ်နေလဲ? အရမ်းခက်ခဲတဲ့ကဗျာတွေကို... ကြိုက်တုန်းပဲလား?"},
        {character: "ပိုးလေး", line: "ဟားဟား၊ မဟုတ်တော့ပါဘူး။ အခုဘဏ်တစ်ခုမှာအလုပ်လုပ်နေတယ်။ ကြားရသလောက်တော့ ပျင်းစရာကောင်းပါတယ်။ ရှင်ကရော?"},
        {character: "သန့်လင်းစိုး", line: "ငါကဘားမန်နေဂျာ။ ပျင်းစရာမကောင်းပေမယ့် ခေါင်းကိုက်စရာတွေတော့ပိုများတယ်။"}
      ],
       playerChoices: [
        {text: "\"ငါတို့... တစ်ချိန်ချိန်မှာ သေချာပြန်တွေ့ပြီး စကားပြောကြရအောင်။\"", nextSceneId: 'scene_12_poelay_exchange_numbers'},
        {text: "\"တွေ့ရတာဝမ်းသာပါတယ်။ ဂရုစိုက်ပါဦး။\"", nextSceneId: 'scene_ch3_01_wati_call'}
      ]
    },
    'scene_12_poelay_exchange_numbers': {
      sceneId: 'scene_12_poelay_exchange_numbers',
      dialogue: [
        {character: "ပိုးလေး", line: "ကောင်းတာပေါ့။ ကျွန်မလည်း ဝမ်းသာပါတယ်။ ဒီမှာ... ဒါကျွန်မဖုန်းနံပါတ်။"}
      ],
      narratorText: ["သူမကသင့်ကိုဖုန်းနံပါတ်ပေးသည်။ သင်တို့နှစ်ယောက်လမ်းခွဲလိုက်ကြပြီး သင့်စိတ်ထဲတွင် အတွေးပေါင်းများစွာဖြင့် ကျန်နေခဲ့သည်။"],
      playerChoices: [{text: "ဆက်ရန်...", nextSceneId: 'scene_ch3_01_wati_call', stateUpdates: {keyEvents: ['got_poelay_number']}}]
    },
    // CHAPTER 3
    'scene_ch3_01_wati_call': {
      sceneId: 'scene_ch3_01_wati_call',
      narratorText: ["နောက်တစ်နေ့ ညနေခင်းတွင် သင်ဘားတွင် အလုပ်ရှုပ်နေစဉ် သင့်ဖုန်းမြည်လာသည်။ မထင်မှတ်ဘဲ ဝတီဆီကဖြစ်သည်။"],
      dialogue: [
        {character: "ဝတီ", line: "ဟယ်လို၊ ကိုသန့်လင်းစိုးလား? ဝတီပါ။ မအားရင်တောင်းပန်ပါတယ်။"}
      ],
      playerChoices: [
        {text: "\"ဪ၊ ဝတီ။ ရပါတယ်။ ဘာကိစ္စရှိလို့လဲ?\"", nextSceneId: 'scene_ch3_02_wati_proposes_date'},
        {text: "\"အင်း၊ နည်းနည်းတော့အလုပ်ရှုပ်နေတယ်။\"", nextSceneId: 'scene_ch3_02_wati_proposes_date', stateUpdates: {relationshipScores: [{character: 'wati', change: -1}]}}
      ]
    },
    'scene_ch3_02_wati_proposes_date': {
      sceneId: 'scene_ch3_02_wati_proposes_date',
      narratorText: ["သူမ၏အသံသည် ဖုန်းထဲတွင် အနည်းငယ်တုန်ယင်နေသော်လည်း တည်ငြိမ်မှုရှိသည်။"],
      dialogue: [
        {character: "ဝတီ", line: "ဟိုနေ့က ပြခန်းမှာ... အဆင်မပြေဖြစ်သွားတဲ့အတွက် တောင်းပန်ပါတယ်။ ရှင့်သူငယ်ချင်းက... တော်တော်လေး... စိတ်အားထက်သန်ပုံပဲ။ ဒါနဲ့... ကျွန်မစဉ်းစားမိတာက၊ နောက်တစ်ခါထပ်တွေ့ရင်ကောင်းမလားလို့ပါ။ ပိုပြီး... သာမန်နေရာတစ်ခုမှာပေါ့။"}
      ],
      internalMonologue: "သူကငါ့ကိုပြန်ချိန်းနေတာလား? မဆိုးပါဘူး။",
      playerChoices: [
        {text: "\"စိတ်ကူးကောင်းပဲ။ ဘယ်နေရာမှာတွေ့ချင်လဲ?\"", nextSceneId: 'scene_ch4_01_wati_date_2_intro', stateUpdates: {keyEvents: ['agreed_to_date_2_wati']}},
        {text: "\"အင်း... ကျွန်တော်မသေချာဘူး။ အခုတလောတော်တော်အလုပ်များနေလို့။\"", nextSceneId: 'scene_ch5_01_friends_reunite'}
      ]
    },
    // CHAPTER 4
    'scene_ch4_01_wati_date_2_intro': {
      sceneId: 'scene_ch4_01_wati_date_2_intro',
      narratorText: ["သင်တို့နှစ်ယောက် ဈေးထဲရှိ စားသောက်ဆိုင်လေးတစ်ခုတွင် တွေ့ဆုံရန်သဘောတူလိုက်ကြသည်။ လူစည်ကားပြီး ဆူညံကာ အနုပညာပြခန်းနှင့် လုံးဝဆန့်ကျင်ဘက်ဖြစ်သည်။", "ဝတီသည် ဂျင်းဘောင်းဘီနှင့် တီရှပ်ရိုးရိုးလေးဝတ်ထားပြီး ယခင်ကထက် ပို၍ပေါ့ပေါ့ပါးပါးဖြစ်နေသည်။"],
      dialogue: [
        {character: "ဝတီ", line: "ဒီနေရာကိုကြိုက်မယ်လို့ထင်ပါတယ်။ လူတွေစည်ကားတာက စိတ်ဝင်စားစရာကောင်းတယ်မလား?"}
      ],
      playerChoices: [
        {text: "\"တိတ်ဆိတ်တာထက်တော့သေချာပေါက်ပိုကောင်းပါတယ်။ ဒီလိုနေရာမျိုးကြိုက်မယ်လို့မထင်ထားဘူး။\"", nextSceneId: 'scene_ch4_02_wati_date_2_talk', stateUpdates: {relationshipScores: [{character: 'wati', change: 1}]}},
        {text: "\"ဒါက... ဆူညံတယ်။\"", nextSceneId: 'scene_ch4_02_wati_date_2_talk', stateUpdates: {relationshipScores: [{character: 'wati', change: -1}]}}
      ]
    },
    'scene_ch4_02_wati_date_2_talk': {
      sceneId: 'scene_ch4_02_wati_date_2_talk',
      narratorText: ["သူမသည် ခေါက်ဆွဲတစ်ပန်းကန်ကို အားရပါးရစားရင်း ရယ်လိုက်သည်။"],
      dialogue: [
        {character: "ဝတီ", line: "ကျွန်မကအမြဲတမ်း 'အဆင်ပြေတဲ့' လူတစ်ယောက်မဟုတ်ပါဘူး။ တခါတလေတော့လည်း ရှုပ်ယှက်ခတ်နေတာကိုကြိုက်တယ်။ လူတွေရဲ့ဇာတ်လမ်းတွေကိုကြည့်ရတာပေါ့။ ရှင်ကရော? ဘားမှာအလုပ်လုပ်တာစိတ်ဝင်စားစရာအကောင်းဆုံးကဘာလဲ?"}
      ],
      playerChoices: [
        {text: "\"လူတွေရဲ့အကောင်းဆုံးနဲ့အဆိုးဆုံးအချိန်တွေကိုမြင်ရတာပဲ။ တစ်ညတည်းမှာပဲ စေ့စပ်ပွဲနဲ့အသည်းကွဲခြင်းကိုတွေ့နိုင်တယ်။\"", nextSceneId: 'scene_ch5_01_friends_reunite'},
        {text: "\"ရိုးရိုးသားသားပြောရရင်တော့ 閉店ချိန်ပါပဲ။\"", nextSceneId: 'scene_ch5_01_friends_reunite', stateUpdates: {relationshipScores: [{character: 'wati', change: -1}]}}
      ]
    },
    // CHAPTER 5
    'scene_ch5_01_friends_reunite': {
      sceneId: 'scene_ch5_01_friends_reunite',
      narratorText: ["နောက်တစ်ပတ်အကြာတွင် သင်ဘားတွင် အလုပ်လုပ်နေစဉ် 'ကောင်စီ'သည် တriumvirate ကဲ့သို့ ပြန်လည်ရောက်ရှိလာသည်။"],
      dialogue: [
        {character: "အောင်ရဲမာန်", line: "ငါတို့ကြားတယ်။ မင်းကငါတို့မပါဘဲဒိတ်တွေထွက်နေတယ်ဆို?"},
        {character: "ထွန်းကိုကို", line: "ပြီးတော့ငါတို့ရဲ့အကြံဉာဏ်ကောင်းတွေကိုတောင်မတောင်းဘူး!"},
        {character: "လင်းကို", line: "သူတို့ထဲကတစ်ယောက်ယောက်က K-pop အကြောင်းပြောသေးလား? ငါတို့သိဖို့လိုတယ်။"}
      ],
      playerChoices: [
        {text: "သူတို့ကိုအမှန်အတိုင်းပြောပြလိုက်သည်။", nextSceneId: 'scene_ch5_02_friends_react'},
        {text: "လိမ်လည်ပြီး ဘာမှမဖြစ်ခဲ့သလိုဟန်ဆောင်လိုက်သည်။", nextSceneId: 'scene_ch5_02_friends_lie', stateUpdates: {relationshipScores: [{character: 'aungYeMan', change: -1}]}}
      ]
    },
    'scene_ch5_02_friends_lie': {
      sceneId: 'scene_ch5_02_friends_lie',
      narratorText: ["မင်း schulterzucken လုပ်လိုက်သည်။ \"မင်းတို့ဘာတွေပြောနေမှန်းမသိဘူး။ ငါအလုပ်များနေတယ်။\""],
      dialogue: [
          {character: "အောင်ရဲမာန်", line: "အိုး၊ ဟုတ်လား? ငါ့သတင်းရင်းမြစ်တွေကမင်းကိုတွေ့တယ်လို့ပြောတယ်။ မင်းကငါတို့ဆီကလျှို့ဝှက်ထားတာလား? ငါတို့ရဲ့အကြံဉာဏ်ကမကောင်းလို့လား?"}
      ],
      playerChoices: [
          {text: "ဆက်ရန်...", nextSceneId: 'scene_12_end_of_content'}
      ]
    },
    'scene_ch5_02_friends_react': {
      sceneId: 'scene_ch5_02_friends_react',
      narratorText: ["မင်းသက်ပြင်းချလိုက်ပြီး သူတို့ကိုအကုန်ပြောပြလိုက်တယ် - ဝတီ၊ ပိုးလေးနဲ့ထူးအောင်အကြောင်းတွေပေါ့။ သူတို့က ပါးစပ်အဟောင်းသားနဲ့နားထောင်နေကြတယ်။"],
      dialogue: [
          {character: "ထွန်းကိုကို", line: "ဝိုး။ မင်းကတော့တကယ့် Casanova ပဲ!"},
          {character: "အောင်ရဲမာန်", line: "ခဏနေဦး။ ပိုးလေးလား? မင်းရဲ့တက္ကသိုလ်ကောင်မလေးလား? ပြီးတော့မင်းငါတို့ကိုမပြောဘူးလား? ငါတို့ကမင်းကို'အဆင်ပြေတဲ့' ကောင်မလေးတွေနဲ့အချိန်ဖြုန်းခိုင်းနေတာ!"},
          {character: "လင်းကို", line: "သူတို့ထဲကတစ်ယောက်ယောက်က K-pop ကြိုက်လားမကြိုက်လားဆိုတာအဖြေထွက်ပြီလား?"}
      ],
      playerChoices: [
          {text: "ဆက်ရန်...", nextSceneId: 'scene_12_end_of_content'}
      ]
    },
    'scene_12_end_of_content': {
        sceneId: 'scene_12_end_of_content',
        narratorText: ["ဇာတ်လမ်းသည် ဤနေရာတွင် ယာယီအဆုံးသတ်သွားသည်။ ဆက်လက်ဖတ်ရှုရန်စောင့်မျှော်ပေးပါ။"],
        playerChoices: [
          { text: "ပြန်စရန်", nextSceneId: 'scene_01_bar_ambush' }
        ]
      }
};
