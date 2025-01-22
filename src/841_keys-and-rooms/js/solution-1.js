export function canVisitAllRooms(rooms) {
  const keys = new Set([0]);
  const unusedKeys = [...rooms[0]];

  for (let i = 0; i < unusedKeys.length; i++) {
    const key = unusedKeys[i];
    if (keys.has(key)) continue;

    keys.add(key);
    if (keys.size === rooms.length) return true;

    unusedKeys.push(...rooms[key]);
  }

  return false;
}
