'use client';

import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import { Download } from '@mui/icons-material';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../layout/SectionTitle';
import { GridContainer, GridItem } from '../layout/Grid';
import { gateNotes } from '@/data/gateNotes';
import { trackEvent } from '@/lib/analytics';

// Google colors for cycling
const GOOGLE_COLORS = ['#4285F4', '#EA4335', '#F59E0B', '#34A853'];

export default function GateNotes() {
  return (
    <Section id="gate-notes" background="default">
      <Container>
        <SectionTitle
          title="GATE CS Notes"
          subtitle="Free comprehensive notes downloaded 100K+ times by GATE aspirants since 2013"
        />

        <Box
          sx={{
            textAlign: 'center',
            mb: 4,
            p: 3,
            background: 'linear-gradient(135deg, #4285F4 0%, #34A853 50%, #F59E0B 100%)',
            color: 'white',
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" gutterBottom>
            100K+ Downloads • 13 Years of Impact
          </Typography>
          <Typography variant="body1">
            These notes have helped over 100,000 students prepare for GATE Computer Science exam.
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

                    <Box sx={{ mt: 'auto', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      {note.notes.handwritten && (
                        <Button
                          component="a"
                          variant="contained"
                          startIcon={<Download />}
                          href={note.notes.handwritten}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackEvent('download', 'GATE Notes Handwritten', note.notes.handwritten?.split('/').pop())}
                          sx={{
                            bgcolor: accentColor,
                            boxShadow: 'none',
                            '&:hover': {
                              bgcolor: accentColor,
                              filter: 'brightness(0.9)',
                              boxShadow: 2,
                            },
                          }}
                        >
                          Download Handwritten
                        </Button>
                      )}
                      {note.notes.digitized && (
                        <Button
                          component="a"
                          variant="outlined"
                          startIcon={<Download />}
                          href={note.notes.digitized}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackEvent('download', 'GATE Notes Digitized', note.notes.digitized?.split('/').pop())}
                          sx={{
                            color: accentColor,
                            borderColor: accentColor,
                            borderWidth: 2,
                            '&:hover': {
                              borderWidth: 2,
                              borderColor: accentColor,
                              bgcolor: `${accentColor}10`,
                            },
                          }}
                        >
                          Download Digitized
                        </Button>
                      )}
                    </Box>
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
