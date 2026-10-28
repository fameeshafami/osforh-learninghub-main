import React from 'react';

function getInitials(name) {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2);
}

export default function StudentCard({ student, className = '' }) {
  return (
    <div className={`pc ${className}`}>
      <div className="av">{getInitials(student.name)}</div>
      <div>
        <b>{student.name}</b>
        <em>{student.role}</em>
        <span>Placed at {student.company}</span>
      </div>
    </div>
  );
}
