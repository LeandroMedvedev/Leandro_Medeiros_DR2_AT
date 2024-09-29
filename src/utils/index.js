function formatCurrency(value, currency = 'BRL', locale = 'pt-BR') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
}

function useHotelStorage() {
  const addHotelToStorage = (newHotel) => {
    const storedHotels = localStorage.getItem('hotels');
    const hotels = storedHotels ? JSON.parse(storedHotels) : [];

    localStorage.setItem('hotels', JSON.stringify([...hotels, newHotel]));
  };

  return { addHotelToStorage };
}

export { formatCurrency, useHotelStorage };
