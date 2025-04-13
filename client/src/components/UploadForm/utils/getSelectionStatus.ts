import { maxFilesAmount } from '@constants';
import { getSingularOrPlural } from '@utils';

interface Payload {
  filesAmount: number;
}

function getTail({ filesAmount }: Payload): string {
  if (filesAmount > maxFilesAmount) {
    return `, but the maximum amount is ${maxFilesAmount}`;
  }

  return '';
}

export function getSelectionStatus({ filesAmount }: Payload): string {
  const singularOrPlular = getSingularOrPlural({
    elementsAmount: filesAmount,
    singularWord: 'file',
  });
  const tail = getTail({ filesAmount });

  return `Selected ${filesAmount} ${singularOrPlular}${tail}.`;
}
