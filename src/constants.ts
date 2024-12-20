export enum AuthStatus {
  Auth = 'AUTH',
  NotAuth = 'NOT_AUTH',
  Unknown = 'UNKNOWN'
}

export enum PlaceType {
  Room = 'Room',
  Apartment = 'Apartment',
  House = 'House',
  Hotel = 'Hotel'
}

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export enum CardType {
  Cities = 'cities__card',
  Nearest = 'near-places__card',
  Favorites = 'favorites__card',
}

export const CardImageWrapper = {
  [CardType.Cities]: 'cities__image-wrapper',
  [CardType.Nearest]: 'near-places__image-wrapper',
  [CardType.Favorites]: 'favorites__image-wrapper',
} as const;
