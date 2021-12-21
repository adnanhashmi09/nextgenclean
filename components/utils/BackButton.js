import styles from '../../styles/components/back.module.scss';
import { IoMdArrowBack } from 'react-icons/io';
import Link from 'next/link';

const BackButton = () => {
  const { backButton } = styles;
  return (
    <div className={backButton}>
      <Link href="/blog">
        <a>
          <IoMdArrowBack />
          All Posts
        </a>
      </Link>
    </div>
  );
};

export default BackButton;
