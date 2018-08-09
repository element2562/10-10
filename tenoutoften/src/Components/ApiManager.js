const Api = Object.create({}, {
    getFromExternalApi: {
        value: (userInput) => {
            return fetch(`https://api-endpoint.igdb.com/games/?search=${userInput}&fields=*`,
        {
            headers: {
                "Accept": "application/json",
                "user-key": "2750d5751b2f06d5df178cc7bd62c077"
            }
        }
        )
        }
    },
    addGameToLibrary: {
        value: (gameId, userId, name, picture, summary, rating) => {
            return fetch("http://localhost:5002/games", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    gameNumber: gameId,
                    userId: userId,
                    name: name,
                    picture: picture,
                    summary: summary,
                    rating: rating
                })
            })
            .then(e => e.json);
        }
    },
    addNewUser: {
        value: (username, password) => {
            return fetch("http://localhost:5002/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            .then(e => e.json())
        }
    },
    getUsers: {
        value: (username) => {
            return fetch(`http://localhost:5002/users?username=${username}`)
            .then(e => e.json())
        }
    },
    getGames: {
        value: (user) => {
            return fetch(`http://localhost:5002/users/${user}/games`)
            .then(e => e.json())
        }
    },
    deleteGame: {
        value: (id) => {
            console.log(id);
            
            return fetch(`http://localhost:5002/games/${id}`, {
                method: "DELETE"
            })
        }
    },
    addRating: {
        value: (id, rating, comment) => {
            return fetch(`http://localhost:5002/games/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Access-Control-Allow-Methods": "GET, PUT, POST, PATCH, OPTIONS"
                },
                body: JSON.stringify({
                    yourRating: rating,
                    comment: comment
                })
            })
            // .then(e => e.json())
        }
    }
    // searchThroughLibrary: {
    //     value: (id, search) => {
    //         return fetch(`http://localhost:5002/games/${id}/q=${search}`)
    //         .then(e => e.json())
    //     }
    // }
})
export default Api;