
function mixedMessage() {
    let listOne = ['The dog ', 'The cat ', 'The cow ', 'The pig ', 'The chicken ', 'The goat ']
    let listTwo = ['jumped over ', 'ran into ', 'crossed ', 'ducked under ', 'ran right through ', 'flew into ']
    let listThree = ['the fence.', 'the road.', 'the wall.', 'the house.', 'the tree.', 'the pond.']
    
    let indexOne = Math.floor(Math.random() * listOne.length)
    let indexTwo = Math.floor(Math.random() * listTwo.length)
    let indexThree = Math.floor(Math.random() * listThree.length)
    
    let phrase = listOne[indexOne] + listTwo[indexTwo] + listThree[indexThree]
    return phrase
}


document.getElementById("button").addEventListener("click", function() {
    document.getElementById("message").innerText = mixedMessage()
})