const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        skinShadow: 'rgb(var(--color-shadow) / <alpha-value>)'
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
        skinDisplay: 'var(--font-family-skin-display), serif',
        skinMono: "'Space Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
      },
			backgroundColor: {
				skin: {
					base: 'var(--color-bg-base)',
					accent: 'var(--color-bg-accent)',
				}
			},
			backgroundImage: {
				skinPattern: 'var(--bg-image-skin-pattern)'
			},
			backgroundSize: {
                skinPattern: 'var(--bg-image-skin-pattern-size)'
			},
			minHeight: {
				'50': '50px',
				'160': '160px'
			},
			maxHeight: {
				'160': '160px'
			},
			minWidth: {
				'475': '475px'
			},
			maxWidth: {
				'475': '475px'
			},
			textColor:
			{
				skin: {
					base: 'var(--color-base)',
				}
			}
		},
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
