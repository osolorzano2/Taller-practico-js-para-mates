const inputCoupon = document.querySelector('#coupon')
const inputPrice = document.querySelector('#price');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result')

btn.addEventListener('click', calcularPrecioConDescuento);

// const arrayUObjeto = undefined;

function calcularPrecioConDescuento() {

    const price=Number(inputPrice.value);
    const coupon=inputCoupon.value;
    if(!price||!coupon) {
        pResult.innerText='CHANCLA por favor llena el formulario';
        return;
    }
    let discount;
    
    switch (coupon) {
        case 'descuento1':
            discount = 30;
            break;
        case 'descuento2':
            discount = 25;
            break
        default:
            pResult.innerText='El cupon no es válido';
            return;
    }

    // if (coupon == 'descuento1') {
    //     discount = 30;
    // } else if (coupon == 'descuento2') {
    //     discount = 25;
    // } else {
    //     pResult.innerText='El cupon no es válido';
    //     return;
    // }

    console.log({price,discount})
    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}