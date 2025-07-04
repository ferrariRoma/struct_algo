class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        num = x
        ans = 0
        while num:
            digit = num % 10
            ans = ans*10 + digit
            num //= 10
        return ans == x
