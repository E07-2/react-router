import { useParams } from "react-router-dom";
import { getMember } from "../data";

const Member = () => {
  let params = useParams();
  let member = getMember(parseInt(params.memberId, 10));
  console.log(member);
  return (
    <main style={{ padding: "1rem" }}>
      <h2>{member.name}</h2>
      <p>Username: {member.username}</p>
      <p>Email{member.email}</p>
    </main>
  );
};

export default Member;
