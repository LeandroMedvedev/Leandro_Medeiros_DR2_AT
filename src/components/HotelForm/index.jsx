import { useState } from 'react';

import styles from './style.module.css';

function HotelForm({ initialData = {}, onSubmit }) {
  const [form, setForm] = useState({
    name: initialData.name || '',
    imageUrl: initialData.imageUrl || '',
    rating: initialData.rating || '',
    locationCity: initialData.locationCity || '',
    locationState: initialData.locationState || '',
    price: initialData.price || '',
    description: initialData.description || '',
    services: initialData.services || '',
    additionalImages: initialData.additionalImages || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form); // Passa os dados para o componente pai
    console.log(form);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <fieldset className={styles.fieldset}>
          <label>
            Hotel:
            <input
              className={styles.input}
              name='name'
              value={form.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Imagem (URL):
            <input
              className={styles.input}
              name='imageUrl'
              value={form.imageUrl}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Classificação (Estrelas):
            <input
              className={styles.input}
              type='number'
              name='rating'
              value={form.rating}
              onChange={handleInputChange}
              min='0'
              max='5'
              step='0.1'
              required
            />
          </label>
          <label>
            Cidade:
            <input
              className={styles.input}
              name='locationCity'
              value={form.locationCity}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Estado:
            <input
              className={styles.input}
              name='locationState'
              value={form.locationState}
              onChange={handleInputChange}
              required
            />
          </label>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label>
            Diária (R$):
            <input
              className={styles.input}
              type='number'
              name='price'
              value={form.price}
              onChange={handleInputChange}
              min='0'
              required
            />
          </label>
          <label>
            Descrição:
            <textarea
              className={styles.textArea}
              name='description'
              value={form.description}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Serviços:
            <input
              className={styles.input}
              name='services'
              value={form.services}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Imagens (URLs):
            <input
              className={styles.input}
              name='additionalImages'
              value={form.additionalImages}
              onChange={handleInputChange}
            />
          </label>
        </fieldset>
      </div>
      <button className={styles.submitButton} type='submit'>
        Enviar
      </button>
    </form>
  );
}

export default HotelForm;
