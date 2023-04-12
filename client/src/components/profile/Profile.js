import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProfileById } from '../../action/profile';
import { connect } from 'react-redux';
import formatDate from '../../utils/formatDate';
const Profile = ({getProfileById, profile}) => {
    const id = useParams()
    useEffect(()=>{
        getProfileById(id)
    }, [getProfileById, id])
    console.log(profile)
    return (
        <section className='container'>
            <Link to="/profiles" className="btn btn-light">Back To Profiles</Link>
            <div className="profile-grid my-1">
            {/* <!-- Top --> */}
                <div className="profile-top bg-primary p-2">
                <img
                    className="round-img my-1"
                    src={profile.user.avatar}
                    alt=""
                />
                <h1 className="large">{profile.user.name}</h1>
                <p className="lead">Developer at {profile.company}</p>
                <p>{profile.location}</p>
                <div className="icons my-1">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-globe fa-2x"></i>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube fa-2x"></i>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram fa-2x"></i>
                    </a>
                </div>
                </div>
                {/* <!-- About --> */}
                <div class="profile-about bg-light p-2">
                <h2 class="text-primary">{(profile.user.name).split(" ")[0]}'s Bio</h2>
                <p>
                   {profile.bio}
                </p>
                <div class="line"></div>
                <h2 class="text-primary">Skill Set</h2>
                <div class="skills">
                    {(profile.skills).map((item, key) => (
                        <div key={key} class="p-1"><i class="fa fa-check"></i> {item}</div>
                    ))}
                </div>
                </div>

                {/* <!-- Experience --> */}
                <div class="profile-exp bg-white p-2">
                <h2 class="text-primary">Experience</h2>
                {(profile.experience).map((item, key)=> (
                    <div key={key}>
                    <h3 class="text-dark">{item.company}</h3>
                    <p>{formatDate(item.from)} - {!item.current ? formatDate(item.to) : 'Current'}</p>
                    <p><strong>Position: </strong>{item.title}</p>
                    <p>
                    <strong>Description: </strong>{item.description}
                    </p>
                </div>
                ))}
                </div>
                {/* <!-- Education --> */}
                <div class="profile-edu bg-white p-2">
                <h2 class="text-primary">Education</h2>
                {(profile.education).map((item, key)=> (
                    <div key={key}>
                        <h3>{item.school}</h3>
                        <p>{formatDate(item.from)} - {!item.current ? formatDate(item.to) : 'Current'}</p>
                        <p><strong>Degree: </strong>{item.degree}</p>
                        <p><strong>Field Of Study: </strong>{item.fieldofstudy}</p>
                        <p>
                        <strong>Description: </strong>{item.description}
                        </p>
                    </div>
                ))}
                
                </div>
                {/* <!-- Github --> */}
                <div class="profile-github">
                <h2 class="text-primary my-1">
                    <i class="fab fa-github"></i> Github Repos
                </h2>
                <div class="repo bg-white p-1 my-1">
                    <div>
                    <h4><a href="/" target="_blank"
                        rel="noopener noreferrer">Repo One</a></h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat, laborum!
                    </p>
                    </div>
                    <div>
                    <ul>
                        <li class="badge badge-primary">Stars: 44</li>
                        <li class="badge badge-dark">Watchers: 21</li>
                        <li class="badge badge-light">Forks: 25</li>
                    </ul>
                    </div>
                </div>
                <div class="repo bg-white p-1 my-1">
                    <div>
                    <h4><a href="/" target="_blank"
                        rel="noopener noreferrer">Repo Two</a></h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat, laborum!
                    </p>
                    </div>
                    <div>
                    <ul>
                        <li class="badge badge-primary">Stars: 44</li>
                        <li class="badge badge-dark">Watchers: 21</li>
                        <li class="badge badge-light">Forks: 25</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};
const mapStateToProps = (state) => ({
    profile: state.profile.profile
})
export default connect(mapStateToProps, {getProfileById})(Profile);