const faktory = require('faktory-worker');

(async() => {
    faktory.register('Project::Worker', async (message) => {
      console.log(message);
      {
        const client = await faktory.connect();          
        await client.push({
            jobtype: 'Project::Worker',
            args: ["Phhh Ppphhhh Is this thing on? " + message]
        });
        await client.close();
      }
    });

    await faktory.work({
        concurrency: 5,
        queues: [process.env.FAKTORY_QUEUE || 'default']
    });
})()