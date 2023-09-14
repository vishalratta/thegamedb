const authschema = require("./db/user");
class Controller {


    async postdata(req, res) {
        const Credential = req.body;
                    try {
                        Credential.password = bcrypt.hashSync(
                            Credential.password,
                            bcrypt.genSaltSync(config.saltRounds)
                        );
                    
                
                        // let results = Credential.Email;
                        // if(!results) throw new Error("Email is required");
                 
                        // let val = Math.floor(1000 + Math.random() * 9000);

                        const data = new authschema({
                            walletid: Credential.walletid,
                            playerid: Credential.playerid,
                            email: String(Credential.email).trim(),
                            playername:Credential.playername,
                            password: Credential.password,
                            totalbalance: Credential.totalbalance,
                            latestwinning:Credential.latestwinning
                        });
                        await data.save();
            
               
         
                        
                    } catch (err) {
               
                        return res.sendError(
                            "something went wrong",
                            err
                        );
                    }
                }
            






        // const result = await userServices.walletConnect(Credential);
        // res.json({result})

    }

    // async getdata(req, res) {
    //     const Credential = req.body;
    //     const authHeader = req.headers['authorization'];
    //     const result = await userServices.uploadProfile(Credential,authHeader);
    //     res.json({result})

    // }

   

module.exports = new Controller;