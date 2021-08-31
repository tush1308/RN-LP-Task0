function getInput(data) {
    var myArray=[];
    var info;

    for(let i =0 ;i<data.length; i++){
        info=data[i];
        var myArr= info.split(" ");
        var name = myArr[0]+" "+myArr[1];
        var personality = parseInt(myArr[2]);
        var strength = parseInt(myArr[3]);
        var intelligence = parseInt(myArr[4]);
        var avg = ((personality+strength+intelligence)/3).toPrecision(4);
        

        var object ={      
            Name:name,
            Score :{
                Personality:personality,
                Strength: strength,
                Intelligence: intelligence
            },
            Average : avg
        }
        myArray.push(object);
    }

    myArray.sort(function (a, b){
        return b.Average - a.Average;
    });
    console.log(myArray);
}
//calling the function
getInput(["Tony Stark 10 8 10", "Star Lord 8 8 7", "Bruce Banner 10 10 10"]);