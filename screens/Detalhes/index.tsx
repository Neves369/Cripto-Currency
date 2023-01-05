import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CurrencyLabel from '../../components/CurrencyLabel';
import EditScreenInfo from '../../components/EditScreenInfo';
import HeaderBar from '../../components/HeaderBar';
import { Text, View } from '../../components/Themed';
import { COLORS, SIZES } from '../../constants';

export default function Detalhes({route, navigation}: any) {

  const [selectedCurrency, setSelectedCurrency] = useState();

  useEffect(() => {
    const currency = route.params;
    setSelectedCurrency(currency)
    console.log("teste: ", currency)
  }, [])
  

  const renderChart = () =>{
    return(
      <View 
        style={{
          marginTop: SIZES.padding,
          paddingBottom: 20,
          marginHorizontal: SIZES.radius,
          alignItems: 'center',
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          elevation: 5
        }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding
          }}
        >
          <View style={{flex: 1}}>
            <CurrencyLabel 
              icon={selectedCurrency?.image}
              currency={selectedCurrency?.currency}
              code={selectedCurrency?.code}
            />
          </View>

          <View>

          </View>
        </View>

        {/* Chart */}

        {/* Options */}

        {/* Dots */}

      </View>
    )
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray1
      }}
    >
      <HeaderBar right={true}/>
      <ScrollView style={{ paddingBottom: SIZES.padding}}>
        <View style={{ flex: 1, paddingBottom: SIZES.padding, backgroundColor: 'transparent'}}>
          {renderChart()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
