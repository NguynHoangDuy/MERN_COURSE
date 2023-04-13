import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGithubRepo } from "../../action/profile";
const ProfileGithub = ({ gitUser, getGithubRepo, repo }) => {
    useEffect(() => {
        getGithubRepo(gitUser);
    }, [getGithubRepo, gitUser]);

    return (
        <div className="profile-github">
            <h2 className="text-primary my-1">
                <i className="fab fa-github"></i> Github Repos
            </h2>
            {repo.map((item, key) => (
                <div className="repo bg-white p-1 my-1" key={key}>
                    <div>
                        <h4>
                            <a
                                href={item.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.name}
                            </a>
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellat, laborum!
                        </p>
                    </div>
                    <div>
                        <ul>
                            <li className="badge badge-primary">
                                Stars: {item.stargazers_count}
                            </li>
                            <li className="badge badge-dark">
                                Watchers: {item.watchers_count}
                            </li>
                            <li className="badge badge-light">
                                Forks: {item.forks_count}
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    repo: state.profile.repo,
});

export default connect(mapStateToProps, { getGithubRepo })(ProfileGithub);
