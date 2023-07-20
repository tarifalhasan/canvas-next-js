/** @type {import('tailwindcss').Config} */

import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    ,
    './components/**/*.{js,ts,jsx,tsx}',

    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#F5F7F8',
        muted: '#797A7A',
        primary: '#1766E2',
        'soft-gray': '#F1F2F4',

        'neutral-400': '#A5A4A1',
        'neutral-600': '#7D7C78',
        'neutral-900': '#37352F',
        'zing-800': '#22262D',
        'border-main': '#E9E8EB',
        'border-subdued': '#EEE',
      },
      fontSize: {
        '13px': [
          '0.975em',
          {
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            fontWeight: '500',
          },
        ],
      },
    },
  },
  plugins: [],
});
