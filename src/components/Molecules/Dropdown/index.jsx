import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Pic from '../../Atoms/Pic';
import DropMenu from '../../Atoms/DropMenu';
import LoginModal from '../../Organisms/LoginModal';
import { AppContext } from '../../../State/Provider';
import useLogin from '../../../Hooks/useLogin';

const DropdownSC = styled.div`
  position: relative;
  display: inline-block;
`;

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [img, setImg] = useState('/profile.svg');
  const { state } = useContext(AppContext);
  const { user } = useLogin();
  const handleStatusDropdown = (stateModal) => () => {
    setOpen(stateModal);
  };

  useEffect(() => {
    setLoggedIn(state.isUserLoggedIn);
  }, [state.isUserLoggedIn]);

  useEffect(() => {
    const userAvatar =
      loggedIn && user !== undefined ? `${user?.avatarUrl}` : '/profile.svg';
    setImg(userAvatar);
  }, [loggedIn, user]);

  return (
    <div>
      <DropdownSC
        onMouseOver={handleStatusDropdown(true)}
        onMouseLeave={handleStatusDropdown(false)}
      >
        <Pic imgSrc={img} alt="Profile" />
        {open && <DropMenu loggedIn={loggedIn} setModalOpen={setModalOpen} />}
      </DropdownSC>
      <LoginModal modalOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Dropdown;
