import { CloudFrontResponse, CloudFrontResponseEvent } from 'aws-lambda';
import {
  CACHE_CONTROL,
  CONTENT_SECURITY_POLICY,
  PRAGMA,
  REFERRER_POLICY,
  SERVER,
  STRICT_TRANSPORT_SECURITY,
  X_CONTENT_TYPE,
  X_FRAME_OPTIONS,
  X_XSS_PROTECTION
} from './constants';

export const handler = async (
  event: CloudFrontResponseEvent
): Promise<CloudFrontResponse> => {
  const {
    Records: [
      {
        cf: { response }
      }
    ]
  } = event;

  return addSecureHeaders(response);
};

const addSecureHeaders = (response: CloudFrontResponse) => {
  response.headers = {
    ...response.headers,
    ['strict-transport-security']: STRICT_TRANSPORT_SECURITY,
    ['x-content-type-options']: X_CONTENT_TYPE,
    ['x-frame-options']: X_FRAME_OPTIONS,
    ['x-xss-protection']: X_XSS_PROTECTION,
    ['referrer-policy']: REFERRER_POLICY,
    ['content-security-policy']: CONTENT_SECURITY_POLICY,
    ['server']: SERVER,
    ['pragma']: PRAGMA,
    ['cache-control']: CACHE_CONTROL
  };

  return response;
};
