fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json()) // parse response as JSON
    .then(data => {console.log(data)

      document.querySelector('.mainContent__btn').addEventListener('click', function(){
        
     
      let currentMovie = Math.floor(Math.random() * data.length)

      console.log(currentMovie)
      // // console.log(data[Math.floor(Math.random() * data.length)].image)
      // // document.querySelector('img').src = data.message
      document.querySelector('.mainContent__subheading').innerText = data[currentMovie].title;
      document.querySelector('img').src = data[currentMovie].image;
      document.querySelector('.mainContent__bodyText').innerText = data[currentMovie].description;
    })

    .catch(err => {
        console.log(`error ${err}`)
    });
  })