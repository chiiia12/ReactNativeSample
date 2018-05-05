import { StackNavigator } from 'react-navigation';
import { Main } from './components/Main';
import { Detail } from './components/Detail';

const RootStack = StackNavigator(
    {
        Main: {
            screen: Main,
        },
        Detail: {
            screen: Detail,
        },
    },
    {
        initialRouteName: 'Main',
    }
)
export default RootStack