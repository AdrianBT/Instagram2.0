// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { unstable_getServerSession} from 'next-auth/next'

export default async function handler(req, res, authOptions) {
  // res.status(200).json({ name: 'John Doe' })
  const session = await unstable_getServerSession(req, res);
  
  if (!session) {
    res.status(401).json({message: "you must login"})
  }
  return res.json({
    message: 'success'
  })
}
