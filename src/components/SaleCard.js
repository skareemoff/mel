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

          <View style={{
            margin: 0,
            padding: 0,
            width: '100%',
            flexDirection: 'row',
            marginTop: 20,
          }}>
            <View style={{
              paddingRight: 35,
              borderRightWidth: 1,
              borderColor: '#333333',
            }}>
              <Text style={{fontFamily: 'DMSans-Thin', fontSize: 42, color: '#F9F9F9'}}>$19,99</Text>
          </View>
          <View style={{
            right: 50,
            position: 'absolute',
            justifyContent: 'left', alignItems: 'left'
          }}>
            <View style={{width: '105%', height: 5, backgroundColor: '#5A1AEF', zIndex: 1, top: '45%', position: 'absolute'}}></View>
              <Text style={{ fontWeight: 250, fontFamily: 'DMSans-Thin', fontSize: 42, marginLeft: 8, color: '#F9F9F9'}}>$49,99</Text>
              <Text style={{
                fontFamily: 'DMMono-Regular',
                fontSize: 14,
                fontWeight: 400,
                backgroundColor: '#5A1AEF',
                width: 42,
                height: 23,
                position: 'absolute',
                top: -5,
                right: -10,
                borderRadius: 20,
                color: 'white',
                textAlign: 'center',
                justifyContent: 'center',
                alignContent: 'center'
              }}>-60%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SaleCard;

const st = EStyleSheet.create({
  cover: {
    width: 353,
    height: 291,
    backgroundColor: 'black',
    borderRadius: 30,
    justifyContent: 'flex-start',
    alignItems: 'left',
    maxWidth: 400,
    flexDirection: 'column',
  }
});
