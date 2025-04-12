import { getSingularOrPlural } from '@utils';

const extensions = ['.jpg', '.jpeg', '.png', '.webp'];
const formattedExtensions = getFormattedExtensions();
const formattedTail = getSingularOrPlural({
  elementsAmount: extensions.length,
  singularWord: 'format',
});

function getFormattedExtensions(): string {
  const lastItem = extensions[extensions.length - 1];

  if (extensions.length === 1) return lastItem;

  if (extensions.length === 2) {
    return `${extensions[0]} or ${lastItem}`;
  }

  return `${extensions.slice(0, -1).join(', ')} or ${lastItem}`;
}

export const imageExtensionsMessage = `${formattedExtensions} ${formattedTail}`;
export const imageExtensions = new Set(extensions);
