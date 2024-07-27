import { join } from 'path'
import type { Config } from 'tailwindcss'
import { skeleton } from '@skeletonlabs/tw-plugin'

const plugin = require('tailwindcss/plugin')

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
      keyframes: {
        slide_out: {
          '0%' : {
            transform: 'translateX(0px)',
            opacity: '1',
          },
          '100%' : {
            transform: 'translateX(-300px)',
            opacity: '0',
          },
        },

        slide_in: {
          '0%' : {
            transform: 'translateX(300px)',
            opacity: '0',
          },
          '100%' : {
            transform: 'translateX(0px)',
            opacity: '1',
          },
        },
        
      },
      animation: {
        'bounce-short': 'bounce 1s ease-in-out 1',
        'spin-slow': 'spin 3s linear infinite',
        'slide-out': 'slide_out 1s ease',
        'slide-in': 'slide_in 2s ease'
      }
    },
	},
	plugins: [
		skeleton({
			themes: {
				preset: [
					{
						name: 'modern',
						enhancements: true,
					},
				],
			},
		}),
    plugin(({matchUtilities, theme}) => {
      matchUtilities(
        {
          "animation-duration": (value) => {
            return {
              "animation-duration": value,
            };
          },
        },
        {
          values: theme("transitionDuration"),
        }
      );
    }),
	],
} satisfies Config;
