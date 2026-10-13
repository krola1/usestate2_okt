export default function TonyCard(props) {
  console.log(props);

  //recieves props from App.jsx, renders infor from object,
  //and assigns remove function

  return (
    <div style={{ border: "solid white" }}>
      <h3>Tony</h3>
      <p>{props.name}</p>
      <button onClick={() => props.removeItem(props.id)}>
        Delete {props.name}
      </button>
    </div>
  );
}
