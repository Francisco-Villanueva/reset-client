export function isAnyPropertyEmpty(obj) {
  for (const prop in obj) {
    if (obj[prop] === "") {
      return true; // Al menos una propiedad está vacía
    }
  }
  return false; // Ninguna propiedad está vacía
}
