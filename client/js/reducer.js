
const initialState = (state = {
  currentUser:
    {
      name: 'megan',
      username: 'megelismi',
      email: 'meg.eli.smi@gmail.com',
      password: '123'
    }
  }, action) => {
    switch (action.type) {
      default:
      return state;
  }
};

export default initialState;