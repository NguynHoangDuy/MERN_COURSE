import React from 'react';

const ProfileAbout = ({profile}) => {
    return (
        <div className="profile-about bg-light p-2">
                <h2 className="text-primary">{(profile.user.name).split(" ")[0]}'s Bio</h2>
                <p>
                   {profile.bio}
                </p>
                <div className="line"></div>
                <h2 className="text-primary">Skill Set</h2>
                <div className="skills">
                    {(profile.skills).map((item, key) => (
                        <div key={key} className="p-1"><i className="fa fa-check"></i> {item}</div>
                    ))}
                </div>
                </div>
    );
};

export default ProfileAbout;