'use client';

import { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, Chip, Stack, Collapse } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../layout/SectionTitle';
import { GridContainer, GridItem } from '../layout/Grid';
import { blogPosts } from '@/data/blog';

function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: 1, p: 3 }}>
        <Typography variant="h3" gutterBottom>
          {post.title}
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
          <Typography variant="caption" color="text.secondary">
            By {post.author}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {post.date}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {post.readTime}
          </Typography>
        </Stack>

        <Typography variant="body1" sx={{ mb: 2 }}>
          {post.excerpt}
        </Typography>

        <Collapse in={expanded}>
          <Box
            sx={{ mb: 2 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Collapse>

        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
          {post.tags.map((tag, i) => (
            <Chip
              key={i}
              label={tag}
              size="small"
              sx={{
                bgcolor: 'primary.light',
                color: 'primary.contrastText',
              }}
            />
          ))}
        </Stack>

        <Button
          onClick={() => setExpanded(!expanded)}
          endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
          sx={{ mt: 'auto' }}
        >
          {expanded ? 'Show Less' : 'Read More'}
        </Button>
      </CardContent>
    </Card>
  );
}

export default function Blog() {
  return (
    <Section id="blog" background="default">
      <Container>
        <SectionTitle
          title="Technical Blog"
          subtitle="Sharing insights on system design, architecture, and engineering for 13 years"
        />

        <Box
          sx={{
            textAlign: 'center',
            mb: 4,
            p: 2,
            bgcolor: 'secondary.light',
            color: 'secondary.contrastText',
            borderRadius: 2,
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            13+ Years of Technical Writing • Thought Leadership • Knowledge Sharing
          </Typography>
        </Box>

        <GridContainer spacing={3}>
          {blogPosts.map((post) => (
            <GridItem key={post.id} xs={12} md={post.featured ? 12 : 6}>
              <BlogCard post={post} />
            </GridItem>
          ))}
        </GridContainer>
      </Container>
    </Section>
  );
}
