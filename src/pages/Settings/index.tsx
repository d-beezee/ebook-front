import { Grid, Row, Col } from "@zendeskgarden/react-grid";
import { Button } from "@zendeskgarden/react-buttons";
import { useEffect, useState } from "react";
import { Spinner } from "@zendeskgarden/react-loaders";
import { setTitle } from "@/features/PageData/slice";
import { useAppDispatch } from "@/App/hooks";
export const Settings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setTitle("Settings"));
  })
  return (
    <Grid>
      
      <Row >
        <Col textAlign="center">
          <Button
          isPrimary
            disabled={isLoading}
            onClick={
              !isLoading
                ? () => {
                    setIsLoading(true);
                    fetch(process.env.REACT_APP_API_URL + "/generate").finally(() => {
                      setIsLoading(false);
                    });
                  }
                : undefined
            }
          >
            {isLoading ? <Spinner size="32" /> : "Generate"}
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};
