interface IENV {
  VITE_BASE_URL: string;
  VITE_CLOUDINARY_CLOUD_NAME: string;
  VITE_CLODINARY_PRESET_NAME: string;
}

const REQUIRED_ENV_KEYS: (keyof IENV)[] = [
  "VITE_BASE_URL",
  "VITE_CLOUDINARY_CLOUD_NAME",
  "VITE_CLODINARY_PRESET_NAME",
];

function loadEnv(): IENV {
  const env = {} as IENV;

  for (const key of REQUIRED_ENV_KEYS) {
    const value = import.meta.env[key];
    if (!value) throw new Error(`Missing required env: ${key}`);
    env[key] = value;
  }

  return env;
}

export const env = loadEnv();
