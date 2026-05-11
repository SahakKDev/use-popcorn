import { useState } from 'react';
import Star from './Star';
import styles from './Star.module.css';

export default function StarRate({
  size,
  color,
  quantity = 10,
  onClick = () => {},
}) {
  const [hoveredStar, setHoveredStar] = useState(null);
  const [selectedStar, setSelectedStar] = useState(null);

  function handleUpdateHoverState(order) {
    setHoveredStar(order);
  }

  function handleUpdateRating(order) {
    setSelectedStar(order);

    onClick?.(order)
  }

  return (
    <div className={styles.container}>
      {Array.from({ length: quantity }, (_, i) => (
        <Star
          key={i.toString()}
          order={i + 1}
          size={size}
          color={color}
          onHover={handleUpdateHoverState}
          onClick={handleUpdateRating}
          fill={
            selectedStar && !hoveredStar
              ? selectedStar >= i + 1
              : hoveredStar >= i + 1
          }
        />
      ))}

      <span
        style={{ color: '#FFD700', width: '2.1rem' }}
        className={styles.label}
      >
        {selectedStar && !hoveredStar ? selectedStar : hoveredStar}
      </span>
    </div>
  );
}
