import { FormEvent, JSX, MouseEvent, useRef } from 'react';

import { Button, ButtonAsInput } from '@components/Button';
import { filesFieldName } from '@constants';
import { API_ROUTES } from '@constants/api';
import { AppDispatch, State } from '@store/types';
import { AcceptType, ElementId, EncodingType } from '@types';

import { Wrapper } from './styled';
import { useOnFilesSelection } from './useOnFilesSelection';

interface Props {
  filesSelection: State['filesSelection'];
  dispatch: AppDispatch;
}

export function UploadForm({
  filesSelection,
  dispatch,
}: Props): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  const onFilesSelection = useOnFilesSelection({ dispatch });

  function onButtonClick(event: MouseEvent<HTMLButtonElement>): void {
    console.log(event.target);

    if (!inputRef.current) return;

    inputRef.current.click();
  }

  function onSubmit(event: FormEvent): void {
    event.preventDefault();

    if (!filesSelection.isReadyToUpload) return;

    console.log(event);
  }

  return (
    <Wrapper
      action={API_ROUTES.postFaceEncodings}
      method="post"
      encType={EncodingType.multipartFormData}
      onSubmit={onSubmit}
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

      <Button type="button" onClick={onButtonClick}>
        Select files
      </Button>

      <ButtonAsInput
        type="submit"
        role="button"
        value="Upload"
        disabled={!filesSelection.isReadyToUpload}
      />
    </Wrapper>
  );
}
