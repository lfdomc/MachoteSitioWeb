import React from 'react';
import 'dayschedule-widget/dist/dayschedule-popup.css';
import 'dayschedule-widget/dist/dayschedule-widget.js';
import styled from 'styled-components';

// Declarar el tipo correcto para daySchedule
declare const daySchedule: {
  initPopupWidget: (config: { url: string }) => void;
};

const Button = styled.button`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  border: 2px solid #11417b;
  border-radius: 20px;
  background-color: #11417b;
  color: #fdfdfd;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffffff;
    border: 2px solid #11417b;
    color: #11417b;
    transform: scale(1.05);
  }
`;

export default class DayScheduleButton extends React.Component {
  handleClick = () => {
    if (typeof daySchedule !== 'undefined' && daySchedule.initPopupWidget) {
      daySchedule.initPopupWidget({ url: 'https://temsa.dayschedule.com' });
    } else {
      console.error('daySchedule no está definido o initPopupWidget no está disponible');
    }
  };

  render() {
    return (
      <Button
        onClick={this.handleClick}
        className="bg-indigo-500 text-white my-5 py-4 px-8 text-lg rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
      >
        Agendar Cita
      </Button>
    );
  }
}
