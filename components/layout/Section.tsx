import { Box, BoxProps } from '@mui/material';
import { ReactNode } from 'react';

interface SectionProps extends BoxProps {
  id?: string;
  background?: 'default' | 'alternate';
  children: ReactNode;
}

export default function Section({
  id,
  background = 'default',
  children,
  sx,
  ...props
}: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        py: { xs: 8, md: 16 }, // 64px mobile, 128px desktop
        bgcolor: background === 'alternate' ? 'background.paper' : 'background.default',
        position: 'relative',
        scrollMarginTop: '-64px', // Negate sticky header space
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
