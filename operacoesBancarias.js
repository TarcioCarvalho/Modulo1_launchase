const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(type, value){
    transaction = {type:type, value: value}
    
    if(transaction.type == "credit"){
        user.transactions.push(transaction)
        user.balance += transaction.value

    }if(transaction.type == "debit"){
        user.transactions.push(transaction)
        user.balance -= transaction.value
    }
}

function getHigherTransactionByType(type){
    let actualTransaction
    let higherValue = 0
    let higherTransaction

    for(let transaction of user.transactions){
        if(transaction.type == type){
            actualTransaction = transaction

            if(actualTransaction.value > higherValue ){
                higherValue = actualTransaction.value
                higherTransaction = actualTransaction
            }
        }
    }

    return console.log(higherTransaction)
}

function getAverageTransactionValue(){
    let total = 0
    let count = 0
    for(let i = 0; i < user.transactions.length; i++){
        total += user.transactions[i].value
        count++
    }
    return console.log(total / count)
}

function getTransactionCount(){
    let count = {credit:0, debit:0}
    for(let transaction of user.transactions){
        if(transaction.type == "credit"){
            count.credit++
        }else{
            count.debit++
        }
    }
    return console.log(count)
}

createTransaction("credit", 50);
createTransaction("credit", 120);
createTransaction("debit", 80);
createTransaction("debit", 30);

console.log(user.transactions)

getHigherTransactionByType("debit")
getHigherTransactionByType("credit")
getAverageTransactionValue()
getTransactionCount()
