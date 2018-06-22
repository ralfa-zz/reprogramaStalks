let chart01 = document.getElementById("chart-geral-01").getContext('2d');
let chart02 = document.getElementById("chart-geral-02").getContext('2d');
let chart03 = document.getElementById("chart-geral-03").getContext('2d');

let myChart01 = new Chart(chart01, {
    type: 'doughnut',
    data: {
        //labels: ["Trabalhando com TI", "Procurando trabalho em TI", "Estudando TI", "outras áreas"],
        datasets: [{
            data: [24.3, 31.1, 17.6, 44.6],
            backgroundColor: [
                'rgba(91, 231, 161, 0.9)',
                'rgba(91, 231, 161, 0.6)',
                'rgba(91, 231, 161, 0.3)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        cutoutPercentage: 88,
        
        
    }
});

let myChart02 = new Chart(chart02, {
    type: 'doughnut',
    data: {
        // labels: ["18-25", "26-35", "36-45"],
        datasets: [{
            data: [32.4, 51.3, 16.2],
            backgroundColor: [
                'rgba(91, 231, 161, 0.9)',
                'rgba(91, 231, 161, 0.3)',
                'rgba(91, 231, 161, 0.6)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        cutoutPercentage: 82
    }
});


let myChart03 = new Chart(chart03, {
    type: 'doughnut',
    data: {
        // labels: ["Têm filhos"],
        datasets: [{
            data: [16.6, 83.6],
            backgroundColor: [
                'rgba(91, 231, 161, 0.9)'
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        cutoutPercentage: 82
    }
});

