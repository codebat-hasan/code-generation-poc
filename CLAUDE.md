# Project Structure
/src
    /components
    /pages
/public
    /assets

components have all the reusable react compoents
Page have all the page visible on route

# Technology Stack
Nextjs 15.0
Reactjs 19.0
Typescript 5
Tailwindcss 4

# Project-wide guidelines
Follow BEM naming convention for CSS classes
Use functional components with TypeScript interfaces for props
Using nextjs generate code according to that
Properly identify image and icon if it is icon create it in svg if it is image use nextjs <Image tag
Use assets (ex- icons) from folder /public/assets

# Component structure
When asked to create a new component
All components should have prop validation
Place components in /components/{ComponentName}.tsx structure
while creating component do not provide any hardcoded height/width
If component consits another component use existing component code do not regnerate it


# Styling guidelines
Use Tailwind CSS utility classes for styling
Ensure to use tailwind grid layout if possible
Ensure all interactive elements have proper focus states

# Page generation guideline
when asked to create a new page
generate page inside /pages directory as it is in nextjs
always try to use exting component from /component folder for exiting component
Page header is commmon across all the project use that header only do not regenrate the header

# Design Context
  colorPrimary: '#3ABFF8',
  colorSecondary: '#6419E6',

  // UI
  appBg: '#222630',
  appContentBg: '#191D24',
  appBorderColor: '#323945',

  // Text Colors
  textColor: '#A6ADBA',

  // Toolbar default and active colors
  barTextColor: '#A6ADBA',
  barSelectedColor: '#C3D0EA',
  barBg: '#191D24',
