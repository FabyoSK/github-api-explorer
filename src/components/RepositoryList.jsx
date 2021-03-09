import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

export function RepositoryList() {
  const repository = {
    name: "fsk",
    description: "bla bla bla",
    link: "https://github.com/FabyoSK",
  };

  return (
    <section className="repository-list">
      <h1>List of Repositories</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
