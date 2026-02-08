let addressLat = 6; //X - назначение
let addressLong = 7; //Y - назначение
let positionLat = 2; //X - отправление
let positionLong = 4; //Y - отправление

let distance = ((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2) ** 0.5 

console.log(`расстояние от текущего месторасположения до назначения = ${distance}`)