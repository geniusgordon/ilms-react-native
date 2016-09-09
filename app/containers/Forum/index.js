import React from 'react';
import { Image, View, Text } from 'react-native';
import accountIcon from '../../assets/ic_account_circle_black.png';
import styles from './styles';

const Forum = () => (
  <View style={styles.base}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>討論區</Text>
    </View>
    <View style={styles.padding} />
    <View style={styles.list}>
      <View style={styles.post}>
        <View style={styles.postInfo}>
          <View style={styles.postIconContainer}>
            <Image style={styles.postIcon} source={accountIcon} />
          </View>
          <View style={styles.postInfoContent}>
            <View style={styles.postInfoFirstLine}>
              <Text style={styles.postInfoName}>翁子皓</Text>
              <Text style={styles.postInfoId}>(102062312)</Text>
            </View>
            <Text style={styles.postInfoEmail}>geniusgordon@gmail.com</Text>
            <Text style={styles.postInfoTime}>2016-09-09 10:58</Text>
          </View>
        </View>
        <View style={styles.postContentContainer}>
          <Text style={styles.postContent}>
            AAAAAAAA
          </Text>
        </View>
      </View>
    </View>
  </View>
);

export default Forum;

