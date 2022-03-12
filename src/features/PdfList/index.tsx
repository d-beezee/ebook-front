import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "@/App/hooks";
import { useEffect } from "react";
import { fetchPdfs } from "./actionCreators";
import PdfPreview from "@/components/PdfPreview";
import PageLoader from "@/components/PageLoader";
export default () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetchPdfs(dispatch);
  }, []);
  // The `state` arg is correctly typed as `RootState` already
  const { list, loading } = useAppSelector((state) => ({
    list: state.pdflist.list,
    loading: state.pdflist.loading,
  }));

  if (loading) {
    return <PageLoader />;
  }
  return (
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
      {list.map((item) => {
        return (
          <div key={item.id}>
            <PdfPreview item={item} />
          </div>
        );
      })}
    </div>
  );
};
