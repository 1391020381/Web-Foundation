 import Sequelize from 'sequelize'
const sequelize = new Sequelize('nodelover','root','',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        idle:1000 // 连接在释放之前可以空闲的最长时间(以毫秒为单位)
    }
})
async function main() {
    try{
        await sequelize.authenticate()
        console.log('sequelize已经连接成功啦！')
        process.exit(0)
    }catch(e){
        console.log(e)
    }
}
main()