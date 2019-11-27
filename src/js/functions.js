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
