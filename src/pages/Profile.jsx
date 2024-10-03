// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Form, Container } from 'react-bootstrap';

// const Profile = () => {
//   // States for form fields
//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     gender: '',
//     age: '',
//   });

//   // State to show success/error messages
//   const [message, setMessage] = useState('');
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   // Fetch user profile on page load
//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const token = localStorage.getItem('jwtToken');
//         const response = await axios.get('http://localhost:4000/userProfile/profile', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         // Populate the form with the fetched data
//         setUserData({
//           ...response.data.user,
//         });
//       } catch (error) {
//         console.error('Error fetching profile:', error);
//         setMessage('Error fetching profile data.');
//       }
//     };

//     fetchUserProfile();
//   }, []);


 

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({
//       ...userData,
//       [name]: value,
//     });
//   };

//   // Handle form submission (PUT request to update profile)
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem('jwtToken');
//       const response = await axios.put('http://localhost:4000/userProfile/profile', userData, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });

//       setMessage(response.data.message); // Success message
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       setMessage('Error updating profile.');
//     }
//   };

//   return (
//     <Container className="mt-5">
//       <h2>Update Profile</h2>

//       {/* Display success or error messages */}
//       {message && <div className="alert alert-info">{message}</div>}

//       {/* Profile Update Form */}
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formName">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="name"
//             value={userData.name}
//             onChange={handleInputChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="formEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             name="email"
//             value={userData.email}
//             onChange={handleInputChange}
//             disabled
//           />
//         </Form.Group>

//         <Form.Group controlId="formPhone">
//           <Form.Label>Phone Number</Form.Label>
//           <Form.Control
//             type="text"
//             name="phone"
//             value={userData.phone}
//             onChange={handleInputChange}
//           />
//         </Form.Group>

//         <Form.Group controlId="formAddress">
//           <Form.Label>Address</Form.Label>
//           <Form.Control
//             type="text"
//             name="address"
//             value={userData.address}
//             onChange={handleInputChange}
//           />
//         </Form.Group>

//         <Form.Group controlId="formGender">
//           <Form.Label>Gender</Form.Label>
//           <Form.Control
//             as="select"
//             name="gender"
//             value={userData.gender}
//             onChange={handleInputChange}
//           >
//             <option value="">Select</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </Form.Control>
//         </Form.Group>

//         <Form.Group controlId="formAge">
//           <Form.Label>Age</Form.Label>
//           <Form.Control
//             type="number"
//             name="age"
//             value={userData.age}
//             onChange={handleInputChange}
//           />
//         </Form.Group>

//         {/* Submit Button */}
//         <Button variant="primary" type="submit" className="mt-3">
//           Update Profile
//         </Button>
//         <Button id='logout' style={{marginLeft:"20rem",marginTop:"-5rem",position:"absolute",backgroundColor:"red",color:"white"}}>Logout</Button>
//       </Form>
//     </Container>
//   );
// };

// export default Profile;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Add this line to import useNavigate

const Profile = () => {
  const navigate = useNavigate();  // Initialize navigate here
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);
  // States for form fields
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    age: '',
  });

  // State to show success/error messages
  const [message, setMessage] = useState('');

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");  // This will now work correctly
  };

  // Fetch user profile on page load
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get('http://localhost:4000/userProfile/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        // Populate the form with the fetched data
        setUserData({
          ...response.data.user,
        });
      } catch (error) {
        console.error('Error fetching profile:', error);
        setMessage('Error fetching profile data.');
      }
    };

    fetchUserProfile();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Handle form submission (PUT request to update profile)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('jwtToken');
      const response = await axios.put('http://localhost:4000/userProfile/profile', userData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setMessage(response.data.message); // Success message
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('Error updating profile.');
    }
  };

  return (
    <Container className="mt-5">
      <h2>Update Profile</h2>

      {/* Display success or error messages */}
      {message && <div className="alert alert-info">{message}</div>}

      {/* Profile Update Form */}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            disabled
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={userData.address}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formGender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            name="gender"
            value={userData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={userData.age}
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit" className="mt-3">
          Update Profile
        </Button>

        {/* Logout Button */}
        <Button 
          onClick={handleLogout} 
          style={{
            marginLeft: "20rem",
            marginTop: "-5rem",
            position: "absolute",
            backgroundColor: "red",
            color: "white"
          }}
        >
          Logout
        </Button>
      </Form>
    </Container>
  );
};

export default Profile;
