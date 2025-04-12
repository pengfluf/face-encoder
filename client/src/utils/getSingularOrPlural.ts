interface Payload {
  elementsAmount: number;
  singularWord: string;
}

export function getSingularOrPlural({
  elementsAmount,
  singularWord,
}: Payload): string {
  if (elementsAmount === 1) return singularWord;

  return `${singularWord}s`;
}
