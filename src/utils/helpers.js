export default {

    save: (dataObj) => {
        const fetchSettings = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(dataObj)
        }
        const url = "https://react-man.firebaseio.com/high-scores.json"
        return fetch(url, fetchSettings);
    },

    delete: (deleteID) => {
        const fetchSettings = {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }
        const url = `https://react-man.firebaseio.com/high-scores/${deleteID}.json`
        return fetch(url, fetchSettings)
    },

    showAll: () => {
        const url = "https://react-man.firebaseio.com/high-scores.json?print=pretty"
        return fetch(url)
    }

}
