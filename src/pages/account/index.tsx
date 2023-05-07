import "./styles.module.css";

export default function Home() {
  const messageConnection = "Se connecter";
  const messageInscription = "S'inscrire";
  return (
    <>
      <div
        className="m-5 p-4"
        style={{
          display: "flex;",
          justifyContent: "center",
          gap: "16rem",
          flexWrap: "wrap",
        }}
      >
        <div
          className="card border-dark mb-3 p-4"
          style={{ maxWidth: "20rem;" }}
        >
          <div className="card-header">
            <h2>{messageConnection}</h2>
          </div>
          <div className="card-body">
            <h4 className="card-title">Dark card title</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quam explicabo aliquid molestiae tempore quod laboriosam tenetur
              optio aliquam deserunt iusto voluptatibus, doloribus error, sunt
              possimus quo exercitationem libero! Dicta?
            </p>
          </div>
        </div>
        <div
          className="card border-light mb-3 p-4 "
          style={{ maxWidth: "20rem;" }}
        >
          <div className="card-header ">
            <h2>{messageInscription}</h2>
          </div>
          <div className="card-body">
            <h4 className="card-title">Light card title</h4>
            <p className="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
              laudantium aspernatur, facilis doloremque repudiandae quibusdam
              culpa, repellat nesciunt reiciendis ipsum est placeat tenetur
              commodi. Alias consequatur atque quia eos expedita.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
