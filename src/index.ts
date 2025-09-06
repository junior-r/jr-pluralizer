export function pluralize(
  text: string,
  value: string | number | object | null | undefined,
  pluralSuffix = "s",
  singularSuffix = ""
) {
  let count = 0;

  switch (true) {
    case typeof value === "number":
      count = value as number;
      break;
    case typeof value === "string" && !isNaN(Number(value)):
      count = Number(value);
      break;
    case Array.isArray(value):
      count = value.length;
      break;
    case value && typeof value === "object":
      count = Object.keys(value).length;
      break;
  }

  if (count === 1) return singularSuffix || text;
  return `${text}${pluralSuffix}`;
}
