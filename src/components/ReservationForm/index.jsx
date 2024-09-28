import { Link, useParams } from 'react-router-dom';

import { Svg } from '../../components';
import styles from './style.module.css';
import stumpedAtWork from '../../assets/svgs/stumped-at-work.svg';

function ReservationForm() {
  const { id } = useParams();
  return (
    <div className={styles.container}>
      <Svg className={styles.icon} src={stumpedAtWork} />
      <p>Em breve...</p>
      <Link className={styles.returnButton} to={`/hotels/${id}`}>
        Retornar
      </Link>
    </div>
  );
}

export default ReservationForm;
