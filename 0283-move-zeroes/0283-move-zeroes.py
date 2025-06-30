class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        currIdx = 0 # 어디까지 바꿨는지
        searchIdx = 0 # 탐색
        while searchIdx < len(nums):
            if nums[searchIdx] != 0:
                nums[currIdx], nums[searchIdx] = nums[searchIdx], nums[currIdx]
                currIdx += 1
            searchIdx += 1

