import * as React from 'react';
import styled from '@emotion/styled';

const MenuDot = styled.span(() => ({
  fontSize: '36px',
  lineHeight: '8px',
  color: '#59595b',
}));

const TriggerWrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  // margin: '-2px 0 0',
}));

const Container = styled.div(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
}));

const CloseListener = styled.div(() => ({
  position: 'fixed',
  color: 'black',
  width: '100vw',
  height: '100vh',
  top: 0,
  left: 0,
}));

const ChildrenArea = styled.div(() => ({
  position: 'absolute',
  width: '160px',
  right: 0,
  top: '40px',
  backgroundColor: 'white',
  border: 'solid 1px #c3c3c2',
  padding: '8px 16px',
  borderRadius: '24px 0 24px 24px',
  boxShadow:
    'inset 1px 1px 7px rgba(255, 255, 255, 0.16), inset -1px -1px 7px rgba(0, 0, 0, 0.16)',
}));

export const DropMenu: React.FC<{ trigger?: React.ReactElement }> = ({
  children,
  trigger,
}) => {
  const [isOpenArea, setIsOpenArea] = React.useState(false);

  const triggerElm = trigger ? (
    trigger
  ) : (
    <>
      <MenuDot>.</MenuDot>
      <MenuDot>.</MenuDot>
      <MenuDot>.</MenuDot>
    </>
  );

  return (
    <Container>
      <TriggerWrapper style={{}} onClick={() => setIsOpenArea(!isOpenArea)}>
        {triggerElm}
      </TriggerWrapper>
      {isOpenArea && (
        <>
          <CloseListener style={{}} onClick={() => setIsOpenArea(false)} />
          <ChildrenArea>{children}</ChildrenArea>
        </>
      )}
    </Container>
  );
};
