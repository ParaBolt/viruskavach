(function()
{
	window.addEventListener('load', main, { once : true });

	function main()
	{
		let form = document.forms.contactForm;
		let messageNode = document.querySelector('.message');
		document.forms.contactForm.addEventListener('submit', sendEmail);

		async function sendEmail(event)
		{
			event.preventDefault();

			try
			{
				await fetch('/sendEmail.php',
				{
					method  : 'POST',
					body    : JSON.stringify(Object.fromEntries(new FormData(form))),
					headers : 
					{
						'Content-Type': 'application/json; charset=utf-8'
					}
				});
				form.reset();
				messageNode.classList.add('success');
				messageNode.textContent = 'Your message has been sent successfully. We shall reach out to you shortly.';
			}

			catch (e)
			{
				messageNode.classList.add('error');
				messageNode.textContent = 'There was an error sending your message. Please try again later.';
				console.error(e);
			}
		}
	}
})();