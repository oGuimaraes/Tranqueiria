export const compararAaZ = (a, b)=> {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
}
export const compararZaA = (a, b)=> {
    return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
}
export const compararBrand = (a, b)=> {
    return a.brand.toLowerCase().localeCompare(b.name.toLowerCase());
}
export const compararCategory = (a, b)=> {
    return a.category.toLowerCase().localeCompare(b.category.toLowerCase());
}
export const compararPriceBaA = (a,b) =>{
    if(parseFloat(a.price)<parseFloat(b.price))
        return -1
    else if(parseFloat(a.price)>parseFloat(b.price))
        return 1
    return 0
}
export const compararPriceAaB = (a,b) =>{
    if(parseFloat(a.price)>parseFloat(b.price))
        return -1
    else if(parseFloat(a.price)<parseFloat(b.price))
        return 1
    return 0
}
export const compararColor = (a,b) =>{
    if(parseInt(colourNameToHex(a.color),16)<parseInt(colourNameToHex(b.color),16))
        return -1
    else if(parseInt(colourNameToHex(a.color),16)>parseInt(colourNameToHex(b.color),16))
        return 1
    return 0
}
export const colourNameToHex = (colour) =>{
    var colours = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
    "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887",
    "cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff",
    "darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
    "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1",
    "darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff",
    "firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff",
    "gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","grey":"#808080","green":"#008000","greenyellow":"#adff2f",
    "honeydew":"#f0fff0","hotpink":"#ff69b4",
    "indianred ":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
    "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2",
    "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
    "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
    "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
    "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
    "navajowhite":"#ffdead","navy":"#000080",
    "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
    "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
    "rebeccapurple":"#663399","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
    "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4",
    "tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
    "violet":"#ee82ee",
    "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
    "yellow":"#ffff00","yellowgreen":"#9acd32","sky blue":" #87CEEB","mint green":"#98ff98"};

    if (typeof colours[colour.toLowerCase()] != 'undefined'){
        return colours[colour.toLowerCase()];
    }
    else{
        return false;
    }
}
export const btnStyle = () =>{
    return{textDecoration:'none',
    width:'100%',
    background:'none',
    margin:'5px'
    }
}
export const computeColorDistance = (color1,color2) => {
    let r1 = parseInt(color1.substring(1,3),16)
    let g1 = parseInt(color1.substring(3,5),16)
    let b1 = parseInt(color1.substring(5,7),16)
    let r2 = parseInt(color2.substring(1,3),16)
    let g2 = parseInt(color2.substring(3,5),16)
    let b2 = parseInt(color2.substring(5,7),16)
    let distance = Math.sqrt(Math.pow((r2-r1),2)+Math.pow((g2-g1),2)+Math.pow((b2-b1),2))
    let percent = (1 -(distance/Math.sqrt(Math.pow((255),2)+Math.pow((255),2)+Math.pow((255),2))))
    return percent 
}
export const ufToStateName = (uf) =>{
    var states = {"AC":"Acre","AL":"Alagoas","AP":"Amap\u00e1","AM":"Amazonas","BA":"Bahia","CE":"Cear\u00e1",
    "DF":"Distrito Federal","ES":"Esp\u00edrito Santo","GO":"Goi\u00e1s","MA":"Maranh\u00e3o","MT":"Mato Grosso",
    "MS":"Mato Grosso do Sul","MG":"Minas Gerais","PR":"Paran\u00e1","PB":"Para\u00edba","PA":"Par\u00e1","PE":"Pernambuco",
    "PI":"Piau\u00ed","RN":"Rio Grande do Norte","RS":"Rio Grande do Sul","RJ":"Rio de Janeiro","RO":"Rond\u00f4nia",
    "RR":"Roraima","SC":"Santa Catarina","SE":"Sergipe","SP":"S\u00e3o Paulo","TO":"Tocantins"}

    if(typeof states[uf]!='undefined')
        return states[uf]
    else
        return ''
}
export const getCardFlag = (cardnumber) => {
    var cardnumber = cardnumber.replace(/[^0-9]+/g, '');

    var cards = {
        visa      : /^4[0-9]{12}(?:[0-9]{3})/,
        mastercard : /^5[1-5][0-9]{14}/,
        diners    : /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
        amex      : /^3[47][0-9]{13}/,
        discover  : /^6(?:011|5[0-9]{2})[0-9]{12}/,
        jcb        : /^(?:2131|1800|35\d{3})\d{11}/        
    };

    for (var flag in cards) {
        if(cards[flag].test(cardnumber)) {
            return flag;
        }
    }        

    return false;
}