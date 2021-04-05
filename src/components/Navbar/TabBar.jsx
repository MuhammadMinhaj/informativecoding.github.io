import { Tab, Tabs } from '@material-ui/core';
import {
    Code as CodeIcon,
    DataUsage as DataUsageIcon,
    Help as HelpIcon,
    Menu as MenuIcon,
    QueryBuilder as QueryBuilderIcon,
    ShowChart as ShowChartIcon,
} from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import actionMethods from '../../../redux/actions/app';

const { handleDropDown, handleChangeSelectMenu } = actionMethods;

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

export default function ScrollableTabsButtonForce({ orientation }) {
    const { selectedMenu } = useSelector((state) => state).app;
    const dispatch = useDispatch();

    return (
        <Tabs
            value={selectedMenu}
            onChange={(e, newValue) => dispatch(handleChangeSelectMenu(newValue))}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
            orientation={orientation || 'horizontal'}
        >
            <Tab
                label="Menu"
                onClick={() => dispatch(handleDropDown())}
                icon={<MenuIcon />}
                {...a11yProps(0)}
            />
            <Tab label="Programming" icon={<CodeIcon />} {...a11yProps(1)} />
            <Tab label="Technologies" icon={<HelpIcon />} {...a11yProps(2)} />
            <Tab label="Data Structures" icon={<DataUsageIcon />} {...a11yProps(3)} />
            <Tab label="Algorithms" icon={<ShowChartIcon />} {...a11yProps(4)} />
            <Tab label="Random" icon={<QueryBuilderIcon />} {...a11yProps(5)} />
        </Tabs>
    );
}
