console.log('Buffer is a global object in Node.js')
console.log(__dirname)
console.log(__filename)

// Buffer
// const buf = Buffer.from('Hello World', 'utf8') // Default encoding is utf8
const buf = Buffer.from('Hello World')
// var b = new Buffer - Deprecated

console.log(buf) // Prints the buffer in hexadecimal
console.log(buf.toString()) // Prints the buffer as a string
console.log(buf.toJSON()) // Prints the buffer as a JSON object and shows the ASCII values
console.log(buf.length) // Prints the buffer length

console.log(buf[2]) // Prints the ASCII value of the character at index 2

var buf2 = Buffer.alloc(8) // Allocates 8 bytes of memory
var buf3 = Buffer.allocUnsafe(8) // Allocates 8 bytes of memory without clearing it
console.log(buf2)
console.log(buf3)
console.log(`Len: ${buf2.length} Len: ${buf2.byteLength}`)

console.log(buf.toString('utf8', 0, 5)) // Prints the buffer as a string from index 0 to 5

const str = "👾👻A" // Emojis are 4 bytes instead of 1
const buf4 = Buffer.from(str)
console.log(buf4)
console.log(buf4.length)
console.log(buf4.toString())
console.log(buf4.toString('utf8', 0, 5)) // Prints the buffer as a string from index 0 to 5
console.log(buf4.toString('utf8', 4, 8)) // Prints the buffer as a string from index 0 to 5
console.log(buf4.toString('utf8', 0, 8)) // Prints the buffer as a string from index 0 to 8

for (c of buf.entries()) { // Entries returns an array of [index, value]
  console.log(c)
}

console.log(buf.toString('hex')) // Prints the buffer as a hexadecimal string

// const buf5 = Buffer.alloc(4, 'A')
var buf5 = Buffer.alloc(4).fill( 'A')
// const buf5 = Buffer.alloc(4, 66) // Allocates 4 bytes of memory and fills it with the ASCII value of 'B'
// const buf5 = Buffer.alloc(6, "AbC")
console.log(buf5.toString())
console.log(buf2.toString())
console.log(buf3.toString())

console.log(buf5.equals(buf)) // Compares two buffers for equality

var buf6 = Buffer.from('ABCD')
console.log(buf5.compare(buf6)) // Compares two buffers and returns 0 if they are equal, 1 if buf5 is greater, and -1 if buf5 is less than buf6

const a = [buf5, buf] // Array of buffers
console.log(a)

var buf7 = Buffer.concat(a) // Concatenates the buffers in the array
console.log(buf7.toString())

// Copying Buffers
// buf6.copy(buf5, 0, 0, 2) // Copies the first 2 bytes of buf6 to buf5 starting at index 0
var buf6 = Buffer.from('1234567890') // Allocates the buffer available in memory
buf6.copy(buf2)
console.log(buf2.toString())
console.log(`len: ${buf2.length}`)

// buf2 = Buffer.alloc(8)

var buf7 = Buffer.from('ABCDEFGH')
buf7.copy(buf2, 4, 2, 4) // Copies the bytes from index 2 to 4 of buf6 to buf2 starting at index 4
console.log(buf2.toString())

var buf8 = Buffer.alloc(10)
buf8.write('Hello')
console.log(buf8.toString())
console.log(`len: ${buf8.length}`)
console.log(`len: ${Buffer.byteLength(buf8)}`)
console.log(`len: ${Buffer.byteLength(Buffer.from('👻'))}`)


