//<<<<<<<<<<<<<dataFetching>>>>>>>>>>>>>>

let demo = document.getElementById("demo")

async function fetcher (){
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const myData =await data.json();
    const demodata = myData.splice(0,20)
    return demodata
    
}
fetcher();


async function displayData(){
    const xxx = await fetcher();
    console.log(xxx.length);
    


    xxx.forEach(item => {
        // console.log(item);
        
            
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
displayData();


async function myData (){
    y = await fetcher();
    console.log(y);
    for (i = 0 ; i < y.length ; i++){
        console.log("hori");
    }
};
myData()



console.log("i am form fetcher function");