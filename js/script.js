var el = document.querySelectorAll(".moreInfo");

el.forEach((e) => {
  e.addEventListener("click", (me) => {
    var getTitle = me.target.parentElement.parentElement.childNodes[5].childNodes[1].textContent,
        img = me.target.parentElement.parentElement.childNodes[3].getAttribute("src");
        console.log(img);
    popMenu(getTitle, img);
  });
});


function popMenu(a, b){
  var parentElement = document.querySelector("body");
  var newElement = document.createElement("div");
  parentElement.appendChild(newElement);
  newElement.classList.add("popMenu");

  //not yet created
  newElement.innerHTML = `
      <div class="row mt-5">
        <div class="col-lg-8 offset-lg-2">
          <div class="row" style="background-color: white;">
            <div class="col-lg-6" style="margin: 0;padding: 0;">
              <img src="${b}" style="width: 100%;">
            </div>
            <div class="col-lg-6">
              <span class="close" id="closeButton">X</span>
              <br/>
              <h2>${a}</h2>
              <hr>
            </div>
          </div>
        </div>
      </div>
  `;
    
    
    //code to close the pop up menu
    
   document.querySelector("#closeButton").addEventListener("click", () => {
         parentElement.removeChild(newElement);
    });
    
}



