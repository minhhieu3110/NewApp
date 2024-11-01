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
export default function Recruitment({navigation}) {
//   const fakeDataRecruitment = Array.from({length: 3}).map((_, i) => {
//     [
//       {
//         id: i,
//         positionApply: 'Nhân viên phòng pháp chế đối ngoại',
//         count: '3',
//         expireDate: '20/02/2024',
//       },
//       {
//         id: i + 1,
//         positionApply: 'Nhân viên phòng tổ chức nhân sự',
//         count: '3',
//         expireDate: '20/02/2024',
//       },
//     ];
//   });
const fakeDataRecruitment = [
    {id: 1, positionApply: 'Nhân viên phòng pháp chế đối ngoại', count: '3', expireDate: '20/02/2024'},
    {id: 2, positionApply: 'Nhân viên phòng tổ chức nhân sự', count: '3', expireDate: '20/02/2024'},
    {id: 3, positionApply: 'Nhân viên phòng pháp chế đối ngoại', count: '3', expireDate: '20/02/2024'},
    {id: 4, positionApply: 'Nhân viên phòng tổ chức nhân sự', count: '3', expireDate: '20/02/2024'},
    {id: 5, positionApply: 'Nhân viên phòng pháp chế đối ngoại', count: '3', expireDate: '20/02/2024'},
    {id: 6, positionApply: 'Nhân viên phòng tổ chức nhân sự', count: '3', expireDate: '20/02/2024'},
]
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Pressable
          style={style.titleAddressSaved}
          onPress={() => navigation.navigate('AccountNoSignIn')}>
          <Image source={icon.icon_arrow_left} />
          <Text style={style.textTitleAddressSaved}>Tuyển dụng</Text>
        </Pressable>
      </View>
      <View style={{flex: 1, top: 64, left: 12}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{width: 395, paddingBottom: 1500, }}>
          <FlatList
            data={fakeDataRecruitment}
            scrollEnabled={false}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Pressable onPress={()=>navigation.navigate('DetailRecruitment')}
                style={{
                  width: 404,
                  height: 102,
                  backgroundColor: '#ffffff',
                  borderRadius: 8,
                  justifyContent: 'center',
                  marginBottom: 10
                }}>
                <View style={{left: 12, height: 79, gap: 10}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      color: '#212121',
                    }}>
                    {item.positionApply}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'regular',
                      color: '#808080',
                    }}>
                    Số lượng: {item.count}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'regular',
                      color: '#0060af',
                    }}>
                    Hạn ứng tuyển: {item.expireDate}
                  </Text>
                </View>
              </Pressable>
            )}
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
});
