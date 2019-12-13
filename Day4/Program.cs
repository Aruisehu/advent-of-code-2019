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
                if (NeverDecrease(i) && HasAdjacentDigits(i) && HasTwoAdjacentDigits(i))
                {
                    results.Add(i);
                }
            }
            Console.WriteLine("The answer is : " + results.Count.ToString());
        }

        static bool NeverDecrease(int x)
        {
            int[] digits = GetDigits(x);
            bool res = true;
            for (int i = 0; i < digits.Length - 1; i++) 
            {
                if(digits[i + 1] < digits[i])
                {
                    res = false;
                }
            }
            return res;
        }

        static bool HasAdjacentDigits(int x)
        {
            int[] digits = GetDigits(x);
            bool res = false;
            for (int i = 0; i < digits.Length - 1; i++) 
            {
                if(digits[i + 1] ==digits[i])
                {
                    res = true;
                }
            }
            return res;
        }

        static bool HasTwoAdjacentDigits(int x)
        {
            int[] digits = GetDigits(x);
            bool res = false;
            for (int i = 0; i < digits.Length - 2 ; i++) 
            {
                if((digits[i + 1] == digits[i] && digits[i + 2] != digits[i + 1]) || 
                    (digits[i + 1] != digits[i] && digits[i + 2] == digits[i + 1]))
                {
                    res = true;
                }
            }
            return res;
        }

        static int[] GetDigits(int x)
        {
            string str = x.ToString();
            return str.ToCharArray().Select(c => Convert.ToInt32(Char.GetNumericValue(c))).ToArray();
        }
    }
}
