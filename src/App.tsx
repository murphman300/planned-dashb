import React from 'react';
import FiltersBoxComponent from "./components/FiltersBoxComponent";
import UserTableComponent from "./components/UsersTable/UserTableComponent";
import {ContentContainer, ContentSectionContainer} from "./components/ContentContainer";
import {HeaderMenuTitleP} from "./themes/components";
import {AppHeader, AppParentContainer} from "./themes/containers";
import {HandleMouseMove} from "./utils/listeners/mousemove";

/**
 * Inspired by float-ui's approach
 * ran into bugs living in the dependency itself...
 */
document.addEventListener("mousemove", HandleMouseMove);

function App() {

  return (
    <div className="App">
      <AppParentContainer>
        <AppHeader>
          <div style={{height: 100, width: 100}}>
            <img src={'/logo.svg'} alt={"planned-logo-alt"} style={{height: '100%', width: '100%'}}/>
          </div>
          <HeaderMenuTitleP>Planned test</HeaderMenuTitleP>
        </AppHeader>
        <ContentContainer>
          <ContentSectionContainer title={'Users'}>
            <FiltersBoxComponent/>
            <UserTableComponent/>
          </ContentSectionContainer>
        </ContentContainer>
      </AppParentContainer>
    </div>
  );
}

export default App;
