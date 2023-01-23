class Solution(object):
    def binary(self, nums, target):
        
        for i in range(len(nums)):
            low = 0
            mid = 0
            high = len(nums)-1
            
            while low <= high:
                
                mid = (low + high) // 2
                #define middle of the array
                
                if nums[mid] < target:
                    low = mid + 1
                    
                elif nums[mid] > target:
                    high = mid -1
                
                else:
                    return mid
            return -1

    nums = [-1,0,3,5,9,12]
    target = 9
    
    result = binary(nums, target)
    if result != -1:
        print("elemtent is present at index", str(result))
    else:
        print("element not present in array")