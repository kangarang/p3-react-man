const help = {
  saved: "",
  savedTwoWithInitials: [],
  save: (dataObj) => {
    const fetchSettings = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(dataObj)
    }
    const url = "https://react-man.firebaseio.com/non-user-high-scores.json"
    return fetch(url, fetchSettings);
  },
  saveToUser: (dataObj, uid) => {
    const fetchSettings = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(dataObj)
    }
    const url = `https://react-man.firebaseio.com/users/${uid}/high-scores.json`
    return fetch(url, fetchSettings);
  },
  delete: (dataObj, user) => {
    const fetchSettings = {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(dataObj, user)
    }
    const url = "https://react-man.firebaseio.com/non-user-high-scores.json"
    return fetch(url, fetchSettings)
  },
  saveAnObj: (saveObj) => {
    help.saved = saveObj
    return help.saved
  },
  saveInitials: (saveObj) => {
    help.savedTwoWithInitials.push(saveObj)
    return help.savedTwoWithInitials
  },
  grabObj: () => {
    return help.saved
  },
  showAll: () => {
    const url = "https://react-man.firebaseio.com/non-user-high-scores.json?print=pretty"
    return fetch(url)
  },
  showAllUser: (uid) => {
    const url = `https://react-man.firebaseio.com/users/${uid}/high-scores.json?print=pretty`
    return fetch(url, uid)
  }
}

module.exports = help
