let searchBox = document.getElementById("searchBox");
let searchBtn = document.getElementById("searchBtn");
let result = document.getElementById("result");

searchBtn.addEventListener("click", ()=>{
    const cnic = ["42301678542091", "4230167345699", "4230178945563", "4230188934457"];
    const cnicFound = cnic.find((cnic) => cnic === searchBox.value);
        
    if(cnicFound){
        result.innerHTML = `Your CNIC is registered`;
        result.style.color = "green";
    }else{
        result.innerHTML = `CNIC is not Found`
        result.style.color = "red";
    }
        searchBox.value = "";
    // console.log("cnicFound" , cnicFound);
})