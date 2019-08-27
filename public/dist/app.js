
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


function isHidden(el) {
	return (el.offsetParent === null)
}



if(isHidden(document.querySelector('.mobile-header nav')) && window.innerWidth < 600)
{

	document.querySelector('.mobile-header .openMenu').addEventListener('click', openMenu);

	function openMenu()
	{
		let nav = document.querySelector('.mobile-header nav');
		if(isHidden(nav)) {
			nav.style.display = "block"
			document.querySelector('.mobile-header .openMenu').innerHTML = '&times';
		} else{
			nav.style.display = "none";
			document.querySelector('.mobile-header .openMenu').innerHTML = '☰';
		} 

		
		
	}

}

document.addEventListener("click", function(e) {

	if(e.target.classList.value === 'openMenu') return;

	if(!isHidden(document.querySelector('.mobile-header nav')))
	{
		document.querySelector('.mobile-header nav').style.display = "none"
		document.querySelector('.mobile-header .openMenu').innerHTML = '☰';
	}
})


/*
*
* LAZY LOADING FALLBACK
*
*/

if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');

    // для изображений, у которых есть loading="lazy", 
    //мы позволяем хрому нативно его использовать, 
    //подменяя data-src на src
    
    images.forEach(img => {
    	if(img.dataset.src) {
    		img.src = img.dataset.src;
    	} else {
    		console.log('Нет класса lazyload или нет атрибута data-src')
    	}
      
    });
  } else {
    // Dynamically import the LazySizes library
    const script = document.createElement('script');
    script.src =
      '/js/lazysizes.min.js';
    document.querySelector('footer').appendChild(script);
  }