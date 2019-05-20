import dbRequest from './request.js'
 
main()

function main () {

	document.querySelector('button').addEventListener('click', async function(event) {
		event.stopPropagation()
		const input = document.forms.firstForm.elements

  		let priceCop = input[2].value.replace('.', '')	
  		if(priceCop === input[2].value) {
	    	priceCop +='00'
    	}

		const newOrder = {
			good: input[1].value,
			price: priceCop,
			clientName: input[0].value,
			requestStatus: input[3].value,
			paymentStatus: input[4].value
		}

		await dbRequest.createOrder(newOrder)
		location.replace('index.html')
	})
}
