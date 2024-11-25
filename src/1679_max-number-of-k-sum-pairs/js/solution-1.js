/*
 * Note: This solution didn't pass LeetCode's complexity check.
 */
function maxOperations(nums, k) {
  let counter = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] < 0 || nums[left] >= k) {
      left++;
      continue;
    }
    if (nums[right] < 0 || nums[right] >= k) {
      right--;
      continue;
    }

    let i = left + 1;
    while (i <= right) {
      if (nums[i] < 0 || nums[i] >= k) {
        i++;
        continue;
      }

      if (nums[left] + nums[i] === k) {
        counter++;
        nums[left] = -1;
        nums[i] = -1;
        break;
      }

      i++;
    }

    left++;

    let j = right - 1;
    while (j >= left) {
      if (nums[j] < 0 || nums[j] >= k) {
        j--;
        continue;
      }
      if (nums[right] < 0 || nums[right] >= k) {
        right--;
        j = right - 1;
        continue;
      }

      if (nums[j] + nums[right] === k) {
        counter++;
        nums[right] = -1;
        nums[j] = -1;
        break;
      }

      j--;
    }

    right--;
  }

  return counter;
}

export default maxOperations;
