const API_ORIGIN = 'http://localhost:8001';
const API_VERSION = 'v1';

function getRoute(route: string): string {
  return `${API_ORIGIN}/${API_VERSION}/${route}`;
}

enum ApiRoute {
  faceEncodings = 'face-encodings',
  cachedFaceEncodings = 'cached-face-encodings',
}

export const API_ROUTES = {
  faceEncodings: getRoute(ApiRoute.faceEncodings),
  cachedFaceEncodings: getRoute(ApiRoute.cachedFaceEncodings),
} as const;
