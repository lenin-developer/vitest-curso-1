import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true, // para que el describe test, ect, esten disponibles de foema global y ya no tenga que estar exportando
      environment: 'jsdom'
    },
  }),
);
