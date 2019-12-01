<template>
  <div>
    <!-- TODO: BarChart 컴포넌트화 -->
    <bar-chart v-bind:chartData="barChartData"></bar-chart>
    <!-- <canvas id="myChart" width="400" height="400"></canvas> -->
    <!-- TODO: LineChart 컴포넌트화 -->
    <line-chart></line-chart>
  </div>
</template>

<script>
// vim 단축키
// import Chart from 'chart.js';
import BarChart from "@/components/BarChart.vue";
import LineChart from "@/components/LineChart.vue";

export default {
  data() {
    return {
      barChartData: [], //12, 19, 3, 5, 2, 3
      num: 100
    };
  },
  components: {
    BarChart,
    LineChart
  },
  methods: {
    // fetchChartData() {
    // 	return new Promise((resolve, reject) => {
    // 		setTimeout(() => {
    // 			var result = [12, 19, 3, 5, 2, 3];
    // 			resolve(result);
    // 		}, 3000);
    // 	});
    // },
    fetchChartData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          var result = [12, 19, 3, 5, 2, 3];
          resolve(result);
        }, 3000);
      });
    }
  },
  created() {
    this.fetchChartData().then(data => {
      console.log("receive");
      this.barChartData = data;
    });
  },
  beforeMount() {
    // 문자열
    // '<div><canvas id="myChart" width="400" height="400"></canvas></div>';
    console.log(this);
  }
  // mounted() {
  // 	// 태그 상태
  // 	// <div>
  // 	// 	<canvas id="myChart" width="400" height="400"></canvas>
  // 	// </div>;
  // },
  // updated() {},
  // beforeDestroy() {},
};
</script>

<style></style>
