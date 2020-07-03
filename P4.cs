using System;
using System.Diagnostics;

namespace ProjectEuler
{
    /*

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

     */
    public static class P4
    {
        public static void Solve()
        {
            var stopWatch = new Stopwatch();
            stopWatch.Start();

            

            Console.WriteLine();
            stopWatch.Stop();
            Console.WriteLine($" Elapsed milliseconds: {stopWatch.ElapsedMilliseconds}");
        }
    }
}
