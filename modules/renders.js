

import { montoTotal, contenedorProductos, contenedorSliders, cantidadTotal, printCarrito } from '../modules/selectors.js';

import { borrarItem, montoTotalProductos, indicadorCantidad, mensajeCarroVacio, carritoProductos, cambiarCantidad } from '../modules/functions.js';


export const renderizarProductos = (data) => {
    contenedorProductos.innerHTML = '';

    data.forEach((item) => {
        if (item.stock >= 0) { // Verifica si el stock es mayor o igual a cero
            let plataformaClass = 'bg-secondary';
            let plataformaIcon = '<i class="bi bi-windows"></i>';

            if (item.plataforma === 'XBOX ONE') {
                plataformaClass = 'bg-success';
                plataformaIcon = '<i class="bi bi-xbox"></i>';
            } else if (item.plataforma === 'PS4') {
                plataformaClass = 'bg-primary';
                plataformaIcon = '<i class="bi bi-playstation"></i>';
            }

            contenedorProductos.innerHTML += `
                <div class="col-12 col-md-4 mb-3 mt-3 mr-3 ml-3 text-center">
                    <div class="card">
                        <div class="card-header ${plataformaClass} h5">
                            ${plataformaIcon} ${item.plataforma}
                        </div>
                        <img src="${item.portada}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h4 class="card-title">${item.titulo}</h4>
                            <p class="stock-disponible" id="stock-${item.id}">${item.stock} un. disponibles</p>
                            <p class="card-text h4">$<span>${item.precio}</span></p>
                        </div>
                        <div class="card-footer">
                            <button id="${item.id}" class="btn btn-secondary">
                                <i class="bi bi-cart-plus-fill"></i> Agregar al carrito
                            </button>
                        </div>
                    </div>
                </div>`;
        }
    });
};


export const renderizarSliders = (data) => {
    data.forEach((item) => {
        contenedorSliders.innerHTML += `<div class="carousel-item">
    <img src="${item.slider}" class="imagen-slider d-block w-100" title="${item.titulo}">
    <div class="carousel-caption d-none d-md-block">
        <div class="texto-slider"><h1 class="titulo-slider">${item.titulo}</h1>
        <p class="descripcion-slider">${item.descripcion}</p>
        </div>
        <div class="fondo-slider">
        </div>
    </div>
</div>`;
    })
};


export const renderizarCarrito = () => {
    printCarrito.innerHTML = '';
    montoTotal.innerHTML = '';
    cantidadTotal.innerHTML = '';

    const carritoFiltrado = carritoProductos.filter(item => item.stock >= 0);

    carritoFiltrado.forEach(item => {
        const precioCantidad = item.precio * item.cantidad;

        printCarrito.innerHTML += `
            <tr>
                <th scope="row"><img src=${item.portada} width="90rem"></th>
                <td>${item.titulo}</td>
                <td>$${item.precio}</td>
                <td>
                    <div class="d-flex col-sm">
                        <span class="cantidad-item">
                            <button class="btn-cantidad btn-restar btn btn-secondary" id="${item.id}" type="button">-</button>
                        </span>
                        <input type="text" id="item-cant-${item.id}" class="form-control form-cant p-1" value="${item.cantidad}" min="1" max="${item.stock}">
                        <span class="cantidad-item">
                            <button class="btn-cantidad btn-sumar btn btn-secondary" id="${item.id}" type="button">+</button>
                        </span>
                    </div>
                </td>
                <td>$${precioCantidad}</td>
                <td><button id="${item.id}" type="button" class="btn-borrar btn btn-default"><i class="bi bi-trash"></i></button></td>
            </tr>`;
    });

    borrarItem();
    montoTotal.innerHTML = `$${montoTotalProductos()}`;
    indicadorCantidad();
    mensajeCarroVacio();
    cambiarCantidad();
};