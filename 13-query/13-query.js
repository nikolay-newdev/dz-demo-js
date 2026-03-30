const objectSample = {
  search: "Вася",
  take: 10,
};

function getString(obj) {
  let res = [];
  for (let key in obj) {
    res.push(key + "=" + obj[key]);
  }
  return res.join("&");
}

console.log(getString(objectSample));
