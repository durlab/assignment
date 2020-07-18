// feet to mile conversion

function feetToMile(feet)
{
    if(feet<0) 
    return "This is invalid value";
    
    else
    var mile = feet/5280;
    return mile;
}

console.log(feetToMile(7000));

// wood calculation

function woodCalculator(chair,table,bed)
{
    if(chair<0 || table<0 || bed<0) return "Your input is invalid";
    
    else
    var chairCount = chair*1;
    var tableCount = table*3;
    var bedCount = bed*5;
    totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}

console.log(woodCalculator(6,9,6))


// brick Calculation

function brickCalculator(floorNum)
{
    if(floorNum<0) return "Building floor can't be negative ";

    else
    {
        if (floorNum>0 && floorNum<=10)
    {
        brickCount = floorNum*15*1000;
    }
    else if(floorNum>10 && floorNum<=20)
    {
        brickCount = 10*15*1000+(floorNum-10)*12*1000;
    }
    else if (floorNum>20)
    {
        brickCount = 10*15*1000+10*12*1000+(floorNum-20)*10*1000;
    }
    return brickCount;
    }

}

console.log(brickCalculator(21));

// find smallest name of friends

function tinyFriend(names)
{
        var newArray = names.sort(function(a,b){
            return a.length - b.length;
        })
    
        var smallName = newArray[0];
        return smallName;
}
var names = ['kawser','alam','amit','zillur','raj']
console.log(tinyFriend(names))
