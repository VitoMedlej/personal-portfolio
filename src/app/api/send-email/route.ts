
import client from '@/app/database/mongodb';
import { sendEmail } from '@/app/Utils/sendMail';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'


async function sendOrderConfirmationEmail(formState: any): Promise<boolean> {
  
  const applicant = formState;
  console.log('applicant: ', applicant);
  const htmlContent = `<html lang="en">
  <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Website Message</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f5f5f5;
              padding: 20px;
          }
          .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #fff;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0,0,0,0.1);
              padding: 20px;
          }
          .field {
              margin-bottom: 20px;
              display:flex;
              flex-direction: row;
              gap:1;
              padding-bottom: .25em
          }
          .field label {
              font-weight: bold;
              display: block;
              margin-bottom: 5px;
          }
          .field-value {
              margin-bottom: 10px;
              font-size: 16px;
          }
          .imgg {
            width : 100px;
            max-width:100px;
          }
      </style>
  </head>
  <body>
  <div class="container">
  <div class='cont'>
  <img class='imgg' src='https://ucarecdn.com/09c3a7b0-509a-485d-a988-7a8bae7dd575/logobia.jpg' />
  </div>
          <h2>You received a new message through the website from ${applicant?.Fname}</h2>
          <div class="field">
              <label htmlFor="fullName">Full Name:</label>
              <div class="field-value">${applicant.Fname}</div>
          </div>
      
          <div class="field">
              <label htmlFor="email">Email:</label>
              <div class="field-value">${applicant.email}</div>
          </div>
          <div class="field">
              <label htmlFor="message">Message:</label>
              <div class="field-value">${applicant.message}</div>
          </div>

      </div>
  </body>
</html>`;

  const options = {
      from: '"vito-medlej.com" <hello@vito-medlej.com>',
      to: 'hello@vito-medlej.com',
      subject: "New Message Through The Website!",
      html: htmlContent,
  };

  return  await sendEmail(options);
}

export  async function POST(req: NextRequest, res: NextApiResponse) {


  const {message} = await req.json()
  console.log('applicant: ', message);
  if (req.method === 'POST') {
    // Process a POST request
    if (!message) return NextResponse.json({success:false})
       const insertReq = await client.db("VITO").collection("Messages").insertOne({message});
      
    
    
    
    const result =  await sendOrderConfirmationEmail(message);
    console.log('result: ', result);

    if (insertReq?.acknowledged && result == true) {         
      return NextResponse.json({success:true});
     }


}
return NextResponse.json({success:false});

}