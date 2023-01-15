import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';

// add .env, add eslint

export default defineConfig(({command, mode}) => {
  return {
    plugins: [react()],
  };
});
