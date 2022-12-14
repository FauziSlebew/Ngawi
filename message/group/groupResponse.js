  const fs = require('fs')
  const { makeWelcome, makeGodbyee } = require('../../lib/SCRAPER/welcome.js')
  exports.groupResponse = async (client, update) => {  
   const metadata = await client.groupMetadata(update.id)   
   for (let participant of update.participants) {
    try{
       let metadata = await client.groupMetadata(update.id)
       let participants = update.participants
       for (let num of participants) {
          if (update.action == 'add') {       
         await makeWelcome(client, num, metadata.subject).then(async(res) => {   
         if(res){
         var button = [
             { 
              buttonId: `ahsudahlah`, 
              buttonText: { 
               displayText: `Welcomeπ` 
               }, type: 1 
              }
             ]             
         await client.sendMessage(
         update.id, 
         { 
         caption: `*Hello @${num.split("@")[0]} Welcome to ${metadata.subject}* \n\Jangan lupa kenalan sama admin disini\npenggemar jangan lupa patuhi aturan di grup ini*`, 
         image: res,
         buttons: button, 
         footer:  'Β© πππͺπ―π π©πΆπ»πγ©', mentions: [num] })        
         }
         })
         
         } 
        else 
        if (update.action == 'remove') {
        await makeGodbyee(client, num, metadata.subject).then(async(res) => {   
          if(res){
          var button = [
             { 
              buttonId: `ahsudahlah`, 
              buttonText: { 
               displayText: `Byeπ` 
               }, type: 1 
              }
             ]
        await client.sendMessage(
           update.id, 
          { 
           caption: `*@${num.split("@")[0]} leave the group ${metadata.subject}*\nKenapa dia keluar ya?, ummm...`, 
           image: res,
           buttons: button, 
           footer: 'Β© πππͺπ―π π©πΆπ»πγ©', 
           mentions: [num] 
             }
             )
             }
             })
             
            }
           }
        } catch (err) {
        console.log(err)
      }
    }   
  }

