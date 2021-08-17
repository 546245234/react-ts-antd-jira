import queryString from "query-string";
import { useState, useEffect } from "react";
/**
 * 获取URL参数
 */
export const parseQuery = () => {
  return queryString.parseUrl(window.location.href).query;
}

export const isFalsy = (value: any) => value === 0 ? false : !value
export const isVoid = (value: unknown) => value === undefined || value === null || value === ''

export const cleanObject = (object: { [key: string]: unknown }) => {
  const result = { ...object }
  Object.keys(result).forEach(key => {
    const value = result[key]
    if (isVoid(value)) {
      delete result[key]
    }
  })
  return result
}

export const useMount = (callback: ()=> void, params: Array<any> = []) => {
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

export const useDocumentTitle = (title:string) => {
  useEffect(()=>{
    document.title = title
  },[title])
}

export const resetRoute = () => window.location.href = window.location.origin