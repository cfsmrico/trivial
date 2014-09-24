using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace Question
{
    class Program
    {
        private static int _numIterations = 0;
        private static int MaxInt = 10000000;

        static void Main(string[] args)
        {
            // 100 numbers from 1 -> 100 have been shoved inside a list of 99 items...
            // write an algorithm to find the missing number
            List<int> myList;
            var missingNumber = SetupProblem(out myList);

            Console.WriteLine("Number of elements searching through: " + MaxInt);
            Console.WriteLine("Missing #: " + missingNumber);

            var stopWatch = new Stopwatch();
            stopWatch.Start();
            var discoveredMissingNumber = FindMissingNumber(myList.ToArray(), 0, myList.Count - 1);
            //var discoveredMissingNumber = FindMissingNumberAlternativeSolution(myList.ToArray());
            stopWatch.Stop();

            Console.WriteLine("Discovered missing #: " + discoveredMissingNumber);
            Console.WriteLine("Elapsed time: " + stopWatch.ElapsedMilliseconds + " ms");
                        Console.WriteLine("# iterations: "  + _numIterations);
            Console.ReadKey();
        }

        private static int SetupProblem(out List<int> aList)
        {
            var randomMissingNumber = (new Random().Next(MaxInt) + 1);
            aList = new List<int>();

            for (var i = 1; i <= MaxInt; ++i)
                aList.Add(i);

            aList.Remove(randomMissingNumber);            
            return randomMissingNumber;
        }

        static int FindMissingNumber(int[] aList, int beginIndex, int endIndex)
        {
            ++_numIterations;

            if (beginIndex >= endIndex)
            {
                return aList[beginIndex] == beginIndex + 1 ? beginIndex + 2 : beginIndex + 1;                
            }

            var count = endIndex - beginIndex;
            var midpoint = beginIndex + count / 2;

            if (aList[midpoint] == midpoint + 1)
                return FindMissingNumber(aList, midpoint + 1, endIndex);
            else
                return FindMissingNumber(aList, beginIndex, midpoint - 1);                
        }

        static int FindMissingNumberAlternativeSolution(int[] aList)
        {
            var sum = 0;

            for (var i = 0; i < aList.Count() - 2; ++i)
            {
                sum += aList[i];
            }

            return (MaxInt * (MaxInt + 1) / 2) - sum;
        }
    }
}
