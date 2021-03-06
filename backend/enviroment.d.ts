declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      PORT?: string;
      PWD: string;
      SERVER_PORT: string;
      ACCESS_TOKEN_SECRET: string;
      REFRESH_TOKEN_SECRET: string;
      REFRESH_TOKEN_LIFE: string;
      ACCESS_TOKEN_LIFE: string;
      PROD_MONGO_CONNECTION: string;
      DEV_MONGO_CONNECTION: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
