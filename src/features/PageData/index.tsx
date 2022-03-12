import { useAppSelector } from "@/App/hooks";

export const Title = () => {
  // The `state` arg is correctly typed as `RootState` already
  const { title } = useAppSelector((state) => ({
    title: state.pagedata.title,
  }));

  return <h1 style={{color:"#fff"}}>{title}</h1>;
};
