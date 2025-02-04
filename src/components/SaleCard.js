import { Text, View} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './style'
import { useContext } from "react";
import { MELContext } from "./MELContext";

const SaleCard = () => {
  const {purchaseState} = useContext(MELContext);

  return (
    <View style={[
      styles.flatListItem,
      styles.shadow,
      st.cover
    ]} key={purchaseState}>
      <View style={{
        top: 24,
        left: 20,
        flex: 1,
        }}>
        <Text style={{
          height: 21,
          paddingHorizontal: 8,
          position: 'absolute',
          borderColor: '#5A1AEF',
          borderWidth: 1,
          borderRadius: 8,
          fontFamily: 'DMMono-Regular',
          fontWeight: 400,
          fontSize: 14,
          color: 'white',
        }}>EARLY BIRD OFFER</Text>

        <Text style={{
          width: '100%',
          height: 56,
          margin: 0,
          padding: 0,
          marginTop: 40,
          marginRight: 20,
          fontFamily: 'DMSans-Regular',
          fontWeight: 800,
          fontSize: 28,
          lineHeight: 28,
          color: 'white',
          justifyContent: 'center',
          textAlign: 'left',
          alignItems: 'left'
        }}>
        Unlock all decks with{"\n"}1000+ questions
        </Text>
        <Text style={{
          fontFamily: 'DMMono-Regular',
          fontSize: 22,
          fontWeight: 400,
          backgroundColor: '#5A1AEF',
          width: 70,
          height: 30,
          paddintTop: 5,
          transform: [{rotateZ: '25deg'}],
          position: 'absolute',
          top: -10,
          right: 40,
          borderRadius: 20,
          color: 'white',
          textAlign: 'center',
          justifyContent: 'center',
          alignContent: 'center'
        }}>-60%</Text>

        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'left', alignItems: 'left' }}>
          <View style={{width: 10, height: 10, backgroundColor: '#5A1AEF', borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: 4, height: 4, backgroundColor: 'white', borderRadius: 50}}></View>
          </View>
          <Text style={{ fontFamily: 'DMMono-Regular', fontSize: 14, marginLeft: 8, lineHeight: 15, color: 'white'}}>Unlimited access to all the games</Text>
        </View>
        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'left', alignItems: 'left' }}>
          <View style={{width: 10, height: 10, backgroundColor: '#5A1AEF', borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: 4, height: 4, backgroundColor: 'white', borderRadius: 50}}></View>
          </View>
          <Text style={{ fontFamily: 'DMMono-Regular', fontSize: 14, marginLeft: 8, lineHeight: 15, color: 'white'}}>Get 1000+ diverse questions</Text>
        </View>
        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'left', alignItems: 'left' }}>
          <View style={{width: 10, height: 10, backgroundColor: '#5A1AEF', borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: 4, height: 4, backgroundColor: 'white', borderRadius: 50}}></View>
          </View>
          <Text style={{ fontFamily: 'DMMono-Regular', fontSize: 14, marginLeft: 8, lineHeight: 15, color: 'white'}}>Free lifetime updates</Text>
        </View>
      </View>
    </View>
  );
};

export default SaleCard;

const st = EStyleSheet.create({
  cover: {
    width: 353,
    height: 231,
    backgroundColor: 'black',
    borderRadius: 30,
    justifyContent: 'flex-start',
    alignItems: 'left',
    maxWidth: 400,
    flexDirection: 'column',
  }
});
