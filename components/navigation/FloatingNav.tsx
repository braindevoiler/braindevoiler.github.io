'use client';

import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Box,
  Container,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close,
  Home,
  Person,
  Work,
  Code,
  Folder,
  School,
  EmojiEvents,
  MenuBook,
  FormatQuote,
  Email,
} from '@mui/icons-material';

export default function FloatingNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide
        setIsVisible(false);
      } else {
        // Scrolling up - show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Detect active section
      const sections = ['home', 'about', 'experience', 'skills', 'testimonials', 'education', 'achievements', 'community', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Desktop nav items
  const desktopNavItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Education', href: '#education' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Community', href: '#community' },
  ];

  // Mobile nav items (all sections with icons)
  const mobileNavItems = [
    { label: 'About', href: '#about', icon: <Person /> },
    { label: 'Experience', href: '#experience', icon: <Work /> },
    { label: 'Skills', href: '#skills', icon: <Code /> },
    { label: 'Testimonials', href: '#testimonials', icon: <FormatQuote /> },
    { label: 'Education', href: '#education', icon: <School /> },
    { label: 'Achievements', href: '#achievements', icon: <EmojiEvents /> },
    { label: 'Community', href: '#community', icon: <MenuBook /> },
    { label: 'Contact', href: '#contact', icon: <Email /> },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const drawer = (
    <Box sx={{ width: 280 }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
          Navigation
        </Typography>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            width: 44,
            height: 44,
            '&:hover': { bgcolor: 'error.light', color: 'error.main' }
          }}
        >
          <Close />
        </IconButton>
      </Box>
      <List sx={{ pt: 1 }}>
        {mobileNavItems.map((item) => {
          const sectionId = item.href.replace('#', '');
          const isActive = activeSection === sectionId;
          return (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => handleNavClick(item.href)}
                sx={{
                  minHeight: 52,
                  px: 2.5,
                  bgcolor: isActive ? 'primary.light' : 'transparent',
                  borderLeft: isActive ? '3px solid' : '3px solid transparent',
                  borderColor: isActive ? 'primary.main' : 'transparent',
                  '&:hover': {
                    bgcolor: isActive ? 'primary.light' : 'action.hover',
                  },
                }}
              >
                <ListItemIcon sx={{
                  minWidth: 40,
                  color: isActive ? 'primary.main' : 'text.secondary'
                }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'primary.main' : 'text.primary',
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          transform: isVisible ? 'translateY(0)' : 'translateY(-150%)',
          transition: 'transform 0.3s ease-in-out',
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
      >
        <Container maxWidth="lg" sx={{ pt: { xs: 1.5, md: 2 } }}>
          <AppBar
            position="static"
            elevation={0}
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
              overflow: 'hidden',
            }}
          >
            <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 3 }, py: { xs: 1, md: 1.5 } }}>
              {/* Left: Home Icon */}
              <IconButton
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                sx={{
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'rgba(66, 133, 244, 0.08)',
                  },
                }}
              >
                <Home sx={{ fontSize: 28 }} />
              </IconButton>

              {/* Center: Desktop Navigation Links */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
                {desktopNavItems.map((item) => {
                  const sectionId = item.href.replace('#', '');
                  const isActive = activeSection === sectionId;
                  return (
                    <Button
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                      sx={{
                        color: isActive ? 'primary.main' : 'text.primary',
                        textTransform: 'none',
                        fontWeight: isActive ? 600 : 500,
                        fontSize: '15px',
                        px: 2.5,
                        py: 1,
                        borderRadius: '8px',
                        position: 'relative',
                        transition: 'all 0.2s ease',
                        bgcolor: isActive ? 'rgba(66, 133, 244, 0.08)' : 'transparent',
                        '&:hover': {
                          color: 'primary.main',
                          bgcolor: 'rgba(66, 133, 244, 0.08)',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  );
                })}
              </Box>

              {/* Right: CTA Button (Desktop) / Mobile Menu (Mobile) */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleNavClick('#contact')}
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '15px',
                    px: 3,
                    py: 1,
                    borderRadius: '8px',
                    boxShadow: 'none',
                    '&:hover': {
                      boxShadow: '0 4px 12px rgba(52, 168, 83, 0.3)',
                      transform: 'translateY(-1px)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  Contact Me
                </Button>

                {/* Mobile Menu Icon */}
                <IconButton
                  sx={{
                    display: { xs: 'flex', md: 'none' },
                    color: 'primary.main',
                  }}
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
