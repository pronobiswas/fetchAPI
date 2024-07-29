//<<<<<<<<<<<<<dataFetching>>>>>>>>>>>>>>

let demo = document.getElementById("demo")

async function fetcher (){
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const myData =await data.json()
    console.log(myData);
    return myData
    
}
fetcher();


async function displayData(){
    const xxx = await fetcher();
    console.log(typeof(xxx));
    xxx.forEach(item => {
        console.log(typeof(item));
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h2');
        title.textContent = item.title;

        const body = document.createElement('p');
        body.textContent = item.body;

        demo.appendChild(card);
        card.appendChild(title);
        card.appendChild(body);
        
    });

}
displayData()



console.log("i am form fetcher function");