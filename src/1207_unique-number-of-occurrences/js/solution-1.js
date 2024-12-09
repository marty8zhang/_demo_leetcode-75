function uniqueOccurrences(arr) {
  const occurrenceMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    let occurrences = occurrenceMap.get(arr[i]) ?? 0;
    occurrenceMap.set(arr[i], ++occurrences);
  }

  const reverseMap = new Map();
  occurrenceMap.forEach((o, i) => reverseMap.set(o, i));

  return occurrenceMap.size === reverseMap.size;
}

export default uniqueOccurrences;
