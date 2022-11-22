import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SIZES, COLORS, icons, images, FONTS} from '../../constants';
import {TextInput} from 'react-native-paper';
import {TextButton} from '../../componets';

const Login = ({navigation}) => {
  const [mobile, SetMobile] = React.useState('');
  const [password, SetPassword] = React.useState('');

  function renderLogin() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{padding: 20, flex: 1, justifyContent: 'space-around'}}>
            <View
              style={{
                alignItems: 'center',
                alignSelf: 'center',
                marginBottom: 70,
              }}>
              <Image
                source={images.waterinfo}
                style={{
                  height: 120,
                  width: 170,
                  borderRadius: 10,
                  marginTop: 15,
                }}
              />
            </View>
            <View
              style={{
                marginBottom: 50,
                backgroundColor: COLORS.white,
                elevation: 5,
                borderRadius: 10,
                paddingHorizontal: 20,
                paddingVertical: 20,
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  console.log('object');
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    color: COLORS.true_gray_700,
                    fontWeight: '400',
                  }}>
                  Login to Continue
                </Text>
                <Image
                  source={icons.right}
                  style={{
                    left: 10,
                    height: 22,
                    width: 22,
                    tintColor: COLORS.amber_500,
                  }}
                />
              </TouchableOpacity>

              <View style={{marginTop: 40}}>
                <TextInput
                  mode="outlined"
                  label="Mobile No."
                  left={<TextInput.Icon icon="dialpad" />}
                  keyboardType="phone-pad"
                  onChangeText={value => {
                    SetMobile(value);
                  }}
                />
                <TextInput
                  style={{marginTop: 10}}
                  mode="outlined"
                  label="Password"
                  left={<TextInput.Icon icon="security" />}
                  secureTextEntry
                  right={<TextInput.Icon icon="eye" />}
                  onChangeText={value => {
                    SetPassword(value);
                  }}
                />
                <TextButton
                  label="Login"
                  buttonContainerStyle={{
                    marginTop: 25,
                    height: 45,
                    alignItems: 'center',
                    borderRadius: 5,
                  }}
                  onPress={() => navigation.navigate('Tabs')}
                />
              </View>
            </View>

            <View
              style={{
                flex: 1,
                marginTop: 30,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{...FONTS.h4, color: COLORS.darkGray}}>
                  Don't have an account ?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}
                  style={{
                    backgroundColor: COLORS.cyan_600,
                    paddingHorizontal: 5,
                    paddingVertical: 2,
                    left: 10,
                  }}>
                  <Text
                    style={{
                      ...FONTS.h4,
                      color: COLORS.white,
                    }}>
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
              {/* <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 10,
                  marginHorizontal: 115,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.white,
                    padding: 6,
                    elevation: 10,
                  }}>
                  <Image
                    source={icons.email_circle}
                    style={{height: 20, width: 20}}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.white,
                    padding: 6,
                    elevation: 10,
                  }}>
                  <Image
                    source={icons.linkedin}
                    style={{height: 20, width: 20}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.white,
                    padding: 6,
                    elevation: 10,
                  }}>
                  <Image
                    source={icons.website}
                    style={{height: 20, width: 20}}
                  />
                </TouchableOpacity>
              </View> */}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  function renderBrandingVersion() {
    return (
      <View style={{alignItems: 'center', marginBottom: 10}}>
        <Text
          style={{
            fontSize: 16,
            color: COLORS.true_gray_700,
          }}>
          Intenics
        </Text>
        <Text style={{fontSize: 12, color: COLORS.true_gray_600}}>
          Version 1.0.0
        </Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      {renderLogin()}
      {/* {renderBrandingVersion()} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    marginTop: -75,
    marginBottom: 10,
    alignSelf: 'center',
    height: 100,
    width: 100,
    elevation: 10,
    borderRadius: 60,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default Login;
