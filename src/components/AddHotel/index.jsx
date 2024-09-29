import { useHotelStorage } from '../../utils';
import HotelForm from '../HotelForm';
import styles from './style.module.css';

function AddHotel() {
  const { addHotelToStorage } = useHotelStorage();

  const handleAddHotel = (formData) => {
    const newHotel = {
      id: Date.now(), // Gera um ID único
      name: formData.name,
      location: `${formData.locationCity}, ${formData.locationState}`,
      price: parseFloat(formData.price),
      rating: parseFloat(formData.rating),
      imageUrl: formData.imageUrl,
      images: formData.additionalImages.split(',').map((img) => img.trim()),
      description: formData.description,
      services: formData.services.split(',').map((service) => service.trim()),
    };

    // Adiciona ao localStorage
    addHotelToStorage(newHotel);

    alert('Hotel adicionado com sucesso!');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Adicionar Hotel</h2>
      <HotelForm onSubmit={handleAddHotel} />
    </div>
  );
}

export default AddHotel;
