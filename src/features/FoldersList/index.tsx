import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "@/App/hooks";
import { useEffect } from "react";
import { fetchFolders } from "./actionCreators";
import PageLoader from "@/components/PageLoader";
import {   ReactComponent as FolderSVG} from './folder.svg';
import styled from "styled-components";

const Folder = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .children-files {
    position: absolute;
    top: 0;
    right: 5px;
    background: #c00;
    width: 20px;
    text-align: center;
    border-radius: 50%;
    font-weight: bold;
    border: 2px solid;
    line-height: 140%;
  }
  .children-sub-folders {
    position: absolute;
    width: 20px;
    top: 35px;
    color: #595959;
    text-align: center;
    border-radius: 50%;
    font-weight: bold;
    line-height: 140%;
    left: 17px;
  }
`

export default () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetchFolders(dispatch);
  }, []);
  // The `state` arg is correctly typed as `RootState` already
  const { list, loading } = useAppSelector((state) => ({
    list: state.folderlist.list,
    loading: state.folderlist.loading,
  }));

  if (loading) {
    return <PageLoader />;
  }
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, 100px)"}}>
      {list.map((item) => {
        return (
          <Folder key={item.id}>
            <FolderSVG/>
            <span className="children-files">{item.files}</span>
            <span className="children-sub-folders">{item.children}</span>
            <span className="name">{item.name}</span>
          </Folder>
        );
      })}
    </div>
  );
};
