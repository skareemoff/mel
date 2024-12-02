import { Appbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';

export default function CustomNavigationBar({ navigation, route, options, back }) {
    const title = getHeaderTitle(options, route.name);

    return (
        <Appbar.Header style={{flex: 1, backgroundColor: 'yellow'}}>
            {back ?
                <Appbar.Action icon="arrow-left" color="cornflowerblue" size={32} onPress={navigation.goBack} />
                :
                null
            }
            <Appbar.Content color="cornflowerblue" title={title} />
        </Appbar.Header>
    );
}
