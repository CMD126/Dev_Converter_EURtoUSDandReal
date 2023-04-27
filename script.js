const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit)

const inputValue = document.getElementById('value-real');
const selectCurrency = document.getElementById('currency');
const result= document.getElementById('result');
let valueConverted = 0

function handleSubmit(e) {
    e.preventDefault();

    if(!inputValue.value || inputValue.value <0){
        alert('INFORME O VALOR CORRETO !');
        return;
    } else if(!selectCurrency.value) {
        alert('ESCOLHA UMA MOEDA!');
        return
    }

    converter();
};

function converter() {
    if(selectCurrency.value === 'real'){
       valueConverted = inputValue.value * 5.49; 
        result.innerHTML = valueFormatter('pt-BR', 'BRL'); 
        animateResult();

    } else if(selectCurrency.value === 'dol'){
        valueConverted = inputValue.value * 1.10;
        result.innerHTML = valueFormatter('en-US', 'USD');

        animateResult();
    }
    

    inputValue.value = '';
    selectCurrency.value = '';

    
};

function valueFormatter(Locale, currency) {
    const value = valueConverted.toLocaleString(`${Locale}`, { style: 'currency', currency: `${currency}` });
    return `<span>🤑</span> ${value.replace('€', 'R$')} <span>🤑</span>`;
  }


function animateResult() {
    return result.animate([
        { transform: 'translateY(-150px)'},
        { transform: 'translateX(0px)'},
        ], { duration: 1000 });

}; 