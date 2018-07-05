import { run } from 'testring';

run(async (context) => {
    await context.application.url('https://service.ringcentral.com/');
    await context.application.click('credential');
    await context.application.keys('1111111111');
    await context.application.click('loginCredentialNext');

    const attr = await context.application.getAttribute('password', 'type');

    if (attr === 'password') {
        console.log('test passed successfully');
    }
});

