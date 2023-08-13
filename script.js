document.addEventListener('DOMContentLoaded', ()=>{
    const token = "iQOwVYPDexPX83Clp0183aKLrBoI77cI"
    fetch("https://api.giphy.com/v1/gifs/search?q=coding+challenges&api_key=" + token)
    .then(
        res=>res.json()
    )
    .then(data=>{
        const tile = data.data[Math.floor(Math.random() * data.data.length)]
        console.log(tile)
        document.getElementById('img').src = tile.images.original.url
        document.getElementById('title').innerText = tile.title
    })
})