import styles from './bg-loader.module.scss'

const BgLoader = ({ visible, message = 'Preparando tu experiencia...' }) => {
  if (!visible) return null;
  return (
    <div className={styles.skeleton} style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 10000}}>
      <div className={styles.bgSkeleton}>
        <div className={styles.bgSkeleton__spinner}></div>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default BgLoader;
