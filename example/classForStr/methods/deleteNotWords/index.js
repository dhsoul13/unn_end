export function deleteNotWords() {
  return this.str.replace(/\d/gi, '');
}
