function authentication(email, id) {
    let emailRes = "";
    for (let i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            break;
        } else {
            emailRes += email[i];
        }
    }
    let res = id + emailRes;
    // console.log(res);
    let res1 = "";
    for (let i = 0; i < res.length; i++) {
        if ((i+1) % 2 !== 0) {
            res1 += res[i]
        }
    }
    // console.log(res1)
    function char(res1) {
        return res1.split('').map(char => char.match(/[a-zA-Z]/) ? char.toLowerCase().charCodeAt(0) - 96 : char.match(/\d/) ? char : 1).join('');
    }
    let res2 = (char(res1));
    // console.log(res2);

    let finalRes = "";
    let left  = 0;
    let right = res2.length-1;
    while(left<=right){
        if(left===right){
            finalRes += res2[left]
        }else{
            finalRes += res2[left] + res2[right];
        }
        left++;
        right--;
    }
    return finalRes

}
let authenticationId = authentication("aditya3863297@gmail.com", "fs39_330109")




// for fetching Problems
function problem(){
    fetch(`https://questionmapping.onrender.com/api/problem/${authenticationId}`)
    .then((res)=> res.json())
    .then((data)=> console.log(data))
    .catch((err)=> console.log(err))
}
problem()