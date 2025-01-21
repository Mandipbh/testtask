import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/FontAwesome6';
import Counter from '../Components/Counter';
import {ImagesData} from '../Assets/Images';
import {ColorsData} from '../theme/colors';
import Header from '../Components/Header';
import CustomButton from '../Components/CustomButton';

const weightData: string[] = ['Kg', 'lbs'];

const Onboarding: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('Kg');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Image
        source={ImagesData.backgroundImage}
        style={styles.imageBackground}
      />
      <View style={styles.backgroundOverlay} />
      <View style={styles.headerContainer}>
        <Header progress={20} />
        <Feather name="chevron-left" color={ColorsData.primary} size={18} />
        <Text style={styles.title}>Weight?</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.tabView}>
          {weightData.map((item, index) => (
            <TouchableOpacity
              style={styles.options}
              key={index.toString()}
              onPress={() => setSelectedType(item)}>
              <Text
                style={[
                  styles.weightText,
                  {
                    color:
                      selectedType === item
                        ? ColorsData.primary
                        : ColorsData.lightgray,
                    borderBottomWidth: selectedType === item ? 1 : 0,
                    borderBottomColor: ColorsData.primary,
                  },
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Counter weightType={selectedType} />
        <View style={styles.buttonContainer}>
          <CustomButton title="Next" />
          <CustomButton title="Skip" isTextButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ColorsData.primary,
    textAlign: 'center',
  },
  imageBackground: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  weightText: {
    fontSize: 18,
    marginHorizontal: 5,
  },
  options: {
    padding: 2,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    padding: 15,
    marginTop: 20,
  },
  backgroundOverlay: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
});
