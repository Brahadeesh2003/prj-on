import { createAuthHandler } from 'decap-cms-app';

export default createAuthHandler({
  provider: 'github',
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackUrl: `${process.env.SITE_URL}/admin/`,
});
