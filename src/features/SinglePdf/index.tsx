import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "@/App/hooks";
import { useEffect } from "react";
import { fetchPdf } from "./actionCreators";
import { Document, Page } from "react-pdf";
import styled from "styled-components";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import VisibilitySensor from "react-visibility-sensor";
import PageLoader from "@/components/PageLoader";

const width = 600;
const StyledPage = styled(Page)`
  max-width: 100%;
  canvas {
    max-width: 100%;
    height: auto!important;
  }
`;
const Reader = styled.div`
  max-width: 100%;
  width: ${width + 10}px;
  margin: 0 auto;
`;

export default ({ id }: { id: number }) => {
  let ref = React.createRef<any>();
  const [numPages, setNumPages] = useState<number | null>(null);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const updatePageNumber = (current: number) => {
    fetch(`${process.env.REACT_APP_API_URL}/list/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        current,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  useEffect(() => {
    fetchPdf(dispatch, id);
  }, []);
  const { pdf, loading, pageNumber } = useAppSelector((state) => ({
    pdf: state.pdf.item,
    loading: state.pdf.loading,
    pageNumber: state.pdf.item?.current,
  }));

  if (loading) {
    return <PageLoader />;
  }
  return (
    <Reader>
      <PageLoader style={{ display: numPages ? "none" : undefined }} />
      <SimpleBar
        style={{
          maxHeight: "calc(100vh - 55px)",
          display: numPages ? undefined : "none",
        }}
      >
        <Document
          file={`data:application/pdf;base64,${pdf?.base64}`}
          onLoadSuccess={({ numPages }: { numPages: number }) => {
            setNumPages(numPages);
          }}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <div
              key={`page_${index + 1}`}
              ref={index == pageNumber ? ref : undefined}
            >
              <VisibilitySensor
                active={hasScrolled}
                partialVisibility
                onChange={(isVisible: boolean) => {
                  if (isVisible && hasScrolled) {
                    updatePageNumber(index);
                  }
                }}
              >
                <StyledPage
                  pageNumber={index + 1}
                  width={width}
                  loading={<PageLoader />}
                  onRenderSuccess={() => {
                    if (!hasScrolled && ref && ref.current) {
                      ref.current.scrollIntoView({
                        block: "start",
                      });
                      setHasScrolled(true);
                    }
                  }}
                />
              </VisibilitySensor>
            </div>
          ))}
        </Document>
      </SimpleBar>
    </Reader>
  );
};
