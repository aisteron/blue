import '../sass/style.sass'

if(document.querySelector('ul.gallery'))
{
	let li = document.querySelectorAll('ul.gallery li');
	li.forEach((e)=>{
		e.addEventListener("click", replace)
	})


	function replace() {
		document.querySelector('.main').setAttribute("src", this.querySelector('img').getAttribute('src'))
	}
}
