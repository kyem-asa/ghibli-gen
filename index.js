fetch("https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      // document.querySelector('img').src = data.message
    })
    .catch(err => {
        console.log(`error ${err}`)
    });