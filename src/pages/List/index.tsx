import PdfList from "@/features/PdfList";
import { Grid, Row, Col } from "@zendeskgarden/react-grid";

export const List = () => {
  return (
    <Grid>
      <Row>
        <Col>
          <PdfList />
        </Col>
      </Row>
    </Grid>
  );
};
