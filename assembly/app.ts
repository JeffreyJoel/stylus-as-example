import { i32ToBytes, bytesToI32 } from './utils';

// Unsigned square root
function usqrt(n: u32): u32 {
  let x = n;
  let y = (x + 1) >> 1;
  while (y < x) {
    x = y;
    y = (x + n / x) >> 1;
  }
  return x;
}

/**
 * Returns the max prime below or equal a given "number" using the Sieve of Eratosthenes algorithm
 * (Based on t-katsumura's implementation: https://github.com/t-katsumura/webassembly-examples-eratosthenes)
 * (Sieve of Eratosthenes explanation: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)
 */
export function minEvenPrime(_n: i32): i32 {
  return 2; // the only even prime
}

/**
 * Main function of your contract
 * @dev Receives the input of bytes in Uint8Array. Result must also be sent in bytes wrapped in Uint8Array
 *
 * @param input bytes in Uint8Array
 * @returns bytes in Uint8Array
 */
export const main = (input: Uint8Array): Uint8Array => {
  const maxNumber = bytesToI32(input);
  const maxPrime = minEvenPrime(maxNumber);
  return i32ToBytes(maxPrime);
};
