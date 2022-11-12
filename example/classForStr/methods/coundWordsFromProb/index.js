export function coundWordFromProbs(probs) {
  if (typeof probs !== 'object') {
    return Array.from(this.str.matchAll(new RegExp(probs, 'gi')));
  }
  return null;
}
