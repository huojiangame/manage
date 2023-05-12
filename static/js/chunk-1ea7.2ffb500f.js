(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1ea7"],{"/6Ce":function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Chinese (zh-tw)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Chinese (zh-tw)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("zh-tw",{MMMM:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],MMM:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dddd:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],ddd:["周日","周一","周二","周三","周四","周五","周六"],dd:["日","一","二","三","四","五","六"],A:["早上","上午","中午","下午","晚上"],formatter:{A:function(t){var e=100*t.getHours()+t.getMinutes();return e<900?this.A[0]:e<1130?this.A[1]:e<1230?this.A[2]:e<1800?this.A[3]:this.A[4]}},parser:{h:function(t,e){return e<3?t:t>11?t:t+12}}})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},"0zlr":function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Azerbaijani (az)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Azerbaijani (az)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("az",{MMMM:["yanvar","fevral","mart","aprel","may","iyun","iyul","avqust","sentyabr","oktyabr","noyabr","dekabr"],MMM:["yan","fev","mar","apr","may","iyn","iyl","avq","sen","okt","noy","dek"],dddd:["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"],ddd:["Baz","BzE","ÇAx","Çər","CAx","Cüm","Şən"],dd:["Bz","BE","ÇA","Çə","CA","Cü","Şə"],A:["gecə","səhər","gündüz","axşam"],formatter:{A:function(t){var e=t.getHours();return e<4?this.A[0]:e<12?this.A[1]:e<17?this.A[2]:this.A[3]}},parser:{h:function(t,e){return e<2?t:t>11?t:t+12}}})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},"15Mf":function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Korean (ko)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Korean (ko)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("ko",{MMMM:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],MMM:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],dddd:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],ddd:["일","월","화","수","목","금","토"],dd:["일","월","화","수","목","금","토"],A:["오전","오후"]})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},"2Yl3":function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Greek (el)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Greek (el)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("el",{MMMM:{nominative:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],genitive:["Ιανουαρίου","Φεβρουαρίου","Μαρτίου","Απριλίου","Μαΐου","Ιουνίου","Ιουλίου","Αυγούστου","Σεπτεμβρίου","Οκτωβρίου","Νοεμβρίου","Δεκεμβρίου"]},MMM:["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],dddd:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],ddd:["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"],dd:["Κυ","Δε","Τρ","Τε","Πε","Πα","Σα"],A:["πμ","μμ"],formatter:{MMMM:function(t,e){return this.MMMM[/D.*MMMM/.test(e)?"genitive":"nominative"][t.getMonth()]},hh:function(t){return("0"+t.getHours()%12).slice(-2)},h:function(t){return t.getHours()%12}},parser:{MMMM:function(t,e){return this.parser.find(this.MMMM[/D.*MMMM/.test(e)?"genitive":"nominative"],t)}}})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},"307M":function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Czech (cs)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Czech (cs)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("cs",{MMMM:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"],MMM:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],dddd:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],ddd:["ne","po","út","st","čt","pá","so"],dd:["ne","po","út","st","čt","pá","so"]})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},"8Dvn":function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Serbian (sr)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Serbian (sr)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("sr",{MMMM:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"],MMM:["jan.","feb.","mar.","apr.","maj","jun","jul","avg.","sep.","okt.","nov.","dec."],dddd:["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"],ddd:["ned.","pon.","uto.","sre.","čet.","pet.","sub."],dd:["ne","po","ut","sr","če","pe","su"]})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},B5Zb:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Persian (fa)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Persian (fa)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){var e=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"],r={"۰":0,"۱":1,"۲":2,"۳":3,"۴":4,"۵":5,"۶":6,"۷":7,"۸":8,"۹":9};t.setLocales("fa",{MMMM:["ژانویه","فوریه","مارس","آوریل","مه","ژوئن","ژوئیه","اوت","سپتامبر","اکتبر","نوامبر","دسامبر"],MMM:["ژانویه","فوریه","مارس","آوریل","مه","ژوئن","ژوئیه","اوت","سپتامبر","اکتبر","نوامبر","دسامبر"],dddd:["یک‌شنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه","شنبه"],ddd:["یک‌شنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه","شنبه"],dd:["ی","د","س","چ","پ","ج","ش"],A:["قبل از ظهر","بعد از ظهر"],formatter:{post:function(t){return t.replace(/\d/g,function(t){return e[0|t]})}},parser:{pre:function(t){return t.replace(/[۰۱۲۳۴۵۶۷۸۹]/g,function(t){return""+r[t]})}}})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},EXdN:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve German (de)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve German (de)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("de",{MMMM:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],MMM:["Jan.","Febr.","Mrz.","Apr.","Mai","Jun.","Jul.","Aug.","Sept.","Okt.","Nov.","Dez."],dddd:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],ddd:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],dd:["So","Mo","Di","Mi","Do","Fr","Sa"],A:["Uhr nachmittags","Uhr morgens"]})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},Fo3v:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Chinese (zh-cn)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Chinese (zh-cn)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("zh-cn",{MMMM:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],MMM:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dddd:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],ddd:["周日","周一","周二","周三","周四","周五","周六"],dd:["日","一","二","三","四","五","六"],A:["凌晨","早上","上午","中午","下午","晚上"],formatter:{A:function(t){var e=100*t.getHours()+t.getMinutes();return e<600?this.A[0]:e<900?this.A[1]:e<1130?this.A[2]:e<1230?this.A[3]:e<1800?this.A[4]:this.A[5]}},parser:{h:function(t,e){return e<4?t:t>11?t:t+12}}})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},Hp5p:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Italian (it)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Italian (it)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("it",{MMMM:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],MMM:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],dddd:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],ddd:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],dd:["Do","Lu","Ma","Me","Gi","Ve","Sa"],A:["di mattina","di pomerrigio"]})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},"I/UY":function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Indonesian (id)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Indonesian (id)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("id",{MMMM:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],MMM:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Ags","Sep","Okt","Nov","Des"],dddd:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],ddd:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],dd:["Mg","Sn","Sl","Rb","Km","Jm","Sb"],A:["pagi","siang","sore","malam"],formatter:{A:function(t){var e=t.getHours();return e<11?this.A[0]:e<15?this.A[1]:e<19?this.A[2]:this.A[3]}},parser:{h:function(t,e){return e<1?t:e<2&&t>=11?t:t+12}}})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},JRQ5:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Portuguese (pt)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Portuguese (pt)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("pt",{MMMM:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],MMM:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dddd:["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"],ddd:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],dd:["Dom","2ª","3ª","4ª","5ª","6ª","Sáb"],A:["da madrugada","da manhã","da tarde","da noite"],formatter:{A:function(t){var e=t.getHours();return e<5?this.A[0]:e<12?this.A[1]:e<19?this.A[2]:this.A[3]}},parser:{h:function(t,e){return e<2?t:t>11?t:t+12}}})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},JWNc:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Dutch (nl)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Dutch (nl)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("nl",{MMMM:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],MMM:{withdots:["jan.","feb.","mrt.","apr.","mei","jun.","jul.","aug.","sep.","okt.","nov.","dec."],withoutdots:["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"]},dddd:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],ddd:["zo.","ma.","di.","wo.","do.","vr.","za."],dd:["Zo","Ma","Di","Wo","Do","Vr","Za"],formatter:{MMM:function(t,e){return this.MMM[/-MMM-/.test(e)?"withoutdots":"withdots"][t.getMonth()]}},parser:{MMM:function(t,e){return this.parser.find(this.MMM[/-MMM-/.test(e)?"withoutdots":"withdots"],t)}}})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},K8D1:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Russian (ru)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Russian (ru)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("ru",{MMMM:["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"],MMM:["янв","фев","мар","апр","мая","июня","июля","авг","сен","окт","ноя","дек"],dddd:["Воскресенье","Понедельник","Вторник","Среду","Четверг","Пятницу","Субботу"],ddd:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],dd:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],A:["ночи","утра","дня","вечера"],formatter:{A:function(t){var e=t.getHours();return e<4?this.A[0]:e<12?this.A[1]:e<17?this.A[2]:this.A[3]}},parser:{h:function(t,e){return e<2?t:t>11?t:t+12}}})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},Puzg:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Hindi (hi)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Hindi (hi)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("hi",{MMMM:["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्टूबर","नवम्बर","दिसम्बर"],MMM:["जन.","फ़र.","मार्च","अप्रै.","मई","जून","जुल.","अग.","सित.","अक्टू.","नव.","दिस."],dddd:["रविवार","सोमवार","मंगलवार","बुधवार","गुरूवार","शुक्रवार","शनिवार"],ddd:["रवि","सोम","मंगल","बुध","गुरू","शुक्र","शनि"],dd:["र","सो","मं","बु","गु","शु","श"],A:["रात","सुबह","दोपहर","शाम"],formatter:{A:function(t){var e=t.getHours();return e<4?this.A[0]:e<10?this.A[1]:e<17?this.A[2]:e<20?this.A[3]:this.A[0]}},parser:{h:function(t,e){return e<1?t<4||t>11?t:t+12:e<2?t:e<3&&t>9?t:t+12}}})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},SbCh:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Polish (pl)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Polish (pl)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("pl",{MMMM:{nominative:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"],subjective:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"]},MMM:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],dddd:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"],ddd:["nie","pon","wt","śr","czw","pt","sb"],dd:["Nd","Pn","Wt","Śr","Cz","Pt","So"],formatter:{MMMM:function(t,e){return this.MMMM[/D MMMM/.test(e)?"subjective":"nominative"][t.getMonth()]}},parser:{MMMM:function(t,e){return this.parser.find(this.MMMM[/D MMMM/.test(e)?"subjective":"nominative"],t)}}})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},Vlmt:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Punjabi (pa-in)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Punjabi (pa-in)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){var e=["੦","੧","੨","੩","੪","੫","੬","੭","੮","੯"],r={"੦":0,"੧":1,"੨":2,"੩":3,"੪":4,"੫":5,"੬":6,"੭":7,"੮":8,"੯":9};t.setLocales("pa-in",{MMMM:["ਜਨਵਰੀ","ਫ਼ਰਵਰੀ","ਮਾਰਚ","ਅਪ੍ਰੈਲ","ਮਈ","ਜੂਨ","ਜੁਲਾਈ","ਅਗਸਤ","ਸਤੰਬਰ","ਅਕਤੂਬਰ","ਨਵੰਬਰ","ਦਸੰਬਰ"],MMM:["ਜਨਵਰੀ","ਫ਼ਰਵਰੀ","ਮਾਰਚ","ਅਪ੍ਰੈਲ","ਮਈ","ਜੂਨ","ਜੁਲਾਈ","ਅਗਸਤ","ਸਤੰਬਰ","ਅਕਤੂਬਰ","ਨਵੰਬਰ","ਦਸੰਬਰ"],dddd:["ਐਤਵਾਰ","ਸੋਮਵਾਰ","ਮੰਗਲਵਾਰ","ਬੁਧਵਾਰ","ਵੀਰਵਾਰ","ਸ਼ੁੱਕਰਵਾਰ","ਸ਼ਨੀਚਰਵਾਰ"],ddd:["ਐਤ","ਸੋਮ","ਮੰਗਲ","ਬੁਧ","ਵੀਰ","ਸ਼ੁਕਰ","ਸ਼ਨੀ"],dd:["ਐਤ","ਸੋਮ","ਮੰਗਲ","ਬੁਧ","ਵੀਰ","ਸ਼ੁਕਰ","ਸ਼ਨੀ"],A:["ਰਾਤ","ਸਵੇਰ","ਦੁਪਹਿਰ","ਸ਼ਾਮ"],formatter:{A:function(t){var e=t.getHours();return e<4?this.A[0]:e<10?this.A[1]:e<17?this.A[2]:e<20?this.A[3]:this.A[0]},post:function(t){return t.replace(/\d/g,function(t){return e[0|t]})}},parser:{h:function(t,e){return e<1?t<4||t>11?t:t+12:e<2?t:e<3&&t>=10?t:t+12},pre:function(t){return t.replace(/[੦੧੨੩੪੫੬੭੮੯]/g,function(t){return""+r[t]})}}})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},XAci:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Hungarian (hu)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Hungarian (hu)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("hu",{MMMM:["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"],MMM:["jan","feb","márc","ápr","máj","jún","júl","aug","szept","okt","nov","dec"],dddd:["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"],ddd:["vas","hét","kedd","sze","csüt","pén","szo"],dd:["v","h","k","sze","cs","p","szo"],A:["de","du"]})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},Xivz:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Turkish (tr)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Turkish (tr)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("tr",{MMMM:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],MMM:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],dddd:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],ddd:["Paz","Pts","Sal","Çar","Per","Cum","Cts"],dd:["Pz","Pt","Sa","Ça","Pe","Cu","Ct"]})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},g40F:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Spanish (es)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Spanish (es)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("es",{MMMM:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],MMM:["Ene.","Feb.","Mar.","Abr.","May.","Jun.","Jul.","Ago.","Sep.","Oct.","Nov.","Dic."],dddd:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],ddd:["Dom.","Lun.","Mar.","Mié.","Jue.","Vie.","Sáb."],dd:["Do","Lu","Ma","Mi","Ju","Vi","Sá"],A:["de la mañana","de la tarde","de la noche"],formatter:{A:function(t){var e=t.getHours();return e<12?this.A[0]:e<19?this.A[1]:this.A[2]}},parser:{h:function(t,e){return e<1?t:t>11?t:t+12}}})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},g4xo:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Romanian (ro)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Romanian (ro)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("ro",{MMMM:["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"],MMM:["ian.","febr.","mart.","apr.","mai","iun.","iul.","aug.","sept.","oct.","nov.","dec."],dddd:["duminică","luni","marți","miercuri","joi","vineri","sâmbătă"],ddd:["Dum","Lun","Mar","Mie","Joi","Vin","Sâm"],dd:["Du","Lu","Ma","Mi","Jo","Vi","Sâ"]})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},hXkJ:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Ukrainian (uk)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Ukrainian (uk)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("uk",{MMMM:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"],MMM:["січ","лют","бер","квіт","трав","черв","лип","серп","вер","жовт","лист","груд"],dddd:{nominative:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"],accusative:["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"],genitive:["неділі","понеділка","вівторка","середи","четверга","п’ятниці","суботи"]},ddd:["нд","пн","вт","ср","чт","пт","сб"],dd:["нд","пн","вт","ср","чт","пт","сб"],A:["ночі","ранку","дня","вечора"],formatter:{A:function(t){var e=t.getHours();return e<4?this.A[0]:e<12?this.A[1]:e<17?this.A[2]:this.A[3]},dddd:function(t,e){var r="nominative";return/(\[[ВвУу]\]) ?dddd/.test(e)?r="accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(e)&&(r="genitive"),this.dddd[r][t.getDay()]}},parser:{h:function(t,e){return e<2?t:t>11?t:t+12}}})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},iyGk:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Japanese (ja)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Japanese (ja)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("ja",{MMMM:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],MMM:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dddd:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],ddd:["日","月","火","水","木","金","土"],dd:["日","月","火","水","木","金","土"],A:["午前","午後"],formatter:{hh:function(t){return("0"+t.getHours()%12).slice(-2)},h:function(t){return t.getHours()%12}}})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},"k/Sy":function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Uzbek (uz)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Uzbek (uz)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("uz",{MMMM:["январ","феврал","март","апрел","май","июн","июл","август","сентябр","октябр","ноябр","декабр"],MMM:["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"],dddd:["Якшанба","Душанба","Сешанба","Чоршанба","Пайшанба","Жума","Шанба"],ddd:["Якш","Душ","Сеш","Чор","Пай","Жум","Шан"],dd:["Як","Ду","Се","Чо","Па","Жу","Ша"]})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},lcVx:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Thai (th)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Thai (th)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("th",{MMMM:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],MMM:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],dddd:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],ddd:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์","เสาร์"],dd:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],A:["ก่อนเที่ยง","หลังเที่ยง"]})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},mM2C:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Vietnamese (vi)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Vietnamese (vi)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("vi",{MMMM:["tháng 1","tháng 2","tháng 3","tháng 4","tháng 5","tháng 6","tháng 7","tháng 8","tháng 9","tháng 10","tháng 11","tháng 12"],MMM:["Th01","Th02","Th03","Th04","Th05","Th06","Th07","Th08","Th09","Th10","Th11","Th12"],dddd:["chủ nhật","thứ hai","thứ ba","thứ tư","thứ năm","thứ sáu","thứ bảy"],ddd:["CN","T2","T3","T4","T5","T6","T7"],dd:["CN","T2","T3","T4","T5","T6","T7"],A:["sa","ch"]})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},"nMs+":function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Bengali (bn)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Bengali (bn)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("bn",{MMMM:["জানুয়ারী","ফেবুয়ারী","মার্চ","এপ্রিল","মে","জুন","জুলাই","অগাস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"],MMM:["জানু","ফেব","মার্চ","এপর","মে","জুন","জুল","অগ","সেপ্ট","অক্টো","নভ","ডিসেম্"],dddd:["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পত্তিবার","শুক্রবার","শনিবার"],ddd:["রবি","সোম","মঙ্গল","বুধ","বৃহস্পত্তি","শুক্র","শনি"],dd:["রব","সম","মঙ্গ","বু","ব্রিহ","শু","শনি"],A:["রাত","সকাল","দুপুর","বিকাল"],formatter:{A:function(t){var e=t.getHours();return e<4?this.A[0]:e<10?this.A[1]:e<17?this.A[2]:e<20?this.A[3]:this.A[0]}},parser:{h:function(t,e){return e<1?t<4||t>11?t:t+12:e<2?t:e<3&&t>9?t:t+12}}})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},pEiz:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Arabic (ar)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Arabic (ar)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){var e=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"],r={"٠":0,"١":1,"٢":2,"٣":3,"٤":4,"٥":5,"٦":6,"٧":7,"٨":8,"٩":9};t.setLocales("ar",{MMMM:["كانون الثاني يناير","شباط فبراير","آذار مارس","نيسان أبريل","أيار مايو","حزيران يونيو","تموز يوليو","آب أغسطس","أيلول سبتمبر","تشرين الأول أكتوبر","تشرين الثاني نوفمبر","كانون الأول ديسمبر"],MMM:["كانون الثاني يناير","شباط فبراير","آذار مارس","نيسان أبريل","أيار مايو","حزيران يونيو","تموز يوليو","آب أغسطس","أيلول سبتمبر","تشرين الأول أكتوبر","تشرين الثاني نوفمبر","كانون الأول ديسمبر"],dddd:["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],ddd:["أحد","إثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],dd:["ح","ن","ث","ر","خ","ج","س"],A:["ص","م"],formatter:{post:function(t){return t.replace(/\d/g,function(t){return e[0|t]})}},parser:{pre:function(t){return t.replace(/[٠١٢٣٤٥٦٧٨٩]/g,function(t){return""+r[t]})}}})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},qGiO:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Javanese (jv)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Javanese (jv)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("jv",{MMMM:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember"],MMM:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Ags","Sep","Okt","Nop","Des"],dddd:["Minggu","Senen","Seloso","Rebu","Kemis","Jemuwah","Septu"],ddd:["Min","Sen","Sel","Reb","Kem","Jem","Sep"],dd:["Mg","Sn","Sl","Rb","Km","Jm","Sp"],A:["enjing","siyang","sonten","ndalu"],formatter:{A:function(t){var e=t.getHours();return e<11?this.A[0]:e<15?this.A[1]:e<19?this.A[2]:this.A[3]}},parser:{h:function(t,e){return e<1?t:e<2&&t>=11?t:t+12}}})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},tpjN:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve French (fr)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve French (fr)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){t.setLocales("fr",{MMMM:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],MMM:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],dddd:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],ddd:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],dd:["Di","Lu","Ma","Me","Je","Ve","Sa"],A:["matin","l'après-midi"]})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},v0FM:function(t,e,r){var n,o,i;
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Burmese (my)
 * @preserve It is using moment.js locale configuration as a reference.
 */
/**
 * @preserve date-and-time.js locale configuration
 * @preserve Burmese (my)
 * @preserve It is using moment.js locale configuration as a reference.
 */
!function(a){"use strict";var u=function(t){var e=["၀","၁","၂","၃","၄","၅","၆","၇","၈","၉"],r={"၀":0,"၁":1,"၂":2,"၃":3,"၄":4,"၅":5,"၆":6,"၇":7,"၈":8,"၉":9};t.setLocales("my",{MMMM:["ဇန်နဝါရီ","ဖေဖော်ဝါရီ","မတ်","ဧပြီ","မေ","ဇွန်","ဇူလိုင်","သြဂုတ်","စက်တင်ဘာ","အောက်တိုဘာ","နိုဝင်ဘာ","ဒီဇင်ဘာ"],MMM:["ဇန်","ဖေ","မတ်","ပြီ","မေ","ဇွန်","လိုင်","သြ","စက်","အောက်","နို","ဒီ"],dddd:["တနင်္ဂနွေ","တနင်္လာ","အင်္ဂါ","ဗုဒ္ဓဟူး","ကြာသပတေး","သောကြာ","စနေ"],ddd:["နွေ","လာ","ဂါ","ဟူး","ကြာ","သော","နေ"],dd:["နွေ","လာ","ဂါ","ဟူး","ကြာ","သော","နေ"],formatter:{post:function(t){return t.replace(/\d/g,function(t){return e[0|t]})}},parser:{pre:function(t){return t.replace(/[၀၁၂၃၄၅၆၇၈၉]/g,function(t){return""+r[t]})}}})};"object"==typeof t&&"object"==typeof t.exports?u(r("y3xr")):(o=[r("y3xr")],void 0===(i="function"==typeof(n=u)?n.apply(e,o):n)||(t.exports=i))}()},y3xr:function(t,e,r){var n;
/**
 * @preserve date-and-time.js (c) KNOWLEDGECODE | MIT
 */
/**
 * @preserve date-and-time.js (c) KNOWLEDGECODE | MIT
 */
!function(o){"use strict";var i={},a="en",u={en:{MMMM:["January","February","March","April","May","June","July","August","September","October","November","December"],MMM:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dddd:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ddd:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dd:["Su","Mo","Tu","We","Th","Fr","Sa"],A:["a.m.","p.m."],formatter:{YYYY:function(t){return("000"+t.getFullYear()).slice(-4)},YY:function(t){return("0"+t.getFullYear()).slice(-2)},Y:function(t){return""+t.getFullYear()},MMMM:function(t){return this.MMMM[t.getMonth()]},MMM:function(t){return this.MMM[t.getMonth()]},MM:function(t){return("0"+(t.getMonth()+1)).slice(-2)},M:function(t){return""+(t.getMonth()+1)},DD:function(t){return("0"+t.getDate()).slice(-2)},D:function(t){return""+t.getDate()},HH:function(t){return("0"+t.getHours()).slice(-2)},H:function(t){return""+t.getHours()},A:function(t){return this.A[t.getHours()>11|0]},hh:function(t){return("0"+(t.getHours()%12||12)).slice(-2)},h:function(t){return""+(t.getHours()%12||12)},mm:function(t){return("0"+t.getMinutes()).slice(-2)},m:function(t){return""+t.getMinutes()},ss:function(t){return("0"+t.getSeconds()).slice(-2)},s:function(t){return""+t.getSeconds()},SSS:function(t){return("00"+t.getMilliseconds()).slice(-3)},SS:function(t){return("0"+(t.getMilliseconds()/10|0)).slice(-2)},S:function(t){return""+(t.getMilliseconds()/100|0)},dddd:function(t){return this.dddd[t.getDay()]},ddd:function(t){return this.ddd[t.getDay()]},dd:function(t){return this.dd[t.getDay()]},Z:function(t){var e=t.utc?0:t.getTimezoneOffset()/.6;return(e>0?"-":"+")+("000"+Math.abs(e-e%100*.4)).slice(-4)},post:function(t){return t}},parser:{find:function(t,e){for(var r,n=-1,o=0,i=0,a=t.length;i<a;i++)r=t[i],!e.indexOf(r)&&r.length>o&&(n=i,o=r.length);return{index:n,length:o}},MMMM:function(t){return this.parser.find(this.MMMM,t)},MMM:function(t){return this.parser.find(this.MMM,t)},A:function(t){return this.parser.find(this.A,t)},h:function(t,e){return(12===t?0:t)+12*e},pre:function(t){return t}}}};i.format=function(t,e,r){var n=i.addMinutes(t,r?t.getTimezoneOffset():0),o=u[a],s=o.formatter;return n.utc=r,e.replace(/(\[[^\[\]]*]|\[.*\][^\[]*\]|YYYY|YY|MMM?M?|DD|HH|hh|mm|ss|SSS?|ddd?d?|.)/g,function(t){var r=s[t];return r?s.post(r.call(o,n,e)):t.replace(/\[(.*)]/,"$1")})},i.parse=function(t,e,r){for(var n,o,s,d,c,M,f,p,y=u[a],l=y.parser.pre(t),v=0,m=/(MMMM?|A)|(YYYY)|(SSS)|(MM|DD|HH|hh|mm|ss)|(YY|M|D|H|h|m|s|SS)|(S)|(.)/g,h={2:/^\d{1,4}/,3:/^\d{1,3}/,4:/^\d\d/,5:/^\d\d?/,6:/^\d/},b=[31,28,31,30,31,30,31,31,30,31,30,31],g={Y:1970,M:1,D:1,H:0,m:0,s:0,S:0};n=m.exec(e);){for(o=0,d=1,s="";!s;)s=n[++o];if(c=s.charAt(0),M=l.slice(v),o<2)f=y.parser[s].call(y,M,e),g[c]=f.index,"M"===c&&g[c]++,d=f.length;else if(o<7)f=(M.match(h[o])||[""])[0],g[c]=0|("S"===c?(f+"000").slice(0,-s.length):f),d=f.length;else if(" "!==c&&c!==M[0])return NaN;if(!d)return NaN;v+=d}return v===l.length&&f?(g.Y+=g.Y<70?2e3:g.Y<100?1900:0,g.H=g.H||y.parser.h(g.h||0,g.A||0),p=new Date(g.Y,g.M-1,g.D,g.H,g.m,g.s,g.S),b[1]+=0|i.isLeapYear(p),g.M<1||g.M>12||g.D<1||g.D>b[g.M-1]||g.H>23||g.m>59||g.s>59?NaN:r?i.addMinutes(p,-p.getTimezoneOffset()):p):NaN},i.isValid=function(t,e){return!!i.parse(t,e)},i.addYears=function(t,e){return i.addMonths(t,12*e)},i.addMonths=function(t,e){var r=new Date(t.getTime());return r.setMonth(r.getMonth()+e),r},i.addDays=function(t,e){var r=new Date(t.getTime());return r.setDate(r.getDate()+e),r},i.addHours=function(t,e){return i.addMilliseconds(t,36e5*e)},i.addMinutes=function(t,e){return i.addMilliseconds(t,6e4*e)},i.addSeconds=function(t,e){return i.addMilliseconds(t,1e3*e)},i.addMilliseconds=function(t,e){return new Date(t.getTime()+e)},i.subtract=function(t,e){var r=t.getTime()-e.getTime();return{toMilliseconds:function(){return r},toSeconds:function(){return r/1e3|0},toMinutes:function(){return r/6e4|0},toHours:function(){return r/36e5|0},toDays:function(){return r/864e5|0}}},i.isLeapYear=function(t){var e=t.getFullYear();return!((e%4||!(e%100))&&e%400)},i.isSameDay=function(t,e){return i.format(t,"YYYYMMDD")===i.format(e,"YYYYMMDD")},i.locale=function(t){return t&&(!u[t]&&o&&r("OBWt")("./"+t),a=t),a},i.getLocales=function(t){return u[t||a]},i.setLocales=function(t,e){var r=function(t,e){var r,n,o=function(){};for(n in o.prototype=e,r=new o,t)t.hasOwnProperty(n)&&(r[n]=t[n]);return r},n=u[t]||u.en,o=r(e,n);e.formatter&&(o.formatter=r(e.formatter,n.formatter)),e.parser&&(o.parser=r(e.parser,n.parser)),u[t]=o},"object"==typeof t&&"object"==typeof t.exports?t.exports=i:void 0===(n=function(){return i}.apply(e,[]))||(t.exports=n)}(this)}}]);