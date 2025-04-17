import { ValueOf } from '@customTypes';

import { API_ROUTES } from './constants';
import {
  ApiMethod,
  GetCachedFaceEncodingsResponse,
  MessageResponse,
  PostFaceEncodingsResponse,
} from './types';

interface Payload {
  route: ValueOf<typeof API_ROUTES>;
  method: ApiMethod;
  body?: RequestInit['body'];
}

async function fetchData<T>({ route, method, body }: Payload): Promise<T> {
  const response = await fetch(route, { method, body });

  if (!response.ok) {
    const parsedResponse = (await response.json()) as MessageResponse;

    throw new Error(
      parsedResponse.message ??
        `Unhandled ${method} ${route} error of ${response.status} status.`,
    );
  }

  return (await response.json()) as T;
}

export async function postFaceEncodings(
  body: RequestInit['body'],
): Promise<PostFaceEncodingsResponse> {
  return await fetchData({
    route: API_ROUTES.faceEncodings,
    method: ApiMethod.POST,
    body,
  });
}

export async function getCachedFaceEncodings(): Promise<GetCachedFaceEncodingsResponse> {
  return await fetchData({
    route: API_ROUTES.cachedFaceEncodings,
    method: ApiMethod.GET,
  });
}
