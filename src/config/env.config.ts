export const EnvConfig = () => ({
    PORT: +process.env.PORT || 6000,
    ENV: String(process.env.NODE_ENV).toLowerCase() || 'dev',
    API_PREFIX: process.env.API_PREFIX || 'v1',
    PG_DB: {
        PG_HOST: process.env.PG_HOST || 'localhost',
        PG_PORT: +process.env.PG_PORT || 5432,
        PG_USER: process.env.PG_USER || 'postgres',
        PG_PWD: process.env.PG_PWD || 'postgres',
        PG_DB: process.env.PG_DB || 'postgres',
        PG_AUTOLOAD: process.env.PG_AUTOLOAD === 'true' || true,
        PG_SYNC: process.env.PG_SYNC === 'true' || true,
    },
    VARIABLES: {
        URL_LENGTH: +process.env.URL_LENGTH || 5,
        CUSTOM_URL_BASE: process.env.URL_BASE || '',
    }
});