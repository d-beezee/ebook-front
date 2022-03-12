import { Dots } from "@zendeskgarden/react-loaders";
import { Row, Col } from "@zendeskgarden/react-grid";
import styled from "styled-components";

const PageCol = styled(Col)`
    height: 80vh;
    display:flex;
    align-items:center;
    justify-content:center;
`
export default ({style}:{style?: React.CSSProperties }) => {
  return (
    <Row style={style}>
      <PageCol textAlign="center">
        <Dots size={64}/>
      </PageCol>
    </Row>
  );
};
