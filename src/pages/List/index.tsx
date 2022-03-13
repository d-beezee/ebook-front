import PdfList from "@/features/PdfList";
import FoldersList from "@/features/FoldersList";
import { Grid, Row, Col } from "@zendeskgarden/react-grid";

export const List = () => {
  return (
    <Grid>
      <Row>
        <Col>
          <PdfList />
          <FoldersList />
        </Col>
      </Row>
    </Grid>
  );
};
