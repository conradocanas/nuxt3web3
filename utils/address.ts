export function shorterAddress(address: string) {
  if (!address)
    return

  const firstDigits = address.slice(0, 5)
  const lastDigits = address.slice(38, 45)

  return `${firstDigits}...${lastDigits}`
}
