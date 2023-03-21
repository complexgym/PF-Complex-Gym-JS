// const mercadopago = require('mercadopago')
// require('dotenv').config()

// mercadopago.configure({
//     access_token: process.env.ACCESS_TOKEN_MP
// })

// /**
//  *
//  * @param {{title:string, unit_price: number, quantity: number}[]} items
//  */
// const postPaymentsMP = async (items)=>{
//     try {
//         if(items.length === 0) throw Error('items vacios')
//         let preference = {
//             items: items,
//             back_urls: {
//                 "success": "http://localhost:3001/payments/feedback",
//                 "failure": "http://localhost:3001/payments/feedback",
//                 "pending": "http://localhost:3001/payments/feedback"
//             },
//             auto_return: "approved",
//         }
//         const response = await mercadopago.preferences.create(preference)
//         const preferenceId = response.body.id

//         return {
//             preferenceId,
//             response
//         }
//     } catch (error) {
//         return {message: 'hubo un error', error: error.message}
//     }
// }

// module.exports = postPaymentsMP
