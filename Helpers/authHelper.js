import bcrypt from 'bcrypt';

export const hashedpassword = async( password)=>{

    try {
        const saltRounds = 10;
        const hashed= await bcrypt.hash(password,saltRounds);
        return hashed;
    } catch (error) {
        console.log(error);   
    }
}

//for comparing passwords

export const comparePassword = async(  hashed,password)=>{
        return  await bcrypt.compare(hashed,password);
}