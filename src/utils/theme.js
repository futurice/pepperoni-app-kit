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

export const buttons = {
  basic: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  primary: {
    backgroundColor: colors.button
  },
  secondary: {
    backgroundColor: 'transparent',
    borderColor: colors.button,
    borderWidth: 1
  }
};

export const fonts = {
  h1: {
    fontSize: 40,
    fontWeight: '500',
    color: colors.text,
    fontFamily: 'System'
  },
  h2: {
    fontSize: 28,
    color: colors.text,
    fontFamily: 'System'
  },
  h3: {
    fontSize: 20,
    color: colors.text,
    fontFamily: 'System'
  },
  body: {
    fontSize: 14,
    color: colors.text,
    fontFamily: 'System'
  },
  button: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'System'
  },
  primary: {
    color: 'white'
  },
  secondary: {
    color: colors.button
  }
};
