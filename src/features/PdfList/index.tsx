import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "@/App/hooks";
import { useEffect } from "react";
import { fetchPdfs } from "./actionCreators";
import PdfPreview from "@/components/PdfPreview";
import PageLoader from "@/components/PageLoader";
import styled from "styled-components";

type Alignment = "left" | "center" | "right";
const PdfList = styled.div<{align:Alignment}>`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  column-gap: 30px;
  
  justify-content: ${props => {
    switch (props.align) {
      case "left":
        return "flex-start";
      case "center":
        return "center";
      case "right":
        return "flex-end";
    }
  }};
`;
export default ({folder, align = "center"}:{folder?:number, align?: Alignment}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetchPdfs(dispatch,folder);
  }, [folder]);
  // The `state` arg is correctly typed as `RootState` already
  const { list, loading } = useAppSelector((state) => ({
    list: state.pdflist.list,
    loading: state.pdflist.loading,
  }));

  if (loading) {
    return <PageLoader />;
  }
  return (
    <PdfList align={align}>
      {list.map((item) => {
        return (
          <div key={item.id}>
            <PdfPreview item={item} />
          </div>
        );
      })}
    </PdfList>
  );
};
