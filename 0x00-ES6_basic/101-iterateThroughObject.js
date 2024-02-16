export default function iterateThroughObject(reportWithIterator) {
  const result = [];
  for (const idx of reportWithIterator) {
    result.push(idx);
  }
  return result.join(' | ');
}
