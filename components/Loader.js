import { Player } from '@lottiefiles/react-lottie-player';
import styles from '../styles/components/loader.module.scss';

const Loader = () => {
  const { container } = styles;
  return (
    <div id="loading_animation" className={container}>
      <Player
        autoplay
        loop
        speed={2.2}
        src="./loader.json"
        style={{ height: '200px', width: '200px' }}
      ></Player>
    </div>
  );
};

export default Loader;
