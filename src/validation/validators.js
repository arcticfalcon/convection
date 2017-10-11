const numericRegexp = /^\d*$/
export const numeric = numericRegexp.test.bind(numericRegexp)
