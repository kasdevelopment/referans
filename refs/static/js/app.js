var dataObj = [];
var allDist = [];
var districtChart = undefined;

$(document).ready(function(){
    demoData.forEach(function(data){
        if(allDist.indexOf(data[1]) === -1){
            allDist.push(data[1]);
            $('#districts').append(`<option>${data[1]}</option>`);
        }
    });
    fillCity($('#districts').val());
    
    demoData.forEach(function(data){
        dataObj.push(
                {
                    id: data[0], 
                    district_name: data[1], 
                    city: data[2],
                    terrain: data[3],
                    mer_gun_sayac_okuma_adedi: data[4],
                    mer_en_okuma_personel_sayisi: data[5],
                    kir_gun_sayac_okuma_adedi: data[6],
                    kir_en_okuma_personel_sayisi: data[7],
                    mer_saha_gunluk_osos_okuma_adedi: data[8],
                    mer_saha_osos_en_okuma_personel_sayisi: data[9],
                    kir_saha_gunluk_osos_okuma_adedi: data[10],
                    kir_saha_osos_en_okuma_personel_sayisi: data[11],
                    mer_en_okuma_personel_sayisi_2: data[12],
                    kir_en_okuma_personel_sayisi_2: data[13],
                    top_en_okuma_personel_sayisi: data[14],
                    top_en_okuma_arac_sayisi: data[15],
                    top_en_okuma_akaryakit_iht_lt: data[16]
                }
            );
    });
    let theDistrict = new District("myChart", 1, $("#districts").val(), dataObj);
    debugger;
    districtChart = createChart(theDistrict.ctx, theDistrict.calculateData()[0], theDistrict.calculateData()[1]);

});


$( "#districts" ).change(function() {
    let district = $(this).val();
    fillCity(district);
    let theDistrict = new District("myChart", 1, $("#districts").val(), dataObj);
    removeAndUpdate(districtChart, theDistrict.calculateData()[0], theDistrict.calculateData()[1])
  });

  $( "#city" ).change(function() {
    let district = $("#districts").val();
    let city = $(this).val();
    fillTerrain(district, city);
  });

function fillTerrain(district, city){
    let setTerrain = [];
    $('#terrain').empty();
    demoData.forEach(function(data){
        if(setTerrain.indexOf(data[3]) === -1 && district == data[1] && city === data[2]){
            setTerrain.push(data[3]);
            $('#terrain').append(`<option>${data[3]}</option>`);
        }
    });
}

function fillCity(district){
    let setCity = [];
    $('#city').empty();
    demoData.forEach(function(data){
        if(setCity.indexOf(data[2]) === -1 && district === data[1]){
            setCity.push(data[2]);
            $('#city').append(`<option>${data[2]}</option>`);
        }
    });
    fillTerrain(district, $('#city').val());
}

// chart js conf

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ','  + '0.5)';
}

function createChart(ctx , mylabels, mydata) {
    let colors = [];
    mylabels.forEach(function(elem){
        colors.push(random_rgba());
    });
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: mylabels,
        datasets: [{
            label: 'İller',
            data: mydata,
            borderWidth: 1,
            backgroundColor: colors
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend:{
            display: false
        },
        title:{
            display: true,
            position: 'top',
            text: 'Merkez Günlük Sayaç Okuma Adedi'
        }
    }
});
return myChart;
}

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

function removeAndUpdate(chart, newLabel, newData){
    let len = chart.data.datasets[0].data.length;
    for(let i= 0; i<len; i++){
        removeData(chart);
    }
    let newLen = newLabel.length;
    for(let i= 0; i<newLen; i++){
        addData(chart, newLabel[i], newData[i]);
    }
}