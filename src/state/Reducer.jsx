export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH_MODE': {
      return {
        ...state,
        searchMode: action.payload.status,
      };
    }
    case 'SET_VIDEO_PROPS': {
      return {
        ...state,
        searchMode: action.payload.status,
        propsSelectedVideo: action.payload.videoProps,
      };
    }
    case 'SET_SEARCH_WORD': {
      return {
        ...state,
        searchMode: action.payload.status,
        searchWord: action.payload.word,
      };
    }
    case 'SET_THEME': {
      return {
        ...state,
        theme: action.payload.theme,
      };
    }
    default:
      throw new Error('Unkown action');
  }
}
