import React from 'react'

function Api() {
    function fetchData() {
        const api = document.getElementById(api)
        const URL = "https://doubtful-dove-cowboy-hat.cyclic.app/   "
        fetch(URL).then(response => {
            response.ok ? response.json() : new Error("Request failed")
        }).then(data => console.log(data))
        // let data = 
        // api.innerText = data
    }

    return (
        <div><button onClick={fetchData}>Click</button><p id="api"></p></div>
    )
}

export default Api