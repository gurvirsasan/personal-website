import { CSSProperties, TextareaHTMLAttributes, forwardRef, useId } from 'react';
import styles from './TextArea.module.css';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  fullWidth?: boolean;
  className?: string;
  wrapClassName?: string;
  style?: CSSProperties;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  { label, hint, error, fullWidth = true, className = '', wrapClassName = '', style, id, ...rest },
  ref,
) {
  const autoId = useId();
  const areaId = id ?? (typeof rest.name === 'string' && rest.name ? rest.name : autoId);
  const invalid = Boolean(error);

  return (
    <div
      className={`${styles.wrap} ${invalid ? styles.invalid : ''} ${wrapClassName}`.trim()}
      style={{ ...style, width: fullWidth ? '100%' : undefined }}
    >
      {label ? (
        <label className={styles.label} htmlFor={areaId}>
          {label}
        </label>
      ) : null}
      <textarea ref={ref} id={areaId} className={`${styles.field} ${className}`.trim()} aria-invalid={invalid || undefined} {...rest} />
      {error ? <span className={styles.error}>{error}</span> : null}
      {!error && hint ? <span className={styles.hint}>{hint}</span> : null}
    </div>
  );
});

export default TextArea;
