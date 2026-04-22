import { createPortal } from 'react-dom';
import Image from 'next/image';
import { useCallback, useEffect, useId, useLayoutEffect, useState } from 'react';
import { HiArrowTopRightOnSquare, HiChevronDoubleRight, HiXMark } from 'react-icons/hi2';
import Section from '../Section';
import Card from '../../ui/Card';
import Heading from '../../ui/Heading';
import Text from '../../ui/Text';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';
import plate from '../mediaPlate.module.css';
import styles from './AboutSection.module.css';

export type CourseEntry = {
  code: string;
  name: string;
};

/** UTM calendar course URLs use a lowercase code + H5 suffix, e.g. csc207h5, mat223h5. */
export function utmCourseCalendarUrl(code: string): string {
  const slug = `${code.replace(/\s/g, '').toLowerCase()}h5`;
  return `https://utm.calendar.utoronto.ca/course/${slug}`;
}

const CS_COURSES: CourseEntry[] = [
  { code: 'CSC207', name: 'Software Design' },
  { code: 'CSC209', name: 'Software Tools & Systems' },
  { code: 'CSC236', name: 'Theory of Computation' },
  { code: 'CSC258', name: 'Computer Organization' },
  { code: 'CSC263', name: 'Data Structures & Analysis' },
  { code: 'CSC309', name: 'Programming on the Web' },
  { code: 'CSC343', name: 'Databases' },
  { code: 'CSC392', name: 'Implementation Project' },
  { code: 'CSC492', name: 'Advanced Implementation' },
];

const MAT_COURSES: CourseEntry[] = [
  { code: 'MAT102', name: 'Mathematical proofs' },
  { code: 'MAT135', name: 'Differential calculus' },
  { code: 'MAT136', name: 'Integral calculus' },
  { code: 'MAT223', name: 'Linear algebra I' },
  { code: 'MAT232', name: 'Multivariable calculus' },
  { code: 'MAT344', name: 'Combinatorics' },
  { code: 'MAT322', name: 'Numerical analysis' },
];

const STA_COURSES: CourseEntry[] = [
  { code: 'STA107', name: 'Intro to statistical reasoning' },
  { code: 'STA256', name: 'Probability I' },
  { code: 'STA260', name: 'Probability II' },
  { code: 'STA258', name: 'Applied statistics' },
  { code: 'STA302', name: 'Regression' },
  { code: 'STA304', name: 'Survey Sampling' },
  { code: 'STA305', name: 'Experimental Design' },
];

/** Short summaries for the course drawer (calendar remains source of truth for official wording). */
export const COURSE_DESCRIPTIONS: Record<string, string> = {
  CSC207:
    'An introduction to software design and development using abstraction, modularity, and object-oriented programming. Emphasis on large program structure, design patterns, testing, and maintainability.',
  CSC209:
    'Software tools and systems programming in a Unix environment. Topics include C programming, processes, system calls, memory management, signals, and concurrency.',
  CSC236:
    'Introduction to the theory of computation. Topics include formal languages, automata, grammars, computability, and complexity.',
  CSC258:
    'Introduction to computer organization. Topics include digital logic, data representation, processor architecture, assembly language, and memory systems.',
  CSC263:
    'Data structures and analysis of algorithms. Topics include lists, stacks, queues, trees, graphs, hashing, and algorithm complexity.',
  CSC309:
    'Programming on the web. Topics include front-end and back-end development, HTTP, databases, and modern web frameworks.',
  CSC343:
    'Introduction to databases. Topics include the relational model, SQL, schema design, normalization, and database applications.',
  CSC392:
    'A supervised computer science implementation project involving the design and development of a substantial software system.',
  CSC492:
    'An advanced implementation project emphasizing independent work, system design, and full-scale software development.',
  MAT102:
    'Introduction to mathematical proofs. Topics include logic, set theory, functions, relations, and techniques of rigorous mathematical reasoning and proof.',
  MAT135:
    'Differential calculus of one variable. Topics include limits, continuity, derivatives, and applications such as optimization and related rates.',
  MAT136:
    'Integral calculus of one variable. Topics include techniques of integration, applications of the definite integral, and an introduction to differential equations.',
  MAT223:
    'Linear algebra I. Topics include systems of linear equations, matrices, vector spaces, linear transformations, eigenvalues, and eigenvectors.',
  MAT232:
    'Multivariable calculus. Topics include partial derivatives, multiple integrals, vector calculus, and applications in higher dimensions.',
  MAT344:
    'Introduction to combinatorics. Topics include counting techniques, permutations, combinations, graph theory, and discrete structures.',
  MAT322:
    'Introduction to numerical analysis. Topics include numerical methods for solving equations, interpolation, numerical integration, and error analysis.',
  STA107:
    'An introduction to statistical reasoning and data analysis. Topics include descriptive statistics, probability, sampling, and interpretation of data in real-world contexts.',
  STA256:
    'Introduction to probability and statistics. Topics include probability models, random variables, expectation, and basic statistical inference.',
  STA260:
    'Continuation of probability and statistics. Topics include estimation, hypothesis testing, and applications of statistical methods.',
  STA258:
    'Applied statistics. Topics include probability distributions, estimation, hypothesis testing, regression, and practical data analysis techniques.',
  STA302: 'Regression analysis. Topics include simple and multiple regression, model diagnostics, and inference.',
  STA304:
    'Survey sampling and observational data analysis. Topics include sampling techniques, bias, and analysis of survey data.',
  STA305:
    'Design and analysis of experiments. Topics include experimental design principles, ANOVA, and interpretation of results.',
};

const PORTAL_ID = 'portfolio-portal-root';

const COURSE_PREVIEW = 4;

type TrackKey = 'cs' | 'sta' | 'mat';

export default function AboutSection() {
  const [selected, setSelected] = useState<CourseEntry | null>(null);
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);
  const [trackExpanded, setTrackExpanded] = useState<Record<TrackKey, boolean>>({
    cs: false,
    sta: false,
    mat: false,
  });
  const drawerTitleId = useId();

  const toggleTrack = useCallback((key: TrackKey) => {
    setTrackExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  useLayoutEffect(() => {
    if (typeof document === 'undefined') return;
    setPortalEl(document.getElementById(PORTAL_ID));
  }, []);

  useEffect(() => {
    if (!selected) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [selected]);

  const close = useCallback(() => setSelected(null), []);

  const drawer =
    portalEl &&
    selected &&
    createPortal(
      <div className={styles.drawerRoot} role="presentation">
        <button type="button" className={styles.drawerBackdrop} onClick={close} aria-label="Close course details" />
        <div
          className={styles.drawerPanel}
          role="dialog"
          aria-modal="true"
          aria-labelledby={drawerTitleId}
        >
          <div className={styles.drawerHeader}>
            <p id={drawerTitleId} className={styles.drawerTitle}>
              <span className={styles.drawerCode}>{selected.code}</span>
              <span className={styles.drawerName}>{selected.name}</span>
            </p>
            <button type="button" className={styles.drawerClose} onClick={close} aria-label="Close">
              <HiXMark aria-hidden />
            </button>
          </div>
          <div className={styles.drawerBody}>
            {COURSE_DESCRIPTIONS[selected.code] ? (
              <p className={styles.drawerDesc}>{COURSE_DESCRIPTIONS[selected.code]}</p>
            ) : null}
            <Text variant="muted" balance>
              Prerequisites, exclusions, and the full official entry are on the UTM Academic Calendar.
            </Text>
            <Button
              href={utmCourseCalendarUrl(selected.code)}
              variant="primary"
              size="md"
              className={styles.drawerCta}
              rightSlot={<HiArrowTopRightOnSquare aria-hidden />}
            >
              Read more on calendar
            </Button>
          </div>
        </div>
      </div>,
      portalEl,
    );

  return (
    <Section id="education">
      {drawer}

      <header className={styles.intro}>
        <Heading level={2} balance>
          Education
        </Heading>
        <Text variant="muted" balance>
          Honours B.Sc. — major in computer science, minors in mathematics and statistics. Focus on systems, theory, and
          the web.
        </Text>
      </header>

      <div className={styles.bento}>
        <Card variant="outline" padding="none" as="article" className={styles.heroCard}>
          <div className={styles.heroCardBody}>
            <div className={styles.heroTop}>
              <div className={`${plate.plate} ${styles.logoPlate}`}>
                <Image src="/uoft.png" alt="University of Toronto crest" width={112} height={112} className={styles.logoImg} />
              </div>
              <div className={styles.heroMeta}>
                <p className={styles.institution}>University of Toronto</p>
                <p className={styles.degree}>Honours Bachelor of Science</p>
                <p className={styles.years}>2019 — 2024</p>
                <div className={styles.tagRow}>
                  <Badge tone="neutral">CS major</Badge>
                  <Badge tone="outline">Math minor</Badge>
                  <Badge tone="outline">Stats minor</Badge>
                </div>
              </div>
            </div>
            <ul className={styles.wins}>
              <li>Graduated with Distinction</li>
              <li>Dean&apos;s List Scholar (2020–2021)</li>
              <li>Google Developer Student Club</li>
            </ul>
          </div>
        </Card>

        <CourseTrack
          label="Computer science"
          courses={CS_COURSES}
          expanded={trackExpanded.cs}
          onToggleExpand={() => toggleTrack('cs')}
          onSelectCourse={setSelected}
        />

        <CourseTrack
          label="Statistics"
          courses={STA_COURSES}
          expanded={trackExpanded.sta}
          onToggleExpand={() => toggleTrack('sta')}
          onSelectCourse={setSelected}
        />

        <CourseTrack
          label="Mathematics"
          courses={MAT_COURSES}
          expanded={trackExpanded.mat}
          onToggleExpand={() => toggleTrack('mat')}
          onSelectCourse={setSelected}
        />
      </div>
    </Section>
  );
}

function CourseTrack({
  label,
  courses,
  expanded,
  onToggleExpand,
  onSelectCourse,
}: {
  label: string;
  courses: CourseEntry[];
  expanded: boolean;
  onToggleExpand: () => void;
  onSelectCourse: (course: CourseEntry) => void;
}) {
  const hasMore = courses.length > COURSE_PREVIEW;
  const visible = expanded || !hasMore ? courses : courses.slice(0, COURSE_PREVIEW);
  const extra = courses.length - COURSE_PREVIEW;

  return (
    <div className={styles.trackCell}>
      <p className={styles.trackLabel}>{label}</p>
      {expanded ? (
        <div className={styles.pillTrack}>
          {courses.map((course) => (
            <CoursePill key={course.code} course={course} onOpen={() => onSelectCourse(course)} />
          ))}
        </div>
      ) : (
        <div className={styles.collapsedTrack}>
          <div className={styles.pillScroller}>
            {visible.map((course) => (
              <CoursePill key={course.code} course={course} onOpen={() => onSelectCourse(course)} />
            ))}
          </div>
          {hasMore ? (
            <button
              type="button"
              className={styles.showAllChip}
              onClick={onToggleExpand}
              aria-expanded="false"
              aria-label={`Show all ${courses.length} ${label} courses`}
            >
              <HiChevronDoubleRight className={styles.showAllIcon} aria-hidden />
              <span className={styles.showAllMeta}>+{extra}</span>
            </button>
          ) : null}
        </div>
      )}
      {expanded && hasMore ? (
        <button
          type="button"
          className={styles.showLessBtn}
          onClick={onToggleExpand}
          aria-expanded={true}
          aria-label={`Show fewer ${label} courses`}
        >
          Show fewer
        </button>
      ) : null}
    </div>
  );
}

function CoursePill({ course, onOpen }: { course: CourseEntry; onOpen: () => void }) {
  return (
    <button
      type="button"
      className={styles.courseTile}
      onClick={onOpen}
      aria-label={`${course.code}: ${course.name}. Open course details`}
    >
      <strong className={styles.courseCode}>{course.code}</strong>
      <span className={styles.courseTitle}>{course.name}</span>
    </button>
  );
}
