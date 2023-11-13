import { Container } from "./style";

const Skeleton = () => {
  return (
    <Container>
      <div className="one"></div>
      <div className="two">
        <div className="div-1"></div>
        <div className="div-2"></div>
        <div className="div-3"></div>
      </div>
    </Container>
  );
};

export default Skeleton;
