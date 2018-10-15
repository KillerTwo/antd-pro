import React from 'react';
import Bar from '@/components/EchartsComponent/Bar';
import { Card, Row } from 'antd';
  import { FormattedMessage } from 'umi/locale';
// import { connect } from 'dva';
// @connect(({ customers, loading }) => ({
//   customers,
//   submitting: loading.effects['customers/submit'],
// }))


class BarPage extends React.Component {
//   componentDidMount() {
//     const { dispatch } = this.props;
//     dispatch({
//       type: 'customers/submit', // type为对应的models文件下的namespace和指定的函数，即为models文件中namespace为customers的models文件下的submit函数。
//       payload: {
//         customer: '这是按钮',
//         type: 'GET', // type为http请求类型
//       },
//     });
//   }

  
  render() {
    return (
      
        <div>
          <Row>
            <Col >

            </Col>
          </Row>
          <Card title="Card title" bordered={false} >
            <div>
              <Bar /> 
            </div>
          </Card>
        </div>
    );
  }
}
export default BarPage;



