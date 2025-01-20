import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_BASE_URL: "https://hr-trainings-exp.dali-stage.vinci-energies.net",
        API_CLIENT_ID: "3a9579cefb934254adef2cd012a51d57",
        API_CLIENT_SECRET: "3600e8725505485B9D3C923Bc9188Ed6",
        API_NETWORK_ID: "3",
    },
    images: {
        remotePatterns: [
            {
                protocol: "https" as const,
                hostname: "**",
            },
        ],
    },
};

export default withNextIntl(nextConfig);