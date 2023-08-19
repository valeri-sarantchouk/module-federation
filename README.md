Microfrontend (MFE) sample app implemented using plain JavaScript and Webpack Module Federation.

Plain JavaScript implemtation is used to demonstrate module federation in the simplest way possible. To see MFE rouring and vendor module sharing, see Angular and React examples.

This monorepo contains all components that go into assembly of a microfrontend app:
  * Host app:
  * Remote apps: 
      * Header
      * Navigation
      * Footer
      * Button

To run it:

    npm install
    npm run start

This should open the assembled app in new browser tab at:
    http://localhost:3000/

To build all app in the monorepo sequentially:
  > `npm run build`

or
  > `npm run build:all`

The latter utilizes npm workspaces to build all listed projects.

Each remote app and host can also be run independently:

    npm run start:host  
    npm run start:header
    npm run start:footer
    npm run start:button
    npm run start:nav

Remote apps can be further separatd into their own code repositories and assigned different teams to maintain and deploy them.
