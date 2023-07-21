import styles from './Button.module.css';

const Button = ({ onClick, children, title, disabled }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
