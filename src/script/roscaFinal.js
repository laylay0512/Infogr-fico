const ctx = document.getElementById('graficoRosca').getContext('2d');

new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: ['Assédio', 'Estupro', 'Estupro de vulnerável', 'Outros'],
    datasets: [{
        data: [1.4, 46.6, 52.2, 0],
        backgroundColor: ['#F9A825', '#AED581', '#4DB6AC', '#7E57C2'],
        borderWidth: 1
    }]
    },
    options: {
    responsive: true,
    plugins: {
        legend: {
        position: 'right'
        },
        tooltip: {
        callbacks: {
            label: function(context) {
            return context.label + ': ' + context.raw + '%';
            }
        }
        }
    }
    }
});