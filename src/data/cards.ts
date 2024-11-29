import {ImageSourcePropType} from 'react-native';

export interface CardData {
  deckID: number;
  id: number;
  text: string;
}

const cards: CardData[] = [
  {
    id:1,
    text:"What's a quirk you have that you're secretly proud of?",
    deckID:1,
  },
  {
    id:2,
    text:"Where's your go-to spot for relaxation?",
    deckID:1,
  },
  {
    id:3,
    text:"Who's the first person you call when you have good news?",
    deckID:1,
  },
  {
    id:4,
    text:"What's a small achievement you're really proud of?",
    deckID:1,
  },
  {
    id:5,
    text:"When do you feel most like yourself?",
    deckID:1,
  },
  {
    id:6,
    text:"What's your earliest childhood memory?",
    deckID:1,
  },
  {
    id:7,
    text:"What's the best compliment you've ever received?",
    deckID:1,
  },
  {
    id:8,
    text:"What's your favorite way to spend a lazy Sunday?",
    deckID:1,
  },
  {
    id:9,
    text:"What do you think is your most attractive feature?",
    deckID:1,
  },
  {
    id:10,
    text:"If you could live anywhere for a year, where would it be?",
    deckID:1,
  },
  {
    id:11,
    text:"What's a piece of advice your grandparents gave you that stuck?",
    deckID:1,
  },
  {
    id:12,
    text:"What's a fear you've overcome?",
    deckID:1,
  },
  {
    id:13,
    text:"What's your favorite thing about your personality?",
    deckID:1,
  },
  {
    id:14,
    text:"What's the kindest thing a stranger has done for you?",
    deckID:1,
  },
  {
    id:15,
    text:"What's a small act of kindness you did recently?",
    deckID:1,
  },
  {
    id:16,
    text:"What's been on your mind lately?",
    deckID:1,
  },
  {
    id:17,
    text:"If you could instantly master one skill, what would it be?",
    deckID:1,
  },
  {
    id:18,
    text:"What song always puts you in a good mood?",
    deckID:1,
  },
  {
    id:19,
    text:"What's something you used to be insecure about but aren't anymore?",
    deckID:1,
  },
  {
    id:20,
    text:"What's a guilty pleasure song you love?",
    deckID:1,
  },
  {
    id:21,
    text:"When was the last time you gave someone a genuine compliment?",
    deckID:1,
  },
  {
    id:22,
    text:"What's a happy memory that always makes you smile?",
    deckID:1,
  },
  {
    id:23,
    text:"What's something that annoys you more than it should?",
    deckID:1,
  },
  {
    id:24,
    text:"What do you notice first about someone's appearance?",
    deckID:1,
  },
  {
    id:25,
    text:"When was the last time you felt truly appreciated?",
    deckID:1,
  },
  {
    id:26,
    text:"What's the first thing you look forward to each morning?",
    deckID:1,
  },
  {
    id:27,
    text:"What's your favorite smell and why?",
    deckID:1,
  },
  {
    id:28,
    text:"If you could have dinner with anyone, living or dead, who would it be?",
    deckID:1,
  },
  {
    id:29,
    text:"What's the best gift you've ever received?",
    deckID:1,
  },
  {
    id:30,
    text:"What's a talent you have that most people don't know about?",
    deckID:1,
  },
  {
    id:31,
    text:"What's your favorite childhood game?",
    deckID:1,
  },
  {
    id:32,
    text:"If you could be any fictional character, who would you be?",
    deckID:1,
  },
  {
    id:33,
    text:"What's the most spontaneous thing you've ever done?",
    deckID:1,
  },
  {
    id:34,
    text:"What's your idea of a perfect day?",
    deckID:1,
  },
  {
    id:35,
    text:"What's a food combination you love that others find weird?",
    deckID:1,
  },
  {
    id:36,
    text:"What's the best piece of advice you've ever gotten?",
    deckID:1,
  },
  {
    id:37,
    text:"If you could relive one day of your life, which would it be?",
    deckID:1,
  },
  {
    id:38,
    text:"What's something you're looking forward to in the near future?",
    deckID:1,
  },
  {
    id:39,
    text:"What's a small luxury you always treat yourself to?",
    deckID:1,
  },
  {
    id:40,
    text:"Who was your childhood hero?",
    deckID:1,
  },
  {
    id:41,
    text:"What's the most interesting place you've ever visited?",
    deckID:1,
  },
  {
    id:42,
    text:"What's a hobby you'd like to pick up?",
    deckID:1,
  },
  {
    id:43,
    text:"What's your favorite way to practice self-care?",
    deckID:1,
  },
  {
    id:44,
    text:"If you could instantly become an expert in one subject, what would it be?",
    deckID:1,
  },
  {
    id:45,
    text:"What's the best surprise you've ever received?",
    deckID:1,
  },
  {
    id:46,
    text:"What's a tradition you'd like to start?",
    deckID:1,
  },
  {
    id:47,
    text:"What's the most beautiful place you've ever seen?",
    deckID:1,
  },
  {
    id:48,
    text:"What's a skill you're proud of learning?",
    deckID:1,
  },
  {
    id:49,
    text:"What's your favorite way to spend time with friends?",
    deckID:1,
  },
  {
    id:50,
    text:"If you could have any superpower, what would it be?",
    deckID:1,
  },
  {
    id:51,
    text:"What's the best concert or show you've ever attended?",
    deckID:1,
  },
  {
    id:52,
    text:"What's a small gesture that always brightens your day?",
    deckID:1,
  },
  {
    id:53,
    text:"What's your favorite childhood book?",
    deckID:1,
  },
  {
    id:54,
    text:"If you could have dinner with your younger self, what advice would you give?",
    deckID:1,
  },
  {
    id:55,
    text:"What's the most interesting fact you know?",
    deckID:1,
  },
  {
    id:56,
    text:"What's a goal you're currently working towards?",
    deckID:1,
  },
  {
    id:57,
    text:"What's your favorite way to relax after a long day?",
    deckID:1,
  },
  {
    id:58,
    text:"If you could master any musical instrument, which would you choose?",
    deckID:1,
  },
  {
    id:59,
    text:"What's the best vacation you've ever had?",
    deckID:1,
  },
  {
    id:60,
    text:"What's a movie that always makes you laugh?",
    deckID:1,
  },
  {
    id:61,
    text:"What's your favorite family tradition?",
    deckID:1,
  },
  {
    id:62,
    text:"If you could be famous for one thing, what would it be?",
    deckID:1,
  },
  {
    id:63,
    text:"What's the most adventurous thing you've ever eaten?",
    deckID:1,
  },
  {
    id:64,
    text:"What's a small act of rebellion you enjoy?",
    deckID:1,
  },
  {
    id:65,
    text:"If you could learn any language instantly, which would you choose?",
    deckID:1,
  },
  {
    id:66,
    text:"What's the best restaurant you've ever been to?",
    deckID:1,
  },
  {
    id:67,
    text:"What's a childhood dream you still want to fulfill?",
    deckID:1,
  },
  {
    id:68,
    text:"What's your favorite way to spend time in nature?",
    deckID:1,
  },
  {
    id:69,
    text:"If you could have a conversation with your future self, what would you ask?",
    deckID:1,
  },
  {
    id:70,
    text:"What's the most interesting documentary you've watched?",
    deckID:1,
  },
  {
    id:71,
    text:"What's a skill you wish you had learned earlier in life?",
    deckID:1,
  },
  {
    id:72,
    text:"If you could be in any movie, which one would you choose?",
    deckID:1,
  },
  {
    id:73,
    text:"What's the best book you've read recently?",
    deckID:1,
  },
  {
    id:74,
    text:"What's a small change you've made that had a big impact?",
    deckID:1,
  },
  {
    id:75,
    text:"If you could travel to any time period, when would you go?",
    deckID:1,
  },
  {
    id:76,
    text:"What's the most memorable birthday you've had?",
    deckID:1,
  },
  {
    id:77,
    text:"What's a quote that resonates with you?",
    deckID:1,
  },
  {
    id:78,
    text:"If you could instantly become a master at any sport, which would you choose?",
    deckID:1,
  },
  {
    id:79,
    text:"What's the best piece of technology you own?",
    deckID:1,
  },
  {
    id:80,
    text:"What's a childhood food that you still love?",
    deckID:1,
  },
  {
    id:81,
    text:"If you could solve one world problem, what would it be?",
    deckID:1,
  },
  {
    id:82,
    text:"What's the most beautiful sunset you've ever seen?",
    deckID:1,
  },
  {
    id:83,
    text:"What's a small victory you celebrated recently?",
    deckID:1,
  },
  {
    id:84,
    text:"If you could have any animal as a pet, what would you choose?",
    deckID:1,
  },
  {
    id:85,
    text:"What's the most interesting job you can imagine having?",
    deckID:1,
  },
  {
    id:86,
    text:"What's a place you've always wanted to visit?",
    deckID:1,
  },
  {
    id:87,
    text:"If you could be any age for a week, what age would you choose?",
    deckID:1,
  },
  {
    id:88,
    text:"What's the best advice you've ever given someone?",
    deckID:1,
  },
  {
    id:89,
    text:"What's a song that always reminds you of a specific memory?",
    deckID:1,
  },
  {
    id:90,
    text:"If you could have dinner with any historical figure, who would it be?",
    deckID:1,
  },
  {
    id:91,
    text:"What's the most interesting class you've ever taken?",
    deckID:1,
  },
  {
    id:92,
    text:"What's a hobby you used to love but haven't done in a while?",
    deckID:1,
  },
  {
    id:93,
    text:"If you could be an Olympic athlete, what sport would you compete in?",
    deckID:1,
  },
  {
    id:94,
    text:"What's the best party you've ever been to?",
    deckID:1,
  },
  {
    id:95,
    text:"What's a small act of kindness you regularly perform?",
    deckID:1,
  },
  {
    id:96,
    text:"If you could instantly become fluent in any language, which would you choose?",
    deckID:1,
  },
  {
    id:97,
    text:"What's the most interesting museum you've visited?",
    deckID:1,
  },
  {
    id:98,
    text:"What's a childhood nickname you had?",
    deckID:1,
  },
  {
    id:99,
    text:"If you could have any view from your window, what would it be?",
    deckID:1,
  },
  {
    id:100,
    text:"What's the best decision you've made in the past year?",
    deckID:1,
  },
  {
    id:101,
    text:"What's a belief you've recently changed your mind about?",
    deckID:2,
  },
  {
    id:102,
    text:"What's a realization about yourself that surprised you?",
    deckID:2,
  },
  {
    id:103,
    text:"When you think of love, what's the first memory that comes to mind?",
    deckID:2,
  },
  {
    id:104,
    text:"What's something you've done that you wish you could undo?",
    deckID:2,
  },
  {
    id:105,
    text:"What experience has humbled you the most?",
    deckID:2,
  },
  {
    id:106,
    text:"What's an embarrassing moment you can laugh about now?",
    deckID:2,
  },
  {
    id:107,
    text:"What's a habit you have that others might find strange?",
    deckID:2,
  },
  {
    id:108,
    text:"What was a turning point in your life?",
    deckID:2,
  },
  {
    id:109,
    text:"How would you rate your self-esteem on a scale of 1-10, and why?",
    deckID:2,
  },
  {
    id:110,
    text:"What's something you're currently obsessed with?",
    deckID:2,
  },
  {
    id:111,
    text:"What's a piece of advice that changed your perspective?",
    deckID:2,
  },
  {
    id:112,
    text:"What's your biggest internal struggle right now?",
    deckID:2,
  },
  {
    id:113,
    text:"What's a memory you cherish but rarely share?",
    deckID:2,
  },
  {
    id:114,
    text:"When have you felt the most secondhand embarrassment?",
    deckID:2,
  },
  {
    id:115,
    text:"How are you really doing? Be honest.",
    deckID:2
  },
  {
    id:116,
    text:"What's something you're afraid to let go of?",
    deckID:2,
  },
  {
    id:117,
    text:"What's a common misconception people have about you?",
    deckID:2,
  },
  {
    id:118,
    text:"What boundaries do you have that others often misunderstand?",
    deckID:2,
  },
  {
    id:119,
    text:"What excuses do you make that hold you back?",
    deckID:2,
  },
  {
    id:120,
    text:"How do you think your younger self would view you now?",
    deckID:2,
  },
  {
    id:121,
    text:"What keeps you going during tough times?",
    deckID:2,
  },
  {
    id:122,
    text:"What's your deepest source of motivation?",
    deckID:2,
  },
  {
    id:123,
    text:"What's an embarrassing habit you can't seem to break?",
    deckID:2,
  },
  {
    id:124,
    text:"What's a simple pleasure that always brings you joy?",
    deckID:2,
  },
  {
    id:125,
    text:"What's the most valuable lesson life has taught you so far?",
    deckID:2,
  },
  {
    id:126,
    text:"What's something you're certain about in life?",
    deckID:2,
  },
  {
    id:127,
    text:"What's a secret you keep that you think others would judge you for?",
    deckID:2,
  },
  {
    id:128,
    text:"What's a mistake you're grateful for making?",
    deckID:2,
  },
  {
    id:129,
    text:"What thought keeps you up at night?",
    deckID:2,
  },
  {
    id:130,
    text:"What's a fear you've never told anyone about?",
    deckID:2,
  },
  {
    id:131,
    text:"When was the last time you felt truly vulnerable?",
    deckID:2,
  },
  {
    id:132,
    text:"What's a dream you've given up on?",
    deckID:2,
  },
  {
    id:133,
    text:"What's something you pretend to understand but actually don't?",
    deckID:2,
  },
  {
    id:134,
    text:"When have you felt the most out of place?",
    deckID:2,
  },
  {
    id:135,
    text:"What's a compliment you've received that you didn't believe?",
    deckID:2,
  },
  {
    id:136,
    text:"What's a belief you hold that most people disagree with?",
    deckID:2,
  },
  {
    id:137,
    text:"When was the last time you felt truly seen by someone?",
    deckID:2,
  },
  {
    id:138,
    text:"What's a personal flaw you're working on improving?",
    deckID:2,
  },
  {
    id:139,
    text:"What's a secret talent you have that few people know about?",
    deckID:2,
  },
  {
    id:140,
    text:"When have you felt the most betrayed?",
    deckID:2,
  },
  {
    id:141,
    text:"What's something you're proud of but never get to talk about?",
    deckID:2,
  },
  {
    id:142,
    text:"What's a fear you've conquered that still sometimes resurfaces?",
    deckID:2,
  },
  {
    id:143,
    text:"When was the last time you surprised yourself?",
    deckID:2,
  },
  {
    id:144,
    text:"What's a personal rule you have that you never break?",
    deckID:2,
  },
  {
    id:145,
    text:"What's a childhood memory that still affects you today?",
    deckID:2,
  },
  {
    id:146,
    text:"When have you felt the most misunderstood?",
    deckID:2,
  },
  {
    id:147,
    text:"What's a decision you regret not making?",
    deckID:2,
  },
  {
    id:148,
    text:"What's something you're still trying to prove to yourself?",
    deckID:2,
  },
  {
    id:149,
    text:"When was the last time you felt truly content?",
    deckID:2,
  },
  {
    id:150,
    text:"What's a part of your personality you try to hide from others?",
    deckID:2,
  },
  {
    id:151,
    text:"What's a grudge you're still holding onto?",
    deckID:2,
  },
  {
    id:152,
    text:"When have you felt the most out of control?",
    deckID:2,
  },
  {
    id:153,
    text:"What's a belief about yourself that you're trying to change?",
    deckID:2,
  },
  {
    id:154,
    text:"What's a recurring dream or nightmare you have?",
    deckID:2,
  },
  {
    id:155,
    text:"When was the last time you felt truly disappointed in yourself?",
    deckID:2,
  },
  {
    id:156,
    text:"What's a personal victory you've never shared with anyone?",
    deckID:2,
  },
  {
    id:157,
    text:"What's something you're currently struggling to accept?",
    deckID:2,
  },
  {
    id:158,
    text:"When have you felt the most conflicted about a decision?",
    deckID:2,
  },
  {
    id:159,
    text:"What's a fear you have about your future?",
    deckID:2,
  },
  {
    id:160,
    text:"What's a memory you wish you could relive?",
    deckID:2,
  },
  {
    id:161,
    text:"When was the last time you felt truly challenged?",
    deckID:2,
  },
  {
    id:162,
    text:"What's a personal goal you've been putting off?",
    deckID:2,
  },
  {
    id:163,
    text:"What's something you're secretly proud of?",
    deckID:2,
  },
  {
    id:164,
    text:"When have you felt the most alone in a crowded room?",
    deckID:2,
  },
  {
    id:165,
    text:"What's a trait you admire in others but struggle with yourself?",
    deckID:2,
  },
  {
    id:166,
    text:"What's a habit you're trying to break?",
    deckID:2,
  },
  {
    id:167,
    text:"When was the last time you felt truly inspired?",
    deckID:2,
  },
  {
    id:168,
    text:"What's a personal belief you've questioned recently?",
    deckID:2,
  },
  {
    id:169,
    text:"What's something you wish you had said to someone?",
    deckID:2,
  },
  {
    id:170,
    text:"When have you felt the most misunderstood by your family?",
    deckID:2,
  },
  {
    id:171,
    text:"What's a fear you have about your relationships?",
    deckID:2,
  },
  {
    id:172,
    text:"What's a personal strength you often downplay?",
    deckID:2,
  },
  {
    id:173,
    text:"When was the last time you felt truly overwhelmed?",
    deckID:2,
  },
  {
    id:174,
    text:"What's a part of your identity you're still figuring out?",
    deckID:2,
  },
  {
    id:175,
    text:"What's a childhood dream you still haven't let go of?",
    deckID:2,
  },
  {
    id:176,
    text:"When have you felt the most out of your depth?",
    deckID:2,
  },
  {
    id:177,
    text:"What's a personal boundary you struggle to maintain?",
    deckID:2,
  },
  {
    id:178,
    text:"What's something you're still trying to forgive yourself for?",
    deckID:2,
  },
  {
    id:179,
    text:"When was the last time you felt truly proud of yourself?",
    deckID:2,
  },
  {
    id:180,
    text:"What's a personal belief that's been challenged recently?",
    deckID:2,
  },
  {
    id:181,
    text:"What's a fear you have about your career?",
    deckID:2,
  },
  {
    id:182,
    text:"What's a habit you wish you could develop?",
    deckID:2,
  },
  {
    id:183,
    text:"When have you felt the most disconnected from yourself?",
    deckID:2,
  },
  {
    id:184,
    text:"What's a personal truth you've recently discovered?",
    deckID:2,
  },
  {
    id:185,
    text:"What's something you're currently in denial about?",
    deckID:2,
  },
  {
    id:186,
    text:"When was the last time you felt truly understood?",
    deckID:2,
  },
  {
    id:187,
    text:"What's a part of your past you're still trying to make peace with?",
    deckID:2,
  },
  {
    id:188,
    text:"What's a personal expectation you're trying to let go of?",
    deckID:2,
  },
  {
    id:189,
    text:"When have you felt the most conflicted about your identity?",
    deckID:2,
  },
  {
    id:190,
    text:"What's a fear you have about your personal growth?",
    deckID:2,
  },
  {
    id:191,
    text:"What's a belief about relationships that you're questioning?",
    deckID:2,
  },
  {
    id:192,
    text:"When was the last time you felt truly vulnerable in a relationship?",
    deckID:2,
  },
  {
    id:193,
    text:"What's a personal standard you hold yourself to that you don't expect from others?",
    deckID:2,
  },
  {
    id:194,
    text:"What's something you're still learning to love about yourself?",
    deckID:2,
  },
  {
    id:195,
    text:"When have you felt the most authentic version of yourself?",
    deckID:2,
  },
  {
    id:196,
    text:"What's a personal limitation you're working to overcome?",
    deckID:2,
  },
  {
    id:197,
    text:"What's a fear you have about your impact on others?",
    deckID:2,
  },
  {
    id:198,
    text:"When was the last time you felt truly challenged by your own beliefs?",
    deckID:2,
  },
  {
    id:199,
    text:"What's a personal truth you're afraid to admit to yourself?",
    deckID:2,
  },
  {
    id:200,
    text:"What's something about your past that you're still trying to understand?",
    deckID:2,
  },
  {
    id:201,
    text:"What existential question has haunted you since childhood?",
    deckID:3,
  },
  {
    id:202,
    text:"What self-imposed limitations are holding you back from true happiness?",
    deckID:3,
  },
  {
    id:203,
    text:"Describe a moment when you felt completely broken. How did you rebuild?",
    deckID:3,
  },
  {
    id:204,
    text:"If you could redesign society, what would be your top priority?",
    deckID:3,
  },
  {
    id:205,
    text:"Describe an encounter with a stranger that profoundly impacted your life.",
    deckID:3,
  },
  {
    id:206,
    text:"What emotional baggage are you struggling to let go of?",
    deckID:3,
  },
  {
    id:207,
    text:"Do you feel like you're living authentically? Why or why not?",
    deckID:3,
  },
  {
    id:208,
    text:"Share a photo that captures a pivotal moment in your life and explain its significance.",
    deckID:3,
  },
  {
    id:209,
    text:"What internal battles are you fighting that no one knows about?",
    deckID:3,
  },
  {
    id:210,
    text:"What unresolved conflict keeps resurfacing in your life?",
    deckID:3,
  },
  {
    id:211,
    text:"What recurring thought or feeling do you can't seem to shake?",
    deckID:3,
  },
  {
    id:212,
    text:"Describe your most painful heartbreak. How did it shape you?",
    deckID:3,
  },
  {
    id:213,
    text:"What's a transformative experience you wish you could relive?",
    deckID:3,
  },
  {
    id:214,
    text:"What do you owe to your future self?",
    deckID:3,
  },
  {
    id:215,
    text:"What's a philosophical question you've never found a satisfactory answer to?",
    deckID:3,
  },
  {
    id:216,
    text:"How has past trauma influenced your current relationships and decisions?",
    deckID:3,
  },
  {
    id:217,
    text:"Describe your darkest moment. How did it contribute to your personal growth?",
    deckID:3,
  },
  {
    id:218,
    text:"What abandoned dream still haunts you?",
    deckID:3,
  },
  {
    id:219,
    text:"In what environment or situation do you feel most authentic?",
    deckID:3,
  },
  {
    id:220,
    text:"What risks do you regret not taking?",
    deckID:3,
  },
  {
    id:221,
    text:"Describe a moment of pure joy in your life. How does reflecting on it make you feel now?",
    deckID:3,
  },
  {
    id:222,
    text:"How often do you answer honestly when someone asks how you're doing?",
    deckID:3,
  },
  {
    id:223,
    text:"If you could unburden yourself of one thing, what would it be?",
    deckID:3,
  },
  {
    id:224,
    text:"What's the most difficult goodbye you've ever had to say?",
    deckID:3,
  },
  {
    id:225,
    text:"How has generational trauma affected your life and choices?",
    deckID:3,
  },
  {
    id:226,
    text:"What's the most soul-crushing thing someone has ever said to you?",
    deckID:3,
  },
  {
    id:227,
    text:"What negative traits or habits are you afraid of passing on to future generations?",
    deckID:3,
  },
  {
    id:228,
    text:"Describe a risk you took that fundamentally changed your life for the better.",
    deckID:3,
  },
  {
    id:229,
    text:"What part of yourself do you feel you've lost over the years?",
    deckID:3,
  },
  {
    id:230,
    text:"How has your definition of love evolved throughout your life?",
    deckID:3,
  },
  {
    id:231,
    text:"What's a belief you hold that you wish wasn't true?",
    deckID:3,
  },
  {
    id:232,
    text:"Describe a moment when you felt completely at peace with the universe.",
    deckID:3,
  },
  {
    id:233,
    text:"What's the biggest compromise you've made in life? Do you regret it?",
    deckID:3,
  },
  {
    id:234,
    text:"How has your relationship with your parents shaped your worldview?",
    deckID:3,
  },
  {
    id:235,
    text:"What's a truth about yourself that you've only recently accepted?",
    deckID:3,
  },
  {
    id:236,
    text:"Describe a time when you felt completely misunderstood by those closest to you.",
    deckID:3,
  },
  {
    id:237,
    text:"What's a life-changing decision you made that others didn't support?",
    deckID:3,
  },
  {
    id:238,
    text:"How has your perception of success and failure changed over time?",
    deckID:3,
  },
  {
    id:239,
    text:"What's a childhood wound that still affects your adult relationships?",
    deckID:3,
  },
  {
    id:240,
    text:"Describe a moment when you felt completely alone in the world.",
    deckID:3,
  },
  {
    id:241,
    text:"What's a personal truth you're afraid to admit to others?",
    deckID:3,
  },
  {
    id:242,
    text:"How has your understanding of mortality evolved as you've grown older?",
    deckID:3,
  },
  {
    id:243,
    text:"What's a belief you held strongly that you later realized was completely wrong?",
    deckID:3,
  },
  {
    id:244,
    text:"Describe a time when you had to choose between your values and your desires.",
    deckID:3,
  },
  {
    id:245,
    text:"What's the most profound lesson you've learned from a failure?",
    deckID:3,
  },
  {
    id:246,
    text:"How has your definition of happiness changed throughout your life?",
    deckID:3,
  },
  {
    id:247,
    text:"What's a part of your identity that you struggle to accept?",
    deckID:3,
  },
  {
    id:248,
    text:"Describe a moment when you felt completely out of control in your life.",
    deckID:3,
  },
  {
    id:249,
    text:"What's a recurring pattern in your life that you're trying to break?",
    deckID:3,
  },
  {
    id:250,
    text:"How has your understanding of love been shaped by your past relationships?",
    deckID:3,
  },
  {
    id:251,
    text:"What's a truth about the world that you find difficult to accept?",
    deckID:3,
  },
  {
    id:252,
    text:"Describe a time when you had to completely reinvent yourself",
    deckID:3,
  },
  {
    id:253,
    text:"What's a fear that's holding you back from living your ideal life?",
    deckID:3,
  },
  {
    id:254,
    text:"How has your relationship with your body changed over time?",
    deckID:3,
  },
  {
    id:255,
    text:"What's a belief about yourself that you're trying to unlearn?",
    deckID:3,
  },
  {
    id:256,
    text:"Describe a moment when you felt truly seen and understood by someone",
    deckID:3,
  },
  {
    id:257,
    text:"What's a personal boundary that you struggle to maintain?",
    deckID:3,
  },
  {
    id:258,
    text:"How has your understanding of forgiveness evolved over time?",
    deckID:3,
  },
  {
    id:259,
    text:"What's a part of your past that you're still trying to make peace with?",
    deckID:3,
  },
  {
    id:260,
    text:"Describe a time when you had to choose between your happiness and someone else's",
    deckID:3,
  },
  {
    id:261,
    text:"What's a personal truth that you've only recently discovered about yourself?",
    deckID:3,
  },
  {
    id:262,
    text:"How has your relationship with spirituality or religion evolved over your lifetime?",
    deckID:3,
  },
  {
    id:263,
    text:"What's a decision you made that you wish you could go back and change?",
    deckID:3,
  },
  {
    id:264,
    text:"Describe a moment when you felt completely disconnected from your own identity",
    deckID:3,
  },
  {
    id:265,
    text:"What's a personal value that you've compromised and later regretted?",
    deckID:3,
  },
  {
    id:266,
    text:"How has your understanding of your own mortality influenced your life choices?",
    deckID:3,
  },
  {
    id:267,
    text:"What's a recurring dream or nightmare that you think holds deeper meaning?",
    deckID:3,
  },
  {
    id:268,
    text:"Describe a time when you had to confront a hard truth about yourself",
    deckID:3,
  },
  {
    id:269,
    text:"What's an aspect of your personality that you struggle to integrate with the rest of yourself?",
    deckID:3,
  },
  {
    id:270,
    text:"How has your definition of 'home' changed throughout your life?",
    deckID:3,
  },
  {
    id:271,
    text:"What's a belief about relationships that you've had to unlearn?",
    deckID:3,
  },
  {
    id:272,
    text:"Describe a moment when you felt truly vulnerable and how it affected you",
    deckID:3,
  },
  {
    id:273,
    text:"What's a part of your cultural or family heritage that you struggle with?",
    deckID:3,
  },
  {
    id:274,
    text:"How has your relationship with success and failure evolved over time?",
    deckID:3,
  },
  {
    id:275,
    text:"What's a personal goal that you're afraid to admit to others?",
    deckID:3,
  },
  {
    id:276,
    text:"Describe a time when you had to choose between your personal growth and stability",
    deckID:3,
  },
  {
    id:277,
    text:"What's a fear about your future that keeps you up at night?",
    deckID:3,
  },
  {
    id:278,
    text:"How has your understanding of self-worth changed throughout your life?",
    deckID:3,
  },
  {
    id:279,
    text:"What's a personal truth that you're still learning to accept?",
    deckID:3,
  },
  {
    id:280,
    text:"Describe a moment when you felt completely at odds with societal expectations",
    deckID:3,
  },
  {
    id:281,
    text:"What's a part of your identity that you feel is misunderstood by others?",
    deckID:3,
  },
  {
    id:282,
    text:"How has your relationship with your own emotions changed over time?",
    deckID:3,
  },
  {
    id:283,
    text:"What's a belief about the world that you wish wasn't true?",
    deckID:3,
  },
  {
    id:284,
    text:"Describe a time when you had to confront your own prejudices or biases",
    deckID:3,
  },
  {
    id:285,
    text:"What's a personal limitation that you're working to overcome?",
    deckID:3,
  },
  {
    id:286,
    text:"How has your understanding of love and companionship evolved as you've grown older?",
    deckID:3,
  },
  {
    id:287,
    text:"What's a part of your past that you're still trying to forgive yourself for?",
    deckID:3,
  },
  {
    id:288,
    text:"Describe a moment when you felt truly aligned with your life's purpose",
    deckID:3,
  },
  {
    id:289,
    text:"What's a fear about your relationships that you struggle to overcome?",
    deckID:3,
  },
  {
    id:290,
    text:"How has your definition of personal freedom changed throughout your life?",
    deckID:3,
  },
  {
    id:291,
    text:"What's a truth about yourself that you've only recently begun to explore?",
    deckID:3,
  },
  {
    id:292,
    text:"Describe a time when you had to choose between your personal values and societal norms",
    deckID:3,
  },
  {
    id:293,
    text:"What's an aspect of your personality that you feel contradicts your core self?",
    deckID:3,
  },
  {
    id:294,
    text:"How has your relationship with your own vulnerability changed over time?",
    deckID:3,
  },
  {
    id:295,
    text:"What's a belief about success that you've had to redefine for yourself?",
    deckID:3,
  },
  {
    id:296,
    text:"Describe a moment when you felt completely transformed by an experience",
    deckID:3,
  },
  {
    id:297,
    text:"What's a part of your identity that you feel you've lost touch with?",
    deckID:3,
  },
  {
    id:298,
    text:"How has your understanding of what gives life meaning evolved over time?",
    deckID:3,
  },
  {
    id:299,
    text:"What's the most profound realization you've had about yourself or life that you're still grappling with?",
    deckID:3,
  },
  {
    id:300,
    text:"What was the most unexpected moment of your year?",
    deckID:4,
  },
  {
    id:301,
    text:"What's a small win you're secretly proud of?",
    deckID:4,
  },
  {
    id:302,
    text:"What made you laugh the hardest this year?",
    deckID:4,
  },
  {
    id:303,
    text:"What's the best compliment you received in 2024?",
    deckID:4,
  },
  {
    id:304,
    text:"What's a new habit you accidentally started this year?",
    deckID:4,
  },
  {
    id:305,
    text:"What was your favorite meal of the year?",
    deckID:4,
  },
  {
    id:306,
    text:"What song defined your 2024?",
    deckID:4,
  },
  {
    id:307,
    text:"What's a random act of kindness you did this year?",
    deckID:4,
  },
  {
    id:308,
    text:"What surprised you most about yourself this year?",
    deckID:4,
  },
  {
    id:309,
    text:"What was your go-to comfort activity when stressed?",
    deckID:4,
  },
  {
    id:310,
    text:"What's something you tried for the first time this year?",
    deckID:4,
  },
  {
    id:311,
    text:"What was your most memorable day in 2024?",
    deckID:4,
  },
  {
    id:312,
    text:"What's a quirky moment that made you smile?",
    deckID:4,
  },
  {
    id:313,
    text:"What unexpected friendship developed this year?",
    deckID:4,
  },
  {
    id:314,
    text:"What's a skill you accidentally learned?",
    deckID:4,
  },
  {
    id:315,
    text:"What was your favorite self-care moment?",
    deckID:4,
  },
  {
    id:316,
    text:"What made you feel most alive this year?",
    deckID:4,
  },
  {
    id:317,
    text:"What's a small change that had a big impact?",
    deckID:4,
  },
  {
    id:318,
    text:"What was your most spontaneous decision?",
    deckID:4,
  },
  {
    id:319,
    text:"What's something you're lowkey proud of?",
    deckID:4,
  },
  {
    id:320,
    text:"What was your favorite technology discovery?",
    deckID:4,
  },
  {
    id:321,
    text:"What made you feel most grateful?",
    deckID:4,
  },
  {
    id:322,
    text:"What was your weirdest experience?",
    deckID:4,
  },
  {
    id:323,
    text:"What's a tradition you started this year?",
    deckID:4,
  },
  {
    id:324,
    text:"What was your most interesting conversation?",
    deckID:4,
  },
  {
    id:325,
    text:"What made you feel most confident?",
    deckID:4,
  },
  {
    id:326,
    text:"What's a goal you didn't expect to achieve?",
    deckID:4,
  },
  {
    id:327,
    text:"What was your most peaceful moment?",
    deckID:4,
  },
  {
    id:328,
    text:"What made you feel most connected to others?",
    deckID:4,
  },
  {
    id:329,
    text:"What was your favorite adventure?",
    deckID:4,
  },
  {
    id:330,
    text:"What's something you learned about yourself?",
    deckID:4,
  },
  {
    id:331,
    text:"What was your most creative moment?",
    deckID:4,
  },
  {
    id:332,
    text:"What surprised you about your own resilience?",
    deckID:4,
  },
  {
    id:333,
    text:"What was your favorite form of escape?",
    deckID:4,
  },
  {
    id:334,
    text:"What made you feel most proud?",
    deckID:4,
  },
  {
    id:335,
    text:"What was your most authentic moment?",
    deckID:4,
  },
  {
    id:336,
    text:"What's a memory that always makes you smile?",
    deckID:4,
  },
  {
    id:337,
    text:"What was your most courageous act?",
    deckID:4,
  },
  {
    id:338,
    text:"What feeling defined your year?",
    deckID:4,
  },
  {
    id:339,
    text:"What's one word that summarizes your 2024?",
    deckID:4,
  },
  {
    id:340,
    text:"What was your biggest internal struggle this year?",
    deckID:4,
  },
  {
    id:341,
    text:"How did your definition of success change?",
    deckID:4,
  },
  {
    id:342,
    text:"What fear did you confront this year?",
    deckID:4,
  },
  {
    id:343,
    text:"What relationship evolved most significantly?",
    deckID:4,
  },
  {
    id:344,
    text:"What personal boundary did you establish?",
    deckID:4,
  },
  {
    id:345,
    text:"What mistake taught you the most?",
    deckID:4,
  },
  {
    id:346,
    text:"How did your self-perception shift?",
    deckID:4,
  },
  {
    id:347,
    text:"What unresolved emotion are you carrying?",
    deckID:4,
  },
  {
    id:348,
    text:"What compromise did you make that you're questioning?",
    deckID:4,
  },
  {
    id:349,
    text:"What part of yourself are you still trying to understand?",
    deckID:4,
  },
  {
    id:350,
    text:"What belief about yourself changed?",
    deckID:4,
  },
  {
    id:351,
    text:"What was your most vulnerable moment?",
    deckID:4,
  },
  {
    id:352,
    text:"What expectation did you let go of?",
    deckID:4,
  },
  {
    id:353,
    text:"How did your coping mechanisms evolve?",
    deckID:4,
  },
  {
    id:354,
    text:"What personal truth did you discover?",
    deckID:4,
  },
  {
    id:355,
    text:"What challenge made you question everything?",
    deckID:4,
  },
  {
    id:356,
    text:"How did your priorities transform?",
    deckID:4,
  },
  {
    id:357,
    text:"What internal dialogue needs healing?",
    deckID:4,
  },
  {
    id:358,
    text:"What part of your past still influences you?",
    deckID:4,
  },
  {
    id:359,
    text:"What risk did you take that scared you?",
    deckID:4,
  },
  {
    id:360,
    text:"What aspect of yourself are you proud of healing?",
    deckID:4,
  },
  {
    id:361,
    text:"What misconception about yourself did you challenge?",
    deckID:4,
  },
  {
    id:362,
    text:"What emotional pattern are you trying to break?",
    deckID:4,
  },
  {
    id:363,
    text:"How did your understanding of love change?",
    deckID:4,
  },
  {
    id:364,
    text:"What personal growth surprised you?",
    deckID:4,
  },
  {
    id:365,
    text:"What feeling were you most afraid to acknowledge?",
    deckID:4,
  },
  {
    id:366,
    text:"What part of your identity felt most challenged?",
    deckID:4,
  },
  {
    id:367,
    text:"What unexpected lesson did you learn?",
    deckID:4,
  },
  {
    id:368,
    text:"What personal standard did you redefine?",
    deckID:4,
  },
  {
    id:369,
    text:"How did your relationship with failure change?",
    deckID:4,
  },
  {
    id:370,
    text:"What part of yourself are you still protecting?",
    deckID:4,
  },
  {
    id:371,
    text:"What emotional baggage are you ready to release?",
    deckID:4,
  },
  {
    id:372,
    text:"What belief about relationships shifted?",
    deckID:4,
  },
  {
    id:373,
    text:"What personal limitation are you confronting?",
    deckID:4,
  },
  {
    id:374,
    text:"How did your self-compassion grow?",
    deckID:4,
  },
  {
    id:375,
    text:"What unexpected source of strength did you find?",
    deckID:4,
  },
  {
    id:376,
    text:"What part of your journey felt most authentic?",
    deckID:4,
  },
  {
    id:377,
    text:"What emotional investment surprised you?",
    deckID:4,
  },
  {
    id:378,
    text:"What personal truth are you still processing?",
    deckID:4,
  },
  {
    id:379,
    text:"What aspect of yourself are you learning to accept?",
    deckID:4,
  },
  {
    id:380,
    text:"How has this year transformed your understanding of purpose?",
    deckID:4,
  },
  {
    id:381,
    text:"What existential question has haunted you most?",
    deckID:4,
  },
  {
    id:382,
    text:"How have your core values been challenged?",
    deckID:4,
  },
  {
    id:383,
    text:"What unresolved internal conflict persists?",
    deckID:4,
  },
  {
    id:384,
    text:"How has your perception of time evolved?",
    deckID:4,
  },
  {
    id:385,
    text:"What part of your soul feels most wounded?",
    deckID:4,
  },
  {
    id:386,
    text:"How has your relationship with vulnerability changed?",
    deckID:4,
  },
  {
    id:387,
    text:"What generational pattern are you breaking?",
    deckID:4,
  },
  {
    id:388,
    text:"How has your understanding of personal freedom shifted?",
    deckID:4,
  },
  {
    id:389,
    text:"What spiritual or philosophical revelation emerged?",
    deckID:4,
  },
  {
    id:390,
    text:"How has your concept of self been deconstructed?",
    deckID:4,
  },
  {
    id:391,
    text:"What deeply held belief are you questioning?",
    deckID:4,
  },
  {
    id:392,
    text:"How has your relationship with uncertainty transformed?",
    deckID:4,
  },
  {
    id:393,
    text:"What part of your identity feels most fragile?",
    deckID:4,
  },
  {
    id:394,
    text:"How has your understanding of healing evolved?",
    deckID:4,
  },
  {
    id:395,
    text:"What existential fear are you confronting?",
    deckID:4,
  },
  {
    id:396,
    text:"How has your perception of personal growth changed?",
    deckID:4,
  },
  {
    id:397,
    text:"What unspoken truth are you carrying?",
    deckID:4,
  },
  {
    id:398,
    text:"How has your relationship with mortality shifted?",
    deckID:4,
  },
  {
    id:399,
    text:"What part of yourself are you still mourning?",
    deckID:4,
  },
  {
    id:400,
    text:"How has your understanding of interconnectedness deepened?",
    deckID:4,
  },
  {
    id:401,
    text:"What personal mythology are you rewriting?",
    deckID:4,
  },
  {
    id:402,
    text:"How has your capacity for empathy transformed?",
    deckID:4,
  },
  {
    id:403,
    text:"What ancestral wound are you addressing?",
    deckID:4,
  },
  {
    id:404,
    text:"How has your understanding of resilience evolved?",
    deckID:4,
  },
  {
    id:405,
    text:"What part of your soul feels most alive?",
    deckID:4,
  },
  {
    id:406,
    text:"How has your relationship with authenticity changed?",
    deckID:4,
  },
  {
    id:407,
    text:"What existential longing persists?",
    deckID:4,
  },
  {
    id:408,
    text:"How has your perception of suffering transformed?",
    deckID:4,
  },
  {
    id:409,
    text:"What personal truth are you integrating?",
    deckID:4,
  },
  {
    id:410,
    text:"How has your understanding of love expanded?",
    deckID:4,
  },
  {
    id:411,
    text:"What part of yourself are you reclaiming?",
    deckID:4,
  },
  {
    id:412,
    text:"How has your relationship with change deepened?",
    deckID:4,
  },
  {
    id:413,
    text:"What unresolved spiritual question remains?",
    deckID:4,
  },
  {
    id:414,
    text:"How has your perception of personal power shifted?",
    deckID:4,
  },
  {
    id:415,
    text:"What part of your journey feels most sacred?",
    deckID:4,
  },
  {
    id:416,
    text:"How has your understanding of boundaries evolved?",
    deckID:4,
  },
  {
    id:417,
    text:"What existential breakthrough occurred?",
    deckID:4,
  },
  {
    id:418,
    text:"How has your relationship with surrender changed?",
    deckID:4,
  },
  {
    id:419,
    text:"What profound realization are you still processing?",
    deckID:4,
  },
  {
    id:420,
    text:"What's the weirdest compliment you've ever received?",
    deckID:5,
  },
  {
    id:421,
    text:"What's a silly tradition you have with a friend?",
    deckID:5,
  },
  {
    id:422,
    text:"Who makes you laugh the hardest?",
    deckID:5,
  },
  {
    id:423,
    text:"What's a childhood memory that always makes you smile?",
    deckID:5,
  },
  {
    id:424,
    text:"Who's someone you'd love to have dinner with?",
    deckID:5,
  },
  {
    id:425,
    text:"What's the most unexpected friendship you've had?",
    deckID:5,
  },
  {
    id:426,
    text:"What's a secret talent your friends don't know about?",
    deckID:5,
  },
  {
    id:427,
    text:"Who's the most interesting person you've met recently?",
    deckID:5,
  },
  {
    id:428,
    text:"What's a random act of kindness someone did for you?",
    deckID:5,
  },
  {
    id:429,
    text:"Who's your go-to person when you need cheering up?",
    deckID:5,
  },
  {
    id:430,
    text:"What's a inside joke you have with someone?",
    deckID:5,
  },
  {
    id:431,
    text:"Who's someone you admire but haven't told them why?",
    deckID:5,
  },
  {
    id:432,
    text:"What's the most fun you've had with friends recently?",
    deckID:5,
  },
  {
    id:433,
    text:"Who's a friend that feels like family?",
    deckID:5,
  },
  {
    id:434,
    text:"What's a memory that always makes you laugh?",
    deckID:5,
  },
  {
    id:435,
    text:"Who's someone you're grateful to have in your life?",
    deckID:5,
  },
  {
    id:436,
    text:"What's the most adventurous thing you've done with a friend?",
    deckID:5,
  },
  {
    id:437,
    text:"Who's someone that always sees the real you?",
    deckID:5,
  },
  {
    id:438,
    text:"What's a skill you'd love to learn from a friend?",
    deckID:5,
  },
  {
    id:439,
    text:"Who's the most supportive person in your life?",
    deckID:5,
  },
  {
    id:440,
    text:"What's a quirky connection you have with someone?",
    deckID:5,
  },
  {
    id:441,
    text:"Who's someone that challenges you in a good way?",
    deckID:5,
  },
  {
    id:442,
    text:"What's a surprise someone did for you?",
    deckID:5,
  },
  {
    id:443,
    text:"Who's a friend you can be completely silent with?",
    deckID:5,
  },
  {
    id:444,
    text:"What's a shared experience that bonded you with someone?",
    deckID:5,
  },
  {
    id:445,
    text:"Who's someone that always makes you feel safe?",
    deckID:5,
  },
  {
    id:446,
    text:"What's a conversation that changed your perspective?",
    deckID:5,
  },
  {
    id:447,
    text:"Who's someone you'd love to know better?",
    deckID:5,
  },
  {
    id:448,
    text:"What's a moment of unexpected connection you've had?",
    deckID:5,
  },
  {
    id:449,
    text:"Who's someone that feels like home?",
    deckID:5,
  },
  {
    id:450,
    text:"What's a gift that meant more than its value?",
    deckID:5,
  },
  {
    id:451,
    text:"Who's someone you're proud to know?",
    deckID:5,
  },
  {
    id:452,
    text:"What's a shared passion you have with someone?",
    deckID:5,
  },
  {
    id:453,
    text:"Who's someone that brings out the best in you?",
    deckID:5,
  },
  {
    id:454,
    text:"What's a memory that represents true friendship?",
    deckID:5,
  },
  {
    id:455,
    text:"Who's someone you can be completely yourself around?",
    deckID:5,
  },
  {
    id:456,
    text:"What's a lesson you learned from a friend?",
    deckID:5,
  },
  {
    id:457,
    text:"Who's someone that makes you feel understood?",
    deckID:5,
  },
  {
    id:458,
    text:"What's a connection that surprised you?",
    deckID:5,
  },
  {
    id:459,
    text:"Who's someone that feels like your chosen family?",
    deckID:5,
  },
  {
    id:460,
    text:"What vulnerability are you afraid to share?",
    deckID:5,
  },
  {
    id:461,
    text:"Who knows the real you, beyond the surface?",
    deckID:5,
  },
  {
    id:462,
    text:"What relationship pattern are you trying to break?",
    deckID:5,
  },
  {
    id:463,
    text:"Who have you struggled to forgive?",
    deckID:5,
  },
  {
    id:464,
    text:"What unspoken truth exists in a relationship?",
    deckID:5,
  },
  {
    id:465,
    text:"Who challenges your perception of yourself?",
    deckID:5,
  },
  {
    id:466,
    text:"What relationship has most transformed you?",
    deckID:5,
  },
  {
    id:467,
    text:"Who sees your wounds without judgment?",
    deckID:5,
  },
  {
    id:468,
    text:"What connection feels most complicated?",
    deckID:5,
  },
  {
    id:469,
    text:"Who have you been most afraid to disappoint?",
    deckID:5,
  },
  {
    id:470,
    text:"What relationship dynamic are you questioning?",
    deckID:5,
  },
  {
    id:471,
    text:"Who understands your silent moments?",
    deckID:5,
  },
  {
    id:472,
    text:"What connection feels unresolved?",
    deckID:5,
  },
  {
    id:473,
    text:"Who knows your deepest insecurities?",
    deckID:5,
  },
  {
    id:474,
    text:"What relationship boundary are you establishing?",
    deckID:5,
  },
  {
    id:475,
    text:"Who have you been most vulnerable with?",
    deckID:5,
  },
  {
    id:476,
    text:"What connection feels most authentic?",
    deckID:5,
  },
  {
    id:477,
    text:"Who challenges your emotional patterns?",
    deckID:5,
  },
  {
    id:478,
    text:"What relationship taught you about yourself?",
    deckID:5,
  },
  {
    id:479,
    text:"Who feels like an emotional mirror?",
    deckID:5,
  },
  {
    id:480,
    text:"What connection requires most healing?",
    deckID:5,
  },
  {
    id:481,
    text:"Who sees your potential before you do?",
    deckID:5,
  },
  {
    id:482,
    text:"What relationship dynamic drains you?",
    deckID:5,
  },
  {
    id:483,
    text:"Who helps you grow without pressure?",
    deckID:5,
  },
  {
    id:484,
    text:"What connection feels most sacred?",
    deckID:5,
  },
  {
    id:485,
    text:"Who understands your unspoken language?",
    deckID:5,
  },
  {
    id:486,
    text:"What relationship pattern are you inheriting?",
    deckID:5,
  },
  {
    id:487,
    text:"Who accepts your contradictions?",
    deckID:5,
  },
  {
    id:488,
    text:"What connection feels most transformative?",
    deckID:5,
  },
  {
    id:489,
    text:"Who holds space for your complexity?",
    deckID:5,
  },
  {
    id:490,
    text:"What relationship requires most courage?",
    deckID:5,
  },
  {
    id:491,
    text:"Who understands your silent struggles?",
    deckID:5,
  },
  {
    id:492,
    text:"What connection feels most honest?",
    deckID:5,
  },
  {
    id:493,
    text:"Who challenges your comfort zone?",
    deckID:5,
  },
  {
    id:494,
    text:"What relationship reveals your true self?",
    deckID:5,
  },
  {
    id:495,
    text:"Who sees beyond your protective layers?",
    deckID:5,
  },
  {
    id:496,
    text:"What connection feels most healing?",
    deckID:5,
  },
  {
    id:497,
    text:"Who understands your emotional landscape?",
    deckID:5,
  },
  {
    id:498,
    text:"What relationship teaches compassion?",
    deckID:5,
  },
  {
    id:499,
    text:"Who feels like your emotional home?",
    deckID:5,
  },
  {
    id:500,
    text:"How do your relationships reflect your inner world?",
    deckID:5,
  },
  {
    id:501,
    text:"What unresolved ancestral pattern influences your connections?",
    deckID:5,
  },
  {
    id:502,
    text:"How do your deepest fears shape your relationships?",
    deckID:5,
  },
  {
    id:503,
    text:"What spiritual lesson are your connections teaching?",
    deckID:5,
  },
  {
    id:504,
    text:"How does vulnerability transform your relationships?",
    deckID:5,
  },
  {
    id:505,
    text:"What part of yourself are you protecting in connections?",
    deckID:5,
  },
  {
    id:506,
    text:"How do your relationships mirror your soul's journey?",
    deckID:5,
  },
  {
    id:507,
    text:"What unspoken emotional inheritance exists?",
    deckID:5,
  },
  {
    id:508,
    text:"How do your connections reveal your true self?",
    deckID:5,
  },
  {
    id:509,
    text:"What relational wound are you healing?",
    deckID:5,
  },
  {
    id:510,
    text:"How do your boundaries reflect self-love?",
    deckID:5,
  },
  {
    id:511,
    text:"What existential longing exists in your connections?",
    deckID:5,
  },
  {
    id:512,
    text:"How do your relationships challenge your identity?",
    deckID:5,
  },
  {
    id:513,
    text:"What unresolved internal conflict manifests in connections?",
    deckID:5,
  },
  {
    id:514,
    text:"How do your relationships expand your consciousness?",
    deckID:5,
  },
  {
    id:515,
    text:"What part of your soul feels most connected?",
    deckID:5,
  },
  {
    id:516,
    text:"How do your relationships reflect your personal evolution?",
    deckID:5,
  },
  {
    id:517,
    text:"What emotional landscape are you navigating?",
    deckID:5,
  },
  {
    id:518,
    text:"How do your connections transcend surface interactions?",
    deckID:5,
  },
  {
    id:519,
    text:"What relational truth are you integrating?",
    deckID:5,
  },
  {
    id:520,
    text:"How do your relationships reveal your shadows?",
    deckID:5,
  },
  {
    id:521,
    text:"What spiritual contract exists in your connections?",
    deckID:5,
  },
  {
    id:522,
    text:"How do your relationships challenge your perception?",
    deckID:5,
  },
  {
    id:523,
    text:"What unspoken emotional dialogue exists?",
    deckID:5,
  },
  {
    id:524,
    text:"How do your connections heal generational wounds?",
    deckID:5,
  },
  {
    id:525,
    text:"What relational mythology are you rewriting?",
    deckID:5,
  },
  {
    id:526,
    text:"How do your relationships reflect your inner wisdom?",
    deckID:5,
  },
  {
    id:527,
    text:"What emotional landscape are you exploring?",
    deckID:5,
  },
  {
    id:528,
    text:"How do your connections reveal your authentic self?",
    deckID:5,
  },
  {
    id:529,
    text:"What unresolved spiritual question exists?",
    deckID:5,
  },
  {
    id:530,
    text:"How do your relationships expand your empathy?",
    deckID:5,
  },
  {
    id:531,
    text:"What part of yourself are you reclaiming?",
    deckID:5,
  },
  {
    id:532,
    text:"How do your connections challenge your limitations?",
    deckID:5,
  },
  {
    id:533,
    text:"What emotional breakthrough is emerging?",
    deckID:5,
  },
  {
    id:534,
    text:"How do your relationships reflect your soul's purpose?",
    deckID:5,
  },
  {
    id:535,
    text:"What unspoken emotional language exists?",
    deckID:5,
  },
  {
    id:536,
    text:"How do your connections transform your perception?",
    deckID:5,
  },
  {
    id:537,
    text:"What relational truth are you discovering?",
    deckID:5,
  },
  {
    id:538,
    text:"How do your relationships reveal your inner strength?",
    deckID:5,
  },
  {
    id:539,
    text:"What spiritual awakening is occurring through connections?",
    deckID:5,
  },
  {
    id:540,
    text:"How do your relationships help you confront your fears?",
    deckID:5,
  },
  {
    id:541,
    text:"What emotional truths have you discovered through your connections with others?",
    deckID:5,
  },
  {
    id:542,
    text:"How do your relationships reflect your values and beliefs?",
    deckID:5,
  },
  {
    id:543,
    text:"What unresolved feelings are you carrying into your current relationships?",
    deckID:5,
  },
  {
    id:544,
    text:"How have your connections influenced your understanding of love?",
    deckID:5,
  },
  {
    id:545,
    text:"What part of your journey feels most illuminated by your relationships?",
    deckID:5,
  },
  {
    id:546,
    text:"How do your friendships challenge or support your personal growth?",
    deckID:5,
  },
  {
    id:547,
    text:"What lessons about forgiveness have emerged from your connections?",
    deckID:5,
  },
  {
    id:548,
    text:"How do your relationships mirror the relationship you have with yourself?",
    deckID:5,
  },
  {
    id:549,
    text:"What spiritual insights have you gained from difficult relationships?",
    deckID:5,
  },
  {
    id:550,
    text:"How do your connections help you navigate life's uncertainties?",
    deckID:5,
  }
];

export {cards};
