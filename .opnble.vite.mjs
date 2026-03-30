import { mergeConfig, loadConfigFromFile } from 'vite';
const loaded = await loadConfigFromFile({command:'serve',mode:'development'});
export default mergeConfig(loaded?.config || {}, { server: { allowedHosts: true } });
