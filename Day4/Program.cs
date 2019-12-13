using System;
using System.Collections.Generic;
using System.Linq;

namespace Day4
{
    class Program
    {
        static void Main(string[] args)
        {
            int start = 197487;
            int end = 673251;
            List<int> results = new List<int>();
            for (int i = start; i <= end; i++)
            {
                if (NeverDecrease(i) && HasTwoAdjacentDigits(i))
                {
                    results.Add(i);
                }
            }
            Console.WriteLine("The answer is : " + results.Count.ToString());
        }

        static bool NeverDecrease(int x)
        {
            int[] digits = GetDigits(x);
            for (int i = 0; i < digits.Length - 1; i++) 
            {
                if(digits[i + 1] < digits[i])
                {
                    return false;
                }
            }
            return true;
        }

        static bool HasAdjacentDigits(int x)
        {
            int[] digits = GetDigits(x);
            for (int i = 0; i < digits.Length - 1; i++) 
            {
                if(digits[i + 1] == digits[i])
                {
                    return true;
                }
            }
            return false;
        }

        static bool HasTwoAdjacentDigits(int x)
        {
            int[] digits = GetDigits(x);
            int count = 0;
            int lastDigit = 10;
            foreach (int digit in digits) 
            {
                if (digit == lastDigit)
                {
                    count++;
                } 
                else {
                    if (count == 2) return true;
                    count = 1;
                    lastDigit = digit;
                } 
            }
            return count == 2;
        }

        static int[] GetDigits(int x)
        {
            string str = x.ToString();
            return str.ToCharArray().Select(c => Convert.ToInt32(Char.GetNumericValue(c))).ToArray();
        }
    }
}
