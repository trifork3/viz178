import { defineConfig } from 'vite';	// [HELPER] adds intellisense w/o jsdoc
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins : [ react() ],
  build : {
    manifest : true,
    rollupOptions : {
      input : '/src/main.jsx',
    }
  },
  server : {
    port : 5000,
  }
});
