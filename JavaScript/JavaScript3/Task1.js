let colorList = ['Red', 'Blue', 'Green', 'Black', 'Purple', 'Yellow']
console.log(colorList)
colorList.push("Egg")
console.log(colorList)
colorList.shift()
console.log(colorList)
console.log("Total items:", colorList.length)

function formatList(colorList) {
    for (let i = 0; i < colorList.length; i++) {
        console.log(`Item${i + 1}: ${colorList[i]}`)
    }
}
formatList(colorList)