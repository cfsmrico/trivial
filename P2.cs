﻿using System;
using System.Diagnostics;

namespace ProjectEuler
{
    /*

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

     */
    public static class P2
    {
        public static void Solve()
        {
            var stopWatch = new Stopwatch();
            stopWatch.Start();

            ulong n = 33;
            var fib = F(n);
            Console.WriteLine($"Even-valued Fib({n}): {fib}");

            Console.WriteLine();
            stopWatch.Stop();
            Console.WriteLine($" Elapsed milliseconds: {stopWatch.ElapsedMilliseconds}");
        }

        private static ulong F(ulong n)
        {
            if (n <= 2)
                return n;

            ulong fib = 1;
            ulong previousFib = 1;
            ulong evenValuedSum = 0;

            for (ulong i = 2; i < n; ++i)
            {
                ulong temp = fib;
                fib += previousFib;
                previousFib = temp;

                if (fib % 2 == 0)
                {
                    Console.WriteLine($"Added even-valued fib: {fib}");
                    evenValuedSum += fib;
                }
            }

            return evenValuedSum;
        }
    }
}
