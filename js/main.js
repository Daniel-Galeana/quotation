const cpasnia = document.getElementById('cpasnia');
const Btnsend = document.getElementById('Btnsend');
const cotInput = document.getElementById('cotInput');
const btn_limpiar = document.getElementById('btn_limpiar');
const btnSearch = document.getElementById('btnSearch');
let st = [];

$(document).ready(function () {
    $('#mdlLog').modal('show');
});

Btnsend.addEventListener('click', () => {
    let valPas = cpasnia.value;
    if(valPas == ''){
        $('#mdlLog').modal('hide');
    }else{
        SAlertToast('top-end', '3000', 'error', 'Error en las credenciales');
    };
});

btnSearch.addEventListener('click', () => {
    if(cotInput.value != ''){
        cotizar(cotInput.value);
    }
});

cotInput.addEventListener('keyup', (e) => {
    if(e.keyCode == 13){
        if(cotInput.value != ''){
            cotizar(cotInput.value);
        }
    };
});

btn_limpiar.addEventListener('click', () => {
    $('#containerTab').addClass('d-none');
    $('#GA').text('');
    $('#GAPercent').text('');
    $('#GAT').text('');
    $('#cotInput').val('');
});

const cotizar = (c) => {
    let _c = parseInt(c);
    let _ga = parseInt(((Math.pow(6, 3)) - 16) + 20);
    let _g = 0.85;
    let pb = parseInt(Math.round((_c + _ga) / _g));
    let _gaT = pb - (_c + _ga);
    $('#GA').text('Gastos adicionales: $' +_ga);
    $('#GAPercent').text('Precio: $' +pb);
    $('#GAT').text('Ganancia: $' +_gaT);
    $('#containerTab').removeClass('d-none');
  };