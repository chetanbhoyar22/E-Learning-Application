import React from 'react';

function ContactScreen() {
    return (
          <div>
            <br/>
            <h1 align="center">Contact Us</h1>
            <p align="center">Contact Information</p>
            <br/>
        <div class="row d-flex contact-info">
          <div class="col-md-4 d-flex">
          	<div class="bg-light align-self-stretch box p-4 text-center">
          		<h3 class="mb-4">Address</h3>
                  <a href="https://www.google.com/maps/place/Wisdom+Sprouts+-+Training+And+Development+Solutions/@18.591016,73.7531036,15z/data=!4m5!3m4!1s0x0:0x7745e38574812a65!8m2!3d18.591016!4d73.7531036" target="_blank">406 White Square, Hinjawadi Rd, Hinjawadi, Pune, Maharashtra - 411057</a>
	          </div>
          </div>
          <div class="col-md-4 d-flex">
          	<div class="bg-light align-self-stretch box p-4 text-center">
          		<h3 class="mb-4">Contact Number</h3>
	            <p><a href="tel://+917770043825">+91-7770043825</a></p>
	            <p><a href="tel://+918087610967">+91-8087610967</a></p>
	          </div>
          </div>
          <div class="col-md-4 d-flex">
          	<div class="bg-light align-self-stretch box p-4 text-center">
          		<h3 class="mb-4">Email</h3>
	            <p><a href="mailto:helpdesk@wisdomsprouts.in">helpdesk@wisdomsprouts.in</a></p>
	          </div>
          </div>
           
          
          </div>
      </div>
);
}
export default ContactScreen;
