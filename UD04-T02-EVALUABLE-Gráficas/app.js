window.addEventListener("load", iniciar,false);

function iniciar(){
  
  
    const grafica1 = document.getElementById('myChart');
    const grafica2 = document.getElementById('myChart2');
    const grafica3 = document.getElementById('myChart3');
    const grafica4 = document.getElementById('myChart4');
    const grafica5 = document.getElementById('myChart5');
    const grafica6 = document.getElementById('myChart6');



  crearGrafica(grafica1,"line",{
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    datasets: [{
        label: 'Ganancias',
        data: [2,5,3,2,6,5,6,3,4,2,5,4],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
  },{
    plugins: {
      title: {
        display: true,
        text: 'Gráfico lineal de las ganancias mensuales',
        color: 'red',
      },
      subtitle: {
        display: true,
        text: 'por las inscripciones en los eventos de running del año 2022.',
        color: 'red',
      }
    }  
  })



  crearGrafica(grafica4,"pie",{
    labels: ['5K', '10K', '21K', '42K'],
    datasets: [{
        label: 'Participacion',
        data: [2500,3200,2600,1200],
        borderColor: 'white',
        tension: 0.1,
        backgroundColor: ["red", "green", "blue", "purple"]
      }]
  },{
    plugins: {
      title: {
        display: true,
        text: 'Gráfico de rosco o tarta con los inscritos ',
        color: 'red',
        
      },
      subtitle: {
        display: true,
        text: 'en las siguientes categorías: 5K, 10K, 21K, 42K',
        color: 'red',
      }
    }  
  })

  let mapa = [{'5K':2500},{'10K':3200}, {'21K':2600}, {'42K':1200}]


  let rankingOrdenado = Object.keys(mapa).sort().reduce(function (result, key) {
    result[key] = mapa[key];
    return result;
  }, {});


  console.log(rankingOrdenado)

  crearGrafica(grafica5,"bar",{
    labels: ['5K', '10K', '21K', '42K'],
    datasets: [{
        label: 'Participacion',
        data: [2500,3200,2600,1200].sort().reverse(),
        borderColor: 'white',
        tension: 0.1,
        backgroundColor: ["red", "green", "blue", "purple"]
      }]
  },{
    indexAxis: 'y',
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Gráfico de lineas horizontales con el ranking',
        color: 'rgb(141, 244, 213)',
        
      },
      subtitle: {
        display: true,
        text: 'de eventos con más inscritos del 2022.',
        color: 'rgb(141, 244, 213);',
      }
    }  
  })







}


function crearGrafica(grafica,type,data,options){
  new Chart(grafica, {
    type: type,
    data: data,
    options: options
  });
}




