import { createTheme } from '@mui/material/styles';

// Professional Portfolio Theme - Google Colors
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4285F4', // Google Blue
      light: '#669DF6',
      dark: '#1A73E8',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#34A853', // Google Green
      light: '#5BB974',
      dark: '#1E8E3E',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#EA4335', // Google Red
      light: '#F28B82',
      dark: '#C5221F',
    },
    warning: {
      main: '#FBBC05', // Google Yellow
      light: '#FDD663',
      dark: '#F9AB00',
      contrastText: '#202124',
    },
    success: {
      main: '#34A853', // Google Green
      light: '#5BB974',
      dark: '#1E8E3E',
    },
    info: {
      main: '#4285F4', // Google Blue
      light: '#669DF6',
      dark: '#1A73E8',
    },
    text: {
      primary: '#202124', // Google Dark Gray
      secondary: '#5F6368', // Google Gray
      disabled: '#9AA0A6', // Google Light Gray
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F9FA', // Google Light Background
    },
    divider: '#DADCE0', // Google Border
    action: {
      active: '#4285F4',
      hover: 'rgba(66, 133, 244, 0.08)',
      selected: 'rgba(66, 133, 244, 0.12)',
      disabled: '#9AA0A6',
      disabledBackground: '#F1F3F4',
    },
    // Custom Google colors for direct access
    // @ts-ignore
    google: {
      blue: '#4285F4',
      red: '#EA4335',
      yellow: '#FBBC05',
      green: '#34A853',
    },
    // Custom colors for specific use cases
    // @ts-ignore
    neutral: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
    obsidian: {
      main: '#0A0A0A',
    },
  },

  typography: {
    // Use CSS variable from Next.js font loader, with fallbacks
    fontFamily: "var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",

    // Hero
    h1: {
      fontSize: '96px',
      fontWeight: 700,
      lineHeight: 1.0,
      letterSpacing: '-0.02em',
      '@media (max-width:767px)': {
        fontSize: '48px',
        lineHeight: 1.1,
      },
    },

    // Section titles
    h2: {
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      '@media (max-width:767px)': {
        fontSize: '32px',
      },
    },

    // Card titles
    h3: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '0em',
      '@media (max-width:767px)': {
        fontSize: '20px',
      },
    },

    h4: {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '0em',
    },

    h5: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: 1.4,
    },

    h6: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: 1.4,
    },

    // Hero subtitle
    subtitle1: {
      fontSize: '32px',
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
      '@media (max-width:767px)': {
        fontSize: '20px',
        lineHeight: 1.5,
      },
    },

    subtitle2: {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.6,
    },

    // Main body text
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.7,
      letterSpacing: '0em',
    },

    // Secondary body text (smaller)
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0em',
    },

    // Caption text
    caption: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0em',
    },

    overline: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },

    button: {
      fontSize: '16px',
      fontWeight: 600,
      letterSpacing: '0em',
      textTransform: 'none',
    },
  },

  shape: {
    borderRadius: 16, // Default for cards
  },

  shadows: [
    'none',
    '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // shadow-sm
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // shadow-md
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-lg
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', // shadow-xl
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // shadow-2xl
    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 0 0 1px rgba(0, 0, 0, 0.05)',
    '0 1px 1px rgba(0, 0, 0, 0.06)',
    '0 2px 4px rgba(0, 0, 0, 0.06)',
    '0 4px 8px rgba(0, 0, 0, 0.06)',
    '0 8px 16px rgba(0, 0, 0, 0.06)',
    '0 12px 24px rgba(0, 0, 0, 0.06)',
    '0 16px 32px rgba(0, 0, 0, 0.06)',
    '0 20px 40px rgba(0, 0, 0, 0.06)',
    '0 24px 48px rgba(0, 0, 0, 0.06)',
    '0 28px 56px rgba(0, 0, 0, 0.06)',
    '0 32px 64px rgba(0, 0, 0, 0.06)',
    '0 36px 72px rgba(0, 0, 0, 0.06)',
    '0 40px 80px rgba(0, 0, 0, 0.06)',
    '0 44px 88px rgba(0, 0, 0, 0.06)',
  ],

  spacing: 8, // Base unit: 8px

  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },

  components: {
    // Card component
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          transition: 'all 0.3s ease',
          border: '1px solid #E5E5E5',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          },
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },

    // Button component
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: 600,
          textTransform: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
        sizeLarge: {
          padding: '16px 32px',
          fontSize: '16px',
        },
        sizeSmall: {
          padding: '8px 16px',
          fontSize: '14px',
        },
      },
    },

    // Chip component (for tags/pills)
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 500,
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
        filled: {
          backgroundColor: '#F5F5F5',
          color: '#171717',
          '&:hover': {
            backgroundColor: '#E5E5E5',
          },
        },
      },
    },

    // Typography
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'p',
          subtitle2: 'p',
          body1: 'p',
          body2: 'p',
        },
      },
    },

    // Paper
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        rounded: {
          borderRadius: '16px',
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },

    // Container
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width:1440px)': {
            maxWidth: '1440px',
          },
        },
      },
    },

    // Icon Button
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        },
      },
    },

    // Backdrop
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
      },
    },

    // Drawer
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: 'none',
        },
      },
    },
  },

  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
});

// Type augmentation for custom theme properties
declare module '@mui/material/styles' {
  interface Palette {
    neutral: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    obsidian: {
      main: string;
    };
  }
  interface PaletteOptions {
    neutral?: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    obsidian?: {
      main: string;
    };
  }
}

export default theme;
