import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './style.module.css';
import HotelDetailsCard from '../HotelDetailsCard';

function HotelDetails() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const storedHotels = localStorage.getItem('hotels');
    if (storedHotels) {
      const hotels = JSON.parse(storedHotels);
      const selectedHotel = hotels.find((hotel) => hotel.id === parseInt(id));
      setHotel(selectedHotel);
    }
  }, [id]);

  if (!hotel) {
    return <p>Carregando...</p>;
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.name}>{hotel.name}</h1>
      <HotelDetailsCard hotel={hotel} />
    </main>
  );
}

export default HotelDetails;
