import { SES } from '@aws-sdk/client-ses';

const ses = new SES({ });

export const sendEmail = async (subject: any, content: any) => {
  const fromAddress = process.env.FROM_ADDRESS;
  if (!fromAddress) {
    throw new Error('Missing FROM_ADDRESS');
  }
  const toAddress = process.env.TO_ADDRESS;
  if (!toAddress) {
    throw new Error('Missing TO_ADDRESS');
  }
  const emailParams = {
    Source: fromAddress,
    Destination: {
      ToAddresses: [toAddress],
    },
    Message: {
      Subject: { Data: subject },
      Body: { Text: { Data: content } },
    },
  };
  const response = await ses.sendEmail(emailParams);
  console.log(response);
};
