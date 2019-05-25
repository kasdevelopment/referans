var dataObj = [];
var allDist = [];

$(document).ready(function(){
    var ctx = document.getElementById('myChart').getContext('2d');
    var data = [5,27,1];
    var labels = ["Ankara", "Eskişehir", "Zonguldak"];
    var name = "örnek"
    createDummyChart(ctx,data,labels,name);
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
});


$( "#districts" ).change(function() {
    let district = $(this).val();
    fillCity(district);
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


function createDummyChart(ctx, data, labels ,name){
    // var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
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
