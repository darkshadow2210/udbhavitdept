import React, { useState, useEffect } from 'react';
import { db } from '../firebase';  // Import the Firestore instance from firebase.js
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import './TechTorque.css'

function Canvas() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  // Function to convert time (HH:MM) to minutes
  const convertTimeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;  // Convert to minutes
  };
  
  // Fetch leaderboard data from Firestore
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        // Get the data from the tech-torque collection, ordered by score
        const q = query(collection(db, 'canvas'), orderBy('score', 'desc'));
        const querySnapshot = await getDocs(q);
        
        // Map over the documents and set the leaderboard data
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        // Sort the data by allocatedTime
        const sortedData = data.sort((a, b) => {
          const timeA = convertTimeToMinutes(a.allocatedTime);
          const timeB = convertTimeToMinutes(b.allocatedTime);
          return timeA - timeB;  // Ascending order
        });
        
        setLeaderboardData(sortedData);  // Set the sorted data in the state
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchLeaderboard();  // Call the function to fetch data
  }, []);  // Empty dependency array to run the effect only once

  return (
    <div className="tech-torque">
      <h1>Canvas Leaderboard</h1>
      <h3 style={{marginTop: '10px'}}>Venue: IT Block, S203 Classroom</h3>
      <table className="leaderboard-table">
        <thead>
          <tr>
          <th>S. No</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Year</th>
            <th>Allocated Time</th>
            <th>Status</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.length > 0 ? (
            leaderboardData.map((entry, index) => (
              <tr key={entry.id}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.branch}</td>
                <td>{entry.year}</td>
                <td>{entry.allocatedTime}</td>
                <td>{entry.status}</td>
                <td>{entry.score}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Canvas;
