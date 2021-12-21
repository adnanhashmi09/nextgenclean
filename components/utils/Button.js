import Link from 'next/link';
import styles from '../../styles/components/button.module.scss';

function Button({ href, modifierClass, children }) {
  const finalClass = `${styles.btn} ${styles[modifierClass] || ''}`;

  return (
    <Link href={href}>
      <a className={finalClass}>{children}</a>
    </Link>
  );
}

export default Button;
