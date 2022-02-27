import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        <svg width="110" height="70" viewBox="0 0 660 191" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M51.4 190.4C44.4667 190.4 38.2667 189.467 32.8 187.6C27.4667 185.867 22.8 183.533 18.8 180.6C14.8 177.8 11.4667 174.667 8.8 171.2C6.13333 167.733 4.2 164.267 3 160.8L28 150.8C29.8667 156 32.9333 160 37.2 162.8C41.4667 165.733 46.2 167.2 51.4 167.2C59.6667 167.2 66.2 164.6 71 159.4C75.8 154.333 78.2 147.2 78.2 138V131.2H76.6C73.5333 135.467 69.4667 138.867 64.4 141.4C59.4667 143.8 53.6 145 46.8 145C40.9333 145 35.2 143.8 29.6 141.4C24.1333 139 19.2667 135.6 15 131.2C10.7333 126.667 7.26667 121.267 4.6 115C1.93333 108.733 0.6 101.733 0.6 94C0.6 86.2667 1.93333 79.2667 4.6 73C7.26667 66.6 10.7333 61.2 15 56.8C19.2667 52.2667 24.1333 48.8 29.6 46.4C35.2 44 40.9333 42.8 46.8 42.8C53.6 42.8 59.4667 44.0667 64.4 46.6C69.4667 49 73.5333 52.3333 76.6 56.6H78.2V46H103.2V137C103.2 145.267 101.933 152.667 99.4 159.2C96.8667 165.867 93.3333 171.467 88.8 176C84.2667 180.667 78.8 184.2 72.4 186.6C66.1333 189.133 59.1333 190.4 51.4 190.4ZM52.4 121.4C55.6 121.4 58.7333 120.8 61.8 119.6C65 118.4 67.8 116.667 70.2 114.4C72.6 112 74.5333 109.133 76 105.8C77.4667 102.333 78.2 98.4 78.2 94C78.2 89.6 77.4667 85.6667 76 82.2C74.5333 78.7333 72.6 75.8667 70.2 73.6C67.8 71.2 65 69.4 61.8 68.2C58.7333 67 55.6 66.4 52.4 66.4C49.2 66.4 46.0667 67 43 68.2C39.9333 69.4 37.2 71.2 34.8 73.6C32.4 76 30.4667 78.9333 29 82.4C27.5333 85.7333 26.8 89.6 26.8 94C26.8 98.4 27.5333 102.333 29 105.8C30.4667 109.133 32.4 112 34.8 114.4C37.2 116.667 39.9333 118.4 43 119.6C46.0667 120.8 49.2 121.4 52.4 121.4ZM125.536 144V0.799996H151.736V144H125.536ZM241.969 131.2H240.369C237.302 136.133 233.169 140.067 227.969 143C222.769 145.8 216.835 147.2 210.169 147.2C197.769 147.2 188.502 143.4 182.369 135.8C176.369 128.2 173.369 118.067 173.369 105.4V46H199.569V102.2C199.569 109.267 201.102 114.533 204.169 118C207.369 121.333 211.969 123 217.969 123C221.569 123 224.702 122.267 227.369 120.8C230.169 119.2 232.502 117.133 234.369 114.6C236.369 111.933 237.835 108.867 238.769 105.4C239.835 101.8 240.369 98 240.369 94V46H266.569V144H241.969V131.2ZM289.013 46H313.613V58.8H315.213C318.279 54 322.413 50.1333 327.613 47.2C332.946 44.2667 338.813 42.8 345.213 42.8C352.679 42.8 358.946 44.5333 364.013 48C369.079 51.4667 372.679 55.7333 374.813 60.8C377.879 55.8667 382.213 51.6667 387.813 48.2C393.413 44.6 400.213 42.8 408.213 42.8C414.213 42.8 419.413 43.8 423.813 45.8C428.213 47.6667 431.813 50.3333 434.613 53.8C437.546 57.2667 439.746 61.4667 441.213 66.4C442.679 71.2 443.413 76.4667 443.413 82.2V144H417.213V87C417.213 73.6667 411.746 67 400.813 67C397.346 67 394.279 67.8 391.613 69.4C388.946 70.8667 386.679 72.9333 384.813 75.6C383.079 78.1333 381.679 81.2 380.612 84.8C379.679 88.4 379.213 92.2667 379.213 96.4V144H353.013V87C353.013 73.6667 347.279 67 335.813 67C332.479 67 329.546 67.8 327.013 69.4C324.479 70.8667 322.346 72.9333 320.613 75.6C318.879 78.1333 317.546 81.2 316.613 84.8C315.679 88.4 315.213 92.2667 315.213 96.4V144H289.013V46ZM511.389 42.8C518.989 42.8 525.922 44.1333 532.189 46.8C538.589 49.3333 544.056 52.9333 548.589 57.6C553.256 62.1333 556.856 67.6 559.389 74C562.056 80.4 563.389 87.4 563.389 95C563.389 102.6 562.056 109.6 559.389 116C556.856 122.4 553.256 127.933 548.589 132.6C544.056 137.133 538.589 140.733 532.189 143.4C525.922 145.933 518.989 147.2 511.389 147.2C503.789 147.2 496.789 145.933 490.389 143.4C484.122 140.733 478.656 137.133 473.989 132.6C469.456 127.933 465.856 122.4 463.189 116C460.656 109.6 459.389 102.6 459.389 95C459.389 87.4 460.656 80.4 463.189 74C465.856 67.6 469.456 62.1333 473.989 57.6C478.656 52.9333 484.122 49.3333 490.389 46.8C496.789 44.1333 503.789 42.8 511.389 42.8ZM511.389 123C514.722 123 517.922 122.4 520.989 121.2C524.189 119.867 526.989 118 529.389 115.6C531.789 113.2 533.656 110.267 534.989 106.8C536.456 103.333 537.189 99.4 537.189 95C537.189 90.6 536.456 86.6667 534.989 83.2C533.656 79.7333 531.789 76.8 529.389 74.4C526.989 72 524.189 70.2 520.989 69C517.922 67.6667 514.722 67 511.389 67C507.922 67 504.656 67.6667 501.589 69C498.522 70.2 495.789 72 493.389 74.4C490.989 76.8 489.056 79.7333 487.589 83.2C486.256 86.6667 485.589 90.6 485.589 95C485.589 99.4 486.256 103.333 487.589 106.8C489.056 110.267 490.989 113.2 493.389 115.6C495.789 118 498.522 119.867 501.589 121.2C504.656 122.4 507.922 123 511.389 123ZM618.047 147.2C611.647 147.2 605.914 146.4 600.847 144.8C595.914 143.2 591.58 141.133 587.847 138.6C584.247 135.933 581.18 132.933 578.647 129.6C576.114 126.133 574.18 122.667 572.847 119.2L596.247 109.2C598.514 114.267 601.514 118.067 605.247 120.6C609.114 123 613.38 124.2 618.047 124.2C622.847 124.2 626.647 123.333 629.447 121.6C632.247 119.867 633.647 117.8 633.647 115.4C633.647 112.733 632.447 110.6 630.047 109C627.78 107.267 623.78 105.733 618.047 104.4L604.247 101.4C601.18 100.733 597.98 99.6667 594.647 98.2C591.447 96.7333 588.514 94.8667 585.847 92.6C583.18 90.3333 580.98 87.6 579.247 84.4C577.514 81.2 576.647 77.4667 576.647 73.2C576.647 68.4 577.647 64.1333 579.647 60.4C581.78 56.6667 584.647 53.5333 588.247 51C591.847 48.3333 596.047 46.3333 600.847 45C605.78 43.5333 611.047 42.8 616.647 42.8C625.98 42.8 634.314 44.6667 641.647 48.4C648.98 52 654.38 57.8 657.847 65.8L635.247 75C633.38 71.1333 630.647 68.3333 627.047 66.6C623.447 64.8667 619.847 64 616.247 64C612.514 64 609.247 64.8 606.447 66.4C603.647 67.8667 602.247 69.8 602.247 72.2C602.247 74.4667 603.38 76.2667 605.647 77.6C608.047 78.9333 611.247 80.1333 615.247 81.2L630.247 84.8C640.247 87.2 647.647 91.0667 652.447 96.4C657.38 101.6 659.847 107.8 659.847 115C659.847 119.267 658.847 123.333 656.847 127.2C654.847 131.067 651.98 134.533 648.247 137.6C644.647 140.533 640.247 142.867 635.047 144.6C629.98 146.333 624.314 147.2 618.047 147.2Z" fill="#0047FF"/>
        </svg>

        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        
        <NavBtn>
            <NavLink to='/services' activeStyle>Login</NavLink>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;