// Code your solutions in this file
function writeCards(array, eventName){ 
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
    }
    return newArray
}
writeCards(['Lisa', 'Kaitlin', 'Jan'], 'surprise')


function countDown(num){
    let countdown = num
    while (countdown >= 0){
        console.log(countdown--)
    }
}
countDown(10)