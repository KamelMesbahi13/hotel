import Boumerdes from "../../../assets/BoumerdesTwo.png";

const Introduction = () => {
  return (
    <div>
      <div className="relative">
        <div>
          {" "}
          <img src={Boumerdes} className="w-full" alt="" />
        </div>
        <div className="absolute top-1/2">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            distinctio, quod, ducimus mollitia placeat quisquam, provident
            maxime sit rem tempore ratione tempora. Ipsum voluptatem temporibus
            cumque, voluptatibus totam magnam! Harum?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
