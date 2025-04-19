import { styles } from '../styles/styles';

export default function MegasenaSkeleton() {
  return (
    <div style={styles.skeletonContainer}>
      <div style={styles.skeletonTitle} />
      <div style={styles.skeletonLine} />
      <div style={styles.skeletonRow}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} style={styles.skeletonCircle} />
        ))}
      </div>
      <div style={styles.skeletonLine} />
    </div>
  );
}