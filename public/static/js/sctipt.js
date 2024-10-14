//=====================================================================DATA======================================================================//
const maxDataPoints = 50;
const storedLabels = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
const CPUUsageData = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const DiskUsageData = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const RAMUsageData = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
//===================================================================FUNCTIONS===================================================================//
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//=====================================================================GAUGE=====================================================================//
var GaugeConfig = {
    angle: 0,
    lineWidth: 0.25,
    radiusScale: 1,
    pointer: {
        length: 0.6,
        strokeWidth: 0.035,
        color: '#000000'
    },
    limitMax: 60,
    limitMin: 50,
    colorStart: '#6FADCF',
    colorStop: '#8FC0DA',
    strokeColor: '#E0E0E0',
    generateGradient: true,
    highDpiSupport: true,
    staticLabels: {
        font: "12px sans-serif",
        labels: [0, 10, 20, 30, 40, 50, 60],
        color: "#000000",
        fractionDigits: 0
    },
    percentColors: [[0.0, "#00ff44"], [0.75, "#ffd900"], [1.0, "#ff0000"]],
    renderTicks: {
        divisions: 10,
        divWidth: 0.1,
        divLength: 1,
        divColor: '#000000',
        subDivisions: 0,
        subLength: 0,
        subWidth: 0,
        subColor: '#666666'
    }

};

var CPUTempGauge = new Gauge(document.getElementById('CPUTempGauge')).setOptions(GaugeConfig);
CPUTempGauge.maxValue = 60;
CPUTempGauge.setMinValue(0);
CPUTempGauge.animationSpeed = 128;
CPUTempGauge.set(41.5);

var RoomTempGauge = new Gauge(document.getElementById('RoomTempGauge')).setOptions(GaugeConfig);
RoomTempGauge.maxValue = 50;
RoomTempGauge.setMinValue(0);
RoomTempGauge.animationSpeed = 128;
RoomTempGauge.set(41.5);
//=====================================================================CHART=====================================================================//
const UsageChart = new Chart(document.getElementById('UsageChart').getContext('2d'), {
    type: 'line',
    data: {
        labels: [],
        datasets: [
            {
                titleColor: 'white',
                bodyColor: 'white',
                label: 'CPU Usage',
                data: [],
                borderColor: "#ff5050",
                backgroundColor: "rgba(255, 80, 80, 0)",
                borderWidth: 2,
                pointBackgroundColor: 'white',
                pointRadius: 0,
                fill: false
            },
            {
                titleColor: 'white',
                bodyColor: 'white',
                label: 'Disk Usage',
                data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                borderColor: "#007bff",
                backgroundColor: "rgba(0, 123, 255, 0)",
                borderWidth: 2,
                pointBackgroundColor: 'white',
                pointRadius: 0,
                fill: false
            }, {
                titleColor: 'white',
                bodyColor: 'white',
                label: 'RAM Usage',
                data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                borderColor: "#11ffff",
                backgroundColor: "rgba(0, 123, 255, 0)",
                borderWidth: 2,
                pointBackgroundColor: 'white',
                pointRadius: 0,
                fill: false
            }
        ]
    },
    options: {
        scales: {
            x: {
                ticks: {
                    color: 'white', // Set X-axis labels to white
                },
                grid: {
                    color: '#ffffff' // Grid lines
                }
            },
            y: {
                beginAtZero: true
            }
        },
        elements: {
            line: {
                tension: 0
            }
        },
        plugins: {
            legend: {
                display: true,
                titleColor: 'white',
                bodyColor: 'white',
                labels: {
                    color: 'white' // Set legend text color to white
                }
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function (context) {
                        return context.dataset.label + ': ' + context.raw;
                    }
                },
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: 'white',
                bodyColor: 'white'
            }
        }
    }
});
const CPUCoreChart = new Chart(document.getElementById('CPUCoreChart').getContext('2d'), {
    type: 'bar',
    data: {
        datasets: [{
            label: 'CPU Core 1',
            data: [43],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }, {
            label: 'CPU Core 2',
            data: [43],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }, {
            label: 'CPU Core 3',
            data: [43],
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }, {
            label: 'CPU Core 4',
            data: [43],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 10,
                    color: "#fff"
                }
            }
        }
    },
    plugins: {
        legend: {
            labels: {
                color: '#ffffff'
            }
        },
        title: {
            text: 'CPU Core Usage',
            color: '#ffffff',
            font: {
                size: 18
            }
        }
    }
});
//====================================================================UPDATE=====================================================================//
function fetchSystemStats() {
    fetch('/system-stats')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // Update the CPU Core Usage Bar Chart
            CPUCoreChart.data.datasets[0].data = [data.cpu_usage[0]];  // Core 1
            CPUCoreChart.data.datasets[1].data = [data.cpu_usage[1]];  // Core 2
            CPUCoreChart.data.datasets[2].data = [data.cpu_usage[2]];  // Core 3
            CPUCoreChart.data.datasets[3].data = [data.cpu_usage[3]];  // Core 4
            CPUCoreChart.update();

            // Update the line chart for CPU, Disk, and RAM usage
            const newLabel = `Label ${storedLabels.length + 1}`;
            storedLabels.push(newLabel);
            CPUUsageData.push(data.cpu_usage.reduce((a, b) => a + b, 0) / data.cpu_usage.length);  // Average CPU usage
            DiskUsageData.push(data.disk_usage);
            RAMUsageData.push(data.ram_usage);

            if (storedLabels.length > maxDataPoints) {
                storedLabels.shift();
                CPUUsageData.shift();
                DiskUsageData.shift();
                RAMUsageData.shift();
            }

            UsageChart.data.labels = storedLabels;
            UsageChart.data.datasets[0].data = CPUUsageData;  // CPU Usage
            UsageChart.data.datasets[1].data = DiskUsageData; // Disk Usage
            UsageChart.data.datasets[2].data = RAMUsageData;  // RAM Usage
            UsageChart.update();

            // Update the CPU Temperature Gauge
            if (data.cpu_temp !== null) {
                CPUTempGauge.set(data.cpu_temp);  // Set the CPU temperature gauge
            } else {
                console.error("Could not retrieve CPU temperature");
            }

            // Update Room Temperature Gauge (if available)
            RoomTempGauge.set(30);  // Static value, replace with real data if available
        })
        .catch(error => console.error('Error fetching system stats:', error));
}
setInterval(fetchSystemStats, 1000);
