import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Card from '../../ui/Card';
import Badge from '../../ui/Badge';
import Inline from '../../ui/Inline';
import Text from '../../ui/Text';
import styles from './ProjectCard.module.css';

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
  featured?: boolean;
}

export default function ProjectCard({ title, description, imageUrl, projectUrl, tags, featured = false }: ProjectCardProps) {
  return (
    <Card variant="elevated" padding="none" className={`${styles.root} ${featured ? styles.featured : ''}`.trim()}>
      <div className={styles.imageWrap}>
        <Image src={imageUrl} alt={title} width={960} height={540} className={styles.image} />
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label={`Open ${title}`}>
          <FaExternalLinkAlt />
        </a>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <Text variant="muted">{description}</Text>
        <Inline gap="xs" wrap className={styles.tags}>
          {tags.map((tag) => (
            <Badge key={tag} tone="outline">
              {tag}
            </Badge>
          ))}
        </Inline>
      </div>
    </Card>
  );
}
