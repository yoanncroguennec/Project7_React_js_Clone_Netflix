import { Outlet } from 'react-router-dom';
// LAYOUTS
import { Navbar } from '.';
// STYLES
import { RootLayoutApp } from './StylesLayoutApp';

////////////////////// EXPORT FUNCTION //////////////////////
export default function LayoutApp() {

  return (
    <>
      <Navbar />
      <RootLayoutApp>
        <Outlet />
      </RootLayoutApp>
    </>
  );
}
