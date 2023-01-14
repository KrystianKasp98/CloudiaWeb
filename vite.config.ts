import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint'

// add .env, add eslint

export default defineConfig(({command, mode}) => {
  return {
    plugins: [react()],
  }
})