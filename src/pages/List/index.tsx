import PdfList from "@/features/PdfList";
import FoldersList from "@/features/FoldersList";
import { Grid, Row, Col } from "@zendeskgarden/react-grid";
import styled from "styled-components";
const PdfListContainer = styled.div`
  margin-bottom: 20px;
  background-color: #3d3d3d;
  padding: 20px 0;
  border-bottom: 5px solid #000;
`;
export const List = () => {
  return (
    <>
      <PdfListContainer>
        <PdfList />
      </PdfListContainer>
      <Grid>
        <Row>
          <Col>
            <FoldersList />
          </Col>
        </Row>
      </Grid>
    </>
  );
};
