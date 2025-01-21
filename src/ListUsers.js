import React from 'react';
import './ListUsers.css'; // Assuming styles are properly named for ListUsers

export default function ListUsers({ users, handleUserSelect }) {
    return (
        <div className="user-list">
            <h3>Select a user to chat with</h3>
            <ul>
                {users.map((user) => (
                    <li
                        key={user}
                        onClick={() => handleUserSelect(user)}
                    >
                        {user}
                    </li>
                ))}
            </ul>
        </div>
    );
}
