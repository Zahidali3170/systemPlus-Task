import Comments from "./comments/Comments";

const App = () => {
  return (
    <div>
      <Comments
        currentUserId="1"
        commentsUrl="http://localhost:3004/comments"
      />
    </div>
  );
};

export default App;
