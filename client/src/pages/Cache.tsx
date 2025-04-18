import { JSX, useEffect } from 'react';
import { useOutletContext } from 'react-router';

import { getCachedFaceEncodings } from '@api';
import { EncodedImages, SvgIcon } from '@components';
import { SvgIconId } from '@components/SvgIcon/types';
import { iconSize } from '@constants/styles';
import { AppOutletContext } from '@customTypes';
import * as actions from '@store/actions';
import { getErrorMessage } from '@utils';

export function Cache(): JSX.Element | null {
  const { state, dispatch } = useOutletContext<AppOutletContext>();
  const {
    cachedEncodings,
    isFetching,
    errorMessage,
    cachedFileSelection,
  } = state;

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        dispatch(actions.startFetchingCachedEncodings());

        const response = await getCachedFaceEncodings();

        dispatch(actions.updateCachedEncodings(response));
      } catch (error) {
        dispatch(actions.updateErrorMessage(getErrorMessage(error)));
      } finally {
        dispatch(actions.updateIsFetching(false));
      }
    }

    void fetchData();
  }, [dispatch]);

  if (errorMessage && !isFetching) return null;

  if (isFetching) {
    return <SvgIcon icon={SvgIconId.spinner} size={iconSize.lg} />;
  }

  if (!cachedEncodings.length) {
    return <p>Cache is empty.</p>;
  }

  return (
    <EncodedImages
      items={cachedEncodings}
      cachedFileSelection={cachedFileSelection}
    />
  );
}
