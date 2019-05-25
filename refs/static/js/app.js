var dataObj = [];
var allDist = [];

$(document).ready(function(){
    console.log("ready!");

    
    demoData.forEach(function(data){
        if(allDist.indexOf(data[1]) === -1){
            allDist.push(data[1]);
            $('#districts').append(`<option>${data[1]}</option>`);
        } 
    });

    demoData.forEach(function(data){
        // let index = dataObj.findIndex(obj => obj.district_name === data.district_name);
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