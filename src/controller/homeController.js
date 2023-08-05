import connection from "../configs/connectdb"
const getHomePage = (req,res) => {
    //logic
    let data = [];
    connection.query(
        'SELECT * FROM `users`',
        function(err, results, fields) {
           //console.log('check mysql',results); // results contains rows returned by server
           results.map((row)=>{
            data.push(
            {id:row.id,
             email:row.email,
             address: row.address,
             firstName:row.firstName,
             lastName:row.lastName
            }

          )})
          console.log('>>> check data inside', data)
          return  res.render('index.ejs',{dataUser:data, test123:'DoVanTuan Test123'})
          // console.log('>>> check data2', JSON.stringify(data))
        }
      );
       
   
}
const getAboutPage = (req,res) => {
    //logic
    return  res.render('about.ejs')
}

module.exports = {
    getHomePage, getAboutPage
}