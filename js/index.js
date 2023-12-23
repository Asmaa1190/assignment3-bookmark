var siteNameInput = document.getElementById('siteName')
var siteUrlInput = document.getElementById('siteUrl')
var btn = document.getElementById('btn')
var visSite = []
if (localStorage.getItem("mySites") != null) {
    visSite  = JSON.parse(localStorage.getItem("mySites"))
    display()
}
btn.onclick = function () {
    visit()
    clearSite()
    // notMatch()
}
function visit() {
  
        var sites = {
            siteVisit:siteNameInput.value,
            urlVisit:siteUrlInput.value
        }
        visSite.push(sites)
        localStorage.setItem("mySites", JSON.stringify(visSite))
        display()
    }
  
   
function display() {
    var box = '';
    for (var i = 0 ; i < visSite.length ; i++){
        box += `  <tr>
                           <td>${i + 1}</td>
                           <td>${visSite[i].siteVisit}</td>
                           <td><button class="btn btn-info px-4" onclick="openWidow(${i})"><i class="fa-regular fa-eye"></i> Visit</button></td>
                           <td><button class="btn btn-danger px-4"onclick="deleteItem(${i})"><i class="fa-solid fa-trash"></i> Delete</button></td>

                  </tr>`

                 
    }
    tableRow.innerHTML = box
}
function clearSite(){
    siteNameInput.value='';
    siteUrlInput.value=''

}
function deleteItem(index) {
    visSite.splice(index, 1)
    localStorage.setItem("mySites", JSON.stringify(visSite))
    display()
}
function nameRegex(){
    var Regex = /^[A-Z][a-z]{2,8}$/
   if(Regex.test(siteNameInput.value)==true) {
    siteNameInput.classList.add("is-valid")
    siteNameInput.classList.remove("is-invalid")
   }
   else{
    siteNameInput.classList.add("is-invalid")
    siteNameInput.classList.remove("is-valid")
   }
}
function siteRegex(){
    var regexSite=/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
    if(regexSite.test(siteUrlInput.value)==true){
        siteUrlInput.classList.add("is-valid")
        siteUrlInput.classList.remove("is-invalid")
    }
    else{
        siteUrlInput.classList.add("is-invalid")
        siteUrlInput.classList.remove("is-valid")
    }
    }
    function openWidow(index){
        window.open(index,"_blank")
    }
    function notMatch(){
        if(siteRegex()!==true){
            alert("url not valid,name must contain 3 chart")
        }
    }
