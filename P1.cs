using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace ProjectEuler
{
    /*
        If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
        
        Find the sum of all the multiples of 3 or 5 below 1000.
     */
    public static class P1
    {
        public static void Solve()
        {
            var stopWatch = new Stopwatch();
            List<int> naturalNums = Enumerable.Range(1, 20).ToList();
            stopWatch.Start();

            var multiplesOf3And5 = new List<int>();
            long sum = 0;            

            for (var i = 3; i < naturalNums.Count; i += 3)
            {
                multiplesOf3And5.Add(i);
                sum += i;
            }

            for (var j = 5; j < naturalNums.Count; j += 5)
            {
                if (j % 3 != 0) // do not add dupes
                {
                    multiplesOf3And5.Add(j);
                    sum += j;
                }
            }

            multiplesOf3And5.Sort();

            Console.WriteLine($"Sum of multiples of 3 or 5 below {naturalNums.Count}: {sum}");
            Console.WriteLine($"Multiples of 3 and 5 below {naturalNums.Count}:");

            foreach (var x in multiplesOf3And5)
                Console.Write(" " + x);

            Console.WriteLine();
            stopWatch.Stop();
            Console.WriteLine($" Elapsed milliseconds: {stopWatch.ElapsedMilliseconds}");
        }
    }
}
