const help = {
  makeArray: (arr, stateObj) => {
    for (let key in stateObj) {
      if (stateObj.hasOwnProperty(key)) {
        arr.push(stateObj[key]);
      }
    }
    return arr
  }
}

module.exports = help
