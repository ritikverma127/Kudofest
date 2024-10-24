import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // yahan '@' ko 'src' directory ka alias banaya
       '@nextui-org/react': '/node_modules/@nextui-org/react',
    },
  },
});
