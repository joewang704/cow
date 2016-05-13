export const isNull = (a) => {
  return a === undefined || a === null
}

export const defaultValue = (a, b) => {
  return isNull(a) ? b : a
}
