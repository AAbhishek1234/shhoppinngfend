import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const UserProfile = () => {
  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({
    userId: '',
    name: '',
    email: '',
    address: '',
    gender: '',
    age: '',
    phoneNo: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingUserId, setEditingUserId] = useState('');
  const navigate = useNavigate()
  useEffect(() => {
    fetchProfiles();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);





  const fetchProfiles = async () => {
    try {
      const response = await fetch('http://localhost:4000/userProfile/profiles', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`, 
        },
      });
      const data = await response.json();
      if (response.ok) {
        setProfiles(data);
      } else {
        console.log('Error fetching profiles:', data.message);
      }
    } catch (error) {
      console.error('Server error:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = isEditing ? 'PUT' : 'POST';
      const response = await fetch('http://localhost:4000/userProfile/profiles', {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(newProfile),
      });
      const data = await response.json();
      if (response.ok) {
        if (isEditing) {
          setProfiles(profiles.map((profile) => (profile.userId === editingUserId ? data : profile)));
        } else {
          setProfiles([...profiles, data]); 
        }
        setNewProfile({ userId: '', name: '', email: '', address: '', gender: '', age: '', phoneNo: '' });
        setIsEditing(false);
        setEditingUserId('');
      } else {
        console.log('Error creating/updating profile:', data.message);
      }
    } catch (error) {
      console.error('Server error:', error);
    }
  };

  const deleteProfile = async (userId) => {
    try {
      const response = await fetch('http://localhost:4000/userProfile/profiles', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });
      const data = await response.json();
      if (response.ok) {
        setProfiles(profiles.filter((profile) => profile.userId !== userId));
      } else {
        console.log('Error deleting profile:', data.message);
      }
    } catch (error) {
      console.error('Server error:', error);
    }
  };

  const editProfile = (profile) => {
    setNewProfile({
      userId: profile.userId,
      name: profile.name,
      email: profile.email,
      address: profile.address,
      gender: profile.gender,
      age: profile.age,
      phoneNo: profile.phoneNo,
    });
    setIsEditing(true);
    setEditingUserId(profile.userId);
  };

  return (

    <>
       <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px',height:"31.9rem" }}>
       
      <h1>User Profiles</h1>

      <form onSubmit={handleSubmit} style={{borderRadius:"5px"}}>
        <div id='alldata' style={{marginLeft:"40px",fontSize:"25px", border:"2px solid #f0f0f0",width:"25rem",backgroundColor:"#f0f0f0",borderRadius:"15px"}}>
        Name:
        <input style={{borderRadius:"5px",border:"none",height:"2rem",marginLeft:"4rem"}}
          type="text"
          name="name"
      
          value={newProfile.name}
          onChange={handleInputChange}
          required
        /><br/>
        Email:
        <input style={{borderRadius:"5px",border:"none",height:"2rem",marginLeft:"4.3rem"}}
          type="email"
          name="email"
         
          value={newProfile.email}
          onChange={handleInputChange}
          required
        /><br/>
        Address:
        <input style={{borderRadius:"5px",border:"none",height:"2rem",marginLeft:"2.6rem"}}
          type="text"
          name="address"
          value={newProfile.address}
          onChange={handleInputChange}
          required
        /><br/>
        Gender:
        <input style={{borderRadius:"5px",border:"none",height:"2rem",marginLeft:"2.9rem"}}
          type="text"
          name="gender"
          value={newProfile.gender}
          onChange={handleInputChange}
        /><br/>
        Age:
        <input style={{borderRadius:"5px",border:"none",height:"2rem",marginLeft:"5.3rem"}}
          type="number"
          name="age"
          value={newProfile.age}
          onChange={handleInputChange}
        /><br/>
        Mobile No:
        <input style={{borderRadius:"5px",border:"none",height:"2rem",marginLeft:"1rem"}}
          type="number"
          name="phoneNo"
          value={newProfile.phoneNo}
          onChange={handleInputChange}
        /><br/>
         <input type="text" name="userId" placeholder="User ID" value={newProfile.userId} onChange={handleInputChange} required />
        </div>
        <button type="submit" style={{borderRadius:"10px", width:"6rem",marginTop:"10px",marginLeft:"45px",border:"2px solid black"}}>{isEditing ? 'Update Profile' : 'Create Profile '}</button>
        {isEditing && (
          <button
            type="button" style={{borderRadius:"10px", width:"6rem",marginTop:"0.8rem",height:"2.3rem",marginLeft:"245px",border:"2px solid black",position:"absolute"}}
            onClick={() => {
              setIsEditing(false);
              setNewProfile({ userId: '', name: '', email: '', address: '', gender: '', age: '', phoneNo: '' });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <ul>
        {profiles.map((profile) => (
          <li key={profile.userId}>
            <h2 style={{marginLeft:"35rem",marginTop:"-19rem"}}>{profile.name}</h2>
            <p style={{marginLeft:"35rem"}}>Email: {profile.email}</p>
            <p style={{marginLeft:"35rem"}}>Address: {profile.address}</p>
            <p style={{marginLeft:"35rem"}}>Gender: {profile.gender}</p>
            <p style={{marginLeft:"35rem"}}>Age: {profile.age}</p>
            <p style={{marginLeft:"35rem"}}>Mobile No: {profile.phoneNo}</p>
            <button style={{borderRadius:"10px", width:"6rem",marginTop:"2rem",height:"2.3rem",marginLeft:"115px",border:"2px solid black",position:"absolute"}} onClick={() => editProfile(profile)}>Update</button>
            <button  style={{borderRadius:"10px", width:"6rem",marginTop:"2rem",height:"2.3rem",marginLeft:"235px",border:"2px solid black",position:"absolute"}}onClick={() => deleteProfile(profile.userId)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </>
    
  );
};

export default UserProfile;
