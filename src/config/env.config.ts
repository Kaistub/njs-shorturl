export const EnvConfig = () => ({
    PORT: +process.env.PORT || 3001,
    ENV: String(process.env.NODE_ENV).toLowerCase() || 'dev'
});