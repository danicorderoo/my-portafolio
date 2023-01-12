export const CHANGE_THEME = "CHANGE_THEME";
export const CHANGE_IDIOM = "CHANGE_IDIOM";

export const setTheme = (theme) => {
    return {
      type: CHANGE_THEME,
      payload: theme,
    };
  };
  
  export const setIdiom = (idiom) => {
    return {
      type: CHANGE_IDIOM,
      payload: idiom,
    };
  };