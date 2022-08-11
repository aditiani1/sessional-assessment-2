const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
xhr.onload = () => {
    const response = JSON.parse(xhr.responseText);
    // console.log(response)

    let template = '';
    for (let i=0; i<response.length; i++) {
        template += `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${response[i].thumbnailUrl}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${response[i].title}</h5>
            </div>
        </div>`;
    }

    document.querySelector("#photo-container").innerHTML = template
}
//4. request sent
xhr.send();



document.querySelector(".go-to-top").addEventListener('click', ()=>{
    window.scrollTo(0,0);
})
