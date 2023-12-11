<template>
  <div class="parentDiv">
    <div class="container-fluid h-100 d-flex flex-column gap-0 text-muted pt-4">
      <div class="rowDiv w-100 d-flex flex-row gap-3 flex-wrap m-auto justify-content-around">
        <div class="rowDivChild bg-white rounded justify-content-around align-items-center gap-2 px-2 d-flex flex-wrap flex-row">
          <div class="rounded shadow-lg p-3" style="width: 48%; height: 48%">
            <h5>Total Amount</h5>
            <h6>$0</h6>
          </div>
          <div class="rounded shadow-lg p-3" style="width: 48%; height: 48%">
            <h5>Total Special Transaction's</h5>
            <h6>0</h6>
          </div>
          <div class="rounded p-3 border border-3 border-primary" style="width: 48%; height: 48%">
            <h5 class="border border-primary">Total Inbound Transaction's</h5>
            <h6 class="border border-primary">0</h6>
          </div>
          <div class="rounded shadow-lg p-3" style="width: 48%; height: 48%">
            <h5>Total Outbound Transaction's</h5>
            <h6>0</h6>
          </div>
        </div>
        <div
          class="rowDivChild bg-white m-auto text-center flex-column d-flex justify-content-center rounded shadow-lg align-items-center flex-grow-1"
        >
          <h6 class="w-100 text-start px-2 text-black"><b>Transaction Count One Week</b></h6>
          <apexChart style="width: 100%" type="line" height="87%" :options="options" :series="series"></apexChart>
        </div>
        <div class="rowDivChild bg-white rounded p-3 shadow-lg">
          <h2>Trading Partner</h2>
          <h1 class="text-center text-black display-1"><b>1</b></h1>
        </div>
      </div>
      <div class="rowDiv mt-3 w-100 d-flex flex-row flex-wrap gap-3 justify-content-around">
        <div class="rowDivChild bg-white rounded shadow-lg flex-grow-1">
          <apexChart type="area" height="100%" :options="chartOptions" :series="series1"></apexChart>
        </div>
        <div class="rowDivChild bg-white rounded shadow-lg">
          <apexChart type="rangeBar" height="100%" :options="chartOptions1" :series="series2"></apexChart>
        </div>
        <div class="rowDivChild bg-white rounded p-3 shadow-lg">
          <h2>Number of transaction for today</h2>
          <h1 class="text-center text-black display-1"><b>0</b></h1>
        </div>
      </div>
      <div class="rowDiv mt-3 w-100 d-flex flex-row flex-wrap gap-3 justify-content-around">
        <div class="rowDivChild bg-white rounded shadow-lg flex-grow-1">
          <apexChart type="line" height="100%" :options="chartOptions3" :series="series3"></apexChart>
        </div>
        <div class="rowDivChild bg-white rounded shadow-lg">
          <h6 class="text-start p-3"><b>Document Count By Tp-last-Twelve-Month</b></h6>
        </div>
        <div class="rowDivChild bg-white rounded shadow-lg">
          <h6 class="text-start p-3"><b>Document Count By Tp-One-Week</b></h6>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.parentDiv {
  height: 85vh;
  width: 100%;
}
.rowDiv {
  background-color: rgb(247, 247, 247);
  min-height: 33%;
}
.rowDivChild {
  @media screen and (max-width: 750px) {
    width: 100%;
  }
  width: 30%;
  min-height: 100%;
  max-height: 100%;
}
</style>
<script>
/* import VueApexCharts from 'vue-apexcharts'; */


export default {
  name: 'AnalyticPage',
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.commit('updatePageTitle', to.name);
    });
  },
  data() {
    return {
      options: {
        chart: {
          id: 'vuechart-example',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
      series1: [
        {
          name: 'XYZ MOTORS',
          data: [10, 120, 30, 40, 50, 60, 170, 80, 50, 60, 170, 80],
        },
      ],
      series2: [
        {
          data: [
            {
              x: '2008',
              y: [2800, 4500],
            },
            {
              x: '2009',
              y: [3200, 4100],
            },
            {
              x: '2010',
              y: [2950, 7800],
            },
            {
              x: '2011',
              y: [3000, 4600],
            },
            {
              x: '2012',
              y: [3500, 4100],
            },
            {
              x: '2013',
              y: [4500, 6500],
            },
            {
              x: '2014',
              y: [4100, 5600],
            },
          ],
        },
      ],
      series3: [
        {
          data: [40, 140, 75, 200, 179, 60, 70, 101],
        },
      ],
      chartOptions: {
        chart: {
          type: 'area',
          stacked: false,
          zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true,
          },
          toolbar: {
            autoSelected: 'zoom',
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
        },
        title: {
          text: 'Stock Price Movement',
          align: 'left',
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return (val / 1000000).toFixed(0);
            },
          },
          title: {
            text: 'Price',
          },
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2023-01-01',
            '2023-01-02',
            '2023-01-03',
            '2023-01-04',
            '2023-01-05',
            '2023-01-06',
            '2023-01-07',
            '2023-01-08',
            '2023-01-09',
            '2023-01-10',
            '2023-01-11',
            '2023-01-12',
            '2023-01-13',
          ],
        },
        tooltip: {
          shared: false,
          y: {
            formatter: function (val) {
              return (val / 1000000).toFixed(0);
            },
          },
        },
      },
      chartOptions1: {
        chart: {
          height: 350,
          type: 'rangeBar',
          zoom: {
            enabled: false,
          },
        },
        plotOptions: {
          bar: {
            isDumbbell: true,
            columnWidth: 3,
            dumbbellColors: [['#008FFB', '#00E396']],
          },
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          position: 'top',
          horizontalAlign: 'left',
          customLegendItems: ['Product A', 'Product B'],
        },
        fill: {
          type: 'gradient',
          gradient: {
            type: 'vertical',
            gradientToColors: ['#00E396'],
            inverseColors: true,
            stops: [0, 100],
          },
        },
        grid: {
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        xaxis: {
          tickPlacement: 'on',
        },
      },
      chartOptions3: {
        chart: {
          height: 350,
          type: 'line',
          id: 'areachart-2',
        },
        annotations: {
          yaxis: [
            {
              y: 8200,
              borderColor: '#00E396',
              label: {
                borderColor: '#00E396',
                style: {
                  color: '#fff',
                  background: '#00E396',
                },
                text: 'Support',
              },
            },
            {
              y: 8600,
              y2: 9000,
              borderColor: '#000',
              fillColor: '#FEB019',
              opacity: 0.2,
              label: {
                borderColor: '#333',
                style: {
                  fontSize: '10px',
                  color: '#333',
                  background: '#FEB019',
                },
                text: 'Y-axis range',
              },
            },
          ],
          xaxis: [
            {
              x: new Date('23 Nov 2017').getTime(),
              strokeDashArray: 0,
              borderColor: '#775DD0',
              label: {
                borderColor: '#775DD0',
                style: {
                  color: '#fff',
                  background: '#775DD0',
                },
                text: 'Anno Test',
              },
            },
            {
              x: new Date('26 Nov 2017').getTime(),
              x2: new Date('28 Nov 2017').getTime(),
              fillColor: '#B3F7CA',
              opacity: 0.4,
              label: {
                borderColor: '#B3F7CA',
                style: {
                  fontSize: '10px',
                  color: '#fff',
                  background: '#00E396',
                },
                offsetY: -10,
                text: 'X-axis range',
              },
            },
          ],
          points: [
            {
              x: new Date('01 Dec 2017').getTime(),
              y: 8607.55,
              marker: {
                size: 8,
                fillColor: '#fff',
                strokeColor: 'red',
                radius: 2,
                cssClass: 'apexcharts-custom-class',
              },
              label: {
                borderColor: '#FF4560',
                offsetY: 0,
                style: {
                  color: '#fff',
                  background: '#FF4560',
                },

                text: 'Point Annotation',
              },
            },
            {
              x: new Date('08 Dec 2017').getTime(),
              y: 9340.85,
              marker: {
                size: 0,
              },
            },
          ],
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'straight',
        },
        grid: {
          padding: {
            right: 30,
            left: 20,
          },
        },
        title: {
          text: 'Line with Annotations',
          align: 'left',
        },
        labels: [30, 60, 90, 120, 150, 180, 210, 240],
        xaxis: {
          type: 'datetime',
        },
      },
    };
  },
};
</script>
