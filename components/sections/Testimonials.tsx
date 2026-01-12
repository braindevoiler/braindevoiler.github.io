'use client';

import { Box, Typography, Card, CardContent, Avatar, Link, Chip } from '@mui/material';
import { FormatQuote, LinkedIn, OpenInNew } from '@mui/icons-material';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../layout/SectionTitle';
import { GridContainer, GridItem } from '../layout/Grid';
import { profileData } from '@/data/profile';
import Image from 'next/image';

export default function Testimonials() {
  const { testimonials } = profileData;

  // Function to get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Section id="testimonials" background="alternate">
      <Container>
        <SectionTitle
          title="What People Say"
          subtitle="Recommendations from colleagues and leaders"
        />

        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
          <GridContainer spacing={3} sx={{ justifyContent: 'center' }}>
            {testimonials.map((testimonial, index) => (
              <GridItem key={index} xs={12} md={6}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6,
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    {/* Quote Icon */}
                    <FormatQuote
                      sx={{
                        fontSize: 48,
                        color: 'secondary.main',
                        opacity: 0.3,
                        mb: 1,
                      }}
                    />

                    {/* Testimonial Text */}
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        fontStyle: 'italic',
                        lineHeight: 1.8,
                        color: 'text.secondary',
                      }}
                    >
                      "{testimonial.text}"
                    </Typography>

                    {/* Author Info */}
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      {/* Avatar */}
                      <Avatar
                        src={(testimonial as any).imageUrl}
                        alt={testimonial.name}
                        sx={{
                          width: 56,
                          height: 56,
                          bgcolor: 'secondary.main',
                          fontSize: '1.25rem',
                          fontWeight: 600,
                        }}
                      >
                        {getInitials(testimonial.name)}
                      </Avatar>

                      {/* Details */}
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                          <Typography variant="h4" sx={{ fontWeight: 600 }}>
                            {testimonial.name}
                          </Typography>
                          {(testimonial as any).linkedinUrl && (
                            <Link
                              href={(testimonial as any).linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                color: '#0077B5',
                                '&:hover': {
                                  color: '#005885',
                                }
                              }}
                            >
                              <LinkedIn sx={{ fontSize: 20 }} />
                            </Link>
                          )}
                        </Box>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 1, lineHeight: 1.4 }}
                        >
                          {testimonial.title}
                        </Typography>

                        <Chip
                          label={testimonial.relationship}
                          size="small"
                          sx={{
                            height: 24,
                            fontSize: '0.75rem',
                            bgcolor: 'action.hover',
                            borderRadius: 1,
                          }}
                        />

                        <Typography
                          variant="caption"
                          color="text.disabled"
                          sx={{ display: 'block', mt: 0.5 }}
                        >
                          {testimonial.date}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </GridItem>
            ))}
          </GridContainer>
        </Box>
      </Container>
    </Section>
  );
}
