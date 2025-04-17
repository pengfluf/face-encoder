import { JSX, useEffect } from 'react';
import { useOutletContext } from 'react-router';

import {
  EncodedImages,
  FileSelectionErrors,
  Instruction,
  UploadForm,
} from '@components';
import { Gapper } from '@components/styled';
import { emptyFileSelection } from '@constants';
import { gap } from '@constants/styles';
import { AppOutletContext } from '@customTypes';
import * as actions from '@store/actions';

export function Home(): JSX.Element {
  const { state, dispatch } = useOutletContext<AppOutletContext>();
  const { fileSelection, cachedFileSelection, isUploading, encodings } =
    state;

  useEffect(() => {
    return () => {
      dispatch(actions.updateFileSelection(emptyFileSelection));
    };
  }, [dispatch]);

  return (
    <Gapper $direction="column" $gap={gap.lg}>
      <Instruction />

      <Gapper $direction="column" $gap={gap.sm}>
        {fileSelection.status && <p>{fileSelection.status}</p>}

        <UploadForm
          isReadyToUpload={fileSelection.isReadyToUpload}
          cachedFileSelection={cachedFileSelection}
          isUploading={isUploading}
          dispatch={dispatch}
        />
      </Gapper>

      <FileSelectionErrors items={fileSelection.errors} />

      <EncodedImages
        items={encodings}
        cachedFileSelection={cachedFileSelection}
      />
    </Gapper>
  );
}
