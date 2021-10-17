// Chart for 2nd dose % across age ranges in Australia 
const renderAusChart = (data) => {
    let ctx = document.querySelector('.ausChart');
    let delayed;
    let ausChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['> 16', '> 50', '> 70'],
            datasets: [{
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            animation: {
                onComplete: () => {
                delayed = true;
                },
                delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
                },
            },
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        color: 'white'
                    }
                },
                title: {
                    display: true,
                    text: 'Second Dose % Across Age Ranges — Australia',
                    color: 'white',
                    font: {
                        size: 18
                    }
                }
            },
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true,    
                    ticks: {
                        color: 'white',
                        font: {
                            size: 15
                        }
                    }     
                },
                x: {
                    max: 100,
                    ticks: {
                        color: 'white',
                        font: {
                            size: 15
                        }
                    }    
                }
            }
        }
    });
}

// Chart for 2nd dose % across age ranges in selected region/state  
const renderStateChart = (data, stateName) => {
    var ctx = document.querySelector('.stateChart');
    var delayed;
    var stateChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['> 16', '> 50', '> 70'],
            datasets: [{
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            animation: {
                onComplete: () => {
                delayed = true;
                },
                delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
                },
            },
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        color: 'white'
                    }
                },
                title: {
                    display: true,
                    text: 'Second Dose % Across Age Ranges — ' + stateName, 
                    color: 'white',
                    font: {
                        size: 18
                    }
                }
            },
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true,    
                    ticks: {
                        color: 'white',
                        font: {
                            size: 15
                        }
                    }     
                },
                x: {
                    max: 100,
                    ticks: {
                        color: 'white',
                        font: {
                            size: 15
                        }
                    }    
                }
            }
        }
    });
}