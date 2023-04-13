import React from 'react';
import formatDate from '../../utils/formatDate';

const ProfileEducation = ({education}) => {
    return (
        <div class="profile-edu bg-white p-2">
                <h2 class="text-primary">Education</h2>
                {(education).map((item, key)=> (
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
    );
};

export default ProfileEducation;