//Aside Navbar

const nav=document.querySelector(".nav"),
navList=nav.querySelectorAll("li"),
totalNavList=navList.length;

for(let i=0; i<totalNavList;i++){
	const a=navList[i].querySelector("a");
	a.addEventListener("click", function(){
		console.log(this);
	})
}
