let buah = ['Apel', 'Mangga', 'Pisang']
let jumlah = [1, 2, 3]

let pairedArray = []

for (let i = 0; i < buah.length; i++) {
    pairedArray.push([buah[i], jumlah[i]]);
}


console.log(pairedArray)