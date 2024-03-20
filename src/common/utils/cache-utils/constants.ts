export const PARSER_REVIEWER = {
  dateParser: (key: unknown, value: unknown) => {
    if (typeof value === 'string') {
      return new Date(value);
    }
    return value;
  },
};
