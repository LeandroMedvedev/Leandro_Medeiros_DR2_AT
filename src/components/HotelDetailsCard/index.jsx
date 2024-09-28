import { formatCurrency } from '../../utils';
import styles from './style.module.css';

function HotelDetailsCard({ hotel }) {
  return (
    <article className={styles.container}>
      <div className={styles.gallery}>
        <img className={styles.image} src={hotel.imageUrl} alt={hotel.name} />
        {hotel.images?.map((image, index) => (
          <img
            key={index}
            className={styles.additionalImage}
            src={image}
            alt={`Imagem ${index + 1} de ${hotel.name}`}
          />
        ))}
      </div>

      <div className={styles.textContainer}>
        <h3 className={styles.location}>{hotel.location}</h3>
        <p className={styles.description}>{hotel.description}</p>
        <p className={styles.price}>
          Diárias a partir de: <strong>{formatCurrency(hotel.price)}</strong>
        </p>
        <div className={styles.services}>
          <h3>Itens e Serviços Oferecidos</h3>
          <ul>{hotel.services}.</ul>
        </div>
      </div>
    </article>
  );
}

export default HotelDetailsCard;
