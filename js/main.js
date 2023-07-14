window.addEventListener('DOMContentLoaded', () => {
    const PRODUCTS = [
        {
            product: 'Espada de 1 mano',
            price: 40000
        },
        {
            product: 'Espada de 1 1/2 mano',
            price: 55000
        },
        {
            product: 'Hacha de 2 manos',
            price: 52000
        },
        {
            product: 'Alabarda',
            price: 62000
        }
    ]
    const getUserName = () => {
        let userName = prompt('¡Hola! ¿Cuál es tu nombre?')
        while (!(userName !== '')) {
            alert('Por favor ingrese un nombre.')
            userName = prompt('¡Hola! ¿Cuál es tu nombre?')
        }
        return userName
    }
    const getProduct = () => {
        let product = parseInt(prompt(`
            ¡Hola ${userName}! Elija entre una de las siguientes opciones de compra: \n 
            1. Espada de 1 mano \n
            2. Espada de 1 1/2 mano \n
            3. Hacha de 2 manos \n
            4. Alabarda
        `))
        while (!(product >= 1 && product <= 4)) {
            alert('La opción elegida no es válida.')
            product = parseInt(prompt(`
                ¡Hola ${userName}! Elegí entre una de las siguientes opciones de compra: \n 
                1. Espada de 1 mano \n
                2. Espada de 1 1/2 mano \n
                3. Hacha de 2 manos \n
                4. Alabarda
            `))
        }
        return product
    }
    const getSaleQuantity = (index) => {
        let quantity = parseInt(prompt(`¿Cuántas unidades de '${PRODUCTS[index].product}' desea comprar?`))
        while (isNaN(quantity) || quantity <= 0) {
            alert('Ingrese un número mayor a 0.')
            quantity = parseInt(prompt(`¿Cuántas unidades de '${PRODUCTS[index].product}' desea comprar?`))
        }
        return quantity
    }
    const userName = getUserName()
    let initiliaze = confirm('¿Desea realizar una compra?')
    while(initiliaze) {
        if (userName) {
            const product = getProduct()
            alert(`El precio del producto elegido es $${PRODUCTS[product - 1].price.toFixed(2)} `)
            const quantity = getSaleQuantity(product - 1)
            alert(`
                ¡Felicitaciones! Su compra de ${quantity} '${PRODUCTS[product - 1].product}' ha finalizado. \n
                El costo total de su compra es $${(PRODUCTS[product - 1].price * quantity).toFixed(2)}
            `)
        }
        initiliaze = confirm('¿Desea seguir comprando?')
    }
    alert('¡Muchas gracias por haber realizado la compra con nosotros!')
})