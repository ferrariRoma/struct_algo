class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        arr = []
        while x > 0:
            arr.append(x % 10)
            x//=10
        length = len(arr)
        idx = 0
        while idx < length//2:
            if arr[idx] != arr[length-1-idx]:
                return False
            idx += 1
        return True
