(function()
{
	window.addEventListener('load', main, { once : true });

	function main()
	{
		[...document.querySelectorAll('.svg')].forEach(node => {
			fetch(node.dataset.src).then(response => response.text()).then(svg => {
				node.innerHTML = svg;
			});
		});

		document.getElementById('menu-toggle').onclick = () => document.body.classList.add('expanded');
		document.getElementById('menu').onclick = () => document.body.classList.remove('expanded');
	}
})();