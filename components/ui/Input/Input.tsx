import { CSSProperties, InputHTMLAttributes, forwardRef, useId } from 'react';
import styles from './Input.module.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  hint?: string;
  error?: string;
  /** Visually full width of parent */
  fullWidth?: boolean;
  className?: string;
  wrapClassName?: string;
  style?: CSSProperties;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, hint, error, fullWidth = true, className = '', wrapClassName = '', style, id, ...rest },
  ref,
) {
  const autoId = useId();
  const inputId = id ?? (typeof rest.name === 'string' && rest.name ? rest.name : autoId);
  const invalid = Boolean(error);

  return (
    <div
      className={`${styles.wrap} ${invalid ? styles.invalid : ''} ${wrapClassName}`.trim()}
      style={{ ...style, width: fullWidth ? '100%' : undefined }}
    >
      {label ? (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <input ref={ref} id={inputId} className={`${styles.field} ${className}`.trim()} aria-invalid={invalid || undefined} {...rest} />
      {error ? <span className={styles.error}>{error}</span> : null}
      {!error && hint ? <span className={styles.hint}>{hint}</span> : null}
    </div>
  );
});

export default Input;
