import { Box, Typography, TypographyProps } from '@mui/material';

interface SectionTitleProps extends TypographyProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  sx,
  ...props
}: SectionTitleProps) {
  return (
    <Box
      sx={{
        textAlign: centered ? 'center' : 'left',
        mb: { xs: 6, md: 8 }, // 48px mobile, 64px desktop
        ...sx,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          position: 'relative',
          display: 'inline-block',
          '&::after': centered ? {
            content: '""',
            position: 'absolute',
            bottom: -12,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 80,
            height: 4,
            background: 'linear-gradient(90deg, #14B8A6, #F43F5E)',
            borderRadius: 2,
          } : {},
        }}
        {...props}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="subtitle1"
          sx={{
            mt: 2,
            color: 'text.secondary',
            maxWidth: 800,
            mx: centered ? 'auto' : 0,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
