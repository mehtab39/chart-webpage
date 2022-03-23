import React from "react";
import Paper from '@mui/material/Paper';
import {
Chart,
PieSeries,
Title
} from '@devexpress/dx-react-chart-material-ui';
import {  categoriesStatistic as data } from '../../demodata';
import { styled } from '@mui/material/styles';
const StyledText = styled(Title.Text)(() => ({
  [`&.titleText`]: {
      position: 'absolute',
      top:'233px',
      zIndex:'100',
      textAlign: 'center',
      fontWeight: 'bold',
      textTransform: 'uppercase'
  },
}));
const TextComponent = props => (
  <StyledText {...props} className='titleText' />
);
export const Piechart = () => {
return (
	<Paper sx={{minWidth: '300px', margin:'30px', bgcolor:'inherit', boxShadow:'none', maxHeight: '400px',position: 'relative'}}>   
	<Chart
	data={data}
	>
	<PieSeries valueField="value"
		argumentField="argument"
		innerRadius={0.6} />
     <Title text="15000+" textComponent={TextComponent} />
	</Chart>
   </Paper>
);
}


