function maxOperations(nums, k) {
  const frequencyMap = new Map();
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= k) continue;

    const neededValue = k - nums[i];
    const frequency = frequencyMap.get(neededValue);
    if (frequency) {
      counter++;
      frequencyMap.set(neededValue, frequency - 1);
    } else {
      frequencyMap.set(nums[i], (frequencyMap.get(nums[i]) ?? 0) + 1);
    }
  }

  return counter;
}

export default maxOperations;
