// Thanks to https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
`
Input: an integer n > 1.
 
 Let A be an array of Boolean values, indexed by integers 2 to n,
 initially all set to true.
 
 for i = 2, 3, 4, ..., not exceeding √n:
   if A[i] is true:
     for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n:
       A[j] := false.
 
 Output: all i such that A[i] is true.
`
const add = (a, b) => a + b

const eratostheneSieve = (n) => {
    const arr = Array(n).fill(true)

    arr[1] = false

    for (let i = 2; i < Math.sqrt(n); i++) {
        if (arr[i])
            for (let j = i * i; j < n; j += i)
                arr[j] = false
    }

    return arr
        .map((item, index) => item ? index : false)
        .filter(item => item)
        .reduce(add)
}

console.log(eratostheneSieve(2e6)) // 142913828922