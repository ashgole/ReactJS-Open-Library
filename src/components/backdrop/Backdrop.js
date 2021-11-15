import { useContext } from "react";
import SidebarVisibilityContext from "../../store/SidebarVisibilityContext";


function Backdrop() {
  const [sidebarVisibility,, toggleSidebarVisibility] = useContext(SidebarVisibilityContext);

  return (
    <div
      className={`overlay sidebar-overlay ${sidebarVisibility ? 'overlay--show' : ''}`}
      id="sidebar-overlay"
      onClick={toggleSidebarVisibility}
    />
  )
}

export default Backdrop;