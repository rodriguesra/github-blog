import coverImage from "../../assets/Cover.png";
import Profile from "../components/Profile";
import { Container } from "./styles.ts";

const Blog = () => {
  return (
    <Container>
      <img src={coverImage} alt="Cover" />
      <Profile username="diego3g" />
    </Container>
  );
};
export default Blog;
