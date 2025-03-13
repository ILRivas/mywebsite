const importAll = (r: __WebpackModuleApi.RequireContext) => r.keys().map(r);

export const featuredWork = importAll(require.context('../assets/Photography/Featured_Work', false, /\.(png|jpe?g|svg)$/));
export const candidPortraits = importAll(require.context('../assets/Photography/Candid_Portraits_Moments', false, /\.(png|jpe?g|svg)$/));
export const foodPhotography = importAll(require.context('../assets/Photography/Food_Photography', false, /\.(png|jpe?g|svg)$/));
export const graduations = importAll(require.context('../assets/Photography/Graduations', false, /\.(png|jpe?g|svg)$/));
export const weddings = importAll(require.context('../assets/Photography/Weddings_Domestic_Partnerships', false, /\.(png|jpe?g|svg)$/));