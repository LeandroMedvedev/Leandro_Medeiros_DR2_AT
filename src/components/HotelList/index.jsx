import { useEffect, useState } from 'react';

import styles from './style.module.css';
import { HOTELS } from '../../constants';
import HotelCard from '../HotelCard';

function HotelList() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const storedHotels = localStorage.getItem('hotels');
    if (storedHotels) {
      setHotels(JSON.parse(storedHotels));
    } else {
      localStorage.setItem('hotels', JSON.stringify(HOTELS));
      setHotels(HOTELS);
    }
  }, []);

  return (
    <main className={styles.container}>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </main>
  );
}

export default HotelList;
