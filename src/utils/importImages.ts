const importAll = (r: __WebpackModuleApi.RequireContext) => r.keys().map(r);

// ✅ Update paths to use the WebP folder & match only .webp files
export const featuredWork = importAll(require.context('../assets/Photography_WebP/Featured_Work', false, /\.(webp)$/));
export const candidPortraits = importAll(require.context('../assets/Photography_WebP/Candid_Portraits_Moments', false, /\.(webp)$/));
export const foodPhotography = importAll(require.context('../assets/Photography_WebP/Food_Photography', false, /\.(webp)$/));
export const graduations = importAll(require.context('../assets/Photography_WebP/Graduations', false, /\.(webp)$/));
export const weddings = importAll(require.context('../assets/Photography_WebP/Weddings_Domestic_Partnerships', false, /\.(webp)$/));