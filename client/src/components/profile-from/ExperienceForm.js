import React, { useState } from 'react';

import { addExperience } from '../../action/profile';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ExperienceForm = ({addExperience}) => {

    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    })

    const navigate = useNavigate()
    const { company, title, location, from, to, current, description } = formData;

    const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        addExperience(formData)
        navigate("/dashboard")
    }
    return (
        <section className="container">
      <h1 className="large text-primary">
       Add An Experience
      </h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <form className="form" onSubmit={(e)=> onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="* Job Title" name="title" required value={title} onChange={(e)=> onChange(e)} />
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Company" name="company" required value={company} onChange={(e)=> onChange(e)} />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" value={location}  onChange={(e)=> onChange(e)}/>
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange={(e)=> onChange(e)} />
        </div>
         <div className="form-group">
          <p><input type="checkbox" name="current" value={current} 
              onChange={(e) => {
                    const date = new Date().toISOString().slice(0, 10);
                    let cur = {} 
                    if(e.target.checked === true)
                    {   cur = {
                            to: date,
                            current: e.target.checked
                        }  
                    }
                    else {
                        cur = {
                            current: e.target.checked
                        }  
                    }
                    setFormData({
                     ...formData,
                     ...cur
                });               
              }}/> Current Job</p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" value={to} onChange={(e)=> onChange(e)} />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            value={description}
            placeholder="Job Description"
            onChange={(e)=> onChange(e)}
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
    </section>
    );
};



export default connect(null, {addExperience})(ExperienceForm);