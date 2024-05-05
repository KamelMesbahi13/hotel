import Introduction from "./Introduction/Introduction";
import Mission from "./Misson/Mission";

const Home = () => {
  return (
    <>
      <Introduction />
      <div className="container">
        <Mission />
      </div>
    </>
  );
};

export default Home;
