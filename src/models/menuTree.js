import { queryMenu } from '@/services/menuTree';

export default {
  namespace: 'menuTree',

  state: {
    menuData: [],
  },

  effects: {
    *getMenu(_, { call, put }) {
      const response = yield call(queryMenu);
      // console.log("getMenu 执行",response);
      yield put({
        type: 'menuResult',
        payload: response,
      });
    },
  },

  reducers: {
    menuResult(state, action) {
      // console.log("menuResult函数执行action：",action);
      // console.log("menuResult函数执行state：",state);
      return {
        ...state,
        menuData: action.payload,
      };
    },
  },
};
