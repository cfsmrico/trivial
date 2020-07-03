using System;
using System.Diagnostics;

namespace ProjectEuler
{
    /*

        The prime factors of 13195 are 5, 7, 13 and 29.
    What is the largest prime factor of the number 600851475143 ?

     */
    public static class P3
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
