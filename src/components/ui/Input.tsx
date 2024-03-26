import styles from "./Input.module.css";

interface Props {
  name: string;
  type: string;
  placeholder: string;
  onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  required?: boolean;
}

export default function Input({
  name,
  type,
  placeholder,
  onChange,
  onBlur,
  value,
  disabled,
  required = false,
}: Props) {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
        required={required}
      />
    </div>
  );
}
