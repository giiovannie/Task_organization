export const pick = (source, allowedKeys) => allowedKeys.reduce((result, key) => {
  if (source[key] !== undefined) result[key] = source[key]
  return result
}, {})
