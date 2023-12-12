import React, { useEffect, useState } from 'react';
import dynamicImports from '../../../DynamicImports.jsx'; // Import the dynamic import module

function IconsDynamic({iconName}) {
    const [iconsMaterial, setIconsMaterial] = useState(null);

    useEffect(() => {
        // When the component mounts, dynamically import the icons package
        dynamicImports.importIconsMaterial().then((icons) => {
            setIconsMaterial(icons); // Set the imported icons package
        }).catch((error) => {
            // Handle any import errors here
            console.error('Error importing icons material:', error);
        });
    }, []);

    // Once iconsMaterial is loaded, you can use it in your component
    // For example:
    return (
        <div>
            {iconsMaterial && (
                // Use icons from the dynamically imported package
                <iconsMaterial.Badge />
            )}
        </div>
    );
}

export default IconsDynamic;
