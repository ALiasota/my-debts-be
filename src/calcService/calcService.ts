export const calc = (debtSum: number, payment: number, rate: number) => {
  let month = 0
  let sum = debtSum
  do {
    const debtBody = payment - (sum * rate) / 100 / 12
    sum = sum - debtBody
    month += 1
  } while (sum > 0)
  const years = Math.floor(month / 12)
  const monthes = month - years * 12
  const totalSum = month * payment
  return { years, monthes, totalSum }
}
