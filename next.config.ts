import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,

	eslint: {
		ignoreDuringBuilds: true,
	},

	webpack: config => {
		return {
			...config,
			resolve: {
				...config.resolve,
				extensionAlias: {
					'.js': ['.js', '.ts'],
					'.jsx': ['.jsx', '.tsx'],
				},
			},
		};
	},
};

export default nextConfig;
