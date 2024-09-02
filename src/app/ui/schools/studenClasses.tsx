import BallIcon from "../icons/ball";

const StudentClasses = () => {
  return (
    <>
      <div>
        <h1>Minhas aulas</h1>
        <div></div>
      </div>
    </>
  );
};

export default StudentClasses;

function NoClassSelected() {
  return (
    <>
      <div>
        <h1>Minhas aulas</h1>
        <div>
          <p>Não marcou nenhuma aula ainda?</p>
          <BallIcon />
        </div>
      </div>
    </>
  );
}
