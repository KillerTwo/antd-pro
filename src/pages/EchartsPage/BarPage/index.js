import React from 'react';
import {
    Bar,
  } from '@/components/Charts';
  import { FormattedMessage } from 'umi/locale';
// import { connect } from 'dva';
// @connect(({ customers, loading }) => ({
//   customers,
//   submitting: loading.effects['customers/submit'],
// }))

const salesData = [
    {
    "x": "1月",
    "y": 918
    },
    {
    "x": "2月",
    "y": 744
    },
    {
    "x": "3月",
    "y": 1059
    },
    {
    "x": "4月",
    "y": 206
    },
    {
    "x": "5月",
    "y": 923
    },
    {
    "x": "6月",
    "y": 510
    },
    {
    "x": "7月",
    "y": 362
    },
    {
    "x": "8月",
    "y": 1032
    },
    {
    "x": "9月",
    "y": 1156
    },
    {
    "x": "10月",
    "y": 364
    },
    {
    "x": "11月",
    "y": 384
    },
    {
    "x": "12月",
    "y": 1063
    }
    ];

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
        <div>
            <Bar
            height={295}
            title={
                <FormattedMessage
                id="app.analysis.sales-trend"
                defaultMessage="Sales Trend"
                />
            }
            data={salesData}
            />
        </div>
      </div>
    );
  }
}
export default BarPage;



