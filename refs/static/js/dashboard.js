class District {
    constructor(chartID, level, district, dataSetArr) {
        this.ctx = document.getElementById(chartID).getContext('2d');
        this.level = level;
        this.district = district;
        this.data = dataSetArr.filter(data => data.district_name === district);
        this.nums = [];
        this.labels = [];
        
    }

    calculateData(){
        this.data.forEach(function(elem){
        let index = this.labels.indexOf(elem.city);
        if(index === -1){
            this.labels.push(elem.city);
            this.nums.push(elem.mer_gun_sayac_okuma_adedi);
        } else {
            this.nums[index] += elem.mer_gun_sayac_okuma_adedi;
        }
    });
    }
    // Adding a method to the constructor
    createChart() {
    var myChart = new Chart(this.ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: name,
                data: data,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    }
}