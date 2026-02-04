import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  basePath: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // Ativa o erro do Prettier dentro do ESLint
      "prettier/prettier": "error",
      // Avisa sobre variáveis não utilizadas (útil em dev)
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": ["warn"],
    },
  },
  // Desativa regras que conflitam com o Prettier
  prettierConfig,
];

export default eslintConfig;