const firstDatas =
  '[{"username":"ali","hair_color":"brown","height":1.2},{"username":"marc","hair_color":"blue","height":1.4},{"username": "joe","hair_color":"brown","height":1.7},{"username":"zehua","hair_color":"black","height":1.8}]';

const changeData = (firstDatas) => {
  const secondDatas = JSON.parse(firstDatas); //change data to object
  const finalDatas = secondDatas.reduce((acc, cur) => {
    acc["h"] = Object.keys(cur); //returns an array of a given object's own enumerable property names
    acc["d"] = acc["d"] || [];
    acc["d"].push(Object.values(cur)); //returns an array of a given object's own enumerable property values
    return acc;
  }, {});
  return finalDatas;
};
var fixDatas = changeData(firstDatas);
console.log(fixDatas);
