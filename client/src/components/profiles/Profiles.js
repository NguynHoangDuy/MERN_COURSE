import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllProfiles } from '../../action/profile';
import ProfileItem from './ProfileItem';
const Profiles = ({getAllProfiles, profiles}) => {
    const [profileList, setProfiles] = useState([])
    
    useEffect(()=>{
        if(profiles.length === 0) getAllProfiles()
        setProfiles(profiles)
    }, [profiles, getAllProfiles])
    return (
        <section className="container">
            <h1 class="large text-primary">Developers</h1>
            <p class="lead">
                <i class="fab fa-connectdevelop"></i> Browse and connect with developers
            </p>
            <div class="profiles">
                {profileList.map((item) => (
                    <ProfileItem item={item} key={item.user._id}/>
                ))}
            </div>
        </section>
    );
};
const mapStateToProps = (state) => ({
    profiles: state.profile.profiles
})
export default connect(mapStateToProps, {getAllProfiles})(Profiles);