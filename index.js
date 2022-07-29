fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json()) // parse response as JSON
    .then(data => {console.log(data)

      document.querySelector('.mainContent__btn').addEventListener('click', function(){
        
     
      let currentMovie = Math.floor(Math.random() * data.length)

      console.log(currentMovie)
      // // console.log(data[Math.floor(Math.random() * data.length)].image)
      // document.querySelector('img').src = data.message
      document.querySelector('.mainContent__subheading').innerText = data[currentMovie].title;
      document.querySelector('.mainContent__img').src = data[currentMovie].image;
      document.querySelector('.mainContent__bodyText').innerText = data[currentMovie].description;

      document.querySelector('.mainContent__img__initial').style.display = 'none'
    })

    .catch(err => {
        console.log(`error ${err}`)
    });
  })

  document.querySelector('.darkToggle').addEventListener('click', function(){
    console.log('works')
    document.querySelector('body').style.color = 'hsl(160, 100%, 99%)'
    document.querySelector('body').style.backgroundColor = '#1B1B1B'

    document.querySelector('.darkToggle').style.display = 'none'
    document.querySelector('.lightToggle').style.display = 'block'
  })

document.querySelector('.lightToggle').addEventListener('click', function(){
  document.querySelector('body').style.color = 'hsl(164, 33%, 16%)'
  document.querySelector('body').style.backgroundColor = 'hsl(160, 100%, 99%)'

  document.querySelector('.lightToggle').style.display = 'none'
  document.querySelector('.darkToggle').style.display = 'block'
})