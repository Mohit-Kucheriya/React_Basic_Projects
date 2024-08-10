import styled from "styled-components";

const StartGame = () => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="" />
      </div>
      <div className="content">
        <h1>dice game</h1>
        <Button>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;

  .content{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .content {
    h1 {
      font-size: 86px;
      text-transform: uppercase;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  min-width: 220px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 18px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
  }
`;
