var dataObj = [];
var allDist = [];

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
                    terrain: data[3]
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
            debugger;
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