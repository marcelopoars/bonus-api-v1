export function findOneOnArray(id, array) {
  return array.find(element => element.id === Number(id));
}
