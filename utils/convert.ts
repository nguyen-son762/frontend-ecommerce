import camelCase from 'lodash.camelcase'

export const isArray = (d: unknown) => Array.isArray(d)

export const isObject = (d: unknown) =>
  d === Object(d) && !isArray(d) && typeof d !== 'function'

// eslint-disable-next-line
export const toCamel = function (d: any) {
  if (isObject(d)) {
    const o: Record<string, unknown> = {}
    Object.keys(d).forEach((k) => {
      o[camelCase(k)] = toCamel(d[k])
    })

    return o
  }
  if (isArray(d)) {
    return d.map((o: Record<string, unknown>) => toCamel(o))
  }

  return d
}
