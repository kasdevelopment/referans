class District {
    constructor(chartID, level, district, dataSetArr) {
        this.ctx = document.getElementById(chartID).getContext('2d');
        this.level = level;
        this.district = district;
        this.data = dataSetArr.filter(data => data.district_name === district);
    }

    calculateData(){
        let labels =[];
        let nums = [];
        this.data.forEach(function(elem){
        let index = labels.indexOf(elem.city);
        if(index === -1){
            labels.push(elem.city);
            nums.push(parseFloat(elem.mer_gun_sayac_okuma_adedi));
        } else {
            nums[index] = parseFloat(nums[index]) + parseFloat(elem.mer_gun_sayac_okuma_adedi);
        }
    });
        return [labels, nums];
    }
    // Adding a method to the constructor
    
}