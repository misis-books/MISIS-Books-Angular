var Config = window.Config = window.Config || {};

Config.App = {
    id: 1,
    hash: '8da85b0d5bfe62527e5b244c209159c3',
    version: '0.0.1',
    domains: [
        'localhost:3000'
    ],
    current_domain: 0
};

Config.serverTimeOffset = 3;

Config.Modes = {
    test: location.search.indexOf('test=1') > 0,
    debug: location.search.indexOf('debug=1') > 0,
    http: location.search.indexOf('http=1') > 0,
    ssl: location.search.indexOf('ssl=1') > 0 || location.protocol == 'https:' && location.search.indexOf('ssl=0') == -1,
    nacl: location.search.indexOf('nacl=0')== -1,
    ios_standalone: window.navigator.standalone && navigator.userAgent.match(/iOS|iPhone|iPad/)
};

Config.Navigator = {
    osX:  (navigator.platform || '').toLowerCase().indexOf('mac') != -1 ||
    (navigator.userAgent || '').toLowerCase().indexOf('mac') != -1,
    retina: window.devicePixelRatio > 1,
    ffos: navigator.userAgent.search(/mobi.+Gecko/i) != -1,
    touch: screen.width <= 768,
    mobile: screen.width && screen.width < 480 || navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i) != -1
};

Config.I18n = {
    locale: 'ru-ru',
    supported: [
        "ru-ru"
    ],
    languages: {
        'ru-ru': 'Русский'
    },
    aliases: {
        'ru': 'ru-ru'
    },
    aliases_back: {
        'ru-ru': 'ru'
    },
    messages: {},
    fallback_messages: {}
};

Config.MaterialTheme = {
    primaryPalette: {
        theme: 'red',
        settings: {
            'default': '500',
            'hue-1': '400',
            'hue-2': '600',
            'hue-3': 'A400'
        }
    },
    accentPalette: {
        theme: 'blue',
        settings: {
            'default': '500'
        }
    }
};

// From https://github.com/stephenmathieson/node-tlds/blob/master/index.js
Config.TLD = ["abogado","ac","academy","accountants","active","actor","ad","adult","ae","aero","af","ag","agency","ai","airforce","al","allfinanz","alsace","am","amsterdam","an","android","ao","apartments","aq","aquarelle","ar","archi","army","arpa","as","asia","associates","at","attorney","au","auction","audio","autos","aw","ax","axa","az","ba","band","bank","bar","barclaycard","barclays","bargains","bayern","bb","bd","be","beer","berlin","best","bf","bg","bh","bi","bid","bike","bingo","bio","biz","bj","black","blackfriday","bloomberg","blue","bm","bmw","bn","bnpparibas","bo","boo","boutique","br","brussels","bs","bt","budapest","build","builders","business","buzz","bv","bw","by","bz","bzh","ca","cab","cal","camera","camp","cancerresearch","canon","capetown","capital","caravan","cards","care","career","careers","cartier","casa","cash","cat","catering","cc","cd","center","ceo","cern","cf","cg","ch","channel","chat","cheap","christmas","chrome","church","ci","citic","city","ck","cl","claims","cleaning","click","clinic","clothing","club","cm","cn","co","coach","codes","coffee","college","cologne","com","community","company","computer","condos","construction","consulting","contractors","cooking","cool","coop","country","cr","credit","creditcard","cricket","crs","cruises","cu","cuisinella","cv","cw","cx","cy","cymru","cz","dabur","dad","dance","dating","day","dclk","de","deals","degree","delivery","democrat","dental","dentist","desi","design","dev","diamonds","diet","digital","direct","directory","discount","dj","dk","dm","dnp","do","docs","domains","doosan","durban","dvag","dz","eat","ec","edu","education","ee","eg","email","emerck","energy","engineer","engineering","enterprises","equipment","er","es","esq","estate","et","eu","eurovision","eus","events","everbank","exchange","expert","exposed","fail","farm","fashion","feedback","fi","finance","financial","firmdale","fish","fishing","fit","fitness","fj","fk","flights","florist","flowers","flsmidth","fly","fm","fo","foo","forsale","foundation","fr","frl","frogans","fund","furniture","futbol","ga","gal","gallery","garden","gb","gbiz","gd","ge","gent","gf","gg","ggee","gh","gi","gift","gifts","gives","gl","glass","gle","global","globo","gm","gmail","gmo","gmx","gn","goog","google","gop","gov","gp","gq","gr","graphics","gratis","green","gripe","gs","gt","gu","guide","guitars","guru","gw","gy","hamburg","hangout","haus","healthcare","help","here","hermes","hiphop","hiv","hk","hm","hn","holdings","holiday","homes","horse","host","hosting","house","how","hr","ht","hu","ibm","id","ie","ifm","il","im","immo","immobilien","in","industries","info","ing","ink","institute","insure","int","international","investments","io","iq","ir","irish","is","it","iwc","jcb","je","jetzt","jm","jo","jobs","joburg","jp","juegos","kaufen","kddi","ke","kg","kh","ki","kim","kitchen","kiwi","km","kn","koeln","kp","kr","krd","kred","kw","ky","kyoto","kz","la","lacaixa","land","lat","latrobe","lawyer","lb","lc","lds","lease","legal","lgbt","li","lidl","life","lighting","limited","limo","link","lk","loans","london","lotte","lotto","lr","ls","lt","ltda","lu","luxe","luxury","lv","ly","ma","madrid","maison","management","mango","market","marketing","marriott","mc","md","me","media","meet","melbourne","meme","memorial","menu","mg","mh","miami","mil","mini","mk","ml","mm","mn","mo","mobi","moda","moe","monash","money","mormon","mortgage","moscow","motorcycles","mov","mp","mq","mr","ms","mt","mu","museum","mv","mw","mx","my","mz","na","nagoya","name","navy","nc","ne","net","network","neustar","new","nexus","nf","ng","ngo","nhk","ni","nico","ninja","nl","no","np","nr","nra","nrw","ntt","nu","nyc","nz","okinawa","om","one","ong","onl","ooo","org","organic","osaka","otsuka","ovh","pa","paris","partners","parts","party","pe","pf","pg","ph","pharmacy","photo","photography","photos","physio","pics","pictures","pink","pizza","pk","pl","place","plumbing","pm","pn","pohl","poker","porn","post","pr","praxi","press","pro","prod","productions","prof","properties","property","ps","pt","pub","pw","py","qa","qpon","quebec","re","realtor","recipes","red","rehab","reise","reisen","reit","ren","rentals","repair","report","republican","rest","restaurant","reviews","rich","rio","rip","ro","rocks","rodeo","rs","rsvp","ru","ruhr","rw","ryukyu","sa","saarland","sale","samsung","sarl","saxo","sb","sc","sca","scb","schmidt","schule","schwarz","science","scot","sd","se","services","sew","sexy","sg","sh","shiksha","shoes","shriram","si","singles","sj","sk","sky","sl","sm","sn","so","social","software","sohu","solar","solutions","soy","space","spiegel","sr","st","style","su","supplies","supply","support","surf","surgery","suzuki","sv","sx","sy","sydney","systems","sz","taipei","tatar","tattoo","tax","tc","td","technology","tel","temasek","tennis","tf","tg","th","tienda","tips","tires","tirol","tj","tk","tl","tm","tn","to","today","tokyo","tools","top","toshiba","town","toys","tp","tr","trade","training","travel","trust","tt","tui","tv","tw","tz","ua","ug","uk","university","uno","uol","us","uy","uz","va","vacations","vc","ve","vegas","ventures","versicherung","vet","vg","vi","viajes","video","villas","vision","vlaanderen","vn","vodka","vote","voting","voto","voyage","vu","wales","wang","watch","webcam","website","wed","wedding","wf","whoswho","wien","wiki","williamhill","wme","work","works","world","ws","wtc","wtf","佛山","集团","在线","한국","ভারত","八卦","موقع","公益","公司","移动","我爱你","москва","қаз","онлайн","сайт","срб","淡马锡","орг","삼성","சிங்கப்பூர்","商标","商店","商城","дети","мкд","中文网","中信","中国","中國","谷歌","భారత్","ලංකා","ભારત","भारत","网店","संगठन","网络","укр","香港","台湾","台灣","手机","мон","الجزائر","عمان","ایران","امارات","بازار","الاردن","بھارت","المغرب","السعودية","مليسيا","شبكة","გე","机构","组织机构","ไทย","سورية","рус","рф","تونس","みんな","グーグル","世界","ਭਾਰਤ","网址","游戏","vermögensberater","vermögensberatung","企业","مصر","قطر","广东","இலங்கை","இந்தியா","新加坡","فلسطين","政务","xxx","xyz","yachts","yandex","ye","yoga","yokohama","youtube","yt","za","zip","zm","zone","zuerich","zw"];

// From https://raw.githubusercontent.com/FGRibreau/latenize/master/latinize_map.js
Config.LatinizeMap = {'Á': 'A','Ă': 'A','Ắ': 'A','Ặ': 'A','Ằ': 'A','Ẳ': 'A','Ẵ': 'A','Ǎ': 'A','Â': 'A','Ấ': 'A','Ậ': 'A','Ầ': 'A','Ẩ': 'A','Ẫ': 'A','Ä': 'A','Ǟ': 'A','Ȧ': 'A','Ǡ': 'A','Ạ': 'A','Ȁ': 'A','À': 'A','Ả': 'A','Ȃ': 'A','Ā': 'A','Ą': 'A','Å': 'A','Ǻ': 'A','Ḁ': 'A','Ⱥ': 'A','Ã': 'A','Ꜳ': 'AA','Æ': 'AE','Ǽ': 'AE','Ǣ': 'AE','Ꜵ': 'AO','Ꜷ': 'AU','Ꜹ': 'AV','Ꜻ': 'AV','Ꜽ': 'AY','Ḃ': 'B','Ḅ': 'B','Ɓ': 'B','Ḇ': 'B','Ƀ': 'B','Ƃ': 'B','Ć': 'C','Č': 'C','Ç': 'C','Ḉ': 'C','Ĉ': 'C','Ċ': 'C','Ƈ': 'C','Ȼ': 'C','Ď': 'D','Ḑ': 'D','Ḓ': 'D','Ḋ': 'D','Ḍ': 'D','Ɗ': 'D','Ḏ': 'D','ǲ': 'D','ǅ': 'D','Đ': 'D','Ƌ': 'D','Ǳ': 'DZ','Ǆ': 'DZ','É': 'E','Ĕ': 'E','Ě': 'E','Ȩ': 'E','Ḝ': 'E','Ê': 'E','Ế': 'E','Ệ': 'E','Ề': 'E','Ể': 'E','Ễ': 'E','Ḙ': 'E','Ë': 'E','Ė': 'E','Ẹ': 'E','Ȅ': 'E','È': 'E','Ẻ': 'E','Ȇ': 'E','Ē': 'E','Ḗ': 'E','Ḕ': 'E','Ę': 'E','Ɇ': 'E','Ẽ': 'E','Ḛ': 'E','Ꝫ': 'ET','Ḟ': 'F','Ƒ': 'F','Ǵ': 'G','Ğ': 'G','Ǧ': 'G','Ģ': 'G','Ĝ': 'G','Ġ': 'G','Ɠ': 'G','Ḡ': 'G','Ǥ': 'G','Ḫ': 'H','Ȟ': 'H','Ḩ': 'H','Ĥ': 'H','Ⱨ': 'H','Ḧ': 'H','Ḣ': 'H','Ḥ': 'H','Ħ': 'H','Í': 'I','Ĭ': 'I','Ǐ': 'I','Î': 'I','Ï': 'I','Ḯ': 'I','İ': 'I','Ị': 'I','Ȉ': 'I','Ì': 'I','Ỉ': 'I','Ȋ': 'I','Ī': 'I','Į': 'I','Ɨ': 'I','Ĩ': 'I','Ḭ': 'I','Ꝺ': 'D','Ꝼ': 'F','Ᵹ': 'G','Ꞃ': 'R','Ꞅ': 'S','Ꞇ': 'T','Ꝭ': 'IS','Ĵ': 'J','Ɉ': 'J','Ḱ': 'K','Ǩ': 'K','Ķ': 'K','Ⱪ': 'K','Ꝃ': 'K','Ḳ': 'K','Ƙ': 'K','Ḵ': 'K','Ꝁ': 'K','Ꝅ': 'K','Ĺ': 'L','Ƚ': 'L','Ľ': 'L','Ļ': 'L','Ḽ': 'L','Ḷ': 'L','Ḹ': 'L','Ⱡ': 'L','Ꝉ': 'L','Ḻ': 'L','Ŀ': 'L','Ɫ': 'L','ǈ': 'L','Ł': 'L','Ǉ': 'LJ','Ḿ': 'M','Ṁ': 'M','Ṃ': 'M','Ɱ': 'M','Ń': 'N','Ň': 'N','Ņ': 'N','Ṋ': 'N','Ṅ': 'N','Ṇ': 'N','Ǹ': 'N','Ɲ': 'N','Ṉ': 'N','Ƞ': 'N','ǋ': 'N','Ñ': 'N','Ǌ': 'NJ','Ó': 'O','Ŏ': 'O','Ǒ': 'O','Ô': 'O','Ố': 'O','Ộ': 'O','Ồ': 'O','Ổ': 'O','Ỗ': 'O','Ö': 'O','Ȫ': 'O','Ȯ': 'O','Ȱ': 'O','Ọ': 'O','Ő': 'O','Ȍ': 'O','Ò': 'O','Ỏ': 'O','Ơ': 'O','Ớ': 'O','Ợ': 'O','Ờ': 'O','Ở': 'O','Ỡ': 'O','Ȏ': 'O','Ꝋ': 'O','Ꝍ': 'O','Ō': 'O','Ṓ': 'O','Ṑ': 'O','Ɵ': 'O','Ǫ': 'O','Ǭ': 'O','Ø': 'O','Ǿ': 'O','Õ': 'O','Ṍ': 'O','Ṏ': 'O','Ȭ': 'O','Ƣ': 'OI','Ꝏ': 'OO','Ɛ': 'E','Ɔ': 'O','Ȣ': 'OU','Ṕ': 'P','Ṗ': 'P','Ꝓ': 'P','Ƥ': 'P','Ꝕ': 'P','Ᵽ': 'P','Ꝑ': 'P','Ꝙ': 'Q','Ꝗ': 'Q','Ŕ': 'R','Ř': 'R','Ŗ': 'R','Ṙ': 'R','Ṛ': 'R','Ṝ': 'R','Ȑ': 'R','Ȓ': 'R','Ṟ': 'R','Ɍ': 'R','Ɽ': 'R','Ꜿ': 'C','Ǝ': 'E','Ś': 'S','Ṥ': 'S','Š': 'S','Ṧ': 'S','Ş': 'S','Ŝ': 'S','Ș': 'S','Ṡ': 'S','Ṣ': 'S','Ṩ': 'S','ẞ': 'SS','Ť': 'T','Ţ': 'T','Ṱ': 'T','Ț': 'T','Ⱦ': 'T','Ṫ': 'T','Ṭ': 'T','Ƭ': 'T','Ṯ': 'T','Ʈ': 'T','Ŧ': 'T','Ɐ': 'A','Ꞁ': 'L','Ɯ': 'M','Ʌ': 'V','Ꜩ': 'TZ','Ú': 'U','Ŭ': 'U','Ǔ': 'U','Û': 'U','Ṷ': 'U','Ü': 'U','Ǘ': 'U','Ǚ': 'U','Ǜ': 'U','Ǖ': 'U','Ṳ': 'U','Ụ': 'U','Ű': 'U','Ȕ': 'U','Ù': 'U','Ủ': 'U','Ư': 'U','Ứ': 'U','Ự': 'U','Ừ': 'U','Ử': 'U','Ữ': 'U','Ȗ': 'U','Ū': 'U','Ṻ': 'U','Ų': 'U','Ů': 'U','Ũ': 'U','Ṹ': 'U','Ṵ': 'U','Ꝟ': 'V','Ṿ': 'V','Ʋ': 'V','Ṽ': 'V','Ꝡ': 'VY','Ẃ': 'W','Ŵ': 'W','Ẅ': 'W','Ẇ': 'W','Ẉ': 'W','Ẁ': 'W','Ⱳ': 'W','Ẍ': 'X','Ẋ': 'X','Ý': 'Y','Ŷ': 'Y','Ÿ': 'Y','Ẏ': 'Y','Ỵ': 'Y','Ỳ': 'Y','Ƴ': 'Y','Ỷ': 'Y','Ỿ': 'Y','Ȳ': 'Y','Ɏ': 'Y','Ỹ': 'Y','Ź': 'Z','Ž': 'Z','Ẑ': 'Z','Ⱬ': 'Z','Ż': 'Z','Ẓ': 'Z','Ȥ': 'Z','Ẕ': 'Z','Ƶ': 'Z','Ĳ': 'IJ','Œ': 'OE','ᴀ': 'A','ᴁ': 'AE','ʙ': 'B','ᴃ': 'B','ᴄ': 'C','ᴅ': 'D','ᴇ': 'E','ꜰ': 'F','ɢ': 'G','ʛ': 'G','ʜ': 'H','ɪ': 'I','ʁ': 'R','ᴊ': 'J','ᴋ': 'K','ʟ': 'L','ᴌ': 'L','ᴍ': 'M','ɴ': 'N','ᴏ': 'O','ɶ': 'OE','ᴐ': 'O','ᴕ': 'OU','ᴘ': 'P','ʀ': 'R','ᴎ': 'N','ᴙ': 'R','ꜱ': 'S','ᴛ': 'T','ⱻ': 'E','ᴚ': 'R','ᴜ': 'U','ᴠ': 'V','ᴡ': 'W','ʏ': 'Y','ᴢ': 'Z','á': 'a','ă': 'a','ắ': 'a','ặ': 'a','ằ': 'a','ẳ': 'a','ẵ': 'a','ǎ': 'a','â': 'a','ấ': 'a','ậ': 'a','ầ': 'a','ẩ': 'a','ẫ': 'a','ä': 'a','ǟ': 'a','ȧ': 'a','ǡ': 'a','ạ': 'a','ȁ': 'a','à': 'a','ả': 'a','ȃ': 'a','ā': 'a','ą': 'a','ᶏ': 'a','ẚ': 'a','å': 'a','ǻ': 'a','ḁ': 'a','ⱥ': 'a','ã': 'a','ꜳ': 'aa','æ': 'ae','ǽ': 'ae','ǣ': 'ae','ꜵ': 'ao','ꜷ': 'au','ꜹ': 'av','ꜻ': 'av','ꜽ': 'ay','ḃ': 'b','ḅ': 'b','ɓ': 'b','ḇ': 'b','ᵬ': 'b','ᶀ': 'b','ƀ': 'b','ƃ': 'b','ɵ': 'o','ć': 'c','č': 'c','ç': 'c','ḉ': 'c','ĉ': 'c','ɕ': 'c','ċ': 'c','ƈ': 'c','ȼ': 'c','ď': 'd','ḑ': 'd','ḓ': 'd','ȡ': 'd','ḋ': 'd','ḍ': 'd','ɗ': 'd','ᶑ': 'd','ḏ': 'd','ᵭ': 'd','ᶁ': 'd','đ': 'd','ɖ': 'd','ƌ': 'd','ı': 'i','ȷ': 'j','ɟ': 'j','ʄ': 'j','ǳ': 'dz','ǆ': 'dz','é': 'e','ĕ': 'e','ě': 'e','ȩ': 'e','ḝ': 'e','ê': 'e','ế': 'e','ệ': 'e','ề': 'e','ể': 'e','ễ': 'e','ḙ': 'e','ë': 'e','ė': 'e','ẹ': 'e','ȅ': 'e','è': 'e','ẻ': 'e','ȇ': 'e','ē': 'e','ḗ': 'e','ḕ': 'e','ⱸ': 'e','ę': 'e','ᶒ': 'e','ɇ': 'e','ẽ': 'e','ḛ': 'e','ꝫ': 'et','ḟ': 'f','ƒ': 'f','ᵮ': 'f','ᶂ': 'f','ǵ': 'g','ğ': 'g','ǧ': 'g','ģ': 'g','ĝ': 'g','ġ': 'g','ɠ': 'g','ḡ': 'g','ᶃ': 'g','ǥ': 'g','ḫ': 'h','ȟ': 'h','ḩ': 'h','ĥ': 'h','ⱨ': 'h','ḧ': 'h','ḣ': 'h','ḥ': 'h','ɦ': 'h','ẖ': 'h','ħ': 'h','ƕ': 'hv','í': 'i','ĭ': 'i','ǐ': 'i','î': 'i','ï': 'i','ḯ': 'i','ị': 'i','ȉ': 'i','ì': 'i','ỉ': 'i','ȋ': 'i','ī': 'i','į': 'i','ᶖ': 'i','ɨ': 'i','ĩ': 'i','ḭ': 'i','ꝺ': 'd','ꝼ': 'f','ᵹ': 'g','ꞃ': 'r','ꞅ': 's','ꞇ': 't','ꝭ': 'is','ǰ': 'j','ĵ': 'j','ʝ': 'j','ɉ': 'j','ḱ': 'k','ǩ': 'k','ķ': 'k','ⱪ': 'k','ꝃ': 'k','ḳ': 'k','ƙ': 'k','ḵ': 'k','ᶄ': 'k','ꝁ': 'k','ꝅ': 'k','ĺ': 'l','ƚ': 'l','ɬ': 'l','ľ': 'l','ļ': 'l','ḽ': 'l','ȴ': 'l','ḷ': 'l','ḹ': 'l','ⱡ': 'l','ꝉ': 'l','ḻ': 'l','ŀ': 'l','ɫ': 'l','ᶅ': 'l','ɭ': 'l','ł': 'l','ǉ': 'lj','ſ': 's','ẜ': 's','ẛ': 's','ẝ': 's','ḿ': 'm','ṁ': 'm','ṃ': 'm','ɱ': 'm','ᵯ': 'm','ᶆ': 'm','ń': 'n','ň': 'n','ņ': 'n','ṋ': 'n','ȵ': 'n','ṅ': 'n','ṇ': 'n','ǹ': 'n','ɲ': 'n','ṉ': 'n','ƞ': 'n','ᵰ': 'n','ᶇ': 'n','ɳ': 'n','ñ': 'n','ǌ': 'nj','ó': 'o','ŏ': 'o','ǒ': 'o','ô': 'o','ố': 'o','ộ': 'o','ồ': 'o','ổ': 'o','ỗ': 'o','ö': 'o','ȫ': 'o','ȯ': 'o','ȱ': 'o','ọ': 'o','ő': 'o','ȍ': 'o','ò': 'o','ỏ': 'o','ơ': 'o','ớ': 'o','ợ': 'o','ờ': 'o','ở': 'o','ỡ': 'o','ȏ': 'o','ꝋ': 'o','ꝍ': 'o','ⱺ': 'o','ō': 'o','ṓ': 'o','ṑ': 'o','ǫ': 'o','ǭ': 'o','ø': 'o','ǿ': 'o','õ': 'o','ṍ': 'o','ṏ': 'o','ȭ': 'o','ƣ': 'oi','ꝏ': 'oo','ɛ': 'e','ᶓ': 'e','ɔ': 'o','ᶗ': 'o','ȣ': 'ou','ṕ': 'p','ṗ': 'p','ꝓ': 'p','ƥ': 'p','ᵱ': 'p','ᶈ': 'p','ꝕ': 'p','ᵽ': 'p','ꝑ': 'p','ꝙ': 'q','ʠ': 'q','ɋ': 'q','ꝗ': 'q','ŕ': 'r','ř': 'r','ŗ': 'r','ṙ': 'r','ṛ': 'r','ṝ': 'r','ȑ': 'r','ɾ': 'r','ᵳ': 'r','ȓ': 'r','ṟ': 'r','ɼ': 'r','ᵲ': 'r','ᶉ': 'r','ɍ': 'r','ɽ': 'r','ↄ': 'c','ꜿ': 'c','ɘ': 'e','ɿ': 'r','ś': 's','ṥ': 's','š': 's','ṧ': 's','ş': 's','ŝ': 's','ș': 's','ṡ': 's','ṣ': 's','ṩ': 's','ʂ': 's','ᵴ': 's','ᶊ': 's','ȿ': 's','ɡ': 'g','ß': 'ss','ᴑ': 'o','ᴓ': 'o','ᴝ': 'u','ť': 't','ţ': 't','ṱ': 't','ț': 't','ȶ': 't','ẗ': 't','ⱦ': 't','ṫ': 't','ṭ': 't','ƭ': 't','ṯ': 't','ᵵ': 't','ƫ': 't','ʈ': 't','ŧ': 't','ᵺ': 'th','ɐ': 'a','ᴂ': 'ae','ǝ': 'e','ᵷ': 'g','ɥ': 'h','ʮ': 'h','ʯ': 'h','ᴉ': 'i','ʞ': 'k','ꞁ': 'l','ɯ': 'm','ɰ': 'm','ᴔ': 'oe','ɹ': 'r','ɻ': 'r','ɺ': 'r','ⱹ': 'r','ʇ': 't','ʌ': 'v','ʍ': 'w','ʎ': 'y','ꜩ': 'tz','ú': 'u','ŭ': 'u','ǔ': 'u','û': 'u','ṷ': 'u','ü': 'u','ǘ': 'u','ǚ': 'u','ǜ': 'u','ǖ': 'u','ṳ': 'u','ụ': 'u','ű': 'u','ȕ': 'u','ù': 'u','ủ': 'u','ư': 'u','ứ': 'u','ự': 'u','ừ': 'u','ử': 'u','ữ': 'u','ȗ': 'u','ū': 'u','ṻ': 'u','ų': 'u','ᶙ': 'u','ů': 'u','ũ': 'u','ṹ': 'u','ṵ': 'u','ᵫ': 'ue','ꝸ': 'um','ⱴ': 'v','ꝟ': 'v','ṿ': 'v','ʋ': 'v','ᶌ': 'v','ⱱ': 'v','ṽ': 'v','ꝡ': 'vy','ẃ': 'w','ŵ': 'w','ẅ': 'w','ẇ': 'w','ẉ': 'w','ẁ': 'w','ⱳ': 'w','ẘ': 'w','ẍ': 'x','ẋ': 'x','ᶍ': 'x','ý': 'y','ŷ': 'y','ÿ': 'y','ẏ': 'y','ỵ': 'y','ỳ': 'y','ƴ': 'y','ỷ': 'y','ỿ': 'y','ȳ': 'y','ẙ': 'y','ɏ': 'y','ỹ': 'y','ź': 'z','ž': 'z','ẑ': 'z','ʑ': 'z','ⱬ': 'z','ż': 'z','ẓ': 'z','ȥ': 'z','ẕ': 'z','ᵶ': 'z','ᶎ': 'z','ʐ': 'z','ƶ': 'z','ɀ': 'z','ﬀ': 'ff','ﬃ': 'ffi','ﬄ': 'ffl','ﬁ': 'fi','ﬂ': 'fl','ĳ': 'ij','œ': 'oe','ﬆ': 'st','ₐ': 'a','ₑ': 'e','ᵢ': 'i','ⱼ': 'j','ₒ': 'o','ᵣ': 'r','ᵤ': 'u','ᵥ': 'v','ₓ': 'x','Ё': 'YO', 'Й': 'I', 'Ц': 'TS', 'У': 'U', 'К': 'K', 'Е': 'E', 'Н': 'N', 'Г': 'G', 'Ш': 'SH', 'Щ': 'SCH', 'З': 'Z', 'Х': 'H', 'Ъ': '', 'ё': 'yo', 'й': 'i', 'ц': 'ts', 'у': 'u', 'к': 'k', 'е': 'e', 'н': 'n', 'г': 'g', 'ш': 'sh', 'щ': 'sch', 'з': 'z', 'х': 'h', 'ъ': '', 'Ф': 'F', 'Ы': 'I', 'В': 'V', 'А': 'A', 'П': 'P', 'Р': 'R', 'О': 'O', 'Л': 'L', 'Д': 'D', 'Ж': 'ZH', 'Э': 'E', 'ф': 'f', 'ы': 'i', 'в': 'v', 'а': 'a', 'п': 'p', 'р': 'r', 'о': 'o', 'л': 'l', 'д': 'd', 'ж': 'zh', 'э': 'e', 'Я': 'Ya', 'Ч': 'CH', 'С': 'S', 'М': 'M', 'И': 'I', 'Т': 'T', 'Ь': '', 'Б': 'B', 'Ю': 'YU', 'я': 'ya', 'ч': 'ch', 'с': 's', 'м': 'm', 'и': 'i', 'т': 't', 'ь': '', 'б': 'b', 'ю': 'yu'};

Config.CountryCodes = [["AB","country_select_modal_country_ab","+7 840","+7 940","+995 44"],["AF","country_select_modal_country_af","+93"],["AX","country_select_modal_country_ax","+358 18"],["AL","country_select_modal_country_al","+355"],["DZ","country_select_modal_country_dz","+213"],["AS","country_select_modal_country_as","+1 684"],["AD","country_select_modal_country_ad","+376"],["AO","country_select_modal_country_ao","+244"],["AI","country_select_modal_country_ai","+1 264"],["AG","country_select_modal_country_ag","+1 268"],["AR","country_select_modal_country_ar","+54"],["AM","country_select_modal_country_am","+374"],["AW","country_select_modal_country_aw","+297"],["SH","country_select_modal_country_sh_ac","+247"],["AU","country_select_modal_country_au","+61"],["AU","country_select_modal_country_au_et","+672"],["AT","country_select_modal_country_at","+43"],["AZ","country_select_modal_country_az","+994"],["BS","country_select_modal_country_bs","+1 242"],["BH","country_select_modal_country_bh","+973"],["BD","country_select_modal_country_bd","+880"],["BB","country_select_modal_country_bb","+1 246"],["AG","country_select_modal_country_ag_bar","+1 268"],["BY","country_select_modal_country_by","+375"],["BE","country_select_modal_country_be","+32"],["BZ","country_select_modal_country_bz","+501"],["BJ","country_select_modal_country_bj","+229"],["BM","country_select_modal_country_bm","+1 441"],["BT","country_select_modal_country_bt","+975"],["BO","country_select_modal_country_bo","+591"],["BQ","country_select_modal_country_bq","+599 7"],["BA","country_select_modal_country_ba","+387"],["BW","country_select_modal_country_bw","+267"],["BR","country_select_modal_country_br","+55"],["IO","country_select_modal_country_io","+246"],["VG","country_select_modal_country_vg","+1 284"],["BN","country_select_modal_country_bn","+673"],["BG","country_select_modal_country_bg","+359"],["BF","country_select_modal_country_bf","+226"],["MY","country_select_modal_country_mm","+95"],["BI","country_select_modal_country_bi","+257"],["KH","country_select_modal_country_kh","+855"],["CM","country_select_modal_country_cm","+237"],["CA","country_select_modal_country_ca","+1"],["CV","country_select_modal_country_cv","+238"],["KY","country_select_modal_country_ky","+1 345"],["CF","country_select_modal_country_cf","+236"],["TD","country_select_modal_country_td","+235"],["CL","country_select_modal_country_cl","+56"],["CN","country_select_modal_country_cn","+86"],["CX","country_select_modal_country_cx","+61"],["CC","country_select_modal_country_cc","+61"],["CO","country_select_modal_country_co","+57"],["KM","country_select_modal_country_km","+269"],["CG","country_select_modal_country_cg","+242"],["CD","country_select_modal_country_cd","+243"],["CK","country_select_modal_country_ck","+682"],["CR","country_select_modal_country_cr","+506"],["CI","country_select_modal_country_ci","+225"],["HR","country_select_modal_country_hr","+385"],["CU","country_select_modal_country_cu","+53"],["CW","country_select_modal_country_cw","+599 9"],["CY","country_select_modal_country_cy","+357"],["CZ","country_select_modal_country_cz","+420"],["DK","country_select_modal_country_dk","+45"],["DG","country_select_modal_country_dg","+246"],["DJ","country_select_modal_country_dj","+253"],["DM","country_select_modal_country_dm","+1 767"],["DO","country_select_modal_country_do","+1 809","+1 829","+1 849"],["TL","country_select_modal_country_tl","+670"],["EC","country_select_modal_country_ec","+593"],["EG","country_select_modal_country_eg","+20"],["SV","country_select_modal_country_sv","+503"],["GQ","country_select_modal_country_gq","+240"],["ER","country_select_modal_country_er","+291"],["EE","country_select_modal_country_ee","+372"],["ET","country_select_modal_country_et","+251"],["FK","country_select_modal_country_fk","+500"],["FO","country_select_modal_country_fo","+298"],["FJ","country_select_modal_country_fj","+679"],["FI","country_select_modal_country_fi","+358"],["FR","country_select_modal_country_fr","+33"],["GF","country_select_modal_country_gf","+594"],["PF","country_select_modal_country_pf","+689"],["GA","country_select_modal_country_ga","+241"],["GM","country_select_modal_country_gm","+220"],["GE","country_select_modal_country_ge","+995"],["DE","country_select_modal_country_de","+49"],["GH","country_select_modal_country_gh","+233"],["GI","country_select_modal_country_gi","+350"],["GR","country_select_modal_country_gr","+30"],["GL","country_select_modal_country_gl","+299"],["GD","country_select_modal_country_gd","+1 473"],["GP","country_select_modal_country_gp","+590"],["GU","country_select_modal_country_gu","+1 671"],["GT","country_select_modal_country_gt","+502"],["GG","country_select_modal_country_gg","+44"],["GN","country_select_modal_country_gn","+224"],["GW","country_select_modal_country_gw","+245"],["GY","country_select_modal_country_gy","+592"],["HT","country_select_modal_country_ht","+509"],["HN","country_select_modal_country_hn","+504"],["HK","country_select_modal_country_hk","+852"],["HU","country_select_modal_country_hu","+36"],["IS","country_select_modal_country_is","+354"],["IN","country_select_modal_country_in","+91"],["ID","country_select_modal_country_id","+62"],["IR","country_select_modal_country_ir","+98"],["IQ","country_select_modal_country_iq","+964"],["IE","country_select_modal_country_ie","+353"],["IL","country_select_modal_country_il","+972"],["IT","country_select_modal_country_it","+39"],["JM","country_select_modal_country_jm","+1 876"],["SJ","country_select_modal_country_sj","+47 79"],["JP","country_select_modal_country_jp","+81"],["JE","country_select_modal_country_je","+44"],["JO","country_select_modal_country_jo","+962"],["KZ","country_select_modal_country_kz","+7 6","+7 7"],["KE","country_select_modal_country_ke","+254"],["KI","country_select_modal_country_ki","+686"],["KP","country_select_modal_country_kp","+850"],["KR","country_select_modal_country_kr","+82"],["KW","country_select_modal_country_kw","+965"],["KG","country_select_modal_country_kg","+996"],["LA","country_select_modal_country_la","+856"],["LV","country_select_modal_country_lv","+371"],["LB","country_select_modal_country_lb","+961"],["LS","country_select_modal_country_ls","+266"],["LR","country_select_modal_country_lr","+231"],["LY","country_select_modal_country_ly","+218"],["LI","country_select_modal_country_li","+423"],["LT","country_select_modal_country_lt","+370"],["LU","country_select_modal_country_lu","+352"],["MO","country_select_modal_country_mo","+853"],["MK","country_select_modal_country_mk","+389"],["MG","country_select_modal_country_mg","+261"],["MW","country_select_modal_country_mw","+265"],["MY","country_select_modal_country_my","+60"],["MV","country_select_modal_country_mv","+960"],["ML","country_select_modal_country_ml","+223"],["MT","country_select_modal_country_mt","+356"],["MH","country_select_modal_country_mh","+692"],["MQ","country_select_modal_country_mq","+596"],["MR","country_select_modal_country_mr","+222"],["MU","country_select_modal_country_mu","+230"],["YT","country_select_modal_country_yt","+262"],["MX","country_select_modal_country_mx","+52"],["FM","country_select_modal_country_fm","+691"],["MD","country_select_modal_country_md","+373"],["MC","country_select_modal_country_mc","+377"],["MN","country_select_modal_country_mn","+976"],["ME","country_select_modal_country_me","+382"],["MS","country_select_modal_country_ms","+1 664"],["MA","country_select_modal_country_ma","+212"],["MZ","country_select_modal_country_mz","+258"],["NA","country_select_modal_country_na","+264"],["NR","country_select_modal_country_nr","+674"],["NP","country_select_modal_country_np","+977"],["NL","country_select_modal_country_nl","+31"],["NC","country_select_modal_country_nc","+687"],["NZ","country_select_modal_country_nz","+64"],["NI","country_select_modal_country_ni","+505"],["NE","country_select_modal_country_ne","+227"],["NG","country_select_modal_country_ng","+234"],["NU","country_select_modal_country_nu","+683"],["NF","country_select_modal_country_nf","+672"],["MP","country_select_modal_country_mp","+1 670"],["NO","country_select_modal_country_no","+47"],["OM","country_select_modal_country_om","+968"],["PK","country_select_modal_country_pk","+92"],["PW","country_select_modal_country_pw","+680"],["PS","country_select_modal_country_ps","+970"],["PA","country_select_modal_country_pa","+507"],["PG","country_select_modal_country_pg","+675"],["PY","country_select_modal_country_py","+595"],["PE","country_select_modal_country_pe","+51"],["PH","country_select_modal_country_ph","+63"],["PN","country_select_modal_country_pn","+64"],["PL","country_select_modal_country_pl","+48"],["PT","country_select_modal_country_pt","+351"],["PR","country_select_modal_country_pr","+1 787","+1 939"],["QA","country_select_modal_country_qa","+974"],["RE","country_select_modal_country_re","+262"],["RO","country_select_modal_country_ro","+40"],["RU","country_select_modal_country_ru","+7"],["RW","country_select_modal_country_rw","+250"],["BL","country_select_modal_country_bl","+590"],["SH","country_select_modal_country_sh","+290"],["KN","country_select_modal_country_kn","+1 869"],["LC","country_select_modal_country_lc","+1 758"],["MF","country_select_modal_country_mf","+590"],["PM","country_select_modal_country_pm","+508"],["VC","country_select_modal_country_vc","+1 784"],["WS","country_select_modal_country_ws","+685"],["SM","country_select_modal_country_sm","+378"],["ST","country_select_modal_country_st","+239"],["SA","country_select_modal_country_sa","+966"],["SN","country_select_modal_country_sn","+221"],["RS","country_select_modal_country_rs","+381"],["SC","country_select_modal_country_sc","+248"],["SL","country_select_modal_country_sl","+232"],["SG","country_select_modal_country_sg","+65"],["BQ","country_select_modal_country_nl_bq3","+599 3"],["SX","country_select_modal_country_sx","+1 721"],["SK","country_select_modal_country_sk","+421"],["SI","country_select_modal_country_si","+386"],["SB","country_select_modal_country_sb","+677"],["SO","country_select_modal_country_so","+252"],["ZA","country_select_modal_country_za","+27"],["GS","country_select_modal_country_gs","+500"],[false,"country_select_modal_country_ge_so","+995 34"],["SS","country_select_modal_country_ss","+211"],["ES","country_select_modal_country_es","+34"],["LK","country_select_modal_country_lk","+94"],["SD","country_select_modal_country_sd","+249"],["SR","country_select_modal_country_sr","+597"],["SJ","country_select_modal_country_sj_no","+47 79"],["SZ","country_select_modal_country_sz","+268"],["SE","country_select_modal_country_se","+46"],["CH","country_select_modal_country_ch","+41"],["SY","country_select_modal_country_sy","+963"],["TW","country_select_modal_country_tw","+886"],["TJ","country_select_modal_country_tj","+992"],["TZ","country_select_modal_country_tz","+255"],["TH","country_select_modal_country_th","+66"],["TG","country_select_modal_country_tg","+228"],["TK","country_select_modal_country_tk","+690"],["TO","country_select_modal_country_to","+676"],["TT","country_select_modal_country_tt","+1 868"],["TN","country_select_modal_country_tn","+216"],["TR","country_select_modal_country_tr","+90"],["TM","country_select_modal_country_tm","+993"],["TC","country_select_modal_country_tc","+1 649"],["TV","country_select_modal_country_tv","+688"],["UG","country_select_modal_country_ug","+256"],["UA","country_select_modal_country_ua","+380"],["AE","country_select_modal_country_ae","+971"],["UK","country_select_modal_country_uk","+44"],["US","country_select_modal_country_us","+1"],["UY","country_select_modal_country_uy","+598"],["VI","country_select_modal_country_vi","+1 340"],["UZ","country_select_modal_country_uz","+998"],["VU","country_select_modal_country_vu","+678"],["VE","country_select_modal_country_ve","+58"],["VA","country_select_modal_country_va","+39 06 698","+379"],["VN","country_select_modal_country_vn","+84"],["WF","country_select_modal_country_wf","+681"],["YE","country_select_modal_country_ye","+967"],["ZM","country_select_modal_country_zm","+260"],[false,"country_select_modal_country_tz_uk","+255"],["ZW","country_select_modal_country_zw","+263"]];

Config.LangCountries = {"es": "ES", "ru": "RU", "en": "US", "de": "DE", "it": "IT", "nl": "NL", "fr": "FR", "ca": "ES", "es-419": "MX", "ar": "SA", "he": "IL", "tr": "TR", "id": "ID", "pl": "PL"};

// ConfigStorage based on
/*!
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */
(function (window) {
    var keyPrefix = '';
    var noPrefix = false;
    var cache = {};
    var useCs = false;
    var useLs = !useCs && !!window.localStorage;

    function storageSetPrefix (newPrefix) {
        keyPrefix = newPrefix;
    }

    function storageSetNoPrefix() {
        noPrefix = true;
    }

    function storageGetPrefix () {
        if (noPrefix) {
            noPrefix = false;
            return '';
        }
        return keyPrefix;
    }

    function storageGetValue() {
        var keys = Array.prototype.slice.call(arguments),
            callback = keys.pop(),
            result = [],
            single = keys.length == 1,
            value,
            allFound = true,
            prefix = storageGetPrefix(),
            i, key;

        for (i = 0; i < keys.length; i++) {
            key = keys[i] = prefix + keys[i];
            if (useLs) {
                try {
                    value = localStorage.getItem(key);
                } catch (e) {
                    useLs = false;
                }
                try {
                    value = (value === undefined || value === null) ? false : JSON.parse(value);
                } catch (e) {
                    value = false;
                }
                result.push(cache[key] = value);
            }
            else if (!useCs) {
                result.push(cache[key] = false);
            }
            else {
                allFound = false;
            }
        }

        if (allFound) {
            return callback(single ? result[0] : result);
        }
    }

    function storageSetValue(obj, callback) {
        var keyValues = {},
            prefix = storageGetPrefix(),
            key, value;

        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                value = obj[key];
                key = prefix + key;
                cache[key] = value;
                value = JSON.stringify(value);
                if (useLs) {
                    try {
                        localStorage.setItem(key, value);
                    } catch (e) {
                        useLs = false;
                    }
                } else {
                    keyValues[key] = value;
                }
            }
        }

        if (useLs || !useCs) {
            if (callback) {
                callback();
            }
        }
    }

    function storageRemoveValue () {
        var keys = Array.prototype.slice.call(arguments),
            prefix = storageGetPrefix(),
            i, key, callback;

        if (typeof keys[keys.length - 1] === 'function') {
            callback = keys.pop();
        }

        for (i = 0; i < keys.length; i++) {
            key = keys[i] = prefix + keys[i];
            delete cache[key];
            if (useLs) {
                try {
                    localStorage.removeItem(key);
                } catch (e) {
                    useLs = false;
                }
            }
        }
        if (callback) {
            callback();
        }
    }

    window.ConfigStorage = {
        prefix: storageSetPrefix,
        noPrefix: storageSetNoPrefix,
        get: storageGetValue,
        set: storageSetValue,
        remove: storageRemoveValue
    }

})(window);

initApplication();