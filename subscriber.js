const amqp = require('amqplib/callback_api')
amqp.connect('amqp://localhost',(err,connection) => {
    if(err){
        throw err
    }
    connection.createChannel((err,channel)=>{
        if(err){
            throw err
        }
        let queueName = "test-queue"
        channel.assertQueue(queueName,{
            durable : false
        })
       channel.consume(queueName,(msg)=>{
        console.log(`recieved : ${msg.content.toString()}`)
       },{
        noAck:true
       })
    })
})