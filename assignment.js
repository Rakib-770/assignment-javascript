//Task_1: Kilometer To Meter

function kilometerToMeter(kilo){
    meter = kilo * 1000;
    return meter;
}


//Task_2: Budget Calculator

function budgetCalculator(watch, phone, laptop){
    watchTotal = watch * 50;
    phoneTotal = phone * 100;
    laptopTotal = laptop * 500;
    total = watchTotal + phoneTotal + laptopTotal;
    return total;
}

//Task_3: Hotel Cost

function hotelCost(days){
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


//Task_4: Mega Friend

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