import { customerService } from '@/services/api';
export default {
  namespace: 'customers',

  state: {
    status: undefined,
  },

  effects: {
    *submit({ payload }, { call, put }) {
      console.log('submit执行...', payload);
      const response = yield call(customerService, payload);
      yield put({
        type: 'customerHandle', // 触发reducers下的customerHandle函数更新state
        payload: response,
      });
    },
  },

  reducers: {
    customerHandle(state, { payload }) {
      console.log('customerHandle执行', payload);
      return {
        ...state,
        status: payload.status,
      };
    },
  },
};
