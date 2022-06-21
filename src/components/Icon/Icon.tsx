import React, { Suspense, lazy, useState } from "react";
// import icons from '../svgComponents/IconsSet'
const Icon = ({ name }) => {
  const [isModalDisplayed, setModalDisplayed] = useState(false);
  const [ModalComponent, setModalComponent] = useState(null);

  

  const getSVGComponentNameFromSVGName = (name) => {
    const removedUndeScore = name.split("_");
    const toUpperCase = removedUndeScore.map(
      (i) => i.charAt(0).toUpperCase() + i.slice(1)
    );
    return toUpperCase.join("");
  };

  const iconComponentName = getSVGComponentNameFromSVGName(name);

  const IconComponent = lazy(
    () => name && name.length !== 0 && import(`../../svgComponents/${iconComponentName}`)
  );
  
  return (
    name &&
    name.length !== 0 && (
      <i>
        <Suspense fallback={<> </>}>
          <IconComponent />
        </Suspense>
      </i>
    )
  );
};

export default Icon;
