import pool from "../configs/connectdb"

const getHomePage = async (req,res) => {
    const [rows, fields] = await pool.execute('select * from users')
   // let check = await pool.execute('SELECT * FROM users')
   // console.log('check>>>',check)
    return  res.render('index.ejs',{dataUser:rows, test123:'Created by Me 8/5/2023'})
}

const getDetailPage = async (req,res) => {
  //req.params tra ve object {userId:${id}}
  let id = req.params.userId
  const [user] = await pool.execute('select * from users where id = ?',[id])
  //console.log('check request param',user)
  return res.send(JSON.stringify(user));
}

const getAboutPage = (req,res) => {
    return  res.render('about.ejs')
}

const createNewUser = async(req,res) => {
    console.log('check request',req.body)
    let {firstName,lastName,email,address} = req.body
    await pool.execute('insert into users(firstName,lastName,email,address) values (?,?,?,?)',[firstName, lastName, email, address])
    return res.redirect('/')
}

const deleteUser = async(req,res) => {
    let userId = req.body.userIdDelete;
    await pool.execute('delete from users where id = ?',[userId])
    return res.redirect('/')
}

const getEditUser = async(req,res) => {
  let userId = req.params.id;
  let [[user]] = await pool.execute('select * from users where id = ?',[userId])
  //console.log('check update user >>> ',user)
  return res.render('updateUser.ejs',{data:user})
}

const postUpdateUser = async(req,res) => {
    console.log('check request update >>> ',req.body)
    let {firstName,lastName,email,address,id} = req.body
    await pool.execute('update users set firstName=?,lastName=?,email=?,address=? where id = ?',[firstName, lastName, email, address, id])
    return res.redirect('/')
    //return res.send('Hello update user')
}

module.exports = {
    getHomePage, 
    getAboutPage, 
    getDetailPage, 
    createNewUser, 
    deleteUser, 
    getEditUser, 
    postUpdateUser
}