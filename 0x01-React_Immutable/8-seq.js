import { Seq } from 'immutable';

export default function printBestStudents(obj) {
  // Seq is lazy operation to efficiently chain operations by not creating intermediate objects
  const bestStudents = Seq(obj)
    // Filter to only students with score > 70
    .filter((student) => student.score > 70)
    // Map to specific format
    .map((student) => {
      return {
        score: student.score,
        firstName: student.firstName.slice(0, 1).toUpperCase() + student.firstName.slice(1),
        lastName: student.lastName.slice(0, 1).toUpperCase() + student.lastName.slice(1),
      };
    });
  // Convert immutable.js Seq to normal JS array
  console.log(bestStudents.toJS());
}
