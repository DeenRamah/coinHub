const chart = document.getElementById('chart');
const ctx = chart.getContext('2d');

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
const currencyOptions = document.getElementById('currency');
const startingPriceInput = document.getElementById('startingPrice');
const buyButton = document.getElementById('buy');
const sellButton = document.getElementById('sell');

let currency = 'USD';
let prices = [];

function generatePrices(currency, startingPrice, count) {
    prices = [];
    prices.push(startingPrice);

    for (let i = 1; i < count; i++) {
        prices.push(
            Math.round(
                startingPrice +
                Math.random() * 50 -
                Math.random() * 50
            )
        );
    }
}

function drawChart() {
    const data = {
        labels: Array.from({ length: prices.length }, (_, i) => i + 1),
        datasets: [{
            label: currency,
            data: prices,
            borderColor: colors[colors.length - 1],
            backgroundColor: colors[colors.length - 1],
            fill: false
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Time (minutes)'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Price'
                    },
                    suggestedMin: 2456,
                    suggestedMax: 2556
                }
            }
        }
    };

    new Chart(ctx, config);
}

currencyOptions.addEventListener('change', (event) => {
    currency = event.target.value;
    generatePrices(currency, parseFloat(startingPriceInput.value), 250);
    drawChart();
});

startingPriceInput.addEventListener('input', ()