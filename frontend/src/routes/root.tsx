import HeaderComponent from "../components/Header/index";

const Root = ({ children }: any) => {
  return (
    <div>
      <HeaderComponent />
      {children}
    </div>
  );
};

export default Root;
