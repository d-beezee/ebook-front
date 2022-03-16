import { ReactComponent as FolderSVG } from "./folder.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Folder = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    width: 90%;
    height: auto;
    margin: 0 5%;
  }
  .children-files {
    position: absolute;
    top: 0;
    right: -5px;
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
    top: 55px;
    color: #595959;
    text-align: center;
    border-radius: 50%;
    font-weight: bold;
    line-height: 140%;
    left: 10px;
  }
`;

export default ({
  item,
}: {
  item: {
    id: number;
    name: string;
    files: number;
    children: number;
  };
}) => {
  const navigate = useNavigate();
  return (
    <Folder
      key={item.id}
      onClick={() => {
        navigate(`/folder/${item.id}`);
      }}
    >
      <FolderSVG />
      <span className="children-files">{item.files}</span>
      <span className="children-sub-folders">{item.children}</span>
      <span className="name">{item.name}</span>
    </Folder>
  );
};
