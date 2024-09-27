import { Link } from 'react-router-dom';

import styles from './style.module.css';
import { formatCurrency } from '../../utils';

function HotelCard({ hotel }) {
  return (
    <article className={styles.container}>
      <img
        className={styles.image}
        src={hotel.imageUrl}
        alt={`Imagem do hotel ${hotel.name}`}
      />
      <div className={styles.containerText}>
        <h3 className={styles.name}>{hotel.name}</h3>
        <p className={styles.location}>{hotel.location}</p>
        <p className={styles.price}>
          a partir de <strong>{formatCurrency(hotel.price)}</strong>
        </p>
        <p className={styles.rating}>{hotel.rating} &#9733;</p>
        <Link className={styles.link} to={`/hotels/${hotel.id}`}>
          Detalhes
        </Link>
      </div>
    </article>
  );
}

export default HotelCard;
