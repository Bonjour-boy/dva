
export default {

  namespace: 'example',

  state: {
    name:"yao"
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {//可以把state.name的值修改成action.payload的值
      // return { ...state, ...action.payload };
      return state.name = action.payload;//action.payload表示新修改的值
    },
  },

};
