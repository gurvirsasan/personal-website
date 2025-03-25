import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import styles from './ProjectCard.module.css';

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
}

export default function ProjectCard({ title, description, imageUrl, projectUrl, tags, ...props }: ProjectCardProps) {
  return (
    <div className={styles.projectCard} {...props}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={250}
          className={styles.projectImage}
        />
        <div className={styles.overlay}>
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className={styles.redirectLink}>
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 