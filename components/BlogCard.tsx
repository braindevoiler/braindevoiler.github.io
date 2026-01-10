'use client';

import { useState } from 'react';
import styles from '@/app/page.module.css';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className={styles.blogCard}>
      <h3>{post.title}</h3>
      <p className={styles.blogExcerpt}>{post.excerpt}</p>
      <div className={styles.blogMeta}>
        <span className={styles.blogAuthor}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
          {post.author}
        </span>
        <span className={styles.blogDate}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          {post.date}
        </span>
        <span className={styles.blogReadTime}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          {post.readTime}
        </span>
      </div>
      <div className={styles.blogTags}>
        {post.tags.map((tag) => (
          <span key={tag} className={styles.blogTag}>
            {tag}
          </span>
        ))}
      </div>
      <div
        className={`${styles.blogContent} ${isExpanded ? styles.expanded : ''}`}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <button
        className={styles.readMoreBtn}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Show Less' : 'Read More'}
      </button>
    </article>
  );
}
