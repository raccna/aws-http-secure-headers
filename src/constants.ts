const CSP_RULES = {
  'default-src': "'none'"
};

export const cspRules = (): string =>
  Object.entries(CSP_RULES)
    .map(([key, value]) => `${key} ${value}`)
    .join('; ');

export const STRICT_TRANSPORT_SECURITY = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubdomains'
  }
];

export const X_CONTENT_TYPE = [
  { key: 'X-Content-Type-Options', value: 'nosniff' }
];

export const X_FRAME_OPTIONS = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' }
];

export const X_XSS_PROTECTION = [
  { key: 'X-XSS-Protection', value: '1; mode=block' }
];

export const REFERRER_POLICY = [
  { key: 'Referrer-Policy', value: 'same-origin' }
];

export const CONTENT_SECURITY_POLICY = [
  {
    key: 'Content-Security-Policy',
    value: cspRules()
  }
];

export const SERVER = [
  {
    key: 'Server',
    value: ''
  }
];

export const PRAGMA = [
  {
    key: 'Pragma',
    value: 'no-cache'
  }
];

export const CACHE_CONTROL = [
  {
    key: 'Cache-Control',
    value: 'no-cache="Set-Cookie, Set-Cookie2"'
  }
];
