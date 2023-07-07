export default async (type, data) => {
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
    }

    try {
        const response = await fetch(JSON_URL, options)
        if (!response.ok) {
            throw new Error('Error occurred while fetching data');
        }
    } catch (err) {
        console.log(err)
    }

}