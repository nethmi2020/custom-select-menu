const wrapper= document.querySelector(".wrapper");
selectBtn=wrapper.querySelector(".select-btn");
options=wrapper.querySelector(".options");

let countries=[

    "Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
    "Belarus",
	"Belgium",
	"Belize",
	"Benin",
    "Cambodia",
	"Cameroon",
	"Canada",
    "Djibouti",
	"Dominica",
]

function addCountry(){
    countries.forEach(country=>{
        let li =`<li>${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();
selectBtn.addEventListener("click", () =>{
    wrapper.classList.toggle("active");
});
