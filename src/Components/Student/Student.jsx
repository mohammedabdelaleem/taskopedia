const Student = (props) => {
  return (
    <div className="container p-4">
      <div className="row border align-items-center">
        <div className="col-2">
          <img src={props.headshot} className="w-100 h-50 py-2" />
        </div>
        <div className="col-8">
          {props.name}
          <br />
          Coding Exp: {props.expreience} years
        </div>
        <div className="col-2">{props.children}</div>
      </div>
    </div>
  );
};

export default Student;
