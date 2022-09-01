const url ="https://api.themoviedb.org/3/genre/tv/list?api_key=6826c6e577e15bbff30e1a58b7082178&language=en-US";
function getPorpularFromSever () {
    return fetch (url, {
        method : "GET",
        headers : {
             "Content-type" : "application/json"
        }
    })
    .then (function (res) {
        return res.json()
    })
    .then (function (data) {
        console.log(data)
        return data
    })
    .catch (function (err) {
        console.log(err)
    })
}
getPorpularFromSever()