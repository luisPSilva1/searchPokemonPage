var formulario = document.querySelector('form')

formulario.addEventListener('submit', function (e) {

    //Bloqueia o refresh da página
    e.preventDefault()

    //Url da pesquisa
    let urlForm = "https://pokeapi.co/api/v2/pokemon/";

    //Valor do input name
    let name = document.getElementById('name')

    //Concatena a url com o input name
    urlForm = urlForm + name.value

    //Transformar os valores em minúsculas
    urlForm = urlForm.toLocaleLowerCase()

    //ID content
    let response = document.getElementById('content')

    //ID imgPokemon
    let image = document.getElementById('imgPokemon')

    //Resposta em HTML
    let html = ''

    fetch(urlForm)
        .then(response => response.json())
        .then(function (data) {
            console.log(data)
            html = 'Name ' + upper(data.name) + '<br>'
            html = html + 'Type: ' + upper(data.types[0].type.name)
            response.innerHTML = html

            image.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
        })
        .catch(function (err) {
            if (err.message.includes('GET https://pokeapi.co/api/v2/pokemon/m 404 (Not Found)')) {
                html = 'Pokemon not found';
            }
        });

})

function upper(val) {
    return val[0].toUpperCase() + val.substr(1)
}