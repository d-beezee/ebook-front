import SinglePdf from "@/features/SinglePdf";
import { useParams } from "react-router-dom";

import { Grid, Row, Col } from "@zendeskgarden/react-grid";

export const Single = () => {
  const { id } = useParams();
  if (!id) return <div>No id</div>;
  return (
    <Grid>
      <Row>
        <Col>
          <SinglePdf id={parseInt(id)} />
        </Col>
      </Row>
    </Grid>
  );
};
