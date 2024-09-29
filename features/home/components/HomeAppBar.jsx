import { AntDesign } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SecondaryColor } from "../../../constants/Colors";

export default HomeAppBar = () => {
  return (
    <SafeAreaView className="bg-white">
      <View className="px-8 pt-4 flex-row justify-between bg-white">
        <Text style={{ fontFamily: "Inter-Black-Italic", fontSize: 18 }}>
          Instagram
        </Text>
        <View className="flex-row space-x-4">
          <AntDesign name="hearto" size={24} color={SecondaryColor} />
          <AntDesign name="message1" size={24} color={SecondaryColor} />
        </View>
      </View>
    </SafeAreaView>
  );
};
