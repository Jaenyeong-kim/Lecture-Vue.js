import Chart from 'chart.js'

export default {
    install(Vue) {
        // console.log('installed');
        // Vue.prototype.logText = () => console.log('hi');
        Vue.prototype.$_Chart = Chart;
    }
}

// function Vue() {
//     this.data = '';
//     this.methods = '';
//     this.created = '';
//     this.logText = () => {

//     }
// }