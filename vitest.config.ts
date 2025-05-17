import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/components/__tests__/**/*.test.{ts,tsx,js,jsx}'],
    environment: 'jsdom',
  },
}); 