import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'

const CurrencyLabel = ({icon, currency, code}: any) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={icon}
        resizeMode="cover"
        style={{
            width: 25,
            height: 25,
            marginTop: 5
        }}
      />
      <View style={{marginLeft: SIZES.base}}>
        <Text style={{...FONTS.h3}}>{currency}</Text>
        <Text style={{color: COLORS.gray, ...FONTS.body4}}>{code}</Text>
      </View>
    </View>
  )
}

export default CurrencyLabel

