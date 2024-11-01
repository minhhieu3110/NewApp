import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import {icon} from '../../assets/index';
export default function Contract({navigation}) {
  const fakeContract = [
    {
      id: 1,
      nameContract: 'Hợp đồng hợp tác đầu tư xây dựng dự án',
      userSignContract: '01012024-RPM - TRUNG',
      dateSign: '01/01/2024',
      dateExpire: '01/01/2025',
    },
    {
      id: 2,
      nameContract: 'Hợp đồng hợp tác đầu tư xây dựng dự án',
      userSignContract: '01012024-RPM - TRUNG',
      dateSign: '01/01/2024',
      dateExpire: '01/01/2025',
    },
    {
      id: 3,
      nameContract: 'Hợp đồng hợp tác đầu tư xây dựng dự án',
      userSignContract: '01012024-RPM - TRUNG',
      dateSign: '01/01/2024',
      dateExpire: '01/01/2025',
    },
    {
      id: 4,
      nameContract: 'Hợp đồng hợp tác đầu tư xây dựng dự án',
      userSignContract: '01012024-RPM - TRUNG',
      dateSign: '01/01/2024',
      dateExpire: '01/01/2025',
    },
    {
      id: 5,
      nameContract: 'Hợp đồng hợp tác đầu tư xây dựng dự án',
      userSignContract: '01012024-RPM - TRUNG',
      dateSign: '01/01/2024',
      dateExpire: '01/01/2025',
    },
  ];
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.titleAddressSaved}
          onPress={() => navigation.navigate('Account')}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitleAddressSaved}>Hợp đồng</Text>
        </Pressable>
      </View>
      <View style={{top: 69, flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.contractContainer}>
          <FlatList
            data={fakeContract}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            renderItem={({item}) => {
              return (
                <View style={style.itemContract}>
                  <View style={{gap: 9}}>
                    <Text style={style.nameContract}>
                      {item.nameContract}
                    </Text>
                    <Text style={style.userContract}>{item.userSignContract}</Text>
                  </View>
                  <View style={style.seperator} />
                  <View style={style.dateSign}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'regular',
                        color: '#808080',
                      }}>
                      Ngày Ký
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'regular',
                        color: '#212121',
                        right: 20,
                        position: 'absolute'
                      }}>
                      {item.dateSign}
                    </Text>
                  </View>
                  <View style={style.dateExpire}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'regular',
                        color: '#808080',
                      }}>
                      Ngày Hết Hạn
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'regular',
                        color: '#212121',
                        right: 20,
                        position: 'absolute'

                      }}>
                      {item.dateExpire}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F7FC',
  },
  titleContainer: {
    width: 428,
    height: 54,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#0060AF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  titleAddressSaved: {
    width: 204,
    height: 28,
    position: 'absolute',
    top: 13,
    left: 3,
  },
  textTitleAddressSaved: {
    width: 165,
    height: 24,
    position: 'absolute',
    top: 2,
    left: 36,
    fontSize: 18,
    fontWeight: 'medium',
    fontFamily: 'Be Vietnam Pro',
    color: '#ffffff',
  },
  contractContainer: {
    width: 404,
    paddingBottom: 1500,
    left: 12,
  },
  itemContract: {
    width: 404,
    height: 141,
    gap: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
  },
  nameContract: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#212121',
    fontFamily: 'Be Vietnam Pro',
    left: 12
  },
  userContract: {
    fontSize: 15,
    fontWeight: 'regular',
    color: '#0060af',
    fontFamily: 'Be Vietnam Pro',
    left: 12
  },
  seperator: {
    width: 404,
    height: 1,
    backgroundColor: '#f1f1f1',
  },
  dateSign: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
    width: 404,
    left: 12
  },
  dateExpire: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
    width: 404,
    left: 12
  },
});
