import { JSX, MouseEventHandler, useCallback, useRef } from 'react';

import { Button, ButtonAsInput } from '@components/Button';
import { Gapper } from '@components/styled';
import { SvgIcon } from '@components/SvgIcon';
import { SvgIconId } from '@components/SvgIcon/types';
import { filesFieldName } from '@constants';
import { API_ROUTES } from '@constants/api';
import { AcceptType, ElementId, EncodingType } from '@customTypes';
import { AppDispatch, State } from '@store/types';

import { useOnFilesSelection, useOnSubmit } from './utils';
import { iconSize } from '@constants/styles';

interface Props {
  fileSelection: State['fileSelection'];
  isUploading: State['isUploading'];
  dispatch: AppDispatch;
}

export function UploadForm({
  fileSelection,
  isUploading,
  dispatch,
}: Props): JSX.Element {
  const { isReadyToUpload } = fileSelection;

  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = useOnSubmit({ isReadyToUpload, dispatch });
  const onFilesSelection = useOnFilesSelection({
    prevFiles: fileSelection.files,
    dispatch,
  });

  const onButtonClick: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      if (!inputRef.current) return;

      inputRef.current.click();
    }, []);

  return (
    <Gapper
      as="form"
      action={API_ROUTES.postFaceEncodings}
      method="post"
      encType={EncodingType.multipartFormData}
      onSubmit={onSubmit}
      $alignItems="center"
    >
      <input
        id={ElementId.inputFileUpload}
        ref={inputRef}
        type="file"
        name={filesFieldName}
        multiple
        onChange={onFilesSelection}
        accept={AcceptType.image}
        style={{ display: 'none' }}
      />

      <Button type="button" onClick={onButtonClick} disabled={isUploading}>
        Select files
      </Button>

      <ButtonAsInput
        role="button"
        type="submit"
        value="Upload"
        disabled={!isReadyToUpload || isUploading}
      />

      {isUploading && (
        <SvgIcon icon={SvgIconId.spinner} size={iconSize.md} />
      )}
    </Gapper>
  );
}
