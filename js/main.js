document.querySelector('button').addEventListener('click', getNasaData)

function getNasaData(){
  const date = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=5l9BDqblpjmdm0yg0SG27nQr6HTTh8BlXoXYg9A5&date=${date}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector("#title").innerText = data.title
        document.querySelector("#expl").innerText = data.explanation

          if (data.media_type == "video"){
            document.querySelector("iframe").src = data.url
            document.getElementById("image").classList.add('hidden')
          }
          else if (data.media_type == "image"){
          document.querySelector("img").src = data.hdurl
          document.getElementById("videoFrame").classList.add('hidden')}

      })
      .catch(err => {
          console.log(`error ${err}`)
      })
}

