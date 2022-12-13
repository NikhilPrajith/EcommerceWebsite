import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProductList from "../Lists/ProductLists"
import ProductList2 from '../Lists/ProductLists2';
import { useEffect } from 'react';


const TabView = ({products,bidded}) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    

    return (
        <Box style={{marginLeft:'40px',marginRight:'40px',marginTop:'50px'}}  sx={{ width: '95%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ widthborderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Bidded Products" value="1" />
                    <Tab label="Your Products" value="2" />
                    <Tab label="Reviews" value="3" />
                </TabList>
                </Box>
                <TabPanel value="1">
                    <ProductList2 products={bidded}></ProductList2>
                </TabPanel>
                <TabPanel value="2">
                    <ProductList products={products}></ProductList>

                </TabPanel>
                
                    
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
        </Box>
      );
}

export default TabView;