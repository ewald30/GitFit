import { ColorSchemeName, useColorScheme as _useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
export default function useColorScheme(){
  const  theme = useSelector((state) => state.themeState.theme);
  const colorScheme = _useColorScheme();
  // console.log("THEME: ", theme)
  if (theme === 'auto') {
    return colorScheme;
  } else {
    return theme;
  }
}

