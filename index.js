// Write your solution in this file!
const driver ={};

function updateDriverWithKeyAndValue(obj, key, value) {
  let obj2 = {...obj};
  obj2[key] = value;
  return obj2;
}


function destructivelyUpdateDriverWithKeyAndValue (obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(driver, key){
  let temp = {...driver}
  delete temp[key];
  return temp ;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
