// 获取节点
const currencyEL_one = document.getElementById('currency-one');
const amountEL_one = document.getElementById('amount-one');
const currencyEL_two = document.getElementById('currency-two');
const amountEL_two = document.getElementById('amount-two');
const swap = document.getElementById('swap');
const rateEL = document.getElementById('rate')

//获取汇率并实现dom节点更新
function calculate() {
    const currency_one=currencyEL_one.value;
    const currency_two=currencyEL_two.value;
/*    console.log(currency_one,currency_two);*/

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`).then(res=>
    res.json().then(data=>{
        const rate=data.rates[currency_two];
        rateEL.innerText=`1${currency_one}=${rate}${currency_two}`;
        amountEL_two.value=(amountEL_one.value * rate).toFixed(2);
    }));
}


// 事件监听
currencyEL_one.addEventListener('change',calculate);
amountEL_one.addEventListener('input',calculate);
currencyEL_two.addEventListener('change',calculate);
amountEL_two.addEventListener('input',calculate);

swap.addEventListener('click',()=>{
    const temp=currencyEL_one.value;
    currencyEL_one.value=currencyEL_two.value;
    currencyEL_two.value=temp;
    calculate();
})
calculate();