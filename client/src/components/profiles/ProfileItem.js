import React from 'react';
import { Link } from 'react-router-dom';

const ProfileItem = ({item}) => {
    return (
        <div className="profile bg-light" >
          <img
            className="round-img"
            src={item.user.avatar}
            alt=""
          />
          <div>
            <h2>{item.user.name}</h2>
            <p>Developer at {item.company}</p>
            <p>{item.location}</p>
            <Link to={`/profile/${item.user._id}`}  className="btn btn-primary">View Profile</Link>
          </div>

          <ul>
            {item.skills.map((value, index) => (
                <li key={index} className="text-primary">
                    <i className="fas fa-check"></i> {value}
                </li>
            ))}
          </ul>
        </div>
    );
};

export default ProfileItem;