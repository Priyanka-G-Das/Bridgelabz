exports.PrimeFactors = (n) => {
     for (let i = 2; i < n; i++) {
          while (n % i == 0) //in this print the prime factor 2 until n devides by 2
          {
               console.log("prime factor is" + i);
               n = n / 2;
          }
          if (n > 2) {
               console.log(n);
          }
     }
}