const h1 = document.querySelector('h1');
const button = document.querySelector('button');
button.addEventListener('click',
        async function () {
                const btc = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
                h1.innerText=btc.data.bitcoin.usd;

        })
