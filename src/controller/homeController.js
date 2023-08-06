import pool from "../configs/connectdb"

const getHomePage = async (req,res) => {
    //logic
    const [rows, fields] = await pool.execute('SELECT * FROM users')
    let check = await pool.execute('SELECT * FROM users')
   // console.log('check>>>',check)
    return  res.render('index.ejs',{dataUser:rows, test123:'DoVanTuan Test123'})
  
}


const getDetailPage = async (req,res) => {
  //logic
  //req.params tra ve object {userId:${id}}
  let id = req.params.userId
  const [user] = await pool.execute('SELECT * FROM users where id = ?',[id])
  //console.log('check request param',user)
  return res.send(JSON.stringify(user));
}

const getAboutPage = (req,res) => {
    //logic
    return  res.render('about.ejs')
}

const createNewUser = async(req,res) => {
    //logic
    console.log('check request',req.body)

    let {firstName,lastName,email,address} = req.body
    await pool.execute('insert into users(firstName,lastName,email,address) values (?,?,?,?)',[firstName, lastName, email, address])
    return res.redirect('/')
}

module.exports = {
    getHomePage, getAboutPage, getDetailPage, createNewUser
}