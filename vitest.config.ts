import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    clearMocks: true,
    reporters: ["default"],
    coverage: {
      enabled: true,
      provider: "v8",
      reportsDirectory: "coverage",
      functions: 100,
      lines: 100,
      statements: 100,
      branches: 100,
    },
  },
});
