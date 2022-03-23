import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';
import { styled } from '@mui/material/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import {  weeklyStatistic as chartData } from '../../demodata';
const StyledText = styled(Title.Text)(() => ({
  [`&.titleText`]: {
    textAlign: 'left',
    fontWeight: 'bold'
  },
}));
const TextComponent = props => (
  <StyledText {...props} className='titleText' />
);

export const Graph = () => {   
    return ( 
      <Paper sx={{minWidth: '500px'}}>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis
            max={100}
            showGrid={false}
            
          />

          <BarSeries
            barWidth= {0.3}
            name="score"
            color="#DAA520"
            valueField="score"
            argumentField="day"
            
          />
           <BarSeries
            barWidth= {0.3}
            name="gap"
            color="white"
            valueField="gap"
            argumentField="day"
            
          />
        <BarSeries
            barWidth= {0.3}
            name="remaining"
            color="#87CEEB"
            valueField="remaining"
            argumentField="day"
          />
          <Animation /> 
          <Title text="Weekly statistic" textComponent={TextComponent}  />
          <Stack 
            stacks={[
              { series: ['score', 'gap', 'remaining'] },
            ]}
          />
        </Chart>
      </Paper>
    );
}


