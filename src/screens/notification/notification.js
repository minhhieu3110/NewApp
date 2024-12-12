import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  Modal,
} from 'react-native';
import {icon, image} from '../../assets/index';
import {useState, useEffect} from 'react';
import axios from 'axios';
export default function Notification({navigation}) {
  const [dataNotification, setDataNotification] = useState([
    {
      id: 1,
      title: 'Cập nhật chính sách mua hàng',
      short:
        'Từ ngày 06/02/2024, RPM cập nhật chính sách trả hàng từ 15 ngày lên 30 ngày. Click xem thêm!',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      typeof: 'normal',
      time: '18/11/2024',
    },
    {
      id: 2,
      title: 'Thông báo về đơn hàng',
      short: 'Đơn hàng của bạn đang được giao',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      typeof: 'Notification Order',
      time: '18/11/2024',
    },
    {
      id: 3,
      title: 'Sale đậm 25%',
      short:
        'Có Kixx kề bên, yên tâm xuất hành và đừng quên chia sẻ dự định đầu năm của bạn nhé!',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      typeof: 'Sale',
      time: '18/11/2024',
    },
    {
      id: 4,
      title: 'Cập nhật chính sách mua hàng',
      short:
        'Từ ngày 06/02/2024, RPM cập nhật chính sách trả hàng từ 15 ngày lên 30 ngày. Click xem thêm!',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      typeof: 'normal',
      time: '18/11/2024',
    },
    {
      id: 5,
      title: 'Thông báo về đơn hàng',
      short: 'Đơn hàng của bạn đang được giao',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      typeof: 'Notification Order',
      time: '18/11/2024',
    },
    {
      id: 6,
      title: 'Sale đậm 25%',
      short:
        'Có Kixx kề bên, yên tâm xuất hành và đừng quên chia sẻ dự định đầu năm của bạn nhé!',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      typeof: 'Sale',
      time: '18/11/2024',
    },
    {
      id: 7,
      title: 'Cập nhật chính sách mua hàng',
      short:
        'Từ ngày 06/02/2024, RPM cập nhật chính sách trả hàng từ 15 ngày lên 30 ngày. Click xem thêm!',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      typeof: 'normal',
      time: '18/11/2024',
    },
    {
      id: 8,
      title: 'Thông báo về đơn hàng',
      short: 'Đơn hàng của bạn đang được giao',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      typeof: 'Notification Order',
      time: '18/11/2024',
    },
    {
      id: 9,
      title: 'Sale đậm 25%',
      short:
        'Có Kixx kề bên, yên tâm xuất hành và đừng quên chia sẻ dự định đầu năm của bạn nhé!',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      typeof: 'Sale',
      time: '18/11/2024',
    },
  ]);
  const [modalVisibleNotificationDetail, setModalVisibleNotificationDetail] =
    useState(false);
  const [detailNotification, setDetailNotification] = useState([{id: '', title: '', short: '', content: '', typeof: '', time: ''}]);
  //   useEffect(() => {
  //     axios.get('http://rpm.demo.app24h.net:81/api/v1/notification').then(res => {
  //       const notification = res.data.data;
  //       console.log(notification);
  //       setDataNotification(
  //         notification.map(item => ({
  //           id: item.id,
  //           title: item.title,
  //           short: item.short,
  //           content: item.content,
  //           typeof: item.type_of,
  //           picture: item.picture,
  //         })),
  //       );
  //     });
  //   }, []);
  const handlerDetailNotification = id => {
    const detailNotification = dataNotification.find(item => item.id === id);
    setDetailNotification([{
        id: detailNotification.id,
        title: detailNotification.title,
        short: detailNotification.short,
        content: detailNotification.content,
        typeof: detailNotification.typeof,
        time: detailNotification.time
    }]);
    console.log(detailNotification);

    setModalVisibleNotificationDetail(true);
  };
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <View style={style.title}>
          <Text style={style.textTitle}>Thông báo</Text>
        </View>
      </View>
      <View style={{top: 66, flex: 1}}>
        <ScrollView
          contentContainerStyle={{width: 412, paddingBottom: 1500, rowGap: 12}}
          showsVerticalScrollIndicator={false}>
          {dataNotification.map((item) => (
            <>
              <Pressable
                onPress={() => handlerDetailNotification(item.id)}
                key={item.id}
                style={{
                  width: 395,
                  height: 90,
                  left: 12,
                  flexDirection: 'row',
                  columnGap: 12,
                }}>
                <View style={{width: 40, height: 40}}>
                  <Image
                    source={
                      (item.typeof === 'normal' && icon.icon_normal) ||
                      (item.typeof === 'Notification Order' &&
                        icon.icon_notification_order) ||
                      (item.typeof === 'Sale' && icon.icon_sale)
                    }
                  />
                </View>
                <View style={{height: 90, rowGap: 12}}>
                  <View style={{height: 40, flexDirection: 'row'}}>
                    <View style={{ rowGap: 5}}>
                    <Text
                      style={{
                        width: 246,
                        height: 21,
                        fontSize: 16,
                        fontWeight: 'semibold',
                        color: '#0060af',
                        lineHeight: 20,
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontWeight: 'regular',
                        fontSize: 12,
                        height: 16,
                        color: '#808080',
                      }}>
                      {item.time}
                    </Text>
                    </View>
                    <View style={{top:6, left: 90,width: 8, height:8, backgroundColor: '#46CC37', borderRadius: 50}}></View>
                  </View>
                  <Text
                    style={{
                      height: 39,
                      fontSize: 14,
                      fontWeight: 'regular',
                      color: '#212121',
                      lineHeight: 20,
                    }}>
                    {item.short}
                  </Text>
                </View>
              </Pressable>
              <View
                style={{
                  width: 395,
                  height: 1,
                  backgroundColor: '#f1f1f1',
                }}></View>
            </>
          ))}
        </ScrollView>
      </View>
      <Modal visible={modalVisibleNotificationDetail}>
        <View style={style.container}>
          <View style={style.titleContainer}>
            <Pressable
              style={style.title}
              onPress={() => setModalVisibleNotificationDetail(false)}>
              <Image source={icon.icon_arrow_left} />
              <Text style={style.textTitle}>Chi tiết thông báo</Text>
            </Pressable>
          </View>
          {detailNotification.map(item => (
            <View style={{flex: 1, top: 66, left: 12}}  key={item.id}>
              <Text
                style={{
                  height: 21,
                  fontSize: 16,
                  fontWeight: 'semibold',
                  color: '#0060af',
                }}>{item.title}</Text>
              <Text
                style={{
                  height: 16,
                  fontSize: 12,
                  fontWeight: 'regular',
                  color: '#808080',
                  top: 3,
                }}>{item.time}</Text>
              <Image
                source={image.image_notification}
                style={{top: 15, width: 395, height: 200, borderRadius: 10}}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'regular',
                  color: '#212121',
                  lineHeight: 20,
                  top: 27,
                }}>{item.short} {`\n`}{item.content}</Text>
            </View>
          ))}
        </View>
      </Modal>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F7FC',
  },
  titleContainer: {
    width: 412,
    height: 54,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#0060AF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    width: 204,
    height: 28,
    position: 'absolute',
    top: 13,
    left: 3,
  },
  textTitle: {
    width: 165,
    height: 24,
    position: 'absolute',
    top: 2,
    left: 33,
    fontSize: 18,
    fontWeight: 'medium',
    fontFamily: 'Be Vietnam Pro',
    color: '#ffffff',
  },
});
