import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },

    extend: {
      backgroundImage: {
        logo: "url('/logos/logo.png')",
        brand: "url('/logos/brand.png')",
        hero: "url('/images/hero-image.png')",
        about: "url('/images/about-image.jpg')",
        footer: "url('/images/footer-background.png')",
        slide1: "url('/images/slide1.png')",
        slide2: "url('/images/slide2.png')",
        slide3: "url('/images/slide3.png')",
        slide4: "url('/images/slide4.png')",
        slide5: "url('/images/slide5.png')",
        slide6: "url('/images/slide6.png')",
        slide7: "url('/images/slide7.png')"
      },
      colors: {
        border: 'hsla(var(--border))',
        benefits: 'rgba(var(--benefits-background))',
        input: 'hsl(var(--input))',
        inactive: 'rgba(var(--progress-color))',
        textcolor: 'rgba(var(--text-color))',
        textsecondary: 'rgba(var(--text-secondary))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        texthighlight: 'rgba(var(--text-highlight))',
        textmuted: 'rgba(var(--text-muted))',
        icon: 'rgba(var(--icon-color))',
        iconbackground: 'rgba(var(--icon-background))',
        badgebackground: 'rgba(var(--badge-background))',
        footerbackground: 'rgba(var(--footer-background))',
        tab: 'rgba(var(--tab-background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'rgba(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
