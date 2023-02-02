# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# You can return the answer in any order.

class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        numbers_index = {}

        for i in range(len(nums)):
            if target - nums[i] in numbers_index:
                return [numbers_index[target-nums[i]], i]
            numbers_index[nums[i]] = i
        return []


# You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

# You may assume the two numbers do not contain any leading zero, except the number 0 itself.

# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """

    l1 = [2,4,3]
    l2 = [5,6,4]


    l1.reverse()
    print(l1)


def transform(a = 2):
    if a == 1:
        return a +- 2
    return a

total = 1

for x in [3,5,1]:
    total = total + transform(x)

print(total)