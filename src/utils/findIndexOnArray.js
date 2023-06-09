export function findIndexOnArray(id, array) {
  return array.findIndex(element => element.id === Number(id));
}
