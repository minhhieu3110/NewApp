import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
    ScrollView,
} from 'react-native';
import {icon, image} from '../../assets/index';
import TopTabNavigator from '../../navigation/TopTabNavigator';

export default function Order({navigation}) {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={{width: 79, height: 24, fontSize: 18, fontWeight: 'medium', color: '#fff', top: 15, left: 12}}>Đơn hàng</Text>
                {/* <TopTabNavigator/> */}
            </View>
        </View>
    );
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        width: 412,
        height: 88,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: "#0060AF",
        gap: 11
    }
});
