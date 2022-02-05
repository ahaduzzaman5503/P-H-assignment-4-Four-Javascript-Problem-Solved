/* ========anaToVori Problem-01 Solved============================ */
function anaToVori (ana){
    let vori = ana / 16;
    return vori;
}
let voriRasult = anaToVori(80);
console.log(voriRasult);

/* ========pandaCost Problem-02 Solved========================= */
function pandaCost(singaraQuantity, somusaQuantity, jilapiQuantity){
    let singaraPrice = 7;
    let somusaPrice = 10;
    let jilapiPrice = 15;

    let singraCost = singaraPrice * singaraQuantity;
    let somusaCost = somusaPrice * somusaQuantity;
    let jilapiCost = jilapiPrice * jilapiQuantity;

    let totalBill = singraCost + somusaCost + jilapiCost;

    return totalBill;
}
let billRasult = pandaCost(8, 5, 3)
console.log(billRasult);

/* ========picnicBudget Problem-03 Solved========================= */
function picnicBudget(tpMember){
    let memberBudget ;
        if (tpMember <= 100){
            memberBudget = tpMember * 5000;
            
        } else if ((tpMember >= 100) && (tpMember <= 200)){
            let frist100 = 100 * 5000;
            let more100Member = (tpMember - 100) * 4000;
           memberBudget = frist100 + more100Member;
    
        } else if ( tpMember >=200){
            let frist100 = 100 * 5000;
            let more100Member = (200 - 100) * 4000;
            let more200Member = (tpMember - 200) * 3000;
            memberBudget = frist100 + more100Member + more200Member;
        } 
        return memberBudget;
    }
    let budgetRasult = picnicBudget(202);
    console.log(budgetRasult);


/* ========oddFriend Problem-04 Solved========================= */
    let allFriendsName = ["Rafi", "Naim", "Anisur", "Ripon", "Tuhin", "jibon" ]
    function oddFriend (friendsName){
    let fristOddName = "";
    for (let i = 0; i < friendsName.length; i++) {
        let element = friendsName[i];

        if ( element.length % 2 == 1){
            fristOddName = element;
            element = fristOddName;
            return fristOddName;
        }
    }
    return fristOddName;
}
let rasult = oddFriend(allFriendsName);
console.log(rasult);