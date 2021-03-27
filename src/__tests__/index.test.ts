import { handler } from '../index';
import { CloudFrontResponseEvent, CloudFrontHeaders } from 'aws-lambda';

const contentTypeHeader = (contentType: string): CloudFrontHeaders => ({
  'content-type': [{ value: contentType }]
});

const fakeRequest = (contentType: string): CloudFrontResponseEvent =>
  ({
    Records: [
      {
        cf: {
          response: {
            headers: contentTypeHeader(contentType),
            status: '200',
            statusDescription: 'OK'
          }
        }
      }
    ]
  } as CloudFrontResponseEvent);

describe('index', () => {
  test('Should process text/html response correctly', async () => {
    const result = await handler(fakeRequest('text/html'));
    expect(result).toMatchSnapshot();
  });

  test('Should process application/json response correctly', async () => {
    const result = await handler(fakeRequest('application/json'));
    expect(result).toMatchSnapshot();
  });
});
