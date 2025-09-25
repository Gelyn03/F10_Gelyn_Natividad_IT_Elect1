import React from "react";
import ChatScreen from "./ChatScreen";
import CommentSection from "./CommentSection";
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CommentSection />
      <ChatScreen />
    </SafeAreaView>
    );
}