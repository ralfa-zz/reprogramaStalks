let chart04 = document.getElementById("chart-turma-05-01").getContext('2d');
let chart05 = document.getElementById("chart-turma-05-02").getContext('2d');
let chart06 = document.getElementById("chart-turma-05-03").getContext('2d');


let myChart04 = new Chart(chart04, {
    type: 'horizontalBar',
    data: {
        labels: ["HTML", "CSS/Sass/SCSS", "Bootstrap", "Javascript", "Jquery", "React", "UX"],
        datasets: [{
            data: [5, 11, 4, 8, 0, 1, 0],
            backgroundColor: [
                'rgba(91, 231, 161, 0.9)',
                'rgba(91, 231, 161, 0.9)',
                'rgba(91, 231, 161, 0.9)',
                'rgba(91, 231, 161, 0.9)',
                'rgba(91, 231, 161, 0.9)',
                'rgba(91, 231, 161, 0.9)',
                'rgba(91, 231, 161, 0.9)',
                'rgba(91, 231, 161, 0.9)'
            ],
            borderWidth: 0
        }]
    },
    options: {

    }
});

let myChart05 = new Chart(chart05, {
    type: 'doughnut',
    data: {
        // labels: [Procurando trabalho em TI", "Estudando TI"],
        datasets: [{
            data: [75, 25],
            backgroundColor: [
                'rgba(91, 231, 161, 0.9)',
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
        cutoutPercentage: 88
    }
});

let myChart06 = new Chart(chart06, {
    type: 'doughnut',
    data: {
        // labels: ["Front end", "Full Stack", "UX", "Continua estudando", "Back end"],
        datasets: [{
            data: [33, 20, 14.5, 10, 1.5],
            backgroundColor: [
                'rgba(91, 231, 161, 0.9)',
                'rgba(126, 73, 157, 0.6)',
                'rgba(91, 231, 161, 0.6)',
                'rgba(179, 130, 186, 0.6)',
                'rgba(91, 231, 161, 0.3)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        cutoutPercentage: 88
    }
});
