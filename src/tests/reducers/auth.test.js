import authReducer from '../../reducers/auth';

test('should UID for login', () => {
  const action = {
    type: 'LOGNI',
    UID: 'abc123'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear UID for logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({uid: 'anything'}, action);
  expect(state).toEqual({});
});