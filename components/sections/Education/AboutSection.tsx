import SectionCard from '../../SectionCard/SectionCard';
import Image from 'next/image';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <SectionCard id="education" title="Education" isTallSection={true}>
      <div className={styles.aboutContent}>
        <div className={styles.education}>
          <Image
            src="/uoft.png"
            alt="University of Toronto Logo"
            width={200}
            height={200}
            className={styles.uoftLogo}
          />
          <div className={styles.educationDetails}>
            {/* <h3>University of Toronto</h3> */}
            <div className={styles.degreeContainer}>
              <h4>Honours Bachelor of Science</h4>
              <span className={styles.year}>2019 - 2024</span>
            </div>
            <div className={styles.majorMinorContainer}>
              <span className={styles.majorBadge}><span>Computer Science</span></span>
              <span className={styles.minorBadge}><span>Mathematics & Statistics</span></span>
            </div>
            <p className={styles.achievement}>
              <span className={styles.star}>⭐</span> Graduated with Distinction
            </p>
            <p className={styles.achievement}>
              <span className={styles.star}>⭐</span> Dean's List Scholar <span className={styles.year}>2020-2021</span>
            </p>
            <p className={styles.achievement}>
              <span className={styles.star}>⭐</span> Google Developer Student Club
            </p>
          </div>
        </div>
        <div className={styles.courses}>
          <h3>Relevant Courses</h3>
          <div className={styles.courseSections}>
            <div className={styles.courseSection}>
              <h4>Computer Science</h4>
              <ul>
                <li><span className={styles.courseCode}>CSC207</span><span className={styles.courseDescription}>Software Design</span></li>
                <li><span className={styles.courseCode}>CSC209</span><span className={styles.courseDescription}>Software Tools and Systems Programming</span></li>
                <li><span className={styles.courseCode}>CSC236</span><span className={styles.courseDescription}>Theory of Computation</span></li>
                <li><span className={styles.courseCode}>CSC258</span><span className={styles.courseDescription}>Computer Organization</span></li>
                <li><span className={styles.courseCode}>CSC263</span><span className={styles.courseDescription}>Data Structures and Analysis</span></li>
                <li><span className={styles.courseCode}>CSC309</span><span className={styles.courseDescription}>Programming of the Web</span></li>
                <li><span className={styles.courseCode}>CSC343</span><span className={styles.courseDescription}>Introduction to Databases</span></li>
                <li><span className={styles.courseCode}>CSC392</span><span className={styles.courseDescription}>Computer Science Implementation Project</span></li>
                <li><span className={styles.courseCode}>CSC492</span><span className={styles.courseDescription}>Advanced Implementation Project</span></li>
              </ul>
            </div>
            <div className={styles.courseSection}>
              <h4>Statistics</h4>
              <ul>
                <li><span className={styles.courseCode}>STA256</span><span className={styles.courseDescription}>Probability and Statistics I</span></li>
                <li><span className={styles.courseCode}>STA260</span><span className={styles.courseDescription}>Probability and Statistics II</span></li>
                <li><span className={styles.courseCode}>STA302</span><span className={styles.courseDescription}>Regression Analysis</span></li>
                <li><span className={styles.courseCode}>STA304</span><span className={styles.courseDescription}>Survey Sampling and Observational Data</span></li>
                <li><span className={styles.courseCode}>STA305</span><span className={styles.courseDescription}>Experimental Design</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
} 