import reducer from './Reducer';

const initState = {
  searchMode: true,
  searchWord: 'Wizeline',
  propsSelectedVideo: {},
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
  });
});
