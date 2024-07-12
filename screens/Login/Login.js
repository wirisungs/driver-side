import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput'
  

const Login = () => {

  return (

    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0px',
        gap: '6px'
      }}>
      <Text style={styles.titleApp}>
            TPEXPRESS DRIVER</Text>

        <Text style={styles.sloganApp}>
        Giao hàng bằng cả tính mạng
      </Text>
      </View>

      {/*Input field*/}
      
      <CustomInput/>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
    titleApp: {
        fontFamily: 'Roboto-Medium', 
        fontSize:'25px', 
        fontWeight:'600', 
        marginBottom:'30',
        lineHeight:'29px',
        fontStyle: 'normal',
        textAlign: 'center'
    },
    sloganApp: {
        fontFamily: 'Roboto-Medium',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '19px',
        textAlign: 'center',
        color: '#808080'
    }
})


export default Login;