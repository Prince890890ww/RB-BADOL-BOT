module.exports.config = {
    name: "hadis",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "JRT",
    description: "Thả thính",
    commandCategory: "Horoscope",
    usages: "[tag]",
    cooldowns: 5
};

module.exports.run = async ({ api, event}) => {
   const { threadID, messageID, senderID } = event;
     async function getUserInfo(userID) {
            const userInfo = await api.getUserInfo(userID);
            return {gender: userInfo[userID].gender };
     }
    const gai = ["Em có thể đi theo anh được không? Bởi vì em luôn được cha mẹ bảo là phải theo giấc mơ của mình.",

        "Bầu trời xanh, làn mây trắng. Anh yêu nắng hay yêu em?.",

        "Nhờ có nắng mới thấy cầu vồng. Nhờ có anh mới thấy màu hạnh phúc.",

        "Anh yêu ơi ới ời. Anh đang ở đâu?.",

        "Soái ca là của ngôn tình. Còn anh thì chỉ của mình em thôi.",

        "Giữa cuộc đời hàng ngàn cám dỗ.Em chỉ cần bến đỗ anh thôi.",

        "Bồ công anh bay khi có gió. Em chỉ cười vì ở đó có anh.",

        "Chỉ cần anh nói yêu, em sẽ bám theo anh suốt đời. Cô gái đang muốn muốn bật đèn xanh đấy. Cô nàng muốn gợi ý là mình chung thủy lắm đấy. Anh cứ thử tỏ tình mà xem.",

        "Ba mươi chưa phải là Tết. Không làm bạn đâu phải là hết, còn có thể làm người yêu mà.",

        "Ai nào cho mượn avatar để em đỡ cô đơn đi.",

        "Nắng đã có mũ, mưa đã có ô, còn em sẽ có ai?.",

        "Chồng tương lai ơi, em chờ anh hơi lâu rồi đấy.",

        "Trời đổ mưa rồi sao anh chưa đổ em?.",

        "Dạo này anh có thấy mỏi chân? Sao cứ đi trong tim em mãi.",

        "Anh ơi, có nóng không? Tim em đang cháy nè.",

        "Anh gì ơi ! Anh đánh rơi người yêu này.",

        "Sao anh cười mãi thế. Da em đen mất rồi.",

        "Ủa đêm rồi mà sao tim mình vẫn đầy nắng thế?.",

        "Tim anh còn chỗ không? Em muốn chuyển nhà mà chưa tìm thấy chỗ.",

        "Uống nhầm 1 ánh mắt cơn say theo cả đời!.",

        "Em thích anh còn nhiều hơn muối ở biển…",

        "Em đọc hết “Mười vạn câu hỏi vì sao” những vẫn không hiểu được vì sao em thích anh nhiều thế.",

        "Đường thì dài, chân em thì ngắn. Phải đi bao xa mới có thể tìm thấy anh.",

        "Em xinh tươi, nhưng em chưa thuộc về ai.",

        "Chán thả thính rồi, ai cưa để em đổ một lần coi.",

        "Có phải cuộc sống quá bon chen nên anh mãi vẫn chưa tìm đến em?.",

        "Nếu có thể hãy để em một lần được yêu anh, được không?.",

        "Tuổi tác với chị không quan trọng, vấn đề là em đã có bằng lái chưa?.",

        "Trăng lên đỉnh núi trăng tà. Anh yêu em thật hay là yêu chơi?.",

        "Nếu ngoài kia nhiều bão tố, thì về đây với em.",

        "Em không muốn ngủ muộn, chỉ là đang chờ ai đó chúc ngủ ngon thôi.",

        "Cây đa, giếng nước sân đinh. Khi nào em hết một mình đây anh?.",

        "Cả thế giới này ai cũng yêu nhau chỉ có riêng mình em hẩm hiu một góc.",

        "Cần ai đó quan tâm để thấy mình được yêu thương.",

        "Anh gì ơi,cho em mượn đèn pin được không? Trời tối quá, em không tìm thấy đường vào tim anh.",

        "Say rượu say bia làm gì? Anh say em đi này.",

        "Thách ai nói yêu em đấy.",

        "Em ăn BƠ muốn vỡ bụng rồi đây ạ. Làng Face ai HẢO TÂM làm ơn cứu em với. Chỉ cần cái status này 500 like, bụng em lại lành!.",

        "Lâu rồi chưa biết cảm giác được đi ăn đi xem phim như thế nào, bài vở nhiều quá. Hôm nay rảnh có ai mời không nhỉ?.",

        "Rảnh quá có ai muốn đi chơi với mình không …",

        "Này anh, anh xem hộ em xem trong mắt em có gì hộ cái. Thấy chưa, toàn là hình bóng anh đấy!.",

        "Anh biết nhiều về Thuốc Mê không? Còn em gói gọn lại đó là anh.",

        "Anh có thấy dạo này da em đen không? Vì mải nhìn nụ cười Toả Nắng của anh đấy.",

        "Xin lỗi anh gì ơi anh đi đứng kiểu gì thế ngã vào trái tim em rồi kìa!.",

        "Anh có biết cài Win không ạ? Cài hộ em cái hệ điều hành nào mà có giao diện chính là Anh được không!.",

        "Em nghĩ chúng mình có điểm chung đấy. Đó là anh yêu bản thân anh, còn em thì cũng yêu anh!.",

        "Anh gì ơi cho em mượn cái đèn pin được không. Trời tối quá em không biết đường nào để đi đến trái tim anh.",

        "Anh biết sửa Tivi không. Sao kênh nào cũng chiếu toàn những nhung nhớ về anh thế này!.",

        "Anh ơi anh có hiểu rõ đường đi lối lại ở đây không. Chỉ hộ em xem đi đường nào để thoát khỏi nỗi nhớ anh cái!.",

        "Này anh gì ơi, anh có Anh hay Em Trai gì không? Em không tin là trên đời này có tận 2 thiên thần đâu!",

        "Ai dám nói nơi hạnh phúc nhất là thiên đường. Người đó chắc hẳn không biết đến khoảnh khắc mỗi khi anh cười rồi!.",

        "Nếu không có gì là mãi mãi, anh có thể là “không có gì” của em được không?.",

        "Anh có thể cho em mượn một nụ hôn được không? Em hứa là sẽ trả lại đầy đủ."
    ];
    const trai = ["Em có muốn con mình sau này có ADN của anh không?.",

                  "সৎ লোক সবার বিপদে পড়লে আবার উঠে কিন্তু অসৎ লোক বিপদে পড়লে একবারে নিপাত যায় ।— হযরত সুলাইমান (আঃ)",

                  "সব দুঃখের মূল এই দুনিয়ার প্রতি অত্যাধিক আকর্ষণ ।— হযরত আলী (রাঃ)",

                  "বিদ্বানের কলমের কালি শহীদের রক্তের চেয়েও পবিত্র ।— আল হাদিস",

                  "ঝগড়া চরমে পৌঁছার আগেই ক্ষান্ত হও ।— হযরত সুলাইমান (আ:)",

                  "আল্লাহর ভয় মানুষকে সকল ভয় হতে মুক্তি দেয় ।— ইবনে সিনা",

                  "অসৎ লোক কাউকে সৎ মনে করে না, সকলকেই সে নিজের মত ভাবে ।— হযরত আলী (রাঃ)",

                  "পুণ্য অর্জন অপেক্ষা পাপ বর্জন করা শ্রেষ্ঠতর ।— হযরত আলী (রাঃ)",

                  "সে ব্যক্তি মুমিন নয়, যে নিজে তৃপ্তি সহকারে আহার করে অথচ তার প্রতিবেশী অনাহারে থাকে ।— হযরত মুহাম্মদ (সাঃ)",

                  "আমি আল্লাহকে সবচেয়ে বেশি ভয় পাই, তারপর সেই মানুষকে ভয় পাই যে আল্লাহকে মোটেই ভয় পায় না ।— শেখ সাদী (রঃ)",

                  "নিচু লোকের প্রধান হাতিয়ার হচ্ছে অশ্লীল বাক্য ।— হযরত আলী (রাঃ)",

                  "যে নিজের মর্যাদা বোঝে না অন্যেও তার মর্যাদা দেয় না ।— হযরত আলী (রাঃ)",

                  "পাঁচটি ঘটনার পূর্বে পাঁচটি জিনিসকে মূল্যবান মনে করবেঃ তোমার বৃদ্ধ বয়সের পূর্বে তোমার যৌবনকে, ব্যাধির পূর্বে স্বাস্থ্যকে , দরিদ্রতার পূর্বে স্বচ্ছতাকে , কর্মব্যস্ততার পূর্বে অবসরকে এবং মৃত্যুর পূর্বে জীবনকে ।— আল-হাদিস",

                  "অভ্যাসকে জয় করাই পরম বিজয় ।— হযরত আলী (রাঃ)",

                  "যা তুমি নিজে করো না বা করতে পারো না তা অন্যকে উপদেশ দিও না ।— হযরত আলী (রাঃ)",

                  "উহাই শ্রেষ্ঠ দান যাহা হৃদয় হইতে উৎসারিত হয় এবং রসনা হতে ক্ষরিত হয়ে ব্যথিত এর ব্যাথা দূর করে ।— আল হাদিস",

                  "সত্য লোকের নিকট অপ্রিয় হলেও তা প্রচার করো ।— আল হাদিস",

                  "আল্লাহ তা’আলার ভয়ে তুমি যা কিছু ছেড়ে দিবে, আল্লাহ তোমাকে তার চেয়ে উত্তম কিছু অবশ্যই দান করবেন ।— আল হাদিস",
                  
                  "নিজেই প্রতিশোধ নিও না, আল্লাহর জন্যঅপেক্ষা কর। তাহলে তিনি তোমাকে রক্ষা করবেন।— হযরত সুলাইমান (আঃ)",

                  "রাসূলুল্লাহ সাঃ বলেছেনঃ তোমরা (অযাচিত) পার্থিব সম্পদ প্রহন করো না। কেননা, এর দ্বারা তোমরা দুনিয়ার প্রতি আসক্ত হয়ে পড়বে।— তিরমিজি, হাদিস নং ২৩২৮",

                  "যে ব্যক্তি জুমু’আহর দিনে সূরা কাহাফ পাঠ করবে, তাঁর ঈমানের নূর এক জুম’আহ হতে আরেক জুমু’আহ পর্যন্ত বিচ্ছুরিত হতে থাকবে।— সহীহ আত-তারগীব হা/৭৩৬",

                  "দুনিয়াতে পরিচিত হওয়াই প্রকৃত খ্যাতি নয়। আসল খ্যাতি হলো আসমানে পরিচিতি পাওয়া।— বইঃ নবীজির সাথে",

                  "রাসূলুল্লাহ সা; বলেছেনঃ যে ব্যক্তি জ্ঞাতসারে তাঁর প্রতিবেশীকে ক্ষুধার্ত রেখে তৃপ্তিভরে খেয়ে রাত যাপন করে, সে আমার প্রতি ঈমান আনেনি।— তাবরানি-৭৫১",

                  "নিশ্চই আল্লাহ তা’আলা সকল ব্যথিত ও চিন্তিত অন্তরকে ভালোবাসেন।— শু’আবুল ঈমান-৮৬৬",

                  "যে রব (আল্লাহ্‌) গতকাল আপনার জন্য যথেষ্ট ছিলেন, তিনি আগামীকালও আপনার জন্য যথেষ্ট হবেন।— শাইখ আলী জাবের আল ফীকি হাফিযাহুল্লাহ",

                  "গুনাহের সাগর আমাকে নিমজ্জিত করে নিয়েছে। ধ্বংসের দ্বারপ্রান্তে ঠেলে দিয়েছে। তবুও আমি আল্লাহর রহমতের আশাবাদী।— বইঃ আল্লাহর প্রতি সুধারনা",

                  "বুদ্ধিমান ঐ ব্যক্তি, যে নিজের হিসাব গ্রহন করে এবং মৃত্যুর পরের জীবনের জন্য কাজ করে। আর অক্ষম (নির্বোধ) ঐ ব্যক্তি, যে প্রবৃত্তির অনুসরন করে আর আল্লাহ তা’আলার কাছে অযৌক্তিক আশা করে।— জামে তিরমিযী ২/৭২",

                  "অতৃপ্ত এই পৃথিবীতে আজ যত আয়োজন, অর্ধেক তাঁর মিথ্যে মায়া, বাকি অর্ধেক প্রয়োজন।— আবুল হাসানাত কাসিম",

                  "ইয়া রাব্বী, জান্নাতে যেতে পারি এমন কোন আমল আমার নেই। আবার জাহান্নামে এক মুহূর্ত কাটাতে পারবো এমন শক্তিও আমার নেই।— মোহাম্মদ জাভেদ কায়সার রাহিমাহুল্লাহ",

                  "যে ব্যক্তি ক্ষতিকারক সিগারেট খাওয়ার অভ্যাস ছেড়ে দেওয়ার খালেস নিয়ত করে, রমাদান তাঁর জন্য অনেক বড় একটা সুযোগ।— মুহাম্মদ ইবনে উসাইমিন, ১৯/১৮৩",

                  "যখন তোমারা আল্লাহর কাছে জান্নাত চাইবে তখন জান্নাতুল ফিরদাউস চাইবে।— মুসনাদে আহমাদে",

                  "আমার ভয় হয় খ্যাতির কারণে শেষ পর্যন্ত আল্লাহর কাছে আমাদের কোনো ভালো আমলই থাকবে না।— আইয়্যুব আস সাখতিয়ানি রাহিমাহুল্লাহ",

                  "আল্লাহ তা-আলার সাথে যখন সম্পর্ক বৃদ্ধি পায়, তখন পেরেশানি থাকে না। আল্লাহর সাথে সম্পর্ক সৃষ্টির বড় উপায় হলো খুব বেশি দোয়া করা।— মুফতি মুহাম্মদ শফী রহঃ",

                  "ছোট ছোট গুনাহকে কখনো হালকা মনে করো না, কেননা সামান্য স্ফুলিঙ্গ থেকেই বড় অগ্লিকান্ডের সূত্রপাত হয়।— ইবনুল কাইয়্যিম রহঃ",

                  "আপনার পরিবার কুরবানী দিতে না পারলে লজ্জাবোধ করবেন না। বরং নামাজ না পড়তে পারলে লজ্জাবোধ করুন। নামাজ সবার জন্য ফরজ কুরবানী নয়।",

                  "সবচেয়ে কষ্টকর বিষয় হচ্ছে যখন দেখবেন জান্নাত গোটা দুনিয়ার চেয়ে কয়েকগুণ বড় কিন্তু সেখানে আপনার জন্য কোন জায়গা নেই।",

                  "আমি যাকে তাঁর প্রাপ্য সম্মানের চেয়ে যতটুকু অতিরিক্ত সম্মান দিয়েছি, সে আমার ঠিক ততটুকু ক্ষতি করেছে।— ইমাম শাফিয়ি রাহিঃ",

                  "সবচেয়ে উপকারী একটি ঔষধ হলো (দোয়া করতে থাকা) লেগে থাকা।— আল জাওয়াবুল কাফী, ১১",

                  "যদি আপনি রোগাক্রান্ত হন, তবে এই রোগ সেই সত্তার কাছ থেকেই এসেছে, যিনি আপনাকে ভালোবাসেন।— বইঃ বিপদ যখন নিয়ামত ২",

                  "রাসূল সাঃ বলেছেন- মদিনা থেকে ইসলাম ছড়িয়ে পড়েছে, ইসলাম আবার মদিনায় ফিরে আসবে ঠিক যেমন সাপ তাঁর গর্তে ফিরে যায়।— সহি বুখারী হাদীস নং ১৮৭৬",

                  "অসহায়াত্ব রবের কাছে প্রকাশ করলে মর্যাদা বৃদ্ধি পায় আর মানুষের কাছে প্রকাশ করলে মর্যাদা হ্রাস পায়।— শাবিব তাশফি",

                  "”তোমরা একে অন্যের প্রতি হিংসা করোনা , ঘৃণা বিদ্বেষ করোনা এবং একে অপরের থেকে মুখ ফিরিয়ে নিয়োনা–  মুসলিম",

                  " “তোমাদের মধ্যে সে-ই উত্তম, যে তার পরিবার পরিজনের কাছে উত্তম। ”– ইবনে মাজাহ",

                  "“আল্লাহ ততোক্ষণ বান্দাহর সাহায্য করেন, যতোক্ষণ সে তার ভাইকে সহযোগীতা করে।”– সহীহ মুসলিম",

                  "“যে পবিত্র থাকতে চায় , তাকে আল্লাহ পবিত্র রাখেন।– সহীহ বুখারী",

                  "“আল্লাহর পথে একটি সকাল কিংবা একটি সন্ধ্যা ব্যয় করা গোটা পৃথিবী এবং পৃথিবীর সমস্ত সম্পদের চেয়ে উত্তম। ” – বুখারী",

                  "“অত্যাচারী শাসকের সামনে সত্য কথা বলা সবচেয়ে বড় জিহাদ। ”– তিরমিযী",

                  "“যে জ্ঞান অর্জনের খোঁজে বের হয় , সে আল্লাহর পথে বের হয়।– তিরমিযী",

                  "“কুরআনকে আঁকড়ে ধরলে কখনো বিপথগামী হবেনা।– মিশকাত",

                  "“প্রতিটি মানুষ তার কাজের সেই ফলই পাবে,যা সে নিয়্যত করেছে।”– বুখারী",

                  "“তোমাদের মধ্যে সর্বোত্তম মানুষ তারাই,যাদের আচার আচরণ সবচেয়ে ভালো”– বুখারী",

                  "“অর্ধেকটা খেজুর দান করেও তোমরা নিজেদের জাহান্নাম থেকে বাঁচাতে পারো। যদি তা-ও না থাকে, তবে সুন্দর করে কথা বলো”– বুখারী",

                  "“এক ব্যক্তি রাসুল (স:) কে এসে বলল, আমাকে এমন কিছু শেখান যাতে আমি সুন্দর ভাবে জীবন কাটাতে পারি। কিন্তু এমন কঠিন কিছু নয়, যা আমি ভুলে যেতে পারি। রাসুল (স:) বল্লেন: রাগ করো না”– আল হাদিস",
                  
                  "“একজন মুসলিম যদি গাছ লাগায়, অথবা জমি চাষ করে – যেখান থেকে পশু ও পাখিরা খেতে পারে – তাহলে সে একটি সদকা করল”– মুসলিম",

                  "“সব ধরনের দাগ দূর করার জন্য কিছু না কিছু আছে; মনের দাগ দূর করার জন্য আছে আল্লাহ্‌র স্মরণ”– বুখারী",

                  "“কোন কাজগুলো সর্বোত্তম? – মানুষের মনে খুশির সৃষ্টি করা, ক্ষুধার্তকে খাবার দেয়া, পঙ্গু ও অসুস্থদের সাহায্য করা, দু:খীদের দু:খকে হাল্কা করা, এবং আহতের যন্ত্রণাকে লাঘব করা”– বুখারী",

                  "“তুমি যদি পূর্ণভাবে আল্লাহর ওপর ভরসা করো, যেমনটা করা উচিৎ, তাহলে তিনি অবশ্যই তোমার সব প্রয়োজন পূরণ করবেন, যেমনটা তিনি পাখিদের জন্য করেন। তারা ক্ষুধার্ত হয়ে বাসা থেকে বের হয়, কিন্তু ভরা পেট নিয়ে নীড়ে ফেরে”– তিরমিযী",

                  "“আল্লাহ তাঁর সৃষ্টিকূলকে সৃষ্টি করার পর তাঁর আরশের ওপর লিখেছিলেন: নিশ্চই আমার দয়া আমার ক্রোধকে প্রশমিত করবে”– বুখারী ও মুসলিম",

                  "“যারা তাঁর সৃষ্টির ওপর দয়া করবে না, আল্লাহ্‌ও তাদের ওপর দয়া করবেন না”– আবু দাউদ ও তিরমিযী",

                  "“তুমি তোমার হৃদয়কে সকাল থেকে রাত, ও রাত থেকে সকাল পর্যন্ত অন্যের ওপর হিংসা করা থেকে বিরত রাখো।  – হে আমার উম্মত, এটি আমার আইনগুলোর একটি, এবং যে আমার আইনকে ভালোবাসে- সে আমাকেও অত্যন্ত ভালোবাসে”– বুখারী",

                  "“সব সময়ে সত্য বল – এমনকি যদিও তা অন্যদের কাছে কঠিন ও অপছন্দনীয় হয়”– বায়হাকী",

                  "“নিশ্চই নিজের সন্তানকে উত্তম ব্যবহার শেখানো, গরিবকে শস্য দান করার চেয়েও উত্তম”– মুসলিম",

                  "“যখন এমন কাউকে দেখবে যাকে তোমার চেয়ে বেশি সম্পদ ও সৌন্দর্য দেয়া হয়েছে, (তখন আফসোস করার বদলে) এমন মানুষের দিকে তাকাও যাকে কম দেয়া হয়েছে”–মুসলিম",

                  "“দয়ালুর প্রতি আল্লাহ্‌ও দয়াশীল হন। তাই, পৃথিবীর মানুষের প্রতি দয়াশীল হও, তাহলে যিনি আসমানে আছেন – তিনি তোমার প্রতি দয়া দেখাবেন”– আবু দাউদ, তিরমিযী",

                  "“অতিরিক্ত সম্পদের বোঝা কাঁধে নিয়ে সত্যিকার সুখের পথে হাঁটা মানুষের জন্য কঠিন”– মুসলিম",

                  "“একবার এক লোক রাস্তা দিয়ে হাঁটার সময়ে রাস্তার ওপর কষ্টদায়ক কাঁটা যুক্ত একটি ডাল পড়ে থাকতে দেখল।  লোকটি কষ্টদায়ক বস্তুটি রাস্তা থেকে সরিয়ে ফেলল।  আল্লাহ তাকে ধন্যবাদ দিলেন, এবং তার সব অপরাধ ক্ষমা করে দিলেন”– বুখারী",

                  "“সত্যিকার জ্ঞানী কারা? – যারা তাদের জ্ঞানকে বাস্তবে কাজে লাগায়”– বুখারী",

                  "“আল্লাহ্‌ আমার কাছে এই কথা প্রকাশ করেছেন যে, তোমাদের অবশ্যই বিনয়ী হতে হবে।  কেউ কারও ওপর অহংকার করবে না, এবং কেউ কারও ওপর অত্যাচার করবে না”– মুসলিম",

                  "“কোন মানুষটি আল্লাহর কাছে সবচেয়ে প্রিয়? – যার মাধ্যমে আল্লাহ্‌র অন্য সৃষ্টিকূল উপকৃত হয়”– বুখারী",                  

 ];
var mention = Object.keys(event.mentions);
   const data = await getUserInfo(senderID);
  if (Object.keys(event.mentions).length == 1) {
    if (data.gender == 2 ) {
        api.sendMessage(`Gửi lời thả thính đến ${event.mentions[on].replace("@", "")}:\n${trai[Math.floor(Math.random() * trai.length)]}`,threadID, messageID);
    }
    if (data.gender == 1 ) {
        api.sendMessage(`Gửi lời thả thính đến ${event.mentions[mention].replace("@", "")}:\n${gai[Math.floor(Math.random() * gai.length)]}`, threadID, messageID);
    }
  }
  else {
    if (data.gender == 2) {
     api.sendMessage(`${trai[Math.floor(Math.random() * trai.length)]}`,threadID, messageID); 
    }
    if (data.gender == 1 ) {
     api.sendMessage(`${gai[Math.floor(Math.random() * gai.length)]}`, threadID, messageID);
    }
  }
  
     }