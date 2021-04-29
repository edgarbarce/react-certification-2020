import reducer from './Reducer';

const initState = {
  searchMode: true,
  searchWord: 'Wizeline',
  propsSelectedVideo: {},
  theme: 'light',
  isUserLoggedIn: false,
  favoriteVideos: [],
};

describe('Test all actions in reducer', () => {
  it('test SET_SEARCH_MODE action', () => {
    const action = {
      type: 'SET_SEARCH_MODE',
      payload: {
        status: false,
      },
    };
    const newState = reducer(initState, action);
    expect(newState.searchMode).toEqual(false);
    expect(newState.theme).toEqual('light');
  });
  it('test SET_SEARCH_WORD action', () => {
    const action = {
      type: 'SET_SEARCH_WORD',
      payload: {
        status: true,
        word: 'test',
      },
    };
    const newState = reducer(initState, action);
    expect(newState.searchWord).toEqual('test');
    expect(newState.searchMode).toEqual(true);
    expect(newState.theme).toEqual('light');
  });
  it('test SET_VIDEO_PROPS action', () => {
    const action = {
      type: 'SET_VIDEO_PROPS',
      payload: {
        status: false,
        videoProps: {
          title: 'titleTest',
          description: 'description test',
          videoId: 'asd123',
        },
      },
    };
    const newState = reducer(initState, action);
    expect(newState.searchWord).toEqual('Wizeline');
    expect(newState.searchMode).toEqual(false);
    expect(newState.propsSelectedVideo.title).toEqual('titleTest');
    expect(newState.propsSelectedVideo.description).toEqual('description test');
    expect(newState.propsSelectedVideo.videoId).toEqual('asd123');
    expect(newState.theme).toEqual('light');
  });
  it('test SET_THEME action', () => {
    const action = {
      type: 'SET_THEME',
      payload: {
        theme: 'dark',
      },
    };
    const newState = reducer(initState, action);
    expect(newState.searchWord).toEqual('Wizeline');
    expect(newState.searchMode).toEqual(true);
    expect(newState.theme).toEqual('dark');
  });
  it('test SET_USER_LOGGED_IN action', () => {
    const action = {
      type: 'SET_USER_LOGGED_IN',
      payload: {
        isUserLoggedIn: true,
      },
    };
    const newState = reducer(initState, action);
    expect(newState.isUserLoggedIn).toEqual(true);
  });
  it('test SET_USER_LOGGED_OUT action', () => {
    const action = {
      type: 'SET_USER_LOGGED_OUT',
    };
    initState.isUserLoggedIn = true;
    initState.searchMode = false;
    const newState = reducer(initState, action);
    expect(newState.favoriteVideos).toEqual([]);
    expect(newState.isUserLoggedIn).toEqual(false);
    expect(newState.searchMode).toEqual(true);
  });
  it('test SET_FAVORITE_VIDEOS action', () => {
    const action = {
      type: 'SET_FAVORITE_VIDEOS',
      payload: {
        favoriteVideos: [
          {
            id: { videoId: '3CmJ68RU2fs', kind: 'youtube#video' },
            snippet: {
              title: 'Women in Leadership at Wizeline',
              description: 'Romina was a very ambitious girl...',
              thumbnails: { medium: { url: 'https://test.jpg' } },
            },
          },
        ],
      },
    };
    const newState = reducer(initState, action);
    expect(newState.favoriteVideos.length).toEqual(1);
    expect(newState.favoriteVideos[0].snippet.title).toEqual(
      'Women in Leadership at Wizeline'
    );
  });
});
