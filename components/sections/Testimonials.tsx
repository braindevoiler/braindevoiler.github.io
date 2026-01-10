'use client';

import { Box, Typography, Card, CardContent } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../layout/SectionTitle';
import { GridContainer, GridItem } from '../layout/Grid';
import { profileData } from '@/data/profile';

export default function Testimonials() {
  const { testimonials } = profileData;

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
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <FormatQuote
                      sx={{
                        fontSize: 48,
                        color: 'secondary.main',
                        opacity: 0.3,
                        mb: 1,
                      }}
                    />

                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        fontStyle: 'italic',
                        lineHeight: 1.8,
                      }}
                    >
                      "{testimonial.text}"
                    </Typography>

                    <Box sx={{ borderLeft: '3px solid', borderColor: 'secondary.main', pl: 2 }}>
                      <Typography variant="h4" gutterBottom>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.title}
                      </Typography>
                      <Typography variant="caption" color="text.disabled">
                        {testimonial.relationship} • {testimonial.date}
                      </Typography>
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
