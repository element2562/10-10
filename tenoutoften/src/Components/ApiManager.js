const Api = Object.create({}, {
    getFromExternalApi: {
        value: (userInput) => {
            return fetch(`https://api-endpoint.igdb.com/games/?search=${userInput}&fields=*`,
        {
            headers: {
                "Accept": "application/json",
                "user-key": "f792b01bdf9418339f6fe379cef472dc"
            }
        }
        )
        }
    },
    addGameToLibrary: {
        value: (userId, name, picture, summary) => {
            return fetch("http://localhost:5002/games", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    userId: userId,
                    name: name,
                    picture: picture,
                    summary: summary
                })
            })
            .then(e => e.json);
        }
    }
})
export default Api;