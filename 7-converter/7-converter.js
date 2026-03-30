function converter(money, in_cur, out_cur) {
    const rubToUsd = 60;
    const rubToEur = 90;
    const rubToPound = 100;

    switch(true) { 
        case (in_cur == 'rub' && out_cur == 'usd'):
            return money / rubToUsd;
        case (in_cur == 'usd' && out_cur == 'rub'):
            return money / (1 / rubToUsd);    
        
        case (in_cur == 'rub' && out_cur == 'eur'):
            return money / rubToEur;
        case (in_cur == 'eur' && out_cur == 'rub'):
            return money / (1 / rubToEur); 
        
        case (in_cur == 'rub' && out_cur == 'pound'):
            return money / rubToPound;
        case (in_cur == 'pound' && out_cur == 'rub'):
            return money / (1 / rubToPound); 
        default:
            return null;
    }

}

console.log(converter(6000, 'eur', 'rub'))
console.log(converter(6000, 'rub', 'eur'))


console.log(converter(6000, 'usd', 'rub'))
console.log(converter(6000, 'rub', 'usd'))

console.log(converter(6000, 'pound', 'rub'))
console.log(converter(6000, 'rub', 'pound'))

console.log(converter(6000, 'dirham', 'rub'))