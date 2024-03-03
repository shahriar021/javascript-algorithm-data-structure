

const powerOfTwo=(n)=>{
    let i=Math.random()*10;
    console.log(i)
    let x=Math.pow(i,2);
    if(n==(x)){
        return true;
    }
}
console.log(powerOfTwo(2))