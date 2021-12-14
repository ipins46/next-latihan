import cookie from 'cookie'
import { API_URL } from "@/config/index";

export default async (req, res) => {
  if(req.method === 'POST') {
    //destroy cookie
    res.setHeader('Set-Cookie', cookie.serialize('token', data.jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      expires: new Date(0),
      maxAge: 60 * 60 * 24 * 7, //1 week
      sameSite: 'strict',
      path: '/'
    }))

    res.status(200).json({message: 'Success'})
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({message: `Method ${req.method} not allowed`})
  }
}