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
  Divider,
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
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'achievements', 'gate-notes', 'testimonials', 'contact'];
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

  // Desktop nav items (compact)
  const desktopNavItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'GATE Notes', href: '#gate-notes' },
  ];

  // Mobile nav items (all sections with icons)
  const mobileNavItems = [
    { label: 'About', href: '#about', icon: <Person /> },
    { label: 'Experience', href: '#experience', icon: <Work /> },
    { label: 'Skills', href: '#skills', icon: <Code /> },
    { label: 'Projects', href: '#projects', icon: <Folder /> },
    { label: 'Education', href: '#education', icon: <School /> },
    { label: 'Achievements', href: '#achievements', icon: <EmojiEvents /> },
    { label: 'GATE Notes', href: '#gate-notes', icon: <MenuBook /> },
    { label: 'Testimonials', href: '#testimonials', icon: <FormatQuote /> },
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
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0 } }}>
            <IconButton
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              sx={{
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.light',
                },
              }}
            >
              <Home />
            </IconButton>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
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
                      px: 2,
                      position: 'relative',
                      '&::after': isActive ? {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '60%',
                        height: '3px',
                        borderRadius: '3px 3px 0 0',
                        bgcolor: 'primary.main',
                      } : {},
                      '&:hover': {
                        color: 'primary.main',
                        bgcolor: 'primary.light',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleNavClick('#contact')}
                sx={{
                  ml: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  boxShadow: 'none',
                  '&:hover': {
                    boxShadow: 1,
                  },
                }}
              >
                Contact Me
              </Button>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

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
