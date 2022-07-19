fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      // console.log(data[Math.floor(Math.random() * data.length)].image)
      // document.querySelector('img').src = data.message
      document.querySelector('.mainContent__subheading').innerText = data[Math.floor(Math.random() * data.length)].title

      document.querySelector('img').src = data[0].image;
    })

    .catch(err => {
        console.log(`error ${err}`)
    });