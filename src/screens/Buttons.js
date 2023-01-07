import { Button, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";

export default function Buttons() {
  const doSomething = () => {
    console.log("Do something");
  };

  const doSomethingOnStart = () => {
    console.log("Do something on start");
  };

  const doSomethingIfLong = () => {
    console.log("Do something on long press");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Button onPress={doSomething} title="Button" color="#189bb8" />
        <TouchableOpacity onPress={doSomething}>
          <Text>TouchableOpacity</Text>
        </TouchableOpacity>
        <Pressable onPress={doSomething} onPressIn={doSomethingOnStart} onLongPress={doSomethingIfLong}>
          <Text>Pressable</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};
