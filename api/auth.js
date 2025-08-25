import { NowRequest, NowResponse } from '@vercel/node';
import { createAuthHandler } from 'decap-cms-app';

// These environment vars must be set in Vercel:
// GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET

export default createAuthHandler({
  provider: 'github',
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackUrl: process.env.SITE_URL + '/admin/',
  // Must match your GitHub OAuth App settings
});
