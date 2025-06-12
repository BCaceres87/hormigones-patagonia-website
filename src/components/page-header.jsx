import { useEffect, useState } from 'react';
import BgLoader from './bg-loader'
import styles from './page-header.module.scss'
import Wrapper from './wrapper'

const PageHeader = ({ backgroundImage, title, subtitle }) => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = backgroundImage;
    img.onload = () => setBgLoaded(true);
  }, [backgroundImage]);

  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <BgLoader visible={!bgLoaded} />
      <Wrapper>
        <div className={styles.text_wrapper} style={!bgLoaded ? {visibility: 'hidden'} : {}}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </Wrapper>
    </header>
  )
}

export default PageHeader
