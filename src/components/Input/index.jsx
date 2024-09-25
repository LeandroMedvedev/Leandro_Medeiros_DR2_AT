import styles from './style.module.css';

function Input({ onBlur, onChange, placeholder, value }) {
  return (
    <input
      className={styles.input}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      maxLength={80}
    />
  );
}

export default Input;
