import queryString from "query-string";
/**
 * 获取URL参数
 */
export const parseQuery = () => {
  return queryString.parseUrl(window.location.href).query;
}

export const isFalsy = (value: any) => value === 0 ? false : !value

export const cleanObject = (object: any) => {
  const result = { ...object }
  Object.keys(result).forEach(key => {
    const value = result[key]
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}