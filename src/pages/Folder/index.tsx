import PdfList from "@/features/PdfList";
import FoldersList from "@/features/FoldersList";
import { Grid, Row, Col } from "@zendeskgarden/react-grid";
import { useParams } from "react-router-dom";

export const Folder = () => {
  const { id } = useParams();
  if (!id) return <div>No id</div>;
  return (
    <Grid>
      <Row>
        <Col>
          <FoldersList id={parseInt(id)}/>
          <PdfList align="left" folder={parseInt(id)}/>
        </Col>
      </Row>
    </Grid>
  );
};
