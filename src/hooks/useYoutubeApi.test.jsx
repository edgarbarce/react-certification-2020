import { act, renderHook } from '@testing-library/react-hooks';
import useYoutubeApi from './useYoutubeApi';

const getControlledPromise = () => {
  let deferred;
  const promise = new Promise((resolve, reject) => {
    deferred = { resolve, reject };
  });
  return { deferred, promise };
};

describe('Test Youtube Api custom hook', () => {
  it('Calls the API correctly ', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    );

    await act(async () => renderHook(() => useYoutubeApi('Wizeline')));

    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(expect.stringMatching(/q=Wizeline/));
  });

  it('handler loading state correctly', async () => {
    const { deferred, promise } = getControlledPromise();

    global.fetch = jest.fn(() => promise);

    const { result, waitForNextUpdate } = renderHook(useYoutubeApi);

    expect(result.current.isLoading).toBe(true);
    deferred.resolve();

    await waitForNextUpdate();
    expect(result.current.isLoading).toBe(false);
  });

  it('there is an error in the request', async () => {
    global.fetch = jest.fn(() => {
      return new Promise(() => {
        const errorRequest = 'There was a problem in the server during the request';
        throw errorRequest;
      });
    });

    const { result, waitForNextUpdate } = renderHook(useYoutubeApi);
    await waitForNextUpdate();
    expect(result.current.error).toBe(true);
  });
});
