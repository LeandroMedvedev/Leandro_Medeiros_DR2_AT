function formatCurrency(value, currency = 'BRL', locale = 'pt-BR') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
}

export { formatCurrency };
