import React from "react";
import { Link, List, ListItem } from "./styles";

interface Repo {
  id: number;
  name: string;
  html_url: string;
}

interface RepoListProps {
  repos: Repo[];
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  return (
    <List>
      {repos.map((repo) => (
        <ListItem key={repo.id}>
          <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default RepoList;
