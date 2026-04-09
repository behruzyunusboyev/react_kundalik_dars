function UserCard(){
    const foydalanuchilar =[
        {id:1, ism: "Behruz", kasb: "Dasturchi", rasm: "./assets/props/rasm4.jpg"},
        {id:2, ism: "Sarvar", kasb: "Dasturchi", rasm: "./assets/props/rasm5.jpg"},
        {id:3, ism: "Nurbek", kasb: "Dasturchi", rasm: "./assets/props/rasm6.jpg"},
        {id:4, ism: "Asilbek", kasb: "Dasturchi", rasm: "./assets/props/rasm7.jpg"},
    ];
    return(
        <div style={{width:'100%', border:'1px solid white', borderRadius:'8px', margin:"10px"}}>
            {
                foydalanuchilar.map((user) =>(
                    <UserCard 
                    key={user.id}
                    ism={user.ism}
                    kasb={user.kasb}
                    rasm={user.rasm}
                    />
                ))
            }
        </div>
    )
}
export default UserCard;