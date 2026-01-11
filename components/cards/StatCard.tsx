'use client';

import { Card, CardContent, Typography } from '@mui/material';

// Brand colors matching the hero chips
const COLORS = {
  blue: '#4285F4',    // Google Blue
  amber: '#F59E0B',   // PayPal Amber
  green: '#34A853',   // IISc Green
  red: '#DB4437',     // Muted red (backup)
  yellow: '#FBBC05',  // Google Yellow (backup)
};

interface StatCardProps {
  number: string;
  label: string;
  color?: 'blue' | 'amber' | 'green' | 'red' | 'yellow';
}

export default function StatCard({ number, label, color = 'blue' }: StatCardProps) {
  const accentColor = COLORS[color];

  return (
    <Card
      sx={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        border: '1px solid',
        borderColor: 'divider',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: `0 20px 25px -5px ${accentColor}30, 0 10px 10px -5px ${accentColor}20`,
          borderColor: accentColor,
        },
      }}
    >
      <CardContent
        sx={{
          textAlign: 'center',
          py: 3,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: accentColor,
            fontWeight: 700,
            fontSize: { xs: '32px', md: '48px' },
            mb: 0.5,
          }}
        >
          {number}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            fontWeight: 500,
          }}
        >
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
}
