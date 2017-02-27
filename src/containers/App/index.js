import React from 'react';
import { Card } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CommentInputSection from '../../components/CommentInputSection';
import CommentSection from '../../components/CommentSection';
import UserSection from '../../components/UserSection';
import ImageSection from '../../components/ImageSection';

import './styles.css';

const App = () => {
  return (
    <MuiThemeProvider>
      <div className="container">
        <Card style={{ 'width': '80%' }}>

          <UserSection />
          <ImageSection />
          <CommentSection />
          <Divider style={{ 'marginLeft': '20px', 'marginRight': '20px' }} />
          <CommentInputSection />

        </Card>
      </div>
    </MuiThemeProvider>
  )
}

export default App;
