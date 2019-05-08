import React from 'react';

const SecondComponent = (props) => (
<p>
Code:{props.student.code}    High School:{props.student.highschool}     University:{props.student.university}     Degree:{props.student.degree}
<button onClick={props.delete}>remove</button>
</p>
);

export default SecondComponent;