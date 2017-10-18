Vue.component('search', {
    template: '<div class="uk-container uk-container-small" id="app"><form class="uk-form-stacked uk-margin-medium-top" uk-grid><fieldset class="uk-fieldset uk-width-1-2@m uk-align-center"><div class="uk-margin"><label class="uk-form-label">Zip Code</label><input class="uk-input uk-form-width-small" type="text" v-model="zipCode"><button class="uk-button uk-button-primary uk-margin-left" v-on:click.native="searchByZip">Search</button></div></fieldset></form></div>',
    props: {
        zipCode: {
            type: String,
            default: ''
        }
    },
    methods: {
        searchByZip: function () {
            // this needs to call a third-party API method that returns data
            // trouble finding a free API that returns historical weather data
            // parse data then pass it to line-chart component
            return;
        }
    }
});

Vue.component('line-chart', {
    extends: VueChartJs.Line,
    mounted() {
        this.renderChart({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
            datasets: [
                {
                    label: 'Rainfall (in)',
                    backgroundColor: '#407899',
                    data: [10, 60, 39, 29, 19, 60, 23, 43, 10, 38]
                },
                {
                    label: 'Temperature (°F)',
                    backgroundColor: '#41D3BD',
                    data: [10, 20, 30, 50, 90, 80, 70, 80, 70, 60]
                }
            ]
        }, {
            responsive: true,
            maintainAspectRatio: false
        })
    }
});

var app = new Vue({
    el: "#app",
    data: {
        zip: ''
    }
});