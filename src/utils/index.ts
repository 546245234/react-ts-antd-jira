import queryString from "query-string";
import { useState, useEffect } from "react";
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

export const useMount = (callback: Function, params: Array<any> = []) => {
  useEffect(() => {
    callback()
    // eslint-disable-next-line
  }, params)
}

export const useDebounce = (value: any, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}
