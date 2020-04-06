const totalValue = items => {
  const total = items.reduce(reduceTotals, 0)
  const formated = total.toLocaleString('pt-BR')
  return `$ ${formated}`
}

const reduceTotals = (prev, { quantity, value }) =>
  prev + (quantity * value)

export { totalValue }
