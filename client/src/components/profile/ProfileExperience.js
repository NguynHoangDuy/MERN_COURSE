import React from 'react';
import formatDate from '../../utils/formatDate';

const ProfileExperience = ({experience}) => {
    return (
        <div class="profile-exp bg-white p-2">
                <h2 class="text-primary">Experience</h2>
                {(experience).map((item, key)=> (
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
    );
};

export default ProfileExperience;