import { styles } from '../styles/styles';

export default function MegasenaSkeleton() {
  return (
    <div style={styles.skeletonContainer}>
      
      <h2 style={styles.skeletonTitle}>
        <div style={{ ...styles.skeletonLine, width: '200px', height: '30px' }} />
      </h2>

      <p>
        <div style={{ ...styles.skeletonLine, width: '150px' }} />
      </p>

      <div style={styles.skeletonRow}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} style={styles.skeletonCircle} />
        ))}
      </div>

      <p style={{ marginTop: '20px' }}>
        <div style={{ ...styles.skeletonLine, width: '250px' }} />
      </p>

    </div>
  );
}