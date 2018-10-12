import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';
import {
    Bar,
  } from '@/components/Charts';
  import { FormattedMessage } from 'umi/locale';
// import { connect } from 'dva';
// @connect(({ customers, loading }) => ({
//   customers,
//   submitting: loading.effects['customers/submit'],
// }))

    // 数据源
    const data = [
        { genre: 'Sports', sold: 275, income: 2300 },
        { genre: 'Strategy', sold: 115, income: 667 },
        { genre: 'Action', sold: 120, income: 982 },
        { genre: 'Shooter', sold: 350, income: 5271 },
        { genre: 'Other', sold: 150, income: 3710 }
    ];
    
  // 定义度量
  const cols = {
    sold: { alias: '销售量' }, // 数据字段别名映射
    genre: { alias: '游戏种类' }
  };

class PiePage extends React.Component {
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
      <div style={{ margin: 100 }}>
         <Chart width={600} height={400} data={data} scale={cols}>
            {/* X 轴 */}
            <Axis name="genre" />
            {/* Y 轴 */}
            <Axis name="sold" />
            <Legend position="top" dy={-20} />
            <Tooltip />
            <Geom type="interval" position="genre*sold" color="genre" />
        </Chart>
      </div>
    );
  }
}
export default PiePage;



