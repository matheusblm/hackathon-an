import HeaderComponent from "../components/Header/index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Root = ({ children }: any) => {
  return (
    <div>
      <HeaderComponent />
      {children}
    </div>
  );
};

export default Root;
