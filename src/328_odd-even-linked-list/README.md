# 328. Odd Even Linked List

[LeetCode Problem Page](https://leetcode.com/problems/odd-even-linked-list)

Given the `head` of a singly linked list, group all the nodes with odd indices
together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain
as it was in the input.

You must solve the problem in `O(1)` extra space complexity and `O(n)` time
complexity.

# Examples

## Example 1

![Example 1 Image](images/example-1.jpg "Example 1")

```text
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
```

## Example 2

![Example 2 Image](images/example-2.jpg "Example 2")

```text
Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]
```

# Constraints

- The number of nodes in the linked list is in the range `[0, 10^4]`.
- `-10^6 <= Node.val <= 10^6`.
