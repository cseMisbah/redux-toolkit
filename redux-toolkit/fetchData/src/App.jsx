import "./App.css";
import PostsView from "./features/posts/PostsView";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState } from "react";

function App() {
  return (
    <div>
      <PostsView></PostsView>
    </div>
  );
}

export default App;
