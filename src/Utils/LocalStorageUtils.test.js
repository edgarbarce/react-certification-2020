import { getFavoriteVideos, deleteFavoriteVideo } from './LocalStorageUtils';

const localStorageObj = {
  favoriteVideos: [
    {
      id: { videoId: '3CmJ68RU2fs', kind: 'youtube#video' },
      snippet: {
        title: 'Romina Espinosa | Women in Leadership at Wizeline',
        description: 'Romina was a very ambitious girl with talent in sales.',
        thumbnails: {
          medium: { url: 'https://i.ytimg.com/vi/3CmJ68RU2fs/mqdefault.jpg' },
        },
      },
    },
  ],
};
const v = JSON.stringify(localStorageObj);
// eslint-disable-next-line no-proto
jest.spyOn(window.localStorage.__proto__, 'getItem');
// eslint-disable-next-line no-proto
jest.spyOn(window.localStorage.__proto__, 'setItem');
// eslint-disable-next-line no-proto
window.localStorage.__proto__.setItem = jest.fn();

describe('getFavoriteVideos', () => {
  it('should return favorites saved in localStorage', () => {
    // eslint-disable-next-line no-proto
    window.localStorage.__proto__.getItem = jest.fn(() => v);
    const favorites = getFavoriteVideos();
    expect(favorites.length).toEqual(1);
  });
  it('return empty array because localStorage is empty', () => {
    // eslint-disable-next-line no-proto
    window.localStorage.__proto__.getItem = jest.fn(() => []);
    const favorites = getFavoriteVideos();
    expect(favorites.length).toEqual(0);
  });
});

describe('deleteFavoriteVideo', () => {
  it('given valid id should return empty array after delete item', () => {
    // eslint-disable-next-line no-proto
    window.localStorage.__proto__.getItem = jest.fn(() => v);
    const favorites = deleteFavoriteVideo('3CmJ68RU2fs');
    expect(favorites.length).toEqual(0);
  });
  it('given non-existent id should return favorite', () => {
    // eslint-disable-next-line no-proto
    window.localStorage.__proto__.getItem = jest.fn(() => v);
    const favorites = deleteFavoriteVideo('456456');
    expect(favorites.length).toEqual(1);
  });
  it('should return empty array because local storage var is null', () => {
    // eslint-disable-next-line no-proto
    window.localStorage.__proto__.getItem = jest.fn(() => null);
    const favorites = deleteFavoriteVideo('456456');
    expect(favorites.length).toEqual(0);
  });
});
