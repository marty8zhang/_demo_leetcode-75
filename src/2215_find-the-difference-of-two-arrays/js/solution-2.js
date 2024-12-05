function findDifference(nums1, nums2) {
  const numsSet1 = new Set(nums1);
  const numsSet2 = new Set(nums2);

  numsSet1.forEach((value) => {
    if (numsSet2.has(value)) {
      numsSet1.delete(value);
      numsSet2.delete(value);
    }
  });

  return [Array.from(numsSet1), Array.from(numsSet2)];
}

export default findDifference;
