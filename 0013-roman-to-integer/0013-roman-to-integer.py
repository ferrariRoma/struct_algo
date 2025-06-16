class Solution:
    def romanToInt(self, s: str) -> int:
        romans = {
            "I": 1, 
            "IV": 4, 
            "V": 5, 
            "IX": 9, 
            "X": 10, 
            "XL": 40, 
            "L": 50, 
            "XC": 90, 
            "C": 100, 
            "CD": 400, 
            "D": 500, 
            "CM": 900, 
            "M": 1000, 
        }
        exceptions = ["I", "X", "C"]
        ans = 0
        i = 0
        while i < len(s):
            symbol = s[i]
            if symbol in exceptions and i+1 < len(s):
                candi = symbol + s[i+1]
                if candi in romans:
                    ans+=romans[candi]
                    i+=2
                    continue
            ans+=romans[symbol]
            i+=1
        return ans

