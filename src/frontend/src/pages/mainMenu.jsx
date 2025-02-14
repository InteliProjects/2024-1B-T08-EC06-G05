import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import SugarZ3roLogo from '../assets/logo-sugarz3ro.svg';
import { useNavigate } from 'react-router-dom';
import ReboilerInput from '../components/reboilerInput/reboilerInput';

function MainMenu() {
  const navigate = useNavigate();

  const infoPage = () => {
    navigate("/helpScreen");
  };

  const handleStartClick = () => {
    const reboilerElement = document.getElementById('reboiler-input');
    if (reboilerElement) {
      reboilerElement.style.display = 'block';
    }
  };

  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center">
      <div className="mb-8">
        <img src={SugarZ3roLogo} alt="Logo SugarZ3ro" />
      </div>
      <div className='flex flex-col items-center space-y-4 md:flex-row md:space-x-10 md:mt-10' id='pop_up_div'>
        <button onClick={handleStartClick} className="bg-white text-black py-3 px-10 rounded-full font-bold hover:bg-gray-400 mt-2 md:mt-0">Start</button>
        <button className="bg-transparent text-white border-none hover:text-slate-400 mt-4 md:mt-0" style={{ borderRadius: '100%', borderWidth: '2px'}}>
          <FontAwesomeIcon className='text-4xl mb-3' onClick={infoPage} icon={faCircleInfo} />
        </button>
      </div>
      <div id="reboiler-input" style={{ display: 'none' }}>
        <ReboilerInput />
      </div>
    </div>
  );
}

export default MainMenu;
