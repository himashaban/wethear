let firstimage= document.getElementById('fimage');

let rowData=document.getElementById('rowData');
let searchInput = document.getElementById("searchInput");
let searchValue='';
 function searching(){
    searchInput.addEventListener("focusout",  function() {
       searchValue =   searchInput.value;
       console.log(searchValue);
       FetchApi();
    });
}

async function FetchApi(){
searching();
  if (!searchValue) return; // Don't make API call if search value is empty
  let response = await fetch(
    `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=ff94301c6f6a4fc7b1d8a6c95a755c2d`
  );
  
    let data = await response.json();
    console.log(data);
     
    for (let i=0;i<data.articles.length;i++){
      let articel=data.articles[i]; 
      const colDiv=document.createElement('div');
      colDiv.className='col-md-4 col-12';
      const cardDiv=document.createElement('div');
      cardDiv.className='cart';
      cardDiv.style.width = "300px";
      cardDiv.style.height = "330px";
      const cardBody=document.createElement('div');
      cardBody.className='card-body';
      const publisher= document.createElement('p');
      publisher.className='col-12 text-muted fw-light fst-italic ';
      publisher.textContent = "made by " + articel.author;
      rowData.classList.add('align-items-center');
       const title=document.createElement('h4');
       title.className='card-title text-black';
       title.textContent=articel.title.substring(0,30);
       const content = document.createElement("p");
       content.style.color='black'
       content.textContent = articel.content.substring(0,70); 
       const articalImage=document.createElement('img');
       articalImage.className=' w-100 rounded-2';
       articalImage.style.width='300px';
       articalImage.src = articel.urlToImage;
       articalImage.onerror=function(){
        this.src='images/alaska.jpg'
       }

const rowLine = document.createElement("div");
rowLine.style.borderBottom = "1px solid black "; // Bootstrap's default border color
rowLine.style.marginBottom = "1rem";



      rowData.appendChild(colDiv);
      colDiv.appendChild(cardDiv);
      cardDiv.appendChild(cardBody);

      cardBody.appendChild(articalImage);
      cardBody.appendChild(title);
      cardBody.appendChild(content);
            cardBody.appendChild(publisher);
            

             colDiv.appendChild(rowLine);




    }

    
    
}






FetchApi();

