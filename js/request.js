
const axios = require('axios')

const url = 'http://89.108.64.67:3000'
const key = '?key=adjf989f89981045789sdf'

const dbRequest = {
	getList: () => axios.get(url + '/orders' + key),

	getOrderById: (address) => axios.get(url + address + key),

	editOrderById: (address, orderData) => axios.put(url + address + key, orderData),

	createOrder: (orderData) => axios.post(url + '/order' + key, orderData),

	deleteOrderById: (address) => axios.delete(url + address + key),

	reinit: () => axios.post(url + '/reinit/' + key),

	generate: (number) => axios.post(url + `/generate/${number}` + key)

}

export default dbRequest


// Получить все заказы
// GET /orders

// Получить заказ по ID
// GET /order/:id

// Создать новый заказ
// POST /order body

// Изменить заказ
// PUT /order/:id body

// Удалить заказ
// DELETE /order/:id

// Сброс базы данных
// POST /reinit