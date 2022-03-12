import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled(Link)`
  // a4 paper size
  width: 210px;
  height: 297px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-size: 32px;
  text-decoration: none;
  img {
    width: 100%;
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