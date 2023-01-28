function ludu(min,max){
    return Math.floor(Math.random()*(max-min+1) ) + min;
}
document.getElementById("demo").innerHTML= ludu(1,6);

let text;
function leapYear(year){
    
    if(year%4==0 || year%100!=0 && year%400==0){
        return "is a leap year";
    }
    else{
        return "is not a leap year";
    }
}
text = leapYear(2044);
document.getElementById("demo2").innerHTML = text;

function vowelCount(sentence){
    let vowel=["a","e","i","o","u","A","E","I","O","U"];
    let letters = Array.from(sentence),i,j;
    let count=0;
    for(i=0;i<letters.length;i++){

        for(j=0;j<vowel.length;j++) {
            if(letters[i]==vowel[j]){
                count++;
            }
        }
    }
    console.log(count);
    return count;

}

document.getElementById("demo101").innerHTML=vowelCount("1 2 3 I hate JavaScript Language");