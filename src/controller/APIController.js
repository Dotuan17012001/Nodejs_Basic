import pool from '../configs/connectdb'

const getAllUsers = async (req, res) => {
    const [rows,fields] = await pool.execute('select * from users')
    return res.status(200).json({
        message: 'Hello-1, this is api get all user :)',
        data: rows
    })
}

const createNewUser = async(req, res) => {
    let {firstName, lastName, email, address} = req.body
    if(!firstName || !lastName || !email || !address){
        return res.status(200).json({
            message:'Missing required params :('
        })
    }
    await pool.execute('insert into users(firstName,lastName,email,address) values (?,?,?,?)',
        [firstName, lastName, email, address])
    return res.status(200).json({
        message:'Hello-2, this is api create user :)'
    })
}

const updateUser = async (req,res) => {
    let {firstName, lastName, email, address, id} = req.body

    if(!firstName || !lastName || !email || !address || !id){
        return res.status(200).json({
            message:'Missing required params :('
        })
    }

    await pool.execute('update users set firstName=?,lastName=?,email=?,address=? where id = ?',
        [firstName, lastName, email, address, id])
    
    return res.status(200).json({
        message:'Hello-3, this is api update user :)'
    })
}

const deleteUser = async (req,res) => {
    let userId = req.params.id;
    if(!userId){
        return res.status(200).json({
            message:'Missing required params :('
        })
    }
    await pool.execute('delete from users where id = ?',[userId])
    
    return res.status(200).json({
        message:'Hello-4, this is api delete user :)'
    })
}
// exports them s :)
module.exports = {
    getAllUsers, createNewUser, updateUser, deleteUser
}