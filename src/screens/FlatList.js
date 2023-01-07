import { FlatList, Text, View } from "react-native";

export default function FlatListExample() {
  // Animals array
  const animals = [{id: 1, title: 'Lizard'}, {id: 2, title: 'Cockroach'}];
  // Function to render animal title
  const renderAnimal = ({ item }) => (
    <Text>{item.title}</Text>
  );

  return (
    <View>
      <FlatList data={animals} renderItem={renderAnimal} keyExtractor={animal => animal.id} />
    </View>
  );
};
