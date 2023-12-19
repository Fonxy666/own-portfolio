const breakpoints = {
  min: "320px",
  xs: "480px",
  sm: "720px",
  md: "960px",
  lg: "1200px",
  xl: "1400px",
  xxl: "1600px",
  max: "2600px"
}

export const devices = {
  min: `max-width: ${breakpoints.min}`,
  xs: `max-width: ${breakpoints.xs}`,
  sm: `max-width: ${breakpoints.sm}`,
  md: `max-width: ${breakpoints.md}`,
  lg: `max-width: ${breakpoints.lg}`,
  xl: `max-width: ${breakpoints.xl}`,
  xxl: `max-width: ${breakpoints.xxl}`,
  max: `min-width: ${breakpoints.max}`
}