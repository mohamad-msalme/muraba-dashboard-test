/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Declare each environment variable with its expected type
  readonly VITE_BASE_URL: string;
  readonly VITE_OTHER_VARIABLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
