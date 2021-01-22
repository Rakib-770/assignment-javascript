// https://github.com/Rakib-770/assignment-javascript



//Function_1: Kilometer To Meter

function kilometerToMeter(kilo){

    if(kilo<0){
        meter = "Distance can not be negative.";
        return meter;
    }
    else{
        meter = kilo * 1000;
        return meter;
    } 
}
console.log(meter);




//Function_2: Budget Calculator

function budgetCalculator(watch, phone, laptop){

    if(watch<0 || phone<0 || laptop<0){
        total = "Please insert a positive value";
        return total;
    }
    else{
        watchTotal = watch * 50;
        phoneTotal = phone * 100;
        laptopTotal = laptop * 500;
        total = watchTotal + phoneTotal + laptopTotal;
        return total;
    }  
}
console.log(total);




//Function_3: Hotel Cost

function hotelCost(days){

    if(days<0){
        totalCost = "Please insert a positive value";
    }
    else{
        if (days <=10){
            cost = 100;
            totalCost = days * cost;
        }
        else if(days >10 && days <=20) {
            cost = 80;
            totalCost = (days * cost) +200;
            
        }
        else{
            cost = 50;
            totalCost = (days * cost) +800;
        }
        
        return totalCost;
    }   
}
console.log(totalCost);




//Function_4: Mega Friend

function megaFriend(array){
    maximum = array[0];
    for(var i = 0; i < array.length; i++){
    var element = array[i];
    if(element > maximum){
        maximum = element;
        }
    }
        return maximum;
}
console.log(maximum);