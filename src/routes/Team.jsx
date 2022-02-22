import { Link, Outlet } from "react-router-dom";
import { getMembers } from "../data";

const Team = () => {
  const members = getMembers();
  return (
    <>
      <main style={{ display: "flex" }}>
        <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
          {members.map((member) => (
            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/team/${member.id}`}
              key={member.id}
            >
              {member.name}
            </Link>
          ))}
        </nav>
      </main>
    </>
  );
};

export default Team;
