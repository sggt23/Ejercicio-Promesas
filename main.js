const divProductos = document.getElementById("divProductos");
const alertError = document.getElementById("alertError");
const URL ="https://fakestoreapi.com/products/"

function getData(){
  fetch(URL)
  .then((response)=>{
    console.log(response);
    response.json().then((res)=>{
      createCards(res);
    });
  }).catch((error)=>{
    alertError.innerText=`Problema al traer la información ${error}`
    alertError.style.display="block"
  });
};

function createCards(res){
  res.forEach((res)=> {
    divProductos.insertAdjacentHTML("beforeend", `
      <div class="card border-dark mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${res.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${res.title}</h5>
        <p class="card-text">${res.description}</p>
        <p class="card-text"><small class="text-body-secondary"> $ ${res.price} USD</small></p>
        <p class="card-tetx"><small class="text-body-category"> Category: ${res.category}</small></p>
        </div>
    </div>
  </div>
</div>`)
  });
}

getData();




        
        
            