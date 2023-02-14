import Step from "./Step";
export default function Steps() {
  return (
    <div className="steps">
      <Step num="1" name="your info"  />
      <Step num="2" name="select plan" />
      <Step num="3" name="add-ons" />
      <Step num="4" name="summary" />
    </div>
  );
}
