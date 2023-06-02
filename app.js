console.log("Let's get this party started!");
const section = $('#giphys')
const btn = $('#remove').on('click', ()=> section.children().remove())
const input = $('#giphy-name')

const form = $('#form')

form.on('submit', (evt) => {
    evt.preventDefault()
    getGiphy()
})

async function getGiphy(){
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${input.val()}`, {params:{api_key:"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}})
    console.log(res.data.data)
    const {url} = res.data.data[parseInt(Math.random() * 12)].images.downsized_large
    $(`<img src=${url}/>`).appendTo(section)
    input.val("")

}