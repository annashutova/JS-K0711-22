// Напишите функцию, которая принимает строку и возвращает эту строку, написанную в обратном порядке. 
// Например: "JavaScript" → "tpircSavaJ"

function reversLine(line) {
    let newLine = ""
    for (let i = line.length - 1; i >= 0; i--) {
        newLine += line[i]
    }

    return newLine
}