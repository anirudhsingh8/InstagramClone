import { AntDesign, FontAwesome, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export const PostFooter = ({ likes, description, username }) => {
    return (
      <View className="p-4">
        <_FooterActionButtons />
        <Text className="space-y-2 text-base font-bold">{likes} likes</Text>
        <View className="my-2 flex-row">
          <Text className="font-semibold">@{username}</Text>
          <Text className="mx-2 font-semibold">{description}</Text>
        </View>
      </View>
    );
  };
  
  const _FooterActionButtons = () => {
    return (
      <View className="flex-row justify-between">
        <View className="flex-row justify-between space-x-4">
          <AntDesign name="hearto" size={18} />
          <FontAwesome5 name="comment" size={18} />
          <FontAwesome name="share" size={18} />
        </View>
  
        <MaterialCommunityIcons name="bookmark-outline" size={24} />
      </View>
    );
  };