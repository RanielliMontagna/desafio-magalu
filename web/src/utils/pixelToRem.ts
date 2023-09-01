export function pixelToRem(pixel: number) {
  const baseFontSize = 16
  return `${pixel / baseFontSize}rem`
}
