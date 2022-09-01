const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const primary = '#444';
const accent = '#f44675';
const accentDark = '#FA366B';

export default {
  light: {
    text: '#000',
    buttonCtaBackground: accent,
    buttonCtaForeground: "#fff",
    buttonBackground: "#fff",
    buttonForeground: "#666",
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    container: primary,
    inputBackground: "#fff",
    inputForeground: "#6C757D",
    inputPlaceholder:"#666",
    link: "#008aff",
    logo: accent
    
  },

  dark: {
    text: '#fff',
    buttonCtaBackground: accentDark,
    buttonCtaForeground: "#fff",
    buttonBackground: "#222",
    buttonForeground: "#eee",
    background: '#151515',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    container: primary,
    inputBackground: "#212121",
    inputForeground: "#fff",
    inputPlaceholder:"#bbb",
    link: "#008aff",
    logo: accentDark

  },
};
