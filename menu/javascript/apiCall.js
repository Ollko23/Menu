export default async (type, data) => {
    console.log(data)
    let JSON_URL = "https://doubtful-dove-cowboy-hat.cyclic.app/meals"
    let options = {
        method: type,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    switch (type) {
        case "DELETE":
            JSON_URL = `${JSON_URL}/${data}`
            break;
        case "POST":
            options.body = JSON.stringify(data)
            break;
        case "PUT":
            JSON_URL = `${JSON_URL}/${data.objectId}`
            options.body = JSON.stringify({ newDate: data.newDate })
            break;
    }

    try {
        const response = await fetch(JSON_URL, options)
        console.log(response)
        if (!response.ok) {
            throw new Error('Error occurred while fetching data');
        }
        const responseData = await response.json();
        return responseData
    } catch (err) {
        console.log(err)
    }

}