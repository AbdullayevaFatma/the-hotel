import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
&, &.light-mode {
  --color-grey-0: #fefefe;          
  --color-grey-50: #f7f9f9;          
  --color-grey-100: #e9ecef;         
  --color-grey-200: #ced4da;        
  --color-grey-300: #adb5bd;         
  --color-grey-400: #868e96;        
  --color-grey-500: #495057;         
  --color-grey-600: #343a40;        
  --color-grey-700: #212529;        
  --color-grey-800: #121416;        
  --color-grey-900: #0a0c0d;        
  
  --color-blue-100: #d4e9f9;         
  --color-blue-700: #1a73e8;         
  
 --color-green-100: #e2f0e9;       
  --color-green-700: #2a5d3a;       
  
  --color-yellow-100: #fff9e6;       
  --color-yellow-700: #f0c419;       
  
  --color-silver-100: #e8e9eb;       
  --color-silver-700: #6c757d;       
  
  --color-indigo-100: #d7dffb;      
  --color-indigo-700: #4b47a1;       
  
--color-red-100: #fce9e7;          
--color-red-700: #c97439;        
--color-red-800: #a85f2d;    
  
  --backdrop-color: rgba(255, 255, 255, 0.95);
  
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.07);
  --shadow-md: 0 0.6rem 3rem rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 3rem 4rem rgba(0, 0, 0, 0.15);
  
  --image-grayscale: 0;
  --image-opacity: 100%;
}


&.dark-mode {
  --color-grey-0: #111517;           
  --color-grey-50: #1e242c;          
  --color-grey-100: #2b3340;
  --color-grey-200: #394254;
  --color-grey-300: #4c5a71;
  --color-grey-400: #61708c;
  --color-grey-500: #7c8aa3;
  --color-grey-600: #97a4bb;
  --color-grey-700: #b2bed4;
  --color-grey-800: #cdd7eb;
  --color-grey-900: #e9f0fb;        
  
  --color-blue-100: #1a3f72;         
  --color-blue-700: #82aaff;        
  
 --color-green-100: #1b3c2f;        
  --color-green-700: #6bb591;        
  
  --color-yellow-100: #5c5200;       
  --color-yellow-700: #ffda44;       
  
  --color-silver-100: #3a3f47;       
  --color-silver-700: #c3cad6;       
  
  --color-indigo-100: #2a2f60;      
  --color-indigo-700: #8c93d6;       
  
--color-red-100: #f2e9e3ff;        
--color-red-700: #c67a1dff;         
--color-red-800: #b57025;         
  --backdrop-color: rgba(0, 0, 0, 0.85);
  
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.7);
  --shadow-md: 0 0.6rem 3rem rgba(0, 0, 0, 0.6);
  --shadow-lg: 0 3rem 4rem rgba(0, 0, 0, 0.75);
  
  --image-grayscale: 15%;
  --image-opacity: 90%;
}

--color-brand-50:  #fefce8;  
--color-brand-100: #fef9c3;  
--color-brand-200: #fef08a;  
--color-brand-300: #fde047;  
--color-brand-400: #facc15;  
--color-brand-500: #eab308;  
--color-brand-600: #ca8a04;  
--color-brand-700: #a16207;   
--color-brand-800: #854d0e;   
--color-brand-900: #713f12;  

--border-radius-tiny: 3px;
--border-radius-sm: 5px;
--border-radius-md: 7px;
--border-radius-lg: 9px;


}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}


button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;


}

`;

export default GlobalStyles;


