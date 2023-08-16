Microfrontend (MFE) sample app implemented using plain JavaScript and Webpack Module Federation.

Plain JavaScript implemtation is used to demonstrate module federation in the simplest way possible.

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

To build all projects in the monorepo sequentially:

    npm run build  

or (same kind of sequential builds, but now using npm workspaces):

    npm run build:all

It should open the host app in new browser tab at:

    http://localhost:3000/

Each remote app and host can also be run independently:

    npm run start:host  
    npm run start:header
    npm run start:footer
    npm run start:button
    npm run start:nav

Being able to manage remote apps independenly allow to put them in their own source repositories and assign different teams to maintain them.
