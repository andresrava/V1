import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function HomeMenu() {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Crea una cuenta</Button>
      <Button variant="secondary">Ingresa a una cuenta con un código</Button>
      <Button variant="secondary">Ajustes</Button>
    </ButtonGroup>
  );
}

export default HomeMenu;