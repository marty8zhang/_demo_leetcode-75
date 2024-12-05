function findDifference(nums1, nums2) {
  const numsMap1 = new Map();
  const numsMap2 = new Map();
  const l1 = nums1.length;
  const l2 = nums2.length;
  const l = l1 > l2 ? l1 : l2;
  for (let i = 0; i < l; i++) {
    if (i < l1) numsMap1.set(nums1[i], true);
    if (i < l2) numsMap2.set(nums2[i], true);
  }

  numsMap1.forEach((value, key) => {
    if (numsMap2.has(key)) {
      numsMap1.delete(key);
      numsMap2.delete(key);
    }
  });

  return [Array.from(numsMap1.keys()), Array.from(numsMap2.keys())];
}

export default findDifference;
