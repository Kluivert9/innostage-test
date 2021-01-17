export const types = {
  SET_VISIBILITY_LOADER: 'app/SET_VISIBILITY_LOADER',
};

export function setVisibilityLoader(visibility) {
  return {
    type: types.SET_VISIBILITY_LOADER,
    payload: { visibility },
  };
}
