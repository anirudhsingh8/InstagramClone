import { Entypo } from "@expo/vector-icons";
import { Text, View } from "react-native";

export const PostHeader = ({ username }) => {
  return (
    <View className="p-4 flex-row justify-between">
      <Text className="font-semibold">@{username}</Text>
      <Entypo name="dots-three-vertical" size={18} />
    </View>
  );
};
