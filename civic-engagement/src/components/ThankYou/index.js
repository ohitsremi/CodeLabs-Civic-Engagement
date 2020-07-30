import React from 'react';
import { Link } from 'react-router-dom';
import "bootswatch/dist/minty/bootstrap.min.css";
import * as ROUTES from '../../constants/routes'; 

const ThankYouPage = () => (
    <div class="container-fluid">
    <p>
      Thank you for submitting a volunteer opportunity to <span class="text-primary">EngageForChange</span>.
    </p>
    <p>You will recieve an email containing the contact information for volunteers interested in volunteering for your organization.</p>
    <p>Keep an eye out for emails from us vontaining more volunteer info moving forward</p>
  </div>
  );
   
   
  export default ThankYouPage;