const formatCurrency = value => {
  const formated = value.toLocaleString('pt-BR',{
    inimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  return `$ ${formated}`
}

const totalValue = items => {
  const total = items.reduce(reduceTotals, 0)
  return formatCurrency(total)
}

const reduceTotals = (prev, { quantity, value }) =>
  prev + (quantity * value)

export { totalValue, formatCurrency }
