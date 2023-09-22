import { camelCase, camelCaseTransformMerge } from 'change-case'

type FunctionParamsAst = {
  name: string
  type?: string
  /**
   * @default true
   */
  required?: boolean
  /**
   * @default true
   */
  enabled?: boolean
  default?: string
}

/**
 * Convert an string array to a string of parameters that can be used inside a function
 * The parameter name is converted to `camelcase`
 */
export function createFunctionParams(data: FunctionParamsAst[]): string {
  return data
    .sort((a, b) => {
      const requiredA = a.required ?? true
      const requiredB = b.required ?? true
      return requiredA === requiredB ? 0 : requiredA ? -1 : 1
    })
    .filter(({ enabled = true }) => enabled)
    .reduce((acc, { name, type = false, required = true, ...rest }) => {
      const parameterName = camelCase(name, { delimiter: '', transform: camelCaseTransformMerge })

      if (type) {
        if (required) {
          acc.push(`${parameterName}: ${type}${rest.default ? ` = ${rest.default}` : ''}`)
        } else {
          acc.push(`${parameterName}?: ${type}`)
        }
      } else {
        acc.push(`${parameterName}`)
      }

      return acc
    }, [] as string[])
    .join(', ')
}