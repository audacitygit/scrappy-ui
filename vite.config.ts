import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true }), tailwindcss()],
  build: {
    lib: {
      entry: 'lib/main.ts',
      name: 'scrappyUI',
      fileName: (format) => `scrappy-ui.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
