class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        table = {}
        for num in nums:
            if table.get(num) is None:
                table[num] = 1
            else:
                return True
        return False
