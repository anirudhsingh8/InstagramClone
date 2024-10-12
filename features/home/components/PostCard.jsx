import { Image, StyleSheet, View } from "react-native";
import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";

export const PostCard = ({ post }) => {
  return (
    <View className="mb-4 bg-white">
      <PostHeader username={post.userName} />
      <Image style={styles.image} source={{ uri: post.imageUrl }} />
      <PostFooter
        username={post.userName}
        likes={post.likes}
        description={post.description}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 180,
    width: "auto",
  },
});
