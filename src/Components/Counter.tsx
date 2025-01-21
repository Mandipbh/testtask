// import React, {useState, useRef, useEffect} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   NativeSyntheticEvent,
//   NativeScrollEvent,
// } from 'react-native';
// import {ColorsData} from '../theme/colors';

// type typeData = {
//   weightType: string;
// };

// const Counter: React.FC<typeData> = ({weightType}) => {
//   const [weight, setWeight] = useState<number>(0);
//   const scrollViewRef = useRef<ScrollView>(null);
//   const scaleStep = 100; // 100 grams per step
//   const scaleWidth = 10; // Width of each tick (represents 100g)
//   const maxWeight = 100000; // Maximum weight (10kg)
//   const minWeight = 0; // Minimum weight (0kg)
//   const ticksCount = maxWeight / scaleStep; // Total ticks (10000g / 100g = 100)
//   const screenWidth = 300; // Width of the visible scale
//   const centerOffset = screenWidth / 2 - scaleWidth / 2; // Center alignment

//   useEffect(() => {
//     if (scrollViewRef.current) {
//       // Align 0kg to the red indicator at the start
//       scrollViewRef.current.scrollTo({x: 0, animated: false});
//     }
//   }, []);

//   const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
//     const contentOffsetX = event.nativeEvent.contentOffset.x;
//     let calculatedWeight = Math.round(contentOffsetX / scaleWidth) * scaleStep;

//     calculatedWeight = Math.max(
//       minWeight,
//       Math.min(calculatedWeight, maxWeight),
//     );
//     setWeight(calculatedWeight);
//   };

//   const handleMomentumScrollEnd = (
//     event: NativeSyntheticEvent<NativeScrollEvent>,
//   ) => {
//     const contentOffsetX = event.nativeEvent.contentOffset.x;

//     // Snap to nearest tick
//     const snappedX = Math.round(contentOffsetX / scaleWidth) * scaleWidth;

//     // Ensure scroll lands exactly on a tick
//     scrollViewRef.current?.scrollTo({x: snappedX, animated: true});

//     // Update weight based on snapped position
//     setWeight(Math.round(snappedX / scaleWidth) * scaleStep);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.txtContainer}>
//         <Text style={styles.title}>{(weight / 1000).toFixed(2)}</Text>
//         <Text style={styles.typetxt}>{` ${weightType}`}</Text>
//       </View>
//       <View style={styles.scaleContainer}>
//         {/* Center Indicator Line */}
//         <View style={styles.indicatorLine} />

//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           ref={scrollViewRef}
//           onScroll={handleScroll}
//           onMomentumScrollEnd={handleMomentumScrollEnd} // Snaps to nearest tick
//           scrollEventThrottle={16}
//           contentContainerStyle={{
//             width: ticksCount * scaleWidth + screenWidth, // Ensure full scrolling range
//             paddingHorizontal: centerOffset + 5, // Ensures 0kg starts at the red line
//           }}>
//           <View style={styles.scaleTrack}>
//             {Array.from({length: ticksCount + 1}).map((_, index) => (
//               <View
//                 key={index}
//                 style={[
//                   styles.scaleTick,
//                   {
//                     left: index * scaleWidth,
//                     height: index % 10 === 0 ? 40 : 20, // Larger tick for every 10th mark
//                     backgroundColor:
//                       index % 10 === 0
//                         ? ColorsData.secondary
//                         : ColorsData.secondary,
//                   },
//                 ]}
//               />
//             ))}
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 40,
//     color: ColorsData.primary,
//   },
//   scaleContainer: {
//     width: 300, // Fixed width for proper alignment
//     height: 100,
//     position: 'relative',
//   },
//   scaleTrack: {
//     backgroundColor: ColorsData.darkgray,
//     position: 'relative',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   scaleTick: {
//     width: 2,
//     position: 'absolute',
//   },
//   txtContainer: {
//     flexDirection: 'row',
//     alignItems: 'baseline',
//   },
//   typetxt: {
//     fontSize: 15,
//     color: ColorsData.primary,
//   },
//   indicatorLine: {
//     position: 'absolute',
//     height: 70,
//     width: 4,
//     backgroundColor: ColorsData.secondary,
//     alignSelf: 'center',
//     top: 15,
//     zIndex: 1,
//   },
// });

// export default Counter;
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {ColorsData} from '../theme/colors';

type typeData = {
  weightType: string;
};

const Counter: React.FC<typeData> = ({weightType}) => {
  const [weight, setWeight] = useState<number>(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const scaleStep = 100; // 100 grams per step
  const scaleWidth = 10; // Width of each tick (represents 100g)
  const maxWeight = 100000; // Maximum weight (10kg)
  const minWeight = 0; // Minimum weight (0kg)
  const ticksCount = maxWeight / scaleStep; // Total ticks (10000g / 100g = 100)
  const screenWidth = 300; // Width of the visible scale
  const centerOffset = screenWidth / 2 - scaleWidth / 2; // Center alignment

  useEffect(() => {
    if (scrollViewRef.current) {
      // Align 0kg to the red indicator at the start
      scrollViewRef.current.scrollTo({x: 0, animated: false});
    }
  }, []);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    let calculatedWeight = Math.round(contentOffsetX / scaleWidth) * scaleStep;

    calculatedWeight = Math.max(
      minWeight,
      Math.min(calculatedWeight, maxWeight),
    );
    setWeight(calculatedWeight);
  };

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;

    // Snap to nearest tick
    const snappedX = Math.round(contentOffsetX / scaleWidth) * scaleWidth;

    // Ensure scroll lands exactly on a tick
    scrollViewRef.current?.scrollTo({x: snappedX, animated: true});

    // Update weight based on snapped position
    setWeight(Math.round(snappedX / scaleWidth) * scaleStep);
  };

  // Convert weight based on the selected unit
  const displayWeight =
    weightType === 'Kg' ? weight / 1000 : (weight / 1000) * 2.20462;

  return (
    <View style={styles.container}>
      <View style={styles.txtContainer}>
        <Text style={styles.title}>{displayWeight.toFixed(2)}</Text>
        <Text style={styles.typetxt}>{` ${weightType}`}</Text>
      </View>
      <View style={styles.scaleContainer}>
        {/* Center Indicator Line */}
        <View style={styles.indicatorLine} />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
          onScroll={handleScroll}
          onMomentumScrollEnd={handleMomentumScrollEnd} // Snaps to nearest tick
          scrollEventThrottle={16}
          contentContainerStyle={{
            width: ticksCount * scaleWidth + screenWidth, // Ensure full scrolling range
            paddingHorizontal: centerOffset + 5, // Ensures 0kg starts at the red line
          }}>
          <View style={styles.scaleTrack}>
            {Array.from({length: ticksCount + 1}).map((_, index) => (
              <View
                key={index}
                style={[
                  styles.scaleTick,
                  {
                    left: index * scaleWidth,
                    height: index % 10 === 0 ? 40 : 20, // Larger tick for every 10th mark
                    backgroundColor:
                      index % 10 === 0
                        ? ColorsData.secondary
                        : ColorsData.secondary,
                  },
                ]}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    color: ColorsData.primary,
  },
  scaleContainer: {
    width: 300, // Fixed width for proper alignment
    height: 100,
    position: 'relative',
  },
  scaleTrack: {
    backgroundColor: ColorsData.darkgray,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scaleTick: {
    width: 2,
    position: 'absolute',
  },
  txtContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  typetxt: {
    fontSize: 15,
    color: ColorsData.primary,
  },
  indicatorLine: {
    position: 'absolute',
    height: 70,
    width: 4,
    backgroundColor: ColorsData.secondary,
    alignSelf: 'center',
    top: 15,
    zIndex: 1,
  },
});

export default Counter;
