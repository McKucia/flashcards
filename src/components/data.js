var flashcadsData = [];

const prepare = (j) => {
    let definition = j.list[0].definition.split('[').join('')
    definition = definition.split(']').join('')
    let example = j.list[0].example.split('[').join('')
    example = example.split(']').join('')

    const res = {
        id: Math.random(),
        definition: definition,
        example: example
    };
    flashcadsData.push(res);
}

const translate = (term) => {
    fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${term}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "27ca0ec2b1msh49e039631e8e821p153ed3jsnfe9376c0d8ba",
            "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
        }
    })
        .then(function (serverPromise) {
            serverPromise.json()
                .then(function(j) { prepare(j) })
                .catch(function (e) {
                    console.log(e);
                });
        })
        .catch(function (e) {
            console.log(e);
        });
}

export { flashcadsData, translate };