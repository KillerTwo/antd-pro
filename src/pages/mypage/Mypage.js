import React from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
@connect(({ customers, loading }) => ({
  customers,
  submitting: loading.effects['customers/submit'],
}))
class Mypage extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'customers/submit', // type为对应的models文件下的namespace和指定的函数，即为models文件中namespace为customers的models文件下的submit函数。
      payload: {
        customer: '这是按钮',
        type: 'GET', // type为http请求类型
      },
    });
  }

  // 在此处触发一个actions
  handleClick = () => {
    console.log('触发自定义按钮点击事件action');
    // const { dispatch } = this.props;
    // dispatch({
    //     type: 'customers/submit',    // type为对应的models文件下的namespace和指定的函数，即为models文件中namespace为customers的models文件下的submit函数。
    //     payload: {
    //       customer: '这是按钮',
    //       type: 'GET'   // type为http请求类型
    //     },
    // });
  };
  render() {
    const { customers, submitting } = this.props;
    console.log('请求返回数据：', customers);
    return (
      <div>
        <h1>这是自定义页面</h1>
        <Button type="primary" onClick={this.handleClick}>
          发送一个测试请求
        </Button>
        <p>{customers.status}</p>
        <p>{submitting}</p>
      </div>
    );
  }
}
export default Mypage;
