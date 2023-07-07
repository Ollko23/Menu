export default async (method, data) => {
    let URL = "https://doubtful-dove-cowboy-hat.cyclic.app/menu"

    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        }
    }
    switch (method) {
        case "DELETE":
            URL = `${URL}/${data}`
            break;
        case "POST":
            options.body = JSON.stringify(data)
            break;
        case "PUT":
            options.body = JSON.stringify(data)


    }
    try {
        const response = await fetch(URL, options)
        if (!response.ok) throw Error("Error")
        if (response.ok) console.log(method + " OK")
        const responseData = await response.json();
        return responseData
    }
    catch (err) {
        console.log(err.message)
    }

}