var count=100;

while(count>=0){

    if (count!==0){
    console.log(count+" bottles on the wall, "+count+" bottles of beer. Take 1 down, pass it around, "+(count-1)+" bottles of beer on the wall.");
    }
    else{
        console.log("No bottles on the wall, no bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
    count--;
}