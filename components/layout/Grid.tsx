import { Grid2 as MuiGrid, Grid2Props } from '@mui/material';

interface GridProps extends Grid2Props {
  children: React.ReactNode;
}

// Grid Container Component
export function GridContainer({ children, spacing = 3, sx, ...props }: GridProps) {
  return (
    <MuiGrid
      container
      spacing={spacing} // 24px default
      sx={{
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiGrid>
  );
}

// Grid Item Component - use size prop for MUI v6 Grid2
export function GridItem({ children, xs = 12, sm, md, lg, sx, ...props }: GridProps) {
  // Build size object, only including defined values
  // Values cascade: xs -> sm -> md -> lg
  const size: { xs?: number; sm?: number; md?: number; lg?: number } = { xs };
  if (sm !== undefined) size.sm = sm;
  if (md !== undefined) size.md = md;
  if (lg !== undefined) size.lg = lg;

  return (
    <MuiGrid
      size={size}
      sx={{
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiGrid>
  );
}

// Default export for convenience
export default { Container: GridContainer, Item: GridItem };
