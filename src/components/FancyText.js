import React from 'react'
import "../App.css"
import $ from "jquery"

export default function FancyText(props) {
    String.prototype.fancy = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A":"𝙰","B":"𝙱","C":"𝙲","D":"𝙳","E":"𝙴","F":"𝙵","G":"𝙶","H":"𝙷","I":"𝙸","J":"𝙹","K":"𝙺","L":"𝙻","M":"𝙼","N":"𝙽","O":"𝙾","P":"𝙿","Q":"𝚀","R":"𝚁","S":"𝚂","T":"𝚃","U":"𝚄","V":"𝚅","W":"𝚆","X":"𝚇","Y":"𝚈","Z":"𝚉","a":"𝚊","b":"𝚋","c":"𝚌","d":"𝚍","e":"𝚎","f":"𝚏","g":"𝚐","h":"𝚑","i":"𝚒","j":"𝚓","k":"𝚔","l":"𝚕","m":"𝚖","n":"𝚗","o":"𝚘","p":"𝚙","q":"𝚚","r":"𝚛","s":"𝚜","t":"𝚝","u":"𝚞","v":"𝚟","w":"𝚠","x":"𝚡","y":"𝚢","z":"𝚣","1":"𝟷","2":"𝟸","3":"𝟹","4":"𝟺","5":"𝟻","6":"𝟼","7":"𝟽","8":"𝟾","9":"𝟿","0":"𝟶"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    
    String.prototype.gothic = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A":"𝔄","B":"𝔅","C":"ℭ","D":"𝔇","E":"𝔈","F":"𝔉","G":"𝔊","H":"ℌ","I":"ℑ","J":"𝔍","K":"𝔎","L":"𝔏","M":"𝔐","N":"𝔑","O":"𝔒","P":"𝔓","Q":"𝔔","R":"ℜ","S":"𝔖","T":"𝔗","U":"𝔘","V":"𝔙","W":"𝔚","X":"𝔛","Y":"𝔜","Z":"ℨ","a":"𝔞","b":"𝔟","c":"𝔠","d":"𝔡","e":"𝔢","f":"𝔣","g":"𝔤","h":"𝔥","i":"𝔦","j":"𝔧","k":"𝔨","l":"𝔩","m":"𝔪","n":"𝔫","o":"𝔬","p":"𝔭","q":"𝔮","r":"𝔯","s":"𝔰","t":"𝔱","u":"𝔲","v":"𝔳","w":"𝔴","x":"𝔵","y":"𝔶","z":"𝔷","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","0":"0"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    String.prototype.gothic_bold = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A":"𝕬","B":"𝕭","C":"𝕮","D":"𝕯","E":"𝕰","F":"𝕱","G":"𝕲","H":"𝕳","I":"𝕴","J":"𝕵","K":"𝕶","L":"𝕷","M":"𝕸","N":"𝕹","O":"𝕺","P":"𝕻","Q":"𝕼","R":"𝕽","S":"𝕾","T":"𝕿","U":"𝖀","V":"𝖁","W":"𝖂","X":"𝖃","Y":"𝖄","Z":"𝖅","a":"𝖆","b":"𝖇","c":"𝖈","d":"𝖉","e":"𝖊","f":"𝖋","g":"𝖌","h":"𝖍","i":"𝖎","j":"𝖏","k":"𝖐","l":"𝖑","m":"𝖒","n":"𝖓","o":"𝖔","p":"𝖕","q":"𝖖","r":"𝖗","s":"𝖘","t":"𝖙","u":"𝖚","v":"𝖛","w":"𝖜","x":"𝖝","y":"𝖞","z":"𝖟","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","0":"0"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    String.prototype.lined = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A":"𝔸","B":"𝔹","C":"ℂ","D":"𝔻","E":"𝔼","F":"𝔽","G":"𝔾","H":"ℍ","I":"𝕀","J":"𝕁","K":"𝕂","L":"𝕃","M":"𝕄","N":"ℕ","O":"𝕆","P":"ℙ","Q":"ℚ","R":"ℝ","S":"𝕊","T":"𝕋","U":"𝕌","V":"𝕍","W":"𝕎","X":"𝕏","Y":"𝕐","Z":"ℤ","a":"𝕒","b":"𝕓","c":"𝕔","d":"𝕕","e":"𝕖","f":"𝕗","g":"𝕘","h":"𝕙","i":"𝕚","j":"𝕛","k":"𝕜","l":"𝕝","m":"𝕞","n":"𝕟","o":"𝕠","p":"𝕡","q":"𝕢","r":"𝕣","s":"𝕤","t":"𝕥","u":"𝕦","v":"𝕧","w":"𝕨","x":"𝕩","y":"𝕪","z":"𝕫","1":"𝟙","2":"𝟚","3":"𝟛","4":"𝟜","5":"𝟝","6":"𝟞","7":"𝟟","8":"𝟠","9":"𝟡","0":"𝟘"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    String.prototype.very_tiny = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A":"ᴬ","B":"ᴮ","C":"ᶜ","D":"ᴰ","E":"ᴱ","F":"ᶠ","G":"ᴳ","H":"ᴴ","I":"ᴵ","J":"ᴶ","K":"ᴷ","L":"ᴸ","M":"ᴹ","N":"ᴺ","O":"ᴼ","P":"ᴾ","Q":"Q","R":"ᴿ","S":"ˢ","T":"ᵀ","U":"ᵁ","V":"ⱽ","W":"ᵂ","X":"ˣ","Y":"ʸ","Z":"ᶻ","a":"ᵃ","b":"ᵇ","c":"ᶜ","d":"ᵈ","e":"ᵉ","f":"ᶠ","g":"ᵍ","h":"ʰ","i":"ⁱ","j":"ʲ","k":"ᵏ","l":"ˡ","m":"ᵐ","n":"ⁿ","o":"ᵒ","p":"ᵖ","q":"q","r":"ʳ","s":"ˢ","t":"ᵗ","u":"ᵘ","v":"ᵛ","w":"ʷ","x":"ˣ","y":"ʸ","z":"ᶻ","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","0":"⁰"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    String.prototype.tiny = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A":"ᴀ","B":"ʙ","C":"ᴄ","D":"ᴅ","E":"ᴇ","F":"ꜰ","G":"ɢ","H":"ʜ","I":"ɪ","J":"ᴊ","K":"ᴋ","L":"ʟ","M":"ᴍ","N":"ɴ","O":"ᴏ","P":"ᴘ","Q":"Q","R":"ʀ","S":"ꜱ","T":"ᴛ","U":"ᴜ","V":"ᴠ","W":"ᴡ","X":"x","Y":"ʏ","Z":"ᴢ","a":"ᴀ","b":"ʙ","c":"ᴄ","d":"ᴅ","e":"ᴇ","f":"ꜰ","g":"ɢ","h":"ʜ","i":"ɪ","j":"ᴊ","k":"ᴋ","l":"ʟ","m":"ᴍ","n":"ɴ","o":"ᴏ","p":"ᴘ","q":"Q","r":"ʀ","s":"ꜱ","t":"ᴛ","u":"ᴜ","v":"ᴠ","w":"ᴡ","x":"x","y":"ʏ","z":"ᴢ","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","0":"0"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    String.prototype.bold = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A":"𝐀","B":"𝐁","C":"𝐂","D":"𝐃","E":"𝐄","F":"𝐅","G":"𝐆","H":"𝐇","I":"𝐈","J":"𝐉","K":"𝐊","L":"𝐋","M":"𝐌","N":"𝐍","O":"𝐎","P":"𝐏","Q":"𝐐","R":"𝐑","S":"𝐒","T":"𝐓","U":"𝐔","V":"𝐕","W":"𝐖","X":"𝐗","Y":"𝐘","Z":"𝐙","a":"𝐚","b":"𝐛","c":"𝐜","d":"𝐝","e":"𝐞","f":"𝐟","g":"𝐠","h":"𝐡","i":"𝐢","j":"𝐣","k":"𝐤","l":"𝐥","m":"𝐦","n":"𝐧","o":"𝐨","p":"𝐩","q":"𝐪","r":"𝐫","s":"𝐬","t":"𝐭","u":"𝐮","v":"𝐯","w":"𝐰","x":"𝐱","y":"𝐲","z":"𝐳","1":"𝟏","2":"𝟐","3":"𝟑","4":"𝟒","5":"𝟓","6":"𝟔","7":"𝟕","8":"𝟖","9":"𝟗","0":"𝟎"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    String.prototype.italic = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A":"𝘈","B":"𝘉","C":"𝘊","D":"𝘋","E":"𝘌","F":"𝘍","G":"𝘎","H":"𝘏","I":"𝘐","J":"𝘑","K":"𝘒","L":"𝘓","M":"𝘔","N":"𝘕","O":"𝘖","P":"𝘗","Q":"𝘘","R":"𝘙","S":"𝘚","T":"𝘛","U":"𝘜","V":"𝘝","W":"𝘞","X":"𝘟","Y":"𝘠","Z":"𝘡","a":"𝘢","b":"𝘣","c":"𝘤","d":"𝘥","e":"𝘦","f":"𝘧","g":"𝘨","h":"𝘩","i":"𝘪","j":"𝘫","k":"𝘬","l":"𝘭","m":"𝘮","n":"𝘯","o":"𝘰","p":"𝘱","q":"𝘲","r":"𝘳","s":"𝘴","t":"𝘵","u":"𝘶","v":"𝘷","w":"𝘸","x":"𝘹","y":"𝘺","z":"𝘻","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","0":"0"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    String.prototype.bold_italic = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A":"𝘼","B":"𝘽","C":"𝘾","D":"𝘿","E":"𝙀","F":"𝙁","G":"𝙂","H":"𝙃","I":"𝙄","J":"𝙅","K":"𝙆","L":"𝙇","M":"𝙈","N":"𝙉","O":"𝙊","P":"𝙋","Q":"𝙌","R":"𝙍","S":"𝙎","T":"𝙏","U":"𝙐","V":"𝙑","W":"𝙒","X":"𝙓","Y":"𝙔","Z":"𝙕","a":"𝙖","b":"𝙗","c":"𝙘","d":"𝙙","e":"𝙚","f":"𝙛","g":"𝙜","h":"𝙝","i":"𝙞","j":"𝙟","k":"𝙠","l":"𝙡","m":"𝙢","n":"𝙣","o":"𝙤","p":"𝙥","q":"𝙦","r":"𝙧","s":"𝙨","t":"𝙩","u":"𝙪","v":"𝙫","w":"𝙬","x":"𝙭","y":"𝙮","z":"𝙯","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","0":"0"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    String.prototype.underline = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 ]/g;
        var translate = {"A":"A̲","B":"B̲","C":"C̲","D":"D̲","E":"E̲","F":"F̲","G":"G̲","H":"H̲","I":"I̲","J":"J̲","K":"K̲","L":"L̲","M":"M̲","N":"N̲","O":"O̲","P":"P̲","Q":"Q̲","R":"R̲","S":"S̲","T":"T̲","U":"U̲","V":"V̲","W":"W̲","X":"X̲","Y":"Y̲","Z":"Z̲","a":"a̲","b":"b̲","c":"c̲","d":"d̲","e":"e̲","f":"f̲","g":"g̲","h":"h̲","i":"i̲","j":"j̲","k":"k̲","l":"l̲","m":"m̲","n":"n̲","o":"o̲","p":"p̲","q":"q̲","r":"r̲","s":"s̲","t":"t̲","u":"u̲","v":"v̲","w":"w̲","x":"x̲","y":"y̲","z":"z̲","1":"1̲","2":"2̲","3":"3̲","4":"4̲","5":"5̲","6":"6̲","7":"7̲","8":"8̲","9":"9̲","0":"0̲", " ":" ̲"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    String.prototype.cursive = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A":"𝒜","B":"𝐵","C":"𝒞","D":"𝒟","E":"𝐸","F":"𝐹","G":"𝒢","H":"𝐻","I":"𝐼","J":"𝒥","K":"𝒦","L":"𝐿","M":"𝑀","N":"𝒩","O":"𝒪","P":"𝒫","Q":"𝒬","R":"𝑅","S":"𝒮","T":"𝒯","U":"𝒰","V":"𝒱","W":"𝒲","X":"𝒳","Y":"𝒴","Z":"𝒵","a":"𝒶","b":"𝒷","c":"𝒸","d":"𝒹","e":"𝑒","f":"𝒻","g":"𝑔","h":"𝒽","i":"𝒾","j":"𝒿","k":"𝓀","l":"𝓁","m":"𝓂","n":"𝓃","o":"𝑜","p":"𝓅","q":"𝓆","r":"𝓇","s":"𝓈","t":"𝓉","u":"𝓊","v":"𝓋","w":"𝓌","x":"𝓍","y":"𝓎","z":"𝓏","1":"𝟣","2":"𝟤","3":"𝟥","4":"𝟦","5":"𝟧","6":"𝟨","7":"𝟩","8":"𝟪","9":"𝟫","0":"𝟢"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    String.prototype.cursive_bold = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A":"𝓐","B":"𝓑","C":"𝓒","D":"𝓓","E":"𝓔","F":"𝓕","G":"𝓖","H":"𝓗","I":"𝓘","J":"𝓙","K":"𝓚","L":"𝓛","M":"𝓜","N":"𝓝","O":"𝓞","P":"𝓟","Q":"𝓠","R":"𝓡","S":"𝓢","T":"𝓣","U":"𝓤","V":"𝓥","W":"𝓦","X":"𝓧","Y":"𝓨","Z":"𝓩","a":"𝓪","b":"𝓫","c":"𝓬","d":"𝓭","e":"𝓮","f":"𝓯","g":"𝓰","h":"𝓱","i":"𝓲","j":"𝓳","k":"𝓴","l":"𝓵","m":"𝓶","n":"𝓷","o":"𝓸","p":"𝓹","q":"𝓺","r":"𝓻","s":"𝓼","t":"𝓽","u":"𝓾","v":"𝓿","w":"𝔀","x":"𝔁","y":"𝔂","z":"𝔃","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","0":"0"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    String.prototype.blade = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A":"ᗩ","B":"ᗷ","C":"ᑕ","D":"ᗪ","E":"E","F":"ᖴ","G":"G","H":"ᕼ","I":"I","J":"ᒍ","K":"K","L":"ᒪ","M":"ᗰ","N":"ᑎ","O":"O","P":"ᑭ","Q":"ᑫ","R":"ᖇ","S":"ᔕ","T":"T","U":"ᑌ","V":"ᐯ","W":"ᗯ","X":"᙭","Y":"Y","Z":"ᘔ","a":"ᗩ","b":"ᗷ","c":"ᑕ","d":"ᗪ","e":"E","f":"ᖴ","g":"G","h":"ᕼ","i":"I","j":"ᒍ","k":"K","l":"ᒪ","m":"ᗰ","n":"ᑎ","o":"O","p":"ᑭ","q":"ᑫ","r":"ᖇ","s":"ᔕ","t":"T","u":"ᑌ","v":"ᐯ","w":"ᗯ","x":"᙭","y":"Y","z":"ᘔ","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","0":"0"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    String.prototype.squared = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A":"🄰","B":"🄱","C":"🄲","D":"🄳","E":"🄴","F":"🄵","G":"🄶","H":"🄷","I":"🄸","J":"🄹","K":"🄺","L":"🄻","M":"🄼","N":"🄽","O":"🄾","P":"🄿","Q":"🅀","R":"🅁","S":"🅂","T":"🅃","U":"🅄","V":"🅅","W":"🅆","X":"🅇","Y":"🅈","Z":"🅉","a":"🄰","b":"🄱","c":"🄲","d":"🄳","e":"🄴","f":"🄵","g":"🄶","h":"🄷","i":"🄸","j":"🄹","k":"🄺","l":"🄻","m":"🄼","n":"🄽","o":"🄾","p":"🄿","q":"🅀","r":"🅁","s":"🅂","t":"🅃","u":"🅄","v":"🅅","w":"🅆","x":"🅇","y":"🅈","z":"🅉","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","0":"0"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    String.prototype.rounded = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A":"Ⓐ","B":"Ⓑ","C":"Ⓒ","D":"Ⓓ","E":"Ⓔ","F":"Ⓕ","G":"Ⓖ","H":"Ⓗ","I":"Ⓘ","J":"Ⓙ","K":"Ⓚ","L":"Ⓛ","M":"Ⓜ","N":"Ⓝ","O":"Ⓞ","P":"Ⓟ","Q":"Ⓠ","R":"Ⓡ","S":"Ⓢ","T":"Ⓣ","U":"Ⓤ","V":"Ⓥ","W":"Ⓦ","X":"Ⓧ","Y":"Ⓨ","Z":"Ⓩ","a":"ⓐ","b":"ⓑ","c":"ⓒ","d":"ⓓ","e":"ⓔ","f":"ⓕ","g":"ⓖ","h":"ⓗ","i":"ⓘ","j":"ⓙ","k":"ⓚ","l":"ⓛ","m":"ⓜ","n":"ⓝ","o":"ⓞ","p":"ⓟ","q":"ⓠ","r":"ⓡ","s":"ⓢ","t":"ⓣ","u":"ⓤ","v":"ⓥ","w":"ⓦ","x":"ⓧ","y":"ⓨ","z":"ⓩ","1":"①","2":"②","3":"③","4":"④","5":"⑤","6":"⑥","7":"⑦","8":"⑧","9":"⑨","0":"⓪"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    String.prototype.fullsquare = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A":"🅰","B":"🅱","C":"🅲","D":"🅳","E":"🅴","F":"🅵","G":"🅶","H":"🅷","I":"🅸","J":"🅹","K":"🅺","L":"🅻","M":"🅼","N":"🅽","O":"🅾","P":"🅿","Q":"🆀","R":"🆁","S":"🆂","T":"🆃","U":"🆄","V":"🆅","W":"🆆","X":"🆇","Y":"🆈","Z":"🆉","a":"🅰","b":"🅱","c":"🅲","d":"🅳","e":"🅴","f":"🅵","g":"🅶","h":"🅷","i":"🅸","j":"🅹","k":"🅺","l":"🅻","m":"🅼","n":"🅽","o":"🅾","p":"🅿","q":"🆀","r":"🆁","s":"🆂","t":"🆃","u":"🆄","v":"🆅","w":"🆆","x":"🆇","y":"🆈","z":"🆉","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","0":"0"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    String.prototype.wingdings = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A":"✌︎","B":"👌︎","C":"👍︎","D":"👎︎","E":"☜︎","F":"☞︎","G":"☝︎","H":"☟︎","I":"✋︎","J":"☺︎","K":"😐︎","L":"☹︎","M":"💣︎","N":"☠︎","O":"⚐︎","P":"🏱︎","Q":"✈︎","R":"☼︎","S":"💧︎","T":"❄︎","U":"🕆︎","V":"✞︎","W":"🕈︎","X":"✠︎","Y":"✡︎","Z":"☪︎","a":"♋︎","b":"♌︎","c":"♍︎","d":"♎︎","e":"♏︎","f":"♐︎","g":"♑︎","h":"♒︎","i":"♓︎","j":"🙰","k":"🙵","l":"●︎","m":"❍︎","n":"■︎","o":"□︎","p":"◻︎","q":"❑︎","r":"❒︎","s":"⬧︎","t":"⧫︎","u":"◆︎","v":"❖︎","w":"⬥︎","x":"⌧︎","y":"⍓︎","z":"⌘︎","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","0":"0"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    
    String.prototype.fixed_width_symbols = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A": "𝙰","B": "𝙱","C": "𝙲","D": "𝙳","E": "𝙴","F": "𝙵","G": "𝙶","H": "𝙷","I": "𝙸","J": "𝙹","K": "𝙺","L": "𝙻","M": "𝙼","N": "𝙽","O": "𝙾","P": "𝙿","Q": "𝚀","R": "𝚁","S": "𝚂","T": "𝚃","U": "𝚄","V": "𝚅","W": "𝚆","X": "𝚇","Y": "𝚈","Z": "𝚉","a": "𝚊","b": "𝚋","c": "𝚌","d": "𝚍","e": "𝚎","f": "𝚏","g": "𝚐","h": "𝚑","i": "𝚒","j": "𝚓","k": "𝚔","l": "𝚕","m": "𝚖","n": "𝚗","o": "𝚘","p": "𝚙","q": "𝚚","r": "𝚛","s": "𝚜","t": "𝚝","u": "𝚞","v": "𝚟","w": "𝚠","x": "𝚡","y": "𝚢","z": "𝚣","1": "1","2": "2","3": "3","4": "4","5": "5","6": "6","7": "7","8": "8","9": "9","0": "0"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    
    String.prototype.sans_serif_symbols = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A": "𝖠","B": "𝖡","C": "𝖢","D": "𝖣","E": "𝖤","F": "𝖥","G": "𝖦","H": "𝖧","I": "𝖨","J": "𝖩","K": "𝖪","L": "𝖫","M": "𝖬","N": "𝖭","O": "𝖮","P": "𝖯","Q": "𝖰","R": "𝖱","S": "𝖲","T": "𝖳","U": "𝖴","V": "𝖵","W": "𝖶","X": "𝖷","Y": "𝖸","Z": "𝖹","a": "𝖺","b": "𝖻","c": "𝖼","d": "𝖽","e": "𝖾","f": "𝖿","g": "𝗀","h": "𝗁","i": "𝗂","j": "𝗃","k": "𝗄","l": "𝗅","m": "𝗆","n": "𝗇","o": "𝗈","p": "𝗉","q": "𝗊","r": "𝗋","s": "𝗌","t": "𝗍","u": "𝗎","v": "𝗏","w": "𝗐","x": "𝗑","y": "𝗒","z": "𝗓","1": "1","2": "2","3": "3","4": "4","5": "5","6": "6","7": "7","8": "8","9": "9","0": "0"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    
    String.prototype.bold_sans_serif_symbols = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A": "𝗔","B": "𝗕","C": "𝗖","D": "𝗗","E": "𝗘","F": "𝗙","G": "𝗚","H": "𝗛","I": "𝗜","J": "𝗝","K": "𝗞","L": "𝗟","M": "𝗠","N": "𝗡","O": "𝗢","P": "𝗣","Q": "𝗤","R": "𝗥","S": "𝗦","T": "𝗧","U": "𝗨","V": "𝗩","W": "𝗪","X": "𝗫","Y": "𝗬","Z": "𝗭","a": "𝗮","b": "𝗯","c": "𝗰","d": "𝗱","e": "𝗲","f": "𝗳","g": "𝗴","h": "𝗵","i": "𝗶","j": "𝗷","k": "𝗸","l": "𝗹","m": "𝗺","n": "𝗻","o": "𝗼","p": "𝗽","q": "𝗾","r": "𝗿","s": "𝘀","t": "𝘁","u": "𝘂","v": "𝘃","w": "𝘄","x": "𝘅","y": "𝘆","z": "𝘇","1": "1","2": "2","3": "3","4": "4","5": "5","6": "6","7": "7","8": "8","9": "9","0": "0"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    
    String.prototype.bold_numbers = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A": "A","B": "B","C": "C","D": "D","E": "E","F": "F","G": "G","H": "H","I": "I","J": "J","K": "K","L": "L","M": "M","N": "N","O": "O","P": "P","Q": "Q","R": "R","S": "S","T": "T","U": "U","V": "V","W": "W","X": "X","Y": "Y","Z": "Z","a": "a","b": "b","c": "c","d": "d","e": "e","f": "f","g": "g","h": "h","i": "i","j": "j","k": "k","l": "l","m": "m","n": "n","o": "o","p": "p","q": "q","r": "r","s": "s","t": "t","u": "u","v": "v","w": "w","x": "x","y": "y","z": "z","1": "𝟏","2": "𝟐","3": "𝟑","4": "𝟒","5": "𝟓","6": "𝟔","7": "𝟕","8": "𝟖","9": "𝟗","0": "𝟎"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    
    String.prototype.double_bar_numbers = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A": "A","B": "B","C": "C","D": "D","E": "E","F": "F","G": "G","H": "H","I": "I","J": "J","K": "K","L": "L","M": "M","N": "N","O": "O","P": "P","Q": "Q","R": "R","S": "S","T": "T","U": "U","V": "V","W": "W","X": "X","Y": "Y","Z": "Z","a": "a","b": "b","c": "c","d": "d","e": "e","f": "f","g": "g","h": "h","i": "i","j": "j","k": "k","l": "l","m": "m","n": "n","o": "o","p": "p","q": "q","r": "r","s": "s","t": "t","u": "u","v": "v","w": "w","x": "x","y": "y","z": "z","1": "𝟙","2": "𝟚","3": "𝟛","4": "𝟜","5": "𝟝","6": "𝟞","7": "𝟟","8": "𝟠","9": "𝟡","0": "𝟘"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    
    String.prototype.numbers_sans_serif = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A": "A","B": "B","C": "C","D": "D","E": "E","F": "F","G": "G","H": "H","I": "I","J": "J","K": "K","L": "L","M": "M","N": "N","O": "O","P": "P","Q": "Q","R": "R","S": "S","T": "T","U": "U","V": "V","W": "W","X": "X","Y": "Y","Z": "Z","a": "a","b": "b","c": "c","d": "d","e": "e","f": "f","g": "g","h": "h","i": "i","j": "j","k": "k","l": "l","m": "m","n": "n","o": "o","p": "p","q": "q","r": "r","s": "s","t": "t","u": "u","v": "v","w": "w","x": "x","y": "y","z": "z","1": "𝟣","2": "𝟤","3": "𝟥","4": "𝟦","5": "𝟧","6": "𝟨","7": "𝟩","8": "𝟪","9": "𝟫","0": "𝟢"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    
    String.prototype.bold_sans_serif_number = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A": "A","B": "B","C": "C","D": "D","E": "E","F": "F","G": "G","H": "H","I": "I","J": "J","K": "K","L": "L","M": "M","N": "N","O": "O","P": "P","Q": "Q","R": "R","S": "S","T": "T","U": "U","V": "V","W": "W","X": "X","Y": "Y","Z": "Z","a": "a","b": "b","c": "c","d": "d","e": "e","f": "f","g": "g","h": "h","i": "i","j": "j","k": "k","l": "l","m": "m","n": "n","o": "o","p": "p","q": "q","r": "r","s": "s","t": "t","u": "u","v": "v","w": "w","x": "x","y": "y","z": "z","1": "𝟭","2": "𝟮","3": "𝟯","4": "𝟰","5": "𝟱","6": "𝟲","7": "𝟳","8": "𝟴","9": "𝟵","0": "𝟬"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    
    String.prototype.fixed_width_numbers = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A": "A","B": "B","C": "C","D": "D","E": "E","F": "F","G": "G","H": "H","I": "I","J": "J","K": "K","L": "L","M": "M","N": "N","O": "O","P": "P","Q": "Q","R": "R","S": "S","T": "T","U": "U","V": "V","W": "W","X": "X","Y": "Y","Z": "Z","a": "a","b": "b","c": "c","d": "d","e": "e","f": "f","g": "g","h": "h","i": "i","j": "j","k": "k","l": "l","m": "m","n": "n","o": "o","p": "p","q": "q","r": "r","s": "s","t": "t","u": "u","v": "v","w": "w","x": "x","y": "y","z": "z","1": "𝟷","2": "𝟸","3": "𝟹","4": "𝟺","5": "𝟻","6": "𝟼","7": "𝟽","8": "𝟾","9": "𝟿","0": "𝟶"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    
    String.prototype.circled_numbers = function() {
        var translate_re = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890]/g;
        var translate = {"A": "A","B": "B","C": "C","D": "D","E": "E","F": "F","G": "G","H": "H","I": "I","J": "J","K": "K","L": "L","M": "M","N": "N","O": "O","P": "P","Q": "Q","R": "R","S": "S","T": "T","U": "U","V": "V","W": "W","X": "X","Y": "Y","Z": "Z","a": "a","b": "b","c": "c","d": "d","e": "e","f": "f","g": "g","h": "h","i": "i","j": "j","k": "k","l": "l","m": "m","n": "n","o": "o","p": "p","q": "q","r": "r","s": "s","t": "t","u": "u","v": "v","w": "w","x": "x","y": "y","z": "z","1": "①","2": "②","3": "③","4": "④","5": "⑤","6": "⑥","7": "⑦","8": "⑧","9": "⑨","0": "⑩"};
    
        return (this.replace(translate_re, function(match){
            return translate[match];})
        );
    };
    
    $('textarea#NormalTextarea').bind('input propertychange', function() {
        var normal = this.value;
        var font_selected = $(".font-list").children(":selected").attr("id");
    
        if (font_selected === "fancy") {
            $("textarea#FancyTextarea").val(normal.fancy())
        } else if (font_selected === "gothic"){
            $("textarea#FancyTextarea").val(normal.gothic())
        } else if (font_selected === "gothic_bold"){
            $("textarea#FancyTextarea").val(normal.gothic_bold())
        } else if (font_selected === "lined"){
            $("textarea#FancyTextarea").val(normal.lined())
        } else if (font_selected === "very_tiny"){
            $("textarea#FancyTextarea").val(normal.very_tiny())
        } else if (font_selected === "tiny"){
            $("textarea#FancyTextarea").val(normal.tiny())
        } else if (font_selected === "bold"){
            $("textarea#FancyTextarea").val(normal.bold())
        } else if (font_selected === "italic"){
            $("textarea#FancyTextarea").val(normal.italic())
        } else if (font_selected === "bold_italic"){
            $("textarea#FancyTextarea").val(normal.bold_italic())
        } else if (font_selected === "underline"){
            $("textarea#FancyTextarea").val(normal.underline())
        } else if (font_selected === "cursive"){
            $("textarea#FancyTextarea").val(normal.cursive())
        } else if (font_selected === "cursive_bold"){
            $("textarea#FancyTextarea").val(normal.cursive_bold())
        } else if (font_selected === "blade"){
            $("textarea#FancyTextarea").val(normal.blade())
        } else if (font_selected === "squared"){
            $("textarea#FancyTextarea").val(normal.squared())
        } else if (font_selected === "rounded"){
            $("textarea#FancyTextarea").val(normal.rounded())
        } else if (font_selected === "full_square"){
            $("textarea#FancyTextarea").val(normal.full_square())
        } else if (font_selected === "wingdings"){
            $("textarea#FancyTextarea").val(normal.wingdings())
        } else if (font_selected === "fixed_width_symbols"){
            $("textarea#FancyTextarea").val(normal.fixed_width_symbols())
        } else if (font_selected === "sans_serif_symbols"){
            $("textarea#FancyTextarea").val(normal.sans_serif_symbols())
        } else if (font_selected === "bold_sans_serif_symbols"){
            $("textarea#FancyTextarea").val(normal.bold_sans_serif_symbols())
        } else if (font_selected === "bold_numbers"){
            $("textarea#FancyTextarea").val(normal.bold_numbers())
        } else if (font_selected === "double_bar_numbers"){
            $("textarea#FancyTextarea").val(normal.double_bar_numbers())
        } else if (font_selected === "numbers_sans_serif"){
            $("textarea#FancyTextarea").val(normal.numbers_sans_serif())
        } else if (font_selected === "bold_sans_serif_number"){
            $("textarea#FancyTextarea").val(normal.bold_sans_serif_number())
        } else if (font_selected === "fixed_width_numbers"){
            $("textarea#FancyTextarea").val(normal.fixed_width_numbers())
        } else if (font_selected === "circled_numbers"){
            $("textarea#FancyTextarea").val(normal.circled_numbers())
        } else {
            $("textarea#FancyTextarea").val(normal)
        }
    });
    
    $(".font-list").change(function() {
        var normal = $('textarea#NormalTextarea').val();
        var font_selected = $(".font-list").children(":selected").attr("id");
    
        if (font_selected === "fancy") {
            $("textarea#FancyTextarea").val(normal.fancy())
        } else if (font_selected === "gothic"){
            $("textarea#FancyTextarea").val(normal.gothic())
        } else if (font_selected === "gothic_bold"){
            $("textarea#FancyTextarea").val(normal.gothic_bold())
        } else if (font_selected === "lined"){
            $("textarea#FancyTextarea").val(normal.lined())
        } else if (font_selected === "very_tiny"){
            $("textarea#FancyTextarea").val(normal.very_tiny())
        } else if (font_selected === "tiny"){
            $("textarea#FancyTextarea").val(normal.tiny())
        } else if (font_selected === "bold"){
            $("textarea#FancyTextarea").val(normal.bold())
        } else if (font_selected === "italic"){
            $("textarea#FancyTextarea").val(normal.italic())
        } else if (font_selected === "bold_italic"){
            $("textarea#FancyTextarea").val(normal.bold_italic())
        } else if (font_selected === "underline"){
            $("textarea#FancyTextarea").val(normal.underline())
        } else if (font_selected === "cursive"){
            $("textarea#FancyTextarea").val(normal.cursive())
        } else if (font_selected === "cursive_bold"){
            $("textarea#FancyTextarea").val(normal.cursive_bold())
        } else if (font_selected === "blade"){
            $("textarea#FancyTextarea").val(normal.blade())
        } else if (font_selected === "squared"){
            $("textarea#FancyTextarea").val(normal.squared())
        } else if (font_selected === "rounded"){
            $("textarea#FancyTextarea").val(normal.rounded())
        } else if (font_selected === "full_square"){
            $("textarea#FancyTextarea").val(normal.full_square())
        } else if (font_selected === "wingdings"){
            $("textarea#FancyTextarea").val(normal.wingdings())
        } else if (font_selected === "fixed_width_symbols"){
            $("textarea#FancyTextarea").val(normal.fixed_width_symbols())
        } else if (font_selected === "sans_serif_symbols"){
            $("textarea#FancyTextarea").val(normal.sans_serif_symbols())
        } else if (font_selected === "bold_sans_serif_symbols"){
            $("textarea#FancyTextarea").val(normal.bold_sans_serif_symbols())
        } else if (font_selected === "bold_numbers"){
            $("textarea#FancyTextarea").val(normal.bold_numbers())
        } else if (font_selected === "double_bar_numbers"){
            $("textarea#FancyTextarea").val(normal.double_bar_numbers())
        } else if (font_selected === "numbers_sans_serif"){
            $("textarea#FancyTextarea").val(normal.numbers_sans_serif())
        } else if (font_selected === "bold_sans_serif_number"){
            $("textarea#FancyTextarea").val(normal.bold_sans_serif_number())
        } else if (font_selected === "fixed_width_numbers"){
            $("textarea#FancyTextarea").val(normal.fixed_width_numbers())
        } else if (font_selected === "circled_numbers"){
            $("textarea#FancyTextarea").val(normal.circled_numbers())
        } else {
            $("textarea#FancyTextarea").val(normal)
        }
    });
    
  return (
    <div>
      <div class={`container h-75 d-flex justify-content-center main-content bg-${props.mode=='light'?'light':'dark'}`}>
  <div class="mt-auto mb-6">
    <div class="row text-center">
      <div class="col">
        <div class="jumbotron bg-dark mt-5 p-4" style={{height: "auto",width: "auto"}}  id="main-content">
<h1 className='text-white'>Explore Our Fancy Text Generator</h1>
          <div class="row text-center">
            <div class="col">
              <select class="form-control form-control-lg font-list">
                <option id="fancy">𝙵𝚊𝚗𝚌𝚢</option>
                <option id="gothic">𝔊𝔬𝔱𝔥𝔦𝔠</option>
                <option id="gothic_bold">𝕲𝖔𝖙𝖍𝖎𝖈 𝕭𝖔𝖑𝖉</option>
                <option id="lined">𝕃𝕚𝕟𝕖𝕕</option>
                <option id="very_tiny">ⱽᵉʳʸ ᵀⁱⁿʸ</option>
                <option id="tiny">ᴛɪɴʏ</option>
                <option id="bold">𝐁𝐨𝐥𝐝</option>
                <option id="italic">𝘐𝘵𝘢𝘭𝘪𝘤</option>
                <option id="bold_italic">𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘</option>
                <option id="underline">U̲n̲d̲e̲r̲l̲i̲n̲e̲</option>
                <option id="cursive">𝒞𝓊𝓇𝓈𝒾𝓋𝑒</option>
                <option id="cursive_bold">𝓒𝓾𝓻𝓼𝓲𝓿𝓮 𝓑𝓸𝓵𝓭</option>
                <option id="blade">ᗷᒪᗩᗪE</option>
                <option id="squared">🅂🅀🅄🄰🅁🄴🄳</option>
                <option id="rounded">Ⓡⓞⓤⓝⓓⓔⓓ</option>
                <option id="full_square">🅵🆄🅻🅻 🆂🆀🆄🅰🆁🅴</option>
                <option id="wingdings">Wingdings: 🕈︎♓︎■︎♑︎♎︎♓︎■︎♑︎⬧︎</option>
                <option id="fixed_width_symbols">𝙵𝚒𝚡𝚎𝚍 𝚆𝚒𝚍𝚝𝚑 𝚂𝚢𝚖𝚋𝚘𝚕𝚜</option>
                <option id="sans_serif_symbols">𝖲𝖺𝗇𝗌-𝗌𝖾𝗋𝗂𝖿 𝖲𝗒𝗆𝖻𝗈𝗅𝗌</option>
                <option id="bold_sans_serif_symbols">𝗕𝗼𝗹𝗱 𝗦𝗮𝗻𝘀-𝘀𝗲𝗿𝗶𝗳 𝗦𝘆𝗺𝗯𝗼𝗹𝘀</option>
                <option id="bold_numbers">Bold Numbers: 𝟏 𝟐 𝟑</option>
                <option id="double_bar_numbers">Double Bar Numbers: 𝟙 𝟚 𝟛</option>
                <option id="numbers_sans_serif">Numbers Sans-serif: 𝟣 𝟤 𝟥</option>
                <option id="bold_sans_serif_number">Bold Sans-serif Number: 𝟭 𝟮 𝟯</option>
                <option id="fixed_width_numbers">Fixed Width Numbers: 𝟷 𝟸 𝟹</option>
                <option id="circled_numbers">Circled Numbers: ① ② ③</option>
              </select>
              <form style={{width: "50vw"}}>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Normal Text</label>
                  <textarea class="form-control" id="NormalTextarea" placeholder="Normal text here…" rows="5"></textarea>
                </div>
              </form>
              <form style={{width: "50vw"}}>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Fancy Text</label>
                  <textarea class="form-control" id="FancyTextarea" placeholder="Fancy text here…" rows="5" readonly></textarea>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</div>
    </div>
  )
}
