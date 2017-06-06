
export const PURGE = 'PURGE';
export const purge = (field, bool) => ({
  type: PURGE,
  field,
  bool
});

