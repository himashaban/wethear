async function fecthapi(){
    
    let response = await fetch("https://api.unsplash.com/search/photos?page=1&query=office",{
        headers:{
           Authorization: 'Client-ID Z9f-7oth_rNKyw7qh1tHUCtnY_TcNxhRY0VAj5CJ4-M'
        }
    });
    let data= await response.json();
    console.log(data.results[0].links.download)
}
fecthapi();