const printForecast = function(arr){
    let text = '';
    for (let i = 0; i < arr.length; i++) {
    text+= '... ' +  arr[i] + '°C in ' + [i +1] + ' days '        
    }
    console.log(text);
}

const data1 = [17, 21, 23]
console.log(printForecast(data1));