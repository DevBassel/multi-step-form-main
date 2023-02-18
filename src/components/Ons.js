export default function Ons(props) {
  console.log("props", props.checked);

  return (
    <>
      <input
        type={"checkbox"}
        checked={props.checked}
        onChange={() => {
          return;
        }}
      />
      <div className="ons-info">
        <h4>{props.title}</h4>
        <p>{props.dis}</p>
      </div>
      <span>
        ${props.price}/{props.role ? "mo" : "yr"}
      </span>
    </>
  );
}
