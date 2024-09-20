import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import images from '../theme/Images';
import CusCard from '../Components/CusCard';
import CusBanner from '../Components/CusBanner';

export default function Pet({navigation}) {
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <LinearGradient
          colors={(gradientColors = ['#FFB5B1', '#FEB4B3', '#F2A7BB'])}
          style={{height: 270}}>
          <View
            style={{
              alignItems: 'center',
              top: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
             <TouchableOpacity onPress={()=>navigation.openDrawer()}>
            <Image
              style={{height: 30, width: 30, resizeMode: 'contain'}}
              source={images.menu}></Image></TouchableOpacity>
            <Image
              style={{height: 35, width: 35, resizeMode: 'contain'}}
              source={images.Logo}></Image>
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                backgroundColor: '#FDC1C2',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Image
                style={{height: 30, width: 30, resizeMode: 'contain'}}
                source={images.bell}></Image>
            </TouchableOpacity>
          </View>
          <View
            style={{
              margin: 10,
              top: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontSize: 20, fontWeight: '800', color: 'black'}}>
                Hello{'\n'}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  bottom: 15,
                  color: '#000',
                }}>
                Fancy for a wash today!
              </Text>
            </View>
            <Image
              style={{height: 30, width: 30, left: 10}}
              source={images.step}></Image>
          </View>
          <View
            style={{
              flexDirection: 'row',
              margin: 30,
              justifyContent: 'space-between',
            }}>
            <Image
              style={{height: 50, width: 50, resizeMode: 'contain'}}
              source={images.step1}></Image>
            <View style={{flexDirection: 'row', zIndex: 1, bottom: 18}}>
              <Image
                style={{height: 80, width: 80, resizeMode: 'contain', left: 50}}
                source={images.rabit}></Image>
              <Image
                style={{height: 80, width: 80, resizeMode: 'contain', left: 27}}
                source={images.dog}></Image>
              <Image
                style={{height: 80, width: 80, resizeMode: 'contain', left: 10}}
                source={images.cat}></Image>
            </View>
          </View>
        </LinearGradient>
        {/*TextInput */}
        <View
          style={{
            height: '8%',
            borderRadius: 30,
            bottom: 25,
            backgroundColor: 'white',
            width: '100%',
          }}>
          <View style={{margin: 20, paddingTop: 25}}>
            <View
              style={{
                height: 50,
                width: '100%',
                backgroundColor: '#FFEDF2',
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'contain',
                    marginHorizontal: 15,
                    tintColor: '#FF6694',
                  }}
                  source={images.search}></Image>
                <TextInput
                  style={{width: '80%',color:'black'}}
                  placeholderTextColor={'#FF6694'}
                  placeholder="What are you looking for?"
                  
                />
                <TouchableOpacity>
                  <Image
                    style={{height: 25, width: 25, left: 10}}
                    source={images.Icon}></Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Banner*/}
          <TouchableOpacity
            style={{
              width: '100%',
              height: '55%',
            }}>
            <View
              style={{
                height: '140%',
                width: '90%',
                backgroundColor: 'white',

                borderRadius: 20,
                flexDirection: 'row',
                overflow: 'hidden',
                left: 20,
              }}>
              <LinearGradient
                colors={(gradientColors = ['#FFB5B1', '#FEB4B3', '#F2A7BB'])}
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  height: '100%',
                }}>
                <ImageBackground
                  style={{
                    height: '100%',
                    width: 125,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  source={images.round}>
                  <Text
                    style={{fontSize: 16, fontWeight: '800', color: '#FF6694'}}>
                    BOOK{'\n'}NOW!
                  </Text>
                  <Text style={{color: '#000', fontWeight: '600', left: 15}}>
                    -20%
                  </Text>
                </ImageBackground>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '800',
                    color: 'black',
                    left: 30,
                  }}>
                  All-New{'\n'}Groomers{'\n'}in Town!
                </Text>
                <Image
                  style={{
                    height: 20,
                    width: 30,
                    resizeMode: 'contain',
                    top: 50,
                    right: 40,
                  }}
                  source={images.dots3}></Image>
                <ImageBackground
                  style={{height: '100%', width: '60%', left: 5}}
                  source={images.sidedisign}>
                  <Image
                    style={{
                      height: 90,
                      width: 90,
                      top: 35,
                      left: 25,
                      zIndex: 1,
                      resizeMode: 'contain',
                    }}
                    source={images.town}></Image>
                  <Image
                    style={{
                      height: 110,
                      width: 50,
                      position: 'absolute',
                      left: 80,
                      top: 20,
                    }}
                    source={images.dots}></Image>
                </ImageBackground>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: '58%',
            width: '100%'
          }}>
          <View
            style={{
              marginHorizontal: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',paddingTop:50
            }}>
            <Text style={{fontSize: 15, fontWeight: '800', color: '#000'}}>
              Popular Services{' '}
            </Text>
            <TouchableOpacity>
              <Image
                style={{height: 30, width: 30, resizeMode: 'contain'}}
                source={images.tabler_dots}></Image>
            </TouchableOpacity>
          </View>
          <View style={{left: 25, top: 20}}>
            <View style={{flexDirection: 'row', right: 2}}>
              <CusCard
                landScape={true}
                Pic={images.grooming}
                tag={'Pet Grooming'}
              />
              <CusCard Pic={images.walking} tag={'Pet Grooming'} />
            </View>
            <View style={{flexDirection: 'row', marginBottom: 20,right:-10}}>
              <CusCard Pic={images.dating} tag={'Pet Dating'} />
              <CusCard
                landScape={true}
                Pic={images.traning}
                tag={'Pet Traning'}
              />
            </View>
            <View style={{bottom: 30, right: 2}}>
              <CusCard
                landScape={true}
                Pic={images.adoption}
                tag={'Pet Adoption'}
              />
            </View>
          </View>
          <View style={{height: '34%'}}>
            <View
              style={{
                margin: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 15, fontWeight: '800', color: '#000'}}>
                Service Providers
              </Text>
              <TouchableOpacity>
                <Image
                  style={{height: 30, width: 30, resizeMode: 'contain'}}
                  source={images.tabler_dots}></Image>
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <CusBanner />
              <CusBanner />
              <CusBanner />
            </View>
          </View>
          <View
            style={{
              height: '30%',
              paddingBottom: 40,
              top:100
              
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',marginHorizontal:20,marginVertical:10
              }}>
              <Text style={{fontSize: 15, fontWeight: '800', color: '#000'}}>
                Rating
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
                justifyContent: 'space-between',
                width: '100%'
              }}>
              <Text style={{marginLeft: 20, color: '#FF6694'}}>13 Reviews</Text>
              <View style={{flexDirection: 'row', marginRight: 11}}>
                <Text style={{color: '#FF6694'}}>WRITE A REVIEW</Text>
                <TouchableOpacity>
                  <Image
                    style={{height: 20, width: 20, marginHorizontal: 5}}
                    source={images.revi}></Image>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{margin: 20}}>
              <View
                style={{
                  width: '100%',

                  height: 100,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: '#FFCCD2',
                  flexDirection: 'row',
                  overflow: 'hidden',
                  marginVertical: 10,
                }}>
                <View style={{width: '67%', margin: 15}}>
                  <Text style={{fontWeight: '600', color: '#000'}}>
                    Pooja Jain
                  </Text>
                  <Image
                    style={{height: 30, width: 100, resizeMode: 'contain'}}
                    source={images.review}></Image>
                  <Text
                    style={{fontWeight: '400', color: '#000', fontSize: 10}}>
                    Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.
                  </Text>
                </View>
                <View style={{width: '35%', overflow: 'hidden'}}>
                  <Image
                    style={{height: 100, width: 100}}
                    source={images.pooja1}></Image>
                </View>
              </View>
              <View
                style={{
                  width: '100%',

                  height: 100,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: '#FFCCD2',
                  flexDirection: 'row',
                  overflow: 'hidden',
                }}>
                <View style={{width: '67%', margin: 15}}>
                  <Text style={{fontWeight: '600', color: '#000'}}>
                    Pooja Jain
                  </Text>
                  <Image
                    style={{height: 30, width: 100, resizeMode: 'contain'}}
                    source={images.review}></Image>
                  <Text
                    style={{fontWeight: '400', color: '#000', fontSize: 10}}>
                    Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.
                  </Text>
                </View>
                <View style={{width: '30%'}}>
                  <Image
                    style={{height: 100, width: 100}}
                    source={images.Pooja}></Image>
                </View>
              </View>
            </View>
          </View>
          
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
