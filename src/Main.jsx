import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";

 const MainComponent = () => {
  const whatWeWillLearn = "React.js";
  const totalLectures = 3;
  return (
    <main>
      <p className="text-primary">
        In This Course We Will Learning {whatWeWillLearn} By Building
        ReactOpedia!!
      </p>
      <p>Total Lectures : {totalLectures}</p>
      <ul>
        <li className="orange-color">Call Ben</li>
        <li>Go to Walmart</li>
      </ul>

      <div className="row"> Student Enrolled</div>
      <Student
        expreience={3}
        name="Mohamed Abdelaleem"
        headshot="https://picsum.photos/200/300?random=1"
      >
        <StudentReview />
      </Student>

      <Student
        expreience={13}
        name="Mohamed Moshrif"
        headshot="https://picsum.photos/200/300?random=2"
      >
            <StudentReview />
      </Student>

      <Student
        expreience={5}
        name="Ali Hassan"
        headshot="https://picsum.photos/200/300?random=3"
      />
    </main>
  );
}


export default MainComponent;