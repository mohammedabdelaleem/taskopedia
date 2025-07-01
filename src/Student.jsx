
export default function Student(props) {
  const fullName = "Mohammed Abdelaleem";
  const programmingExp = 3;

  return (
    <div className="container p-4">
      <div className="row border">
        <div className="col-2">
          <img
            src={`https://ui-avatars.com/api/?name=${props.name}`}
            className="w-100"
          />
        </div>
        <div className="col-10">
          {props.name}
          <br />
          Coding Exp: {props.expreience} years
        </div>
      </div>
    </div>
  );
}
