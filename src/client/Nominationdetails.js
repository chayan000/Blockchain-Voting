function Nominationdetails() {
    let list = [];
    let array=[];   
    
    
    async function test() {
        let arr1 = ['aadhar', 'name', 'age', 'partyname', 'hasverified']
        const nominationcount = await window.contract2.methods.nominationcount().call();
        for (var i = 0; i < nominationcount; i++) {
            const x = await window.contract2.methods.getcandidate(i).call();
            list[i] = Object.values(x);
            const obj = {};
            arr1.forEach((element, index) => {
                obj[element] = list[i][index];
            });
            array.push(obj);
        }
    } 
    test();
    console.log(array)
    return(array);
}
export default Nominationdetails