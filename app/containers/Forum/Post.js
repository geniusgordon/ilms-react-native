import React, { PropTypes } from 'react';
import { Linking, Image, Text, View } from 'react-native';
import HTMLView from 'react-native-htmlview';
import accountIcon from '../../assets/ic_account_circle_black.png';
import styles from './styles';

const Post = ({ post }) => (
  <View style={styles.post}>
    <View style={styles.postInfo}>
      <View style={styles.postIconContainer}>
        <Image style={styles.postIcon} source={accountIcon} />
      </View>
      <View style={styles.postInfoContent}>
        <View style={styles.postInfoFirstLine}>
          <Text style={styles.postInfoName}>{post.name}</Text>
          <Text style={styles.postInfoId}>({post.account})</Text>
        </View>
        <Text style={styles.postInfoEmail}>{post.email}</Text>
        <Text style={styles.postInfoTime}>{post.date}</Text>
      </View>
    </View>
    <View style={styles.postContentContainer}>
      <HTMLView
        value={post.content}
        onLinkPress={(url) => Linking.openURL(url)}
      />
    </View>
  </View>
);

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;

