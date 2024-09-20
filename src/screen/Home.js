import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import images from '../theme/Images';
import CustomButton from '../Components/CusButton';
// import { useIsDrawerOpen } from '@react-navigation/drawer';

export default function Home({navigation}) {

  // const isDrawerOpen = useIsDrawerOpen();

  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View>
          <Image
            style={{resizeMode: 'stretch', height: 185, width: '100%'}}
            source={images.Frame}></Image>
          <View
            style={{
              height: 40,
              width: '100%',
              position: 'absolute',
              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                  resizeMode: 'contain',
                  tintColor: '#fff',
                }}
                source={images.menu}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{height: 30, width: 30, resizeMode: 'contain'}}
                source={images.Logo}></Image>
            </TouchableOpacity>
          </View>
          <View style={{position: 'absolute', width: '100%', bottom: -120}}>
            <Image
              style={{
                resizeMode: 'stretch',
                height: 200,
                width: '80%',
              }}
              source={images.childmain}></Image>
            <Image
              style={{
                resizeMode: 'contain',
                height: 80,
                width: '30%',
                position: 'absolute',
                right: 80,
                top: 2,
              }}
              source={images.Side}></Image>
            <View style={{position: 'absolute', margin: 30}}>
              <Text>Welcome</Text>
              <Text style={{fontSize: 22, color: 'black', fontWeight: '600'}}>
                Find your{'\n'}dream Sector!
              </Text>
              <View
                style={{
                  height: 40,
                  width: '90%',
                  backgroundColor: 'white',
                  alignItems: 'center',
                  flexDirection: 'row',
                  borderRadius: 10,
                  backgroundColor: 'white',
                  marginTop: 10,
                }}>
                <Image
                  style={{
                    height: 22,
                    width: 22,
                    tintColor: '#FF8A00',
                    marginHorizontal: 10,
                  }}
                  source={images.se}></Image>
                <TextInput
                  style={{width: '80%'}}
                  placeholder="What are you looking for?"
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: 10, marginTop: '30%'}}>
          <View
            style={{
              marginHorizontal: 20,
              marginBottom: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 15, fontWeight: '800', color: '#000'}}>
              Explore Categories
            </Text>
            <TouchableOpacity>
              <Image
                style={{height: 30, width: 30, resizeMode: 'contain'}}
                source={images.tabler_dots}></Image>
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 5, flexDirection: 'row'}}>
            <CustomButton
              gradientColors={(gradientColors = ['#ffffff', '#dfe5e7'])}
              borderColor={'#CBE0FF'}
              tag={'Construction'}
              Pic={images.construcation}
            />
            <CustomButton
              gradientColors={(gradientColors = ['#ffffff', '#FFE9BE'])}
              borderColor={'#FFE9BE'}
              tag={'Entertainment'}
              Pic={images.ent}
            />
          </View>
          <View style={{marginVertical: 10, flexDirection: 'row'}}>
            <CustomButton
              gradientColors={(gradientColors = ['#FEF2F3', '#FFB0DD'])}
              borderColor={'#FFB0DD'}
              tag={'Pet Care'}
              Pic={images.pet}
              
            />
            <CustomButton
              gradientColors={(gradientColors = ['#ffffff', '#C0FCF6'])}
              borderColor={'#00FFE6'}
              tag={'Home Care'}
              Pic={images.Homecare}
            />
            <CustomButton
              gradientColors={(gradientColors = ['#ffffff', '#FFC8AB'])}
              borderColor={'#FFC8AB'}
              tag={'Events'}
              Pic={images.event}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <CustomButton
              gradientColors={(gradientColors = ['#FEF2F3', '#CFCFFF'])}
              borderColor={'#CFCFFF'}
              tag={'Healthcare'}
              Pic={images.helth}
            />
          </View>
        </View>
        <View
          style={{
            flex: 0.05,
          }}>
          <View
            style={{
              margin: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 15, fontWeight: '800', color: '#000'}}>
              Popular Sectors{' '}
            </Text>
            <TouchableOpacity>
              <Image
                style={{height: 30, width: 30, resizeMode: 'contain'}}
                source={images.tabler_dots}></Image>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              margin: 5,
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                height: 140,
                width: 170,
                backgroundColor: '#EDFFCE',
                marginHorizontal: 20,
                borderRadius: 20,
                overflow: 'hidden',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '800',
                  color: 'black',
                  padding: 10,
                }}>
                Home{'\n'}
                Services
              </Text>
              <Image
                style={{height: 80, width: 80, position: 'absolute', right: 0}}
                source={images.Side}></Image>
              <Image
                style={{height: 90, width: 90, left: 60, bottom: 12}}
                source={images.services}></Image>
            </View>
            <View
              style={{
                height: 140,
                width: 170,
                backgroundColor: '#CEFFF3',
                marginHorizontal: 20,
                borderRadius: 20,
                overflow: 'hidden',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '800',
                  color: 'black',
                  padding: 10,
                }}>
                Healthcare
              </Text>
              <Image
                style={{height: 80, width: 80, position: 'absolute', right: 0}}
                source={images.Side}></Image>
              <Image
                style={{height: 80, width: 80, left: 70, top: 17}}
                source={images.healthcare}></Image>
            </View>
          </View>
        </View>

        <View
          style={{
            margin: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 15, fontWeight: '800', color: '#000'}}>
            Recommended for you{' '}
          </Text>
          <TouchableOpacity>
            <Image
              style={{height: 30, width: 30, resizeMode: 'contain'}}
              source={images.tabler_dots}></Image>
          </TouchableOpacity>
        </View>
        <View style={{paddingBottom: '10%'}}>
          <View style={{height: 150}}>
            <View style={{alignItems: 'center', marginTop: 10}}>
              <Image
                style={{height: '98%', width: '90%', resizeMode: 'stretch'}}
                source={images.baner}></Image>
              <View
                style={{
                  height: '55%',
                  width: '73%',
                  position: 'absolute',
                  top: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <View
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: '#FFC5C5',
                    borderRadius: 20,
                    top: 20,
                  }}></View>
                <View style={{top: 15}}>
                  <Text
                    style={{
                      fontWeight: '800',
                      textAlign: 'left',
                      color: 'black',
                    }}>
                    {' '}
                    Now share the Construction{'\n'} Sectors with your anyone
                    and
                    {'\n'} can save it as bookmark
                  </Text>
                  <Text style={{top: 8, color: '#060047', left: 5}}>
                    Updated | 06:30 AM{' '}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    height: 20,
                    width: 60,
                    backgroundColor: '#995BFF',
                    top: 50,
                    right: 35,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#fff', fontSize: 10}}>Explore</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{height: 150}}>
            <View style={{alignItems: 'center', marginTop: 10}}>
              <Image
                style={{height: '98%', width: '90%', resizeMode: 'stretch'}}
                source={images.baner}></Image>
              <View
                style={{
                  height: '55%',
                  width: '73%',
                  position: 'absolute',
                  top: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <View
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: '#FFC5C5',
                    borderRadius: 20,
                    top: 20,
                  }}></View>
                <View style={{top: 15}}>
                  <Text
                    style={{
                      fontWeight: '800',
                      textAlign: 'left',
                      color: 'black',
                    }}>
                    {' '}
                    Now share the Construction{'\n'} Sectors with your anyone
                    and
                    {'\n'} can save it as bookmark
                  </Text>
                  <Text style={{top: 8, color: '#060047', left: 5}}>
                    Updated | 06:30 AM{' '}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    height: 20,
                    width: 60,
                    backgroundColor: '#995BFF',
                    top: 50,
                    right: 35,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#fff', fontSize: 10}}>Explore</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <StatusBar barStyle={'dark-content'} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
