let searchInput=document.getElementById('search');
let rowdata = document.getElementById("rowdata");
function searching(){
    searchInput.addEventListener("focusout",  function() {
       searchValue =   searchInput.value;
       console.log(searchValue);
       fecthapi();
    });
}
searching()

async function fecthapi(){
    if(!searchValue) return;
    let response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${searchValue}`,
      {
        headers: {
          Authorization:
            "Client-ID Z9f-7oth_rNKyw7qh1tHUCtnY_TcNxhRY0VAj5CJ4-M",
        },
      }
    );
    let data= await response.json();
    console.log(data.results[0].links.download)

     for (let i = 0; i < data.results.length; i++) {
        let found = data.results[i];

        let colDiv = document.createElement("div");
        colDiv.className = "col-md-3 my-2 image-container"; // Add the image-container class

        let cardDiv = document.createElement("div");
        cardDiv.className = "card";
        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        let image = document.createElement("img");
        image.className = "w-100";
        image.src = await found.links.download;

        colDiv.appendChild(cardDiv);
        cardDiv.appendChild(image);
        
        rowdata.appendChild(colDiv);
    }
}

fetchApi();