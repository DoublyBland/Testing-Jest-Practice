function max(array) {
    let max = array[0];
    for(let i = 0;i<array.length;i++) { 
        if(max< array[i+1]){
            max = array[i+1];
        }
    }
    return max;
}

function min(array) {
    let min = array[0];
    for(let i = 0;i<array.length;i++) { 
        if(min> array[i+1]){
            min = array[i+1];
        }
    }
    return min;
}

function average(array) {
    let total = 0;
    for(i=0;i<array.length;i++){
        total += array[i];
    }
    let average = total/array.length;
    return average;
}

function analyzeArray(array) {
    let analysis = {
        average: "",
        min: "",
        max: "",
        length: ""
    };

    analysis.length = array.length;
    analysis.max = max(array);
    analysis.min = min(array);
    analysis.average = average(array);

    return analysis;
}


module.exports = analyzeArray