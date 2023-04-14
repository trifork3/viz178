import { defineConfig } from 'vite';	// [HELPER] adds intellisense w/o jsdoc
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [ react() ],
});
