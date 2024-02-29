export const EnvConfig = () => ({
    PORT: +process.env.PORT || 6000,
    ENV: String(process.env.NODE_ENV).toLowerCase() || 'dev',
    PG_DB: {
        PG_HOST: process.env.PG_HOST || 'localhost',
        PG_PORT: +process.env.PG_PORT || 5432,
        PG_USER: process.env.PG_USER || 'postgres',
        PG_PWD: process.env.PG_PWD || 'postgres',
        PG_DB: process.env.PG_DB || 'postgres',
        PG_AUTOLOAD: process.env.PG_AUTOLOAD === 'true' || true,
        PG_SYNC: process.env.PG_SYNC === 'true' || true,
    }
});