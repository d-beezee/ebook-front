import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled(Link)`
  // a4 paper size
  max-width: 100%;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-size: 32px;
  text-decoration: none;
  img {
    width: 100%;
    width: 140px;
    height: 197px;
    height: auto
  }
`;
export default ({ item }: { item: { id: number; preview?: string } }) => {
  return (
    <Container to={`/list/${item.id}`}>
      {item.preview && <img src={`data:image/png;base64,${item.preview}`} />}
    </Container>
  );
};
