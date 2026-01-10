'use client';

import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import { Download } from '@mui/icons-material';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../layout/SectionTitle';
import { GridContainer, GridItem } from '../layout/Grid';
import { gateNotes } from '@/data/gateNotes';

// Google colors for cycling
const GOOGLE_COLORS = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];

export default function GateNotes() {
  return (
    <Section id="gate-notes" background="default">
      <Container>
        <SectionTitle
          title="GATE CS Notes"
          subtitle="Free comprehensive notes trusted by thousands of GATE aspirants since 2012"
        />

        <Box
          sx={{
            textAlign: 'center',
            mb: 4,
            p: 3,
            background: 'linear-gradient(135deg, #4285F4 0%, #34A853 50%, #FBBC05 100%)',
            color: 'white',
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" gutterBottom>
            13 Years of Educational Impact
          </Typography>
          <Typography variant="body1">
            These notes have helped thousands of students prepare for GATE Computer Science exam.
            Created by an AIR 54 ranker, freely available to the community.
          </Typography>
        </Box>

        <GridContainer spacing={3} sx={{ justifyContent: 'center' }}>
          {gateNotes.map((note, index) => {
            const accentColor = GOOGLE_COLORS[index % GOOGLE_COLORS.length];
            return (
              <GridItem key={index} xs={12} sm={6} md={6}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    borderTop: `3px solid ${accentColor}`,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 25px -5px ${accentColor}30`,
                    },
                  }}
                >
                  <CardContent sx={{ flex: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ fontSize: 48, mb: 2, textAlign: 'center' }}>
                      {note.icon}
                    </Box>

                    <Typography variant="h3" gutterBottom align="center">
                      {note.subject}
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      {note.description}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary', mb: 0.5, display: 'block' }}>
                        Topics Covered:
                      </Typography>
                      {note.topics.slice(0, 4).map((topic, i) => (
                        <Typography
                          key={i}
                          variant="caption"
                          sx={{
                            display: 'block',
                            '&::before': {
                              content: '"• "',
                              color: accentColor,
                              mr: 0.5,
                            },
                          }}
                        >
                          {topic}
                        </Typography>
                      ))}
                      {note.topics.length > 4 && (
                        <Typography variant="caption" color="text.disabled">
                          +{note.topics.length - 4} more topics
                        </Typography>
                      )}
                    </Box>

                    <Button
                      variant="contained"
                      startIcon={<Download />}
                      href={note.pdfPath}
                      download
                      sx={{
                        mt: 'auto',
                        bgcolor: accentColor,
                        boxShadow: 'none',
                        '&:hover': {
                          bgcolor: accentColor,
                          filter: 'brightness(0.9)',
                          boxShadow: 2,
                        },
                      }}
                    >
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              </GridItem>
            );
          })}
        </GridContainer>
      </Container>
    </Section>
  );
}
