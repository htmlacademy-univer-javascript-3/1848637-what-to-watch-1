export const ALL_GENRES = 'ALL_GENRES';

export const VISIBLE_FILMS_COUNT_STEP = 8;

export enum APIRoute {
  Movies = '/films',
  Login = '/login',
  Logout = '/logout'
};

export enum AuthStatus {
  Unknown,
  Auth,
  NoAuth,
}
