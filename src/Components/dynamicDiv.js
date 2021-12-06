export default function DynamicDiv(props) {
  return (
    <div className="blue-container">
      <p className="task-left">TASKS LEFT {props.dyn}</p>
      <p className="task-last">YOUR LAST TASK IS </p>
      <p className="task-thank-you">Have a nice day </p>
    </div>
  );
}
