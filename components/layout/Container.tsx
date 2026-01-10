import { Container as MuiContainer, ContainerProps as MuiContainerProps } from '@mui/material';

interface ContainerProps extends MuiContainerProps {
  children: React.ReactNode;
}

export default function Container({ children, sx, ...props }: ContainerProps) {
  return (
    <MuiContainer
      maxWidth="lg"
      sx={{
        px: { xs: 3, md: 10 }, // 24px mobile, 80px desktop
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiContainer>
  );
}
