const palette = {
  teal: '#45BABD',
  darkTeal: '#34A3A6',
  orange: '#FF7700',
  darkOrange: '#B55501',
  white: '#FFFFFF',
  whiteTransparency: 'rgba(255, 255, 255, 0.4)',
  blackTransparency: 'rgba(0, 0, 0, 0.8)'
};

export const colors = {
  button: palette.white,
  background: palette.teal,
  text: palette.white,
  bullet: palette.whiteTransparency,
  selectedBullet: palette.white,
  tab: palette.darkTeal,
  tabText: palette.whiteTransparency,
  selectedTabText: palette.white,
  navBar: palette.orange,
  spinner: palette.blackTransparency
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
    borderWidth: 2
  }
};

export const fonts = {
  h1: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.text,
    fontFamily: 'System'
  },
  h2: {
    fontSize: 22,
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
    fontWeight: '700',
    fontFamily: 'System'
  },
  primary: {
    color: colors.background
  },
  secondary: {
    color: colors.text
  }
};
