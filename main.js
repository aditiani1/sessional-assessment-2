const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
xhr.onload= function(){
    const response = JSON.parse(xhr.responseText);
    console.log(response)

}
//4. request sent
xhr.send();