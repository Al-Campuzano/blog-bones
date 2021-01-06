import React from 'react'
import BlurbFooter from '../BlurbFooter/BlurbFooter';


function PostBlurb({title}) {
  return (
    <div>
      <h3>{title}</h3>
      <p>
        Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise.
      </p>
      <BlurbFooter />
    </div>
  );
}

export default PostBlurb;
