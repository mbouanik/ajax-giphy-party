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
    try{
        const res = await axios.get(`http://api.giphy.com/v1/gifs/random`, 
        {
            params:{
                api_key:"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
                tag:input.val()
            }
        })
        const url = res.data.data.images.downsized_large.url
        $(`<img src=${url}/>`).appendTo(section)
        input.val("")
    }catch(e){
       alert(`ERROR Cant't find image`) 
       console.log(e)
    }
   
}