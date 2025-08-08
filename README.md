# Stylus AssemblyScript Example – Minimum Even Prime

This fork modifies the original [Stylus AssemblyScript Sieve of Eratosthenes](https://github.com/OffchainLabs/stylus-examples) example to demonstrate a minimal Stylus smart contract that returns the smallest even prime number — which is always **2**.

## 🧠 What Changed

Instead of computing all primes up to a given number `n`, the logic has been simplified to return the only even prime number (2). This showcases a basic AssemblyScript contract in Stylus for educational and testing purposes.

## 📦 Usage

After building the contract:

```bash
npx stylus test
contract.minEvenPrime(100); // returns 2
📁 File Modified
assembly/sieve.ts → replaced sieve logic with minEvenPrime
```


#### **4. Commit & Push**

```bash
git add .
git commit -m "Modified sieve example to return minimum even prime number"
git push origin main
```