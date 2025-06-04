import { Carousel } from 'antd';
import styles from './project-card.module.scss'
import { useRef } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const ProjectCard = ({ images, title, description, tags }) => {
  const carouselRef = useRef()

  if(!images) return null
  
  return(
   <div className={styles.container}>
    <div className={styles.carousel_wrapper}>
      <Carousel effect="fade" ref={carouselRef}>
        {images.map((image, index) => (
          <div key={index} classsName={styles.image_wrapper}>
            <img src={image} alt="Image" className={styles.image}/>
          </div>
        ))}
      </Carousel>
      {images.length > 1 && <div className={styles.buttons_wrapper}>
        <button className={styles.button_left} onClick={() => carouselRef.current.prev()}>
          <LeftOutlined />
        </button>
        <button className={styles.button_right} onClick={() => carouselRef.current.next()}>
          <RightOutlined />
        </button>
      </div>}
    </div>
    <div className={styles.info_wrapper}>
      <div className={styles.text_wrapper}>
        <h5>{title}</h5>
        <span>{description}</span>
      </div>
      {tags && <div className={styles.tags_wrapper}>
        {
          tags.map((tag, index) => (
            <div key={index} className={styles.tag}>
              <span>
                {tag}
              </span>
            </div>
          ))
        }
      </div>}
    </div>
   </div>
  )
};

export default ProjectCard;