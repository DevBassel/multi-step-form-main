export default function Card(props) {
  const { item } = props;
  return (
    <>
      <img src={item.img} alt={item.palnName} />
      <h3>{item.name}</h3>
      <p>${props.roule ? `${item.planY}/yr` : `${item.planMo}/mo`}</p>
      <p>{props.roule ? "2 months free" : ""}</p>
    </>
  );
}
