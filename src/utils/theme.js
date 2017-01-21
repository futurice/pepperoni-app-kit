const palette = {
  teal: '#39BABD',
  darkTeal: '#2DB1B5',
  lightTeal: '#e1e7e0',
  orange: '#FF821E',
  darkBlue: '#003441',
  grey: '#929292',
  lightGrey: '#D1D1D1',
  sand: '#F2EEE6',
  darkSand: '#efebe3'
};

export const colors = {
  button: palette.orange,
  background: palette.sand,
  text: palette.darkBlue,
  bullet: palette.lightGrey,
  selectedBullet: palette.teal,
  tabBorder: palette.grey,
  tab: palette.darkSand,
  tabText: palette.grey,
  selectedTab: palette.lightTeal,
  selectedTabText: palette.teal
};

export const fonts = {
  h1: {
    fontSize: 40,
    fontWeight: '500',
    color: colors.text
  },
  h2: {
    fontSize: 28,
    color: colors.text
  },
  body: {
    fontSize: 16,
    color: colors.text
  },
  button: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white'
  }
};
