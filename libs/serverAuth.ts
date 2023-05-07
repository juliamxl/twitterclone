import { NextApiRequest } from "next";//estudar isso
import { getSession } from 'next-auth/react'

const serverAuth = async (req: NextApiRequest) => {
    const session = await getSession({ req });

    if (!session?.user?.email) {//ve se a pessoa esta logada
        throw new Error('Not signed in')
    }

    const currentUser = await prisma?.user.findUnique({
        where:{
            email: session.user.email
        }
    })

    if(!currentUser){
        throw new Error('Not signed in')
    }

    return {currentUser}
}

export default serverAuth;

