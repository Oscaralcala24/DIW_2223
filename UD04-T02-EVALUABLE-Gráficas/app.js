window.addEventListener("load", iniciar,false);

function iniciar(){
    const grafica1 = document.getElementById('myChart');

    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
            label: 'Ganancias',
            data: [2,5,3,2,6,5,6,3,4,2,5,4],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
      };
      

    new Chart(grafica1, {
        type: 'line',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Gráfico lineal de las ganancias mensuales'
                }
            },
          scales: {
            y: {
              beginAtZero: true
            }
          },
        }
        
      });
}