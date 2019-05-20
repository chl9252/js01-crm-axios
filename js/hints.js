import dbRequest from './request.js'
main()

function main () {
	const reinit = document.getElementById("reinit-btn")
	reinit.addEventListener('click', async function(event) {
		event.stopPropagation()
		await dbRequest.reinit()
		location.replace('index.html')
	})
}
