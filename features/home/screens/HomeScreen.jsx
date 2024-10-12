import { FlatList, View } from "react-native";
import { PostCard } from "../components/PostCard";

export const HomeScreen = () => {
  const data = [
    {
      id: 1,
      title: "Some title",
      userName: "templeOs",
      likes: 1200,
      description: "helloe this is a sample description of the post. \n Hello I am back again.",
      subtitle: "Some subtitle",
      imageUrl: "https://placehold.co/600x400.png",
    },
    {
      id: 2,
      title: "Some title",
      userName: "templeOs",
      likes: 1200,
      description: "helloe this is a sample description of the post.",
      subtitle: "Some subtitle",
      imageUrl: "https://placehold.co/600x400.png",
    },
    {
      id: 3,
      title: "Some title",
      userName: "templeOs",
      likes: 1200,
      description: "helloe this is a sample description of the post.",
      subtitle: "Some subtitle",
      imageUrl: "https://placehold.co/600x400.png",
    },
    {
      id: 4,
      title: "Some title",
      userName: "templeOs",
      likes: 1200,
      description: "helloe this is a sample description of the post.",
      subtitle: "Some subtitle",
      imageUrl: "https://placehold.co/600x400.png",
    },
  ];
  return (
    <View className="flex-1 justify-start">
      <View className="flex-1">
        <FlatList
          className="flex-1"
          data={data}
          renderItem={({ item }) => <PostCard post={item} />}
        />
      </View>
    </View>
  );
};
