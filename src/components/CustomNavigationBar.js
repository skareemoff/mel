import { Appbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import { StyleSheet } from "react-native";

export default function CustomNavigationBar({ navigation, route, options, back }) {
    const title = getHeaderTitle(options, route.name);

    return (
        <Appbar.Header style={styles.container}>
            {back ? 
                <Appbar.Action icon="arrow-left" color="cornflowerblue" size={32} onPress={navigation.goBack} />
                : 
                null
            }
            <Appbar.Content color="cornflowerblue" title={title} />
        </Appbar.Header>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#E3F8C0',
    },
  });