import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "@/App/hooks";
import { useEffect } from "react";
import { fetchFolders } from "./actionCreators";
import PageLoader from "@/components/PageLoader";
import Folder from "@/components/Folder";
import styled from "styled-components";

const FolderList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  column-gap: 30px;
  text-align: center;
`;
export default ({ id }: { id?: number }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetchFolders(dispatch, id);
  }, [id]);
  // The `state` arg is correctly typed as `RootState` already
  const { list, loading } = useAppSelector((state) => ({
    list: state.folderlist.list,
    loading: state.folderlist.loading,
  }));

  if (loading) {
    return <PageLoader />;
  }
  return (
    <FolderList>
      {list.map((item) => (
        <Folder item={item} />
      ))}
    </FolderList>
  );
};
