import styles from './caravan.module.css';
import { FaRegHeart } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
const Caravan = () => {
  return (
    <div className={styles.caravan}>
      <div className={styles['caravan-image']}>
        <img
          src='https://images.unsplash.com/photo-1592351763700-b9b35a6465ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
        />
        <div className={styles['heartIcon-div']}>
          <FaRegHeart className={styles.heartIcon} />
        </div>
      </div>
      <div className={styles['caravans-info']}>
        <div className={styles['caravans-content']}>
          <h4>Motocaravan- Mersin</h4>
          <span>4 kişilik · 2023 yapımı </span>
          <span>3 gece · 19-23 Nis</span>
          <p className={styles.price}>3.500₺ gece</p>
        </div>
        <div className={styles.rating}>
          <FaStar className={styles.starIcon} />
          4.97
        </div>
      </div>
    </div>
  );
};

export default Caravan;