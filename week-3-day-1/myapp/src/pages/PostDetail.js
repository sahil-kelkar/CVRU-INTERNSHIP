import { useParams } from "react-router-dom";

function PostDetail() {
  const { postId } = useParams();

  return (
    <div>
      <h2>Post Details</h2>
      <p>Viewing Post ID: <strong>{postId}</strong></p>
    </div>
  );
}

export default PostDetail;
